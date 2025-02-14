import { CreditData } from "./types";

export const creditData: CreditData = [
  {
    uuid: "e42328b0-abcd-4859-b969-112b81be8d32",
    title: "Část 1: Virtualizace paměti",
    statements: [
      {
        correct:
          "Virtuální adresní prostor umožňuje izolaci procesů a ochranu paměti.",
        incorrect:
          "Virtuální adresní prostor vždy odpovídá fyzickému adresnímu prostoru.",
        uuid: "e42328b0-abcd-4859-b969-112b81be8d31",
      },
      {
        correct:
          "Překlad adres mezi virtuálním a fyzickým prostorem je řízen jednotkou správy paměti (MMU).",
        incorrect:
          "Překlad adres mezi virtuálním a fyzickým prostorem je realizován operačním systémem pomocí softwarových tabulek.",
        uuid: "9d678bdb-54a0-4e02-bc05-5806c2864e67",
      },
      {
        correct:
          "Stránkování umožňuje přidělit více paměti, než kolik je fyzicky dostupné.",
        incorrect:
          "Stránkování zajišťuje, že proces nikdy nepřekročí svou přidělenou fyzickou paměť.",
        uuid: "c3328f73-5eaf-4d64-a641-bc7374c5e9c3",
      },
      {
        correct:
          "Při překladu virtuální adresy se využívají stránkové tabulky uložené v operační paměti.",
        incorrect:
          "Virtuální adresy jsou přímo interpretovány jako fyzické adresy, takže stránkové tabulky nejsou nutné.",
        uuid: "cfae8517-f6c6-4017-9866-436fb313b857",
      },
      {
        correct:
          "Každý proces má obvykle svůj vlastní virtuální adresní prostor.",
        incorrect:
          "Všechny procesy v operačním systému sdílejí stejný virtuální adresní prostor.",
        uuid: "2643f5be-3231-4572-ac40-75bdd96cd38b",
      },
      {
        correct:
          "Výpadek stránky nastane, pokud proces přistupuje k neplatné nebo odložené stránce.",
        incorrect:
          "Výpadek stránky nastane pouze při pokusu o přístup k chráněné oblasti operačního systému.",
        uuid: "6e1a2e33-d950-4679-aa84-51ccd692eb1a",
      },
      {
        correct:
          "Při přepnutí procesu se změní aktivní stránková tabulka uložená v procesoru.",
        incorrect:
          "Při přepnutí procesu zůstává stránková tabulka stejná a sdílená mezi procesy.",
        uuid: "e1561d3b-90cb-474a-bad4-74d945cd615e",
      },
      {
        correct:
          "Externí stránkování umožňuje odkládání neaktivních stránek na disk.",
        incorrect:
          "Externí stránkování omezuje procesy na používání pouze fyzické paměti RAM.",
        uuid: "ec0dd4c9-4765-4eff-8665-e4fc6f78eded",
      },
      {
        correct:
          "Copy-on-write umožňuje sdílení stránek mezi procesy, dokud nedojde k zápisu.",
        incorrect:
          "Copy-on-write znamená, že každý proces vždy obdrží svou unikátní kopii paměti.",
        uuid: "4fe52475-7933-4e82-831b-879234ccf059",
      },
      {
        correct:
          "Virtuální adresní prostor může obsahovat stránky, které nejsou namapovány na fyzickou paměť.",
        incorrect:
          "Každá virtuální adresa musí mít odpovídající fyzickou paměťovou buňku.",
        uuid: "a0d3074e-7bb1-4ffa-afe6-dcda74ea49db",
      },
      {
        correct:
          "Stránkové tabulky mohou být vícestupňové pro efektivní správu velkých adresních prostorů.",
        incorrect:
          "Stránkové tabulky jsou vždy jednorozměrné a obsahují záznamy pro každou virtuální adresu.",
        uuid: "aae03174-bb16-4e1f-8dc1-19bb280b7f52",
      },
      {
        correct: "Virtuální paměť umožňuje bezpečné sdílení kódu mezi procesy.",
        incorrect:
          "Virtuální paměť vždy izoluje kód mezi procesy, takže sdílení není možné.",
        uuid: "dc45aa1f-ee46-4a59-8159-18bd525e2855",
      },
      {
        correct:
          "Procesor používá TLB (Translation Lookaside Buffer) k urychlení překladu adres.",
        incorrect:
          "Procesor vždy provádí úplný překlad adres pomocí stránkových tabulek v paměti.",
        uuid: "66bb670c-cfe0-4bcc-9d85-70bc313d2dd9",
      },
      {
        correct:
          "Při mapování souborů do paměti se jejich obsah zpřístupní jako běžná paměť.",
        incorrect:
          "Mapování souborů do paměti znamená jejich kopírování do vyhrazené paměti RAM.",
        uuid: "d2c70d50-8282-4340-8e6c-13b617076ba0",
      },
      {
        correct:
          "Líné načítání umožňuje načítat části programu až v okamžiku potřeby.",
        incorrect:
          "Líné načítání znamená, že celý program je okamžitě nahrán do paměti RAM.",
        uuid: "bd28cfda-f2b6-4e23-a435-dfdc0b9f755d",
      },
      {
        correct:
          "Každý proces má omezený přístup k fyzické paměti, definovaný stránkovými tabulkami.",
        incorrect:
          "Každý proces může přistupovat k libovolné části fyzické paměti bez omezení.",
        uuid: "8106c5a9-e088-4a80-81a4-340e3d8e0233",
      },
      {
        correct:
          "Výpadek stránky může být vyřešen buď načtením stránky z disku, nebo ukončením procesu.",
        incorrect: "Výpadek stránky vždy způsobí okamžité ukončení procesu.",
        uuid: "3b13884f-51da-4bc5-81fb-df5b234eae19",
      },
      {
        correct:
          "Moderní operační systémy umožňují sdílení paměti mezi procesy pomocí mapovaných souborů.",
        incorrect:
          "Moderní operační systémy nepodporují sdílení paměti mezi procesy kvůli bezpečnostním rizikům.",
        uuid: "e1136c05-a361-4a25-8d43-4e29f707bfa6",
      },
      {
        correct:
          "Stránka může být namapována na více virtuálních adres v různých procesech.",
        incorrect:
          "Každá stránka paměti může být přiřazena pouze jedné virtuální adrese.",
        uuid: "e90f22d4-0b4c-4ad8-827b-8e93097cc61a",
      },
      {
        correct:
          "Změna stránkové tabulky může způsobit zneplatnění TLB, což zpomaluje výkon.",
        incorrect: "Změna stránkové tabulky nemá žádný vliv na výkon systému.",
        uuid: "de41fb95-921b-4371-8ad9-c79a5733e6e5",
      },
    ],
  },
];
