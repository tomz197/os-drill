import { Link } from "lucide-react";

export function AboutPage() {
  return (
    <div className="max-w-prose w-full mx-auto">
      <h1 className="text-xl font-semibold text-center">O nás</h1>
      <div className="h-[0.1rem] w-full bg-border rounded-full my-4" />
      <div className="grid gap-2">
        <p className="inline">
          Táto aplikácia bola vytvorená{" "}
          <a
            href="https://zifcak.dev"
            target="_blank"
            className="underline hover:text-blue-500"
          >
            Tomášom Žifčákom
            <Link className="w-3 h-3 inline self-center" />
          </a>{" "}
          pretože neexistoval žiadny spôsob ako si preveriť svoje znalosti z
          predmetu PB152(Operačné systémy) v zkúškovej/zápočtovej forme.
        </p>
        <p>
          Kód tejto aplikácie je otvorený a je dostupný na{" "}
          <a
            href="https://github.com/tomz197/os-drill"
            className="underline hover:text-blue-500"
            target="_blank"
          >
            Github
            <Link className="w-3 h-3 inline self-center" />
          </a>
          .
        </p>
        <p>
          V prípade akýchkoľvek problémov, nápadov na vylepšenie alebo
          akýchkoľvek otázok napíš na{" "}
          <a
            href="https://discord.gg/ztabDQ4jNv"
            className="underline hover:text-blue-500"
            target="_blank"
          >
            Discord
            <Link className="w-3 h-3 inline self-center" />
          </a>{" "}
          alebo vytvor issue, pull request alebo diskusiu na Githube.
        </p>
        <p className="font-semibold">Každá pomoc je vítaná!</p>
      </div>
    </div>
  );
}
