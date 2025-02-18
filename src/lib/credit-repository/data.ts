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
      {
        correct:
          "Virtuální adresa musí být vždy přeložena hardwarovou jednotkou správy paměti na fyzickou adresu.",
        incorrect:
          "Virtuální adresa může být přímo využita jako platná fyzická adresa bez jakéhokoli překladu.",
        uuid: "5fa3e78c-6aaf-444c-b949-d3e06ab3c9e0",
      },
      {
        correct:
          "Proces s více vlákny sdílí stejný virtuální adresní prostor pro všechna svá vlákna.",
        incorrect:
          "Proces s více vlákny má pro každé vlákno zcela oddělený virtuální adresní prostor.",
        uuid: "abe699fb-248d-4941-95f8-b51dac2e98d1",
      },
      {
        correct:
          "Stránka velikosti 4 KiB vyžaduje při dvouúrovňovém překladu čtení dvou záznamů stránkových tabulek.",
        incorrect:
          "Stránka velikosti 4 KiB potřebuje při dvouúrovňovém překladu pouze jediný záznam stránkové tabulky.",
        uuid: "cd92eee4-854b-457d-82a5-dd2a984ca589",
      },
      {
        correct:
          "Jednotka správy paměti využívá TLB k urychlení opakovaných překladů virtuálních adres.",
        incorrect:
          "Jednotka správy paměti zpracovává každý překlad adresy vždy bez využití jakékoliv vyrovnávací paměti.",
        uuid: "e9085dbc-981e-406d-97ff-df59037e27e7",
      },
      {
        correct:
          "Externí stránkování umožňuje operačnímu systému přesunout nevyužívané stránky paměti do pomalejšího úložiště.",
        incorrect:
          "Externí stránkování vyžaduje, aby všechny stránky procesu zůstávaly trvale v rychlé operační paměti.",
        uuid: "b4d10c16-6b78-4b9f-89eb-d57a6b4113c9",
      },
      {
        correct:
          "Mechanismus copy on write zabraňuje okamžitému duplikování dat při vzniku nového procesu.",
        incorrect:
          "Mechanismus copy on write ihned kopíruje všechny stránky procesu nezávisle na požadavcích zápisu.",
        uuid: "fc7038a1-3697-48c1-944d-92d6c73a8a6f",
      },
      {
        correct:
          "Proces může mít více vláken, která společně využívají kód i globální datové struktury.",
        incorrect:
          "Proces se skládá z mnoha vláken, ale každé vlákno používá zcela jiný kód a data.",
        uuid: "740824b2-0d97-4b4a-b9e4-c6fe042a4d02",
      },
      {
        correct:
          "Fyzické adresy ve starších systémech x86 mohou odkazovat nejen na RAM, ale i na periferní zařízení.",
        incorrect:
          "Fyzické adresy v systémech x86 jsou vždy mapovány pouze na operační paměť, nikoli na periferní zařízení.",
        uuid: "daef6362-f7f6-44d4-9476-083a2991598b",
      },
      {
        correct:
          "Stránky pro kód běžně sdílejí více procesů, pokud jsou označeny jako pouze pro čtení.",
        incorrect:
          "Stránky pro kód jsou vždy privátní a nemohou být nikdy sdíleny mezi odlišnými procesy.",
        uuid: "2e2b565e-632d-482c-9d99-95f058e7c233",
      },
      {
        correct:
          "Víceúrovňové stránkové tabulky šetří paměť označením nevyužívaných segmentů jako nepřítomné bez alokace dalšího prostoru.",
        incorrect:
          "Víceúrovňové stránkové tabulky pokaždé alokují všechny nižší úrovně tabulek i pro nevyužité virtuální adresy.",
        uuid: "ca6e8cab-28a3-407b-82ce-2e69b229440b",
      },
      {
        correct:
          "Změna registru ukazujícího na tabulku první úrovně je klíčová při přepínání mezi procesy.",
        incorrect:
          "Při přepínání procesů zůstává vždy stejný registr ukazující na tabulku první úrovně.",
        uuid: "56da73d3-0ace-40c4-9754-b521ed3b1e5a",
      },
      {
        correct:
          "Mapování dvou virtuálních adres na stejný rámec umožňuje vzájemnou komunikaci procesů prostřednictvím sdílené paměti.",
        incorrect:
          "Mapování dvou virtuálních adres na stejný rámec znemožňuje procesům jakoukoli vzájemnou komunikaci.",
        uuid: "1df981c2-d9e2-4187-98c9-810d07cd8335",
      },
      {
        correct:
          "Stránka označená příznakem pouze pro čtení může být následně kopírována při pokusu o zápis.",
        incorrect:
          "Stránka označená příznakem pouze pro čtení vždy brání zápisu bez možnosti pozdějšího překopírování dat.",
        uuid: "3e2eb134-9a06-45bd-9cea-bf486e046d2a",
      },
      {
        correct:
          "Zneplatnění TLB při přepnutí procesu dočasně zpomaluje překlad adres, dokud se neobnoví potřebné záznamy.",
        incorrect:
          "Zneplatnění TLB nikdy neovlivňuje výkon překladů adres, protože se okamžitě obnoví všechny potřebné položky.",
        uuid: "9162bcbc-dbb5-4194-a3b3-3276bb919fd4",
      },
      {
        correct:
          "Líné načítání při startu programu načítá stránky z disku až teprve při jejich prvním použití.",
        incorrect:
          "Líné načítání vždy předem načte celý spustitelný soubor do operační paměti bez ohledu na potřebu.",
        uuid: "3bfcfe1d-968d-4379-96bd-da30b5b01157",
      },
      {
        correct:
          "Přístup k paměti pomocí instrukcí ld a st lze rozložit na sekvenci jednoduchých čtení a zápisů.",
        incorrect:
          "Instrukce ld a st nelze nikdy nahradit sekvencí elementárních operací čtení a zápisu registrů.",
        uuid: "df1628db-d585-471f-8e74-c0f25e5a06cd",
      },
      {
        correct:
          "Větší datové struktury leží v paměti na sousedních adresách, pokud nezasahují do neplatného prostoru.",
        incorrect:
          "Větší datové struktury se běžně ukládají roztříštěně napříč nesouvisejícími oblastmi virtuální paměti.",
        uuid: "ce998f62-d772-4e77-a915-5eba83468ee9",
      },
      {
        correct:
          "Některé stránky v paměti procesu mohou reprezentovat paměť periferních zařízení, místo klasické RAM.",
        incorrect:
          "Stránky v paměti procesu jsou vždy mapovány výhradně do oblastí klasické RAM a nikde jinde.",
        uuid: "ee2014ee-c292-4b00-97e6-dd4c0833ea29",
      },
      {
        correct:
          "Virtualizace paměti dovoluje spustit několik procesů se stejnými virtuálními adresami, ale odlišnými fyzickými umístěními.",
        incorrect:
          "Virtualizace paměti předepisuje, že žádné dva procesy nemohou sdílet stejné číselné hodnoty virtuálních adres.",
        uuid: "47445754-da05-4893-9cf1-0c78bbfcc020",
      },
      {
        correct:
          "Při mapování datového souboru do paměti se obsah stránek načítá z disku až při jejich použití.",
        incorrect:
          "Mapování souboru do paměti vždy vyžaduje jednorázové zkopírování veškerého obsahu do virtuálního adresního prostoru.",
        uuid: "dccc7063-1ed4-4008-a16e-c2d6715c6d88",
      },
    ],
  },
];
