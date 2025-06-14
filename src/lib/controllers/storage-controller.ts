import { Result } from "../common/types";

export type StatementStats = {
  statementId: string; // UUID of the statement
  totalAttempts: number; // Total number of attempts
  correctAttempts: number; // Number of correct attempts
  lastAttempted: string; // ISO date string of last attempt
  lastAttemptCorrect: boolean; // Whether the last attempt was correct
};

export type StoredSectionStats = {
  sectionId: string; // UUID of the section
  totalAttempts: number; // Total number of attempts
  correctAttempts: number; // Number of correct attempts
  lastAttempted: string; // ISO date string of last attempt
  lastAttemptCorrect: boolean; // Whether the last attempt was correct
  statements: { [statementId: string]: StatementStats }; // Map of statement IDs to their stats
  rightStatements: number; // Number of statement IDs with correct last attempt
  wrongStatements: number; // Number of statement IDs with incorrect last attempt
};

export type StoredSectionStatsMap = {
  [sectionId: string]: StoredSectionStats;
};

const STORAGE_KEY = "os-drill-user-stats";

const STORAGE_VERSION = "2"; // if incremented, the stats need to be recalculated
const STORAGE_VERSION_KEY = "os-drill-user-stats-version";

export class StorageController {
  private static instance: StorageController;
  private stats: StoredSectionStatsMap = {};

  private constructor() {
    this.loadStats();
  }

  public static getInstance(): StorageController {
    if (!StorageController.instance) {
      StorageController.instance = new StorageController();
    }
    return StorageController.instance;
  }

  private loadStats(): void {
    try {
      const storedStats = localStorage.getItem(STORAGE_KEY);
      if (storedStats) {
        this.stats = JSON.parse(storedStats);
      }

      const storedVersion = localStorage.getItem(STORAGE_VERSION_KEY);
      if (storedVersion !== STORAGE_VERSION) {
        this.recalculateAllSections();
        localStorage.setItem(STORAGE_VERSION_KEY, STORAGE_VERSION);
      }
    } catch (error) {
      console.error("Failed to load stats from storage:", error);
      this.stats = {};
    }
  }

