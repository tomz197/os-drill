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
  {
    uuid: "e42328b0-abcd-4859-b969-112b81be8d33",
    title: "Část 2: Virtualizace procesoru",
    statements: [
      {
        correct:
          "Virtualizace procesoru umožňuje více vláken sdílet jeden fyzický procesor bez ztráty iluze samostatného běhu.",
        incorrect:
          "Virtualizace procesoru vylučuje současný běh více vláken a vyžaduje oddělené procesory pro každé vlákno.",
        uuid: "6ec2a08c-f79f-484f-b477-cea5fa3380b7",
      },
      {
        correct:
          "Instrukce řízení toku určují, kam se posune programový čítač, což řídí posloupnost vykonávaných příkazů.",
        incorrect:
          "Instrukce řízení toku mění velikost paměti programu a nemají vliv na pořadí prováděných příkazů.",
        uuid: "e44e311a-2c7c-414d-81da-23c0e6abdf6d",
      },
      {
        correct:
          "Registr programového čítače obsahuje virtuální adresu aktuálně vykonávané instrukce a není přístupný běžnými aritmetickými příkazy.",
        incorrect:
          "Registr programového čítače uchovává vždy fyzickou adresu a lze do něj zapisovat běžnými instrukcemi add.",
        uuid: "c1367c22-2eab-4f6d-bb89-08aa0863b088",
      },
      {
        correct:
          "Aritmetický registr je pojmenován přímo v instrukci, zatímco paměťovou adresu lze vypočítat dynamicky.",
        incorrect:
          "Aritmetický registr se indexuje podobně jako paměťová buňka a není pevně pojmenován v instrukci.",
        uuid: "92dc90fb-ff7e-4c59-85e5-9af2b78dddbc",
      },
      {
        correct:
          "Instrukce definujeme jako elementární příkazy, které nelze dělit na menší strojově proveditelné části.",
        incorrect:
          "Instrukce lze svévolně rozkládat na menší úseky, které procesor vykonává nezávisle na kódování.",
        uuid: "cf3b3c41-b96c-42ca-acbb-4d5a81905986",
      },
      {
        correct:
          "Rodina instrukcí add zahrnuje varianty s různými zdrojovými registry a rozdílnými cíli pro výsledek operace.",
        incorrect:
          "Všechny instrukce add používají vždy stejný zdrojový registr a vždy ukládají výsledek jen do rv.",
        uuid: "0aa1fcd1-b2ca-4fc8-8c22-28f965e4db5e",
      },
      {
        correct:
          "Efekt instrukce spočívá ve změně stavu procesoru a případně paměti, což posouvá výpočet o krok dál.",
        incorrect:
          "Efekt libovolné instrukce nikdy nezasahuje do stavu procesoru ani nemůže ovlivnit obsah paměti.",
        uuid: "09cc6202-9ec8-4024-b30d-e19b04964f1f",
      },
      {
        correct:
          "Program se většinou provádí lineárně od nižších k vyšším adresám, pokud jej nepřeruší instrukce skoku.",
        incorrect:
          "Program se vždy provádí striktně vzestupně bez jakékoliv možnosti návratu k dřívějším instrukcím.",
        uuid: "18148afd-1ea4-44a7-8c33-67a3d435afd4",
      },
      {
        correct:
          "Zásobník slouží k izolaci lokálních dat podprogramu a k uložení stavu pro návrat do volajícího kódu.",
        incorrect:
          "Zásobník obsahuje globální proměnné a nesouvisí s uchováváním návratové adresy podprogramu.",
        uuid: "68730ce7-76d9-45e6-b6ca-c4bb116a8270",
      },
      {
        correct:
          "Aktivace podprogramu obvykle posune ukazatel zásobníku a uloží registr pro návrat do vyššího rámce.",
        incorrect:
          "Aktivace podprogramu nezmění ukazatel zásobníku a nikdy neukládá návratovou adresu ani žádné registry.",
        uuid: "5e4acccc-6f08-4f4c-b26e-5a6e801b6ac8",
      },
      {
        correct:
          "Každý aktivační záznam na zásobníku odpovídá právě jedné běžící instanci podprogramu včetně jeho lokálních proměnných.",
        incorrect:
          "Aktivační záznamy na zásobníku nejsou spojeny s podprogramy, takže jeden záznam může pokrývat víc funkcí zároveň.",
        uuid: "3fada798-bbcb-4571-b08b-a83b474cc9bf",
      },
      {
        correct:
          "Stav procesoru tvoří aritmetické registry, programový čítač a ukazatel zásobníku, které se mění vykonáváním instrukcí.",
        incorrect:
          "Stav procesoru zahrnuje pouze obsah operační paměti a nezávisí na hodnotách registrů nebo čítače instrukcí.",
        uuid: "2b22d36f-36eb-4239-acbb-a58c6a66d6d9",
      },
      {
        correct:
          "Pokud do adresního prostoru zasahují externí aktéři, výpočet už není deterministicky řízen jen počátečním stavem a kódem.",
        incorrect:
          "Adresní prostor programu nemůže nikdy měnit nic zvenčí, proto je průběh vlákna vždy plně předvídatelný.",
        uuid: "135db0b0-d689-4417-bb3b-92f47efc1c36",
      },
      {
        correct:
          "Externí událost, jako zápis do sdílené paměti, může změnit průběh vlákna čekajícího v synchronizační smyčce.",
        incorrect:
          "Vlákno nikdy neovlivní událost zapsaná jiným procesem do sdílené paměti, takže synchronizace není nutná.",
        uuid: "4ff186bc-36b2-4fe4-9dbd-8d459c9d4d4a",
      },
      {
        correct:
          "Vlákno je posloupnost stavů, kterou vyvolá činnost jediného procesoru řízeného jedním programem v rámci adresního prostoru.",
        incorrect:
          "Vlákno může být řízeno libovolným počtem programů současně a sdílí vždy víc fyzických procesorů najednou.",
        uuid: "4ae0aa65-9365-4da4-ad65-7ea7dd037272",
      },
      {
        correct:
          "Logický procesor má stav definovaný hodnotami registrů a vykonává instrukce, které tento stav mění.",
        incorrect:
          "Logický procesor neobsahuje žádné registry a nemůže samostatně provádět instrukce bez součinnosti jiného vlákna.",
        uuid: "c4837bfa-21cf-4fc3-8074-72b148ab6935",
      },
      {
        correct:
          "K přepnutí vlákna je nutné uložit aktuální hodnoty registrů a později je obnovit v novém vlákně.",
        incorrect:
          "Přepnutí vlákna nevyžaduje zachování registrů, protože nový stav vzniká vždy z náhodných hodnot paměti.",
        uuid: "7adad147-a1d8-431c-ba40-bdbe6f3371b8",
      },
      {
        correct:
          "Obnovení programového čítače při přepnutí vláken je nejproblematičtější, protože vede k okamžité ztrátě kontroly operačního systému.",
        incorrect:
          "Obnovení programového čítače při přepnutí vláken je nejjednodušší krok, protože jej lze měnit běžným příkazem add.",
        uuid: "81a163d3-2eaa-45d7-b9fc-66a036b7a867",
      },
      {
        correct:
          "Plánovač rozhoduje, které vlákno dostane procesor, a může aktivní vlákno kdykoliv preemptivně přerušit.",
        incorrect:
          "Plánovač nemá pravomoc přerušit běžící vlákno, protože veškeré přepnutí se děje vždy s jeho souhlasem.",
        uuid: "fd85a5f6-0b7c-4411-b640-9485944afc49",
      },
      {
        correct:
          "Preemptivní plánovač využívá hardwarový časovač, jenž pravidelným přerušením umožňuje systému odebírat procesor aktivnímu vláknu.",
        incorrect:
          "Preemptivní plánovač nepoužívá časovač a spolehne se výhradně na dobrovolné uvolnění procesoru běžícím vláknem.",
        uuid: "469d27d6-2d3f-4eef-83f1-39710d2bca86",
      },
      {
        correct:
          "Plánovač se snaží vybalancovat propustnost a latenci, aby se vlákna rychle střídala a zároveň nezdržovala přepínáním.",
        incorrect:
          "Maximalizace propustnosti vyžaduje extrémně časté střídání vláken, které zcela eliminuje odezvu interaktivních úloh.",
        uuid: "1024fb93-94f3-4b47-8eae-6d1e275bb98f",
      },
      {
        correct:
          "Vlákno v stavu čekání na událost se probudí, jakmile nastane externí podmínka, o kterou žádalo.",
        incorrect:
          "Vlákno označené jako čekající na událost lze vzbudit libovolnou instrukcí add prováděnou v jiném vlákně.",
        uuid: "7a934e58-5339-4b83-bacd-1b1bc5661c13",
      },
      {
        correct:
          "Vlákno čekající na procesor je připraveno k běhu, ale dosud mu nebyl znovu přidělen žádný fyzický procesor.",
        incorrect:
          "Vlákno čekající na procesor je vždy nutně zablokováno kvůli nedostupným datům a nemůže pokračovat ve výpočtu.",
        uuid: "54c18aeb-dd23-45a5-b7db-e778acd95303",
      },
      {
        correct:
          "Fronty úloh slouží k řazení vláken čekajících na přidělení procesoru podle priority nebo zásady FIFO.",
        incorrect:
          "Fronty úloh nelze využít k plánování vláken, protože všechny procesory vždy přijímají libovolné vlákno přímo.",
        uuid: "24e9dd50-0a1b-427d-b2a9-217ac5a541f3",
      },
      {
        correct:
          "Lokální fronty ke konkrétním procesorům mohou snižovat migrace vláken, ale znesnadňují rovnoměrné vytížení všech CPU.",
        incorrect:
          "Použití jediného globálního frontu zcela eliminuje migraci vláken a zaručuje každému procesoru stejnou zátěž.",
        uuid: "fa00031d-df4c-4597-a070-fb05348b8814",
      },
      {
        correct:
          "Afinita vláken k určitému procesoru zlepšuje výkon díky menšímu přesunu cache, ale může snížit využití zdrojů.",
        incorrect:
          "Afinita vláken k jednomu procesoru neovlivňuje práci cache a nezakazuje jejich přesun mezi různými CPU.",
        uuid: "9939a47e-9e2a-4d27-b45b-928d5d49c0c4",
      },
      {
        correct:
          "Kompromis mezi afinitou a rozložením zátěže řeší plánovače, které kradou práci z cizích front při nevyužitém procesoru.",
        incorrect:
          "Plánovače obvykle ignorují afinitu vláken a nedokáží přesunout úlohy z přeplněného frontu na procesor bez zátěže.",
        uuid: "32244408-37c0-4770-a8af-c9fc1e5a077b",
      },
      {
        correct:
          "Prioritní plánování umožňuje interaktivním vláknům předbíhat ostatní, aby získala nižší latenci při reakcích na uživatele.",
        incorrect:
          "Prioritní plánování nutně zvyšuje latenci interaktivních vláken a upřednostňuje vždy výpočetně nejnáročnější úlohy.",
        uuid: "465a8494-b167-4378-8b5c-00a387b3fbf0",
      },
      {
        correct:
          "Dynamická úprava priority zabraňuje hladovění vláken s nízkou prioritou, protože časem získají vyšší preferenci.",
        incorrect:
          "Dynamická úprava priority je zbytečná, protože vlákna s nízkou prioritou mohou být trvale odsunuta bez důsledků.",
        uuid: "a89fda37-e810-4786-b1a1-2b23d705dde9",
      },
      {
        correct:
          "Férové plánování se snaží každému vláknu přidělit stejnou výpočetní dobu, což vede k vyváženému sdílení procesoru.",
        incorrect:
          "Férové plánování vždy upřednostňuje vlákna s nejdelší historií běhu a snižuje prioritu nově spuštěným úlohám.",
        uuid: "b2be1f12-2bb9-4d79-930c-0b1147523108",
      },
      {
        correct:
          "Inverzní hodnota dosud spotřebovaného času může určovat prioritu vlákna v systému férového plánování.",
        incorrect:
          "Férové plánování ignoruje dosud spotřebovaný čas, takže vlákna s dlouhým během mají vždy nejvyšší prioritu.",
        uuid: "2883455f-6fae-4234-a000-5cecaf6e6128",
      },
      {
        correct:
          "Plánovací kvantum omezuje, jak dlouho může vlákno nepřetržitě běžet, čímž zabraňuje blokaci ostatních úloh.",
        incorrect:
          "Plánovací kvantum nesouvisí s dobou běhu vlákna a nijak neovlivňuje přepínání mezi různými procesy.",
        uuid: "12bff9d4-8358-4276-9680-162d9967de67",
      },
      {
        correct:
          "V moderních preemptivních systémech vlákno nebývá odstavováno dobrovolně, ale je přerušeno časovačem nebo jinou událostí.",
        incorrect:
          "V preemptivních systémech se vlákno vždy vypíná samo, protože procesor neumí běžící vlákno přerušit.",
        uuid: "73d983c7-10f2-4bf5-89ba-a059e31dcf32",
      },
      {
        correct:
          "Pokud vlákno čeká na vstup z periférie, operační systém jej uspí a probudí, jakmile dorazí požadovaná data.",
        incorrect:
          "Vlákno čekající na periférii nesmí být uspáno a musí neustále aktivně zjišťovat dostupnost dat v paměti.",
        uuid: "a91c4fea-8aa7-4717-94e1-6a9bec59927a",
      },
      {
        correct:
          "Při soutěži o vzácný zdroj je probuzeno jen první vlákno z čekací fronty, aby nedošlo k opětovnému blokování.",
        incorrect:
          "Při uvolnění vzácného zdroje se probouzejí současně všechna čekající vlákna, čímž se rychleji vyřeší konflikt.",
        uuid: "ecc82b0d-1330-4783-be2f-879c060b64b0",
      },
      {
        correct:
          "Krátké plánovací kvantum zlepšuje reakční dobu interaktivních aplikací, ale může snižovat celkovou propustnost procesoru.",
        incorrect:
          "Krátké plánovací kvantum maximalizuje propustnost výpočetních úloh a neomezuje vůbec odezvu interaktivních programů.",
        uuid: "d934ad18-16d5-4e76-8d2f-703a81fc0296",
      },
      {
        correct:
          "Synchronizace umožňuje koordinovat sdílení společných dat mezi více vlákny, čímž zabraňuje konfliktům a nekonzistentním stavům.",
        incorrect:
          "Synchronizace slouží výhradně k zvyšování výkonu a nebrání konfliktům při manipulaci se sdílenými proměnnými.",
        uuid: "403dc206-9d39-49f1-b649-f0c644cca02b",
      },
      {
        correct:
          "Podmíněné skoky používají stavový příznak nebo registr ke změně adresy v programovém čítači a ovlivňují tok programu.",
        incorrect:
          "Podmíněné skoky nelze provádět na základě žádných registrů ani stavových příznaků, takže vždy pokračují sekvenčně.",
        uuid: "39a29259-1081-471c-9ada-727957ea4399",
      },
      {
        correct:
          "Podprogram může mít rekurzivní volání, která vyžadují opakované vytváření nových aktivačních záznamů na zásobníku.",
        incorrect:
          "Podprogram s rekurzí používá vždy pouze jeden aktivační záznam, protože další volání nepřepisují stav zásobníku.",
        uuid: "a586beb5-9961-4caa-b5ab-f89a1d189a6d",
      },
      {
        correct:
          "Více vláken v jednom procesu může sdílet adresní prostor, ale mají oddělené zásobníky a stav procesoru.",
        incorrect:
          "Vlákna uvnitř stejného procesu musejí používat jediný společný zásobník i identické registry pro sčítání.",
        uuid: "86ab3f8b-0211-46b9-b799-3f0f5998cd63",
      },
    ],
  },
];