  private saveStats(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.stats));
    } catch (error) {
      console.error("Failed to save stats to storage:", error);
    }
  }

  private recalculateSectionStatementCounts(sectionId: string): void {
    const section = this.stats[sectionId];
    if (!section) return;

    let rightCount = 0;
    let wrongCount = 0;

    for (const statement of Object.values(section.statements)) {
      if (statement.lastAttemptCorrect) {
        rightCount++;
      } else {
        wrongCount++;
      }
    }

    section.rightStatements = rightCount;
    section.wrongStatements = wrongCount;
  }

  public recordAttempt(
    sectionId: string,
    statementId: string,
    isCorrect: boolean,
  ): Result<void> {
    try {
      if (!this.stats[sectionId]) {
        this.stats[sectionId] = {
          sectionId,
          totalAttempts: 0,
          correctAttempts: 0,
          lastAttempted: new Date().toISOString(),
          lastAttemptCorrect: false,
          statements: {},
          rightStatements: 0,
          wrongStatements: 0,
        };
      }

      if (!this.stats[sectionId].statements[statementId]) {
        this.stats[sectionId].statements[statementId] = {
          statementId,
          totalAttempts: 0,
          correctAttempts: 0,
          lastAttempted: new Date().toISOString(),
          lastAttemptCorrect: false,
        };
        if (isCorrect) {
          this.stats[sectionId].rightStatements++;
        } else {
          this.stats[sectionId].wrongStatements++;
        }
      } else {
        if (
          isCorrect &&
          !this.stats[sectionId].statements[statementId].lastAttemptCorrect
        ) {
          this.stats[sectionId].rightStatements++;
          this.stats[sectionId].wrongStatements--;
        } else if (
          !isCorrect &&
          this.stats[sectionId].statements[statementId].lastAttemptCorrect
        ) {
          this.stats[sectionId].wrongStatements++;
          this.stats[sectionId].rightStatements--;
        }
      }

      // Update section stats
      this.stats[sectionId].totalAttempts++;
      if (isCorrect) {
        this.stats[sectionId].correctAttempts++;
      }
      this.stats[sectionId].lastAttempted = new Date().toISOString();
      this.stats[sectionId].lastAttemptCorrect = isCorrect;

      // Update statement stats
      this.stats[sectionId].statements[statementId].totalAttempts++;
      if (isCorrect) {
        this.stats[sectionId].statements[statementId].correctAttempts++;
      }
      this.stats[sectionId].statements[statementId].lastAttempted =
        new Date().toISOString();
      this.stats[sectionId].statements[statementId].lastAttemptCorrect =
        isCorrect;

      this.saveStats();
      return [undefined, null];
    } catch (error) {
      return [
        null,
        error instanceof Error ? error : new Error("Failed to record attempt"),
      ];
    }
  }

  public getStats(sectionId: string): Result<StoredSectionStats> {
    try {
      const stats = this.stats[sectionId];
      if (!stats) {
        return [null, new Error("No stats found for section")];
      }
      return [stats, null];
    } catch (error) {
      return [
        null,
        error instanceof Error ? error : new Error("Failed to get stats"),
      ];
    }
  }

  public getStatementStats(
    sectionId: string,
    statementId: string,
  ): Result<StatementStats> {
    try {
      const sectionStats = this.stats[sectionId];
      if (!sectionStats) {
        return [null, new Error("No stats found for section")];
      }

      const statementStats = sectionStats.statements[statementId];
      if (!statementStats) {
        return [null, new Error("No stats found for statement")];
      }

      return [statementStats, null];
    } catch (error) {
      return [
        null,
        error instanceof Error
          ? error
          : new Error("Failed to get statement stats"),
      ];
    }
  }

  public getAllStats(): Result<StoredSectionStatsMap> {
    try {
      return [this.stats, null];
    } catch (error) {
      return [
        null,
        error instanceof Error ? error : new Error("Failed to get all stats"),
      ];
    }
  }

  public clearStats(): Result<void> {
    try {
      this.stats = {};
      this.saveStats();
      return [undefined, null];
    } catch (error) {
      return [
        null,
        error instanceof Error ? error : new Error("Failed to clear stats"),
      ];
    }
  }

  public setStats(stats: StoredSectionStatsMap): Result<void> {
    try {
      for (const [, sectionStats] of Object.entries(stats)) {
        if (!sectionStats.sectionId || !sectionStats.statements) {
          return [
            null,
            new Error("Invalid stats format: missing required fields"),
          ];
        }

        for (const [, statementStats] of Object.entries(
          sectionStats.statements,
        )) {
          if (
            !statementStats.statementId ||
            typeof statementStats.totalAttempts !== "number" ||
            typeof statementStats.correctAttempts !== "number" ||
            typeof statementStats.lastAttempted !== "string" ||
            typeof statementStats.lastAttemptCorrect !== "boolean"
          ) {
            return [
              null,
              new Error("Invalid stats format: invalid statement stats"),
            ];
          }
        }
      }

      this.stats = stats;
      this.saveStats();
      return [undefined, null];
    } catch (error) {
      return [
        null,
        error instanceof Error ? error : new Error("Failed to set stats"),
      ];
    }
  }

  public recalculateAllSections(): Result<void> {
    try {
      for (const sectionId of Object.keys(this.stats)) {
        this.recalculateSectionStatementCounts(sectionId);
      }
      this.saveStats();
      return [undefined, null];
    } catch (error) {
      return [
        null,
        error instanceof Error
          ? error
          : new Error("Failed to recalculate sections"),
      ];
    }
  }

  public getCopyableStats(): Result<string> {
    try {
      return [JSON.stringify(this.stats, null, 2), null];
    } catch (error) {
      return [
        null,
        error instanceof Error
          ? error
          : new Error("Failed to get copyable stats"),
      ];
    }
  }
}

