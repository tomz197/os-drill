import { CreditData } from "./types";

export const creditData: CreditData = [
  {
    "uuid": "95bb68e1-4510-4a5e-9c7f-ae982661c1f8",
    "sectionNumber": "0",
    "sectionTitle": "B. Základní pojmy a definice",
    "statements": [
      {
        "uuid": "956b03dc-986f-4604-87e2-0e987af3b4ca",
        "correct": "Abstrakce v operačních systémech umožňuje stavět rozsáhlé systémy skrytím implementačních detailů.",
        "incorrect": "Abstrakce v operačních systémech vyžaduje znalost všech implementačních detailů pro stavbu rozsáhlých systémů.",
        "sectionNumber": "0.1.1",
        "sectionTitle": "Co je abstrakce?"
      },
      {
        "uuid": "37a4399d-c091-49ac-b34d-e77743e8063f",
        "correct": "Pro abstrakci je klíčové znát vnější chování systému, zatímco vnitřní struktura může zůstat skryta.",
        "incorrect": "Pro abstrakci je klíčové znát vnější i vnitřní chování a strukturu systému detailně.",
        "sectionNumber": "0.1.1",
        "sectionTitle": "Co je abstrakce?"
      },
      {
        "uuid": "77fe023f-570c-42ff-ba5b-767ff80f6d9e",
        "correct": "Modul je základní jednotkou abstrakce v software, oddělující rozhraní od implementace.",
        "incorrect": "Modul je základní jednotkou implementace v software, oddělující rozhraní od abstrakce.",
        "sectionNumber": "0.1.2",
        "sectionTitle": "Modul"
      },
      {
        "uuid": "cfbba433-a623-453a-ae1b-c741b89c8624",
        "correct": "Modularita systému umožňuje výměnu modulu za jiný se stejným vnějším chováním.",
        "incorrect": "Modularita systému vyžaduje výměnu modulu za jiný s odlišným vnějším chováním.",
        "sectionNumber": "0.1.2",
        "sectionTitle": "Modul"
      },
      {
        "uuid": "0830ecab-2480-48a9-a67d-671b90118e43",
        "correct": "Abstrakce modulu \"propouští\", když se vnitřní detaily projevují navenek.",
        "incorrect": "Abstrakce modulu nikdy \"nepropouští\" a vnitřní detaily se nikdy neprojevují navenek.",
        "sectionNumber": "0.1.2",
        "sectionTitle": "Modul"
      },
      {
        "uuid": "3159fe5a-c613-4266-882a-2da2e556e1b1",
        "correct": "Při porušení modularity, výměna modulu vyžaduje úpravu dalších modulů.",
        "incorrect": "Při porušení modularity, výměna modulu nevyžaduje úpravu žádných dalších modulů.",
        "sectionNumber": "0.1.2",
        "sectionTitle": "Modul"
      },
      {
        "uuid": "8654feed-9fd7-4dda-a2e6-b8ba91383288",
        "correct": "Von Neumannova architektura popisuje počítač s jednotným vnějším chováním, nezávisle na výrobci komponent.",
        "incorrect": "Von Neumannova architektura popisuje počítač s proměnlivým vnějším chováním, v závislosti na výrobci komponent.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "c3f5999d-680c-40af-90f2-3797059264ca",
        "correct": "Výpočetní jednotka, procesor, vykonává instrukce, které jsou uloženy v operační paměti.",
        "incorrect": "Výpočetní jednotka, procesor, vykonává instrukce, které jsou uloženy ve vyrovnávací paměti.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "3d9c7d51-626a-4d7a-b59b-c65e7f3c612b",
        "correct": "Operační paměť ve von Neumannově architektuře je adresovatelná a skládá se z očíslovaných buněk.",
        "incorrect": "Operační paměť ve von Neumannově architektuře není adresovatelná a skládá se z neuspořádaných buněk.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "60b2b654-199f-4312-9fac-66650001c2bf",
        "correct": "Každá buňka v operační paměti von Neumannovy architektury typicky uchovává jeden byte dat.",
        "incorrect": "Každá buňka v operační paměti von Neumannovy architektury typicky uchovává jeden bit dat.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "f13f9d46-c538-4be8-a1e9-96ea6fd70101",
        "correct": "Instrukce mohou vyžádat načtení dat z libovolně vypočtené adresy, což odlišuje paměť od registrů.",
        "incorrect": "Instrukce mohou vyžádat načtení dat pouze z pevných adres, což odlišuje paměť od registrů.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "f28299a6-fe2b-4ac8-91e3-7908ce8401ab",
        "correct": "Registry se odlišují od operační paměti tím, že mají pevná jména, nikoliv adresy.",
        "incorrect": "Registry se odlišují od operační paměti tím, že mají proměnlivá jména, podobně jako proměnné.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "6fa471c7-9988-4462-ac21-b4b859df57e4",
        "correct": "Pro zjednodušení se v kontextu von Neumannova modelu program považuje za neměnný.",
        "incorrect": "Pro zjednodušení se v kontextu von Neumannova modelu program považuje za dynamicky modifikovatelný.",
        "sectionNumber": "0.2.1",
        "sectionTitle": "Počítač"
      },
      {
        "uuid": "60f28404-7d12-44e4-92d8-74b541e9bb54",
        "correct": "Periferie slouží k příjmu a odesílání dat, která jsou reprezentována jako sekvence čísel.",
        "incorrect": "Periferie slouží pouze k odesílání dat, která jsou reprezentována jako slova.",
        "sectionNumber": "0.2.2",
        "sectionTitle": "Periferie"
      },
      {
        "uuid": "c4769bbe-9361-4208-b250-01db23e1dcc8",
        "correct": "Data pro periferie jsou výsledkem výpočtu, zatímco data z periferií jsou vstupem pro výpočet.",
        "incorrect": "Data pro periferie i data z periferií jsou vždy výsledkem výpočtu.",
        "sectionNumber": "0.2.2",
        "sectionTitle": "Periferie"
      },
      {
        "uuid": "9ac086be-94e3-4388-a8ad-577f28b221df",
        "correct": "Veškerá činnost programu sestává z manipulace s čísly, což je v podstatě výpočet.",
        "incorrect": "Některé činnosti programu, jako kreslení obrázků, nejsou považovány za výpočet.",
        "sectionNumber": "0.2.2",
        "sectionTitle": "Periferie"
      },
      {
        "uuid": "1fff4f0d-0d58-4229-adc8-eed82f9084d8",
        "correct": "Program je abstrakce, která popisuje sekvenci instrukcí pro výpočet a zahrnuje synchronizaci s periferiemi.",
        "incorrect": "Program je abstrakce, která popisuje pouze sekvenci instrukcí pro výpočet a nezahrnuje synchronizaci s periferiemi.",
        "sectionNumber": "0.2.2",
        "sectionTitle": "Periferie"
      },
      {
        "uuid": "1d2f23cb-6eb0-44bb-8c13-815408e9c4a1",
        "correct": "Operační systém a hardware společně realizují virtualizaci výpočetních zdrojů.",
        "incorrect": "Pouze operační systém realizuje virtualizaci výpočetních zdrojů, hardware se na ní nepodílí.",
        "sectionNumber": "0.2.3",
        "sectionTitle": "Virtualizace"
      },
      {
        "uuid": "05ade31c-019c-4b8a-af17-a43c66daef0e",
        "correct": "Virtualizace umožňuje, aby programy pracovaly, jako kdyby měly svůj vlastní počítač.",
        "incorrect": "Virtualizace nutí programy pracovat sdíleně na jednom virtuálním počítači.",
        "sectionNumber": "0.2.3",
        "sectionTitle": "Virtualizace"
      },
      {
        "uuid": "e7c03c66-95f3-4390-99fd-b96910cdbdc5",
        "correct": "Úkolem virtualizace je vytvořit několik nezávislých virtuálních kopií jednoho fyzického zařízení.",
        "incorrect": "Úkolem virtualizace je sdílet jeden fyzický počítač mezi více programy.",
        "sectionNumber": "0.2.3",
        "sectionTitle": "Virtualizace"
      },
      {
        "uuid": "b9352630-77b0-426e-96b2-5a202eb711fd",
        "correct": "Události, které nejsou uspořádané relací předcházení, jsou považovány za souběžné.",
        "incorrect": "Události, které jsou uspořádané relací předcházení, jsou považovány za souběžné.",
        "sectionNumber": "0.3.1",
        "sectionTitle": "Událost a předcházení"
      },
      {
        "uuid": "7e0c57b2-30df-44b8-a71d-4e1448122dcc",
        "correct": "Relace předcházení definuje chronologické uspořádání událostí, popisující, která událost nastala dříve.",
        "incorrect": "Relace předcházení definuje časové trvání událostí, popisující, jak dlouho událost trvala.",
        "sectionNumber": "0.3.1",
        "sectionTitle": "Událost a předcházení"
      },
      {
        "uuid": "c27c6d93-86fd-4596-b298-16876e925ccd",
        "correct": "Pokud událost A nepředchází událost B a událost B nepředchází událost A, pak jsou události A a B souběžné.",
        "incorrect": "Pokud událost A předchází událost B alebo událost B předchází událost A, pak jsou události A a B souběžné.",
        "sectionNumber": "0.3.1",
        "sectionTitle": "Událost a předcházení"
      },
      {
        "uuid": "db1f5212-6c38-4248-8138-bb34ba7f012e",
        "correct": "V množině událostí U = {A, B, X, Y} s relací předcházení P = {(A, X), (X, B), (A, Y), (Y, B)} jsou události X a Y souběžné.",
        "incorrect": "V množině událostí U = {A, B, X, Y} s relací předcházení P = {(A, X), (X, B), (A, Y), (Y, B)} jsou události X a B souběžné.",
        "sectionNumber": "0.3.1",
        "sectionTitle": "Událost a předcházení"
      },
      {
        "uuid": "6d75d5f7-9b29-48ba-9275-88c7bf095176",
        "correct": "Vnější chování modulu v operačním systému závisí na relaci předcházení událostí, nikoliv na přesném časování.",
        "incorrect": "Vnější chování modulu v operačním systému závisí na přesném časovém rozložení jednotlivých událostí.",
        "sectionNumber": "0.3.1",
        "sectionTitle": "Událost a předcházení"
      },
      {
        "uuid": "4ae0eb2a-aaab-43ff-92b3-c6f42eaf93e9",
        "correct": "Časový sled událostí představuje lineární uspořádání událostí, kde pro každou dvojici událostí platí, že jedna předchází druhou.",
        "incorrect": "Časový sled událostí představuje nelineární uspořádání událostí, kde pro každou dvojici událostí platí, že jedna předchází druhou.",
        "sectionNumber": "0.3.2",
        "sectionTitle": "Časový sled, hazard souběhu"
      },
      {
        "uuid": "d3d5ef7b-6259-4c59-898f-8fdb8d696774",
        "correct": "Časový sled událostí lze chápat jako přidělení časových razítek událostem tak, že žádné dvě události nenastanou ve stejný okamžik.",
        "incorrect": "Časový sled událostí nelze chápat jako přidělení časových razítek událostem tak, že žádné dvě události nenastanou ve stejný okamžik.",
        "sectionNumber": "0.3.2",
        "sectionTitle": "Časový sled, hazard souběhu"
      },
      {
        "uuid": "c066cb52-2599-48b5-af79-85a29d67635b",
        "correct": "Hazard souběhu nastává, pokud se vnější chování systému liší v různých časových sledech, které jsou konzistentní s relací předcházení.",
        "incorrect": "Hazard souběhu nastává, pokud se vnější chování systému neliší v různých časových sledech, které jsou konzistentní s relací předcházení.",
        "sectionNumber": "0.3.2",
        "sectionTitle": "Časový sled, hazard souběhu"
      },
      {
        "uuid": "e6008e07-13e8-4c7f-bb0b-967007da14c0",
        "correct": "Pojem hazard souběhu označuje situaci, kdy různé platné časové sledy, kompatibilní s relací předcházení, vedou k rozdílným výsledkům.",
        "incorrect": "Pojem hazard souběhu označuje situaci, kdy různé platné časové sledy, nekompatibilní s relací předcházení, vedou k rozdílným výsledkům.",
        "sectionNumber": "0.3.2",
        "sectionTitle": "Časový sled, hazard souběhu"
      },
      {
        "uuid": "c8a07608-6c2a-4f8b-aaab-32ef78e69205",
        "correct": "Operační systém zprostředkovává aplikacím přístup k hardwarovým i softwarovým zdrojům počítače.",
        "incorrect": "Operační systém zprostředkovává aplikacím přístup pouze k hardwarovým zdrojům a nikoliv softwarovým.",
        "sectionNumber": "0.4.1",
        "sectionTitle": "Vnější rozhraní"
      },
      {
        "uuid": "33d55748-603d-4e55-b7a6-7ba2cf21ad3d",
        "correct": "Víceúlohový operační systém umožňuje současný běh několika uživatelských programů na jednom počítači.",
        "incorrect": "Víceúlohový operační systém neumožňuje běh více uživatelských programů současně.",
        "sectionNumber": "0.4.1",
        "sectionTitle": "Vnější rozhraní"
      },
      {
        "uuid": "851fabb5-edcf-4c44-8aa8-faf9370ae7be",
        "correct": "Operační systém poskytuje izolaci běžících programů, aby se vzájemně nemohly narušovat.",
        "incorrect": "Operační systém nezajišťuje izolaci běžících programů, které se tak mohou vzájemně ovlivňovat.",
        "sectionNumber": "0.4.1",
        "sectionTitle": "Vnější rozhraní"
      },
      {
        "uuid": "c4e249b9-36e7-4088-b46c-a9f6bee2d297",
        "correct": "POSIX je standardizované rozhraní pro víceúlohové a víceuživatelské operační systémy.",
        "incorrect": "POSIX je standardizované rozhraní pouze pro jednoúlohové operační systémy.",
        "sectionNumber": "0.4.2",
        "sectionTitle": "POSIX"
      },
      {
        "uuid": "3ccd5b03-2624-4791-a9f3-f73821e02849",
        "correct": "Standard POSIX popisuje aplikační programovací rozhraní (API) v jazyce C.",
        "incorrect": "Standard POSIX popisuje aplikační programovací rozhraní (API) v jazyce Java.",
        "sectionNumber": "0.4.2",
        "sectionTitle": "POSIX"
      },
      {
        "uuid": "66b2e7db-1746-4cfe-93d6-612712a4c451",
        "correct": "Standardizaci POSIX provedla organizace The Open Group.",
        "incorrect": "Standardizaci POSIX provedla organizace IEEE.",
        "sectionNumber": "0.4.2",
        "sectionTitle": "POSIX"
      },
      {
        "uuid": "6552e5a9-3169-41e2-a911-1deb06fe4dc7",
        "correct": "Běžný návrh operačního systému se skládá z jádra a uživatelského prostoru.",
        "incorrect": "Běžný návrh operačního systému se skládá pouze z uživatelského prostoru.",
        "sectionNumber": "0.4.3",
        "sectionTitle": "Jádro"
      },
      {
        "uuid": "39953053-12c9-4aad-af09-fab92fb94039",
        "correct": "Jádro operačního systému má privilegovaný přístup k hardwarovým zdrojům, zejména k procesoru.",
        "incorrect": "Uživatelský prostor operačního systému má privilegovaný přístup k hardwarovým zdrojům.",
        "sectionNumber": "0.4.3",
        "sectionTitle": "Jádro"
      },
      {
        "uuid": "7e6cd78d-60ab-450f-8727-e750df78cdd0",
        "correct": "Jádro operačního systému řídí virtualizaci zdrojů, jako je přidělování paměti a procesoru.",
        "incorrect": "Uživatelské programy řídí virtualizaci hardwarových zdrojů operačního systému.",
        "sectionNumber": "0.4.3",
        "sectionTitle": "Jádro"
      },
      {
        "uuid": "bf056675-3f43-4e39-a5e5-349738830de6",
        "correct": "Jádro operačního systému funguje jako strážce integrity systému tím, že kontroluje přístup uživatelských procesů.",
        "incorrect": "Uživatelské procesy fungují jako strážce integrity systému, nezávisle na jádru operačního systému.",
        "sectionNumber": "0.4.3",
        "sectionTitle": "Jádro"
      },
      {
        "uuid": "5526b55a-8efa-425a-84fa-2d0e171fa3c3",
        "correct": "Operační systémy bez jádra jsou v současnosti považovány za vzácné a okrajové v kontextu výuky.",
        "incorrect": "Operační systémy bez jádra jsou v současnosti běžnější než systémy s jádrem v praxi.",
        "sectionNumber": "0.4.3",
        "sectionTitle": "Jádro"
      },
      {
        "uuid": "494270d5-bc91-4dcc-8804-e4d22353ddf7",
        "correct": "Virtualizace operačního systému umožňuje provozovat více instancí operačního systému na jednom fyzickém počítači.",
        "incorrect": "Virtualizace operačního systému omezuje provozování více instancí operačního systému na jednom fyzickém počítači.",
        "sectionNumber": "0.4.4",
        "sectionTitle": "Virtualizace OS"
      },
      {
        "uuid": "139c34b4-1d34-4516-a0b3-0e356ffd0c2b",
        "correct": "Virtualizace operačního systému poskytuje silnější izolaci mezi úlohami než standardní procesy sdílející stejný operační systém.",
        "incorrect": "Virtualizace operačního systému poskytuje slabší izolaci mezi úlohami než standardní procesy sdílející stejný operační systém.",
        "sectionNumber": "0.4.4",
        "sectionTitle": "Virtualizace OS"
      },
      {
        "uuid": "6be3ed3b-23d2-4ac4-ade3-52306ed0da4e",
        "correct": "Jedním z hlavních důvodů virtualizace operačních systémů je zjednodušení správy a organizace počítačových systémů.",
        "incorrect": "Zjednodušení správy a organizace počítačových systémů není považováno za důvod pro virtualizaci operačních systémů.",
        "sectionNumber": "0.4.4",
        "sectionTitle": "Virtualizace OS"
      },
      {
        "uuid": "b08b50d2-3cc4-43de-a856-b9692c6510f8",
        "correct": "Díky virtualizaci operačních systémů je možná migrace, včetně živé migrace běžícího operačního systému na jiný hardware.",
        "incorrect": "Virtualizace operačních systémů neumožňuje migraci, ani živou migraci běžícího operačního systému na jiný hardware.",
        "sectionNumber": "0.4.4",
        "sectionTitle": "Virtualizace OS"
      },
      {
        "uuid": "1d79d84b-bde6-46d2-8e73-2f77dcf2f95f",
        "correct": "Abstrakce hardwaru a modularita systému usnadňují přenos operačního systému na jiný hardware.",
        "incorrect": "Abstrakce hardwaru nemá vliv na přenositelnost operačního systému mezi různými hardwarovými platformami.",
        "sectionNumber": "0.4.5",
        "sectionTitle": "Přenositelnost"
      },
      {
        "uuid": "46693132-5d2c-4f32-b427-80711045abe5",
        "correct": "Pro aplikační software operační systém vytváří abstrakční rozhraní, které podporuje jeho přenositelnost mezi systémy.",
        "incorrect": "Aplikační software je přenositelný mezi operačními systémy i bez abstrakčního rozhraní poskytovaného operačním systémem.",
        "sectionNumber": "0.4.5",
        "sectionTitle": "Přenositelnost"
      },
      {
        "uuid": "05f269b4-2e2a-4685-9129-d6f4db80bbb7",
        "correct": "Přenositelnost aplikačního software je omezena využitím vlastností specifických pro daný operační systém.",
        "incorrect": "Přenositelnost aplikačního software mezi operačními systémy není ovlivněna využitím specifických vlastností operačního systému.",
        "sectionNumber": "0.4.5",
        "sectionTitle": "Přenositelnost"
      }
    ]
  },
  {
    "uuid": "73c45141-9794-451f-b11d-8b36598420f5",
    "sectionNumber": "1",
    "sectionTitle": "Virtualizace paměti",
    "statements": [
      {
        "uuid": "41a737a1-037a-4d2d-af1e-1942f509bacc",
        "correct": "Program interaguje s pamětí použitím instrukcí ld a st.",
        "incorrect": "Program interaguje s pamětí výhradně instrukcí ld.",
        "sectionNumber": "1.1.1",
        "sectionTitle": "Přístup k paměti"
      },
      {
        "uuid": "4a56642c-8857-4e72-9bb9-259a1a1d0026",
        "correct": "Instrukce ld načítá data z paměti určené adresou v registru do cílového registru.",
        "incorrect": "Instrukce ld načítá data přímo z registru do paměti.",
        "sectionNumber": "1.1.1",
        "sectionTitle": "Přístup k paměti"
      },
      {
        "uuid": "a07ff963-d10b-4c83-b6e4-8d958df65ebc",
        "correct": "Adresa paměti pro instrukce ld a st je číselná hodnota uložená v registru.",
        "incorrect": "Adresa paměti pro ld a st je symbolický název.",
        "sectionNumber": "1.1.1",
        "sectionTitle": "Přístup k paměti"
      },
      {
        "uuid": "c4486a58-4f7f-406b-99fe-7db5a0c18d24",
        "correct": "Složitější instrukce procesoru lze vždy rozdělit na sekvenci instrukcí ld, výpočetních a st.",
        "incorrect": "Některé instrukce procesoru nelze rozdělit na ld, výpočetní a st instrukce.",
        "sectionNumber": "1.1.1",
        "sectionTitle": "Přístup k paměti"
      },
      {
        "uuid": "66a204ef-d78a-4fa2-a49c-c690678723f3",
        "correct": "Adresní prostor se obvykle skládá ze souvislých bloků adres.",
        "incorrect": "Adresní prostor se nikdy neskládá ze souvislých bloků adres.",
        "sectionNumber": "1.1.2",
        "sectionTitle": "Adresní prostor"
      },
      {
        "uuid": "4fa8af70-62f9-4b50-a42e-30dfb0c39f3c",
        "correct": "Každá adresa v typickém adresním prostoru odpovídá právě jednomu bajtu dat.",
        "incorrect": "Každá adresa v typickém adresním prostoru odpovídá právě dvěma bajtům dat.",
        "sectionNumber": "1.1.2",
        "sectionTitle": "Adresní prostor"
      },
      {
        "uuid": "49abd2d1-f845-4bf4-8b07-54e802d02562",
        "correct": "Ne každé číslo reprezentuje platnou adresu v adresním prostoru.",
        "incorrect": "Každé číslo reprezentuje platnou adresu v adresním prostoru.",
        "sectionNumber": "1.1.2",
        "sectionTitle": "Adresní prostor"
      },
      {
        "uuid": "4206b23d-4857-48cf-813f-c2f1873f1b0d",
        "correct": "Pro uložení většího objektu je potřeba několik sousedních adres.",
        "incorrect": "Pro uložení většího objektu stačí pouze jedna adresa.",
        "sectionNumber": "1.1.2",
        "sectionTitle": "Adresní prostor"
      },
      {
        "uuid": "20aeff10-b2a4-4814-af7f-f25d2e3b712b",
        "correct": "Adresní prostor programu obvykle zahrnuje sekce pro kód, data a zásobník.",
        "incorrect": "Adresní prostor programu obvykle zahrnuje pouze sekce pro kód a dočasná data.",
        "sectionNumber": "1.1.3",
        "sectionTitle": "Paměť programu"
      },
      {
        "uuid": "5aea504c-dc94-4797-9abe-f6a213b4c369",
        "correct": "Zásobník v adresním prostoru slouží k ukládání informací o aktivních podprogramech.",
        "incorrect": "Zásobník v adresním prostoru slouží výhradně k ukládání statických dat programu.",
        "sectionNumber": "1.1.3",
        "sectionTitle": "Paměť programu"
      },
      {
        "uuid": "19778e88-1ecc-4bc1-8830-39495fc00a05",
        "correct": "Adresní prostor procesu může být dynamický a umožňovat změny velikosti za běhu programu.",
        "incorrect": "Adresní prostor procesu je statický a jeho velikost je pevně daná při spuštění programu.",
        "sectionNumber": "1.1.3",
        "sectionTitle": "Paměť programu"
      },
      {
        "uuid": "6bd80b68-f1d5-4533-b619-8649c0474161",
        "correct": "Fyzické adresy přímo pojmenovávají fyzické paměťové buňky hardwarových zařízení, zejména RAM.",
        "incorrect": "Fyzické adresy nepřímo pojmenovávají logické paměťové buňky softwarových zařízení, zejména ROM.",
        "sectionNumber": "1.1.4",
        "sectionTitle": "Fyzická paměť"
      },
      {
        "uuid": "4da1da6b-98a2-4ad0-8ba3-2d5bc8b4d9c7",
        "correct": "Většina fyzických adres v typickém počítači odpovídá buňkám operační paměti RAM.",
        "incorrect": "Většina fyzických adres v typickém počítači odpovídá buňkám permanentní paměti ROM.",
        "sectionNumber": "1.1.4",
        "sectionTitle": "Fyzická paměť"
      },
      {
        "uuid": "4be1a9b2-7b44-4e84-9d11-22d703e2a0c8",
        "correct": "Některé fyzické adresy mohou patřit periferiím, jako jsou grafické nebo síťové karty.",
        "incorrect": "Fyzické adresy mohou patřit pouze operační paměti RAM, nikdy ne periferiím.",
        "sectionNumber": "1.1.4",
        "sectionTitle": "Fyzická paměť"
      },
      {
        "uuid": "88b8cbaa-19a8-418c-8f4e-4e054a0d4b00",
        "correct": "Bloky fyzických adres, které nepatří RAM, obvykle nelze používat pro pracovní data výpočtů.",
        "incorrect": "Bloky fyzických adres, které nepatří RAM, se běžně používají pro ukládání pracovních dat programů.",
        "sectionNumber": "1.1.4",
        "sectionTitle": "Fyzická paměť"
      },
      {
        "uuid": "9fec3f7f-b9dc-4a10-9629-cb9913f6053c",
        "correct": "Operační paměť RAM slouží především k ukládání pracovních dat programů v klasickém smyslu.",
        "incorrect": "Operační paměť RAM slouží především k ukládání instrukcí operačního systému a metadat.",
        "sectionNumber": "1.1.4",
        "sectionTitle": "Fyzická paměť"
      },
      {
        "uuid": "773d5293-ba31-44ae-a86f-c34b6bf61b5d",
        "correct": "V principu je možné, aby programy pracovaly s pamětí přímo s fyzickými adresami.",
        "incorrect": "V principu není možné, aby programy pracovaly s pamětí přímo s fyzickými adresami.",
        "sectionNumber": "1.2.1",
        "sectionTitle": "Motivace"
      },
      {
        "uuid": "e63741d3-9e6a-4a25-9f11-d277cca08119",
        "correct": "Spuštění více programů současně vyžaduje koordinaci fyzických adres kvůli potenciálním konfliktům.",
        "incorrect": "Spuštění více programů současně nevyžaduje koordinaci fyzických adres a nezpůsobuje konflikty.",
        "sectionNumber": "1.2.1",
        "sectionTitle": "Motivace"
      },
      {
        "uuid": "42efd9d1-f816-441c-b905-2c80979f21a9",
        "correct": "Virtuální adresní prostory jsou pro programy odděleny od fyzických adresních prostorů.",
        "incorrect": "Virtuální adresní prostory jsou pro programy totožné s fyzickými adresními prostory.",
        "sectionNumber": "1.2.2",
        "sectionTitle": "Virtuální a fyzické adresy"
      },
      {
        "uuid": "078a1566-857b-46b3-9667-ed7551481807",
        "correct": "Fyzický adresní prostor je pro běžné uživatelské programy zcela nepřístupný.",
        "incorrect": "Fyzický adresní prostor je pro běžné uživatelské programy plně přístupný.",
        "sectionNumber": "1.2.2",
        "sectionTitle": "Virtuální a fyzické adresy"
      },
      {
        "uuid": "e2ea115c-9cab-4775-a0f3-14fc07a326b1",
        "correct": "Virtuálních adresních prostorů může existovat v počítači rovnou několik.",
        "incorrect": "V počítači existuje vždy pouze jeden virtuální adresní prostor.",
        "sectionNumber": "1.2.2",
        "sectionTitle": "Virtuální a fyzické adresy"
      },
      {
        "uuid": "f527fbaf-81b6-4603-b88e-0017de944e30",
        "correct": "Stejná adresa ve dvou různých virtuálních prostorech je považována za různé virtuální adresy.",
        "incorrect": "Stejná adresa ve dvou různých virtuálních prostorech ja považována za stejné virtuální adresy.",
        "sectionNumber": "1.2.2",
        "sectionTitle": "Virtuální a fyzické adresy"
      },
      {
        "uuid": "a6dcc6b9-8eb8-480e-8301-82b0743c789b",
        "correct": "Fyzická buňka má právě jednu fyzickou adresu, ale může mít více virtuálních adres.",
        "incorrect": "Fyzická buňka má vždy právě jednu fyzickou adresu a může mít pouze jednu virtuální adresu.",
        "sectionNumber": "1.2.3",
        "sectionTitle": "Překlad adres"
      },
      {
        "uuid": "2bfe562b-10db-460a-9e00-1f0df26920e6",
        "correct": "Virtuální adresní prostory umožňují oddělit programy tak, aby nesdílely stejné fyzické buňky.",
        "incorrect": "Virtuální adresní prostory jsou primárně určeny pro zvýšení rychlosti přístupu k fyzické paměti.",
        "sectionNumber": "1.2.3",
        "sectionTitle": "Překlad adres"
      },
      {
        "uuid": "dfe6d25a-e941-41e7-a5bd-7d0685ab539d",
        "correct": "Jedna fyzická paměťová buňka může být mapována do více virtuálních adres v různých adresních prostorech.",
        "incorrect": "Jedna fyzická paměťová buňka může být mapována pouze do jedné virtuální adresy, a to bez ohledu na adresní prostor.",
        "sectionNumber": "1.2.3",
        "sectionTitle": "Překlad adres"
      },
      {
        "uuid": "3a59bc28-b760-4cab-a6cc-e5a567546e0c",
        "correct": "Překlad adres musí být rychlý a je realizován specializovaným hardwarem v CPU.",
        "incorrect": "Překlad adres může být pomalý a je realizován softwarem v operačním systému.",
        "sectionNumber": "1.2.4",
        "sectionTitle": "Jednotka správy paměti"
      },
      {
        "uuid": "6605fcc6-4ac1-43fa-9a41-a3ebd375f993",
        "correct": "Jednotka správy paměti je programovatelná překladovými tabulkami a řízena jádrem OS.",
        "incorrect": "Jednotka správy paměti není programovatelná a není řízena jádrem OS.",
        "sectionNumber": "1.2.4",
        "sectionTitle": "Jednotka správy paměti"
      },
      {
        "uuid": "b26d5a92-5fd1-4f8a-aeb0-1340cf25bb58",
        "correct": "Virtuální adresa musí být přeložena na fyzickou adresu před přístupem do paměti.",
        "incorrect": "Fyzická adresa musí být přeložena na virtuální adresu před přístupem do paměti.",
        "sectionNumber": "1.2.4",
        "sectionTitle": "Jednotka správy paměti"
      },
      {
        "uuid": "cb01b040-f7f8-48b0-8727-12149c5024db",
        "correct": "Stránky virtuální paměti představují bloky virtuálních adres o pevné velikosti.",
        "incorrect": "Stránky virtuální paměti představují bloky virtuálních adres s proměnlivou velikostí.",
        "sectionNumber": "1.2.5",
        "sectionTitle": "Stránky"
      },
      {
        "uuid": "0fe00cda-ec91-48a0-a88d-4b40fb9a1b3e",
        "correct": "Velikost stránky virtuální paměti je typicky mocninou dvou.",
        "incorrect": "Velikost stránky virtuální paměti nemusí být mocninou dvou.",
        "sectionNumber": "1.2.5",
        "sectionTitle": "Stránky"
      },
      {
        "uuid": "474c0854-471e-4d4c-811d-e1ac3ee7b74b",
        "correct": "V rámci stránkování se spodních n bitů virtuální adresy mapuje přímo na fyzickou adresu.",
        "incorrect": "V rámci stránkování se spodních n bitů virtuální adresy nikdy nemapuje přímo na fyzickou adresu.",
        "sectionNumber": "1.2.5",
        "sectionTitle": "Stránky"
      },
      {
        "uuid": "ff0d6143-b8e6-4f81-90f5-04a3fda55fb9",
        "correct": "Použitím stránek se dosahuje zmenšení velikosti překladových tabulek oproti mapování každé adresy.",
        "incorrect": "Použitím stránek se velikost překladových tabulek nemění oproti mapování každé adresy.",
        "sectionNumber": "1.2.5",
        "sectionTitle": "Stránky"
      },
      {
        "uuid": "9e80d110-408a-4a6a-a27e-0e13da4c8752",
        "correct": "Počáteční adresa každé stránky virtuální paměti je vždy dělitelná velikostí stránky.",
        "incorrect": "Počáteční adresa každé stránky virtuální paměti nemusí být dělitelná velikostí stránky.",
        "sectionNumber": "1.2.5",
        "sectionTitle": "Stránky"
      },
      {
        "uuid": "e41373bf-f5f2-41a2-ad81-d9414ab744ea",
        "correct": "Stránkové tabulky jsou uloženy v operační paměti RAM a slouží k překladu virtuálních adres na fyzické.",
        "incorrect": "Stránkové tabulky jsou uloženy v cache procesoru a slouží k urychlení výpočtů.",
        "sectionNumber": "1.2.6",
        "sectionTitle": "Stránkové tabulky"
      },
      {
        "uuid": "47b93a5d-7177-47bb-9243-78a47fc31a17",
        "correct": "Pro velké adresní prostory se používají víceúrovňové překladové tabulky z důvodu efektivity paměti.",
        "incorrect": "Pro velké adresní prostory se používají jednoúrovňové překladové tabulky z důvodu rychlosti.",
        "sectionNumber": "1.2.6",
        "sectionTitle": "Stránkové tabulky"
      },
      {
        "uuid": "576b8be0-dd3c-485d-924e-062d444cc4f1",
        "correct": "Řídká stránková tabulka efektivně šetří paměť, protože nemusí mapovat všechny virtuální adresy.",
        "incorrect": "Řídká stránková tabulka plýtvá pamětí, protože musí mapovat všechny virtuální adresy.",
        "sectionNumber": "1.2.6",
        "sectionTitle": "Stránkové tabulky"
      },
      {
        "uuid": "1c347f2b-6bbd-4712-8f3f-db018aafdca7",
        "correct": "Segment virtuální adresy se používá jako index pro výběr řádku v příslušné úrovni překladové tabulky.",
        "incorrect": "Segment virtuální adresy se přímo používá jako offset v operační paměti pro přístup k datům.",
        "sectionNumber": "1.2.6",
        "sectionTitle": "Stránkové tabulky"
      },
      {
        "uuid": "e7d2fc3e-eb15-4e95-b716-970aa2b74f8d",
        "correct": "TLB (Translation Lookaside Buffer) je rychlá asociativní paměť pro ukládání nedávno přeložených adres.",
        "incorrect": "TLB (Translation Lookaside Buffer) je pomalá sekvenční paměť pro ukládání všech přeložených adres.",
        "sectionNumber": "1.2.6",
        "sectionTitle": "Stránkové tabulky"
      },
      {
        "uuid": "adadedc0-57ca-445a-8094-a3fb5958488a",
        "correct": "Formálněji proces označuje virtuální adresní prostor, který obsahuje kód programu a pracovní data.",
        "incorrect": "Formálněji proces označuje pouze kód programu, ale neobsahuje pracovní data.",
        "sectionNumber": "1.3.1",
        "sectionTitle": "Proces"
      },
      {
        "uuid": "013040dd-ccaf-42f7-abd5-caf342b279b4",
        "correct": "Operační systém vede záznam o každém procesu a proces může vlastnit různé systémové zdroje.",
        "incorrect": "Operační systém nevede záznam o procesech a proces nemůže vlastnit žádné systémové zdroje.",
        "sectionNumber": "1.3.1",
        "sectionTitle": "Proces"
      },
      {
        "uuid": "09a970d1-60e4-4f60-acaa-6bc76adfba31",
        "correct": "K jednomu procesu se může vázat libovolný počet vláken, což umožňuje paralelní provádění úloh.",
        "incorrect": "K jednomu procesu se může vázat maximálně jedno vlákno, čímž se omezuje paralelismus.",
        "sectionNumber": "1.3.1",
        "sectionTitle": "Proces"
      },
      {
        "uuid": "2f281585-014a-48ae-995b-f19e81f359c9",
        "correct": "V abstrakci počítače proces odpovídá virtuální operační paměti, zatímco vlákno výpočetní jednotce.",
        "incorrect": "V abstrakci počítače proces odpovídá virtuální výpočetní jednotce, a vlákno operační paměti.",
        "sectionNumber": "1.3.1",
        "sectionTitle": "Proces"
      },
      {
        "uuid": "007e8a81-eb5c-45e9-baf5-8f67f1634a09",
        "correct": "Adresní prostory procesů jsou v operačním systému převážně oddělené.",
        "incorrect": "Adresní prostory procesů jsou v operačním systému vždy plně sdílené.",
        "sectionNumber": "1.3.2",
        "sectionTitle": "Ochrana paměti"
      },
      {
        "uuid": "7548e6e6-549a-421b-9777-bf5ab92fcc50",
        "correct": "Standardně procesy nemají přímý přístup k paměti jiných procesů.",
        "incorrect": "Standardně procesy mají plný přístup k paměti všech procesů v systému.",
        "sectionNumber": "1.3.2",
        "sectionTitle": "Ochrana paměti"
      },
      {
        "uuid": "9e8f7ef3-7ff3-4aaf-ad46-fc353e9004f6",
        "correct": "Operační systémy umožňují sdílení kódu mezi procesy pouze pro čtení.",
        "incorrect": "Operační systémy běžně sdílejí kód mezi procesy s plným přístupem pro zápis.",
        "sectionNumber": "1.3.2",
        "sectionTitle": "Ochrana paměti"
      },
      {
        "uuid": "475238a6-5280-4003-beb2-af2a0d08d18b",
        "correct": "Sdílená paměť s možností zápisu slouží jako komunikační mechanismus procesů.",
        "incorrect": "Sdílená paměť s zápisem slouží k izolaci procesů a omezení komunikace.",
        "sectionNumber": "1.3.2",
        "sectionTitle": "Ochrana paměti"
      },
      {
        "uuid": "d5190114-b6fc-464c-83b9-e87a0348c7f2",
        "correct": "Virtuální adresy sdílené paměti nemusí být v různých procesech nutně stejné.",
        "incorrect": "Virtuální adresy sdílené paměti musí být vždy identické ve všech procesech.",
        "sectionNumber": "1.3.2",
        "sectionTitle": "Ochrana paměti"
      },
      {
        "uuid": "f96e23dd-2c3b-46d1-9347-17acdc23c32c",
        "correct": "Fyzická adresa stránkovací tabulky první úrovně je uložena v registru procesoru.",
        "incorrect": "Virtuální adresa stránkovací tabulky první úrovně je uložena v registru procesoru.",
        "sectionNumber": "1.3.3",
        "sectionTitle": "Přepnutí procesu"
      },
      {
        "uuid": "e4a1debc-8f3a-46a5-8021-2dfdbe1d39b2",
        "correct": "Nastavení adresy stránkovací tabulky první úrovně je privilegovaná instrukce.",
        "incorrect": "Nastavení adresy stránkovací tabulky první úrovně může provést i běžný program.",
        "sectionNumber": "1.3.3",
        "sectionTitle": "Přepnutí procesu"
      },
      {
        "uuid": "48a6f3d5-7a48-438e-a6bb-e1f9883f5888",
        "correct": "Přepnutí procesu zahrnuje změnu aktivní stránkovací tabulky.",
        "incorrect": "Přepnutí procesu nezahrnuje změnu aktivní stránkovací tabulky.",
        "sectionNumber": "1.3.3",
        "sectionTitle": "Přepnutí procesu"
      },
      {
        "uuid": "78ffd594-2980-457b-8727-384c1f02a3aa",
        "correct": "Přepnutí vlákna souvisí s výměnou hodnot výpočetních registrů.",
        "incorrect": "Přepnutí procesu souvisí s výměnou hodnot výpočetních registrů.",
        "sectionNumber": "1.3.3",
        "sectionTitle": "Přepnutí procesu"
      },
      {
        "uuid": "7c5e270d-7d56-4fda-89b5-1489c25624ce",
        "correct": "Virtuální výpočetní jednotku představuje vlákno, nikoliv proces.",
        "incorrect": "Virtuální výpočetní jednotku představuje proces, nikoliv vlákno.",
        "sectionNumber": "1.3.3",
        "sectionTitle": "Přepnutí procesu"
      },
      {
        "uuid": "6883baf5-1be4-48c3-b097-4ce501a5daab",
        "correct": "Proces se vytváří duplikací, v POSIX systémech operací fork.",
        "incorrect": "Proces se vytváří klonováním, v POSIX systémech operací clone.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "17fdd2da-3715-4421-bcfe-1f3dbc49f033",
        "correct": "Copy-on-write duplikuje adresní prostor, ale fyzická data sdílí do prvního zápisu.",
        "incorrect": "Copy-on-write duplikuje adresní prostor i fyzická data okamžitě při fork.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "2853ca5d-7eab-4fe3-81b9-46a6b2862856",
        "correct": "Stránky v copy-on-write jsou zpočátku jen pro čtení a kopírují se až při pokusu o zápis.",
        "incorrect": "Stránky v copy-on-write jsou zpočátku pro čtení i zápis a kopírují se ihned.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "51e3e18a-dfd3-4681-92ab-e489e38904c7",
        "correct": "Mechanismus copy-on-write vytváří iluzi oddělených adresních prostorů procesů.",
        "incorrect": "Mechanismus copy-on-write vytváří skutečně oddělené adresní prostory procesů od začátku.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "8aafc3d6-e42b-452f-a810-86a276669a25",
        "correct": "Operace fork s copy-on-write je obvykle rychlejší než plná kopie paměti procesu.",
        "incorrect": "Operace fork s copy-on-write je vždy pomalejší než plná kopie paměti procesu.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "bbd990d9-a4bc-43a7-a13b-94f544cee0fe",
        "correct": "Při zápisu do copy-on-write stránky vyvolá proces výjimku ochrany paměti.",
        "incorrect": "Při zápisu do copy-on-write stránky se data rovnou zapíší bez výjimky.",
        "sectionNumber": "1.3.4",
        "sectionTitle": "Vytvoření procesu"
      },
      {
        "uuid": "9aceae88-dfa7-4ffa-8c33-a43c0e8b3e87",
        "correct": "Neplatná virtuální adresa způsobí výjimku, kterou následně řeší jádro operačního systému.",
        "incorrect": "Neplatná virtuální adresa nezpůsobí výjimku a jádro operačního systému ji neřeší.",
        "sectionNumber": "1.4.1",
        "sectionTitle": "Neplatné adresy"
      },
      {
        "uuid": "c996603f-0eba-42e6-8995-12d646a96a83",
        "correct": "Při pokusu o zápis na virtuální adresu s příznakem „jen pro čtení“ dojde k výjimce ochrany paměti.",
        "incorrect": "Při pokusu o zápis na virtuální adresu s příznakem „jen pro čtení“ nedojde k výjimce ochrany paměti.",
        "sectionNumber": "1.4.1",
        "sectionTitle": "Neplatné adresy"
      },
      {
        "uuid": "83deb08b-9934-48a0-8f1a-8f3da8223a79",
        "correct": "Operační systém může využít prázdný řádek stránkovací tabulky pro vlastní potřeby.",
        "incorrect": "Operační systém nemůže využít prázdný řádek stránkovací tabulky pro vlastní potřeby.",
        "sectionNumber": "1.4.1",
        "sectionTitle": "Neplatné adresy"
      },
      {
        "uuid": "321b1e7e-af6f-49f9-9225-21b25ea3e90d",
        "correct": "Operační systém může přesunout stránky z operační paměti na externí úložiště.",
        "incorrect": "Operační systém nemůže přesunout stránky z operační paměti na externí úložiště.",
        "sectionNumber": "1.4.2",
        "sectionTitle": "Externí stránkování"
      },
      {
        "uuid": "edb9545f-e78e-415e-b10f-09f4ca9f43cf",
        "correct": "V stránkové tabulce operační systém označí adresu za neplatnou, když je stránka přesunuta z RAM.",
        "incorrect": "V stránkové tabulce operační systém vymaže adresu, když je stránka přesunuta z RAM.",
        "sectionNumber": "1.4.2",
        "sectionTitle": "Externí stránkování"
      },
      {
        "uuid": "803f0b7b-edf9-4b1e-9f49-b1e994dc9aca",
        "correct": "Virtuální paměť umožňuje přidělit programům více paměti, než je fyzicky dostupné v operační paměti.",
        "incorrect": "Virtuální paměť omezuje přidělení paměti programům na množství fyzické operační paměti.",
        "sectionNumber": "1.4.2",
        "sectionTitle": "Externí stránkování"
      },
      {
        "uuid": "2cc9393f-bf10-47ba-b12a-90c13b096295",
        "correct": "Přístup ke stránkám na externím úložišti je pomalejší než přístup ke stránkám v operační paměti.",
        "incorrect": "Přístup ke stránkám na externím úložišti je rychlejší než přístup ke stránkám v operační paměti.",
        "sectionNumber": "1.4.2",
        "sectionTitle": "Externí stránkování"
      },
      {
        "uuid": "03c10304-71f9-463c-a81a-2ccc45a47268",
        "correct": "Stránka označuje rozsah virtuálních adres.",
        "incorrect": "Stránka označuje rozsah fyzických adres.",
        "sectionNumber": "1.4.3",
        "sectionTitle": "Rámce a stránky"
      },
      {
        "uuid": "afbbc4b3-b0e2-47ff-acfd-276096de01f7",
        "correct": "Rámec označuje rozsah fyzických adres.",
        "incorrect": "Rámec označuje rozsah virtuálních adres.",
        "sectionNumber": "1.4.3",
        "sectionTitle": "Rámce a stránky"
      },
      {
        "uuid": "10e87cbd-1603-40cd-aec1-24019ed5c44c",
        "correct": "Stránka je uložena v rámci.",
        "incorrect": "Rámec je uložen ve stránce.",
        "sectionNumber": "1.4.3",
        "sectionTitle": "Rámce a stránky"
      },
      {
        "uuid": "50568d08-cfce-4808-b697-2fbda578a144",
        "correct": "Líné načítání spustitelného souboru využívá stránkovací tabulky k načítání stránek z disku dle potřeby.",
        "incorrect": "Líné načítání spustitelného souboru nevyužívá stránkovací tabulky a načítá celý soubor najednou.",
        "sectionNumber": "1.4.4",
        "sectionTitle": "Líné načítání"
      },
      {
        "uuid": "7d2688f5-fff5-4723-81ef-46de239a0aa7",
        "correct": "Při líném načítání spustitelného souboru není nutné nahrávat ihned celý obsah souboru do operační paměti.",
        "incorrect": "Při líném načítání spustitelného souboru je nezbytné nahrát kompletní obsah souboru do operační paměti před spuštěním.",
        "sectionNumber": "1.4.4",
        "sectionTitle": "Líné načítání"
      },
      {
        "uuid": "05831b3b-77ec-4ecf-9aea-8da1f2e168b1",
        "correct": "Mechanismus líného načítání je podobný externímu stránkování, avšak odpadá nutnost hledat oběť pro výměnu stránek.",
        "incorrect": "Mechanismus líného načítání se zásadně liší od externího stránkování a vyžaduje složitější algoritmy pro výběr oběti.",
        "sectionNumber": "1.4.4",
        "sectionTitle": "Líné načítání"
      },
      {
        "uuid": "983fc2b0-28a7-416a-9f38-2c54bc0672c6",
        "correct": "Líné načítání lze efektivně kombinovat s klasickým externím stránkováním pro optimalizaci správy operační paměti.",
        "incorrect": "Líné načítání a klasické externí stránkování jsou neslučitelné metody a nemohou být kombinovány.",
        "sectionNumber": "1.4.4",
        "sectionTitle": "Líné načítání"
      },
      {
        "uuid": "7d49eaed-f598-4e50-88a1-8587bf0a408b",
        "correct": "Mapování datových souborů do paměti je nejdůležitější využití externího stránkování v praxi.",
        "incorrect": "Mapování datových souborů do paměti se používá pro správu paměti procesu, nikoliv pro přístup k souborům.",
        "sectionNumber": "1.4.5",
        "sectionTitle": "Mapování souborů"
      },
      {
        "uuid": "2529caf0-e62b-4628-8e21-758811d9bdfb",
        "correct": "Při mapování souboru do paměti program přistupuje k souboru jako k místu v operační paměti.",
        "incorrect": "Při mapování souboru do paměti program musí používat standardní systémová volání pro čtení a zápis.",
        "sectionNumber": "1.4.5",
        "sectionTitle": "Mapování souborů"
      },
      {
        "uuid": "4d478b54-2317-454f-9098-b3e5e0ab10ea",
        "correct": "Externí stránkování umožňuje uložit stránky mapovaného souboru do běžného datového souboru.",
        "incorrect": "Externí stránkování pro mapování souborů vyžaduje speciální diskový oddíl, nikoliv běžný soubor.",
        "sectionNumber": "1.4.5",
        "sectionTitle": "Mapování souborů"
      }
    ]
  },
  {
    "uuid": "dc119fde-5b9a-4b1d-ab0a-b4e5d1b2fb77",
    "sectionNumber": "2",
    "sectionTitle": "Virtualizace procesoru",
    "statements": [
      {
        "uuid": "bf8b2927-4e17-418d-a080-43532e0ed1f2",
        "correct": "Aritmetické a logické instrukce procesoru zahrnují sčítání, bitové posuvy a relační operátory.",
        "incorrect": "Aritmetické a logické instrukce procesoru zahrnují pouze sčítání a odčítání celých čísel.",
        "sectionNumber": "2.1.1",
        "sectionTitle": "Výpočet"
      },
      {
        "uuid": "9e54cd6a-118f-46c0-9d59-5f038db7094b",
        "correct": "Instrukce pro přístup do paměti, označené jako ld a st, umožňují procesoru pracovat s daty uloženými v paměti.",
        "incorrect": "Instrukce ld a st slouží výhradně k provádění aritmetických operací s daty v registrech procesoru.",
        "sectionNumber": "2.1.1",
        "sectionTitle": "Výpočet"
      },
      {
        "uuid": "ccf49522-96e3-4898-903a-e8511e267b0b",
        "correct": "Mezi instrukce řízení toku patří podmíněné skoky a nepřímé skoky, které ovlivňují pořadí provádění instrukcí.",
        "incorrect": "Instrukce řízení toku se používají pouze pro manipulaci s daty v paměti a nemají vliv na pořadí provádění instrukcí.",
        "sectionNumber": "2.1.1",
        "sectionTitle": "Výpočet"
      },
      {
        "uuid": "761f2e50-8748-44fe-b47b-a7e6c95a4db6",
        "correct": "Realizace podprogramů pomocí specializovaných instrukcí zjednodušuje abstrakci, ale není pro funkčnost procesoru nezbytná.",
        "incorrect": "Pro implementaci podprogramů jsou specializované instrukce procesoru naprosto nezbytné a nelze je nahradit jednoduššími instrukcemi.",
        "sectionNumber": "2.1.1",
        "sectionTitle": "Výpočet"
      },
      {
        "uuid": "473c1123-bea5-4855-8cfc-fb013fa66ec6",
        "correct": "Registry procesoru ukládají čísla reprezentovaná jako celá slova, nikoliv jednotlivé bajty.",
        "incorrect": "Registry procesoru ukládají čísla reprezentovaná jako jednotlivé bajty, nikoliv celá slova.",
        "sectionNumber": "2.1.2",
        "sectionTitle": "Registry"
      },
      {
        "uuid": "6b5e059f-98fa-4549-ab9a-85f839b8904f",
        "correct": "Programový čítač obsahuje virtuální adresu instrukce, která se má aktuálně provést.",
        "incorrect": "Programový čítač obsahuje fyzickou adresu instrukce, která se má aktuálně provést.",
        "sectionNumber": "2.1.2",
        "sectionTitle": "Registry"
      },
      {
        "uuid": "a8e9f62e-a60d-43f2-bcf1-795b0b2908a9",
        "correct": "Paměťové adresy lze indexovat a vypočítat, registry se v instrukcích používají přímo.",
        "incorrect": "Registry lze indexovat a vypočítat, paměťové adresy se v instrukcích používají přímo.",
        "sectionNumber": "2.1.2",
        "sectionTitle": "Registry"
      },
      {
        "uuid": "cb32d73c-4f9a-4bdc-926f-6f5e884b5854",
        "correct": "Hodnotu programového čítače lze měnit instrukcemi řízení toku programu, nikoliv aritmetickými instrukcemi.",
        "incorrect": "Hodnotu programového čítače lze měnit aritmetickými instrukcemi, nikoliv instrukcemi řízení toku programu.",
        "sectionNumber": "2.1.2",
        "sectionTitle": "Registry"
      },
      {
        "uuid": "e4c8bf3e-ac6a-4565-a2ee-e2f09643426f",
        "correct": "Každá instrukce operačního systému má za následek změnu stavu procesoru.",
        "incorrect": "Některé instrukce operačního systému nemají žádný vliv na stav procesoru.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "9eba04a3-f219-4ad1-b93c-2725a9829f07",
        "correct": "Výpočet programu je definován jako posloupnost elementárních změn stavu systému.",
        "incorrect": "Výpočet programu je jednorázová operace bez posloupnosti změn stavu.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "e31a9b05-7b98-4ebc-b097-dfd48ce27976",
        "correct": "Efekt instrukce je elementární změna stavu, což je základní stavební kámen výpočtu.",
        "incorrect": "Efekt instrukce je komplexní transformace stavu, nikoliv elementární změna.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "eb05d003-832f-4279-8c81-2727e78f7468",
        "correct": "Programy manipulují se stavem procesoru, paměti a periferií pro dosažení výstupů ze vstupů.",
        "incorrect": "Programy ignorují stav systému a přímo generují výstupy nezávisle na vstupech.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "fb4e17ef-7b95-49ca-93a1-ad6f2b7f66f4",
        "correct": "Vstupy a výstupy programu jsou integrální součástí celkového stavu výpočetního systému.",
        "incorrect": "Vstupy a výstupy programu existují mimo kontext stavu výpočetního systému.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "7ff47499-d48b-4633-ae62-477f4deb1010",
        "correct": "Instrukce typu `add op1 op2 -> result` typicky sečte hodnoty registrů op1 a op2.",
        "incorrect": "Instrukce typu `add op1 op2 -> result` obvykle provádí bitový posun hodnot registrů.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "6fcc9b66-d7cc-4ebf-95bd-936b868407a3",
        "correct": "Po provedení instrukce `add op1 op2 -> result` se programový čítač posune na další instrukci.",
        "incorrect": "Po provedení instrukce `add op1 op2 -> result` programový čítač zůstává nezměněn.",
        "sectionNumber": "2.1.4",
        "sectionTitle": "Efekt instrukce"
      },
      {
        "uuid": "a30f59f2-69c1-4c23-ad67-beb097341e2a",
        "correct": "Program je tvořen instrukcemi uloženými v paměti.",
        "incorrect": "Program je tvořen daty uloženými v registech procesoru.",
        "sectionNumber": "2.1.5",
        "sectionTitle": "Program"
      },
      {
        "uuid": "9bb77e9b-d246-4ac4-bd9e-e73ee5c00629",
        "correct": "Většina programu je prováděna v pořadí od nižších k vyšším virtuálním adresám.",
        "incorrect": "Většina programu je prováděna v náhodném pořadí adres v paměti.",
        "sectionNumber": "2.1.5",
        "sectionTitle": "Program"
      },
      {
        "uuid": "2dff8de0-804b-403e-b6ac-74d5651911b2",
        "correct": "Instrukce skoku mohou způsobit návrat k dříve vykonané instrukci, například u cyklů.",
        "incorrect": "Instrukce skoku nikdy nemohou způsobit návrat k dříve vykonané instrukci.",
        "sectionNumber": "2.1.5",
        "sectionTitle": "Program"
      },
      {
        "uuid": "eacead6c-ddc5-4536-acfb-c790ea8d7597",
        "correct": "Podmíněné příkazy obvykle posouvají programový čítač dopředu v adresovém prostoru.",
        "incorrect": "Podmíněné příkazy obvykle posouvají programový čítač dozadu v adresovém prostoru.",
        "sectionNumber": "2.1.5",
        "sectionTitle": "Program"
      },
      {
        "uuid": "fcbadfd9-3a83-4cf6-aa3f-03ec557a9282",
        "correct": "Podprogram je pomocný blok instrukcí, který se může opakovaně volat z různých částí programu.",
        "incorrect": "Podprogram je hlavní program, který se volá pouze jednou na začátku výpočtu.",
        "sectionNumber": "2.1.6",
        "sectionTitle": "Zásobník"
      },
      {
        "uuid": "c8d0cf24-5630-42d9-8804-ea0f33b47211",
        "correct": "Aktivace podprogramu zahrnuje uložení části stavu procesoru a vyhrazení místa pro lokální proměnné.",
        "incorrect": "Aktivace podprogramu nevyžaduje uložení stavu procesoru, pouze skok na začátek podprogramu.",
        "sectionNumber": "2.1.6",
        "sectionTitle": "Zásobník"
      },
      {
        "uuid": "9bd17c43-bc04-46f9-9f5b-0d5142a23087",
        "correct": "Zásobník je spojitá oblast virtuálního adresního prostoru, která se používá pro realizaci podprogramů.",
        "incorrect": "Zásobník je diskrétní oblast fyzické paměti, která se používá pro ukládání globálních proměnných.",
        "sectionNumber": "2.1.6",
        "sectionTitle": "Zásobník"
      },
      {
        "uuid": "854edbe6-7a40-4c55-bdb3-6f1f5f3ffa4d",
        "correct": "Návrat z podprogramu je realizován skokem zpět na instrukci následující po aktivaci podprogramu.",
        "incorrect": "Návrat z podprogramu je realizován ukončením procesu a uvolněním všech zdrojů.",
        "sectionNumber": "2.1.6",
        "sectionTitle": "Zásobník"
      },
      {
        "uuid": "d596bc0b-40dd-47a2-bb4d-f1b20d379d2e",
        "correct": "Pro realizaci podprogramů se běžně používá hardwarový zásobník.",
        "incorrect": "Pro realizaci podprogramů se běžně používá fronta.",
        "sectionNumber": "2.1.6",
        "sectionTitle": "Zásobník"
      },
      {
        "uuid": "5ab28e8c-74ab-499d-b677-beea5cc5d139",
        "correct": "Zásobník typického programu je tvořen sekvencí aktivačních záznamů, známých jako rámce.",
        "incorrect": "Zásobník typického programu je tvořen sekvencí instrukcí procesoru, známých jako rámce.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "4e54333c-a4d5-4fdd-bbf6-8352a4270c0a",
        "correct": "Každý aktivační záznam v zásobníku odpovídá jedné dosud neskončené aktivaci podprogramu.",
        "incorrect": "Každý aktivační záznam v zásobníku odpovídá každému volání podprogramu, i skončenému.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "5fc76e23-a971-4d4b-8984-9494df6d4f53",
        "correct": "Zásobník funguje na principu LIFO, což znamená, že poslední zavolaný podprogram končí první.",
        "incorrect": "Zásobník funguje na principu FIFO, kde první zavolaný podprogram končí první.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "d6ee4141-b009-4769-996f-64abef06e800",
        "correct": "Pro správnou funkci zásobníku musí podprogram skončit až po skončení všech jím aktivovaných podprogramů.",
        "incorrect": "Pro správnou funkci zásobníku může podprogram skončit i před skončením jím aktivovaných podprogramů.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "3f30fc17-41ad-45ca-9805-e3c3c6c3ca32",
        "correct": "Některé procesory používají zásobníky, které rostou směrem k nižším paměťovým adresám.",
        "incorrect": "Všechny procesory používají zásobníky, které rostou směrem k vyšším paměťovým adresám.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "00c17def-2079-42b8-8ef3-2e69a56dcb32",
        "correct": "Aktivační záznam obvykle obsahuje lokální proměnné a uložené registry pro obnovení stavu po návratu.",
        "incorrect": "Aktivační záznam obvykle obsahuje pouze globální proměnné a žádné registry procesoru.",
        "sectionNumber": "2.1.7",
        "sectionTitle": "Aktivační záznam"
      },
      {
        "uuid": "fb272868-65c4-450b-a5c7-d221be708944",
        "correct": "V neizolovaném výpočtu může externí entita změnit hodnotu v paměti programu a ovlivnit tak jeho běh.",
        "incorrect": "V izolovaném výpočtu může externí entita změnit hodnotu v paměti programu a ovlivnit tak jeho běh.",
        "sectionNumber": "2.2.2",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "21460bcf-79c4-43b7-8531-250240ea9058",
        "correct": "Synchronizace v operačních systémech popisuje interakci výpočtů, kdy externí událost ovlivní průběh programu.",
        "incorrect": "Synchronizace v operačních systémech popisuje izolovaný výpočet, kdy externí událost neovlivní průběh programu.",
        "sectionNumber": "2.2.2",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "070237a2-72b5-437e-9c70-641ada9f91cc",
        "correct": "Virtuální adresa 0x1000 v programu nemusí odpovídat fyzické adrese 0x1000 v paměti systému.",
        "incorrect": "Virtuální adresa 0x1000 v programu vždy odpovídá fyzické adrese 0x1000 v paměti systému.",
        "sectionNumber": "2.2.2",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "7ad7c784-5d4c-431d-963e-530db91f5e21",
        "correct": "Stav logického procesoru je definován výhradně hodnotami registrů procesoru.",
        "incorrect": "Stav logického procesoru je definován obsahem operační paměti.",
        "sectionNumber": "2.2.4",
        "sectionTitle": "Logický procesor"
      },
      {
        "uuid": "2c413012-620a-4e32-8e16-938e44bf3213",
        "correct": "Změna stavu logického procesoru nastává pouze vykonáváním instrukcí.",
        "incorrect": "Změna stavu logického procesoru může nastat i bez vykonávání instrukcí.",
        "sectionNumber": "2.2.4",
        "sectionTitle": "Logický procesor"
      },
      {
        "uuid": "ad82e302-dccb-4bc5-99f7-5abef9575c8e",
        "correct": "Virtualizace procesoru umožňuje provozovat více logických procesorů na jednom fyzickém procesoru.",
        "incorrect": "Virtualizace procesoru omezuje počet logických procesorů na maximálně jeden na fyzický procesor.",
        "sectionNumber": "2.2.4",
        "sectionTitle": "Logický procesor"
      },
      {
        "uuid": "66767e71-25be-45ac-bfad-e88e3432f0a6",
        "correct": "Operační systém dokáže uložit a obnovit stav logického procesoru pro účely virtualizace.",
        "incorrect": "Operační systém nemůže uložit ani obnovit stav logického procesoru.",
        "sectionNumber": "2.2.4",
        "sectionTitle": "Logický procesor"
      },
      {
        "uuid": "e6860944-4369-448a-8404-6d6e982b084e",
        "correct": "Přerušení je vnější událost, která umožňuje operačnímu systému převzít kontrolu nad fyzickým procesorem.",
        "incorrect": "Přerušení je událost vyvolaná vláknem, která umožňuje operačnímu systému převzít kontrolu.",
        "sectionNumber": "2.2.4",
        "sectionTitle": "Logický procesor"
      },
      {
        "uuid": "54cb05c9-fc03-49fe-bc5b-eb719ec6e854",
        "correct": "Díky uložení a obnově registrů se vlákno může jevit jako samostatný logický procesor.",
        "incorrect": "Vlákno funguje zcela nezávisle na uložení a obnově registrů fyzického procesoru.",
        "sectionNumber": "2.2.5",
        "sectionTitle": "Přepnutí vlákna"
      },
      {
        "uuid": "3772cd6d-c3b6-4f33-b317-16f412c263f4",
        "correct": "Pro správnou funkčnost vláken je nezbytná hardwarová podpora procesoru pro uložení a obnovu jeho stavu.",
        "incorrect": "Softwarová emulace plně postačuje pro uložení a obnovu stavu procesoru pro běh vláken bez hardwarové podpory.",
        "sectionNumber": "2.2.5",
        "sectionTitle": "Přepnutí vlákna"
      },
      {
        "uuid": "c1640fda-c909-40dd-83e5-39c4bb58f55c",
        "correct": "Obsluha přerušení, která vyžaduje uložení části stavu, poskytuje základ pro mechanismy vláken.",
        "incorrect": "Obsluha přerušení nemá žádný vliv na mechanismy uložení stavu, které se používají pro vlákna.",
        "sectionNumber": "2.2.5",
        "sectionTitle": "Přepnutí vlákna"
      },
      {
        "uuid": "afc7438e-f2d3-4a07-95a0-2c12aafd3c3e",
        "correct": "Programový čítač představuje největší komplikaci při implementaci uložení a obnovení kontextu vláken.",
        "incorrect": "Uložení a obnovení programového čítače je triviální operací v kontextu správy vláken.",
        "sectionNumber": "2.2.5",
        "sectionTitle": "Přepnutí vlákna"
      },
      {
        "uuid": "25533738-63e2-4301-8303-47ec867898e9",
        "correct": "Střídavé provádění více vláken na jednom procesoru je umožněno mechanismy uložení a obnovy registrů.",
        "incorrect": "Paralelní provádění více vláken na jednom procesoru je přímo umožněno mechanismy uložení a obnovy registrů.",
        "sectionNumber": "2.2.5",
        "sectionTitle": "Přepnutí vlákna"
      },
      {
        "uuid": "a0662570-cd8a-4509-ab96-5d29c5076b64",
        "correct": "Maximalizace propustnosti plánovače operačního systému se zaměřuje na maximalizaci práce vykonané za jednotku času.",
        "incorrect": "Maximalizace propustnosti plánovače operačního systému se zaměřuje na minimalizaci reakční doby systému.",
        "sectionNumber": "2.3.2",
        "sectionTitle": "Cíle"
      },
      {
        "uuid": "59abb30b-7332-47e6-a323-491837d571f6",
        "correct": "Minimalizace latence v plánování operačního systému je klíčová pro interaktivní programy a síťové služby.",
        "incorrect": "Minimalizace latence v plánování operačního systému je klíčová pro výpočetně náročné programy.",
        "sectionNumber": "2.3.2",
        "sectionTitle": "Cíle"
      },
      {
        "uuid": "17eec286-bac2-43bf-9a2c-4718f0e1650c",
        "correct": "Spravedlivost v plánování operačního systému zajišťuje, že všechna vlákna obdrží přibližně stejný díl procesorového času.",
        "incorrect": "Spravedlivost v plánování operačního systému upřednostňuje vlákna s nejvyšší prioritou bez ohledu na ostatní vlákna.",
        "sectionNumber": "2.3.2",
        "sectionTitle": "Cíle"
      },
      {
        "uuid": "91d73888-f1b3-45c4-bf86-7a987b57c505",
        "correct": "Požadavky na minimální latenci a maximální propustnost jsou v plánování operačního systému často protichůdné.",
        "incorrect": "Požadavky na minimální latenci a maximální propustnost se v plánování operačního systému vzájemně doplňují a posilují.",
        "sectionNumber": "2.3.2",
        "sectionTitle": "Cíle"
      },
      {
        "uuid": "4541c5c5-1f68-4cc2-8857-facb4255e58b",
        "correct": "Příliš časté střídání vláken může snížit propustnost systému kvůli režii spojené s přepínáním kontextu.",
        "incorrect": "Příliš časté střídání vláken obvykle zvyšuje propustnost systému díky lepšímu využití procesoru.",
        "sectionNumber": "2.3.2",
        "sectionTitle": "Cíle"
      },
      {
        "uuid": "934e4899-d170-4f9c-84bd-22b1be4fb8a0",
        "correct": "Vlákno se může nacházet ve stavech běžící, připravené nebo čekající na událost.",
        "incorrect": "Vlákno se může nacházet ve stavech běžící, blokované, uspáno a čekající na událost.",
        "sectionNumber": "2.3.3",
        "sectionTitle": "Stav vlákna"
      },
      {
        "uuid": "6b3707a0-0370-4076-a0d2-695755d01f12",
        "correct": "Plánovač operačního systému rozhoduje o přechodu vlákna z běžícího stavu do stavu připraveno.",
        "incorrect": "Samotné vlákno rozhoduje o svém přechodu z běžícího stavu do stavu připraveno.",
        "sectionNumber": "2.3.3",
        "sectionTitle": "Stav vlákna"
      },
      {
        "uuid": "78e64b0c-f8de-4f9d-8d0c-36f0fd2bcc15",
        "correct": "Přímý přechod vlákna ze stavu čekání na procesor do stavu čekání na událost není možný.",
        "incorrect": "Přímý přechod vlákna ze stavu čekání na procesor do stavu čekání na událost je běžně prováděn.",
        "sectionNumber": "2.3.3",
        "sectionTitle": "Stav vlákna"
      },
      {
        "uuid": "3d3a17c5-ab60-43b2-bd50-f5a711c13db2",
        "correct": "Po nastání události a dostupnosti procesoru přechází vlákno z čekání na událost do stavu běžící.",
        "incorrect": "Po nastání události vlákno z čekání na událost vždy okamžitě přechází do stavu běžící.",
        "sectionNumber": "2.3.3",
        "sectionTitle": "Stav vlákna"
      },
      {
        "uuid": "5e6bc6a4-bcea-4360-b088-7e69be689a5e",
        "correct": "Pokud po události není procesor dostupný, vlákno čekající na událost přejde do stavu připraveno.",
        "incorrect": "Pokud po události není procesor dostupný, vlákno čekající na událost zůstane ve stavu čekání na událost.",
        "sectionNumber": "2.3.3",
        "sectionTitle": "Stav vlákna"
      },
      {
        "uuid": "83ce430b-c57b-4fa0-9e15-7a294bd7c446",
        "correct": "Běhové fronty úloh jsou klíčovým nástrojem plánovače operačního systému pro správu vláken čekajících na procesor.",
        "incorrect": "Běhové fronty úloh se používají pro ukládání hotových procesů, nikoliv pro vlákna čekající na procesor.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "121e3adb-3e95-4ba5-b399-639eea2419fd",
        "correct": "Plánovací algoritmy se liší zejména v chování běhových front úloh, které ovlivňují pořadí a prioritu vláken.",
        "incorrect": "Plánovací algoritmy se liší pouze v rychlosti přepínání kontextu, nikoliv v chování běhových front úloh.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "ee0b661c-4aae-4152-8152-c129bdfebfaf",
        "correct": "Globální fronta úloh je sdílená mezi všemi procesory, zatímco lokální fronta je specifická pro jeden procesor.",
        "incorrect": "Globální fronta úloh je specifická pro jeden procesor, zatímco lokální fronta je sdílená mezi všemi procesory.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "0b8c5a84-f8f2-4fde-9db0-1d42e6fa9199",
        "correct": "FIFO fronta zpracovává vlákna v pořadí, v jakém byla do fronty zařazena, bez ohledu na prioritu.",
        "incorrect": "FIFO fronta zpracovává vlákna s nejvyšší prioritou jako první, bez ohledu na pořadí zařazení.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "3a42e3a9-c623-4e1e-bae0-aa47a401a4a4",
        "correct": "Implementace fronty úloh, například monolitická nebo složená, má zásadní vliv na chování plánovače.",
        "incorrect": "Implementace fronty úloh nemá žádný vliv na chování plánovače, protože plánovač je řízen pouze prioritami.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "6ea4c80e-dade-4968-b61b-6ce7f389f9d3",
        "correct": "Prioritní fronty umožňují vláknům s vyšší prioritou předbíhat vlákna s nižší prioritou ve frontě úloh.",
        "incorrect": "Prioritní fronty zajišťují, že všechna vlákna mají stejnou šanci na přidělení procesoru bez ohledu na prioritu.",
        "sectionNumber": "2.3.4",
        "sectionTitle": "Fronta úloh"
      },
      {
        "uuid": "c8774ace-b221-4bfa-9a3d-328dd6349181",
        "correct": "Plánovač s afinitou se snaží opakovaně plánovat vlákno na stejném fyzickém procesoru.",
        "incorrect": "Plánovač s afinitou automaticky migruje vlákna mezi procesory pro lepší vyvážení zátěže.",
        "sectionNumber": "2.3.5",
        "sectionTitle": "Afinita"
      },
      {
        "uuid": "e1671a9e-8adb-4407-8f10-3dd447315a06",
        "correct": "Migrace vlákna mezi procesory je drahá operace kvůli sdílení obsahu mezipaměti mezi nimi.",
        "incorrect": "Migrace vlákna mezi procesory je levná operace, která zlepšuje výkon systému.",
        "sectionNumber": "2.3.5",
        "sectionTitle": "Afinita"
      },
      {
        "uuid": "2caef622-1484-4a89-b3a4-de36f53a8ef1",
        "correct": "Kradení práce je mechanismus, kde procesor bez práce \"ukradne\" vlákno z jiné fronty.",
        "incorrect": "Kradení práce je mechanismus, kde procesor s přebytkem práce \"ukradne\" vlákno z jiné fronty.",
        "sectionNumber": "2.3.5",
        "sectionTitle": "Afinita"
      },
      {
        "uuid": "8fb0531a-2c21-44dc-b14a-b7df7e1bab0d",
        "correct": "Plánovač s globální frontou obvykle postrádá afinitu vláken k procesorům.",
        "incorrect": "Plánovač s globální frontou aktivně podporuje afinitu vláken k procesorům.",
        "sectionNumber": "2.3.5",
        "sectionTitle": "Afinita"
      },
      {
        "uuid": "b3b3cd69-beda-4499-8b80-f85cb9dc39db",
        "correct": "Plánovač s lokálními frontami a bez migrace zamezuje přesunu vláken mezi procesory.",
        "incorrect": "Plánovač s lokálními frontami a bez migrace aktivně přesouvá vlákna mezi procesory.",
        "sectionNumber": "2.3.5",
        "sectionTitle": "Afinita"
      },
      {
        "uuid": "fb8e43ec-df95-4d8d-9fef-abdb2b25a07b",
        "correct": "Interaktivní plánovače používají prioritní plánování, kde priorita ovlivňuje latenci vláken a celkový přidělený čas.",
        "incorrect": "Interaktivní plánovače používají prioritní plánování, kde priorita neovlivňuje latenci vláken a celkový přidělený čas.",
        "sectionNumber": "2.3.6",
        "sectionTitle": "Prioritní fronty"
      },
      {
        "uuid": "2f6c30e4-ee97-43eb-870f-4eb29afea807",
        "correct": "Statické priority vláken jsou určeny rozhodnutím uživatele a nemění se v závislosti na chování systému.",
        "incorrect": "Statické priority vláken jsou určeny dynamicky systémem a mění se v závislosti na chování uživatele.",
        "sectionNumber": "2.3.6",
        "sectionTitle": "Prioritní fronty"
      },
      {
        "uuid": "46fb7afd-c9c3-4884-9a17-16bb3467c340",
        "correct": "Klasické prioritní plánování s FIFO frontami vybírá vlákna z nejvyšší neprázdné fronty prioritních tříd.",
        "incorrect": "Klasické prioritní plánování s FIFO frontami vybírá vlákna z nejnižší neprázdné fronty prioritních tříd.",
        "sectionNumber": "2.3.6",
        "sectionTitle": "Prioritní fronty"
      },
      {
        "uuid": "aa50a663-7660-437a-a071-877752e0b3eb",
        "correct": "Dynamická úprava priority vláken snižováním priority za běh řeší problém blokování procesoru dlouhými vlákny.",
        "incorrect": "Dynamická úprava priority vláken zvyšováním priority za běh řeší problém blokování procesoru dlouhými vlákny.",
        "sectionNumber": "2.3.6",
        "sectionTitle": "Prioritní fronty"
      },
      {
        "uuid": "24114977-fd24-4bd2-bc92-b968e952dd18",
        "correct": "Férové plánování se podobá dynamickému prioritnímu plánování s prioritami v libovolném rozsahu.",
        "incorrect": "Férové plánování je zcela odlišné od dynamického prioritního plánování a nepoužívá priority.",
        "sectionNumber": "2.3.7",
        "sectionTitle": "Férové plánování"
      },
      {
        "uuid": "6736f8fd-248a-4fb3-ad70-101ef709cb8e",
        "correct": "Při plném vytížení systému mohou být dlouhodobě běžící interaktivní procesy férovým plánováním znevýhodněny.",
        "incorrect": "Při plném vytížení systému jsou dlouhodobě běžící interaktivní procesy férovým plánováním vždy zvýhodněny.",
        "sectionNumber": "2.3.7",
        "sectionTitle": "Férové plánování"
      },
      {
        "uuid": "7be22771-4e8e-4660-8432-20710d222bb8",
        "correct": "Priorita ve férovém plánování klesá s rostoucím využitým výpočetním časem vlákna.",
        "incorrect": "Priorita ve férovém plánování roste s rostoucím využitým výpočetním časem vlákna.",
        "sectionNumber": "2.3.7",
        "sectionTitle": "Férové plánování"
      },
      {
        "uuid": "f9ef5773-313b-48da-9afd-46ded57a8be6",
        "correct": "Rozhodnutí o odebrání procesoru zohledňuje dobu běhu aktuálního vlákna a srovnání s dalším vláknem ve frontě.",
        "incorrect": "Rozhodnutí o odebrání procesoru je založeno výhradně na prioritě aktuálního vlákna bez ohledu na dobu jeho běhu.",
        "sectionNumber": "2.3.8",
        "sectionTitle": "Odebrání procesoru"
      },
      {
        "uuid": "c66bc833-2dd1-4a6e-9689-de39c14a8842",
        "correct": "Plánovací kvantum definuje minimální dobu, po kterou vlákno běží na procesoru, i když existuje vlákno s vyšší prioritou.",
        "incorrect": "Plánovací kvantum zaručuje, že vlákno s vyšší prioritou vždy okamžitě získá procesor, i během kvanta běžícího vlákna.",
        "sectionNumber": "2.3.8",
        "sectionTitle": "Odebrání procesoru"
      },
      {
        "uuid": "fe39c1ae-1860-447b-8b15-e30a00d1dbd5",
        "correct": "Dlouhé plánovací kvantum obvykle zvyšuje propustnost systému, ale může negativně ovlivnit latenci a reakční dobu.",
        "incorrect": "Dlouhé plánovací kvantum zlepšuje latenci systému a reakční dobu, ale snižuje celkovou propustnost systému.",
        "sectionNumber": "2.3.8",
        "sectionTitle": "Odebrání procesoru"
      },
      {
        "uuid": "4e4d002d-eadf-4e1c-9838-82795bea8e02",
        "correct": "V algoritmech RR jsou vlákna s rovnocennou prioritou spravedlivě rotována po časových kvantech.",
        "incorrect": "V algoritmech FIFO a RR jsou vlákna s rovnocennou prioritou rotována po časových úsecích, jejichž délka se dynamicky mění v závislosti na prioritě.",
        "sectionNumber": "2.3.8",
        "sectionTitle": "Odebrání procesoru"
      },
      {
        "uuid": "629c9b58-3ea4-40a0-a826-d93b27955364",
        "correct": "Dobrovolné propuštění procesoru je v moderních preemptivních systémech spíše výjimkou a nahrazuje se signalizací událostí.",
        "incorrect": "Dobrovolné propuštění procesoru je klíčovým mechanismem moderních preemptivních systémů pro efektivní správu zdrojů.",
        "sectionNumber": "2.3.8",
        "sectionTitle": "Odebrání procesoru"
      },
      {
        "uuid": "2aa3eed8-259f-41df-af8b-9054d1aa3fad",
        "correct": "Při čekání na vyřízení požadavku je vlákno probuzeno komponentou, která daný požadavek vyřídila.",
        "incorrect": "Při čekání na vyřízení požadavku je vlákno probuzeno plánovačem operačního systému ještě před vyřízením požadavku.",
        "sectionNumber": "2.3.9",
        "sectionTitle": "Čekající vlákna"
      },
      {
        "uuid": "1ba29f46-60ab-4078-ac8c-0329ec012a5e",
        "correct": "V situaci soutěže o zdroj se vlákna řadí do čekací fronty a po uvolnění zdroje se probudí jen první vlákno z fronty.",
        "incorrect": "V situaci soutěže o zdroj se všechna čekající vlákna probudí současně po uvolnění daného zdroje.",
        "sectionNumber": "2.3.9",
        "sectionTitle": "Čekající vlákna"
      },
      {
        "uuid": "07d72691-0064-405b-ba90-cb704f8a242d",
        "correct": "Vlákno může být uspáno, pokud se pokusí vstoupit do kritické sekce, která je aktuálně zamčená jiným vláknem.",
        "incorrect": "Vlákno se uspí, pokud úspěšně vstoupí do kritické sekce a začne v ní provádět operace.",
        "sectionNumber": "2.3.9",
        "sectionTitle": "Čekající vlákna"
      },
      {
        "uuid": "664ea3ab-fac6-46a7-ae55-8f2d13b4b642",
        "correct": "Čekání na vstup z klávesnice a čekání na data ze sítě jsou příklady událostí, které mohou vlákno uspat.",
        "incorrect": "Čekání na tisk dokumentu a výpočet matematické operace jsou typické události, které uspí vlákno.",
        "sectionNumber": "2.3.9",
        "sectionTitle": "Čekající vlákna"
      }
    ]
  },
  {
    "uuid": "033995ad-e925-4494-ac23-ea2ca52f69c5",
    "sectionNumber": "3",
    "sectionTitle": "Souborové systémy",
    "statements": [
      {
        "uuid": "8d2f5a12-8090-439f-b7cc-6dc50b82c2d1",
        "correct": "Perzistentní úložiště slouží k dlouhodobému uchování dat i po odpojení napájení.",
        "incorrect": "Perzistentní úložiště slouží pouze k dočasnému uchování dat během běhu programu.",
        "sectionNumber": "3.1.1",
        "sectionTitle": "Trvalé úložiště"
      },
      {
        "uuid": "97decc12-1ebd-42ec-8a9e-a3c9b493715b",
        "correct": "Operace čtení a zápisu v perzistentním úložišti pracují s bloky dat o velikosti 512 bajtů a více.",
        "incorrect": "Operace čtení a zápisu v perzistentním úložišti pracují s jednotlivými bajty, podobně jako operační paměť.",
        "sectionNumber": "3.1.1",
        "sectionTitle": "Trvalé úložiště"
      },
      {
        "uuid": "50360a1b-e2e9-47f0-aa2d-7bb1abd3cc08",
        "correct": "SSD, HDD a NVMe jsou příklady perzistentních úložišť, která se používají pro dlouhodobé ukládání dat.",
        "incorrect": "Operační paměť RAM a cache procesoru jsou příklady perzistentních úložišť pro dlouhodobé uložení dat.",
        "sectionNumber": "3.1.1",
        "sectionTitle": "Trvalé úložiště"
      },
      {
        "uuid": "c399abcc-9b1d-4b41-969b-045e6036dcfe",
        "correct": "Magnetické pásky nejsou vhodné jako perzistentní blokové úložiště kvůli jejich sekvenčnímu přístupu k datům.",
        "incorrect": "Magnetické pásky jsou ideální jako perzistentní blokové úložiště díky jejich rychlému náhodnému přístupu k datům.",
        "sectionNumber": "3.1.1",
        "sectionTitle": "Trvalé úložiště"
      },
      {
        "uuid": "ec25b9dc-3efa-4811-89e8-2b02582dae86",
        "correct": "Perzistentní úložiště je primárně určeno pro ukládání uživatelsky relevantních dat, jako jsou dokumenty a multimédia.",
        "incorrect": "Perzistentní úložiště se primárně využívá pro ukládání dočasných mezivýsledků výpočtů a systémové cache.",
        "sectionNumber": "3.1.1",
        "sectionTitle": "Trvalé úložiště"
      },
      {
        "uuid": "1ba26c2c-fd45-46ec-adfd-e65d20a26419",
        "correct": "Adresa v blokově orientovaném zařízení odkazuje na celý blok dat, nikoliv na jednotlivé bajty.",
        "incorrect": "Adresa v blokově orientovaném zařízení odkazuje na jednotlivé bajty dat, nikoliv na bloky.",
        "sectionNumber": "3.1.2",
        "sectionTitle": "Blokové operace"
      },
      {
        "uuid": "fdcd37a0-7276-4944-9ce7-d5913739f9b9",
        "correct": "Komunikace s blokově orientovaným zařízením je asynchronní kvůli latenci spojené s přístupem k blokům.",
        "incorrect": "Komunikace s blokově orientovaným zařízením je synchronní, a to i přes latenci přístupu k blokům.",
        "sectionNumber": "3.1.2",
        "sectionTitle": "Blokové operace"
      },
      {
        "uuid": "3a8d221f-41a1-42f7-9182-97145281fc18",
        "correct": "Blokově orientovaná zařízení, na rozdíl od operační paměti, přenášejí data po větších blocích.",
        "incorrect": "Blokově orientovaná zařízení přenášejí data po jednotlivých bajtech, stejně jako operační paměť.",
        "sectionNumber": "3.1.2",
        "sectionTitle": "Blokové operace"
      },
      {
        "uuid": "c55c1c54-3b5a-42b2-bfec-a4a2a97b8492",
        "correct": "Struktura blokově orientovaných zařízení odpovídá jejich fyzickému uspořádání do bloků.",
        "incorrect": "Struktura blokově orientovaných zařízení je abstraktní a neodpovídá fyzickému uspořádání.",
        "sectionNumber": "3.1.2",
        "sectionTitle": "Blokové operace"
      },
      {
        "uuid": "f17ec05d-c66c-43b4-a13c-054354e73943",
        "correct": "Problém prodlevy mezi požadavkem a vyřízením nelze skrýt hardwarově a musí být řešen operačním systémem.",
        "incorrect": "Problém prodlevy mezi požadavkem a vyřízením lze efektivně skrýt hardwarově bez zásahu operačního systému.",
        "sectionNumber": "3.1.3",
        "sectionTitle": "Latence"
      },
      {
        "uuid": "592f27b0-c4e3-4249-b456-93a25ca4f619",
        "correct": "Pro zajištění spolehlivého uložení dat, takzvané \"durability\" v ACID, je nutné v operačních systémech čekat na potvrzení zápisu kvůli prodlevě.",
        "incorrect": "Pro zajištění spolehlivého uložení dat, takzvané \"durability\" v ACID, není nutné v operačních systémech čekat na potvrzení zápisu i přes prodlevu.",
        "sectionNumber": "3.1.3",
        "sectionTitle": "Latence"
      },
      {
        "uuid": "b1159f0b-4418-426d-97b7-beaab0cf288c",
        "correct": "Prodleva v kontextu operačních systémů označuje dobu, která uplyne mezi odesláním požadavku a obdržením odpovědi, a je příliš významná, než aby mohla být ignorována.",
        "incorrect": "Prodleva v kontextu operačních systémů označuje dobu, která uplyne pouze při zpracování požadavku uvnitř hardwaru a operační systém ji může plně eliminovat.",
        "sectionNumber": "3.1.3",
        "sectionTitle": "Latence"
      },
      {
        "uuid": "760e2546-84fa-43c2-bc49-3c52724fe92a",
        "correct": "Mezipaměť v operačních systémech je navržena tak, aby skrývala latenci přístupu k datům.",
        "incorrect": "Mezipaměť v operačních systémech primárně zvyšuje spolehlivost datových úložišť.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "1d36d03e-33ac-446a-8b14-b9c117512925",
        "correct": "Politika mezipaměti operačního systému určuje, které nedávno čtené bloky dat zůstanou uloženy v RAM.",
        "incorrect": "Politika mezipaměti operačního systému určuje, které nejméně často čtené bloky dat zůstanou uloženy v RAM.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "ef12571b-72e1-414e-b9fc-d1772271603b",
        "correct": "Správu mezipaměti trvalých úložišť implementuje operační systém softwarově.",
        "incorrect": "Správu mezipaměti trvalých úložišť implementuje výhradně hardware řadiče disku.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "c58514f6-0aca-4b5f-bfa1-9c83c655c7a6",
        "correct": "Mezipaměť operačního systému nemá vliv na spolehlivost dat uložených v trvalém úložišti, pouze na rychlost přístupu.",
        "incorrect": "Mezipaměť operačního systému je klíčová pro zajištění spolehlivosti dat uložených v trvalém úložišti.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "87c9af88-6fde-4176-ac07-56538350c89c",
        "correct": "Hlavním účelem mezipaměti je zrychlení opakovaného přístupu ke stejným adresám v datovém úložišti.",
        "incorrect": "Hlavním účelem mezipaměti je optimalizace sekvenčního přístupu k různým adresám v datovém úložišti.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "8257d804-2533-4036-8672-726bb0029b79",
        "correct": "Operační systémy mohou využívat techniku prefetchingu pro načítání dat do mezipaměti s předstihem.",
        "incorrect": "Operační systémy nikdy nevyužívají techniku prefetchingu kvůli neefektivnímu využití přenosové kapacity.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "2c0f64ef-4192-4427-92ee-e6ef0de37ab1",
        "correct": "Při sekvenčním čtení souboru je efektivní načítat následující bloky do mezipaměti předem.",
        "incorrect": "Při sekvenčním čtení souboru je neefektivní načítat následující bloky do mezipaměti předem.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "82a4a2a8-a164-412d-8c4b-59e00e348d9f",
        "correct": "V kontextu trvalých úložišť je správa mezipaměti typicky realizována operačním systémem softwarově.",
        "incorrect": "V kontextu trvalých úložišť je správa mezipaměti typicky realizována hardwarově řadičem paměti.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "14177550-b00e-42db-aa46-eeeab8ed4cc2",
        "correct": "V mezipaměti trvalých úložišť operační paměť slouží jako rychlá mezipaměť a trvalé úložiště jako pomalá.",
        "incorrect": "V mezipaměti trvalých úložišť trvalé úložiště slouží jako rychlá mezipaměť a operační paměť jako pomalá.",
        "sectionNumber": "3.1.4",
        "sectionTitle": "Mezipaměť"
      },
      {
        "uuid": "3c2adf59-9c9a-4b80-b457-624b26bb100c",
        "correct": "Vyrovnávací paměť slouží k vyrovnání rozdílu rychlostí mezi aplikací a trvalým úložištěm při zápisu dat.",
        "incorrect": "Vyrovnávací paměť slouží k urychlení čtení dat z trvalého úložiště do aplikace.",
        "sectionNumber": "3.1.5",
        "sectionTitle": "Vyrovnávací paměť"
      },
      {
        "uuid": "ecc030c3-bfd4-40fe-a78e-3434d2c1e59b",
        "correct": "Data uložená ve vyrovnávací paměti se při výpadku napájení ztratí.",
        "incorrect": "Data uložená ve vyrovnávací paměti jsou trvale uložena i po výpadku napájení.",
        "sectionNumber": "3.1.5",
        "sectionTitle": "Vyrovnávací paměť"
      },
      {
        "uuid": "660efa26-e892-4c6a-b1b9-2235c919eae1",
        "correct": "Oddělená vyrovnávací paměť uchovává požadavky na zápis i samotná data určená k zápisu.",
        "incorrect": "Oddělená vyrovnávací paměť uchovává pouze požadavky na zápis, data jsou uložena v mezipaměti.",
        "sectionNumber": "3.1.5",
        "sectionTitle": "Vyrovnávací paměť"
      },
      {
        "uuid": "835a4aa8-cc51-459f-9b40-78d47aa674d8",
        "correct": "Sekvenční přístup k úložišti dat je obecně mnohem rychlejší než nahodilý přístup.",
        "incorrect": "Nahodilý přístup k úložišti dat je obecně mnohem rychlejší než sekvenční přístup.",
        "sectionNumber": "3.1.6",
        "sectionTitle": "Plánování operací"
      },
      {
        "uuid": "b670418e-5631-4eb4-86c9-516e787c589f",
        "correct": "Operace s trvalým úložištěm dat vykazují vysokou míru souběžnosti díky mnoha nezávislým požadavkům.",
        "incorrect": "Operace s trvalým úložištěm dat obvykle nevykazují vysokou míru souběžnosti.",
        "sectionNumber": "3.1.6",
        "sectionTitle": "Plánování operací"
      },
      {
        "uuid": "8fc1bbcd-9156-43c0-bf1a-1a7674c96fbf",
        "correct": "Přeuspořádání diskových operací, zejména zápisů, může vést k vyšší propustnosti systému.",
        "incorrect": "Přeuspořádání diskových operací obvykle nevede k vyšší propustnosti systému.",
        "sectionNumber": "3.1.6",
        "sectionTitle": "Plánování operací"
      },
      {
        "uuid": "2c8488ee-a6fd-4bf5-994a-b0227d049ae5",
        "correct": "Vyšší míra přeuspořádání zápisů může potenciálně zvýšit riziko nekonzistence dat při výpadku.",
        "incorrect": "Vyšší míra přeuspořádání zápisů obvykle snižuje riziko nekonzistence dat při výpadku.",
        "sectionNumber": "3.1.6",
        "sectionTitle": "Plánování operací"
      },
      {
        "uuid": "3483bdf2-5ead-489d-be9e-2d69c2d6235d",
        "correct": "Virtualizace trvalých úložišť se liší od virtualizace paměti a procesoru kvůli potřebě interakce uživatele s daty.",
        "incorrect": "Virtualizace trvalých úložišť je stejná jako virtualizace paměti a procesoru, protože cílem je izolace.",
        "sectionNumber": "3.1.7",
        "sectionTitle": "Problémy virtualizace"
      },
      {
        "uuid": "f4253f3f-c188-4807-af29-0bf76aac8739",
        "correct": "Jedno z řešení virtualizace trvalých úložišť spočívá ve vyčlenění aplikace odpovědné za správu dat.",
        "incorrect": "Všechny aplikace mají přímý a neomezený přístup k trvalému úložišti i při virtualizaci.",
        "sectionNumber": "3.1.7",
        "sectionTitle": "Problémy virtualizace"
      },
      {
        "uuid": "c1dc43ac-716f-4ff0-855c-540f9cda8bfb",
        "correct": "Operační systém může poskytnout abstrakci trvalého úložiště, čímž skryje fyzické zařízení před aplikacemi.",
        "incorrect": "Operační systém vždy poskytuje přímý přístup k fyzickému trvalému úložišti bez abstrakce.",
        "sectionNumber": "3.1.7",
        "sectionTitle": "Problémy virtualizace"
      },
      {
        "uuid": "4cb9d37f-82a9-415d-9318-a5621266eae6",
        "correct": "V obou navržených řešeních virtualizace trvalých úložišť je přímý přístup omezen na jeden program.",
        "incorrect": "V obou navržených řešeních virtualizace trvalých úložišť mají všechny programy přímý přístup.",
        "sectionNumber": "3.1.7",
        "sectionTitle": "Problémy virtualizace"
      },
      {
        "uuid": "a95344cd-c5d0-4b3f-aee3-47d3d13b8e8e",
        "correct": "Souborový systém je abstrakce poskytovaná operačním systémem pro řízený přístup k datům.",
        "incorrect": "Souborový systém je abstrakce poskytovaná aplikacemi pro přímý přístup k datům.",
        "sectionNumber": "3.1.8",
        "sectionTitle": "Metody virtualizace"
      },
      {
        "uuid": "67d72dbd-2a4c-41e2-9d15-f7dea60f918c",
        "correct": "Virtualizace na aplikační úrovni se typicky používá v databázových systémech pro správu dat.",
        "incorrect": "Virtualizace na aplikační úrovni se typicky používá pro virtualizaci operační paměti.",
        "sectionNumber": "3.1.8",
        "sectionTitle": "Metody virtualizace"
      },
      {
        "uuid": "28581bad-3951-4fba-8f8f-5b8aeb6e6b9e",
        "correct": "Izolovaná virtuální instance úložiště je užitečná zejména při virtualizaci operačních systémů.",
        "incorrect": "Izolovaná virtuální instance úložiště je nejběžnější metodou virtualizace trvalých úložišť.",
        "sectionNumber": "3.1.8",
        "sectionTitle": "Metody virtualizace"
      },
      {
        "uuid": "15db155a-1e40-47f6-bf17-6fd3b4df76d5",
        "correct": "Standardním řešením problémů se spolehlivostí paměti je v operačních systémech redundance.",
        "incorrect": "Standardním řešením problémů se spolehlivostí paměti je v operačních systémech mezipaměť.",
        "sectionNumber": "3.1.9",
        "sectionTitle": "RAID"
      },
      {
        "uuid": "35d8dd24-a89b-4b09-b7b8-f0dfa8ca8161",
        "correct": "Technologie RAID spojuje několik fyzických úložišť do jednoho virtuálního diskového pole.",
        "incorrect": "Technologie RAID rozděluje jedno fyzické úložiště na několik virtuálních diskových polí.",
        "sectionNumber": "3.1.9",
        "sectionTitle": "RAID"
      },
      {
        "uuid": "c5d23acd-c284-47c3-90ca-5b4ef0ac7843",
        "correct": "Softwarový RAID je implementován v blokové vrstvě operačního systému.",
        "incorrect": "Softwarový RAID je implementován mimo blokovou vrstvu operačního systému.",
        "sectionNumber": "3.1.9",
        "sectionTitle": "RAID"
      },
      {
        "uuid": "0043c964-9653-487f-b23b-ce960619e549",
        "correct": "RAID 0 je jediná úroveň RAID, která neposkytuje žádnou redundanci dat.",
        "incorrect": "RAID 0 je úroveň RAID, která poskytuje nejvyšší úroveň redundance dat.",
        "sectionNumber": "3.1.9",
        "sectionTitle": "RAID"
      },
      {
        "uuid": "3cc32042-a59c-40d9-8e48-c2e8ee80c51b",
        "correct": "Čtení z RAID pole je obvykle rychlejší díky paralelnímu přístupu k datům.",
        "incorrect": "Čtení z RAID pole je obvykle pomalejší kvůli nutnosti skládat data z více disků.",
        "sectionNumber": "3.1.9",
        "sectionTitle": "RAID"
      },
      {
        "uuid": "2bcbaa4c-26ad-40f7-a92c-7690b7ceecc6",
        "correct": "Šifrování blokových zařízení typicky využívá symetrické šifrování pro zachování délky dat.",
        "incorrect": "Šifrování blokových zařízení typicky využívá asymetrické šifrování pro zachování délky dat.",
        "sectionNumber": "3.1.10",
        "sectionTitle": "Šifrování, integrita"
      },
      {
        "uuid": "7393195a-5401-4fd0-bb98-b47b8aecb023",
        "correct": "Šifrování blokových zařízení je transparentní pro souborový systém a ten o něm nemusí vědět.",
        "incorrect": "Souborový systém musí být speciálně navržen, aby mohl pracovat se šifrovanými blokovými zařízeními.",
        "sectionNumber": "3.1.10",
        "sectionTitle": "Šifrování, integrita"
      },
      {
        "uuid": "0ecd422c-cb6b-40dc-b16c-0b17bd851bee",
        "correct": "Šifrování blokových zařízení zachovává délku bloků, pokud se nepoužívá kontrola integrity dat.",
        "incorrect": "Šifrování blokových zařízení vždy zachovává délku bloků dat, i když se používá kontrola integrity.",
        "sectionNumber": "3.1.10",
        "sectionTitle": "Šifrování, integrita"
      },
      {
        "uuid": "dd60ac7f-2523-4ef7-96cb-53529b1f7725",
        "correct": "Pro šifrování blokových zařízení se běžně používá hardwarově akcelerovaná šifra AES v módu CBC nebo XTS.",
        "incorrect": "Pro šifrování blokových zařízení se běžně používá softwarově implementovaná šifra DES v módu ECB.",
        "sectionNumber": "3.1.10",
        "sectionTitle": "Šifrování, integrita"
      },
      {
        "uuid": "4036c1df-2639-4f69-9ee8-459680655feb",
        "correct": "Šifrování blokových zařízení chrání data v případě fyzického přístupu útočníka k pevnému disku.",
        "incorrect": "Šifrování blokových zařízení chrání data pouze proti útokům vedeným přes počítačovou síť.",
        "sectionNumber": "3.1.10",
        "sectionTitle": "Šifrování, integrita"
      },
      {
        "uuid": "7ef67309-da6a-4b27-bee9-26e84a1679eb",
        "correct": "Soubor v operačním systému je abstrakce, která skrývá blokový charakter fyzického úložiště.",
        "incorrect": "Soubor v operačním systému je fyzické blokové úložiště dat bez abstrakční vrstvy.",
        "sectionNumber": "3.2.1",
        "sectionTitle": "Operace"
      },
      {
        "uuid": "6b475aa1-f92e-4c74-8926-276b263c8d6e",
        "correct": "V POSIX systémech volání `read` a `write` umožňují čtení a zápis souborů po bajtech nebo blocích libovolné velikosti.",
        "incorrect": "V POSIX systémech volání `read` a `write` umožňují čtení a zápis souborů pouze po blocích pevně dané velikosti.",
        "sectionNumber": "3.2.1",
        "sectionTitle": "Operace"
      },
      {
        "uuid": "a4151833-4ab8-446f-be68-0f18119ee64d",
        "correct": "Operační systém automaticky prodlouží soubor, pokud se zapisuje za aktuální konec souboru.",
        "incorrect": "Operační systém nikdy automaticky neprodlužuje soubor, i když se zapisuje za jeho konec.",
        "sectionNumber": "3.2.1",
        "sectionTitle": "Operace"
      },
      {
        "uuid": "808321ac-47ab-4a27-b077-108d5d6c3ac6",
        "correct": "Soubory v operačním systému jsou obvykle perzistentní a existují nezávisle na běžících procesech.",
        "incorrect": "Soubory v operačním systému jsou dočasné a existují pouze po dobu běhu procesu, který je vytvořil.",
        "sectionNumber": "3.2.1",
        "sectionTitle": "Operace"
      },
      {
        "uuid": "569ca1ab-4cd2-4dae-8730-7d28ff64e9f7",
        "correct": "Pro práci se souborem je ve většině systémů nutné jej nejprve otevřít, například pomocí volání `open` v POSIX.",
        "incorrect": "Pro práci se souborem ve většině systémů není nutné jej otevírat, stačí znát jeho umístění v systému souborů.",
        "sectionNumber": "3.2.1",
        "sectionTitle": "Operace"
      },
      {
        "uuid": "2fd4b7fb-019a-45aa-ae0e-225489992cac",
        "correct": "Obyčejný soubor reprezentuje paměť a souborový systém neinterpretuje obsah obyčejných souborů.",
        "incorrect": "Obyčejný soubor reprezentuje paměť a souborový systém interpretuje obsah obyčejných souborů.",
        "sectionNumber": "3.2.2",
        "sectionTitle": "Obyčejný soubor"
      },
      {
        "uuid": "1595165b-66b0-469c-a5e9-ecda773a9a0f",
        "correct": "Soubory nemají omezení na zarovnání, zatímco operace nad pevným úložištěm pracují po blocích s pevnou velikostí.",
        "incorrect": "Soubory mají omezení na zarovnání, a operace nad pevným úložištěm nepracují po blocích s pevnou velikostí.",
        "sectionNumber": "3.2.2",
        "sectionTitle": "Obyčejný soubor"
      },
      {
        "uuid": "d67fa53a-729c-41fe-9f45-533f05996fe6",
        "correct": "Fyzické umístění dat souborů řeší operační systém a aplikace je od fyzického umístění odstíněna.",
        "incorrect": "Fyzické umístění dat souborů řeší aplikace a operační systém se o fyzické umístění nestará.",
        "sectionNumber": "3.2.2",
        "sectionTitle": "Obyčejný soubor"
      },
      {
        "uuid": "d36348e5-c140-42b4-9773-5709ee22b22b",
        "correct": "Při prodlužování souboru souborový systém alokuje volné bloky a aktualizuje metadata souboru o nové bloky.",
        "incorrect": "Při prodlužování souboru souborový systém nealokuje volné bloky, pouze aktualizuje metadata souboru.",
        "sectionNumber": "3.2.2",
        "sectionTitle": "Obyčejný soubor"
      },
      {
        "uuid": "3ae61659-e12c-43ec-80b7-8625f2f3d5ad",
        "correct": "Mapování souborů do paměti s líným načítáním zlepšuje efektivitu aplikací čtoucích data.",
        "incorrect": "Mapování souborů do paměti s agresivním načítáním zlepšuje efektivitu aplikací čtoucích data.",
        "sectionNumber": "3.2.3",
        "sectionTitle": "Mapováni do paměti"
      },
      {
        "uuid": "7e881440-4710-4579-bb86-70acd39cc971",
        "correct": "Při mapování souborů do paměti mohou být externí stránky uloženy v běžném souboru na disku.",
        "incorrect": "Při mapování souborů do paměti musí být externí stránky uloženy ve vyhrazené swapovací oblasti.",
        "sectionNumber": "3.2.3",
        "sectionTitle": "Mapováni do paměti"
      },
      {
        "uuid": "1b828d87-bf6a-4dd9-a002-1a9f8d59a682",
        "correct": "Mapování souborů do paměti umožňuje pracovat se soubory s menší režií než explicitní čtení a zápis.",
        "incorrect": "Mapování souborů do paměti vyžaduje větší režii než explicitní čtení a zápis kvůli správě stránek.",
        "sectionNumber": "3.2.3",
        "sectionTitle": "Mapováni do paměti"
      },
      {
        "uuid": "699f551a-a1d5-4271-a60e-e17f0c59a4c0",
        "correct": "Operační systémy mohou optimalizovat čtení mapovaných souborů přemapováním stránek namísto kopírování dat, pokud jsou zarovnané.",
        "incorrect": "Operační systémy vždy kopírují data při čtení mapovaných souborů, i když jsou operace zarovnané na stránky.",
        "sectionNumber": "3.2.3",
        "sectionTitle": "Mapováni do paměti"
      },
      {
        "uuid": "79c73042-3244-4223-8429-8763861a9fc5",
        "correct": "K souboru lze přistupovat z více vláken současně, pokud se jedná pouze o čtení.",
        "incorrect": "K souboru lze přistupovat pouze z jednoho vlákna, i když se jedná pouze o čtení.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "76c9bd1e-a99d-4a4f-8367-6ecd9de6aa31",
        "correct": "Při souběžném zápisu do souboru může dojít k hazardu souběhu, vyžadujícímu zamykání.",
        "incorrect": "Při souběžném zápisu do souboru nikdy nedojde k hazardu souběhu, zamykání není nutné.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "603af444-98f3-46de-b1a9-722c904f80ff",
        "correct": "Jmenný prostor souborového systému je sdílený mezi všemi procesy v operačním systému.",
        "incorrect": "Jmenný prostor souborového systému je izolovaný pro každý proces v operačním systému.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "b1d43f04-ae07-4006-9931-82a0ab75cc2c",
        "correct": "Operační systémy poskytují mechanismy zamykání souborů pro prevenci poškození dat při souběžném přístupu.",
        "incorrect": "Operační systémy neposkytují mechanismy zamykání souborů, spoléhají se na programátory pro řešení souběžnosti.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "c2cbf28f-f1ae-43a6-9ff8-6f757c9c1640",
        "correct": "Systémové volání `flock` v POSIX uzamkne pro proces celý soubor najednou.",
        "incorrect": "Systémové volání `flock` v POSIX umožňuje zamknout pouze specifickou část souboru.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "8a2cb775-1ddd-416e-85b5-d3d574a4d60a",
        "correct": "Systémové volání `fcntl` v POSIX umožňuje zamknout specifický rozsah bajtů v souboru.",
        "incorrect": "Systémové volání `fcntl` v POSIX uzamkne vždy celý soubor, nikoliv jeho část.",
        "sectionNumber": "3.2.4",
        "sectionTitle": "Souběžný přístup"
      },
      {
        "uuid": "91636412-6a1e-4ca4-9d50-290ce73ae5fe",
        "correct": "Spustitelné soubory obsahují počáteční obraz paměti, který se používá k inicializaci virtuálního adresního prostoru procesu.",
        "incorrect": "Spustitelné soubory obsahují pouze instrukce programu a neobsahují data pro inicializaci paměti.",
        "sectionNumber": "3.2.5",
        "sectionTitle": "Spustitelný soubor"
      },
      {
        "uuid": "c0141274-9f52-4242-be65-88bea26fcf26",
        "correct": "Volání funkce exec v POSIX systémech inicializuje virtuální adresní prostor procesu z dat ve spustitelném souboru.",
        "incorrect": "Volání funkce exec v POSIX systémech kopíruje data ze spustitelného souboru přímo do fyzické paměti.",
        "sectionNumber": "3.2.5",
        "sectionTitle": "Spustitelný soubor"
      },
      {
        "uuid": "8f79db0d-e761-4978-b599-b0bc930ec277",
        "correct": "Z hlediska souborového systému nejsou spustitelné soubory speciálním typem souborů.",
        "incorrect": "Spustitelné soubory jsou v souborovém systému označeny jako speciální typ souborů.",
        "sectionNumber": "3.2.5",
        "sectionTitle": "Spustitelný soubor"
      },
      {
        "uuid": "0403dccb-2263-4062-885b-d4fe2316a762",
        "correct": "Data v rourách nejsou trvale uložena a po přečtení dat z roury zmizí.",
        "incorrect": "Data v rourách se trvale ukládají na disk a zůstávají dostupná i po přečtení.",
        "sectionNumber": "3.2.6",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "14f3f70a-5c8c-49f7-880e-b51dfcbe5ca2",
        "correct": "Roury využívají buffer v operační paměti pro dočasné uložení dat.",
        "incorrect": "Roury pro ukládání dat využívají trvalé úložiště na pevném disku.",
        "sectionNumber": "3.2.6",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "3c416fe5-cf30-46da-b044-8dd1c64c1450",
        "correct": "Pojmenované roury v POSIX mají jméno v souborovém systému, ale data nejsou trvale uložena.",
        "incorrect": "Pojmenované roury v POSIX trvale ukládají data v souborovém systému pod svým jménem.",
        "sectionNumber": "3.2.6",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "b38d506e-1a5d-4bc5-aead-3391b7ab05c0",
        "correct": "Anonymní roury jsou přístupné pouze skrze popisovače souborů a po uzavření zanikají.",
        "incorrect": "Anonymní roury jsou trvale uloženy v souborovém systému a mají přidělené jméno.",
        "sectionNumber": "3.2.6",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "c04f4de2-f9e6-45d7-b205-3c15f9ad74ab",
        "correct": "Znaková zařízení v operačních systémech se chovají podobně jako roury.",
        "incorrect": "Znaková zařízení v operačních systémech se chovají podobně jako fronty.",
        "sectionNumber": "3.2.7",
        "sectionTitle": "Zařízení"
      },
      {
        "uuid": "d3fc9ec8-ea05-4122-a646-7bc8a0a6b26b",
        "correct": "Znaková zařízení reprezentují periferie jako soubory v operačním systému.",
        "incorrect": "Znaková zařízení reprezentují periferie jako procesy v operačním systému.",
        "sectionNumber": "3.2.7",
        "sectionTitle": "Zařízení"
      },
      {
        "uuid": "f3d4ec9a-e7bc-4f65-8369-3435c6e2ad67",
        "correct": "Data zapsaná do znakového zařízení jsou odeslána do hardwarové periferie.",
        "incorrect": "Data zapsaná do znakového zařízení jsou uložena do souboru na disku.",
        "sectionNumber": "3.2.7",
        "sectionTitle": "Zařízení"
      },
      {
        "uuid": "00e972e0-1034-418f-ba1e-bffe79655c6b",
        "correct": "Znaková zařízení umožňují čtení dat přicházejících z hardwarové periferie.",
        "incorrect": "Znaková zařízení umožňují modifikaci dat přicházejících z hardwarové periferie.",
        "sectionNumber": "3.2.7",
        "sectionTitle": "Zařízení"
      },
      {
        "uuid": "02894245-a3c5-40d2-9428-2ff1ee58178d",
        "correct": "Tiskárna a skener jsou příklady znakových zařízení v operačním systému.",
        "incorrect": "Tiskárna a monitor jsou příklady znakových zařízení v operačním systému.",
        "sectionNumber": "3.2.7",
        "sectionTitle": "Zařízení"
      },
      {
        "uuid": "c09d0203-5957-4b5b-bb30-21c972567304",
        "correct": "V cestách souborů se pro oddělení adresářů používá znak lomítko, avšak systémy Windows používají zpětné lomítko.",
        "incorrect": "V cestách souborů se pro oddělení adresářů vždy používá znak zpětné lomítko, a to i v systémech typu POSIX.",
        "sectionNumber": "3.3.1",
        "sectionTitle": "Cesta"
      },
      {
        "uuid": "2ddc2654-8621-4316-98ae-6f7ab911877a",
        "correct": "Cesty mohou být absolutní, začínající od kořenového adresáře, nebo relativní, vztažené k aktuálnímu pracovnímu adresáři.",
        "incorrect": "Cesty jsou vždy absolutní a začínají od kořenového adresáře, relativní cesty v moderních operačních systémech neexistují.",
        "sectionNumber": "3.3.1",
        "sectionTitle": "Cesta"
      },
      {
        "uuid": "26ea8717-a7f3-42c8-bb66-f67a3fe6d9df",
        "correct": "Kořenový adresář v souborovém systému POSIX je označen cestou s jedním dopředným lomítkem, tedy znakem '/'.",
        "incorrect": "Kořenový adresář v souborovém systému je označen prázdnou cestou, která neobsahuje žádné znaky.",
        "sectionNumber": "3.3.1",
        "sectionTitle": "Cesta"
      },
      {
        "uuid": "5cebdc32-d69f-4c95-8e1f-a13ba395c6bd",
        "correct": "Složka funguje jako slovník, kde klíčem je název souboru a hodnotou odkaz na i-uzel.",
        "incorrect": "Složka funguje jako pole, kde indexem je pořadové číslo souboru a hodnotou obsah souboru.",
        "sectionNumber": "3.3.2",
        "sectionTitle": "Adresář (složka)"
      },
      {
        "uuid": "9be52149-6d36-4637-a205-6eeb68b33f7e",
        "correct": "Složka obsahuje strukturovaná metadata, která mapují názvy souborů na odkazy, nikoliv obsah souborů.",
        "incorrect": "Složka primárně obsahuje data souborů, a metadata slouží pouze pro organizaci zobrazení.",
        "sectionNumber": "3.3.2",
        "sectionTitle": "Adresář (složka)"
      },
      {
        "uuid": "362c5793-1d90-42fe-8120-fed62ad76427",
        "correct": "Interakce uživatelských programů se složkami obvykle probíhá skrze cesty nebo iterací pro získání seznamu položek.",
        "incorrect": "Uživatelské programy běžně interagují se složkami přímým čtením a zápisem datových struktur složky.",
        "sectionNumber": "3.3.2",
        "sectionTitle": "Adresář (složka)"
      },
      {
        "uuid": "302ba6d7-a3ef-42fd-8806-a7c4b9a608f3",
        "correct": "V systémech POSIX se pro iteraci složek používají volání jako opendir, readdir a closedir.",
        "incorrect": "V systémech POSIX se pro iteraci složek používají standardní volání read a write na souborovém deskriptoru.",
        "sectionNumber": "3.3.2",
        "sectionTitle": "Adresář (složka)"
      },
      {
        "uuid": "30d6e759-f291-4af2-804f-df02b39c3f17",
        "correct": "Přidávání a odebírání položek ve složce se typicky provádí implicitně skrze operace s cestami, například vytvářením souborů.",
        "incorrect": "Přidávání a odebírání položek ve složce vyžaduje přímou manipulaci s datovou strukturou složky pomocí speciálních systémových volání.",
        "sectionNumber": "3.3.2",
        "sectionTitle": "Adresář (složka)"
      },
      {
        "uuid": "4866e4ad-2edd-4c02-8db1-ca911cb98253",
        "correct": "Stejný soubor může být odkazován z více adresářů pomocí tvrdých odkazů.",
        "incorrect": "Stejný soubor může být odkazován pouze z jednoho adresáře pomocí tvrdých odkazů.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "61ce0d88-f59c-40e2-bab4-a6feb78f6506",
        "correct": "Tvrdé odkazy umožňují, aby více adresářových položek odkazovalo na stejný i-uzel.",
        "incorrect": "Tvrdé odkazy umožňují, aby pouze jedna adresářová položka odkazovala na stejný i-uzel.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "7f1f00cf-66b0-4e81-9d5d-a2682bf7936e",
        "correct": "I-uzel souboru je zničen, až když počítadlo odkazů klesne na nulu.",
        "incorrect": "I-uzel souboru je zničen ihned po odstranění posledního adresářového odkazu.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "2c7322ae-320f-41e8-88c4-3c0363f10c76",
        "correct": "Odstranění adresářové položky nemusí vést ke smazání souboru kvůli tvrdým odkazům.",
        "incorrect": "Odstranění adresářové položky vždy vede ke smazání souboru i při existenci tvrdých odkazů.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "58462193-9a73-469e-93c6-c9b5c84707ba",
        "correct": "Se souborem lze pracovat i po odstranění všech adresářových odkazů, pokud existuje otevřený popisovač.",
        "incorrect": "Se souborem nelze pracovat po odstranění všech adresářových odkazů, i když existuje otevřený popisovač.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "4ee31d72-a72f-4106-9851-7be68e51ad8b",
        "correct": "Tvrdé odkazy nelze vytvářet mezi různými souborovými systémy.",
        "incorrect": "Tvrdé odkazy lze vytvářet i mezi různými souborovými systémy.",
        "sectionNumber": "3.3.3",
        "sectionTitle": "Tvrdé odkazy"
      },
      {
        "uuid": "064fd70a-a4ec-4ecc-bddc-efb1f973d32f",
        "correct": "Měkký odkaz je reprezentován samostatným i-uzlem v souborovém systému.",
        "incorrect": "Měkký odkaz není reprezentován i-uzlem, ale přímo odkazuje na data souboru.",
        "sectionNumber": "3.3.4",
        "sectionTitle": "Měkké odkazy"
      },
      {
        "uuid": "94326c14-c987-4c25-a021-4674080395c0",
        "correct": "Měkké odkazy mohou obsahovat cesty, které nemusí vést do stejného souborového systému.",
        "incorrect": "Měkké odkazy musí vždy obsahovat cesty vedoucí do stejného souborového systému.",
        "sectionNumber": "3.3.4",
        "sectionTitle": "Měkké odkazy"
      },
      {
        "uuid": "27eb0462-298a-4a17-8d0b-652e974676ae",
        "correct": "Operační systém při procházení měkkého odkazu čte cestu v něm obsaženou a pokračuje vyhledáváním.",
        "incorrect": "Operační systém při procházení měkkého odkazu ignoruje cestu a pokračuje původní cestou.",
        "sectionNumber": "3.3.4",
        "sectionTitle": "Měkké odkazy"
      },
      {
        "uuid": "4ba544ff-4d83-4bdd-aa38-b7a810a43298",
        "correct": "Cesta uložená v měkkém odkazu nemusí být platná a nemusí vést k existujícímu i-uzlu.",
        "incorrect": "Cesta uložená v měkkém odkazu musí být vždy platná a vést k existujícímu i-uzlu.",
        "sectionNumber": "3.3.4",
        "sectionTitle": "Měkké odkazy"
      },
      {
        "uuid": "be139222-303b-4bd1-adf4-d5c2bc361990",
        "correct": "Měkké odkazy umožňují vytvářet cykly v adresářové struktuře souborového systému.",
        "incorrect": "Měkké odkazy jsou navrženy tak, aby nikdy nemohly vytvářet cykly v adresářové struktuře.",
        "sectionNumber": "3.3.4",
        "sectionTitle": "Měkké odkazy"
      },
      {
        "uuid": "4c8c038d-57e6-47ab-8a6a-8b89e68fb950",
        "correct": "Adresářová struktura je sdílená mezi všemi procesy v systému.",
        "incorrect": "Adresářová struktura je privátní a každý proces má svou vlastní.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      },
      {
        "uuid": "04a8b3a4-970f-4b4b-8b55-d42d98415295",
        "correct": "Sdílená adresářová struktura může vést k problémům souběhu při manipulaci se soubory.",
        "incorrect": "Sdílená adresářová struktura eliminuje problémy souběhu při práci se soubory.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      },
      {
        "uuid": "ffbbf3a7-a09b-4343-9914-fc40c00163bc",
        "correct": "Globální adresářová struktura usnadňuje předávání souborů mezi různými programy.",
        "incorrect": "Globální adresářová struktura komplikuje sdílení souborů mezi programy.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      },
      {
        "uuid": "5a33a3a5-c380-4dc0-8511-c4a79f6939f5",
        "correct": "Uživatelé ocení globální adresářovou strukturu pro snazší orientaci a organizaci dat.",
        "incorrect": "Globální adresářová struktura zhoršuje uživatelskou orientaci v systému.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      },
      {
        "uuid": "566950c1-4fc6-4bfd-bf53-54476f30f0a3",
        "correct": "Sdílení adresářové struktury může představovat bezpečnostní riziko neautorizovaného přístupu.",
        "incorrect": "Sdílení adresářové struktury zvyšuje bezpečnost a chrání před neautorizovaným přístupem.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      },
      {
        "uuid": "b7a17aa2-e84c-4268-9506-8069816d3858",
        "correct": "Některé operační systémy částečně omezují sdílení adresářové struktury z důvodu bezpečnosti.",
        "incorrect": "Operační systémy nikdy neomezují sdílení adresářové struktury, je vždy plně globální.",
        "sectionNumber": "3.3.5",
        "sectionTitle": "Sdílení"
      }
    ]
  },
  {
    "uuid": "1ad5b698-0291-4fa7-8feb-bbbc27c26bfd",
    "sectionNumber": "4",
    "sectionTitle": "Virtualizace periferií",
    "statements": [
      {
        "uuid": "c442e1b1-24b2-4fd4-8752-107218aefeb8",
        "correct": "Řadiče sběrnic jsou považovány za pomocná vnitřní zařízení počítače.",
        "incorrect": "Řadiče sběrnic jsou považovány za perzistentní úložiště dat.",
        "sectionNumber": "4.1.1",
        "sectionTitle": "Typy periferií"
      },
      {
        "uuid": "54e5ec88-217d-44bc-8038-39ca23e0692a",
        "correct": "Perzistentní úložiště slouží k dlouhodobému uchování dat i po vypnutí napájení.",
        "incorrect": "Perzistentní úložiště slouží pouze k dočasnému uchování dat během běhu programu.",
        "sectionNumber": "4.1.1",
        "sectionTitle": "Typy periferií"
      },
      {
        "uuid": "20fea280-a7a7-4b12-968a-a3b4518bdf8f",
        "correct": "Síťová rozhraní umožňují počítačům komunikovat a vyměňovat si data v síti.",
        "incorrect": "Síťová rozhraní slouží výhradně pro komunikaci s vnitřními komponentami počítače.",
        "sectionNumber": "4.1.1",
        "sectionTitle": "Typy periferií"
      },
      {
        "uuid": "ef17f393-6b0b-46a3-a842-1f51c66c27ab",
        "correct": "Terminál zahrnuje obrazovku, klávesnici a další periferie pro interakci uživatele s počítačem.",
        "incorrect": "Terminál se skládá pouze z centrální procesorové jednotky a operační paměti.",
        "sectionNumber": "4.1.1",
        "sectionTitle": "Typy periferií"
      },
      {
        "uuid": "2a05b7e4-f2bd-4bc4-92c0-43503205885c",
        "correct": "Mezi součásti terminálu patří vstupní zařízení jako klávesnice a myš.",
        "incorrect": "Mezi součásti terminálu patří výhradně výstupní zařízení jako tiskárny a skenery.",
        "sectionNumber": "4.1.1",
        "sectionTitle": "Typy periferií"
      },
      {
        "uuid": "516b3315-6735-4f3f-9206-ae40781f98ef",
        "correct": "Mapování registrů zařízení na fyzické adresy se typicky používá pro komunikaci s malým objemem dat.",
        "incorrect": "Mapování registrů zařízení na fyzické adresy se typicky používá pro komunikaci s velkým objemem dat.",
        "sectionNumber": "4.1.2",
        "sectionTitle": "Co je periferie?"
      },
      {
        "uuid": "e916a8c7-65da-4149-98f6-3d99d0e2f3b4",
        "correct": "Registry zařízení se liší od registrů procesoru a představují paměťové buňky s pevnou funkcí.",
        "incorrect": "Registry zařízení jsou identické s registry procesoru a nemají pevnou funkci.",
        "sectionNumber": "4.1.2",
        "sectionTitle": "Co je periferie?"
      },
      {
        "uuid": "d81f6da8-c88c-4a1f-9d63-7c6fbbf3c4b9",
        "correct": "Hodnoty v registrech zařízení se mohou měnit samovolně bez přímého zásahu hlavního procesoru.",
        "incorrect": "Hodnoty v registrech zařízení se mohou měnit pouze přímým zásahem hlavního procesoru.",
        "sectionNumber": "4.1.2",
        "sectionTitle": "Co je periferie?"
      },
      {
        "uuid": "87014756-1f09-43dd-b78a-61642118b612",
        "correct": "Princip FIFO u paměti zařízení znamená, že nejstarší data jsou přepsána novými po zaplnění.",
        "incorrect": "Princip FIFO u paměti zařízení znamená, že nejnovější data jsou přepsána starými po zaplnění.",
        "sectionNumber": "4.1.2",
        "sectionTitle": "Co je periferie?"
      },
      {
        "uuid": "4144d03c-9c1b-4a29-90b4-c37809aeac16",
        "correct": "Programované I/O vyžaduje aktivní účast procesoru v pravidelných časových intervalech.",
        "incorrect": "Programované I/O nevyžaduje aktivní účast procesoru v pravidelných časových intervalech.",
        "sectionNumber": "4.1.3",
        "sectionTitle": "Programovaný vstup/výstup (PIO)"
      },
      {
        "uuid": "b5969363-4b22-4309-9d3d-8973a18c2ae6",
        "correct": "Programované I/O je vhodné pro občasné přenosy nebo přenosy s malou šířkou pásma.",
        "incorrect": "Programované I/O je vhodné pro velké objemy dat a kontinuální přenosy s vysokou šířkou pásma.",
        "sectionNumber": "4.1.3",
        "sectionTitle": "Programovaný vstup/výstup (PIO)"
      },
      {
        "uuid": "b3c51b53-856f-47c8-920c-3e25bfdb6a79",
        "correct": "Při velkých objemech dat vede programované I/O k vysoké režii.",
        "incorrect": "Při velkých objemech dat vede programované I/O k nízké režii.",
        "sectionNumber": "4.1.3",
        "sectionTitle": "Programovaný vstup/výstup (PIO)"
      },
      {
        "uuid": "9226b603-b4a2-432b-b2cb-3c1fcfa29a51",
        "correct": "DMA přenosy umožňují periferiím asynchronně zapisovat data přímo do operační paměti bez přímé účasti CPU při samotném přenosu.",
        "incorrect": "DMA přenosy vyžadují aktivní účast hlavního procesoru při každém přenosu dat mezi periferií a operační pamětí.",
        "sectionNumber": "4.1.4",
        "sectionTitle": "Přímý přístup do paměti (DMA)"
      },
      {
        "uuid": "d7494bef-eb96-4f2a-a749-3a7267ae4174",
        "correct": "V moderních počítačových systémech je běžnější, že DMA přenosy jsou řízeny přímo periferií, což zvyšuje efektivitu.",
        "incorrect": "Dedikovaný pomocný procesor je v moderních systémech běžnější metodou pro řízení DMA přenosů než přímé řízení periferií.",
        "sectionNumber": "4.1.4",
        "sectionTitle": "Přímý přístup do paměti (DMA)"
      },
      {
        "uuid": "1bb1bca3-0650-46b5-a490-b1d85c57b8b3",
        "correct": "DMA se často využívá pro periferie jako SSD disky a grafické karty, kde jsou vyžadovány časté a velké přenosy dat.",
        "incorrect": "DMA se obvykle nepoužívá pro SSD disky a grafické karty, protože tyto periferie obvykle nevyžadují rychlé přenosy dat.",
        "sectionNumber": "4.1.4",
        "sectionTitle": "Přímý přístup do paměti (DMA)"
      },
      {
        "uuid": "c2a7599f-4ec1-48f3-99d7-cbd5ac522725",
        "correct": "Při DMA přenosu na sdílené sběrnici se periferie dočasně stává řídícím zařízením sběrnice pro provedení přenosu.",
        "incorrect": "Při DMA přenosu na sdílené sběrnici zůstává procesor vždy řídícím zařízením sběrnice a periferie nemůže převzít kontrolu.",
        "sectionNumber": "4.1.4",
        "sectionTitle": "Přímý přístup do paměti (DMA)"
      },
      {
        "uuid": "d1b5dede-9f4e-4224-bf15-74b9a4eb3aab",
        "correct": "Rozdíl mezi DMA a mapováním paměti zařízení spočívá v tom, že DMA obchází procesor při komunikaci s pamětí.",
        "incorrect": "DMA a mapování paměti zařízení jsou v podstatě totožné mechanismy pro přímý přístup procesoru k periferiím.",
        "sectionNumber": "4.1.4",
        "sectionTitle": "Přímý přístup do paměti (DMA)"
      },
      {
        "uuid": "d24d99a4-927a-4036-8b26-7ff1fea11037",
        "correct": "Klasická implementace DMA představuje bezpečnostní riziko kvůli neomezenému přístupu periferií do fyzické paměti.",
        "incorrect": "Klasická implementace DMA je zcela bezpečná, protože operační systém plně kontroluje přístup periferií do paměti.",
        "sectionNumber": "4.1.5",
        "sectionTitle": "IO-MMU"
      },
      {
        "uuid": "aa1f9096-ed6b-4af8-8022-e33aedaf54cc",
        "correct": "IO-MMU řeší bezpečnostní rizika DMA tím, že zavádí překlad adres pro periferie, podobně jako MMU pro software.",
        "incorrect": "IO-MMU primárně zvyšuje výkon DMA operací, nikoliv řeší bezpečnostní rizika spojená s přímým přístupem do paměti.",
        "sectionNumber": "4.1.5",
        "sectionTitle": "IO-MMU"
      },
      {
        "uuid": "a8f885ff-21f6-4955-abf0-50def37cf24e",
        "correct": "IO-MMU je programovatelná výhradně operačním systémem, což zajišťuje kontrolu nad přístupem periferií do paměti.",
        "incorrect": "IO-MMU mohou programovat i ovladače periferií, což umožňuje flexibilnější správu paměťových přístupů.",
        "sectionNumber": "4.1.5",
        "sectionTitle": "IO-MMU"
      },
      {
        "uuid": "f6716fa2-41d8-4f50-8af9-0035d02a885d",
        "correct": "Sběrnice se skládá z fyzické a logické vrstvy, kde logická vrstva řeší adresaci a konfiguraci zařízení.",
        "incorrect": "Sběrnice se skládá pouze z fyzické vrstvy, která se stará o veškerou komunikaci a konfiguraci zařízení.",
        "sectionNumber": "4.1.6",
        "sectionTitle": "Sběrnice"
      },
      {
        "uuid": "3cb3b012-1fcd-47b7-8a7b-cbd5267a5697",
        "correct": "Řadič sběrnice je typ periferie, s nímž procesor komunikuje a který rozděluje adresní prostor.",
        "incorrect": "Řadič sběrnice není periferie, ale pouze pasivní prvek propojující různé typy sběrnic.",
        "sectionNumber": "4.1.6",
        "sectionTitle": "Sběrnice"
      },
      {
        "uuid": "e0c2664f-310e-4efb-91c3-1cdb0b34ec97",
        "correct": "Hlavním úkolem sběrnice je přenos dat a signalizace událostí, přičemž události se mohou projevit jako přerušení.",
        "incorrect": "Hlavním úkolem sběrnice je pouze konfigurace připojených periferií a nikoliv přenos dat mezi nimi.",
        "sectionNumber": "4.1.6",
        "sectionTitle": "Sběrnice"
      },
      {
        "uuid": "7092f638-5262-4323-bf3e-017b7aef0bab",
        "correct": "Procesory Intel Skylake propojují jádra, GPU a cache pomocí sběrnice Ring Bus.",
        "incorrect": "Procesory Intel Skylake propojují jádra a paměť pomocí sběrnice PCIe.",
        "sectionNumber": "4.1.6",
        "sectionTitle": "Sběrnice"
      },
      {
        "uuid": "daa2b10a-fa06-447f-b4d3-7ceab3173eee",
        "correct": "Na sběrnici PCIe mohou být připojeny NVMe úložiště, síťová rozhraní a řadiče USB.",
        "incorrect": "Na sběrnici PCIe jsou připojeny výhradně paměťové moduly RAM a žádná jiná zařízení.",
        "sectionNumber": "4.1.6",
        "sectionTitle": "Sběrnice"
      },
      {
        "uuid": "9df852a8-d2f9-4f6f-a73a-d5d770422409",
        "correct": "Enumerace sběrnice umožňuje operačnímu systému zjistit připojené periferie automaticky.",
        "incorrect": "Enumerace sběrnice vyžaduje manuální konfiguraci uživatelem pro zjištění připojených periferií.",
        "sectionNumber": "4.1.7",
        "sectionTitle": "Enumerace"
      },
      {
        "uuid": "a0e81b81-1b8e-4c8f-8689-8892540e2a1e",
        "correct": "Moderní sběrnice poskytují unikátní identifikátory zařízení pro automatickou konfiguraci ovladačů.",
        "incorrect": "Unikátní identifikátory zařízení nejsou poskytovány moderními sběrnicemi pro konfiguraci ovladačů.",
        "sectionNumber": "4.1.7",
        "sectionTitle": "Enumerace"
      },
      {
        "uuid": "3829e707-1950-47e4-bfaa-d64d3b66bf97",
        "correct": "Historická sběrnice ISA nepodporovala enumeraci, vyžadovala konfiguraci adres uživatelem.",
        "incorrect": "Historická sběrnice ISA podporovala enumeraci periferií automaticky bez zásahu uživatele.",
        "sectionNumber": "4.1.7",
        "sectionTitle": "Enumerace"
      },
      {
        "uuid": "c0894816-a2ff-4286-b44b-a248bf6c8814",
        "correct": "Enumerace sběrnice zahrnuje vyjmenování periferií a jejich základních parametrů pro OS.",
        "incorrect": "Enumerace sběrnice se omezuje pouze na zjištění přítomnosti periferií bez parametrů.",
        "sectionNumber": "4.1.7",
        "sectionTitle": "Enumerace"
      },
      {
        "uuid": "b35c90ec-d7fe-441e-ac5f-bf30e0fc8215",
        "correct": "Ovladač zařízení je program, který poskytuje softwarovou abstrakci dané třídy zařízení operačnímu systému.",
        "incorrect": "Ovladač zařízení je hardware, který obsluhuje periferie a je zcela nezávislý na operačním systému.",
        "sectionNumber": "4.1.8",
        "sectionTitle": "Ovladač"
      },
      {
        "uuid": "33c3185f-9c59-4025-9d5d-cb80bbe56379",
        "correct": "Hlavním úkolem ovladače je převod dat mezi formou, kterou poskytuje zařízení, a formou, kterou vyžaduje operační systém.",
        "incorrect": "Hlavním úkolem ovladače je pouze zajistit fyzický přenos dat mezi zařízením a operační pamětí bez nutnosti konverze dat.",
        "sectionNumber": "4.1.8",
        "sectionTitle": "Ovladač"
      },
      {
        "uuid": "2ab06248-83d9-4011-9e84-1c9e68c8a275",
        "correct": "Ovladače sběrnic jsou využívány ovladači periferií pro komunikaci se zařízeními, která jsou připojena přes danou sběrnici.",
        "incorrect": "Ovladače periferií obcházejí ovladače sběrnic a komunikují přímo s hardwarem sběrnice pro zvýšení výkonu.",
        "sectionNumber": "4.1.8",
        "sectionTitle": "Ovladač"
      },
      {
        "uuid": "31cfcd1a-d19d-4226-8434-6f2782a757bf",
        "correct": "Komunikace s periferiemi skrze ovladače zahrnuje čtení a zápis dat, což představuje výpočetní operace pro zpracování datových formátů.",
        "incorrect": "Komunikace s periferiemi je čistě hardwarová záležitost, která se obejde bez jakýchkoliv výpočetních operací na straně ovladače.",
        "sectionNumber": "4.1.8",
        "sectionTitle": "Ovladač"
      },
      {
        "uuid": "cde8819f-a382-4af1-9bfc-f1cd8dae03d9",
        "correct": "Ovladače zpracovávají nejen užitná data, ale i řídící data, která konfigurují chování zařízení a aktivují specifické funkce.",
        "incorrect": "Ovladače se starají výhradně o přenos užitných dat, řízení a konfigurace zařízení je plně v kompetenci operačního systému.",
        "sectionNumber": "4.1.8",
        "sectionTitle": "Ovladač"
      },
      {
        "uuid": "6d66ee01-6710-43a7-9ec1-0a603666ca96",
        "correct": "Fyzický terminál se skládá z výstupní i vstupní části, jako je obrazovka a klávesnice.",
        "incorrect": "Fyzický terminál se skládá pouze z výstupní části, jako je například obrazovka.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "d8a85e66-fe73-45b4-bf71-8d45dd9ceeda",
        "correct": "Virtualizace terminálů umožňuje vytvořit více virtuálních terminálů, než je fyzických zařízení.",
        "incorrect": "Virtualizace terminálů omezuje počet virtuálních terminálů na počet fyzických zařízení.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "d12bdde1-fe4a-4f3a-b578-f88e8d350886",
        "correct": "Pro virtualizaci textového terminálu je nezbytné zapamatovat si obsah obrazovky v operační paměti.",
        "incorrect": "Pro virtualizaci textového terminálu není nutné ukládat obsah obrazovky do operační paměti.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "4117834d-e0d1-457a-adae-e4c0bf89e145",
        "correct": "Aktivace virtuálního terminálu způsobí, že se obsah fyzické obrazovky přepíše uloženým obsahem.",
        "incorrect": "Aktivace virtuálního terminálu nemá vliv na obsah fyzické obrazovky a její zobrazení.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "ecfb6fe2-1437-428e-b40d-52ec356a68d0",
        "correct": "Připojení a odpojení fyzické klávesnice od virtuálního terminálu neovlivní běžící program.",
        "incorrect": "Odpojení fyzické klávesnice od virtuálního terminálu vždy způsobí pád běžícího programu.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "cb41fa33-7682-4bd0-9b03-e1d98aa16747",
        "correct": "Synchronizace přepojování klávesnice a obrazovky zajišťuje, že obrazovka zobrazuje terminál s připojenou klávesnicí.",
        "incorrect": "Přepojování klávesnice a obrazovky u virtuálních terminálů probíhá zcela nezávisle na sobě.",
        "sectionNumber": "4.2.1",
        "sectionTitle": "Textový terminál"
      },
      {
        "uuid": "15a1e831-80a2-43ef-89fa-968d6d465610",
        "correct": "Na virtuálním terminálu je vždy aktivní právě jeden program, který ovládá terminál a zobrazuje výstup.",
        "incorrect": "Na virtuálním terminálu může být aktivních více programů současně, které sdílí ovládání terminálu.",
        "sectionNumber": "4.2.2",
        "sectionTitle": "Výstup na obrazovku"
      },
      {
        "uuid": "4880efd2-11df-4737-a8f6-8e68525c3941",
        "correct": "V řádkovém režimu terminálu se text vypisuje pouze do jednoho řádku, přičemž scrollování posouvá starší řádky pryč.",
        "incorrect": "V řádkovém režimu terminálu se text vypisuje do více řádků současně bez scrollování.",
        "sectionNumber": "4.2.2",
        "sectionTitle": "Výstup na obrazovku"
      },
      {
        "uuid": "abcf776b-81d6-4247-8897-5a9ca5946d92",
        "correct": "Obrazovkový režim terminálu umožňuje programům cíleně měnit obsah libovolného políčka na obrazovce.",
        "incorrect": "Obrazovkový režim terminálu omezuje programy pouze na změnu aktuálního řádku.",
        "sectionNumber": "4.2.2",
        "sectionTitle": "Výstup na obrazovku"
      },
      {
        "uuid": "a89b33da-82f5-4e2c-be91-b86031bad4a0",
        "correct": "Virtuální terminál může být emulován grafickou aplikací, čímž není nutná fyzická přítomnost terminálu.",
        "incorrect": "Virtuální terminál vyžaduje fyzické zařízení a nemůže být emulován softwarovou aplikací.",
        "sectionNumber": "4.2.2",
        "sectionTitle": "Výstup na obrazovku"
      },
      {
        "uuid": "632acf0e-a403-433e-99de-6f611dcc3abf",
        "correct": "Přes síťové spojení, například pomocí ssh, může být virtuální terminál zobrazen na vzdáleném počítači.",
        "incorrect": "Virtuální terminál je vždy zobrazen pouze na lokálním počítači a nemůže být sdílen přes síť.",
        "sectionNumber": "4.2.2",
        "sectionTitle": "Výstup na obrazovku"
      },
      {
        "uuid": "8a8efd6e-9157-44c1-96c8-7e443b24b1f5",
        "correct": "Virtuální klávesnice buď přeposílá data z fyzické klávesnice, nebo je nulová.",
        "incorrect": "Virtuální klávesnice vždy aktivně zpracovává data a nikdy není nulová.",
        "sectionNumber": "4.2.3",
        "sectionTitle": "Vstup z klávesnice"
      },
      {
        "uuid": "5b5f2597-a5e9-4f51-a2bc-4c589f87c767",
        "correct": "K fyzické klávesnici je obvykle připojena jedna virtuální klávesnice.",
        "incorrect": "K fyzické klávesnici může být připojeno více virtuálních klávesnic současně.",
        "sectionNumber": "4.2.3",
        "sectionTitle": "Vstup z klávesnice"
      },
      {
        "uuid": "4b51febc-a2f9-44bf-beab-bf3842c88bd6",
        "correct": "Programy v neaktivních virtuálních terminálech jsou typicky připojeny k nulové klávesnici.",
        "incorrect": "Programy v neaktivních virtuálních terminálech jsou aktivně obsluhovány fyzickou klávesnicí.",
        "sectionNumber": "4.2.3",
        "sectionTitle": "Vstup z klávesnice"
      },
      {
        "uuid": "41d1da81-2b23-4a33-924c-639ddb30ae25",
        "correct": "Virtuální klávesnice může být řízena programem, například u vzdáleného terminálu.",
        "incorrect": "Virtuální klávesnice je vždy řízena fyzickým uživatelem, nikoliv programem.",
        "sectionNumber": "4.2.3",
        "sectionTitle": "Vstup z klávesnice"
      },
      {
        "uuid": "2afcdef8-64e1-4356-bc22-76f66b154eae",
        "correct": "V grafickém režimu jsou buňky s písmeny nahrazeny pixely, což umožňuje flexibilnější zobrazení.",
        "incorrect": "V grafickém režimu jsou pixely nahrazeny buňkami s písmeny, což zachovává omezení textového terminálu.",
        "sectionNumber": "4.2.4",
        "sectionTitle": "Grafický režim"
      },
      {
        "uuid": "9f7a8349-0c21-424e-99c6-6329176349fc",
        "correct": "Virtualizace vstupu v grafickém režimu má podobná omezení jako virtualizace vstupu v textovém režimu.",
        "incorrect": "Virtualizace vstupu v grafickém režimu je výrazně flexibilnější než virtualizace vstupu v textovém režimu.",
        "sectionNumber": "4.2.4",
        "sectionTitle": "Grafický režim"
      },
      {
        "uuid": "27972471-d3ab-4c64-9e1d-876b487ed8f9",
        "correct": "Grafická obrazovka nabízí flexibilnější metody virtualizace výstupu oproti textové obrazovce.",
        "incorrect": "Textová obrazovka nabízí flexibilnější metody virtualizace výstupu oproti grafické obrazovce.",
        "sectionNumber": "4.2.4",
        "sectionTitle": "Grafický režim"
      },
      {
        "uuid": "97f42306-3d95-4ffb-bbda-556c3e683ee5",
        "correct": "Každá aplikace v okenním systému obdrží svou vlastní virtuální obrazovku.",
        "incorrect": "Pouze některé aplikace v okenním systému obdrží svou vlastní virtuální obrazovku.",
        "sectionNumber": "4.2.5",
        "sectionTitle": "Okenní systémy"
      },
      {
        "uuid": "e6322595-e3ac-4d22-96a4-18482518c9db",
        "correct": "Virtuální obrazovky aplikací jsou zobrazeny jako okna, s nimiž může uživatel manipulovat.",
        "incorrect": "Virtuální obrazovky aplikací jsou zobrazeny jako okna, s nimiž uživatel nemůže manipulovat.",
        "sectionNumber": "4.2.5",
        "sectionTitle": "Okenní systémy"
      },
      {
        "uuid": "fea0681f-a210-4c76-a285-d19300046b80",
        "correct": "Chování oken, včetně jejich zobrazení a ovládání, se může lišit v závislosti na konkrétním okenním systému.",
        "incorrect": "Chování oken, včetně jejich zobrazení a ovládání, je jednotné napříč všemi okenními systémy.",
        "sectionNumber": "4.2.5",
        "sectionTitle": "Okenní systémy"
      },
      {
        "uuid": "22d3bf83-7569-4382-a9b6-419d5369325a",
        "correct": "Okenní systém virtualizuje klávesnici a události ukazovacích zařízení pro aktivní okno.",
        "incorrect": "Okenní systém virtualizuje pouze klávesnici, ale ne události ukazovacích zařízení.",
        "sectionNumber": "4.2.5",
        "sectionTitle": "Okenní systémy"
      },
      {
        "uuid": "953070d9-6925-4105-b71f-4aff7b2dce40",
        "correct": "Rozhraní mobilních telefonů, umožňující přepínání mezi aplikacemi, lze považovat za formu okenního systému.",
        "incorrect": "Rozhraní mobilních telefonů, umožňující přepínání mezi aplikacemi, nelze považovat za formu okenního systému.",
        "sectionNumber": "4.2.5",
        "sectionTitle": "Okenní systémy"
      },
      {
        "uuid": "dcf24305-d985-484f-96ca-6f0cd01e2c55",
        "correct": "Rasterizace, neboli výpočet barev pixelů, je výpočetně náročný proces, jehož náročnost roste s počtem pixelů a složitostí scény.",
        "incorrect": "Rasterizace, neboli výpočet barev pixelů, je výpočetně nenáročný proces, jehož náročnost klesá s počtem pixelů a složitostí scény.",
        "sectionNumber": "4.2.6",
        "sectionTitle": "GPU"
      },
      {
        "uuid": "e2326424-9d4a-412b-902d-235ba0cf2330",
        "correct": "Moderní GPU využívají virtualizaci s hardwarovými kontexty pro efektivní sdílení mezi více aplikacemi.",
        "incorrect": "Moderní GPU nepodporují virtualizaci a nemohou být efektivně sdíleny mezi více aplikacemi.",
        "sectionNumber": "4.2.6",
        "sectionTitle": "GPU"
      },
      {
        "uuid": "94ce95d9-11c9-480c-9761-0c37ab8de0b1",
        "correct": "Výpočet pixelů pomocí GPU typicky zahrnuje uložení vypočtených pixelů do paměti.",
        "incorrect": "Výpočet pixelů pomocí GPU se obejde bez nutnosti ukládat vypočtené pixely do paměti.",
        "sectionNumber": "4.2.6",
        "sectionTitle": "GPU"
      },
      {
        "uuid": "cad0b46f-df05-43f4-9629-f2bfb10f079c",
        "correct": "Specializovaný hardware GPU urychluje rasterizaci mimo jiné díky efektivní virtualizaci přepínáním kontextů.",
        "incorrect": "Specializovaný hardware GPU urychluje rasterizaci, ale virtualizace přepínáním kontextů s tím nesouvisí.",
        "sectionNumber": "4.2.6",
        "sectionTitle": "GPU"
      },
      {
        "uuid": "5aa360ec-34d3-4f43-bd56-31f6d531b5ec",
        "correct": "Přístup CPU do paměti je nákladný, obzvláště pokud vyžaduje načítání dat pro výpočet barvy pixelu.",
        "incorrect": "Přístup CPU do paměti je rychlý a nenákladný, a to i při načítání dat pro výpočet barvy pixelu.",
        "sectionNumber": "4.2.6",
        "sectionTitle": "GPU"
      },
      {
        "uuid": "e0e58789-62c8-4abe-bc91-1d3a45416c45",
        "correct": "Výstupní část okenního systému, kompozitor, skládá obrázky aplikací do jednoho snímku.",
        "incorrect": "Vstupní část okenního systému, kompozitor, skládá obrázky aplikací do jednoho snímku.",
        "sectionNumber": "4.2.7",
        "sectionTitle": "Kompozitor"
      },
      {
        "uuid": "0125d2a4-3559-47c6-bc1c-bacbb9fcec58",
        "correct": "Pro výpočet snímku kompozitor obvykle využívá GPU, čímž šetří operační paměť.",
        "incorrect": "Pro výpočet snímku kompozitor obvykle využívá CPU, čímž šetří operační paměť.",
        "sectionNumber": "4.2.7",
        "sectionTitle": "Kompozitor"
      },
      {
        "uuid": "98e4d2ac-42f3-4ac8-a963-1cbe65af21c4",
        "correct": "Kompozitor musí spolupracovat se vstupní částí systému kvůli správnému zpracování souřadnic událostí.",
        "incorrect": "Kompozitor nemusí spolupracovat se vstupní částí systému, protože souřadnice událostí jsou irelevantní.",
        "sectionNumber": "4.2.7",
        "sectionTitle": "Kompozitor"
      },
      {
        "uuid": "300bfcd3-4f37-4f98-8e74-fa136b707300",
        "correct": "V okenním systému s kompozitorem je každá aplikace odpovědná za vykreslování vlastních pixelů.",
        "incorrect": "V okenním systému s kompozitorem je kompozitor odpovědný za vykreslování pixelů všech aplikací.",
        "sectionNumber": "4.2.7",
        "sectionTitle": "Kompozitor"
      },
      {
        "uuid": "90c82156-bebd-4611-a073-6fe2c25a0be4",
        "correct": "Grafický server je alternativní metoda virtualizace grafického podsystému.",
        "incorrect": "Grafický server je primární metoda virtualizace grafického podsystému.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "f03b45ca-e63d-4533-a44a-ae3504dea905",
        "correct": "Grafický server přijímá příkazy vyšší úrovně pro vykreslování 2D a 3D objektů.",
        "incorrect": "Grafický server přijímá příkazy na úrovni jednotlivých pixelů pro vykreslování.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "5c84ea94-0299-434a-aa36-d40e9f9839cc",
        "correct": "Grafický server má plnou kontrolu nad obsahem obrazovky.",
        "incorrect": "Grafický server nemá žádnou kontrolu nad obsahem obrazovky.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "892dcef4-075e-47e7-8ee0-a63bd8517a38",
        "correct": "Použitím grafického serveru se může objem přenášených dat zmenšit oproti rastrové reprezentaci.",
        "incorrect": "Použitím grafického serveru se objem přenášených dat zvětší oproti rastrové reprezentaci.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "96f0d698-4f24-4d15-ac68-cfd965db5095",
        "correct": "Grafický server usnadňuje vzdálené vykreslování díky menšímu objemu přenášených dat.",
        "incorrect": "Grafický server znesnadňuje vzdálené vykreslování kvůli většímu objemu přenášených dat.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "b911b290-ce6a-4920-bc9c-90832459ff0b",
        "correct": "Grafický server může pro rasterizaci využívat hardware.",
        "incorrect": "Grafický server nikdy pro rasterizaci nevyužívá hardware.",
        "sectionNumber": "4.2.8",
        "sectionTitle": "Grafický server"
      },
      {
        "uuid": "bbe200ad-eeb2-4b5f-8cf1-97f70659fc13",
        "correct": "Výstup zvukového rozhraní lze virtualizovat mixováním několika zvukových proudů do jednoho.",
        "incorrect": "Výstup zvukového rozhraní lze virtualizovat pouze přepínáním zvukových proudů, nikoliv mixováním.",
        "sectionNumber": "4.2.9",
        "sectionTitle": "Audio"
      },
      {
        "uuid": "be8a2c25-769e-40b9-9167-096aaac58b7e",
        "correct": "Vstup zvukového rozhraní, například mikrofon, lze v operačním systému pouze přepínat, nikoliv mixovat.",
        "incorrect": "Vstup zvukového rozhraní, například mikrofon, lze v operačním systému mixovat i přepínat současně.",
        "sectionNumber": "4.2.9",
        "sectionTitle": "Audio"
      },
      {
        "uuid": "22a740b9-0fd4-4d4d-b416-5e5288e766f9",
        "correct": "Větší vyrovnávací paměť zvukového subsystému snižuje pravděpodobnost výpadku zvuku, ale zvyšuje latenci.",
        "incorrect": "Větší vyrovnávací paměť zvukového subsystému zvyšuje pravděpodobnost výpadku zvuku a snižuje latenci.",
        "sectionNumber": "4.2.9",
        "sectionTitle": "Audio"
      },
      {
        "uuid": "10fbe5ce-d8cb-4ec6-a2d3-98d8f2d2dc75",
        "correct": "Zvuková rozhraní, podobně jako grafické zobrazení, jsou v operačních systémech citlivá na latenci a nepřerušenost datového proudu.",
        "incorrect": "Zvuková rozhraní, na rozdíl od grafického zobrazení, nejsou v operačních systémech citlivá na latenci a nepřerušenost datového proudu.",
        "sectionNumber": "4.2.9",
        "sectionTitle": "Audio"
      },
      {
        "uuid": "c1523ff2-46f4-457c-8f5a-cf5247784ca8",
        "correct": "Tiskárny jsou z pohledu operačního systému charakteristické dávkovým zpracováním úloh.",
        "incorrect": "Tiskárny jsou z pohledu operačního systému charakteristické interaktivním zpracováním úloh.",
        "sectionNumber": "4.2.10",
        "sectionTitle": "Tiskárny"
      },
      {
        "uuid": "c0855a42-b3ef-4d13-b69c-2d8ad625d97a",
        "correct": "Virtualizace tiskáren je řešena frontou úloh, což je analogické k plánování úloh v dávkových systémech.",
        "incorrect": "Virtualizace tiskáren je řešena interaktivním plánováním úloh, na rozdíl od dávkových systémů.",
        "sectionNumber": "4.2.10",
        "sectionTitle": "Tiskárny"
      },
      {
        "uuid": "0ef94a64-ba76-4a6b-8274-612865e159d2",
        "correct": "Abstrakce tiskáren v operačním systému má za cíl skrýt rozdíly mezi různými modely tiskáren pro aplikace.",
        "incorrect": "Abstrakce tiskáren v operačním systému má za cíl zdůraznit rozdíly mezi různými modely tiskáren pro aplikace.",
        "sectionNumber": "4.2.10",
        "sectionTitle": "Tiskárny"
      },
      {
        "uuid": "30340687-0308-47de-9855-7bb60bce5dfc",
        "correct": "PDF a PostScript slouží jako formáty pro popis dokumentů, které mají zahladit rozdíly mezi tiskárnami.",
        "incorrect": "PDF a PostScript slouží jako formáty pro popis dokumentů, které jsou specifické pro konkrétní tiskárny.",
        "sectionNumber": "4.2.10",
        "sectionTitle": "Tiskárny"
      },
      {
        "uuid": "cf73bc7b-46e9-481a-944d-768853fc3da4",
        "correct": "Některé síťové tiskárny mohou obsahovat interní frontu úloh, čímž virtualizaci řeší i mezi počítači.",
        "incorrect": "Síťové tiskárny nikdy neobsahují interní frontu úloh, virtualizaci vždy plně řeší operační systém.",
        "sectionNumber": "4.2.10",
        "sectionTitle": "Tiskárny"
      },
      {
        "uuid": "e1adf9c7-8ec3-417e-909c-9a497e8dfe25",
        "correct": "Základní funkcí počítačové sítě je umožnit komunikaci a přenos dat mezi počítači.",
        "incorrect": "Základní funkcí počítačové sítě je pouze fyzicky propojit počítače, nikoliv přenášet data.",
        "sectionNumber": "4.3.1",
        "sectionTitle": "Počítačová síť"
      },
      {
        "uuid": "1e192443-1499-4e96-8ac2-abd137378460",
        "correct": "Pro připojení k síti počítače využívají síťová rozhraní a propojovací média, která mohou být drátová.",
        "incorrect": "Pro připojení k síti počítače využívají pouze síťová rozhraní, propojovací média nejsou nutná.",
        "sectionNumber": "4.3.1",
        "sectionTitle": "Počítačová síť"
      },
      {
        "uuid": "1dfeb48c-6f92-4ac2-9aa7-58d8e8abe5e3",
        "correct": "Síťové rozhraní se připojuje k počítači sběrnicí a k síti přenosovým médiem, podobně jako řadič sběrnice.",
        "incorrect": "Síťové rozhraní se připojuje k počítači přímo, bez sběrnice, a k síti přenosovým médiem.",
        "sectionNumber": "4.3.1",
        "sectionTitle": "Počítačová síť"
      },
      {
        "uuid": "56087fc0-e7ac-4835-9137-635c3d26f325",
        "correct": "Architektura počítačové sítě se liší od sběrnice absencí význačného centrálního prvku.",
        "incorrect": "Architektura počítačové sítě je identická se sběrnicí, včetně centrálního prvku.",
        "sectionNumber": "4.3.1",
        "sectionTitle": "Počítačová síť"
      },
      {
        "uuid": "cc4ff1e0-f837-49d6-8f19-cb23a62c3432",
        "correct": "Fyzická vrstva ISO/OSI modelu je primárně záležitostí hardwaru.",
        "incorrect": "Fyzická vrstva ISO/OSI modelu je primárně záležitostí operačního systému.",
        "sectionNumber": "4.3.2",
        "sectionTitle": "Vrstvy"
      },
      {
        "uuid": "ebd98871-5672-4e32-aca9-91940aba2576",
        "correct": "Linková vrstva ISO/OSI modelu tvoří rozhraní mezi hardwarem a operačním systémem.",
        "incorrect": "Linková vrstva ISO/OSI modelu je primárně aplikační vrstvou.",
        "sectionNumber": "4.3.2",
        "sectionTitle": "Vrstvy"
      },
      {
        "uuid": "ea4b089d-cbf3-4c2c-842a-da2409821079",
        "correct": "Síťová vrstva ISO/OSI modelu zajišťuje komunikaci mezi koncovými uzly.",
        "incorrect": "Síťová vrstva ISO/OSI modelu se zabývá doručováním dat mezi aplikacemi.",
        "sectionNumber": "4.3.2",
        "sectionTitle": "Vrstvy"
      },
      {
        "uuid": "4f2681de-6f21-45c7-81a2-b4a38956cb87",
        "correct": "Virtualizace se v ISO/OSI modelu typicky uplatňuje mezi transportní a aplikační vrstvou.",
        "incorrect": "Virtualizace se v ISO/OSI modelu typicky uplatňuje mezi linkovou a síťovou vrstvou.",
        "sectionNumber": "4.3.2",
        "sectionTitle": "Vrstvy"
      },
      {
        "uuid": "606b02d4-3c45-442c-895b-cceb6bc2eef7",
        "correct": "Vrstvy 1 a 2 ISO/OSI modelu jsou převážně hardwarové, vrstvy 3 a 4 převážně softwarové.",
        "incorrect": "Vrstvy 1 a 2 ISO/OSI modelu jsou převážně softwarové, vrstvy 3 a 4 převážně hardwarové.",
        "sectionNumber": "4.3.2",
        "sectionTitle": "Vrstvy"
      },
      {
        "uuid": "879e8a1d-1102-4f59-81bf-c77829ada6f4",
        "correct": "Operační systém přímo komunikuje pouze s částí MAC ethernetového rozhraní.",
        "incorrect": "Operační systém přímo komunikuje s fyzickou i MAC vrstvou ethernetového rozhraní.",
        "sectionNumber": "4.3.4",
        "sectionTitle": "Ethernet (IEEE 802.3)"
      },
      {
        "uuid": "a7d7accf-f799-445a-a8fc-d98345646aa6",
        "correct": "Ethernetový rámec obsahuje preambuli, která slouží k synchronizaci přijímače.",
        "incorrect": "Ethernetový rámec obsahuje preambuli, která slouží k adresování cílového zařízení.",
        "sectionNumber": "4.3.4",
        "sectionTitle": "Ethernet (IEEE 802.3)"
      },
      {
        "uuid": "1fdb217e-238a-4e58-9a37-a264ecbe17f6",
        "correct": "V moderním Ethernetu se propojování point-to-point realizuje pomocí aktivních přepínačů.",
        "incorrect": "V moderním Ethernetu se propojování point-to-point realizuje pomocí pasivních hubů.",
        "sectionNumber": "4.3.4",
        "sectionTitle": "Ethernet (IEEE 802.3)"
      },
      {
        "uuid": "b88139f8-d8d1-4544-bee0-619518342e79",
        "correct": "Maximální velikost užitných dat v ethernetovém rámci je patnáct set bajtů.",
        "incorrect": "Maximální velikost užitných dat v ethernetovém rámci je šestnáct set bajtů.",
        "sectionNumber": "4.3.4",
        "sectionTitle": "Ethernet (IEEE 802.3)"
      },
      {
        "uuid": "b899da8c-5a65-40a4-87e9-78a4dd10c8c2",
        "correct": "Adresace na ethernetové úrovni funguje pouze lokálně v rámci segmentu.",
        "incorrect": "Adresace na ethernetové úrovni funguje globálně napříč sítěmi.",
        "sectionNumber": "4.3.5",
        "sectionTitle": "Adresace"
      },
      {
        "uuid": "92ea230d-d3b8-4335-aa82-e71abdd5bc9d",
        "correct": "Každé ethernetové rozhraní má přidělenu tovární MAC adresu pro identifikaci.",
        "incorrect": "MAC adresa ethernetového rozhraní je přidělena operačním systémem.",
        "sectionNumber": "4.3.5",
        "sectionTitle": "Adresace"
      },
      {
        "uuid": "5f0b95e2-61b3-4235-9778-7714f3d9b0ea",
        "correct": "Přepínače v ethernetové síti mapují MAC adresy na porty pro přeposílání rámců.",
        "incorrect": "Přepínače v ethernetové síti mapují IP adresy na porty pro přeposílání rámců.",
        "sectionNumber": "4.3.5",
        "sectionTitle": "Adresace"
      },
      {
        "uuid": "c84561c2-4304-4b3f-a440-8d6b9366f858",
        "correct": "Pro doručení paketu třetí vrstvy je nutné získat odpovídající adresu druhé vrstvy.",
        "incorrect": "Pro doručení paketu třetí vrstvy se adresa druhé vrstvy nevyužívá.",
        "sectionNumber": "4.3.5",
        "sectionTitle": "Adresace"
      },
      {
        "uuid": "78cb4bfe-0925-4df3-b277-cba5147e527c",
        "correct": "V sítích IP/Ethernet se překlad adres zajišťuje protokolem ARP.",
        "incorrect": "V sítích IP/Ethernet se překlad adres zajišťuje protokolem DHCP.",
        "sectionNumber": "4.3.5",
        "sectionTitle": "Adresace"
      },
      {
        "uuid": "d8e98629-275e-48d9-af74-6b0bd02d4c18",
        "correct": "Síťové rozhraní autonomně čte rámce z odchozí fronty pomocí DMA a odesílá je do sítě.",
        "incorrect": "Síťové rozhraní autonomně čte rámce z odchozí fronty pomocí CPU a odesílá je do sítě.",
        "sectionNumber": "4.3.6",
        "sectionTitle": "Odchozí fronta"
      },
      {
        "uuid": "afedf95b-f056-49bb-b05c-286c390f712e",
        "correct": "Odchozí fronta je implementována jako kruhová fronta pevné velikosti uložená v operační paměti.",
        "incorrect": "Odchozí fronta je implementována jako lineární fronta proměnné velikosti uložená v operační paměti.",
        "sectionNumber": "4.3.6",
        "sectionTitle": "Odchozí fronta"
      },
      {
        "uuid": "6ee7a8ec-baf9-4ddd-b230-57ec74a8e2ea",
        "correct": "Pro odeslání rámce operační systém upravuje koncový ukazatel odchozí fronty po zápisu dat.",
        "incorrect": "Pro odeslání rámce operační systém upravuje hlavový ukazatel odchozí fronty před zápisem dat.",
        "sectionNumber": "4.3.6",
        "sectionTitle": "Odchozí fronta"
      },
      {
        "uuid": "69355fb6-fc2d-4210-aa62-81ddfec85e24",
        "correct": "Ukazatele hlavový a koncový dělí kruhovou odchozí frontu na část pro operační systém a síťové rozhraní.",
        "incorrect": "Ukazatele hlavový a koncový dělí kruhovou odchozí frontu na část pouze pro operační systém.",
        "sectionNumber": "4.3.6",
        "sectionTitle": "Odchozí fronta"
      },
      {
        "uuid": "4086f9ed-bbe1-4272-beff-d1ab803d0d75",
        "correct": "Síťové rozhraní signalizuje události související se zpracováním odchozí fronty pomocí přerušení.",
        "incorrect": "Síťové rozhraní signalizuje události související se zpracováním odchozí fronty pomocí pollingu.",
        "sectionNumber": "4.3.6",
        "sectionTitle": "Odchozí fronta"
      },
      {
        "uuid": "27e0aacc-fdf7-4c21-9dcf-a0f78e90e8c6",
        "correct": "Síťové rozhraní signalizuje příchod nových dat do fronty pomocí přerušení.",
        "incorrect": "Síťové rozhraní signalizuje příchod nových dat do fronty pomocí dotazování.",
        "sectionNumber": "4.3.7",
        "sectionTitle": "Příjmová fronta"
      },
      {
        "uuid": "a4084662-33fd-4e32-85c6-12b32f57c098",
        "correct": "Pokud je příjmová fronta plná a přichází další rámce, dojde ke ztrátě dat.",
        "incorrect": "Pokud je příjmová fronta plná a přichází další rámce, rámce se uloží do vyrovnávací paměti.",
        "sectionNumber": "4.3.7",
        "sectionTitle": "Příjmová fronta"
      },
      {
        "uuid": "addfb8b1-86c2-465b-a00d-327cc5b7dfba",
        "correct": "Operační systém alokuje paměť pro rámce v příjmové frontě.",
        "incorrect": "Síťové rozhraní alokuje paměť pro rámce v příjmové frontě.",
        "sectionNumber": "4.3.7",
        "sectionTitle": "Příjmová fronta"
      },
      {
        "uuid": "81c6feb2-e170-433d-b290-cc626b927e5c",
        "correct": "Události signalizující nová data v příjmové frontě mohou být sdružovány pro více rámců.",
        "incorrect": "Události signalizující nová data v příjmové frontě nemohou být sdružovány a jsou generovány pro každý rámec zvlášť.",
        "sectionNumber": "4.3.7",
        "sectionTitle": "Příjmová fronta"
      },
      {
        "uuid": "66d6324d-c550-4d4f-b9a6-de988de2fbcf",
        "correct": "Operační systém dává najevo síťovému rozhraní, že paměť může být přepsána, přesunutím položky do kruhové fronty.",
        "incorrect": "Síťové rozhraní dává najevo operačnímu systému, že paměť může být přepsána, přesunutím položky do kruhové fronty.",
        "sectionNumber": "4.3.7",
        "sectionTitle": "Příjmová fronta"
      },
      {
        "uuid": "cd6bcea2-4127-4a57-88ce-e7235d9a1aab",
        "correct": "Moderní síťové adaptéry mohou dosáhnout takové rychlosti, že jedno procesorové jádro nemusí stačit na jejich plné využití.",
        "incorrect": "Moderní síťové adaptéry jsou navrženy tak, aby jedno procesorové jádro vždy dokázalo plně saturovat jejich výkon.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "cce0ee3d-c551-4d58-b3a7-6dd142606232",
        "correct": "Rozhraní s více frontami umožňují operačnímu systému rozdělit zátěž zpracování síťového provozu mezi různá procesorová jádra.",
        "incorrect": "Rozhraní s více frontami jsou navržena pro zvýšení výkonu jediného procesorového jádra při zpracování síťového provozu.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "d8ca55b8-ae4f-48ef-9027-38a81f11366f",
        "correct": "Operační systém typicky nastavuje pro každé procesorové jádro jednu vysílací a jednu přijímací frontu u moderních síťových karet.",
        "incorrect": "Operační systém obvykle sdílí jednu vysílací a jednu přijímací frontu mezi všechna procesorová jádra pro snížení režie.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "39dca947-376e-4a66-be4a-0a6e49ad07b5",
        "correct": "Při odesílání paketů operační systém rozhoduje o výběru vysílací fronty, kterou síťové rozhraní použije.",
        "incorrect": "Při odesílání paketů síťové rozhraní automaticky vybírá vysílací frontu bez zásahu operačního systému.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "73f6743e-2538-4a91-8ddc-c9084f54cd61",
        "correct": "Při příjmu paketů síťové rozhraní samo rozhoduje o zařazení rámců do front na základě filtrování nebo hashování.",
        "incorrect": "Při příjmu paketů operační systém aktivně rozhoduje o zařazení každého rámce do konkrétní přijímací fronty.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "7b3840cf-079d-4170-8b36-0e1189e0c1e6",
        "correct": "Cílem rozřazování rámců do front na síťovém rozhraní je zvýšit lokalitu zpracování a rovnoměrně zaplnit fronty.",
        "incorrect": "Cílem rozřazování rámců do front je primárně minimalizovat latenci doručení paketů do aplikace bez ohledu na lokalitu.",
        "sectionNumber": "4.3.8",
        "sectionTitle": "Vícefrontové adaptéry"
      },
      {
        "uuid": "8613db6d-7a6f-42dc-8fd4-9beab13c8c33",
        "correct": "Protokoly WiFi jsou implementovány částečně ve firmwaru a částečně v softwaru operačního systému.",
        "incorrect": "Protokoly WiFi jsou implementovány výhradně v softwaru operačního systému.",
        "sectionNumber": "4.3.9",
        "sectionTitle": "WiFi"
      },
      {
        "uuid": "b6dbb5fc-bee5-4e78-aa5f-fd00975d35e7",
        "correct": "Šifrování je u bezdrátových sítí prakticky povinné kvůli snadnému odposlouchávání sdíleného média.",
        "incorrect": "Šifrování u bezdrátových sítí je volitelné a není nutné kvůli obtížnému odposlouchávání.",
        "sectionNumber": "4.3.9",
        "sectionTitle": "WiFi"
      },
      {
        "uuid": "c60358cf-b1c2-47ad-8d3a-332a9cdca1c8",
        "correct": "Autentizace v WiFi sítích je nezbytná pro prevenci útoků typu man in the middle.",
        "incorrect": "Autentizace v WiFi sítích není nutná pro prevenci útoků typu man in the middle.",
        "sectionNumber": "4.3.9",
        "sectionTitle": "WiFi"
      }
    ]
  },
  {
    "uuid": "f6afeeb0-aa47-4201-82b3-c1b185f65e50",
    "sectionNumber": "5",
    "sectionTitle": "Souběžnost a synchronizace",
    "statements": [
      {
        "uuid": "bc13ed0f-7024-45f3-b277-442a139c31bb",
        "correct": "V grafu předcházení vrcholy reprezentují události a hrany reprezentují akce.",
        "incorrect": "V grafu předcházení hrany reprezentují události a vrcholy reprezentují akce.",
        "sectionNumber": "5.1.1",
        "sectionTitle": "Relace předcházení"
      },
      {
        "uuid": "51965a94-8a98-4bec-b66f-7a7dd791d684",
        "correct": "Graf předcházení je tranzitivní redukcí relace uspořádání 'muselo se stát před'.",
        "incorrect": "Graf předcházení je tranzitivním uzávěrem relace uspořádání 'muselo se stát před'.",
        "sectionNumber": "5.1.1",
        "sectionTitle": "Relace předcházení"
      },
      {
        "uuid": "5b7ab34f-7d35-40f5-88f4-cc1faab84938",
        "correct": "Akce v grafu předcházení nemohou přímo spojovat události, mezi kterými existuje cesta délky dva.",
        "incorrect": "Akce v grafu předcházení mohou přímo spojovat události, mezi kterými existuje cesta délky dva.",
        "sectionNumber": "5.1.1",
        "sectionTitle": "Relace předcházení"
      },
      {
        "uuid": "cfd01452-1939-4a98-8bd6-c30f648a9350",
        "correct": "Souběžné události jsou takové, mezi kterými v grafu závislostí nevede cesta.",
        "incorrect": "Souběžné události jsou takové, mezi kterými v grafu závislostí vždy vede cesta.",
        "sectionNumber": "5.1.2",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "a5e1f9cd-5fce-454c-8e75-d852e7f7609a",
        "correct": "Pokud událost A nepředchází události B a B nepředchází A, události A a B jsou souběžné.",
        "incorrect": "Pokud událost A nepředchází události B a B nepředchází A, událost A musí předcházet události B.",
        "sectionNumber": "5.1.2",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "1d83812e-e73b-401a-a0e6-1c2e31ee850a",
        "correct": "Časový sled událostí je lineární uspořádání, kde pro každou dvojici událostí jedna předchází druhou.",
        "incorrect": "Časový sled událostí je nelineární uspořádání, kde pro každou dvojici událostí jedna předchází druhou.",
        "sectionNumber": "5.1.3",
        "sectionTitle": "Časový sled"
      },
      {
        "uuid": "aa67e4d5-f959-47c7-992b-8e23ccce4228",
        "correct": "V časovém sledu událostí, reprezentovaném časovými razítky, nemohou dvě události nastat ve stejný okamžik.",
        "incorrect": "V časovém sledu událostí, reprezentovaném časovými razítky, mohou dvě události nastat ve stejný okamžik.",
        "sectionNumber": "5.1.3",
        "sectionTitle": "Časový sled"
      },
      {
        "uuid": "2540b410-8043-4424-9e93-331de40e38e1",
        "correct": "Relace předcházení je abstrakce, která v operačních systémech popisuje vnější chování procesů.",
        "incorrect": "Relace předcházení je konkrétní implementace, která v operačních systémech popisuje vnitřní chování procesů.",
        "sectionNumber": "5.1.4",
        "sectionTitle": "Hazard souběhu"
      },
      {
        "uuid": "c049f981-17af-420e-9b3f-22c9ea678e4a",
        "correct": "Hazard souběhu nastává, pokud různé časové sledy událostí vedou k rozdílnému vnějšímu chování systému.",
        "incorrect": "Hazard souběhu nastává, pokud stejné časové sledy událostí vedou k rozdílnému vnějšímu chování systému.",
        "sectionNumber": "5.1.4",
        "sectionTitle": "Hazard souběhu"
      },
      {
        "uuid": "27741294-9d19-4026-9f45-f8b1eb0cf30f",
        "correct": "Porušení abstrakce relace předcházení, tedy hazard souběhu, je nežádoucí, i když nemusí být chybou.",
        "incorrect": "Porušení abstrakce relace předcházení, tedy hazard souběhu, je žádoucí, protože zlepšuje výkon systému.",
        "sectionNumber": "5.1.4",
        "sectionTitle": "Hazard souběhu"
      },
      {
        "uuid": "c132ba29-dca0-438e-91e9-4081245231a0",
        "correct": "Vnější chování systému závisí pouze na relaci předcházení, nikoliv na konkrétním časovém rozložení událostí.",
        "incorrect": "Vnější chování systému závisí na relaci předcházení a také na konkrétním časovém rozložení událostí.",
        "sectionNumber": "5.1.4",
        "sectionTitle": "Hazard souběhu"
      },
      {
        "uuid": "4a30a4f4-40e2-48e4-84a9-4cd7aea265f0",
        "correct": "Abstrakce relace předcházení se snaží skrýt vnitřní detaily procesů a jejich časové uspořádání v systému.",
        "incorrect": "Abstrakce relace předcházení se snaží odhalit vnitřní detaily procesů a jejich časové uspořádání v systému.",
        "sectionNumber": "5.1.4",
        "sectionTitle": "Hazard souběhu"
      },
      {
        "uuid": "1581885d-6ab6-4634-a66a-e66962e02261",
        "correct": "Akce v grafu předcházení jsou vždy prováděny hybatelem, typicky vláknem nebo periferií.",
        "incorrect": "Akce v grafu předcházení jsou prováděny nezávisle na hybatelích, jako jsou vlákna a periferie.",
        "sectionNumber": "5.1.5",
        "sectionTitle": "Hybatel"
      },
      {
        "uuid": "873903b1-afd2-461c-bfc6-966ab742fac0",
        "correct": "V grafu předcházení můžeme hranám, reprezentujícím akce, přisoudit hybatele, například vlákno či periferii.",
        "incorrect": "Hranám v grafu předcházení nelze přisoudit hybatele, protože hrany reprezentují pouze samotné akce.",
        "sectionNumber": "5.1.5",
        "sectionTitle": "Hybatel"
      },
      {
        "uuid": "f4c0f57e-a8e1-42f0-8b8b-2b4d6cd3817d",
        "correct": "Hybatele, jako vlákna nebo periferie, lze v grafu předcházení chápat jako pešky pohybující se po hranách své barvy.",
        "incorrect": "Hybatele v grafu předcházení se nepovažují za pešky pohybující se po hranách, ale za pasivní prvky grafu.",
        "sectionNumber": "5.1.5",
        "sectionTitle": "Hybatel"
      },
      {
        "uuid": "c5110ce6-27c1-450e-a21e-c7f4e45f829c",
        "correct": "V příkladu jsou vlákna A a B, která provádějí prakticky stejný program s rozdílnými registry.",
        "incorrect": "V příkladu vlákna A a B vykonávají zcela odlišné programy bez jakékoliv programové podobnosti.",
        "sectionNumber": "5.1.5",
        "sectionTitle": "Hybatel"
      },
      {
        "uuid": "cd38a771-700a-41b7-ac61-541c7612ce68",
        "correct": "Akce jsou souběžné právě tehdy, když jsou souběžné libovolné dvě události, kterých se tyto akce týkají.",
        "incorrect": "Akce jsou souběžné pouze tehdy, když jsou souběžné všechny události, kterých se tyto akce týkají.",
        "sectionNumber": "5.1.6",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "43ccac0f-1bd1-4ab9-863f-fcb6202b9d87",
        "correct": "Událost nemůže být souběžná sama se sebou, ani nemohou být souběžné události spojené akcí.",
        "incorrect": "Událost může být souběžná sama se sebou, ale nemůže být souběžná s událostí spojenou akcí.",
        "sectionNumber": "5.1.6",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "fd98f772-cc0b-495f-9bad-43c56feacd55",
        "correct": "Nezávislé akce mohou proběhnout v libovolném pořadí, protože vedou do souběžných událostí.",
        "incorrect": "Nezávislé akce musí proběhnout v předem daném pořadí, i když vedou do souběžných událostí.",
        "sectionNumber": "5.1.6",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "36a81eba-3ec8-40c4-8b4b-43f56854d71c",
        "correct": "Synchronizace akcí nastává, když se akce 'sejdou' ve společné události a musí proběhnout 'najednou'.",
        "incorrect": "Synchronizace akcí nastává, když se akce 'sejdou' ve společné události a mohou proběhnout v libovolném pořadí.",
        "sectionNumber": "5.1.6",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "c418330b-51ad-4c38-bcae-a2a2449b333a",
        "correct": "Souběžné sledy jsou takové, které nesdílí žádnou událost, s výjimkou první a/nebo poslední události.",
        "incorrect": "Souběžné sledy jsou takové, které sdílí alespoň jednu událost kromě první nebo poslední události.",
        "sectionNumber": "5.1.6",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "9790890a-abcf-4e98-a590-bf7e1d51a3d4",
        "correct": "Akce v operačním systému propojují události a stavy systému.",
        "incorrect": "Akce v operačním systému popisují pouze stavy, nikoli události.",
        "sectionNumber": "5.1.7",
        "sectionTitle": "Stavový prostor"
      },
      {
        "uuid": "5d11a343-732f-4692-8e82-096b6e3790db",
        "correct": "Výpočet je vnímán jako posloupnost stavů a akcí v operačním systému.",
        "incorrect": "Výpočet je chápán pouze jako lineární posloupnost stavů bez akcí.",
        "sectionNumber": "5.1.7",
        "sectionTitle": "Stavový prostor"
      },
      {
        "uuid": "91d47ccb-11f3-4f28-a3eb-f0880f489317",
        "correct": "Stavový prostor je orientovaný graf, kde vrcholy jsou stavy a hrany akce.",
        "incorrect": "Stavový prostor je neorientovaný graf stavů, kde hrany nereprezentují akce.",
        "sectionNumber": "5.1.7",
        "sectionTitle": "Stavový prostor"
      },
      {
        "uuid": "eb5eb2ac-cd55-4623-ae99-83c78c51237f",
        "correct": "Stav systému zahrnuje registry procesoru a obsah paměťových buněk.",
        "incorrect": "Stav systému zahrnuje pouze registry procesoru, nikoli paměťové buňky.",
        "sectionNumber": "5.1.7",
        "sectionTitle": "Stavový prostor"
      },
      {
        "uuid": "7d384cf5-4395-4735-9921-52e84576dd2e",
        "correct": "Vstupní periferie mění svůj stav nezávisle na operačním systému.",
        "incorrect": "Vstupní periferie mění svůj stav výhradně na základě řízení operačním systémem.",
        "sectionNumber": "5.1.7",
        "sectionTitle": "Stavový prostor"
      },
      {
        "uuid": "2913d7e0-2c36-4f14-b745-54f1435c9442",
        "correct": "Kritická sekce je běh, jehož přerušení jiným souběžným během může vést k chybě.",
        "incorrect": "Kritická sekce je běh, jehož přerušení jiným souběžným během nikdy nevede k chybě.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "20632c90-3d58-4540-bb07-a37c9b4b10d0",
        "correct": "Porušení atomicity kritické sekce je z definice považováno za chybu běhu.",
        "incorrect": "Porušení atomicity kritické sekce není nikdy považováno za chybu běhu.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "2c2c4695-764d-4e3d-9a41-74165ca624b7",
        "correct": "Kritická sekce se týká běhů, které jsou relativní vůči jiným souběžným běhům.",
        "incorrect": "Kritická sekce se týká běhů, které jsou zcela nezávislé na jiných souběžných bězích.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "37758615-e2c3-40d3-a2e4-8cc7dccff000",
        "correct": "V příkladu s inkrementací proměnné V, běh vlákna A může být kritickou sekcí vůči běhu vlákna B.",
        "incorrect": "V příkladu s inkrementací proměnné V, běh vlákna A nikdy nemůže být kritickou sekcí vůči běhu vlákna B.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "07a87655-41f0-4687-acd2-6ca8ce85ef38",
        "correct": "Chyba atomicity nastává, když souběžné běhy vedou k nežádoucímu uspořádání akcí.",
        "incorrect": "Chyba atomicity nastává, když jednotlivé běhy samy o sobě, bez souběhu, vedou k chybě.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "03151cf8-9a7b-42a4-a1b8-08eb894aa84d",
        "correct": "Kritická sekce je speciálním případem obecnějšího konceptu hazardu souběhu.",
        "incorrect": "Kritická sekce je obecným případem a hazard souběhu je jejím speciálním případem.",
        "sectionNumber": "5.2.1",
        "sectionTitle": "Kritická sekce"
      },
      {
        "uuid": "c49f9dbf-81a4-4f26-93f1-cbf0a848f620",
        "correct": "Čtenáři v problému čtenářů a písařů nejsou vzájemně kritickou sekcí.",
        "incorrect": "Čtenáři v problému čtenářů a písařů jsou vzájemně kritickou sekcí.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "ffbf1f9a-4373-468b-9783-d172d9b1c88d",
        "correct": "Čtenář je v problému čtenářů a písařů kritickou sekcí vůči písaři.",
        "incorrect": "Čtenář v problému čtenářů a písařů není kritickou sekcí vůči písaři.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "b2dcb296-5faf-4cd1-8763-5914d3851253",
        "correct": "Písaři jsou v problému čtenářů a písařů vzájemně kritickou sekcí.",
        "incorrect": "Písaři v problému čtenářů a písařů nejsou vzájemně kritickou sekcí.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "46e97811-e887-4ea1-b630-8a86621f7c68",
        "correct": "Čtenáři v problému čtenářů a písařů sdílená data pouze čtou.",
        "incorrect": "Čtenáři v problému čtenářů a písařů sdílená data čtou a modifikují.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "49709dbf-fa30-4d55-9e83-8151d0162b2b",
        "correct": "Písaři v problému čtenářů a písařů sdílená data modifikují.",
        "incorrect": "Písaři v problému čtenářů a písařů sdílená data pouze čtou.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "f408ca91-6879-4536-9392-c83bedf50213",
        "correct": "Efektivní řešení problému čtenářů a písařů umožňují souběh čtenářů.",
        "incorrect": "Efektivní řešení problému čtenářů a písařů zakazují souběh čtenářů.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "9806482c-3dbc-49e2-b6e6-15a7289795ed",
        "correct": "Nejjednodušší řešení problému čtenářů a písařů je neefektivní.",
        "incorrect": "Nejjednodušší řešení problému čtenářů a písařů je efektivní.",
        "sectionNumber": "5.2.2",
        "sectionTitle": "Čtenáři a písaři"
      },
      {
        "uuid": "4b06b700-9cba-45a9-b85e-e345f4d5d13a",
        "correct": "Neustálá aktivita čtenářů může způsobit, že písaři budou trvale zablokováni v problému čtenářů a písařů.",
        "incorrect": "Neustálá aktivita čtenářů nikdy nemůže způsobit trvalé zablokování písařů v problému čtenářů a písařů.",
        "sectionNumber": "5.2.3",
        "sectionTitle": "Hladovění"
      },
      {
        "uuid": "905986a6-834a-4ffb-8cf2-5a6dbf1262d1",
        "correct": "Hladovění je definováno jako situace, kdy vlákno nemůže pokračovat ve svém výpočtu a vykonávat užitečné akce.",
        "incorrect": "Hladovění je definováno jako situace, kdy vlákno může nerušeně pokračovat ve svém výpočtu a vykonávat užitečné akce.",
        "sectionNumber": "5.2.3",
        "sectionTitle": "Hladovění"
      },
      {
        "uuid": "08a5800a-c460-4a65-9e5b-5577167e9063",
        "correct": "Uváznutí, kdy vlákna čekají v kruhu, je v operačních systémech považováno za běžnou příčinu hladovění.",
        "incorrect": "Uváznutí, kdy vlákna čekají v kruhu, není v operačních systémech nikdy považováno za příčinu hladovění.",
        "sectionNumber": "5.2.3",
        "sectionTitle": "Hladovění"
      },
      {
        "uuid": "b4c70a1c-4c8e-48b0-88d9-2e1498181fab",
        "correct": "Synchronizace sama o sobě není řešením problému hladovění a může být dokonce jeho častou příčinou.",
        "incorrect": "Synchronizace je vždy efektivním řešením problému hladovění v operačních systémech a nikdy není jeho příčinou.",
        "sectionNumber": "5.2.3",
        "sectionTitle": "Hladovění"
      },
      {
        "uuid": "b5d429c6-f2e4-4531-acca-b998742d925c",
        "correct": "Datová závislost vzniká, když akce čte data z paměti, do které předtím zapisovala jiná akce.",
        "incorrect": "Datová závislost vzniká, když akce zapisuje data do paměti, ze které předtím četla jiná akce.",
        "sectionNumber": "5.2.4",
        "sectionTitle": "Souběžná datová závislost"
      },
      {
        "uuid": "b2154442-bf81-45b5-9136-d9d2ebddb7e9",
        "correct": "Chyba pořadí se projevuje v souběžných systémech, kde existují datové závislosti mezi akcemi.",
        "incorrect": "Chyba pořadí se projevuje pouze v sekvenčních systémech, kde neexistují datové závislosti.",
        "sectionNumber": "5.2.4",
        "sectionTitle": "Souběžná datová závislost"
      },
      {
        "uuid": "4fd45015-cbad-40da-99c8-66d0ab64f3ff",
        "correct": "Datová závislost je specifický typ hazardu souběhu, odlišný od problémů kritické sekce.",
        "incorrect": "Datová závislost je typ hazardu souběhu, který je totožný s problémy kritické sekce.",
        "sectionNumber": "5.2.4",
        "sectionTitle": "Souběžná datová závislost"
      },
      {
        "uuid": "c04c5112-a193-4d49-bda0-0fa8f53deec4",
        "correct": "Odhalení chyb datové závislosti může být obtížné, zvláště pokud jsou některé akce časově nenáročné.",
        "incorrect": "Odhalení chyb datové závislosti je snadné, i když jsou všechny souběžné akce časově nenáročné.",
        "sectionNumber": "5.2.4",
        "sectionTitle": "Souběžná datová závislost"
      },
      {
        "uuid": "226f64ca-ce6b-483b-b1ad-01a87baf4cf1",
        "correct": "Příliš brzký pokus o použití dat v datové závislosti může způsobit běhovou chybu programu.",
        "incorrect": "Příliš brzký pokus o použití dat v datové závislosti nikdy nezpůsobí běhovou chybu programu.",
        "sectionNumber": "5.2.4",
        "sectionTitle": "Souběžná datová závislost"
      },
      {
        "uuid": "0c1888d1-553f-4cee-9dc3-a7a88bc10a00",
        "correct": "Producenti a konzumenti vláken pracují souběžně, což umožňuje distribuci úloh a urychlení celkového procesu.",
        "incorrect": "Producenti a konzumenti vláken pracují sekvenčně, což zajišťuje snadnější synchronizaci, ale snižuje výkon systému.",
        "sectionNumber": "5.2.5",
        "sectionTitle": "Producenti a konzumenti"
      },
      {
        "uuid": "4e4d758f-b5c0-4d13-b974-dc9c022b041f",
        "correct": "Při převaze produkce nad konzumací hrozí zahlcení paměti hromadícími se mezivýsledky, pokud není zavedena synchronizace.",
        "incorrect": "Při převaze produkce nad konzumací dochází k efektivnějšímu využití procesoru a zrychlení zpracování dat bez nutnosti synchronizace.",
        "sectionNumber": "5.2.5",
        "sectionTitle": "Producenti a konzumenti"
      },
      {
        "uuid": "804706cf-5cea-49a2-a4b3-013bc86c7ac4",
        "correct": "Synchronizace producentů a konzumentů je klíčová pro zamezení opakovaného zpracování stejných mezivýsledků a chyb.",
        "incorrect": "Synchronizace producentů a konzumentů je zbytečná, protože operační systém automaticky zajišťuje správné pořadí zpracování.",
        "sectionNumber": "5.2.5",
        "sectionTitle": "Producenti a konzumenti"
      },
      {
        "uuid": "63b74db5-107a-4fac-b7fe-15c1098cb3b5",
        "correct": "Ideální synchronizace producentů a konzumentů by měla omezit počet nezpracovaných mezivýsledků z důvodu paměťové efektivity.",
        "incorrect": "Ideální synchronizace producentů a konzumentů by měla maximalizovat počet nezpracovaných mezivýsledků pro zvýšení propustnosti systému.",
        "sectionNumber": "5.2.5",
        "sectionTitle": "Producenti a konzumenti"
      },
      {
        "uuid": "c3391303-6ae8-48a3-823b-46aaaa05dad3",
        "correct": "Jedním z rizik souběžné produkce a konzumace je přepsání mezivýsledku producentem dříve, než bude zpracován konzumentem.",
        "incorrect": "Souběžná produkce a konzumace nikdy nezpůsobí přepsání mezivýsledku, protože producent vždy čeká na zpracování konzumentem.",
        "sectionNumber": "5.2.5",
        "sectionTitle": "Producenti a konzumenti"
      },
      {
        "uuid": "5bca3968-549b-4f58-89fb-3940e239eacf",
        "correct": "Nedostatek souběžnosti v systému může vést k neefektivnímu využití hardwarových zdrojů, zejména jader procesoru.",
        "incorrect": "Nedostatek souběžnosti v systému zefektivňuje využití hardwarových zdrojů, zejména jader procesoru.",
        "sectionNumber": "5.2.6",
        "sectionTitle": "Rozvětvení a setkání"
      },
      {
        "uuid": "1eebad1b-19e8-4ffc-98fc-aaafb3b38347",
        "correct": "Rozvětvení vláken může být řešením pro nedostatek souběžnosti, ale vyžaduje synchronizaci a čekání na dokončení všech větví.",
        "incorrect": "Rozvětvení vláken řeší problém nadměrné souběžnosti a nevyžaduje synchronizaci ani čekání na dokončení všech větví.",
        "sectionNumber": "5.2.6",
        "sectionTitle": "Rozvětvení a setkání"
      },
      {
        "uuid": "279ffd03-9751-42ad-bf4a-eb2e971449be",
        "correct": "Akce, které nejsou souběžné, nelze provádět paralelně, což omezuje potenciální paralelizaci výpočtu.",
        "incorrect": "Akce, které nejsou souběžné, lze provádět paralelně, což maximalizuje potenciální paralelizaci výpočtu.",
        "sectionNumber": "5.2.6",
        "sectionTitle": "Rozvětvení a setkání"
      },
      {
        "uuid": "2f4164ef-6ffa-42d0-a702-9efa40ba36e9",
        "correct": "Předčasné pokračování výpočtu před dokončením všech souběžných bloků může vést k výpočetním závislostem a chybám.",
        "incorrect": "Předčasné pokračování výpočtu před dokončením některých souběžných bloků nikdy nevede k výpočetním závislostem.",
        "sectionNumber": "5.2.6",
        "sectionTitle": "Rozvětvení a setkání"
      }
    ]
  },
  {
    "uuid": "41ff3bb9-a775-4b6f-8856-da38b718acc5",
    "sectionNumber": "6",
    "sectionTitle": "Synchronizace",
    "statements": [
      {
        "uuid": "996e4d1b-df67-4582-9635-6f338e55c678",
        "correct": "Synchronizační zařízení slouží k omezení souběžnosti procesů nebo vláken.",
        "incorrect": "Synchronizační zařízení slouží k úplnému odstranění souběžnosti procesů nebo vláken.",
        "sectionNumber": "6.1.1",
        "sectionTitle": "Společné vlastnosti"
      },
      {
        "uuid": "b0e47a53-cfc8-44d5-84b3-434580669247",
        "correct": "Synchronizační zařízení jsou datové struktury uzpůsobené k řešení specifických problémů souběžnosti.",
        "incorrect": "Synchronizační zařízení jsou hardwarové komponenty uzpůsobené k řešení specifických problémů souběžnosti.",
        "sectionNumber": "6.1.1",
        "sectionTitle": "Společné vlastnosti"
      },
      {
        "uuid": "1a289831-e7dd-49ef-9442-3d1b2dbfee4e",
        "correct": "Instance synchronizačního zařízení spolu navzájem neinteragují a pracují nezávisle.",
        "incorrect": "Instance synchronizačního zařízení spolu navzájem interagují a ovlivňují se.",
        "sectionNumber": "6.1.1",
        "sectionTitle": "Společné vlastnosti"
      },
      {
        "uuid": "2ff046aa-9c53-4a4b-a3d8-4430bfd52558",
        "correct": "Instance synchronizačního zařízení je ztotožněna s adresou, na které je uložen její stav.",
        "incorrect": "Instance synchronizačního zařízení je ztotožněna s názvem proměnné, která na ni odkazuje.",
        "sectionNumber": "6.1.1",
        "sectionTitle": "Společné vlastnosti"
      },
      {
        "uuid": "1519bdeb-9b8c-46a8-8aaf-b2f9a4793838",
        "correct": "V prostředí více procesů může být synchronizační zařízení viditelné pod různými virtuálními adresami.",
        "incorrect": "V prostředí více procesů je synchronizační zařízení vždy viditelné pod stejnou virtuální adresou.",
        "sectionNumber": "6.1.1",
        "sectionTitle": "Společné vlastnosti"
      },
      {
        "uuid": "68c52c8c-0123-431d-b836-66c6936f431d",
        "correct": "Mutex je synchronizační zařízení určené k ochraně kritické sekce před souběžným přístupem.",
        "incorrect": "Mutex je synchronizační zařízení určené k ochraně všech sekcí kódu, nejen kritických sekcí.",
        "sectionNumber": "6.1.2",
        "sectionTitle": "Vzájemné vyloučení (mutex)"
      },
      {
        "uuid": "e0d5bade-47ae-45f1-bd97-433cadce2f67",
        "correct": "Operace lock na mutexu může způsobit, že vlákno čeká, pokud je mutex již zamčený jiným vláknem.",
        "incorrect": "Operace lock na mutexu nikdy nezpůsobí, že vlákno čeká, ale okamžitě získá zámek.",
        "sectionNumber": "6.1.2",
        "sectionTitle": "Vzájemné vyloučení (mutex)"
      },
      {
        "uuid": "f8d995ce-b03c-4462-858f-816531b48da5",
        "correct": "Pro správnou ochranu kritické sekce je nutné chránit kritickou sekci a všechny běhy vůči ní kritické stejným mutexem.",
        "incorrect": "Pro ochranu kritické sekce stačí chránit pouze kritickou sekci, běhy vůči ní kritické nemusí být chráněny.",
        "sectionNumber": "6.1.2",
        "sectionTitle": "Vzájemné vyloučení (mutex)"
      },
      {
        "uuid": "aa986ca6-10db-42fb-9488-f526e3cf0020",
        "correct": "Klasický mutex, jak je popsán v textu, nedetekuje a nezabraňuje odemčení mutexu vláknem, které ho nevlastní.",
        "incorrect": "Klasický mutex detekuje a zabrání pokusu o odemčení mutexu vláknem, které mutex nevlastní.",
        "sectionNumber": "6.1.2",
        "sectionTitle": "Vzájemné vyloučení (mutex)"
      },
      {
        "uuid": "617bd170-ff12-406a-9409-40059b7445f6",
        "correct": "Mutex má dva základní abstraktní stavy: zamčený a odemčený, které určují jeho aktuální stav.",
        "incorrect": "Mutex má tři abstraktní stavy: zamčený, odemčený a čekající, pro detailnější kontrolu synchronizace.",
        "sectionNumber": "6.1.2",
        "sectionTitle": "Vzájemné vyloučení (mutex)"
      },
      {
        "uuid": "713fc67f-bcbd-4479-90e9-6cc8d421bd73",
        "correct": "Operace ‹lock› uspávajícího mutexu je realizována jako systémové volání operačního systému.",
        "incorrect": "Operace ‹lock› uspávajícího mutexu je realizována jako atomická instrukce procesoru.",
        "sectionNumber": "6.1.4",
        "sectionTitle": "Uspávající mutex"
      },
      {
        "uuid": "550e6187-d12c-402f-913b-1540654aded7",
        "correct": "Pokud je uspávající mutex zamčený, jádro zařadí vlákno do fronty a nechá plánovač probudit jiné vlákno.",
        "incorrect": "Pokud je uspávající mutex zamčený, jádro vlákno uspí bez interakce s plánovačem.",
        "sectionNumber": "6.1.4",
        "sectionTitle": "Uspávající mutex"
      },
      {
        "uuid": "4ead4002-07ba-45e0-a641-20c8f0c710df",
        "correct": "Systémové volání uspávajícího mutexu má řádově stovky instrukcí režie oproti atomické instrukci.",
        "incorrect": "Systémové volání uspávajícího mutexu má režii srovnatelnou s atomickou instrukcí.",
        "sectionNumber": "6.1.4",
        "sectionTitle": "Uspávající mutex"
      },
      {
        "uuid": "12d5fc7f-9013-41ad-91d0-f181d8f37ac4",
        "correct": "Odemčení uspávajícího mutexu předá zámek prvnímu vláknu z fronty čekající na tento mutex.",
        "incorrect": "Odemčení uspávajícího mutexu odemkne zámek bez ohledu na čekající vlákna.",
        "sectionNumber": "6.1.4",
        "sectionTitle": "Uspávající mutex"
      },
      {
        "uuid": "e37742df-61d3-4434-a582-08990fd48695",
        "correct": "O zámku rozhoduje vlákno samo pomocí atomické instrukce, podobně jako spinlock.",
        "incorrect": "O zámku rozhoduje operační systém výhradně pomocí systémového volání futex.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "d71cf699-3aff-4f2b-a6a5-2ad697cbddfc",
        "correct": "Systémové volání futex se provádí jen když pokus o zamčení zámku selže v uživatelském prostoru.",
        "incorrect": "Systémové volání futex se provádí vždy při každém pokusu o zamčení zámku.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "e87497c8-edaf-44ed-b544-601361074416",
        "correct": "Uživatelská část stavu mutexu obsahuje počítadlo vláken, která se pokusila o zamčení.",
        "incorrect": "Uživatelská část stavu mutexu obsahuje pouze jeden bit indikující, zda je zámek odemčen.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "c1550210-9a35-458a-ba44-cb8acdb52bc8",
        "correct": "Systémová část futex obsahuje frontu uspaných vláken čekajících na odemčení mutexu.",
        "incorrect": "Systémová část futex obsahuje počítadlo vláken a spinlock pro rychlé zamčení.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "56c00e08-78b7-449b-9e4b-a36c0dbf427e",
        "correct": "Při odemykání mutexu se systémové volání pro probuzení volá jen pokud je počítadlo pokusů o zamčení větší než jedna.",
        "incorrect": "Při odemykání mutexu se vždy volá systémové volání pro probuzení čekajícího vlákna.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "0c702fee-7acb-469c-8a13-d71c4a328310",
        "correct": "Futexy jsou svázány s uživatelskými mutexy pomocí adres, což řeší problém virtuálních a fyzických adres při synchronizaci mezi procesy.",
        "incorrect": "Futexy jsou svázány s uživatelskými mutexy pomocí fyzických adres, což zjednodušuje synchronizaci mezi procesy.",
        "sectionNumber": "6.1.5",
        "sectionTitle": "Rychlý mutex (spinlock + futex)"
      },
      {
        "uuid": "57b960a1-158d-4393-bfd4-55ff440cda28",
        "correct": "Naivní implementace mutexů zablokuje vlákno při pokusu o opětovné uzamčení stejným vláknem.",
        "incorrect": "Naivní implementace mutexů nikdy nezablokuje vlákno při pokusu o opětovné uzamčení stejným vláknem.",
        "sectionNumber": "6.1.6",
        "sectionTitle": "Rekurzivní mutex"
      },
      {
        "uuid": "68b78fb1-5da1-4428-a41a-39f0cfc820f5",
        "correct": "Reentrantní mutex vyžaduje identifikátor vlastníka a počítadlo zanoření pro správnou funkci opakovaného zamykání.",
        "incorrect": "Reentrantní mutex nepotřebuje počítadlo zanoření, pouze identifikátor vlastníka pro opakované zamykání.",
        "sectionNumber": "6.1.6",
        "sectionTitle": "Rekurzivní mutex"
      },
      {
        "uuid": "5849dbdd-ca8f-4a22-8711-5ebfda83fc1b",
        "correct": "Refaktorování programu může být v některých případech řešením problému s mutexy namísto reentrantního mutexu.",
        "incorrect": "Refaktorování programu je vždy nutné řešení problému s mutexy a reentrantní mutex není nikdy potřeba.",
        "sectionNumber": "6.1.6",
        "sectionTitle": "Rekurzivní mutex"
      },
      {
        "uuid": "56cb547f-5d04-497a-9489-55c17ea5641b",
        "correct": "Rozšířený mutex s počítadlem zanoření dokáže spolehlivě poznat pokus o odemčení zámku nesprávným vláknem.",
        "incorrect": "Rozšířený mutex s počítadlem zanoření nedokáže poznat pokus o odemčení zámku nesprávným vláknem.",
        "sectionNumber": "6.1.6",
        "sectionTitle": "Rekurzivní mutex"
      },
      {
        "uuid": "ef12476c-f512-4279-8ade-6b5989b20305",
        "correct": "Operace unlock u reentrantního mutexu sníží počítadlo zanoření a zámek odemkne až po dosažení nuly.",
        "incorrect": "Operace unlock u reentrantního mutexu odemkne zámek okamžitě a nesnižuje počítadlo zanoření.",
        "sectionNumber": "6.1.6",
        "sectionTitle": "Rekurzivní mutex"
      },
      {
        "uuid": "b29f7a87-e754-4f57-80db-c98b86b79c7b",
        "correct": "Rwlock je rozšíření mutexu o stavy pro čtení a zápis.",
        "incorrect": "Rwlock je zjednodušená verze mutexu pro základní synchronizaci.",
        "sectionNumber": "6.1.7",
        "sectionTitle": "Zařízení ‹rwlock›"
      },
      {
        "uuid": "1ae3035e-3dcd-42e2-b27f-7703396ec21f",
        "correct": "Operace rdlock blokuje, pokud je rwlock ve stavu zápis.",
        "incorrect": "Operace rdlock blokuje pouze, pokud je rwlock ve stavu čtení.",
        "sectionNumber": "6.1.7",
        "sectionTitle": "Zařízení ‹rwlock›"
      },
      {
        "uuid": "5fc053ee-128a-41e7-a6c4-b26ed478078a",
        "correct": "Operace wrlock uspěje jen když je rdlock ve stavu odemčeno.",
        "incorrect": "Operace wrlock uspěje i když je rwlock ve stavu čtení.",
        "sectionNumber": "6.1.7",
        "sectionTitle": "Zařízení ‹rwlock›"
      },
      {
        "uuid": "000be13a-dc99-4621-8877-57d220dbab38",
        "correct": "Operace unlock ve stavu zápis změní stav rwlock na odemčeno.",
        "incorrect": "Operace unlock ve stavu zápis změní stav rwlock na čtení.",
        "sectionNumber": "6.1.7",
        "sectionTitle": "Zařízení ‹rwlock›"
      },
      {
        "uuid": "da998fd3-2f2f-47c8-a991-884ece77c71a",
        "correct": "Rwlock má stavy odemčeno, čtení a zápis pro řízení přístupu.",
        "incorrect": "Rwlock má pouze stavy odemčeno a zamčeno, podobně jako mutex.",
        "sectionNumber": "6.1.7",
        "sectionTitle": "Zařízení ‹rwlock›"
      },
      {
        "uuid": "e0744c65-4d20-4e13-a533-f9dfb1d49861",
        "correct": "Mechanismus RCU řeší problém čtenářů a písařů bez použití zámků a kritických sekcí.",
        "incorrect": "Mechanismus RCU řeší problém čtenářů a písařů s použitím zámků a kritických sekcí.",
        "sectionNumber": "6.1.8",
        "sectionTitle": "Read-Copy-Update"
      },
      {
        "uuid": "17234fd8-83be-48eb-82b3-2d19130731c1",
        "correct": "Písař v RCU vytvoří kopii datové struktury a upraví ji mimo původní strukturu.",
        "incorrect": "Písař v RCU upravuje datovou strukturu přímo na místě bez vytváření kopie.",
        "sectionNumber": "6.1.8",
        "sectionTitle": "Read-Copy-Update"
      },
      {
        "uuid": "b6072488-a374-47f3-a3ed-7f05e2a675a3",
        "correct": "Čtenáři v RCU vidí novou verzi dat až po přesměrování sdíleného ukazatele písařem.",
        "incorrect": "Čtenáři v RCU vidí novou verzi dat ihned po zahájení úprav písařem.",
        "sectionNumber": "6.1.8",
        "sectionTitle": "Read-Copy-Update"
      },
      {
        "uuid": "5d057a7e-9383-4a86-a6ed-60210bdef906",
        "correct": "Stará verze dat v RCU se uvolní, když k ní nepřistupuje žádný čtenář, pomocí počítadla odkazů.",
        "incorrect": "Stará verze dat v RCU se uvolní ihned po vytvoření nové verze písařem.",
        "sectionNumber": "6.1.8",
        "sectionTitle": "Read-Copy-Update"
      },
      {
        "uuid": "d81c6974-887d-4987-bdec-c6bffff6873f",
        "correct": "Při více písařích může RCU bez dalších mechanismů vést k hazardu souběhu písařů.",
        "incorrect": "Při více písařích RCU vždy zaručuje atomické úpravy dat bez dalších mechanismů.",
        "sectionNumber": "6.1.8",
        "sectionTitle": "Read-Copy-Update"
      },
      {
        "uuid": "adb4f7d0-3ee0-4ce3-97fe-4fb31ff10b28",
        "correct": "Monitor je synchronizační koncept vyšší úrovně, nikoliv prostředek operačního systému.",
        "incorrect": "Monitor je synchronizační prostředek poskytovaný operačním systémem na nízké úrovni.",
        "sectionNumber": "6.1.9",
        "sectionTitle": "Monitor"
      },
      {
        "uuid": "aaab54f3-6094-4f3c-844f-9869c643b357",
        "correct": "Monitory jsou interně postaveny na vzájemném vyloučení, zajišťujícím vstup pouze jednoho vlákna.",
        "incorrect": "Monitory umožňují souběžný vstup více vláken, čímž maximalizují paralelizaci bez omezení.",
        "sectionNumber": "6.1.9",
        "sectionTitle": "Monitor"
      },
      {
        "uuid": "3d43ef5f-af8e-4dff-aabe-44b63a7008e4",
        "correct": "Implementace monitorů může využívat rekurzivní mutexy pro podporu vnořeného zamykání operací.",
        "incorrect": "Implementace monitorů se striktně vyhýbá rekurzivním mutexům kvůli riziku deadlocku.",
        "sectionNumber": "6.1.9",
        "sectionTitle": "Monitor"
      },
      {
        "uuid": "004ecda2-e325-46f5-8d35-77f4cd1e5972",
        "correct": "Monitor může snížit celkovou souběžnost programu výměnou za snazší prevenci chyb synchronizace.",
        "incorrect": "Monitor vždy zvyšuje souběžnost programů a minimalizuje riziko chyb synchronizace zároveň.",
        "sectionNumber": "6.1.9",
        "sectionTitle": "Monitor"
      },
      {
        "uuid": "95fa5689-7011-420e-a2cd-bb1eb6d3551b",
        "correct": "Monitor nezaručuje globální bezchybnost synchronizace, zejména u invariantů přesahujících jeho rozsah.",
        "incorrect": "Monitor je univerzálním řešením, které zaručuje absolutní bezchybnost synchronizace v jakémkoliv programu.",
        "sectionNumber": "6.1.9",
        "sectionTitle": "Monitor"
      },
      {
        "uuid": "34659fab-85ad-4822-bf4f-3c4b1d4bed36",
        "correct": "Podmínková proměnná se používá k řešení problému souběžné datové závislosti mezi vlákny.",
        "incorrect": "Podmínková proměnná se používá výhradně k zamezení uváznutí systému v důsledku chybějících zdrojů.",
        "sectionNumber": "6.1.10",
        "sectionTitle": "Podmínková proměnná"
      },
      {
        "uuid": "b36d7b48-c7a9-4332-a310-faa86e783444",
        "correct": "Operace wait na podmínkové proměnné blokuje vlákno, dokud jiné vlákno nezavolá operaci signal.",
        "incorrect": "Operace wait na podmínkové proměnné vlákno pouze uspí na pevně stanovený časový interval.",
        "sectionNumber": "6.1.10",
        "sectionTitle": "Podmínková proměnná"
      },
      {
        "uuid": "e7d0c87a-a477-4a3e-810e-a285a4b012d7",
        "correct": "Stav podmínkové proměnné může být reprezentován jako množina vláken čekajících na signál.",
        "incorrect": "Stav podmínkové proměnné je vždy reprezentován jediným bitem indikujícím, zda je proměnná uzamčena.",
        "sectionNumber": "6.1.10",
        "sectionTitle": "Podmínková proměnná"
      },
      {
        "uuid": "5e7b1e44-cc0f-411b-99e5-40ced39ff967",
        "correct": "Implementace podmínkové proměnné s aktivním čekáním je méně efektivní v problémech datové závislosti.",
        "incorrect": "Implementace podmínkové proměnné s aktivním čekáním je preferovanou metodou pro synchronizaci v reálném čase.",
        "sectionNumber": "6.1.10",
        "sectionTitle": "Podmínková proměnná"
      },
      {
        "uuid": "fcc1b0f1-287f-474c-97fc-acde000031dc",
        "correct": "Při použití operace signal na podmínkové proměnné se může probudit jedno nebo více čekajících vláken.",
        "incorrect": "Operace signal na podmínkové proměnné vždy probudí všechna vlákna, která na ni čekají.",
        "sectionNumber": "6.1.10",
        "sectionTitle": "Podmínková proměnná"
      },
      {
        "uuid": "43426891-1c9e-456b-9bc8-96d76367ec5f",
        "correct": "Klasický semafor sám o sobě neřeší problém producentů a konzumentů lépe než mutex.",
        "incorrect": "Klasický semafor sám o sobě řeší problém producentů a konzumentů lépe než mutex.",
        "sectionNumber": "6.1.11",
        "sectionTitle": "Semafor"
      },
      {
        "uuid": "5605729a-c8eb-448d-9727-23c4c9c8c01b",
        "correct": "Symetrický semafor blokuje operaci post, pokud by došlo k překročení maximální hodnoty počítadla n.",
        "incorrect": "Symetrický semafor nikdy neblokuje operaci post, a to ani při překročení maximální hodnoty počítadla n.",
        "sectionNumber": "6.1.11",
        "sectionTitle": "Semafor"
      },
      {
        "uuid": "b64dd9dc-6581-498e-875a-31c848e72443",
        "correct": "V klasickém řešení producent-konzument semafor E reprezentuje počet volných míst ve frontě mezivýsledků.",
        "incorrect": "V klasickém řešení producent-konzument semafor F reprezentuje počet volných míst ve frontě mezivýsledků.",
        "sectionNumber": "6.1.11",
        "sectionTitle": "Semafor"
      },
      {
        "uuid": "db7e4825-d8e5-4c15-ae03-8cd3fb3d52c4",
        "correct": "Operace wait na semaforu blokuje proces, pokud je aktuální hodnota semaforu rovna nule.",
        "incorrect": "Operace wait na semaforu blokuje proces, pokud je aktuální hodnota semaforu větší než nula.",
        "sectionNumber": "6.1.11",
        "sectionTitle": "Semafor"
      },
      {
        "uuid": "306ba28c-3762-45c8-b653-44d70ed02445",
        "correct": "Problém producentů a konzumentů lze řešit kombinací dvou klasických, asymetrických semaforů.",
        "incorrect": "Problém producentů a konzumentů nelze řešit kombinací dvou klasických, asymetrických semaforů.",
        "sectionNumber": "6.1.11",
        "sectionTitle": "Semafor"
      },
      {
        "uuid": "39fca68c-917c-447c-b118-c8696e87a064",
        "correct": "Bariéra řeší problém rozvětvení a setkání vláken, zejména při synchronizaci většího počtu vláken.",
        "incorrect": "Bariéra řeší problém pouze rozvětvení vláken, nikoliv setkání, a není určena pro synchronizaci více vláken.",
        "sectionNumber": "6.1.12",
        "sectionTitle": "Bariéra"
      },
      {
        "uuid": "9c23f234-37e8-4da6-9a1d-82bb8504dcbb",
        "correct": "Operace wait bariéry blokuje volající vlákno dokud operaci wait nezavolají všechna synchronizovaná vlákna.",
        "incorrect": "Operace wait bariéry blokuje volající vlákno pouze do doby, než ji zavolá alespoň jedno další synchronizované vlákno.",
        "sectionNumber": "6.1.12",
        "sectionTitle": "Bariéra"
      },
      {
        "uuid": "149e5ff8-f51d-4e69-9e4d-c085ce531752",
        "correct": "Implementace bariéry s aktivním čekáním je vhodná pouze v situacích, kdy všechna vlákna dorazí přibližně ve stejnou dobu.",
        "incorrect": "Implementace bariéry s aktivním čekáním je univerzálnější a efektivnější než implementace s podmínkovou proměnnou.",
        "sectionNumber": "6.1.12",
        "sectionTitle": "Bariéra"
      },
      {
        "uuid": "24044a5c-7bf7-4943-b80f-b5506141aae8",
        "correct": "Při implementaci bariéry s počítadlem operace init nastaví počítadlo na počet vláken, která se mají synchronizovat.",
        "incorrect": "Při implementaci bariéry s počítadlem operace init nastaví počítadlo na nulu a operace wait ho inkrementuje.",
        "sectionNumber": "6.1.12",
        "sectionTitle": "Bariéra"
      },
      {
        "uuid": "dba6a30a-4646-400e-8a9f-542a52e74ff3",
        "correct": "Vlákna čekající na bariéře, implementované pomocí podmínkové proměnné, obvykle spí a nezatěžují procesor aktivním čekáním.",
        "incorrect": "Vlákna čekající na bariéře, implementované pomocí podmínkové proměnné, aktivně čekají a neustále kontrolují stav bariéry.",
        "sectionNumber": "6.1.12",
        "sectionTitle": "Bariéra"
      }
    ]
  },
  {
    "uuid": "9b09f7c6-79c5-43f7-ae95-751301b85594",
    "sectionNumber": "7",
    "sectionTitle": "Komunikace, uváznutí",
    "statements": [
      {
        "uuid": "5fdaf263-16da-4714-b696-e3609e4b6ae2",
        "correct": "Každá komunikace je formou synchronizace, protože čtení informace musí být předcházeno zápisem.",
        "incorrect": "Každá komunikace je formou produkce zpráv, nikoliv synchronizace mezi procesy.",
        "sectionNumber": "7.1.1",
        "sectionTitle": "Komunikace a synchronizace"
      },
      {
        "uuid": "fb7816c7-260d-4571-a52e-3beb791e025d",
        "correct": "Komunikační zařízení jsou často zároveň zařízeními synchronizačními kvůli nutné kauzalitě zápisu a čtení.",
        "incorrect": "Komunikační zařízení jsou zřídka zařízeními synchronizačními, primárně slouží pouze k produkci zpráv.",
        "sectionNumber": "7.1.1",
        "sectionTitle": "Komunikace a synchronizace"
      },
      {
        "uuid": "937e9372-f786-4040-b5ba-9d017d2bd0a0",
        "correct": "Většina komunikace je zobecněnou verzí problému producentů a konzumentů, kde účastníci jsou producenty i konzumenty.",
        "incorrect": "Většina komunikace je specifickou verzí problému producentů a konzumentů, kde účastníci jsou jen producenty nebo konzumenty.",
        "sectionNumber": "7.1.1",
        "sectionTitle": "Komunikace a synchronizace"
      },
      {
        "uuid": "92d11021-ae0f-4e32-ac69-153188bd7f3c",
        "correct": "Opačný vztah k implikaci komunikace → synchronizace neplatí, synchronizace neznamená vždy komunikaci.",
        "incorrect": "Opačný vztah k implikaci komunikace → synchronizace platí, synchronizace vždy nutně znamená komunikaci.",
        "sectionNumber": "7.1.1",
        "sectionTitle": "Komunikace a synchronizace"
      },
      {
        "uuid": "a3c178d4-1bd0-4f7d-a1c4-7df7e2dd2df8",
        "correct": "Pro komunikaci lze použít libovolnou datovou strukturu, je-li chráněna mutexem.",
        "incorrect": "Pro komunikaci lze použít pouze specializované datové struktury bez mutexu.",
        "sectionNumber": "7.1.2",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "10d48add-2aa6-4675-a1a6-e4e5d0d111fe",
        "correct": "Soutěž o zámek mutexu může zpomalovat komunikaci při častém používání.",
        "incorrect": "Soutěž o zámek mutexu nemá vliv na rychlost komunikace ani při častém používání.",
        "sectionNumber": "7.1.2",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "7910d167-8e91-449f-8d0a-fa3353d9bf89",
        "correct": "Specializované fronty umožňují větší souběžnost než komunikace s mutexem při každém předání.",
        "incorrect": "Mutexy při každém předání umožňují větší souběžnost než specializované komunikační fronty.",
        "sectionNumber": "7.1.2",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "c213f92a-0764-4aa3-b73c-f48188d90d1c",
        "correct": "Pro občasnou komunikaci nepředstavuje použití mutexu zásadní problém z hlediska výkonu.",
        "incorrect": "I pro občasnou komunikaci představuje použití mutexu zásadní problém z hlediska výkonu.",
        "sectionNumber": "7.1.2",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "a7e2de84-5e60-4aee-9557-f171e983f7ca",
        "correct": "Kruhová fronta s pevnou velikostí využívá dva ukazatele, čtecí a zapisovací, pro řízení operací.",
        "incorrect": "Kruhová fronta s pevnou velikostí využívá pouze jeden ukazatel pro řízení operací čtení a zápisu.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "1e0791a5-8f6b-40a8-b684-d2af7d8ce613",
        "correct": "Fronta je považována za plnou, pokud by zápisovací ukazatel měl předběhnout ukazatel čtecí.",
        "incorrect": "Fronta je považována za plnou, pokud by čtecí ukazatel měl předběhnout ukazatel zapisovací.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "fd1f819e-2b56-45a2-95cf-8e3edb2d8db8",
        "correct": "V kruhové frontě každá strana modifikuje pouze jeden ukazatel, čímž se minimalizuje potřeba kritických sekcí.",
        "incorrect": "V kruhové frontě obě strany modifikují oba ukazatele, což vyžaduje rozsáhlé kritické sekce pro synchronizaci.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "4c8a4185-1685-4f8d-8459-5247157069ed",
        "correct": "V kruhové frontě s S buňkami je efektivně využitelná kapacita o jednu buňku menší než S.",
        "incorrect": "V kruhové frontě s S buňkami je plně využitelná kapacita rovna počtu buněk S.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "3f8cc3e2-18ee-44d1-aec7-0f250cdd7d65",
        "correct": "Pro implementaci fronty producent-konzument lze efektivně použít kruhovou frontu nebo frontu s mutexem.",
        "incorrect": "Pro implementaci fronty producent-konzument je nezbytné použít pouze jednostranně zřetězený seznam.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "d23dfc8c-6d62-49b0-8e44-57bd25d2cc6e",
        "correct": "Algoritmus odebrání z kruhové fronty nejprve kontroluje, zda je fronta prázdná, porovnáním ukazatelů.",
        "incorrect": "Algoritmus odebrání z kruhové fronty zahajuje operaci čtení bez předchozí kontroly, zda fronta není prázdná.",
        "sectionNumber": "7.1.3",
        "sectionTitle": "Komunikační fronta"
      },
      {
        "uuid": "7510282f-81b1-49b0-a0cd-5b9d56408599",
        "correct": "Roura je specializovaná fronta pracující s bajty, která se vyznačuje efektivními dávkovými operacemi.",
        "incorrect": "Roura je specializovaná fronta pracující s bloky, která se vyznačuje neefektivními dávkovými operacemi.",
        "sectionNumber": "7.1.4",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "865d75f7-ce2f-4362-ab24-83aabd6d3b9b",
        "correct": "Efektivní dávkové operace jsou klíčovou charakteristikou roury pro zápis a čtení většího množství bajtů najednou.",
        "incorrect": "Jednotlivé operace s bajty jsou klíčovou charakteristikou roury pro zápis a čtení dat.",
        "sectionNumber": "7.1.4",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "7d9eceda-caf1-4dcb-a818-cacd41022bb3",
        "correct": "Roura je obvykle poskytována operačním systémem a implementována jako omezená fronta.",
        "incorrect": "Roura je obvykle poskytována uživatelskými knihovnami a implementována jako neomezená fronta.",
        "sectionNumber": "7.1.4",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "6a3cd7e0-d5af-48aa-9c95-3b21bdb3f6ae",
        "correct": "Synchronizační chování roury, která je implementována jako omezená fronta, se podobá symetrickému semaforu.",
        "incorrect": "Synchronizační chování roury, která je implementována jako neomezená fronta, se podobá binárnímu semaforu.",
        "sectionNumber": "7.1.4",
        "sectionTitle": "Roura"
      },
      {
        "uuid": "994ba9a9-2dc5-4075-9100-520e08259dc5",
        "correct": "Zobecněná komunikační fronta umožňuje vkládání a vybírání prvků více vlákny současně.",
        "incorrect": "Zobecněná komunikační fronta umožňuje vkládání a vybírání prvků pouze jedním vláknem.",
        "sectionNumber": "7.1.5",
        "sectionTitle": "Sdílená fronta"
      },
      {
        "uuid": "12914746-430f-439f-b419-d31d3d41e256",
        "correct": "Implementace zobecněné fronty bez zámků může být založena na zřetězeném seznamu.",
        "incorrect": "Implementace zobecněné fronty bez zámků nemůže být založena na zřetězeném seznamu.",
        "sectionNumber": "7.1.5",
        "sectionTitle": "Sdílená fronta"
      },
      {
        "uuid": "f9d9eb4a-41ce-40dd-96b5-606fbeeb67a8",
        "correct": "Zobecněná komunikační fronta se používá jako společný seznam úloh pro producenty a konzumenty.",
        "incorrect": "Zobecněná komunikační fronta se nepoužívá jako společný seznam úloh pro producenty a konzumenty.",
        "sectionNumber": "7.1.5",
        "sectionTitle": "Sdílená fronta"
      },
      {
        "uuid": "ad3fb5b6-c63e-4f2f-9f1d-253737af8e85",
        "correct": "Implementace množiny ukončených úloh typicky podporuje operace dotazování a vkládání nových úloh.",
        "incorrect": "Implementace množiny ukončených úloh typicky podporuje operace mazání a aktualizace existujících úloh.",
        "sectionNumber": "7.1.6",
        "sectionTitle": "Sdílená množina"
      },
      {
        "uuid": "24c351e1-6cbb-4928-af35-c4b069cd93c0",
        "correct": "Read-copy-update je jednou z možných implementací množiny ukončených úloh.",
        "incorrect": "Read-copy-update není vhodná implementace pro množinu ukončených úloh.",
        "sectionNumber": "7.1.6",
        "sectionTitle": "Sdílená množina"
      },
      {
        "uuid": "1fc371b2-1b79-42de-857a-9ff972ec6474",
        "correct": "Pro implementaci množiny ukončených úloh lze použít hashovací tabulku kombinovanou se spinlockem v každé buňce.",
        "incorrect": "Pro implementaci množiny ukončených úloh nelze použít hashovací tabulku kombinovanou se spinlockem v každé buňce.",
        "sectionNumber": "7.1.6",
        "sectionTitle": "Sdílená množina"
      },
      {
        "uuid": "8c2b2575-bb04-44b1-83d6-160d714f3c59",
        "correct": "Množina ukončených úloh se používá například pro správu \"dirty\" stránek v operačním systému.",
        "incorrect": "Množina ukončených úloh se používá například pro plánování běhu procesů v operačním systému.",
        "sectionNumber": "7.1.6",
        "sectionTitle": "Sdílená množina"
      },
      {
        "uuid": "250a9abf-1872-4729-80ed-4831d8ca3559",
        "correct": "K synchronizaci operací nad množinou ukončených úloh lze využít atomické instrukce jako ‹cmpxchg›.",
        "incorrect": "K synchronizaci operací nad množinou ukončených úloh nelze využít atomické instrukce jako ‹cmpxchg›.",
        "sectionNumber": "7.1.6",
        "sectionTitle": "Sdílená množina"
      },
      {
        "uuid": "c97ca8d5-8d08-4765-8b6e-906f388b6766",
        "correct": "Při předávání zpráv jsou metadata, zejména adresa, důležitější než samotný obsah zprávy.",
        "incorrect": "Při předávání zpráv je obsah zprávy důležitější než metadata, která jsou k ní připojena.",
        "sectionNumber": "7.2.1",
        "sectionTitle": "Zpráva"
      },
      {
        "uuid": "e32d421c-3eb4-4e93-9948-c73b014d98a7",
        "correct": "Pro pevnou dvojici komunikujících vláken je předávání zpráv ekvivalentní dvojici komunikačních front.",
        "incorrect": "Pro pevnou dvojici komunikujících vláken se předávání zpráv zásadně liší od dvojice komunikačních front.",
        "sectionNumber": "7.2.1",
        "sectionTitle": "Zpráva"
      },
      {
        "uuid": "5b63d24e-6944-46d6-8510-182bbff641b1",
        "correct": "Systém pro předávání zpráv obvykle interpretuje obsah zprávy jako neprůhledné bajty.",
        "incorrect": "Systém pro předávání zpráv obvykle interpretuje obsah zprávy a analyzuje jeho strukturu.",
        "sectionNumber": "7.2.1",
        "sectionTitle": "Zpráva"
      },
      {
        "uuid": "6a8f9d64-aba9-43ba-9c21-47f0a823c78a",
        "correct": "Při rendezvous se odesílající a přijímající vlákno musí setkat, aby si mohly předat zprávu.",
        "incorrect": "Při rendezvous se odesílající a přijímající vlákno nemusí setkat, aby si mohly předat zprávu.",
        "sectionNumber": "7.2.2",
        "sectionTitle": "Základní operace"
      },
      {
        "uuid": "15f2129b-5ea2-4cc5-8ac9-dfc4c1b2c08b",
        "correct": "Operace přijmi může blokovat, pokud není doručena žádná zpráva.",
        "incorrect": "Operace přijmi nikdy neblokuje, i když není doručena žádná zpráva.",
        "sectionNumber": "7.2.2",
        "sectionTitle": "Základní operace"
      },
      {
        "uuid": "1ff7ed48-4294-4b43-8686-6ee2ffb5aa3e",
        "correct": "Asynchronní operace mohou snížit počet kopírování zpráv, ale komplikují správu paměti.",
        "incorrect": "Asynchronní operace vždy vyžadují kopírování zpráv a zjednodušují správu paměti.",
        "sectionNumber": "7.2.2",
        "sectionTitle": "Základní operace"
      },
      {
        "uuid": "676a5e04-958c-4b92-93df-9ed1f0691315",
        "correct": "Operace odešli může blokovat kvůli omezené schopnosti systému pamatovat si odeslané zprávy.",
        "incorrect": "Operace odešli nikdy neblokuje, protože systém má neomezenou schopnost pamatovat si zprávy.",
        "sectionNumber": "7.2.2",
        "sectionTitle": "Základní operace"
      },
      {
        "uuid": "967fa638-0eb0-4ecf-888d-4cfdbfbe098d",
        "correct": "Systém předávání zpráv může mít žádného, jednoho, nebo i více zprostředkovatelů.",
        "incorrect": "Systém předávání zpráv musí mít vždy alespoň jednoho zprostředkovatele.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "53991ce7-010e-4e9f-b0b8-a30848a12d7c",
        "correct": "Zprostředkovatel v systému zpráv přijímá zprávy od klientů a realizuje jejich doručení adresátovi.",
        "incorrect": "Zprostředkovatel v systému zpráv pouze odesílá zprávy klientům, ale nepřijímá zprávy od klientů.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "4a3279f6-7ccf-46d6-b4a4-61dfeb42b66a",
        "correct": "Pro předání zprávy mezi klientem a zprostředkovatelem je nutný komunikační kanál.",
        "incorrect": "Pro předání zprávy mezi klientem a zprostředkovatelem není nutný komunikační kanál.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "f43c968a-263a-4a15-81a9-b11f1fe7fc08",
        "correct": "Při synchronním odeslání a spolehlivém doručení je za zprávu odpovědný zprostředkovatel.",
        "incorrect": "Při synchronním odeslání a spolehlivém doručení je za zprávu stále odpovědný odesílající klient.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "052219d2-e9eb-4eb8-9d70-a09bd8e62936",
        "correct": "Při asynchronním odeslání musí klient uchovat zprávu, dokud zprostředkovatel nepotvrdí její převzetí.",
        "incorrect": "Při asynchronním odeslání může klient zprávu smazat ihned po jejím odeslání zprostředkovateli.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "5035a9c4-d7ec-44d2-82c0-7c2e05c659fe",
        "correct": "Při nespolehlivém doručení musí klient uchovat zprávu do potvrzení doručení příjemcem.",
        "incorrect": "Při nespolehlivém doručení stačí, aby klient uchoval zprávu pouze do potvrzení od zprostředkovatele.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "09f37ed8-4e1a-41b9-bf13-61002b0a155a",
        "correct": "Synchronní příjem zprávy znamená, že se příjemce aktivně dotazuje na existenci nové zprávy.",
        "incorrect": "Synchronní příjem zprávy znamená, že zprostředkovatel aktivně oznamuje doručení nové zprávy příjemci.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "efcc209a-7d14-47a8-b999-e09cc45cf417",
        "correct": "Asynchronní příjem umožňuje klientovi souběžně zpracovávat více zpráv na výzvu zprostředkovatele.",
        "incorrect": "Asynchronní příjem nutí klienta zpracovávat zprávy sekvenčně, jednu po druhé, na výzvu zprostředkovatele.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "a906e282-548f-4f13-a1ca-c99bc02f36f4",
        "correct": "Fibry jsou uživatelská vlákna s kooperativním plánováním a levnějším přepínáním kontextu.",
        "incorrect": "Fibry jsou vlákna operačního systému s preemptivním plánováním a dražším přepínáním kontextu.",
        "sectionNumber": "7.2.3",
        "sectionTitle": "Zprostředkovatel"
      },
      {
        "uuid": "ccd92a26-4f73-49f7-9fe2-20777c5a2295",
        "correct": "Operace broadcast lze v principu realizovat pomocí point-to-point zpráv.",
        "incorrect": "Operace broadcast nelze v principu realizovat pomocí point-to-point zpráv.",
        "sectionNumber": "7.2.4",
        "sectionTitle": "Odvozené operace"
      },
      {
        "uuid": "06844704-d0e0-43d2-a3ef-44f656b67def",
        "correct": "Centrální zprostředkovatel může zefektivnit operace jako scatter/gather.",
        "incorrect": "Centrální zprostředkovatel nemůže zefektivnit operace jako scatter/gather.",
        "sectionNumber": "7.2.4",
        "sectionTitle": "Odvozené operace"
      },
      {
        "uuid": "bd949331-0137-4635-a114-514ffdb6a97e",
        "correct": "Synchronizační operace bariéra je efektivnější, pokud ji přímo podporuje zprostředkovatel.",
        "incorrect": "Synchronizační operace bariéra není efektivnější, pokud ji přímo podporuje zprostředkovatel.",
        "sectionNumber": "7.2.4",
        "sectionTitle": "Odvozené operace"
      },
      {
        "uuid": "94c73491-e065-4715-99e3-4c1f3a0af93b",
        "correct": "V mikrojádrových systémech je předávání zpráv základním mechanismem meziprocesové komunikace.",
        "incorrect": "V mikrojádrových systémech je sdílená paměť základním mechanismem meziprocesové komunikace.",
        "sectionNumber": "7.2.5",
        "sectionTitle": "Využití"
      },
      {
        "uuid": "91764b56-fb21-4da2-b5d4-fb08090e1a83",
        "correct": "Distribuované systémy běžně používají předávání zpráv jako metodu komunikace kvůli absenci sdílené paměti.",
        "incorrect": "Distribuované systémy preferují sdílenou paměť jako metodu komunikace pro její výkonnost.",
        "sectionNumber": "7.2.5",
        "sectionTitle": "Využití"
      },
      {
        "uuid": "57c7b906-633d-45de-86f0-4f45b1ee542d",
        "correct": "Pro systémy s důrazem na bezpečnost je izolace komponent klíčová a předávání zpráv ji podporuje.",
        "incorrect": "Izolace komponent nemá vliv na bezpečnost systémů a předávání zpráv se pro ni nehodí.",
        "sectionNumber": "7.2.5",
        "sectionTitle": "Využití"
      },
      {
        "uuid": "4fa1d926-bfe2-4e13-8556-51050e3e0071",
        "correct": "Mikrojádro v mikrojádrových systémech často funguje jako zprostředkovatel pro předávání zpráv.",
        "incorrect": "Mikrojádro v mikrojádrových systémech nikdy nefunguje jako zprostředkovatel pro předávání zpráv.",
        "sectionNumber": "7.2.5",
        "sectionTitle": "Využití"
      },
      {
        "uuid": "481cf175-a6db-4966-9cc4-355488e7f8de",
        "correct": "Distribuované vědecké výpočty na superpočítačích často využívají efektivní předávání zpráv pro komunikaci.",
        "incorrect": "Distribuované vědecké výpočty se obvykle vyhýbají předávání zpráv kvůli jeho neefektivitě na superpočítačích.",
        "sectionNumber": "7.2.5",
        "sectionTitle": "Využití"
      },
      {
        "uuid": "8f1a25e3-293a-4394-818d-28925889e44f",
        "correct": "Operační systém pracuje s konečným množstvím hardwarových zdrojů.",
        "incorrect": "Operační systém má k dispozici neomezené množství hardwarových zdrojů díky virtualizaci.",
        "sectionNumber": "7.3.1",
        "sectionTitle": "Hardwarové zdroje"
      },
      {
        "uuid": "1a038973-e5de-4793-ade7-4eafc8fb8262",
        "correct": "Virtualizace umožňuje sdílení hardwarových zdrojů, ale nepřekonává jejich fyzickou konečnost.",
        "incorrect": "Virtualizace hardwarových zdrojů operačního systému dokáže eliminovat fyzické limity hardware.",
        "sectionNumber": "7.3.1",
        "sectionTitle": "Hardwarové zdroje"
      },
      {
        "uuid": "eddb5d39-2099-4e6a-bb28-441c2e5e3018",
        "correct": "Některé periferie, kvůli svým specifickým vlastnostem, nelze efektivně virtualizovat.",
        "incorrect": "Díky pokročilým technikám virtualizace lze virtualizovat naprosto všechny typy hardwarových periferií.",
        "sectionNumber": "7.3.1",
        "sectionTitle": "Hardwarové zdroje"
      },
      {
        "uuid": "1d3c38de-d73b-4f95-b7ba-65c03dfc2f73",
        "correct": "Virtualizace zdrojů je nejúčinnější, pokud procesy využívají pouze část kapacity zdroje.",
        "incorrect": "Virtualizace zdrojů je nejúčinnější, i když všechny procesy vyžadují plnou kapacitu daného zdroje.",
        "sectionNumber": "7.3.1",
        "sectionTitle": "Hardwarové zdroje"
      },
      {
        "uuid": "e3e525c1-6bb6-470b-ab45-99041449c43b",
        "correct": "Rezervace zdrojů představuje alternativu k virtualizaci, zvláště u zařízení jako jsou páskové jednotky.",
        "incorrect": "Rezervace zdrojů je vždy preferovanou metodou správy zdrojů oproti virtualizaci ve všech situacích.",
        "sectionNumber": "7.3.2",
        "sectionTitle": "Rezervace"
      },
      {
        "uuid": "1cbd783c-1d6e-4d03-aefb-d3f2b291fc5f",
        "correct": "Virtualizace a rezervace zdrojů se mohou doplňovat, kdy rezervace zajistí garantovanou kapacitu i ve virtualizovaném prostředí.",
        "incorrect": "Virtualizace a rezervace zdrojů jsou vždy vzájemně výlučné metody správy systémových zdrojů v operačním systému.",
        "sectionNumber": "7.3.2",
        "sectionTitle": "Rezervace"
      },
      {
        "uuid": "baa47025-7fe2-43db-a48b-7a17b4da02a4",
        "correct": "Operační systémy umožňují procesům rezervovat fyzickou paměť, čímž zamezí stránkování rezervované paměti.",
        "incorrect": "Operační systémy nikdy neumožňují procesům rezervovat fyzickou paměť pro výhradní použití procesem.",
        "sectionNumber": "7.3.2",
        "sectionTitle": "Rezervace"
      },
      {
        "uuid": "d13d4d9f-5885-4b84-aa89-a665a37ef8dc",
        "correct": "Rezervace zdroje zahrnuje dvě fáze: vyžádání zdroje pro výhradní použití a následné uvolnění zdroje.",
        "incorrect": "Rezervace zdroje je jednofázový proces, zahrnující pouze vyžádání zdroje pro daný proces.",
        "sectionNumber": "7.3.2",
        "sectionTitle": "Rezervace"
      },
      {
        "uuid": "ba268505-ad19-43d1-84a5-f77ba962548c",
        "correct": "Při rezervaci zdroje může dojít k situaci, kdy zdroj není dostupný, což může vést k zamítnutí nebo čekání.",
        "incorrect": "Při rezervaci zdroje, pokud není zdroj okamžitě dostupný, systém vždy rezervaci automaticky zamítne.",
        "sectionNumber": "7.3.2",
        "sectionTitle": "Rezervace"
      },
      {
        "uuid": "525047fd-05fa-4d75-a62f-1685a1839601",
        "correct": "Mutex lze chápat jako abstraktní zdroj, který se rezervuje zamčením a uvolňuje odemčením.",
        "incorrect": "Mutex nelze chápat jako abstraktní zdroj, protože reprezentuje pouze kritickou sekci.",
        "sectionNumber": "7.3.3",
        "sectionTitle": "Abstraktní zdroje"
      },
      {
        "uuid": "d0c13ccb-a152-4f03-a72e-607bfb1634c8",
        "correct": "Semafor je abstraktní zdroj, jehož instance lze přidělovat nezávisle.",
        "incorrect": "Semafor je abstraktní zdroj, jehož instance nelze přidělovat nezávisle.",
        "sectionNumber": "7.3.3",
        "sectionTitle": "Abstraktní zdroje"
      },
      {
        "uuid": "a07f6de8-75ce-4901-b69c-cbef4aeb5ea1",
        "correct": "Kritickou sekci lze v určitém smyslu také chápat jako abstraktní zdroj.",
        "incorrect": "Kritickou sekci nelze chápat jako abstraktní zdroj, protože se jedná pouze o kód.",
        "sectionNumber": "7.3.3",
        "sectionTitle": "Abstraktní zdroje"
      },
      {
        "uuid": "9f43fd9f-2b73-4201-b178-2b5eef853153",
        "correct": "Zdroje mohou existovat v několika zaměnitelných instancích, ale pouze v době rezervace.",
        "incorrect": "Zdroje jsou vždy zaměnitelné, a to i po rezervaci instance zdroje.",
        "sectionNumber": "7.3.4",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "14247f46-f9c4-45b7-a075-e1dc293ab4e9",
        "correct": "Jakmile je instance zdroje rezervována, nelze ji dodatečně vyměnit za jinou.",
        "incorrect": "I po rezervaci instance zdroje je možné ji dodatečně vyměnit za jinou.",
        "sectionNumber": "7.3.4",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "a4c6a775-1f20-49fb-8959-2b7b8c4fc957",
        "correct": "Komunikace mezi procesy může být považována za synchronizační mechanismus a abstraktní zdroj.",
        "incorrect": "Komunikace mezi procesy není nikdy považována za synchronizační mechanismus.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "fa700980-3309-4a67-b528-be7d819d23a9",
        "correct": "V kontextu komunikace, odeslání zprávy lze chápat jako rezervaci abstraktního zdroje.",
        "incorrect": "V kontextu komunikace, odeslání zprávy se nikdy nechápe jako rezervace zdroje.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "8ffbc742-db67-4594-8067-71ef99361729",
        "correct": "Přijetí zprávy v komunikačním kontextu odpovídá uvolnění dříve rezervovaného abstraktního zdroje.",
        "incorrect": "Přijetí zprávy v komunikačním kontextu rezervuje abstraktní zdroj.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "3ed32274-badd-4573-ae3b-ea942059d291",
        "correct": "Různá vlákna nebo procesy mohou provádět operace rezervace a uvolnění v rámci komunikace.",
        "incorrect": "Pouze stejné vlákno může provádět rezervaci a uvolnění zdroje v komunikaci.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "e8684bf8-043d-4a8f-a180-c3b6a074e497",
        "correct": "V problému producent-konzument je uložení mezivýsledku formou rezervace omezeného zdroje.",
        "incorrect": "V problému producent-konzument uložení mezivýsledku není rezervací zdroje.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "9f766d0d-b0a5-4c79-8159-c4b506927bfe",
        "correct": "Operační systém může asistovat při předávání zdrojů mezi programy a jejich následném uvolnění.",
        "incorrect": "Operační systém nikdy neasistuje při předávání zdrojů mezi programy.",
        "sectionNumber": "7.3.5",
        "sectionTitle": "Komunikace"
      },
      {
        "uuid": "d0cf1c03-515f-4167-8562-7a1702d7bd43",
        "correct": "Implicitně se zdroje považují za neodnímatelné, což znamená, že uvolnění zdroje iniciuje vlastník.",
        "incorrect": "Implicitně se zdroje považují za odnímatelné, což znamená, že uvolnění zdroje iniciuje operační systém.",
        "sectionNumber": "7.3.6",
        "sectionTitle": "Odnímatelné zdroje"
      },
      {
        "uuid": "c397cc14-990a-4482-9ba7-d475e16e36df",
        "correct": "U neodnímatelných zdrojů, jako je mutex, může násilné odebrání vést k problémům ve fungování programu.",
        "incorrect": "U neodnímatelných zdrojů, jako je mutex, násilné odebrání nemá žádný vliv na fungování programu.",
        "sectionNumber": "7.3.6",
        "sectionTitle": "Odnímatelné zdroje"
      },
      {
        "uuid": "40a6ffa6-d297-4098-9034-49f6f269ed2a",
        "correct": "Virtualizované zdroje umožňují odebrání fyzického prostředku bez fatálních dopadů na běžící proces.",
        "incorrect": "Virtualizované zdroje vyžadují, aby odebrání fyzického prostředku mělo vždy fatální dopady na běžící proces.",
        "sectionNumber": "7.3.6",
        "sectionTitle": "Odnímatelné zdroje"
      },
      {
        "uuid": "8128f42b-b29e-4729-8273-0d14811ef538",
        "correct": "Odnímatelnost zdroje se může měnit v závislosti na kontextu použití daného zdroje v systému.",
        "incorrect": "Odnímatelnost zdroje je neměnná vlastnost, která nezávisí na kontextu použití v systému.",
        "sectionNumber": "7.3.6",
        "sectionTitle": "Odnímatelné zdroje"
      },
      {
        "uuid": "eb12b2b2-beb5-4216-adfb-3c729cc8801a",
        "correct": "Ztráta paketu v síti z důvodu plné vyrovnávací paměti je příkladem násilného odebrání zdroje.",
        "incorrect": "Ztráta paketu v síti z důvodu plné vyrovnávací paměti není považována za odebrání zdroje.",
        "sectionNumber": "7.3.6",
        "sectionTitle": "Odnímatelné zdroje"
      },
      {
        "uuid": "0f6d5cdd-c5dd-4c09-a570-c5fa217131b1",
        "correct": "Uváznutí nastává, když vlákno P drží zdroj A a čeká na zdroj B, a vlákno Q drží zdroj B a čeká na zdroj A.",
        "incorrect": "Uváznutí nastává, když vlákno P drží zdroj A a čeká na zdroj B, a vlákno Q drží zdroj A a čeká na zdroj B.",
        "sectionNumber": "7.4.1",
        "sectionTitle": "Uváznutí"
      },
      {
        "uuid": "1a380e55-adbe-45a6-abc2-a4e5887586c8",
        "correct": "V situaci uváznutí nemohou vlákna P a Q pokračovat v činnosti bez vnějšího zásahu operačního systému.",
        "incorrect": "V situaci uváznutí mohou vlákna P a Q pokračovat v činnosti bez vnějšího zásahu operačního systému.",
        "sectionNumber": "7.4.1",
        "sectionTitle": "Uváznutí"
      },
      {
        "uuid": "6fa766b5-6c78-4e94-8c3f-8e1c9395dad4",
        "correct": "Podle textu, k uváznutí může dojít, i když souběžnost žádostí vláken P a Q není nutnou podmínkou.",
        "incorrect": "Podle textu, k uváznutí může dojít, pouze pokud je souběžnost žádostí vláken P a Q nutnou podmínkou.",
        "sectionNumber": "7.4.1",
        "sectionTitle": "Uváznutí"
      },
      {
        "uuid": "2eb519ea-e0b0-43f5-9d6f-889b0142af6c",
        "correct": "Uváznutí je stav, kdy vlákno čeká na zdroj, který drží jiné vlákno, a tím vzniká cyklická závislost čekání.",
        "incorrect": "Uváznutí je stav, kdy vlákno čeká na zdroj, který není držen žádným jiným vláknem, což způsobuje jeho zablokování.",
        "sectionNumber": "7.4.1",
        "sectionTitle": "Uváznutí"
      },
      {
        "uuid": "200260f2-1626-4b0a-8da2-2d6ac9be481b",
        "correct": "Vzájemné vyloučení je přímým důsledkem rezervace zdrojů v operačním systému.",
        "incorrect": "Vzájemné vyloučení není důsledkem rezervace zdrojů v operačním systému.",
        "sectionNumber": "7.4.2",
        "sectionTitle": "Podmínky uváznutí"
      },
      {
        "uuid": "0a1a2194-ccc0-470b-86c3-712b09db7afd",
        "correct": "Podmínka čekající vlastník uváznutí nastává, když vlákno drží jeden zdroj a čeká na další.",
        "incorrect": "Podmínka čekající vlastník uváznutí nastává, jen když vlákno nedrží žádné zdroje.",
        "sectionNumber": "7.4.2",
        "sectionTitle": "Podmínky uváznutí"
      },
      {
        "uuid": "07c9dc36-93d5-4bd0-8c17-f25303fa81f7",
        "correct": "Neodnímatelnost zdrojů znamená, že operační systém nemůže odebrat zdroj vláknu násilím.",
        "incorrect": "Neodnímatelnost zdrojů znamená, že operační systém může odebrat zdroj vláknu násilím.",
        "sectionNumber": "7.4.2",
        "sectionTitle": "Podmínky uváznutí"
      },
      {
        "uuid": "cb6ba26f-f161-4be7-a9bf-b39166801e61",
        "correct": "Kruhové čekání je stav, kdy existuje cyklická závislost mezi vlákny čekajícími na zdroje.",
        "incorrect": "Kruhové čekání je stav, kdy neexistuje žádná závislost mezi vlákny a zdroji.",
        "sectionNumber": "7.4.2",
        "sectionTitle": "Podmínky uváznutí"
      },
      {
        "uuid": "3f8c3e67-f717-4be9-9238-91fd0000d0fc",
        "correct": "Podmínky uváznutí jsou nutné, ale ne postačující pro vznik uváznutí v systému.",
        "incorrect": "Podmínky uváznutí jsou nutné a postačující pro vznik uváznutí v systému.",
        "sectionNumber": "7.4.2",
        "sectionTitle": "Podmínky uváznutí"
      },
      {
        "uuid": "6e848669-049f-4038-a7fe-e42ff980df00",
        "correct": "Uváznutí mohou být velmi vzácné, protože jsou často důsledkem hazardů souběhu.",
        "incorrect": "Uváznutí jsou běžná a snadno se odhalují v moderních operačních systémech.",
        "sectionNumber": "7.4.3",
        "sectionTitle": "Pštrosí algoritmus"
      },
      {
        "uuid": "6cc2dc9f-9df1-4fdc-9812-3303a720e4c8",
        "correct": "Pštrosí algoritmus řeší uváznutí hrubou silou, například restartem systému.",
        "incorrect": "Pštrosí algoritmus se snaží aktivně předcházet uváznutím sofistikovanými metodami.",
        "sectionNumber": "7.4.3",
        "sectionTitle": "Pštrosí algoritmus"
      },
      {
        "uuid": "fcf39570-63ef-49a8-b3ab-db5e829bfbfa",
        "correct": "Rozhodnutí, zda nastalo uváznutí, může být v některých případech ponecháno na uživateli.",
        "incorrect": "Operační systém vždy automaticky a spolehlivě detekuje uváznutí bez zásahu uživatele.",
        "sectionNumber": "7.4.3",
        "sectionTitle": "Pštrosí algoritmus"
      },
      {
        "uuid": "5a6a1181-7490-467d-823a-74f18a6f4899",
        "correct": "Detekce uváznutí může být problematická, jak naznačuje text.",
        "incorrect": "Detekce uváznutí je vždy jednoduchá a přímočará v operačních systémech.",
        "sectionNumber": "7.4.3",
        "sectionTitle": "Pštrosí algoritmus"
      },
      {
        "uuid": "d086d9a7-830f-42e1-b5c1-d39b685b3c2e",
        "correct": "Uváznutí lze detekovat pomocí grafu vlastnictví a čekání na zdroje.",
        "incorrect": "Uváznutí lze detekovat pouze kontrolou kruhového čekání bez grafu zdrojů.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "aa6d0e5b-cb72-4a96-8c83-b57d22e24b72",
        "correct": "Graf detekce uváznutí obsahuje dva typy uzlů: vlákna a zdroje, s hranami mezi nimi.",
        "incorrect": "Graf detekce uváznutí obsahuje pouze jeden typ uzlů a hrany mezi uzly stejného typu.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "742c9753-ca28-45cd-9693-e5aa79a5ee97",
        "correct": "Cyklická závislost v grafu vlastnictví a čekání indikuje uváznutí systému.",
        "incorrect": "Cyklická závislost v grafu vlastnictví a čekání nikdy neindikuje uváznutí systému.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "00df0447-a746-4364-b06d-ec5604ce1ce8",
        "correct": "Přístup detekce uváznutí pomocí grafu je primárně určen pro zdroje s jedinou instancí.",
        "incorrect": "Přístup detekce uváznutí pomocí grafu je určen pro zdroje s více instancemi.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "a8afba46-71f1-4172-951e-b8678f273ae3",
        "correct": "Mutexy, chránící kritické sekce, jsou považovány za zdroje s jedinou instancí v kontextu uváznutí.",
        "incorrect": "Mutexy, chránící kritické sekce, jsou považovány za zdroje s více instancemi v kontextu uváznutí.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "16507fb7-9c6f-4668-baff-ddfbdaa263ae",
        "correct": "Každý cyklus v grafu detekce uváznutí musí mít sudou délku a alespoň čtyři hrany.",
        "incorrect": "Každý cyklus v grafu detekce uváznutí může mít lichou délku a alespoň tři hrany.",
        "sectionNumber": "7.4.4",
        "sectionTitle": "Detekce uváznutí"
      },
      {
        "uuid": "9457dd1d-0b59-41a0-a50d-6b358bcfc4e5",
        "correct": "Účastní-li se cyklického čekání odnímatelný zdroj, obvykle lze uváznutí vyřešit odebráním zdroje.",
        "incorrect": "Účastní-li se cyklického čekání odnímatelný zdroj, nelze uváznutí vyřešit odebráním zdroje.",
        "sectionNumber": "7.4.5",
        "sectionTitle": "Zotavení z uváznutí"
      },
      {
        "uuid": "260b0e27-b1b3-472d-b266-f8ac060d23c7",
        "correct": "Pro zotavení z uváznutí s neodnímatelnými zdroji je možné násilně ukončit proces.",
        "incorrect": "Pro zotavení z uváznutí s neodnímatelnými zdroji není možné násilně ukončit proces.",
        "sectionNumber": "7.4.5",
        "sectionTitle": "Zotavení z uváznutí"
      },
      {
        "uuid": "ebe03cce-8b0c-4f3b-a149-034db7ec1836",
        "correct": "Odnímatelnost zdroje umožňuje zotavení z uváznutí bez nutnosti násilného ukončování vláken.",
        "incorrect": "Odnímatelnost zdroje neumožňuje zotavení z uváznutí bez nutnosti násilného ukončování vláken.",
        "sectionNumber": "7.4.5",
        "sectionTitle": "Zotavení z uváznutí"
      },
      {
        "uuid": "5b9f51be-b015-42d5-9d8e-0ab0e0f6e352",
        "correct": "Podle textu, striktní definice uváznutí vyžaduje účast pouze neodnímatelných zdrojů.",
        "incorrect": "Podle textu, striktní definice uváznutí nevyžaduje účast pouze neodnímatelných zdrojů.",
        "sectionNumber": "7.4.5",
        "sectionTitle": "Zotavení z uváznutí"
      },
      {
        "uuid": "ead47df6-98a9-49d4-afec-cf30a4c75480",
        "correct": "Vyhýbání se uváznutí může zahrnovat zamítnutí některých požadavků na rezervaci zdrojů.",
        "incorrect": "Vyhýbání se uváznutí spočívá pouze v přidělování zdrojů, pokud jsou všechny zdroje volné.",
        "sectionNumber": "7.4.6",
        "sectionTitle": "Vyhýbání uváznutí"
      },
      {
        "uuid": "601796ce-96e2-404c-8520-4dd575dba191",
        "correct": "Bankéřův algoritmus vyžaduje znalost maximálních požadavků každého vlákna na zdroje.",
        "incorrect": "Bankéřův algoritmus funguje i bez znalosti maximálních požadavků vláken.",
        "sectionNumber": "7.4.6",
        "sectionTitle": "Vyhýbání uváznutí"
      },
      {
        "uuid": "29e0816d-0d2a-44c4-8286-9ff73e670ba3",
        "correct": "Technika vyhýbání se uváznutí využívá koncept bezpečných stavů systému.",
        "incorrect": "Technika vyhýbání se uváznutí se obejde bez konceptu bezpečných stavů systému.",
        "sectionNumber": "7.4.6",
        "sectionTitle": "Vyhýbání uváznutí"
      },
      {
        "uuid": "1c116b67-62ae-4461-b0b5-0ae1fb0c2c1d",
        "correct": "Bankéřův algoritmus počítá s nejhorším případem maximálních požadavků vláken na zdroje.",
        "incorrect": "Bankéřův algoritmus se spoléhá na průměrné požadavky vláken, nikoli na maximální.",
        "sectionNumber": "7.4.6",
        "sectionTitle": "Vyhýbání uváznutí"
      },
      {
        "uuid": "ed95b63d-e666-4fb8-b63c-e1ce5113c057",
        "correct": "Invariant bankéřova algoritmu zaručuje existenci vlákna, které může dokončit běh.",
        "incorrect": "Invariant bankéřova algoritmu zaručuje, že všechna vlákna mohou souběžně dokončit běh.",
        "sectionNumber": "7.4.6",
        "sectionTitle": "Vyhýbání uváznutí"
      },
      {
        "uuid": "a51f8e9c-bfe7-431b-80e3-a20daa2cd080",
        "correct": "Vyhýbání se uváznutí je často nepraktické kvůli omezenému počtu instancí zdrojů.",
        "incorrect": "Vyhýbání se uváznutí je praktické ve většině situací díky bankéřovu algoritmu.",
        "sectionNumber": "7.4.7",
        "sectionTitle": "Zamezení uváznutí"
      },
      {
        "uuid": "522af1f6-7ce6-4cc7-8172-9b84197d2b45",
        "correct": "Zamezení uváznutí spočívá v eliminaci alespoň jedné ze čtyř nutných podmínek uváznutí.",
        "incorrect": "Zamezení uváznutí vyžaduje eliminaci všech čtyř nutných podmínek uváznutí současně.",
        "sectionNumber": "7.4.7",
        "sectionTitle": "Zamezení uváznutí"
      },
      {
        "uuid": "dbba97ee-d619-4553-a2ba-e0bcfb512a57",
        "correct": "Podmínku vzájemného vyloučení lze zamezit virtualizací zdrojů.",
        "incorrect": "Podmínku vzájemného vyloučení lze zamezit předrezervací zdrojů.",
        "sectionNumber": "7.4.7",
        "sectionTitle": "Zamezení uváznutí"
      },
      {
        "uuid": "83314669-7878-4279-be49-f8a6d8842653",
        "correct": "Technika zotavení z uváznutí je vhodná pro systémy s odnímatelnými zdroji.",
        "incorrect": "Technika zotavení z uváznutí je primárně určena pro systémy s výhradně nepřenosnými zdroji.",
        "sectionNumber": "7.4.7",
        "sectionTitle": "Zamezení uváznutí"
      },
      {
        "uuid": "44ac4454-c393-4147-9750-6f91baf6cf77",
        "correct": "Předrezervace zdrojů se snaží zabránit čekání vlastníka zdroje na jiný zdroj.",
        "incorrect": "Předrezervace zdrojů má za cíl umožnit čekání vlastníka zdroje na další zdroje.",
        "sectionNumber": "7.4.8",
        "sectionTitle": "Zamezení předrezervací"
      },
      {
        "uuid": "a294e72b-a300-48ec-b82f-3f3ea7a2d390",
        "correct": "Dávková rezervace vyžaduje, aby vlákno rezervovalo všechny zdroje atomicky a najednou.",
        "incorrect": "Dávková rezervace umožňuje vláknu rezervovat zdroje postupně, nikoliv atomicky.",
        "sectionNumber": "7.4.8",
        "sectionTitle": "Zamezení předrezervací"
      },
      {
        "uuid": "984a26d9-62d2-46de-9851-54299656f474",
        "correct": "Vlákno musí uvolnit všechny držené zdroje před rezervací dalších zdrojů v systému s předrezervací.",
        "incorrect": "Vlákno může držet zdroje a rezervovat další bez nutnosti uvolnění stávajících zdrojů v systému s předrezervací.",
        "sectionNumber": "7.4.8",
        "sectionTitle": "Zamezení předrezervací"
      },
      {
        "uuid": "74f2a2bb-bae6-455c-ab82-81b113c4add2",
        "correct": "Pro rezervaci více zdrojů najednou předrezervace vyžaduje jedinou atomickou operaci.",
        "incorrect": "Pro rezervaci více zdrojů najednou předrezervace umožňuje více postupných operací.",
        "sectionNumber": "7.4.8",
        "sectionTitle": "Zamezení předrezervací"
      },
      {
        "uuid": "3f8ce394-4388-47d0-bed7-3b07de2f5b59",
        "correct": "Virtualizované zdroje nepoužívají výlučnou rezervaci, a proto nemohou přímo způsobit uváznutí.",
        "incorrect": "Virtualizované zdroje používají výlučnou rezervaci, a proto mohou přímo způsobit uváznutí.",
        "sectionNumber": "7.4.9",
        "sectionTitle": "Zamezení virtualizací"
      },
      {
        "uuid": "b3da32d7-ce1f-4ef5-8721-e8d42849b303",
        "correct": "Virtualizace tiskáren obvykle používá frontu pro správu tiskových úloh.",
        "incorrect": "Virtualizace tiskáren obvykle nepoužívá frontu pro správu tiskových úloh.",
        "sectionNumber": "7.4.9",
        "sectionTitle": "Zamezení virtualizací"
      },
      {
        "uuid": "67ae12a7-1d66-4356-8fb9-29bd91851edf",
        "correct": "Virtualizace napadá vzájemné vyloučení, aby umožnila více programům využívat zdroj.",
        "incorrect": "Virtualizace posiluje vzájemné vyloučení, aby umožnila více programům využívat zdroj.",
        "sectionNumber": "7.4.9",
        "sectionTitle": "Zamezení virtualizací"
      },
      {
        "uuid": "fd3d31ef-0322-4a08-b04a-c80187facc4a",
        "correct": "Zavedení globálního uspořádání zdrojů efektivně zamezuje vzniku kruhového čekání mezi vlákny.",
        "incorrect": "Zavedení globálního uspořádání zdrojů nijak neovlivňuje vznik kruhového čekání mezi vlákny.",
        "sectionNumber": "7.4.10",
        "sectionTitle": "Zamezení uspořádáním"
      },
      {
        "uuid": "e98564b7-debf-4955-a67a-3758fd44662f",
        "correct": "V systému s globálním uspořádáním musí vlákno rezervovat zdroje v pořadí určeném globálním uspořádáním.",
        "incorrect": "V systému s globálním uspořádáním může vlákno rezervovat zdroje v libovolném pořadí.",
        "sectionNumber": "7.4.10",
        "sectionTitle": "Zamezení uspořádáním"
      },
      {
        "uuid": "d46e19b2-66c4-4722-858d-809489ac9a3e",
        "correct": "Globální uspořádání zdrojů je praktické pro menší uzavřené systémy, ale pro rozsáhlý OS se příliš nehodí.",
        "incorrect": "Globální uspořádání zdrojů je ideálním řešením pro zamezení uváznutí i v rozsáhlých operačních systémech.",
        "sectionNumber": "7.4.10",
        "sectionTitle": "Zamezení uspořádáním"
      }
    ]
  },
  {
    "uuid": "42cce62a-c42a-4f86-8698-6b4e060af424",
    "sectionNumber": "8",
    "sectionTitle": "Přerušení a periferie",
    "statements": [
      {
        "uuid": "3d20a6e2-2708-424c-adc7-7f78bfe7a54d",
        "correct": "Přerušení je synchronizační zařízení, které slouží k synchronizaci periferie a softwaru.",
        "incorrect": "Přerušení je synchronizační zařízení, které slouží k synchronizaci dvou softwarových vláken.",
        "sectionNumber": "8.1.1",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "759179ce-a4d6-48fa-964c-3666308dbd8e",
        "correct": "Asymetrie přerušení spočívá v tom, že přerušení je vždy signalizováno periferií, nikoliv operačním systémem.",
        "incorrect": "Asymetrie přerušení spočívá v tom, že přerušení může být signalizováno jak periferií, tak operačním systémem.",
        "sectionNumber": "8.1.1",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "bbd7c91b-36e1-49f9-9e86-df061de70f71",
        "correct": "Operační systém je pasivním účastníkem přerušení, protože přerušení je vždy aktivováno periferií.",
        "incorrect": "Operační systém je aktivním účastníkem přerušení a může aktivně vyvolávat přerušení pro periferie.",
        "sectionNumber": "8.1.1",
        "sectionTitle": "Synchronizace"
      },
      {
        "uuid": "32ef6860-183e-4d8d-bc4a-4fcb25eeef41",
        "correct": "Přerušení je hardwarový mechanismus, který operační systém využívá pro reakci na události.",
        "incorrect": "Přerušení je softwarový mechanismus, který operační systém využívá pro plánování procesů.",
        "sectionNumber": "8.1.2",
        "sectionTitle": "Procesor"
      },
      {
        "uuid": "cdb8533b-e8f5-4652-bbce-ed19c41dc479",
        "correct": "Operační systém je program, který musí být vykonáván procesorem, aby mohl řídit hardware.",
        "incorrect": "Operační systém je program, který je vykonáván pamětí a nepotřebuje procesor k řízení hardware.",
        "sectionNumber": "8.1.2",
        "sectionTitle": "Procesor"
      },
      {
        "uuid": "c70a285f-d5b3-4fc6-aa27-3a1276c20675",
        "correct": "Při preemptivním přerušení je aktuálně běžící program procesoru dočasně pozastaven a uložen do paměti.",
        "incorrect": "Při preemptivním přerušení je aktuálně běžící program procesoru dokončen před zpracováním přerušení.",
        "sectionNumber": "8.1.2",
        "sectionTitle": "Procesor"
      },
      {
        "uuid": "f2f6bdb7-17db-49cb-8315-2a19cdfbe3e2",
        "correct": "Obsluha přerušení je spuštěna procesorem až po uložení aktuálního stavu vlákna do operační paměti.",
        "incorrect": "Obsluha přerušení je spuštěna procesorem ihned, bez ohledu na stav aktuálního vlákna.",
        "sectionNumber": "8.1.2",
        "sectionTitle": "Procesor"
      },
      {
        "uuid": "fd221119-b188-4425-b97f-cdbca6efc319",
        "correct": "Počet instancí přerušení je omezen hardwarem a typicky nepřesahuje 256 instancí.",
        "incorrect": "Počet instancí přerušení je omezen softwarem a typicky nepřesahuje 256 instancí.",
        "sectionNumber": "8.1.3",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "90daac39-e284-4e11-8db0-33792d600935",
        "correct": "Každá instance přerušení má přidruženou vlastní obsluhu, která je realizována jako podprogram.",
        "incorrect": "Více instancí přerušení může sdílet jednu obsluhu, která je realizována jako podprogram.",
        "sectionNumber": "8.1.3",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "5fbc2539-dfd1-48d8-8df3-426ff3b46c5e",
        "correct": "Adresa obslužného podprogramu pro každé přerušení je uložena v tabulce obsluhy přerušení.",
        "incorrect": "Adresa obslužného podprogramu pro všechna přerušení je uložena na jednom místě v paměti.",
        "sectionNumber": "8.1.3",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "8ae4b340-5d5c-4aee-bf0c-17c97e13fdd0",
        "correct": "Instance přerušení jsou rozlišeny a identifikovány pomocí čísel.",
        "incorrect": "Instance přerušení jsou rozlišeny a identifikovány pomocí názvů.",
        "sectionNumber": "8.1.3",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "3977cfda-397e-4230-bed4-619df243a724",
        "correct": "Tabulka obsluhy přerušení obsahuje pro každou instanci přerušení jednu položku.",
        "incorrect": "Tabulka obsluhy přerušení obsahuje jednu položku pro všechny instance přerušení dohromady.",
        "sectionNumber": "8.1.3",
        "sectionTitle": "Instance"
      },
      {
        "uuid": "07020ccc-8254-44cf-9f28-21aa4b2a2b9d",
        "correct": "Pro synchronizaci mezi CPU jádry lze v obsluze přerušení použít spinlocky.",
        "incorrect": "Pro synchronizaci mezi CPU jádry nelze v obsluze přerušení použít spinlocky.",
        "sectionNumber": "8.1.5",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "e79e8c3e-0500-4c30-9d0b-170d3c25bb3b",
        "correct": "Pro synchronizaci na stejném CPU jádře nelze v obsluze přerušení použít spinlocky.",
        "incorrect": "Pro synchronizaci na stejném CPU jádře lze v obsluze přerušení použít spinlocky.",
        "sectionNumber": "8.1.5",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "b261759a-80a0-4c96-ae9b-cfa321215513",
        "correct": "Obslužný podprogram přerušení nemůže být uspán plánovačem operačního systému.",
        "incorrect": "Obslužný podprogram přerušení může být uspán plánovačem operačního systému.",
        "sectionNumber": "8.1.5",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "143d12bf-cba4-4615-ba84-707e1e9ad5e7",
        "correct": "Zákaz přerušení představuje formu vzájemného vyloučení specifickou pro obslužné podprogramy.",
        "incorrect": "Zákaz přerušení není forma vzájemného vyloučení specifická pro obslužné podprogramy.",
        "sectionNumber": "8.1.5",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "a9d6df07-6f81-4e60-b986-4ca8b22e0881",
        "correct": "Obsluha druhé úrovně se používá v případech, kdy obsluha přerušení potřebuje čekat na událost.",
        "incorrect": "Obsluha druhé úrovně se používá i v případech, kdy obsluha přerušení nepotřebuje čekat.",
        "sectionNumber": "8.1.5",
        "sectionTitle": "Souběžnost"
      },
      {
        "uuid": "ebfdac16-3e60-4b32-a5ff-e2db74d69cd2",
        "correct": "Zákaz přerušení je asymetrický mechanismus synchronizace, působící pouze směrem k obsluze přerušení.",
        "incorrect": "Zákaz přerušení je symetrický mechanismus synchronizace, působící oběma směry, jak k obsluze, tak i k jádru.",
        "sectionNumber": "8.1.6",
        "sectionTitle": "Reentrance"
      },
      {
        "uuid": "37d433c9-35f9-4097-8330-4707260b4ba4",
        "correct": "Obsluha přerušení je na jednom CPU atomická z hlediska zbytku jádra díky zákazu přerušení.",
        "incorrect": "Obsluha přerušení není na jednom CPU atomická z hlediska zbytku jádra, i když je zákaz přerušení aktivní.",
        "sectionNumber": "8.1.6",
        "sectionTitle": "Reentrance"
      },
      {
        "uuid": "8732cfd8-35f5-4a57-bbeb-803b854bc6a4",
        "correct": "Kritické sekce v operačním systému, zejména ty sdílené mezi jádrem a obsluhou přerušení, vyžadují ochranu.",
        "incorrect": "Kritické sekce v operačním systému, i když jsou sdílené mezi jádrem a obsluhou přerušení, ochranu nevyžadují.",
        "sectionNumber": "8.1.6",
        "sectionTitle": "Reentrance"
      },
      {
        "uuid": "dbe85709-765b-45f6-b6c6-fd6becc666e0",
        "correct": "Zákaz přerušení by neměl být používán po příliš dlouhou dobu, aby se předešlo latenci systému.",
        "incorrect": "Zákaz přerušení může být používán libovolně dlouho, bez negativního vlivu na latenci systému.",
        "sectionNumber": "8.1.6",
        "sectionTitle": "Reentrance"
      },
      {
        "uuid": "3f835c75-384f-4c59-be9f-2ac8bed7a4e1",
        "correct": "Jádro může využít zákaz přerušení pro synchronizaci i v jiných částech kódu, nejen v obsluze přerušení.",
        "incorrect": "Jádro může využít zákaz přerušení pro synchronizaci výhradně jen v obsluze přerušení, nikoliv jinde.",
        "sectionNumber": "8.1.6",
        "sectionTitle": "Reentrance"
      },
      {
        "uuid": "2c8588f1-8a93-4754-891d-74a323a5aa31",
        "correct": "Vlákno je výpočet, který vznikne nepřerušenou činností procesoru řízeného programem.",
        "incorrect": "Vlákno je proces, který vznikne přerušenou činností procesoru řízeného programem.",
        "sectionNumber": "8.2.1",
        "sectionTitle": "Kontext"
      },
      {
        "uuid": "0addde2d-e507-4e8d-bfcf-cb9ea5787248",
        "correct": "Vlákno není vázáno na adresní prostor a jeden proces může obsahovat více vláken.",
        "incorrect": "Vlákno je vázáno na adresní prostor a jeden proces může obsahovat jen jedno vlákno.",
        "sectionNumber": "8.2.1",
        "sectionTitle": "Kontext"
      },
      {
        "uuid": "2b088017-ab66-4369-97fd-bacdc066e121",
        "correct": "Při aktivaci obsluhy přerušení se proces nepřepíná, protože se nemění mapování paměti.",
        "incorrect": "Při aktivaci obsluhy přerušení se proces přepíná, protože se mění mapování paměti.",
        "sectionNumber": "8.2.1",
        "sectionTitle": "Kontext"
      },
      {
        "uuid": "879819cd-f20f-40bf-b073-46d2218b162e",
        "correct": "Paměť obsluhy přerušení musí být dostupná ve všech virtuálních adresních prostorech na stejných adresách.",
        "incorrect": "Paměť obsluhy přerušení musí být dostupná pouze v adresním prostoru aktuálního procesu.",
        "sectionNumber": "8.2.1",
        "sectionTitle": "Kontext"
      },
      {
        "uuid": "6cb82750-aa66-4b65-b670-506fb35952e5",
        "correct": "Aktivace procesu je drahá operace, protože vyžaduje změnu mapování paměti.",
        "incorrect": "Aktivace procesu je levná operace, protože nevyžaduje změnu mapování paměti.",
        "sectionNumber": "8.2.1",
        "sectionTitle": "Kontext"
      },
      {
        "uuid": "9abb82d4-754f-466d-b450-1c668db42470",
        "correct": "Obsluha přerušení běží v provizorních podmínkách a blokuje přerušené vlákno.",
        "incorrect": "Obsluha přerušení běží v běžných podmínkách a neblokuje přerušené vlákno.",
        "sectionNumber": "8.2.2",
        "sectionTitle": "Prodleva"
      },
      {
        "uuid": "6a9359f9-b88d-4268-a634-8627b4ad8569",
        "correct": "Běžnými synchronizačními prostředky nelze synchronizovat obsluhu přerušení s přerušeným vláknem.",
        "incorrect": "Běžnými synchronizačními prostředky lze synchronizovat obsluhu přerušení s přerušeným vláknem.",
        "sectionNumber": "8.2.2",
        "sectionTitle": "Prodleva"
      },
      {
        "uuid": "173ce717-73f8-4109-ade6-2ba2721b93e1",
        "correct": "Adresy obsluhy přerušení jsou přístupné výhradně v privilegovaném režimu procesoru.",
        "incorrect": "Adresy obsluhy přerušení jsou přístupné i v uživatelském režimu procesoru.",
        "sectionNumber": "8.2.2",
        "sectionTitle": "Prodleva"
      },
      {
        "uuid": "52c4e5a4-b978-4ebc-ad3d-5a3c5a12ff4b",
        "correct": "Při vstupu do obsluhy přerušení se obvykle zakazují další přerušení, minimálně stejného typu.",
        "incorrect": "Při vstupu do obsluhy přerušení se nikdy nezakazují další přerušení, aby systém zůstal plně responzivní.",
        "sectionNumber": "8.2.3",
        "sectionTitle": "Struktura obsluhy"
      },
      {
        "uuid": "a39b33e1-4e04-4a4d-a818-a4c8eca7d428",
        "correct": "Obsluha přerušení vykonává minimální nutnou akci pro uvedení systému do provozuschopného stavu.",
        "incorrect": "Obsluha přerušení vykonává kompletní obsluhu události, včetně všech souvisejících úkonů.",
        "sectionNumber": "8.2.3",
        "sectionTitle": "Struktura obsluhy"
      },
      {
        "uuid": "3f8ce31f-2525-4c0a-a719-ed73d2dd8f46",
        "correct": "Zbytek akcí obsluhy přerušení se plánuje na pozdější vykonání jinou částí jádra.",
        "incorrect": "Veškeré akce obsluhy přerušení jsou vykonávány okamžitě a kompletně v rámci obsluhy přerušení.",
        "sectionNumber": "8.2.3",
        "sectionTitle": "Struktura obsluhy"
      },
      {
        "uuid": "f6729b60-2c85-480d-91b9-378ba99e422b",
        "correct": "Existují nemaskovatelná přerušení, která nelze zakázat a jsou určena pro závažné události.",
        "incorrect": "Všechna přerušení v systému mohou být zakázána během obsluhy přerušení, včetně kritických událostí.",
        "sectionNumber": "8.2.3",
        "sectionTitle": "Struktura obsluhy"
      },
      {
        "uuid": "1057d610-d7d9-4fee-8f14-fc3ea9ecd154",
        "correct": "Přerušení typu notifikace, jako například vsync, jsou obvykle nezávazná a jejich zpoždění neohrozí systém.",
        "incorrect": "Přerušení typu notifikace, jako například vsync, jsou kritická a jejich zpoždění vážně ohrozí systém.",
        "sectionNumber": "8.3.1",
        "sectionTitle": "Notifikace"
      },
      {
        "uuid": "41d46de5-5b13-4522-a434-e9a187fa7bfa",
        "correct": "U periferií s malou šířkou pásma, jako UART, se data obvykle čtou z registrů periferie v reakci na přerušení.",
        "incorrect": "U periferií s velkou šířkou pásma, jako UART, se data obvykle čtou z registrů periferie v reakci na přerušení.",
        "sectionNumber": "8.3.1",
        "sectionTitle": "Notifikace"
      },
      {
        "uuid": "ee0c6574-94b9-4e39-8953-6058e87fb546",
        "correct": "Vsync přerušení informuje o výměně obrazu na displeji a obvykle není časově kritické pro operační systém.",
        "incorrect": "Vsync přerušení informuje o výměně obrazu na displeji a je vysoce časově kritické pro operační systém.",
        "sectionNumber": "8.3.1",
        "sectionTitle": "Notifikace"
      },
      {
        "uuid": "e9fd56d6-1825-47d7-a8a9-d7724505b298",
        "correct": "UART zařízení s vyrovnávací pamětí 128 bitů a plným vytížením generuje přerušení s frekvencí do 900Hz.",
        "incorrect": "UART zařízení s vyrovnávací pamětí 128 bitů a plným vytížením generuje přerušení s frekvencí nad 10kHz.",
        "sectionNumber": "8.3.1",
        "sectionTitle": "Notifikace"
      },
      {
        "uuid": "7c2f0c73-8fcd-466e-8e8b-c3ee5543229d",
        "correct": "Zařízení s větší šířkou pásma obvykle používají DMA pro souběžný přenos dat.",
        "incorrect": "Zařízení s větší šířkou pásma obvykle používají přerušení pro souběžný přenos dat.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "d3de0537-5bfe-4ccb-8293-7a31188e0426",
        "correct": "Synchronizace směrem k periferii u DMA se provádí zápisem do registru zařízení.",
        "incorrect": "Synchronizace směrem k periferii u DMA se provádí pomocí přerušení od periferie.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "a97c72ad-dd34-45fc-9e70-623c55b1a354",
        "correct": "Periferie využívající DMA signalizuje dokončení přenosu do systému pomocí přerušení.",
        "incorrect": "Periferie využívající DMA signalizuje dokončení přenosu do systému zápisem do registru.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "c39ce50c-820a-4454-9e0b-db443aaabf75",
        "correct": "Přenosy DMA vyžadují synchronizaci s operačním systémem prostřednictvím ovladače zařízení.",
        "incorrect": "Přenosy DMA jsou zcela autonomní a nevyžadují synchronizaci s operačním systémem.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "21650403-13f7-4538-81f1-bdcbb3e638fa",
        "correct": "Vysoká přenosová rychlost u DMA zvyšuje riziko přetečení dostupné operační paměti.",
        "incorrect": "Vysoká přenosová rychlost u DMA snižuje riziko přetečení dostupné operační paměti.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "90cf6795-02e1-4945-9802-afb6d6552a39",
        "correct": "Při 1Gb/s a 1kHz přerušení DMA je nutné zpracovat přibližně 1Mb dat na každé přerušení.",
        "incorrect": "Při 1Gb/s a 1kHz přerušení DMA je nutné zpracovat přibližně 1Kb dat na každé přerušení.",
        "sectionNumber": "8.3.2",
        "sectionTitle": "DMA"
      },
      {
        "uuid": "8723a78b-1c9a-40d0-a2fc-9a9a14240022",
        "correct": "Přerušení časovače je složité kvůli interakci s plánovačem vláken a řízení pravidelných činností OS.",
        "incorrect": "Přerušení časovače je jednoduché, protože se nezabývá plánováním vláken a řídí pouze nepravidelné činnosti OS.",
        "sectionNumber": "8.3.3",
        "sectionTitle": "Časovač"
      },
      {
        "uuid": "d41fc288-9f6a-4ae8-af63-70ae144426a6",
        "correct": "Manipulace s frontami vláken v obsluze přerušení časovače musí probíhat v první úrovni obsluhy.",
        "incorrect": "Manipulace s frontami vláken v obsluze přerušení časovače se může odložit do obsluhy druhé úrovně.",
        "sectionNumber": "8.3.3",
        "sectionTitle": "Časovač"
      },
      {
        "uuid": "6b034ef9-9cbd-444d-85d5-7ac44c9fc15d",
        "correct": "Synchronizace při manipulaci s frontami vláken musí být chráněna spinlockem a zákazem přerušení.",
        "incorrect": "Synchronizace při manipulaci s frontami vláken se může spoléhat pouze na spinlocky bez nutnosti zakazovat přerušení.",
        "sectionNumber": "8.3.3",
        "sectionTitle": "Časovač"
      },
      {
        "uuid": "56996f03-641d-4bbe-9a99-9226a9f4d794",
        "correct": "Přepnutí kontextu mezi vlákny různých procesů vyžaduje přepnutí stránkovacích tabulek.",
        "incorrect": "Přepnutí kontextu mezi vlákny různých procesů se obejde bez přepnutí stránkovacích tabulek.",
        "sectionNumber": "8.3.3",
        "sectionTitle": "Časovač"
      },
      {
        "uuid": "696cf28f-5470-40f3-9ebe-e3997680af8c",
        "correct": "Každý procesor v systému obvykle disponuje vlastním časovačem pro řízení událostí.",
        "incorrect": "V systému s více procesory se obvykle používá jeden sdílený časovač pro všechny procesory.",
        "sectionNumber": "8.3.3",
        "sectionTitle": "Časovač"
      }
    ]
  },
  {
    "uuid": "89a152f1-f487-4028-a450-1f5daa715b14",
    "sectionNumber": "9",
    "sectionTitle": "Jádro, hypervizor",
    "statements": [
      {
        "uuid": "418de05c-da86-45b0-86e5-1b1a322701f4",
        "correct": "Hypervisor, také známý jako Virtual Machine Monitor, umožňuje spouštění více operačních systémů.",
        "incorrect": "Hypervisor, také známý jako Virtual Machine Monitor, umožňuje spouštění pouze jednoho operačního systému.",
        "sectionNumber": "9.3.1",
        "sectionTitle": "What is a Hypervisor"
      },
      {
        "uuid": "3a2646ed-2618-4057-a772-523432499395",
        "correct": "Hypervisor se chová jako kernel, který běží mezi hardwarem a virtualizovanými operačními systémy.",
        "incorrect": "Hypervisor se chová jako běžná aplikace, která běží nad operačním systémem a virtualizuje hardware.",
        "sectionNumber": "9.3.1",
        "sectionTitle": "What is a Hypervisor"
      },
      {
        "uuid": "a75ee7a1-dd71-4c1a-af17-ee04609055d5",
        "correct": "Virtualizované operační systémy sdílejí procesory a jsou izolovány v fyzické paměti pomocí MMU.",
        "incorrect": "Virtualizované operační systémy sdílejí procesory, ale nejsou izolovány v fyzické paměti.",
        "sectionNumber": "9.3.1",
        "sectionTitle": "What is a Hypervisor"
      },
      {
        "uuid": "9b05a169-c6b4-4aa6-98e5-33c0a274ee93",
        "correct": "Rozhraní hypervizoru a operačního systému je jednodušší než rozhraní operačního systému a aplikace.",
        "incorrect": "Rozhraní hypervizoru a operačního systému je složitější než rozhraní operačního systému a aplikace.",
        "sectionNumber": "9.3.2",
        "sectionTitle": "Motivation"
      },
      {
        "uuid": "3f245951-66b3-4c15-8a5e-02078ee80ad9",
        "correct": "Virtualizované operační systémy umožňují stupeň autonomie, který není běžný, když více uživatelů sdílí jeden OS.",
        "incorrect": "Virtualizované operační systémy umožňují menší stupeň autonomie, než když více uživatelů sdílí jeden OS.",
        "sectionNumber": "9.3.2",
        "sectionTitle": "Motivation"
      },
      {
        "uuid": "d1ec81e0-7325-4e6b-921b-8584b2007fdb",
        "correct": "Mezi hypervizorem a operačním systémem neexistují systémy souborů pro komunikaci.",
        "incorrect": "Mezi hypervizorem a operačním systémem existují sdílené systémy souborů pro komunikaci.",
        "sectionNumber": "9.3.2",
        "sectionTitle": "Motivation"
      },
      {
        "uuid": "6d2ccad6-a7a7-40c6-893b-0e03e740ede5",
        "correct": "Virtuální stroje sdružují zdroje a zpřístupňují je operačnímu systému.",
        "incorrect": "Virtuální stroje poskytují přímý přístup k hardwaru operačnímu systému.",
        "sectionNumber": "9.3.2",
        "sectionTitle": "Motivation"
      },
      {
        "uuid": "99bccb9d-095c-4f78-aedc-0f08736b401b",
        "correct": "MMU virtualizuje fyzickou paměť, což je klíčový aspekt virtualizace zdrojů v počítačích.",
        "incorrect": "MMU virtualizuje virtuální paměť, což přímo zjednodušuje správu fyzických periferií systému.",
        "sectionNumber": "9.3.3",
        "sectionTitle": "Virtualisation in General"
      },
      {
        "uuid": "cff85e9f-83cb-4dab-b25b-5b869bb2a8f7",
        "correct": "Operační systém virtualizuje periferie, aby umožnil bezpečné a spravedlivé sdílení hardwarových zdrojů.",
        "incorrect": "Operační systém virtualizuje pouze paměť, přičemž periferie jsou spravovány přímo hardwarem.",
        "sectionNumber": "9.3.3",
        "sectionTitle": "Virtualisation in General"
      },
      {
        "uuid": "9db6dbb9-7d59-45a4-9b36-5d01fa7c3f91",
        "correct": "Virtualizace usnadňuje správu zdrojů a umožňuje izolaci komponent v operačním systému.",
        "incorrect": "Virtualizace komplikuje správu zdrojů a ztěžuje izolaci komponent v operačním systému.",
        "sectionNumber": "9.3.3",
        "sectionTitle": "Virtualisation in General"
      },
      {
        "uuid": "3b3fd330-be19-4e73-8a96-2aedb2ba3f74",
        "correct": "Hypervizory typu 1 jsou umístěny přímo nad hardwarem a fungují jako jednoduchý mikrokernel.",
        "incorrect": "Hypervizory typu 1 běží jako aplikace nad běžným operačním systémem.",
        "sectionNumber": "9.3.4",
        "sectionTitle": "Hypervisor Types"
      },
      {
        "uuid": "9e290401-7468-4405-a2a5-fcc100677838",
        "correct": "Hypervizory typu 2 využívají plánovač a správu paměti hostitelského operačního systému.",
        "incorrect": "Hypervizory typu 2 si samy spravují plánování procesoru a paměť, nezávisle na hostitelském systému.",
        "sectionNumber": "9.3.4",
        "sectionTitle": "Hypervisor Types"
      },
      {
        "uuid": "27c7f614-f6a5-479b-9230-9538c9212cb5",
        "correct": "Hlavní rozdíl mezi hypervizory typu 1 a 2 spočívá v jejich umístění v softwarovém zásobníku systému.",
        "incorrect": "Hypervizory typu 1 a 2 se liší pouze v podpoře různých typů hardwaru, nikoli v architektuře.",
        "sectionNumber": "9.3.4",
        "sectionTitle": "Hypervisor Types"
      },
      {
        "uuid": "b849cf44-53c6-4e82-802c-ffa47004a133",
        "correct": "Z/VM, Xen a Hyper-V jsou příklady hypervizorů typu bare metal.",
        "incorrect": "VMWare, VirtualBox a Hyper-V jsou příklady hypervizorů typu bare metal.",
        "sectionNumber": "9.3.5",
        "sectionTitle": "Examples & History"
      },
      {
        "uuid": "495e0a55-d70c-499d-aea9-20ab02085a88",
        "correct": "VMWare a VirtualBox jsou uvedeny jako příklady hosted hypervizorů.",
        "incorrect": "Xen a VirtualBox jsou uvedeny jako příklady hosted hypervizorů.",
        "sectionNumber": "9.3.5",
        "sectionTitle": "Examples & History"
      },
      {
        "uuid": "50947234-b11e-4536-bba4-19deb08263a5",
        "correct": "Architektura x86 postrádá režim virtuálního supervizora.",
        "incorrect": "Architektura x86 disponuje režimem virtuálního supervizora.",
        "sectionNumber": "9.3.6",
        "sectionTitle": "Desktop Virtualisation"
      },
      {
        "uuid": "6bb7a057-d7d7-423e-8703-676b174f0de4",
        "correct": "Paravirtualizace, představená společností VMWare v roce 2005, vyžaduje modifikace hostovaného operačního systému.",
        "incorrect": "Paravirtualizace, představená společností VMWare v roce 2005, nevyžaduje modifikace hostovaného operačního systému.",
        "sectionNumber": "9.3.7",
        "sectionTitle": "Paravirtualisation"
      },
      {
        "uuid": "f5a01684-2e63-43a3-b7d3-1ba13451faf5",
        "correct": "Alternativní přístup k paravirtualizaci byl představen v Xenu v roce 2006.",
        "incorrect": "Alternativní přístup k plné virtualizaci byl představen v Xenu v roce 2006.",
        "sectionNumber": "9.3.7",
        "sectionTitle": "Paravirtualisation"
      },
      {
        "uuid": "4899f107-3f39-41b8-993c-8c5c362d7ff8",
        "correct": "Paravirtualizace umožňuje dosáhnout téměř nativní rychlosti bez hardwarové podpory.",
        "incorrect": "Paravirtualizace umožňuje dosáhnout téměř nativní rychlosti pouze s hardwarovou podporou.",
        "sectionNumber": "9.3.7",
        "sectionTitle": "Paravirtualisation"
      },
      {
        "uuid": "b26ae74d-529a-4af0-89ad-73e4ef516431",
        "correct": "Virtualizační rozšíření pro x86 architekturu se objevila okolo roku 2005.",
        "incorrect": "Virtualizační rozšíření pro x86 architekturu se objevila až po roce 2010.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "fdb8f4eb-5bf8-44f6-99c7-fc658c902ec9",
        "correct": "Virtualizace MMU se stala běžnou součástí desktopových procesorů přibližně v roce 2008.",
        "incorrect": "Virtualizace MMU se stala běžnou součástí desktopových procesorů již v roce 2000.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "15d1ff47-af0c-438e-ac6e-cc1ea15a90ed",
        "correct": "Díky virtualizačním rozšířením není v principu nutné modifikovat hostovaný operační systém.",
        "incorrect": "Díky virtualizačním rozšířením je nutné modifikovat hostovaný operační systém.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "1f75a261-3ada-4d4f-ad34-940e4f05fcba",
        "correct": "MMU virtualizace přispěla ke zjednodušení návrhu hypervizorů pro x86 architekturu.",
        "incorrect": "MMU virtualizace zkomplikovala návrh hypervizorů pro x86 architekturu.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "d806ce22-ccef-44c2-86ee-f6789dc98bb7",
        "correct": "Softwarová virtualizační řešení se stala zastaralými s nástupem hardwarové virtualizace.",
        "incorrect": "Softwarová virtualizační řešení zůstala dominantní i po nástupu hardwarové virtualizace.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "ca5351dd-3832-46c9-8ad7-ede86e6452a9",
        "correct": "Procesory s virtualizačními rozšířeními umožňují běh nemodifikovaného hostovaného OS téměř nativní rychlostí.",
        "incorrect": "Procesory s virtualizačními rozšířeními výrazně zpomalují běh hostovaného operačního systému.",
        "sectionNumber": "9.3.8",
        "sectionTitle": "The Virtual ‹x86› Revolution"
      },
      {
        "uuid": "f3857e91-3c0d-435d-979d-b152ab02269a",
        "correct": "Paravirtualizované periferie vyžadují speciální ovladače v hostovaném operačním systému.",
        "incorrect": "Paravirtualizované periferie **ne**vyžadují speciální ovladače v hostovaném operačním systému.",
        "sectionNumber": "9.3.9",
        "sectionTitle": "Paravirtual Devices"
      },
      {
        "uuid": "b5036837-f74a-4e54-b3ad-a216967361a8",
        "correct": "Hardwarová virtualizace periférií je ekonomicky náročnější než paravirtualizace.",
        "incorrect": "Hardwarová virtualizace periférií je **ekonomicky výhodnější** než paravirtualizace.",
        "sectionNumber": "9.3.9",
        "sectionTitle": "Paravirtual Devices"
      },
      {
        "uuid": "6bb4d60e-adeb-4770-82a2-c2ee9cf8261b",
        "correct": "Paravirtualizované periferie nevyžadují změny v hostovaném operačním systému.",
        "incorrect": "Paravirtualizované periferie **vyžadují rozsáhlé** změny v hostovaném operačním systému.",
        "sectionNumber": "9.3.9",
        "sectionTitle": "Paravirtual Devices"
      },
      {
        "uuid": "682a206e-c03c-4a4f-af97-3a3ab154692d",
        "correct": "Virtualizace může být realizována hardwarově za pomoci technologií jako VT-x a EPT.",
        "incorrect": "Virtualizace je výhradně softwarová záležitost a nepoužívá hardwarové technologie.",
        "sectionNumber": "9.3.10",
        "sectionTitle": "Virtual Computers"
      },
      {
        "uuid": "143f1be0-8519-40d3-abff-7e3fb5b9018d",
        "correct": "Virtuální stroj obvykle poskytuje procesor, paměť, blokové úložiště a síťové připojení.",
        "incorrect": "Virtuální stroj typicky poskytuje jen procesor a paměť, ostatní zdroje nejsou nutné.",
        "sectionNumber": "9.3.10",
        "sectionTitle": "Virtual Computers"
      },
      {
        "uuid": "862bfd9b-3a9d-4481-bb9e-2f87fecb8d93",
        "correct": "Systém běžící pod virtualizovaným operačním systémem se označuje jako virtuální stroj.",
        "incorrect": "Systém běžící pod virtualizovaným operačním systémem se nazývá hostitelský systém.",
        "sectionNumber": "9.3.10",
        "sectionTitle": "Virtual Computers"
      },
      {
        "uuid": "63c1073d-7070-4cb8-8823-dff4c5734849",
        "correct": "Správa virtuálních strojů je obecně považována za jednodušší než správa fyzického hardwaru.",
        "incorrect": "Správa virtuálních strojů je obvykle složitější než správa fyzického hardwaru.",
        "sectionNumber": "9.3.10",
        "sectionTitle": "Virtual Computers"
      },
      {
        "uuid": "22335399-ecb8-4e8c-b35d-a0a91a2deca4",
        "correct": "Mezi běžné zdroje poskytované virtuálním strojem patří i konzolové zařízení pro správu.",
        "incorrect": "Konzolové zařízení pro správu není typickým zdrojem poskytovaným virtuálním strojem.",
        "sectionNumber": "9.3.10",
        "sectionTitle": "Virtual Computers"
      },
      {
        "uuid": "a04de73a-56f7-4cc8-a1b1-6b4af239857d",
        "correct": "Hypervisor obsahuje plánovač procesů, který je však jednodušší než u běžného operačního systému.",
        "incorrect": "Hypervisor neobsahuje plánovač procesů, protože plánování je plně delegováno na hostitelský operační systém.",
        "sectionNumber": "9.3.11",
        "sectionTitle": "CPU Sharing"
      },
      {
        "uuid": "23329e8c-f1f0-4527-8615-2e9b5a7ef709",
        "correct": "Privilegované instrukce jsou zachytávány hypervizorem a zpracovávány softwarově.",
        "incorrect": "Privilegované instrukce jsou vykonávány přímo hostitelským CPU bez zásahu hypervizoru.",
        "sectionNumber": "9.3.11",
        "sectionTitle": "CPU Sharing"
      },
      {
        "uuid": "b5723a26-336e-479b-aee0-1d2b02f38ecb",
        "correct": "Hypervisor spravuje virtualizovanou MMU, což umožňuje izolaci paměti virtuálních strojů.",
        "incorrect": "Hypervisor nesprávuje virtualizovanou MMU, správu paměti virtuálních strojů zajišťuje hostitelský OS.",
        "sectionNumber": "9.3.11",
        "sectionTitle": "CPU Sharing"
      },
      {
        "uuid": "8b9ddc28-bd5c-4f97-aa0f-d29ef6a64d03",
        "correct": "Většina instrukcí uživatelského prostoru je vykonávána hostitelským CPU nativně, bez režie hypervizoru.",
        "incorrect": "Všechny instrukce, včetně instrukcí uživatelského prostoru, jsou emulovány hypervizorem.",
        "sectionNumber": "9.3.11",
        "sectionTitle": "CPU Sharing"
      },
      {
        "uuid": "badf8917-1b80-4360-a98b-1552086781ef",
        "correct": "Virtualizace paměti se opírá o stejné principy jako izolace procesů v OS, využívající stránkování a MMU.",
        "incorrect": "Virtualizace paměti využívá zcela odlišné mechanismy než izolace procesů v OS a nepoužívá stránkování.",
        "sectionNumber": "9.3.12",
        "sectionTitle": "RAM Sharing"
      },
      {
        "uuid": "072e2beb-f37d-451d-9853-f4aa33e40ce6",
        "correct": "Shadow page tables představují softwarovou metodu virtualizace paměti, kde hostující systém nemá přímý přístup k MMU.",
        "incorrect": "Shadow page tables jsou hardwarová metoda virtualizace paměti, umožňující hostujícímu systému přímý přístup k MMU.",
        "sectionNumber": "9.3.12",
        "sectionTitle": "RAM Sharing"
      },
      {
        "uuid": "7e2aba11-7330-46f9-bc83-edd5ef29d1ca",
        "correct": "V shadow page tables hypervisor synchronizuje guest page tables se shadow page tables, které odrážejí virtuální adresy hosta.",
        "incorrect": "V shadow page tables jsou guest page tables synchronizovány přímo s fyzickou pamětí, bez účasti hypervisoru.",
        "sectionNumber": "9.3.12",
        "sectionTitle": "RAM Sharing"
      },
      {
        "uuid": "8076ed93-ac8e-4bd7-9dbd-19bdd799ebfe",
        "correct": "Druhá úroveň překladu, hardwarové řešení, zjednodušuje VMM a nabízí vyšší výkon než shadow page tables.",
        "incorrect": "Druhá úroveň překladu, softwarové řešení, komplikuje VMM a je méně výkonná než shadow page tables.",
        "sectionNumber": "9.3.12",
        "sectionTitle": "RAM Sharing"
      },
      {
        "uuid": "ed2a8990-6dc2-4db2-b8ba-28e51dd0bcc8",
        "correct": "Moderní procesory umožňují hostujícímu OS modifikovat page tables přímo díky hardwarové virtualizaci MMU.",
        "incorrect": "I s hardwarovou virtualizací MMU hostující OS nemůže přímo modifikovat page tables kvůli izolaci.",
        "sectionNumber": "9.3.12",
        "sectionTitle": "RAM Sharing"
      },
      {
        "uuid": "dfe39581-5901-4b7a-96d1-00756eb942dc",
        "correct": "Současná virtualizační řešení používají paravirtualizovanou síťovou kartu.",
        "incorrect": "Starší virtualizační řešení běžně používají paravirtualizovanou síťovou kartu.",
        "sectionNumber": "9.3.13",
        "sectionTitle": "Network Sharing"
      },
      {
        "uuid": "ddc162b0-f48f-4bf0-884a-504a516b2052",
        "correct": "Paravirtualizovaná síťová karta přenáší rámce mezi hostem a hostitelem.",
        "incorrect": "Paravirtualizovaná síťová karta přenáší pakety mezi hostem a hostitelem.",
        "sectionNumber": "9.3.13",
        "sectionTitle": "Network Sharing"
      },
      {
        "uuid": "bc129d84-04ff-4102-ade7-4d8736b2a325",
        "correct": "V hostitelském systému je paravirtualizovaná síťová karta obvykle připojena k softwarovému mostu.",
        "incorrect": "V hostitelském systému je paravirtualizovaná síťová karta obvykle připojena k hardwarovému mostu.",
        "sectionNumber": "9.3.13",
        "sectionTitle": "Network Sharing"
      },
      {
        "uuid": "b9fa1cd5-4390-4bb1-b1ae-5061aedb284f",
        "correct": "Alternativou k softwarovému mostu v hostiteli je směrování.",
        "incorrect": "Jedinou alternativou k softwarovému mostu v hostiteli je směrování.",
        "sectionNumber": "9.3.13",
        "sectionTitle": "Network Sharing"
      },
      {
        "uuid": "4cc35ca5-a95c-41e8-9648-0aea3aad6453",
        "correct": "Ethernetový tunel pseudo-zařízení v hostiteli funguje jako virtuální síťová karta.",
        "incorrect": "Ethernetový tunel pseudo-zařízení v hostiteli funguje jako fyzická síťová karta.",
        "sectionNumber": "9.3.13",
        "sectionTitle": "Network Sharing"
      },
      {
        "uuid": "15bb8e28-dda0-4125-aef0-b367c8640ca6",
        "correct": "Blokové úložiště je obvykle založeno na paravirtualizaci.",
        "incorrect": "Blokové úložiště není nikdy založeno na paravirtualizaci.",
        "sectionNumber": "9.3.14",
        "sectionTitle": "Virtual Block Devices"
      },
      {
        "uuid": "746de823-2658-4d79-88fe-e2eb57d4169a",
        "correct": "Hostitelská strana blokového zařízení může být podložena běžným souborem v systému hostitele.",
        "incorrect": "Hostitelská strana blokového zařízení nemůže být podložena běžným souborem v systému hostitele.",
        "sectionNumber": "9.3.14",
        "sectionTitle": "Virtual Block Devices"
      },
      {
        "uuid": "4c6db57e-a61f-4721-81a0-a48028e1d244",
        "correct": "Soubory pro blokové úložiště mohou být ve speciálním formátu, například copy-on-write.",
        "incorrect": "Soubory pro blokové úložiště nikdy nejsou ve speciálním formátu jako copy-on-write.",
        "sectionNumber": "9.3.14",
        "sectionTitle": "Virtual Block Devices"
      },
      {
        "uuid": "1597bfdd-0989-4778-95a0-4566d9c8b562",
        "correct": "Blokové úložiště může být podloženo skutečným blokovým zařízením.",
        "incorrect": "Blokové úložiště nemůže být nikdy podloženo skutečným blokovým zařízením.",
        "sectionNumber": "9.3.14",
        "sectionTitle": "Virtual Block Devices"
      },
      {
        "uuid": "003a8d9b-4b89-43c6-817e-4929ec3a763d",
        "correct": "LVM a device-mapper jsou technologie používané pro virtualizaci blokových zařízení.",
        "incorrect": "LVM a device-mapper nejsou technologie používané pro virtualizaci blokových zařízení.",
        "sectionNumber": "9.3.14",
        "sectionTitle": "Virtual Block Devices"
      },
      {
        "uuid": "d87660d1-e3e1-4bba-af26-f87c7bd9427b",
        "correct": "Periferie jsou užitečné hlavně v desktopových systémech.",
        "incorrect": "Periferie jsou užitečné hlavně v serverové virtualizaci.",
        "sectionNumber": "9.3.15",
        "sectionTitle": "Special Resources"
      },
      {
        "uuid": "2376e8f8-a533-4220-9462-b42120f1cf32",
        "correct": "Grafické karty, zvuková zařízení a tiskárny patří mezi periferie.",
        "incorrect": "Servery a virtualizační software patří mezi periferie.",
        "sectionNumber": "9.3.15",
        "sectionTitle": "Special Resources"
      },
      {
        "uuid": "d21db130-382f-4a57-8158-fd67d4959205",
        "correct": "Anti-virtualizační technologie využívá I/O MMU pro přímý přístup virtuálního operačního systému k hardwaru.",
        "incorrect": "Anti-virtualizační technologie obchází I/O MMU a umožňuje přímý přístup virtuálního operačního systému k hardwaru.",
        "sectionNumber": "9.3.16",
        "sectionTitle": "PCI Passthrough"
      },
      {
        "uuid": "2aa897ab-34d5-4078-981f-c0f7073fe803",
        "correct": "I/O MMU zabraňuje virtuálnímu operačnímu systému přímý zápis do paměti hostitelského systému.",
        "incorrect": "I/O MMU umožňuje virtuálnímu operačnímu systému přímý zápis do paměti hostitelského systému.",
        "sectionNumber": "9.3.16",
        "sectionTitle": "PCI Passthrough"
      },
      {
        "uuid": "262023e2-9b93-4ace-a97d-f1dcab0b0bd4",
        "correct": "Při přímém přístupu virtuálního OS k PCI zařízení, hostitelský systém s tímto zařízením nesmí komunikovat.",
        "incorrect": "Při přímém přístupu virtuálního OS k PCI zařízení, hostitelský systém může s tímto zařízením komunikovat.",
        "sectionNumber": "9.3.16",
        "sectionTitle": "PCI Passthrough"
      },
      {
        "uuid": "b0d49f49-5cde-4944-aa40-f1dc567bc46e",
        "correct": "GPU může být přidělena jednomu operačnímu systému pomocí VT-d.",
        "incorrect": "GPU může být sdílena více operačními systémy současně pomocí VT-d.",
        "sectionNumber": "9.3.17",
        "sectionTitle": "GPUs and Virtualisation"
      },
      {
        "uuid": "bf7d6262-ac60-4df9-9f1f-d34d3ac8f078",
        "correct": "Moderní GPU umožňují časové sdílení, které vyžaduje ovladače v hypervizoru.",
        "incorrect": "Moderní GPU umožňují časové sdílení bez nutnosti ovladačů v hypervizoru.",
        "sectionNumber": "9.3.17",
        "sectionTitle": "GPUs and Virtualisation"
      },
      {
        "uuid": "3d1828d5-7f5f-4e3e-9e94-adcd3f41bd1a",
        "correct": "Paravirtualizace GPU využívá vendor-neutrální protokol pro komunikaci s hypervizorem.",
        "incorrect": "Paravirtualizace GPU vyžaduje vendor-specifické ovladače na straně hosta i hypervizoru.",
        "sectionNumber": "9.3.17",
        "sectionTitle": "GPUs and Virtualisation"
      },
      {
        "uuid": "44829cd7-15af-42e5-afe8-d6c9ffd57fec",
        "correct": "Síťové grafické protokoly jako X11 jsou pro sdílení GPU méně efektivní než specializované metody.",
        "incorrect": "Síťové grafické protokoly jako X11 poskytují pro sdílení GPU nejvyšší možnou efektivitu.",
        "sectionNumber": "9.3.17",
        "sectionTitle": "GPUs and Virtualisation"
      },
      {
        "uuid": "66527bad-4aa1-4126-b0be-452346497847",
        "correct": "Při paravirtualizaci GPU hostující systém potřebuje uživatelskou část ovladače GPU pro generování příkazů.",
        "incorrect": "Při paravirtualizaci GPU hostující systém nepotřebuje žádnou část ovladače GPU.",
        "sectionNumber": "9.3.17",
        "sectionTitle": "GPUs and Virtualisation"
      },
      {
        "uuid": "f85bfee8-1e2f-4560-96ad-ef82bed97e4a",
        "correct": "Periferní zařízení jako tiskárny a skenery mohou být sdíleny přes standardní sítě bez ztráty výkonu.",
        "incorrect": "Periferní zařízení jako tiskárny a skenery nemohou být sdíleny přes standardní sítě bez ztráty výkonu.",
        "sectionNumber": "9.3.18",
        "sectionTitle": "Peripherals"
      },
      {
        "uuid": "5ede9177-5d47-4378-8fa4-729889b63437",
        "correct": "Sdílení periférií typu passthrough využívá virtualizaci sběrnic PCI, USB nebo SATA.",
        "incorrect": "Sdílení periférií typu passthrough využívá virtualizaci pouze sběrnice PCI.",
        "sectionNumber": "9.3.18",
        "sectionTitle": "Peripherals"
      },
      {
        "uuid": "ccd005a4-9014-476d-9be4-21773205c089",
        "correct": "Některá audio zařízení mohou být sdílena přes standardní sítě s mírným zvýšením latence.",
        "incorrect": "Všechna audio zařízení nemohou být sdílena přes standardní sítě.",
        "sectionNumber": "9.3.18",
        "sectionTitle": "Peripherals"
      },
      {
        "uuid": "e2ee40c1-e310-4198-a216-eff82d0af26e",
        "correct": "Passthrough periférií zahrnuje přesměrování na skutečné zařízení, například USB disk.",
        "incorrect": "Passthrough periférií zahrnuje virtualizaci celého fyzického zařízení.",
        "sectionNumber": "9.3.18",
        "sectionTitle": "Peripherals"
      },
      {
        "uuid": "017ca9ae-ead4-48fe-8d10-c4a2c4ab1dc3",
        "correct": "Virtuální stroj lze snadno zastavit a uložit jeho stav do souboru na hostitelském systému.",
        "incorrect": "Virtuální stroj lze zastavit, ale jeho stav nelze uložit do souboru.",
        "sectionNumber": "9.3.19",
        "sectionTitle": "Suspend & Resume"
      },
      {
        "uuid": "3e32e59c-4138-4e80-883f-026e439bce2e",
        "correct": "RAM paměť zastaveného virtuálního stroje může být zkopírována do souboru spolu s registry.",
        "incorrect": "RAM paměť běžícího virtuálního stroje může být zkopírována do souboru.",
        "sectionNumber": "9.3.19",
        "sectionTitle": "Suspend & Resume"
      },
      {
        "uuid": "83dc46a8-7d62-41f4-a733-ce7c63d2bdac",
        "correct": "Pro uspání virtuálního stroje není nutná spolupráce hostovaného operačního systému.",
        "incorrect": "Pro uspání virtuálního stroje je nezbytná aktivní spolupráce hostovaného operačního systému.",
        "sectionNumber": "9.3.19",
        "sectionTitle": "Suspend & Resume"
      },
      {
        "uuid": "c7e80b4b-ef46-462f-99d3-3dcbffc58229",
        "correct": "Stav virtuálního stroje může být uložen a odeslán po síti pro pozdější obnovení.",
        "incorrect": "Stav virtuálního stroje nemůže být uložen a odeslán po síti pro pozdější obnovení.",
        "sectionNumber": "9.3.20",
        "sectionTitle": "Migration Basics"
      },
      {
        "uuid": "1ad48848-304f-462a-90c2-44e6d568b278",
        "correct": "Obnovení virtuálního stroje na jiném hostiteli se nazývá \"paused migration\".",
        "incorrect": "Obnovení virtuálního stroje na jiném hostiteli se nazývá \"live migration\".",
        "sectionNumber": "9.3.20",
        "sectionTitle": "Migration Basics"
      },
      {
        "uuid": "7a356cb8-80e2-400d-8a0f-e9a9f616d566",
        "correct": "Pauzovaná migrace vyžaduje, aby virtuální prostředí bylo na obou hostitelích kompatibilní.",
        "incorrect": "Pauzovaná migrace nevyžaduje, aby virtuální prostředí bylo na obou hostitelích kompatibilní.",
        "sectionNumber": "9.3.20",
        "sectionTitle": "Migration Basics"
      },
      {
        "uuid": "c886789a-11ab-486b-8fb8-a1b982b0489a",
        "correct": "Živá migrace virtuálního stroje využívá asynchronní snímky paměti.",
        "incorrect": "Živá migrace virtuálního stroje využívá synchronní snímky paměti.",
        "sectionNumber": "9.3.21",
        "sectionTitle": "Live Migration"
      },
      {
        "uuid": "d25b9519-fbe9-42ea-9b58-733fd89b7152",
        "correct": "Při živé migraci hostitel kopíruje stránky paměti a označuje je jako read-only.",
        "incorrect": "Při živé migraci hostitel kopíruje stránky paměti a označuje je jako write-only.",
        "sectionNumber": "9.3.21",
        "sectionTitle": "Live Migration"
      },
      {
        "uuid": "3db4bd96-632a-41a6-9ce7-3944ea62bee7",
        "correct": "Během živé migrace se nejprve odešle snímek paměti a poté změněné stránky.",
        "incorrect": "Během živé migrace se nejprve odešlou změněné stránky a poté snímek paměti.",
        "sectionNumber": "9.3.21",
        "sectionTitle": "Live Migration"
      },
      {
        "uuid": "bbd4f3d3-c4d5-4fd2-9b00-d02e663e1f5b",
        "correct": "Copy-on-write mechanism v živé migraci spočívá v označení stránek jako read-only před jejich kopírováním.",
        "incorrect": "Copy-on-write mechanism v živé migraci spočívá v označení stránek jako read-write před jejich kopírováním.",
        "sectionNumber": "9.3.21",
        "sectionTitle": "Live Migration"
      },
      {
        "uuid": "e9a2fb4c-5a71-4ff8-b743-7000746fbbc3",
        "correct": "VM je pozastaven pouze krátce na konci živé migrace pro odeslání registrů a posledních stránek.",
        "incorrect": "VM je pozastaven na začátku živé migrace, aby se mohl odeslat snímek paměti.",
        "sectionNumber": "9.3.21",
        "sectionTitle": "Live Migration"
      },
      {
        "uuid": "3ae9e15c-cf37-4c4d-8b1c-ead9366226b2",
        "correct": "Hypervisor alokuje paměť virtuálním strojům na vyžádání, ale operační systémy obvykle nemají koncept dealokace fyzické paměti.",
        "incorrect": "Hypervisor alokuje paměť virtuálním strojům staticky a operační systémy běžně dealokují fyzickou paměť.",
        "sectionNumber": "9.3.22",
        "sectionTitle": "Memory Ballooning"
      },
      {
        "uuid": "7b9f7558-373a-4740-823f-4fd319621773",
        "correct": "Paměťový ballooning driver vrací nevyužitou \"fyzickou\" paměť hostitelskému operačnímu systému ve virtualizovaném prostředí.",
        "incorrect": "Paměťový ballooning driver alokuje dodatečnou \"fyzickou\" paměť pro hostitelský operační systém ve virtualizovaném prostředí.",
        "sectionNumber": "9.3.22",
        "sectionTitle": "Memory Ballooning"
      },
      {
        "uuid": "22648213-6569-4e6a-ad24-de01b18bd87e",
        "correct": "Při použití memory ballooning driveru dochází k odmapování paměti na straně hostitele, což pro hosta znamená ztrátu obsahu paměti.",
        "incorrect": "Při použití memory ballooning driveru dochází k mapování paměti na straně hostitele, což pro hosta znamená zachování obsahu paměti.",
        "sectionNumber": "9.3.22",
        "sectionTitle": "Memory Ballooning"
      },
      {
        "uuid": "cc496e1e-0f0f-46cb-9836-a66f8d13763f",
        "correct": "Operační systémy běžící ve virtuálních strojích obvykle nemají zabudovanou funkcionalitu pro vracení fyzické paměti hypervizoru.",
        "incorrect": "Operační systémy běžící ve virtuálních strojích mají zabudovanou funkcionalitu pro automatické vracení fyzické paměti hypervizoru.",
        "sectionNumber": "9.3.22",
        "sectionTitle": "Memory Ballooning"
      }
    ]
  },
  {
    "uuid": "045b187c-821b-4a56-9ef5-19b8812653de",
    "sectionNumber": "10",
    "sectionTitle": "Soubory a souborové systémy",
    "statements": [
      {
        "uuid": "c0d3dcf0-f255-42d2-a0db-06de0c382493",
        "correct": "Datové struktury souborového systému musí minimalizovat počet bloků potřebných pro danou operaci.",
        "incorrect": "Datové struktury souborového systému se primárně zaměřují na maximalizaci počtu bloků pro operaci.",
        "sectionNumber": "10.3.1",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "843aa1af-e6d7-41ea-8ccf-3b212f17e513",
        "correct": "Robustnost vůči přerušení operací je klíčová vlastnost datových struktur souborového systému.",
        "incorrect": "Pro datové struktury souborového systému není robustnost vůči přerušení operací důležitá.",
        "sectionNumber": "10.3.1",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "f68d87c3-1ff3-49ff-adf9-2c113561be2b",
        "correct": "Klasické zřetězené seznamy nejsou vhodné pro souborové systémy kvůli mnoha navazujícím operacím s malým objemem dat.",
        "incorrect": "Klasické zřetězené seznamy jsou ideální pro souborové systémy díky efektivnímu využití paměti.",
        "sectionNumber": "10.3.1",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "6faf312c-9805-453b-a03d-ab8c8a5c53c6",
        "correct": "Vyvažování stromů rotacemi může být nevhodné pro souborové systémy kvůli riziku ztráty dat při přerušení.",
        "incorrect": "Rotace pro vyvažování stromů jsou preferovanou metodou v souborových systémech pro zvýšení výkonu.",
        "sectionNumber": "10.3.1",
        "sectionTitle": "Datové struktury"
      },
      {
        "uuid": "53afcbfa-d539-4fd1-809c-cb27c35447bb",
        "correct": "Bitmapa se v souborových systémech používá pro mapování volných a využitých datových bloků.",
        "incorrect": "Bitmapa se v souborových systémech používá pro správu metadat souborů, nikoliv datových bloků.",
        "sectionNumber": "10.3.2",
        "sectionTitle": "Bitmapa"
      },
      {
        "uuid": "c6b827b4-d22d-4e56-890e-95db1c59e015",
        "correct": "Každý bit v bitmapě reprezentuje stav jednoho datového bloku, typicky zda je blok volný nebo využitý.",
        "incorrect": "Každý bit v bitmapě reprezentuje stav souboru a obsahuje informace o jeho oprávněních.",
        "sectionNumber": "10.3.2",
        "sectionTitle": "Bitmapa"
      },
      {
        "uuid": "a00ed7f7-5fed-47ef-963d-a3ae40ef93f1",
        "correct": "Díky kompaktní reprezentaci bitmapy je možné rychle prohledávat velké diskové oblasti pro nalezení volného místa.",
        "incorrect": "Kvůli nekompaktní reprezentaci bitmapy je prohledávání velkých diskových oblastí pomalé a neefektivní.",
        "sectionNumber": "10.3.2",
        "sectionTitle": "Bitmapa"
      },
      {
        "uuid": "d8b7ec4c-0eca-4fd5-8bef-677d91b84888",
        "correct": "Zápis do bitmapy je považován za robustní, protože operace jsou jednoduché a bez složitých odkazů.",
        "incorrect": "Zápis do bitmapy je náchylný k chybám kvůli složité struktuře odkazů mezi bity a datovými bloky.",
        "sectionNumber": "10.3.2",
        "sectionTitle": "Bitmapa"
      },
      {
        "uuid": "6c476412-5cc6-41be-b200-c770c55f8e09",
        "correct": "Bitmapa umožňuje rychlé vyhledávání volných bloků i přesto, že asymptotická složitost vyhledávání je lineární.",
        "incorrect": "Bitmapa je pomalá při vyhledávání volných bloků kvůli její logaritmické asymptotické složitosti.",
        "sectionNumber": "10.3.2",
        "sectionTitle": "Bitmapa"
      },
      {
        "uuid": "66e1682e-a826-4195-8c5c-a7c0aaddbc36",
        "correct": "Tabulky v souborovém systému jsou souvislé oblasti paměti obsahující řádky fixní velikosti, obvykle navržené tak, aby se jich vešel celočíselný počet do bloku.",
        "incorrect": "Tabulky v souborovém systému jsou souvislé oblasti paměti obsahující řádky fixní velikosti, jejichž velikost není závislá na velikosti bloku.",
        "sectionNumber": "10.3.3",
        "sectionTitle": "Tabulka"
      },
      {
        "uuid": "425744f9-d4ac-402f-87c7-ea3cfec904fb",
        "correct": "Pro alokaci řádků v tabulce se běžně používá bitmapa a pro odkazování na řádky stačí znát jejich index.",
        "incorrect": "Pro alokaci řádků v tabulce se běžně používá spojový seznam a pro odkazování na řádky stačí znát jejich index.",
        "sectionNumber": "10.3.3",
        "sectionTitle": "Tabulka"
      },
      {
        "uuid": "4db4754b-80c9-4c28-ae2a-49e4ca58e52f",
        "correct": "Tabulky v souborovém systému jsou obvykle alokovány pevně při jeho vzniku, což může vést k neefektivnímu využití místa.",
        "incorrect": "Tabulky v souborovém systému jsou obvykle alokovány dynamicky během běhu systému pro efektivnější využití místa.",
        "sectionNumber": "10.3.3",
        "sectionTitle": "Tabulka"
      },
      {
        "uuid": "39d2f8b3-b080-44be-9f77-5c5990f7488f",
        "correct": "B-stromy jsou samovyvažovací vyhledávací stromy s logaritmickou hloubkou a složitostí operací.",
        "incorrect": "B-stromy nejsou samovyvažovací vyhledávací stromy s logaritmickou hloubkou a složitostí operací.",
        "sectionNumber": "10.3.4",
        "sectionTitle": "B-strom"
      },
      {
        "uuid": "03f26396-bbb9-4a3f-ac53-042aefe8c835",
        "correct": "B-strom je n-ární strom, kde každý uzel může mít desítky až stovky potomků, což zmenšuje hloubku stromu.",
        "incorrect": "B-strom je binární strom, kde každý uzel může mít desítky až stovky potomků, což zmenšuje hloubku stromu.",
        "sectionNumber": "10.3.4",
        "sectionTitle": "B-strom"
      },
      {
        "uuid": "775eeb55-07a3-4d05-9110-e966ddff4795",
        "correct": "Optimalizace B-stromů pro blokové operace spočívá v nastavení velikosti uzlu na velikost diskového bloku.",
        "incorrect": "Optimalizace B-stromů pro blokové operace nespočívá v nastavení velikosti uzlu na velikost diskového bloku.",
        "sectionNumber": "10.3.4",
        "sectionTitle": "B-strom"
      },
      {
        "uuid": "bbd9ee9c-56ca-483b-85e1-b5473a4a7eb5",
        "correct": "B-stromy jsou univerzální datové struktury, které mohou reprezentovat adresáře a být základem souborových systémů.",
        "incorrect": "B-stromy nejsou univerzální datové struktury, a nemohou reprezentovat adresáře ani být základem souborových systémů.",
        "sectionNumber": "10.3.4",
        "sectionTitle": "B-strom"
      },
      {
        "uuid": "6de774b6-3052-404f-b49e-fae8772b87d7",
        "correct": "Kvůli složitosti implementace B-stromů může být obtížné zajistit konzistenci dat při operacích zápisu.",
        "incorrect": "Kvůli jednoduchosti implementace B-stromů je snadné zajistit konzistenci dat při operacích zápisu.",
        "sectionNumber": "10.3.4",
        "sectionTitle": "B-strom"
      },
      {
        "uuid": "78ebd36e-decb-4efe-9eb5-917bacee5e4d",
        "correct": "Konzistence metadat souborového systému může být narušena mezi daty a metadaty.",
        "incorrect": "Konzistence metadat souborového systému může být narušena pouze v metadatech.",
        "sectionNumber": "10.3.5",
        "sectionTitle": "Konzistence"
      },
      {
        "uuid": "951df37a-1ea9-4498-bf01-70f290cfbd42",
        "correct": "Přerušení kritické operace, jako výpadek napájení, může způsobit nekonzistenci souborového systému.",
        "incorrect": "Přerušení nekritické operace, jako restart aplikace, může způsobit nekonzistenci souborového systému.",
        "sectionNumber": "10.3.5",
        "sectionTitle": "Konzistence"
      },
      {
        "uuid": "ed7076cc-5f4f-4727-baf9-9a5cd480f565",
        "correct": "Narušení B-stromu, kdy uzel není platný, představuje porušení konzistence jednotlivé datové struktury.",
        "incorrect": "Narušení B-stromu, kdy uzel není platný, představuje porušení konzistence mezi daty a metadaty.",
        "sectionNumber": "10.3.5",
        "sectionTitle": "Konzistence"
      },
      {
        "uuid": "1c52c541-47f7-4320-90f1-2a758567057b",
        "correct": "Konfliktní informace v bitmapě a metadatech tabulky je příkladem nekonzistence mezi strukturami.",
        "incorrect": "Konfliktní informace uvnitř jedné bitmapy je příkladem nekonzistence mezi strukturami.",
        "sectionNumber": "10.3.5",
        "sectionTitle": "Konzistence"
      },
      {
        "uuid": "441578eb-bc79-496d-8b32-b8bdd4e12618",
        "correct": "Nesoulad mezi metadaty vlastníka souboru a daty uživatele v blocích je nekonzistence metadat a dat.",
        "incorrect": "Nesoulad mezi metadaty vlastníka souboru a názvem souboru je nekonzistence metadat a dat.",
        "sectionNumber": "10.3.5",
        "sectionTitle": "Konzistence"
      },
      {
        "uuid": "e283e896-453d-4d68-97d5-cfe06a9424a2",
        "correct": "Žurnál souborového systému obsahuje sekvenci záznamů o akcích, které se mají provést, pro zajištění konzistence metadat.",
        "incorrect": "Žurnál souborového systému obsahuje sekvenci záznamů o akcích, které se již provedly, pro urychlení zápisu metadat.",
        "sectionNumber": "10.3.6",
        "sectionTitle": "Žurnál"
      },
      {
        "uuid": "5d100d7b-1bce-412c-9c8f-de8edab79991",
        "correct": "Záznamy v žurnálu souborového systému jsou seskupeny do transakcí, které zaručují atomicitu operací s metadaty.",
        "incorrect": "Záznamy v žurnálu souborového systému jsou seskupeny do transakcí, které primárně slouží k optimalizaci diskového prostoru.",
        "sectionNumber": "10.3.6",
        "sectionTitle": "Žurnál"
      },
      {
        "uuid": "8e1c58c2-3b8b-4be1-9f52-de2dfbc8de64",
        "correct": "Použití žurnálu v souborovém systému snižuje riziko poškození metadat a umožňuje rychlejší zotavení po havárii.",
        "incorrect": "Použití žurnálu v souborovém systému zvyšuje riziko poškození metadat a zpomaluje zotavení po havárii.",
        "sectionNumber": "10.3.6",
        "sectionTitle": "Žurnál"
      },
      {
        "uuid": "257dd988-b0bc-4213-8069-7d88e77920b9",
        "correct": "Záznamy v žurnálu souborového systému musí být idempotentní, aby opakovaná aplikace záznamu nezpůsobila nekonzistenci.",
        "incorrect": "Záznamy v žurnálu souborového systému nemusí být idempotentní, protože se nikdy neaplikují více než jednou.",
        "sectionNumber": "10.3.6",
        "sectionTitle": "Žurnál"
      },
      {
        "uuid": "cc2d59e8-4b9c-453d-a054-b379b6b551f5",
        "correct": "Souborový systém ext4 používá dvouúrovňový žurnál, kde JBD2 tvoří fyzickou vrstvu a fast commit logickou vrstvu.",
        "incorrect": "Souborový systém ext4 používá pouze jedinou úroveň žurnálu, která kombinuje fyzické i logické aspekty operací.",
        "sectionNumber": "10.3.6",
        "sectionTitle": "Žurnál"
      },
      {
        "uuid": "c983d92e-36af-494f-a9a0-58f356fab5e8",
        "correct": "Při úpravě metadat se vytváří nová verze datové struktury namísto úpravy stávající.",
        "incorrect": "Při úpravě metadat se datová struktura upravuje přímo na místě bez vytváření kopie.",
        "sectionNumber": "10.3.7",
        "sectionTitle": "Funkcionální metadata"
      },
      {
        "uuid": "15e2271e-0243-4774-87aa-9260d9c0459f",
        "correct": "Tento přístup je vhodný pro stromové datové struktury, jako jsou B-stromy v souborových systémech.",
        "incorrect": "Tento přístup je nejvhodnější pro lineární datové struktury, jako jsou spojové seznamy.",
        "sectionNumber": "10.3.7",
        "sectionTitle": "Funkcionální metadata"
      },
      {
        "uuid": "85a288ad-168a-47dc-bb66-4fe20c8799c7",
        "correct": "Synchronizace zápisu nového kořene stromu zajišťuje konzistenci metadat.",
        "incorrect": "Konzistence metadat je zajištěna i bez synchronizace zápisu nového kořene stromu.",
        "sectionNumber": "10.3.7",
        "sectionTitle": "Funkcionální metadata"
      },
      {
        "uuid": "acdcc724-da35-42c4-970a-59bae12d7ec7",
        "correct": "Cílem správy volných bloků je rychlé nalezení volného místa a minimalizace externí fragmentace.",
        "incorrect": "Cílem správy volných bloků je pomalé nalezení volného místa a maximalizace externí fragmentace.",
        "sectionNumber": "10.3.8",
        "sectionTitle": "Prázdné místo"
      },
      {
        "uuid": "67cccae3-203f-4d20-badd-9eef5589e410",
        "correct": "Pro organizaci volných bloků se často používají bitmapy nebo B-stromy.",
        "incorrect": "Pro organizaci volných bloků se často používají spojové seznamy nebo kruhové fronty.",
        "sectionNumber": "10.3.8",
        "sectionTitle": "Prázdné místo"
      },
      {
        "uuid": "cc5195e6-b5e6-431d-aff0-2c471c27c93c",
        "correct": "V B-stromě pro správu volných bloků může být klíčem adresa prvního bloku volné skupiny.",
        "incorrect": "V B-stromě pro správu volných bloků musí být klíčem velikost volné skupiny.",
        "sectionNumber": "10.3.8",
        "sectionTitle": "Prázdné místo"
      },
      {
        "uuid": "30b399d4-74fc-4ea6-add1-6ae75b64c938",
        "correct": "Některé B-stromy pro volné bloky používají velikost volné oblasti jako hlavní klíč a adresu jako vedlejší.",
        "incorrect": "Všechny B-stromy pro volné bloky používají velikost volné oblasti jako hlavní klíč.",
        "sectionNumber": "10.3.8",
        "sectionTitle": "Prázdné místo"
      },
      {
        "uuid": "e55c8567-589b-41d7-adda-b70b1e427503",
        "correct": "Některé souborové systémy rozdělují disk na alokační skupiny s vlastními bitmapami a i-uzly.",
        "incorrect": "Všechny souborové systémy rozdělují disk na alokační skupiny s vlastními bitmapami a i-uzly.",
        "sectionNumber": "10.3.8",
        "sectionTitle": "Prázdné místo"
      },
      {
        "uuid": "6b59a164-1c28-4b98-9cae-ae1bb317a709",
        "correct": "Externí fragmentace nastává, když volné místo na disku není souvislé, například po smazání starých souborů.",
        "incorrect": "Externí fragmentace popisuje situaci, kdy jsou data jednoho souboru uložena v nesouvislých blocích.",
        "sectionNumber": "10.3.9",
        "sectionTitle": "Externí a datová fragmentace"
      },
      {
        "uuid": "740299c0-7f69-4cdd-958a-7f39d5b58ab6",
        "correct": "Datová fragmentace souborů zhoršuje efektivitu čtení dat z disku kvůli nutnosti přeskakování mezi fragmenty.",
        "incorrect": "Datová fragmentace zlepšuje efektivitu čtení souborů, protože data jsou lépe uspořádána.",
        "sectionNumber": "10.3.9",
        "sectionTitle": "Externí a datová fragmentace"
      },
      {
        "uuid": "ccba3b3e-8896-4743-8d98-d196b77d5816",
        "correct": "Fragmentace souborového systému vede ke zvětšení metadat potřebných pro správu souborů a jejich umístění.",
        "incorrect": "Fragmentace souborového systému snižuje objem metadat nutných pro správu souborů na disku.",
        "sectionNumber": "10.3.9",
        "sectionTitle": "Externí a datová fragmentace"
      },
      {
        "uuid": "f15b2938-46fc-4792-8ac7-b298115436e7",
        "correct": "Extenty pro reprezentaci datových bloků souboru mohou být úspornější a efektivnější než tradiční tabulky přímých a nepřímých odkazů.",
        "incorrect": "Extenty pro reprezentaci datových bloků souboru jsou vždy méně úsporné a méně efektivní než tradiční tabulky přímých a nepřímých odkazů.",
        "sectionNumber": "10.3.10",
        "sectionTitle": "Obyčejné soubory"
      },
      {
        "uuid": "eefcae1f-b72d-49c0-8e23-7b7c72b2f391",
        "correct": "Vyhledávání datového bloku podle offsetu v metadatech s extenty může být lineární v závislosti na délce tabulky extentů.",
        "incorrect": "Vyhledávání datového bloku podle offsetu v metadatech s extenty je vždy konstantní bez ohledu na délku tabulky extentů.",
        "sectionNumber": "10.3.10",
        "sectionTitle": "Obyčejné soubory"
      },
      {
        "uuid": "40622c0c-709b-4339-8fae-5e6cbbf7d842",
        "correct": "Rozsahy (extenty) datových bloků lze kombinovat s tabulkami i B-stromy pro správu metadat souborů.",
        "incorrect": "Rozsahy (extenty) datových bloků lze kombinovat pouze s B-stromy, nikoliv s tabulkami pro správu metadat souborů.",
        "sectionNumber": "10.3.10",
        "sectionTitle": "Obyčejné soubory"
      },
      {
        "uuid": "70b8da5d-b87f-48f1-986e-be2508688710",
        "correct": "Při čtení celého souboru je celková složitost přístupu k datům s extenty asymptoticky stejná, ale prakticky lepší než u tabulek jednotlivých bloků.",
        "incorrect": "Při čtení celého souboru je celková složitost přístupu k datům s extenty asymptoticky horší a prakticky horší než u tabulek jednotlivých bloků.",
        "sectionNumber": "10.3.10",
        "sectionTitle": "Obyčejné soubory"
      },
      {
        "uuid": "d757b1fc-6c3a-4145-9f2f-22cb7a63dab0",
        "correct": "Vnitřní fragmentace vzniká, protože soubory se ukládají v blocích pevné velikosti.",
        "incorrect": "Vnitřní fragmentace nevzniká, protože soubory se ukládají v blocích pevné velikosti.",
        "sectionNumber": "10.3.11",
        "sectionTitle": "Vnitřní fragmentace"
      },
      {
        "uuid": "a020500e-11ea-4f67-b09f-a70175b78f19",
        "correct": "Zarovnání souborů na hranice bloků může vést k vnitřní fragmentaci paměti.",
        "incorrect": "Zarovnání souborů na hranice bloků vždy zabraňuje vnitřní fragmentaci paměti.",
        "sectionNumber": "10.3.11",
        "sectionTitle": "Vnitřní fragmentace"
      },
      {
        "uuid": "dfbd0f22-436b-47f8-b008-25987272d2d8",
        "correct": "Vnitřní fragmentace představuje nevyužité místo uvnitř alokovaných bloků souboru.",
        "incorrect": "Vnitřní fragmentace představuje nevyužité místo mezi alokovanými bloky souboru.",
        "sectionNumber": "10.3.11",
        "sectionTitle": "Vnitřní fragmentace"
      },
      {
        "uuid": "9e9f636e-a105-46ae-8618-7e3de0b23772",
        "correct": "Klasické reprezentace složek mají lineární složitost vyhledávání, což je neefektivní pro velké adresáře.",
        "incorrect": "Klasické reprezentace složek mají konstantní složitost vyhledávání, což je efektivní i pro velké adresáře.",
        "sectionNumber": "10.3.12",
        "sectionTitle": "Adresáře"
      },
      {
        "uuid": "510f5a04-1d5f-40e6-8da5-923b8f250ef0",
        "correct": "Hašované složky ukládají položky do hašovací tabulky, iterace vrací položky v náhodném pořadí.",
        "incorrect": "Hašované složky ukládají položky seřazené podle jména, iterace vrací položky v uspořádaném pořadí.",
        "sectionNumber": "10.3.12",
        "sectionTitle": "Adresáře"
      },
      {
        "uuid": "3164a9bb-9316-498a-a649-bd7bb7c59437",
        "correct": "Stromové složky využívají B-stromy v metadatech, operace mají logaritmickou časovou složitost.",
        "incorrect": "Stromové složky využívají hašovací tabulky v datových blocích, operace mají konstantní časovou složitost.",
        "sectionNumber": "10.3.12",
        "sectionTitle": "Adresáře"
      },
      {
        "uuid": "f64407c0-5b10-4dc2-9b2a-9a1492088c1c",
        "correct": "Pro malé složky může být klasická reprezentace dostačující, ale pro velké se stává nepraktickou.",
        "incorrect": "Pro malé složky je stromová reprezentace nejefektivnější, zatímco klasická je vždy nepraktická.",
        "sectionNumber": "10.3.12",
        "sectionTitle": "Adresáře"
      },
      {
        "uuid": "6e6431c7-7ea0-4a4d-96a2-dfc621e14210",
        "correct": "Stromové složky zaručují logaritmickou složitost všech operací a vrací položky seřazené podle jména.",
        "incorrect": "Stromové složky zaručují konstantní složitost všech operací a vrací položky v náhodném pořadí.",
        "sectionNumber": "10.3.12",
        "sectionTitle": "Adresáře"
      },
      {
        "uuid": "688db036-7491-4085-8b99-2ccad04907c4",
        "correct": "V systému UNIX jsou všechny souborové systémy sjednoceny do jediné hierarchie.",
        "incorrect": "V systému UNIX má každý souborový systém vlastní hierarchii reprezentovanou písmenem disku.",
        "sectionNumber": "10.3.13",
        "sectionTitle": "Mounts"
      },
      {
        "uuid": "ec02628e-f669-4d6a-a14e-58b7940ff8cb",
        "correct": "V UNIXu se kořenový adresář jednoho souborového systému stává připojovacím bodem v jiném souborovém systému.",
        "incorrect": "V UNIXu se kořenový adresář jednoho souborového systému stává kořenovým adresářem celého systému.",
        "sectionNumber": "10.3.13",
        "sectionTitle": "Mounts"
      },
      {
        "uuid": "67f91806-d973-4b6a-90c3-ecf9400bdc0d",
        "correct": "Systém Windows používá písmena jednotek, jako například C: a D:, k reprezentaci samostatných souborových systémů.",
        "incorrect": "Systém Windows sjednocuje všechny souborové systémy do jediné hierarchie, podobně jako UNIX.",
        "sectionNumber": "10.3.13",
        "sectionTitle": "Mounts"
      },
      {
        "uuid": "21a70d91-3455-443d-8e3c-09528ff14a03",
        "correct": "Pokud se v UNIXu připojí souborový systém na neprázdný adresář, původní obsah tohoto adresáře se skryje.",
        "incorrect": "Pokud se v UNIXu připojí souborový systém na neprázdný adresář, původní obsah tohoto adresáře se sloučí s obsahem připojeného systému.",
        "sectionNumber": "10.3.13",
        "sectionTitle": "Mounts"
      },
      {
        "uuid": "b33cb1ac-8e75-4a69-8261-ecab7ac51b3a",
        "correct": "V systému UNIX je jeden souborový systém vybrán jako kořenový, jehož kořenový adresář '/' je stejný jako kořenový adresář systému.",
        "incorrect": "V systému UNIX jsou všechny souborové systémy považovány za kořenové a mají kořenový adresář '/’.",
        "sectionNumber": "10.3.13",
        "sectionTitle": "Mounts"
      }
    ]
  },
  {
    "uuid": "a696dee9-3091-4a3e-9d9b-88b4bf4c1266",
    "sectionNumber": "11",
    "sectionTitle": "Síť a sockety",
    "statements": [
      {
        "uuid": "85b747b2-134d-4f51-888d-d4076fc8f006",
        "correct": "Hostname je pro člověka čitelné jméno počítače v síti.",
        "incorrect": "Hostname je strojově čitelné binární číslo reprezentující počítač v síti.",
        "sectionNumber": "11.1.1",
        "sectionTitle": "Host and Domain Names"
      },
      {
        "uuid": "568a66f2-91a6-46d0-9f72-64cb484dfd78",
        "correct": "Plně kvalifikované jméno (FQDN) udává jméno počítače a sítě.",
        "incorrect": "Plně kvalifikované jméno (FQDN) udává pouze jméno počítače bez sítě.",
        "sectionNumber": "11.1.1",
        "sectionTitle": "Host and Domain Names"
      },
      {
        "uuid": "8a22706d-9123-4478-8bf0-2eeebcb6fc82",
        "correct": "U lokálních hostnamech může být lokální přípona sítě vynechána.",
        "incorrect": "U lokálních hostnamech musí být lokální přípona sítě vždy uvedena.",
        "sectionNumber": "11.1.1",
        "sectionTitle": "Host and Domain Names"
      },
      {
        "uuid": "f521dee4-3c07-4d15-a14b-4b4bcb58fe34",
        "correct": "IPv4 adresa se skládá ze čtyř oktetů, což je pro počítače srozumitelný numerický formát.",
        "incorrect": "IPv4 adresa se skládá ze šesti oktetů, což je formát používaný pro Ethernet protokoly.",
        "sectionNumber": "11.1.2",
        "sectionTitle": "Network Addresses"
      },
      {
        "uuid": "629c815f-cf26-460b-834c-7819e8a3249d",
        "correct": "IPv6 adresy využívají šestnáct oktetů pro adresování v moderních počítačových sítích.",
        "incorrect": "IPv6 adresy využívají pouze čtyři oktety, podobně jako starší IPv4 adresy.",
        "sectionNumber": "11.1.2",
        "sectionTitle": "Network Addresses"
      },
      {
        "uuid": "6ce9b629-8e60-40d7-a550-7c881669663c",
        "correct": "MAC adresy, typické pro Ethernet, mají délku šesti oktetů a slouží k identifikaci síťových rozhraní.",
        "incorrect": "MAC adresy, typické pro IPv6, mají délku šestnáct oktetů a slouží k identifikaci síťových rozhraní.",
        "sectionNumber": "11.1.2",
        "sectionTitle": "Network Addresses"
      },
      {
        "uuid": "7a99872b-88d5-48cd-ab02-46377b2dda9f",
        "correct": "Pro komunikaci v síti počítače používají numerické adresy, které jsou strojově čitelné, na rozdíl od lidsky čitelných jmen.",
        "incorrect": "Pro komunikaci v síti počítače používají lidsky čitelné názvy, které jsou srozumitelnější než numerické adresy.",
        "sectionNumber": "11.1.2",
        "sectionTitle": "Network Addresses"
      },
      {
        "uuid": "0725766d-2acc-48dd-afff-a7a4cadba7fe",
        "correct": "Oktety v IPv4 adrese jsou řazeny od nejvýznamnějšího bytu (MSB) jako první, což je označováno jako big endian.",
        "incorrect": "Oktety v IPv4 adrese jsou řazeny od nejméně významného bytu (LSB) jako první, což je označováno jako little endian.",
        "sectionNumber": "11.1.2",
        "sectionTitle": "Network Addresses"
      },
      {
        "uuid": "754be9ec-2855-4ef3-9dc2-a53c9ca54e5d",
        "correct": "Lokální sítě (LAN) obvykle pokrývají kanceláře, domácnosti nebo budovy a často tvoří jednu broadcastovou doménu.",
        "incorrect": "Lokální sítě (LAN) obvykle pokrývají rozsáhlá území a vždy tvoří více broadcastových domén.",
        "sectionNumber": "11.1.3",
        "sectionTitle": "Network Types"
      },
      {
        "uuid": "7017085d-bfe0-4a24-a330-fb91861ed756",
        "correct": "Mezi technologie používané v lokálních sítích (LAN) patří Ethernet a WiFi.",
        "incorrect": "Mezi technologie používané výhradně v rozsáhlých sítích (WAN) patří Ethernet a WiFi.",
        "sectionNumber": "11.1.3",
        "sectionTitle": "Network Types"
      },
      {
        "uuid": "c5931aba-28ef-46fb-b660-79e43f106842",
        "correct": "Ethernet, používaný v LAN sítích, dosahuje rychlosti 1 Gb/s nebo i 10 Gb/s.",
        "incorrect": "Ethernet, používaný v LAN sítích, dosahuje rychlosti maximálně 100 Mb/s.",
        "sectionNumber": "11.1.3",
        "sectionTitle": "Network Types"
      },
      {
        "uuid": "07d61cc3-ca49-49de-aefa-9eec4d164d72",
        "correct": "Rozsáhlé sítě (WAN) se často používají pro internet a sítě poskytovatelů internetových služeb (ISP).",
        "incorrect": "Rozsáhlé sítě (WAN) se používají výhradně pro lokální sítě v rámci jedné budovy.",
        "sectionNumber": "11.1.3",
        "sectionTitle": "Network Types"
      },
      {
        "uuid": "9fffd132-0ef3-49f7-bfb9-9bdf2ecea999",
        "correct": "WiFi, standard IEEE 802.11, je bezdrátová technologie používaná v lokálních sítích (LAN) s rychlostí do 1 Gb/s.",
        "incorrect": "WiFi, standard IEEE 802.11, je výhradně kabelová technologie používaná v rozsáhlých sítích (WAN) s rychlostí nad 10 Gb/s.",
        "sectionNumber": "11.1.3",
        "sectionTitle": "Network Types"
      },
      {
        "uuid": "fb6e52d6-5446-4d5b-a1df-5062a38debc5",
        "correct": "TCP/IP model síťové komunikace má čtyři vrstvy.",
        "incorrect": "TCP/IP model síťové komunikace má sedm vrstev.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "303dd3fb-73a2-4f7f-b846-1403e3417a71",
        "correct": "Linková vrstva TCP/IP modelu odpovídá fyzické a datové vrstvě OSI modelu.",
        "incorrect": "Linková vrstva TCP/IP modelu odpovídá pouze fyzické vrstvě OSI modelu.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "552a7d29-cd0e-4055-9ed1-6fcd8575c5dc",
        "correct": "Internetová vrstva TCP/IP modelu je v OSI modelu označována jako vrstva 3.",
        "incorrect": "Internetová vrstva TCP/IP modelu je v OSI modelu označována jako vrstva 4.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "c139d1c0-295a-4ce5-b84d-038d5cd910cd",
        "correct": "Transportní vrstva TCP/IP modelu je v OSI modelu označována jako vrstva 4.",
        "incorrect": "Transportní vrstva TCP/IP modelu je v OSI modelu označována jako vrstva 3.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "bba60e2e-fbc4-4ac6-8ee8-9414a9d43473",
        "correct": "Aplikační vrstva TCP/IP modelu zahrnuje v OSI modelu vrstvy 5 až 7.",
        "incorrect": "Aplikační vrstva TCP/IP modelu zahrnuje v OSI modelu pouze vrstvu 7.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "0264c03e-05a7-4bf7-b24f-c57651e3dadd",
        "correct": "Protokol IP je v OSI modelu definován jako protokol 3. vrstvy.",
        "incorrect": "Protokol IP je v OSI modelu definován jako protokol 4. vrstvy.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "c535a064-5234-4645-9516-ee573eb26bfe",
        "correct": "Protokol TCP je v OSI modelu definován jako protokol 4. vrstvy.",
        "incorrect": "Protokol TCP je v OSI modelu definován jako protokol 3. vrstvy.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "b17649f2-cee8-4323-93b5-233dc4bfa40c",
        "correct": "Číslování vrstev, na které se odkazuje text, odpovídá číslování OSI modelu.",
        "incorrect": "Číslování vrstev, na které se odkazuje text, odpovídá číslování TCP/IP modelu.",
        "sectionNumber": "11.1.4",
        "sectionTitle": "Networking Layers"
      },
      {
        "uuid": "1081ae19-701e-46bf-a49f-5604cd70a6ec",
        "correct": "V monolitických kernelech je významná část síťového stacku součástí jádra.",
        "incorrect": "V monolitických kernelech je pouze malá část síťového stacku součástí jádra.",
        "sectionNumber": "11.1.5",
        "sectionTitle": "Networking and Operating Systems"
      },
      {
        "uuid": "3b2a5324-03d8-4428-9ea0-101673980bde",
        "correct": "Rozhraní sockets API zpřístupňuje síťový stack uživatelským programům v monolitických kernelech.",
        "incorrect": "Rozhraní sockets API se nepoužívá k zpřístupnění síťového stacku uživatelským programům.",
        "sectionNumber": "11.1.5",
        "sectionTitle": "Networking and Operating Systems"
      },
      {
        "uuid": "6f8bef01-d174-4abb-b1fb-39053ab326c9",
        "correct": "Funkce aplikační vrstvy jako DNS a TLS jsou obvykle dostupné v systémových knihovnách.",
        "incorrect": "Funkce aplikační vrstvy jako DNS a TLS jsou obvykle součástí jádra operačního systému.",
        "sectionNumber": "11.1.5",
        "sectionTitle": "Networking and Operating Systems"
      },
      {
        "uuid": "14f48799-3298-4ab3-bfdb-e52c41078698",
        "correct": "TLS je technologie aplikační vrstvy, i když se jmenuje Transport Layer Security.",
        "incorrect": "TLS je technologie transportní vrstvy, jak naznačuje její jméno Transport Layer Security.",
        "sectionNumber": "11.1.5",
        "sectionTitle": "Networking and Operating Systems"
      },
      {
        "uuid": "0948ad06-ac88-4eb5-986f-b244b9d075a9",
        "correct": "Routování a filtrování paketů může být implementováno v jádře operačního systému.",
        "incorrect": "Routování a filtrování paketů je vždy implementováno mimo jádro operačního systému.",
        "sectionNumber": "11.1.6",
        "sectionTitle": "Kernel-Side Networking"
      },
      {
        "uuid": "b0eb89a4-5831-44a3-a185-27bc530d80c5",
        "correct": "Síťové souborové systémy mohou být implementovány v jádře operačního systému.",
        "incorrect": "Síťové souborové systémy nemohou být implementovány v jádře operačního systému.",
        "sectionNumber": "11.1.6",
        "sectionTitle": "Kernel-Side Networking"
      },
      {
        "uuid": "96894be6-d118-41d8-89cd-ecef3bee6b69",
        "correct": "Socket API zpřístupňuje klientskou i serverovou stranu TCP/IP.",
        "incorrect": "Socket API zpřístupňuje pouze klientskou stranu TCP/IP.",
        "sectionNumber": "11.1.6",
        "sectionTitle": "Kernel-Side Networking"
      },
      {
        "uuid": "c8e790fb-44ef-4074-a38c-1dbcba93e853",
        "correct": "Softwarové mosty a přepínače jsou zřídka praktické, ale operační systémy je implementují kvůli virtualizaci.",
        "incorrect": "Softwarové mosty a přepínače jsou běžné a praktické řešení v operačních systémech.",
        "sectionNumber": "11.1.6",
        "sectionTitle": "Kernel-Side Networking"
      },
      {
        "uuid": "20151c94-6f36-4658-b84b-d9b1c57e70c7",
        "correct": "Socket API je součástí systémových knihoven, ale v monolitických jádrech často mapuje 1:1 na systémová volání.",
        "incorrect": "Socket API je výhradně doménou operačního systému a nikdy není součástí systémových knihoven.",
        "sectionNumber": "11.1.7",
        "sectionTitle": "System Libraries"
      },
      {
        "uuid": "5c53b5ed-70b7-4a78-81aa-340000a317f5",
        "correct": "V mikrokernelech se síťový stack dělí jinak a systémové knihovny pravděpodobně přebírají větší podíl práce s Socket API.",
        "incorrect": "V mikrokernelech je Socket API vždy přímo implementováno v jádře operačního systému.",
        "sectionNumber": "11.1.7",
        "sectionTitle": "System Libraries"
      },
      {
        "uuid": "5a3c735f-d986-46a0-91a1-bc6cd1f7fd35",
        "correct": "Překlad hostnames na IP adresy, tedy DNS klient, obvykle spadá do kompetence systémových knihoven.",
        "incorrect": "Překlad hostnames na IP adresy je typicky prováděn výhradně na straně serveru, nikoliv klientských systémových knihoven.",
        "sectionNumber": "11.1.7",
        "sectionTitle": "System Libraries"
      },
      {
        "uuid": "6626904e-48f3-41bd-909e-871cec3c1a28",
        "correct": "Většina moderních operačních systémů poskytuje SSL/TLS stack, který zahrnuje i správu a validaci certifikátů.",
        "incorrect": "Správa certifikátů v rámci SSL/TLS stacku je obvykle ponechána na externích aplikacích, nikoliv na operačním systému.",
        "sectionNumber": "11.1.7",
        "sectionTitle": "System Libraries"
      },
      {
        "uuid": "2ab9f359-054e-4f29-b638-008ab0c4d926",
        "correct": "Konfigurační nástroje jako dhclient slouží k automatické konfiguraci síťových rozhraní.",
        "incorrect": "Konfigurační nástroje jako dhclient slouží výhradně k manuální konfiguraci tiskáren.",
        "sectionNumber": "11.1.8",
        "sectionTitle": "System Utilities & Services"
      },
      {
        "uuid": "ceb42778-6623-44d2-80ab-842bd9244516",
        "correct": "Správa směrování je klíčová pro systémy fungující jako softwarové směrovače.",
        "incorrect": "Správa směrování je irelevantní pro systémy fungující jako softwarové směrovače.",
        "sectionNumber": "11.1.8",
        "sectionTitle": "System Utilities & Services"
      },
      {
        "uuid": "985ff976-296b-491f-9143-480fc3118194",
        "correct": "Diagnostické nástroje jako ping a traceroute pomáhají při ověřování síťové konektivity.",
        "incorrect": "Diagnostické nástroje jako ping a traceroute slouží k monitorování využití procesoru.",
        "sectionNumber": "11.1.8",
        "sectionTitle": "System Utilities & Services"
      },
      {
        "uuid": "d80db21a-2fa8-4776-a7af-1cf67898b7c4",
        "correct": "Tcpdump umožňuje inspekci síťových paketů na úrovni rozhraní.",
        "incorrect": "Tcpdump primárně slouží k nastavení firewallu operačního systému.",
        "sectionNumber": "11.1.8",
        "sectionTitle": "System Utilities & Services"
      },
      {
        "uuid": "503e89cd-b179-4f74-bdf6-d2697ad795d9",
        "correct": "Síťové služby jako ntpd zajišťují synchronizaci systémového času.",
        "incorrect": "Síťové služby jako ntpd slouží k správě uživatelských účtů v systému.",
        "sectionNumber": "11.1.8",
        "sectionTitle": "System Utilities & Services"
      },
      {
        "uuid": "d1ce154c-cb6b-43da-9339-3beaf5240692",
        "correct": "Síťové protokoly se zabývají třemi hlavními aspekty komunikace: pakety, adresováním a doručením.",
        "incorrect": "Síťové protokoly se zabývají pouze dvěma hlavními aspekty komunikace: adresováním a doručením.",
        "sectionNumber": "11.1.9",
        "sectionTitle": "Networking Aspects"
      },
      {
        "uuid": "383ac0f1-84f4-4a44-9de3-ce746a2b947d",
        "correct": "Paket je základní komunikační jednotka, která nese informace v síťových protokolech.",
        "incorrect": "Paket je pouze pomocná datová struktura, která nenese informace v síťových protokolech.",
        "sectionNumber": "11.1.9",
        "sectionTitle": "Networking Aspects"
      },
      {
        "uuid": "d9b1c339-58ae-4872-9d77-e8882045bd0f",
        "correct": "Adresování v síťových protokolech slouží k identifikaci cílových počítačů nebo programů v síti.",
        "incorrect": "Adresování v síťových protokolech slouží pouze k identifikaci fyzických síťových zařízení.",
        "sectionNumber": "11.1.9",
        "sectionTitle": "Networking Aspects"
      },
      {
        "uuid": "96c3e22b-8635-4a4d-b608-089118218da0",
        "correct": "Doručení paketů zahrnuje směrování a případný překlad adres mezi různými vrstvami sítě.",
        "incorrect": "Doručení paketů se týká výhradně fyzického přenosu dat a nezahrnuje směrování.",
        "sectionNumber": "11.1.9",
        "sectionTitle": "Networking Aspects"
      },
      {
        "uuid": "4818ddc8-95ab-4d78-add4-0f1bf7742986",
        "correct": "Protokoly v síťovém stacku běží nad sebou, přičemž vyšší vrstvy využívají abstrakcí poskytovaných nižšími vrstvami.",
        "incorrect": "Protokoly v síťovém stacku běží paralelně vedle sebe a nevyužívají abstrakcí poskytovaných jinými vrstvami.",
        "sectionNumber": "11.1.10",
        "sectionTitle": "Protocol Nesting"
      },
      {
        "uuid": "c748069f-d2c2-42f7-a215-ffccf5910046",
        "correct": "Síťový stack je struktura, kde protokoly vyšších úrovní, jako HTTP, využívají abstrakce nižších úrovní, jako TCP a IP.",
        "incorrect": "Síťový stack je struktura, kde protokoly nižších úrovní, jako IP, poskytují abstrakce protokolům vyšších úrovní, jako HTTP a TCP.",
        "sectionNumber": "11.1.10",
        "sectionTitle": "Protocol Nesting"
      },
      {
        "uuid": "37b09e7e-f3b0-48e1-8cb1-020dcecb3373",
        "correct": "HTTP protokol využívá abstrakce poskytované protokolem TCP, což ilustruje vrstvenou povahu síťového stacku.",
        "incorrect": "HTTP protokol poskytuje abstrakce pro protokol TCP, což ilustruje hierarchickou povahu síťového stacku.",
        "sectionNumber": "11.1.10",
        "sectionTitle": "Protocol Nesting"
      },
      {
        "uuid": "eef93758-bb8a-45ae-8311-1c7fd9191b55",
        "correct": "Ethernetový rámec obaluje IP paket, podobně jako matrjoška obaluje menší loutku.",
        "incorrect": "IP paket obaluje Ethernetový rámec, podobně jako matrjoška obaluje menší loutku.",
        "sectionNumber": "11.1.11",
        "sectionTitle": "Packet Nesting"
      },
      {
        "uuid": "0d9084cf-ea70-46b2-9274-2f1638cecf0f",
        "correct": "Pro nižší vrstvy síťového modelu jsou pakety vyšších vrstev považovány za data.",
        "incorrect": "Pro vyšší vrstvy síťového modelu jsou pakety nižších vrstev považovány za data.",
        "sectionNumber": "11.1.11",
        "sectionTitle": "Packet Nesting"
      },
      {
        "uuid": "1c04f2ea-89e5-4fd3-b76b-91f7fb391fb5",
        "correct": "TCP stream může přenášet HTTP request jako svůj obsah.",
        "incorrect": "HTTP request může přenášet TCP stream jako svůj obsah.",
        "sectionNumber": "11.1.11",
        "sectionTitle": "Packet Nesting"
      },
      {
        "uuid": "decc194b-64b3-48a3-ba26-4014fbd23229",
        "correct": "Přidávání záhlaví k paketům je úkolem nižších vrstev při zapouzdření dat.",
        "incorrect": "Přidávání záhlaví k paketům je úkolem vyšších vrstev při zapouzdření dat.",
        "sectionNumber": "11.1.11",
        "sectionTitle": "Packet Nesting"
      },
      {
        "uuid": "d81f72b9-451a-4f46-9002-289dba31dad3",
        "correct": "Abstraktní doručování je typu point-to-point.",
        "incorrect": "Abstraktní doručování není typu point-to-point.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "6f4d270b-b812-4e8f-a7ac-ff4b90e12899",
        "correct": "Routing je pro vyšší vrstvy převážně skryté.",
        "incorrect": "Routing není pro vyšší vrstvy skryté.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "eae6ed57-e90f-4927-9435-2c860c9f5468",
        "correct": "Vyšší vrstva požaduje doručení na adresu.",
        "incorrect": "Vyšší vrstva požaduje doručení na jméno.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "aed9d97b-ad25-44e6-99c7-15aeae8e5435",
        "correct": "Nižší vrstvy jsou obvykle orientované na pakety.",
        "incorrect": "Nižší vrstvy nejsou orientované na pakety.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "a556e734-ae72-409c-b470-9219ab6fcb5b",
        "correct": "Paket může překročit hranice domén nízké úrovně.",
        "incorrect": "Paket nemůže překročit hranice domén nízké úrovně.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "c9b10436-faea-4061-94ec-159865ee2350",
        "correct": "Doručování v internetové vrstvě má širší rozsah než v linkové vrstvě.",
        "incorrect": "Doručování v linkové vrstvě má širší rozsah než v internetové vrstvě.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "dbd0fd8d-b76b-4f5c-9b63-93859464b3eb",
        "correct": "IP paket běžně prochází několika linkovými doménami.",
        "incorrect": "IP paket nikdy neprochází několika linkovými doménami.",
        "sectionNumber": "11.1.12",
        "sectionTitle": "Stacked Delivery"
      },
      {
        "uuid": "3fe8d9c9-56fe-4f7e-831b-40fe2d63a517",
        "correct": "Pro překlad IP adres na MAC adresy se používá protokol ARP.",
        "incorrect": "Pro překlad IP adres na MAC adresy se používá protokol DNS.",
        "sectionNumber": "11.1.13",
        "sectionTitle": "Layers vs Addressing"
      },
      {
        "uuid": "08435a4e-e173-4f1a-b2da-61b3d58d54b6",
        "correct": "Adresa TCP vrstvy typicky zahrnuje adresu IP vrstvy a číslo portu.",
        "incorrect": "Adresa TCP vrstvy zahrnuje pouze číslo portu, nikoli adresu IP vrstvy.",
        "sectionNumber": "11.1.13",
        "sectionTitle": "Layers vs Addressing"
      },
      {
        "uuid": "1b2aecb4-37fa-4a08-a292-375ed70c0aaa",
        "correct": "Protokol DNS logicky patří do aplikační vrstvy, i když využívá adresy transportní vrstvy.",
        "incorrect": "Protokol DNS logicky patří do transportní vrstvy a využívá adresy transportní vrstvy.",
        "sectionNumber": "11.1.13",
        "sectionTitle": "Layers vs Addressing"
      },
      {
        "uuid": "fbe355d3-c1e7-49e1-bf04-9cd67904457d",
        "correct": "Vyšší vrstvy musí poskytovat správné adresy nižším vrstvám pro doručení dat.",
        "incorrect": "Nižší vrstvy musí poskytovat správné adresy vyšším vrstvám pro doručení dat.",
        "sectionNumber": "11.1.13",
        "sectionTitle": "Layers vs Addressing"
      },
      {
        "uuid": "5c5512f2-37b6-4d2f-83bf-b296bb5882f6",
        "correct": "ARP protokol slouží k nalezení MAC adresy odpovídající dané IP adrese v lokální síti.",
        "incorrect": "ARP protokol slouží k nalezení IP adresy odpovídající dané MAC adrese v lokální síti.",
        "sectionNumber": "11.1.14",
        "sectionTitle": "ARP (Address Resolution Protocol)"
      },
      {
        "uuid": "957ef112-25dc-49de-87b6-a42f9176b3ff",
        "correct": "Pro doručení IP paketu linkovou vrstvou je nezbytné znát MAC adresu cílového zařízení.",
        "incorrect": "Pro doručení IP paketu linkovou vrstvou není nutné znát MAC adresu cílového zařízení.",
        "sectionNumber": "11.1.14",
        "sectionTitle": "ARP (Address Resolution Protocol)"
      },
      {
        "uuid": "4a26e58f-bde9-47b9-81ec-49002bf948c9",
        "correct": "Operační systém buduje mapu překladů IP adres na MAC adresy pomocí ARP protokolu.",
        "incorrect": "Operační systém buduje mapu překladů MAC adres na IP adresy pomocí ARP protokolu.",
        "sectionNumber": "11.1.14",
        "sectionTitle": "ARP (Address Resolution Protocol)"
      },
      {
        "uuid": "9a94f2aa-bd61-4327-baab-29ff4d4373df",
        "correct": "ARP protokol umožňuje internetové vrstvě doručovat pakety s využitím služeb linkové vrstvy.",
        "incorrect": "ARP protokol umožňuje linkové vrstvě doručovat pakety s využitím služeb internetové vrstvy.",
        "sectionNumber": "11.1.14",
        "sectionTitle": "ARP (Address Resolution Protocol)"
      },
      {
        "uuid": "fb7cb2b2-12a2-47b9-9fae-05835f5524d5",
        "correct": "Routery v lokální síti používají ARP protokol pro zjištění MAC adresy cílových zařízení.",
        "incorrect": "Routery v lokální síti nepoužívají ARP protokol pro zjištění MAC adresy cílových zařízení.",
        "sectionNumber": "11.1.14",
        "sectionTitle": "ARP (Address Resolution Protocol)"
      },
      {
        "uuid": "6e85952d-0faf-4300-a4e0-a0b76e8deabc",
        "correct": "Komunikační protokol linkové vrstvy je z velké části implementován hardwarově.",
        "incorrect": "Komunikační protokol linkové vrstvy je implementován výhradně v softwaru operačního systému.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "d2824fc1-ea7c-4d42-b211-be49b25f5223",
        "correct": "Operační systém používá pro příjem a odesílání ethernetových rámců unifikované rozhraní s MAC adresami.",
        "incorrect": "Operační systém používá pro příjem a odesílání ethernetových rámců rozhraní s IP adresami.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "c16a2612-47cc-479c-920e-89f9c8c287c4",
        "correct": "Ethernet je běžně používaný protokol linkové vrstvy.",
        "incorrect": "Ethernet je protokol síťové vrstvy, který se stará o směrování paketů.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "afb381f0-b309-4570-8cc0-3b7262226c74",
        "correct": "Ethernetové sítě s přepínači typicky využívají hvězdicovou topologii fyzických připojení.",
        "incorrect": "Ethernetové sítě s přepínači typicky využívají sběrnicovou topologii fyzických připojení.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "0e04e7ec-221c-4433-bcb4-c8c6bee2ab5e",
        "correct": "Funkce mostů v počítačových sítích se odehrává na linkové vrstvě.",
        "incorrect": "Funkce mostů v počítačových sítích spadá do kompetence síťové vrstvy.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "3466b549-a34f-41ad-8f48-7367184b68d6",
        "correct": "Přepínače se liší od mostů tím, že jsou optimalizovány pro větší počet portů s jednou MAC adresou na port.",
        "incorrect": "Přepínače a mosty se liší pouze počtem portů, ale oba jsou optimalizovány pro mnoho MAC adres na port.",
        "sectionNumber": "11.1.15",
        "sectionTitle": "Ethernet"
      },
      {
        "uuid": "43dfca3e-8029-4f16-a486-f71f300363eb",
        "correct": "Kromě Ethernetu existuje mnoho dalších protokolů linkové vrstvy.",
        "incorrect": "Ethernet je jediný protokol linkové vrstvy.",
        "sectionNumber": "11.1.16",
        "sectionTitle": "Link-Layer Protocols"
      },
      {
        "uuid": "bbbf0a03-1b9d-4cad-b60a-f463901cec15",
        "correct": "PPP je zkratka pro Point-to-Point Protocol.",
        "incorrect": "PPP je zkratka pro Protokol pro přenos paketů.",
        "sectionNumber": "11.1.16",
        "sectionTitle": "Link-Layer Protocols"
      },
      {
        "uuid": "7de61677-09f6-4218-84d7-8fcf14d10e53",
        "correct": "WiFi lze považovat za bezdrátovou verzi Ethernetu.",
        "incorrect": "WiFi je rychlejší a spolehlivější než Ethernet.",
        "sectionNumber": "11.1.16",
        "sectionTitle": "Link-Layer Protocols"
      },
      {
        "uuid": "2bcab80c-3d01-4577-a691-7b1488984ea4",
        "correct": "Protokol PPP je určen pro sítě s dvěma uzly.",
        "incorrect": "Protokol PPP je primárně určen pro rozsáhlé sítě LAN.",
        "sectionNumber": "11.1.16",
        "sectionTitle": "Link-Layer Protocols"
      },
      {
        "uuid": "046b62a6-acd9-4c1f-bd60-7091037e961e",
        "correct": "WiFi vyžaduje šifrování z důvodu možné odposlouchávání komunikace.",
        "incorrect": "WiFi nevyžaduje šifrování, protože je inherentně bezpečný.",
        "sectionNumber": "11.1.16",
        "sectionTitle": "Link-Layer Protocols"
      },
      {
        "uuid": "07564f88-98b0-4cb5-931f-0c6d18ebe307",
        "correct": "Tunely jsou virtuální zařízení druhé nebo třetí vrstvy.",
        "incorrect": "Tunely jsou fyzická zařízení druhé nebo třetí vrstvy.",
        "sectionNumber": "11.1.17",
        "sectionTitle": "Tunneling"
      },
      {
        "uuid": "47e0b888-72a2-409a-aea3-87970cde8be3",
        "correct": "Tunely zapouzdřují provoz v protokolu vyšší vrstvy.",
        "incorrect": "Tunely zapouzdřují provoz v protokolu stejné vrstvy.",
        "sectionNumber": "11.1.17",
        "sectionTitle": "Tunneling"
      },
      {
        "uuid": "634b11a7-0e74-47e3-b0a4-8a3887f5c846",
        "correct": "Tunely se používají ve virtuálních privátních sítích.",
        "incorrect": "Tunely se nepoužívají ve virtuálních privátních sítích.",
        "sectionNumber": "11.1.17",
        "sectionTitle": "Tunneling"
      },
      {
        "uuid": "34b872ad-6501-4953-8fec-5dff6a8fe24e",
        "correct": "Tunelování umožňuje vnoření provozu nižší vrstvy do aplikační vrstvy.",
        "incorrect": "Tunelování umožňuje vnoření provozu aplikační vrstvy do linkové vrstvy.",
        "sectionNumber": "11.1.17",
        "sectionTitle": "Tunneling"
      },
      {
        "uuid": "54018ced-766b-4671-9db0-28a59f41fba7",
        "correct": "IP protokol je paketově orientovaný protokol s nízkou režií.",
        "incorrect": "IP protokol je spojitě orientovaný protokol s nízkou režií.",
        "sectionNumber": "11.2.1",
        "sectionTitle": "IP (Internet Protocol)"
      },
      {
        "uuid": "e142b421-ed15-4905-8e02-08ab4c2eaace",
        "correct": "IP protokol negarantuje doručení paketů ani integritu dat.",
        "incorrect": "IP protokol garantuje spolehlivé doručení paketů a integritu dat.",
        "sectionNumber": "11.2.1",
        "sectionTitle": "IP (Internet Protocol)"
      },
      {
        "uuid": "0d41884e-adb4-4b00-a629-7211986cca26",
        "correct": "V rámci jedné IP sítě se doručení paketů stará linková vrstva.",
        "incorrect": "V rámci jedné IP sítě se o doručení paketů stará transportní vrstva.",
        "sectionNumber": "11.2.1",
        "sectionTitle": "IP (Internet Protocol)"
      },
      {
        "uuid": "0989ed6d-5e63-4f28-9704-b231770e2fbc",
        "correct": "Routery přeposílají pakety mezi sítěmi a pracují na třetí vrstvě.",
        "incorrect": "Routery přeposílají pakety v rámci jedné sítě a pracují na druhé vrstvě.",
        "sectionNumber": "11.2.1",
        "sectionTitle": "IP (Internet Protocol)"
      },
      {
        "uuid": "36f2b3a7-ab43-41da-8f71-402cc21d238b",
        "correct": "Porty jsou 16bitová čísla, která identifikují služby běžící na počítači.",
        "incorrect": "Porty jsou 32bitová čísla, která identifikují služby běžící na počítači.",
        "sectionNumber": "11.2.1",
        "sectionTitle": "IP (Internet Protocol)"
      },
      {
        "uuid": "bf6e735c-0fab-4754-b3af-fb28677b4b18",
        "correct": "ICMP protokol slouží pro diagnostiku, hlášení chyb a správu sítě.",
        "incorrect": "ICMP protokol slouží výhradně pro diagnostiku aplikačních chyb.",
        "sectionNumber": "11.2.2",
        "sectionTitle": "ICMP: Control Messages"
      },
      {
        "uuid": "195d9b71-16b2-4e99-8fa7-c3fa2a85b29f",
        "correct": "S příchodem IPv6 byla role ICMP rozšířena o automatickou konfiguraci sítě.",
        "incorrect": "S příchodem IPv6 byla role ICMP omezena pouze na hlášení chyb.",
        "sectionNumber": "11.2.2",
        "sectionTitle": "ICMP: Control Messages"
      },
      {
        "uuid": "171e9f49-90e3-4820-871c-9c5b1ff8155c",
        "correct": "ICMP protokol neposkytuje přímé služby aplikační vrstvě.",
        "incorrect": "ICMP protokol poskytuje přímé služby aplikační vrstvě pro spolehlivý přenos dat.",
        "sectionNumber": "11.2.2",
        "sectionTitle": "ICMP: Control Messages"
      },
      {
        "uuid": "ea4d4caa-5a48-4130-96da-3ad89d6649dd",
        "correct": "Příkaz ping využívá ICMP echo request a echo reply zprávy a v kombinaci s TTL je základem pro traceroute.",
        "incorrect": "Příkaz ping využívá výhradně TCP protokol pro diagnostiku spojení a traceroute je založen na UDP.",
        "sectionNumber": "11.2.2",
        "sectionTitle": "ICMP: Control Messages"
      },
      {
        "uuid": "084a3f6c-8281-409c-9bca-94caa3449ba8",
        "correct": "TCP je spojově orientovaný protokol, který zaručuje spolehlivé doručení dat.",
        "incorrect": "TCP je bezespjojový protokol, který zaručuje spolehlivé doručení dat.",
        "sectionNumber": "11.2.3",
        "sectionTitle": "TCP: Transmission Control Protocol"
      },
      {
        "uuid": "85f51e02-5423-4b5a-9cd6-e80a1779caf2",
        "correct": "Pro navázání spojení TCP využívá trojcestný handshake: SYN, SYN/ACK a ACK.",
        "incorrect": "Pro navázání spojení TCP využívá čtyřcestný handshake: SYN, SYN/ACK, ACK a FIN.",
        "sectionNumber": "11.2.3",
        "sectionTitle": "TCP: Transmission Control Protocol"
      },
      {
        "uuid": "f5d7fe58-1bc8-4547-9ca3-b5906e594c29",
        "correct": "TCP musí implementovat mechanismy pro rozdělení datového proudu na pakety pro IP vrstvu.",
        "incorrect": "TCP nemusí implementovat mechanismy pro rozdělení datového proudu na pakety pro IP vrstvu, jelikož IP vrstva je proudově orientovaná.",
        "sectionNumber": "11.2.3",
        "sectionTitle": "TCP: Transmission Control Protocol"
      },
      {
        "uuid": "8e236c7a-35b1-43ba-8702-b5bc80b049cb",
        "correct": "TCP spojení je obousměrné, umožňující obousměrný tok dat současně.",
        "incorrect": "TCP spojení je jednosměrné, umožňující tok dat pouze v jednom směru.",
        "sectionNumber": "11.2.3",
        "sectionTitle": "TCP: Transmission Control Protocol"
      },
      {
        "uuid": "086711b4-4c4e-4a56-bdfd-4f65d2935169",
        "correct": "TCP zajišťuje doručení dat ve správném pořadí a retransmisi ztracených paketů.",
        "incorrect": "TCP nezajišťuje doručení dat ve správném pořadí a retransmisi ztracených paketů.",
        "sectionNumber": "11.2.3",
        "sectionTitle": "TCP: Transmission Control Protocol"
      },
      {
        "uuid": "2e025574-d2be-4ea2-95fb-bcb6055d4342",
        "correct": "TCP pakety využívají sekvenční čísla k zajištění správného pořadí doručení dat.",
        "incorrect": "TCP pakety nepoužívají sekvenční čísla, pořadí doručení dat není garantováno.",
        "sectionNumber": "11.2.4",
        "sectionTitle": "Sequence Numbers"
      },
      {
        "uuid": "87d2a062-153b-478a-8e60-0c633dc8768f",
        "correct": "Sekvenční čísla v TCP umožňují příjemci znovu sestavit datový proud i při změně pořadí IP paketů.",
        "incorrect": "Sekvenční čísla v TCP slouží pouze k šifrování dat, nikoliv k sestavení datového proudu.",
        "sectionNumber": "11.2.4",
        "sectionTitle": "Sequence Numbers"
      },
      {
        "uuid": "5b3bea46-305b-4f27-b05f-b09374a4fb79",
        "correct": "Potvrzování příjmu (ACK) v TCP se provádí pomocí sekvenčních čísel, což umožňuje identifikaci přijatých paketů.",
        "incorrect": "Potvrzování příjmu (ACK) v TCP se provádí bez použití sekvenčních čísel.",
        "sectionNumber": "11.2.4",
        "sectionTitle": "Sequence Numbers"
      },
      {
        "uuid": "948c73ff-49b6-49e1-b7f7-11f4e02b2d46",
        "correct": "Ztráta paketů v TCP je detekována odesílatelem, pokud není včas obdrženo potvrzení (ACK).",
        "incorrect": "Ztrátu paketů v TCP detekuje pouze příjemce na základě chybějících dat.",
        "sectionNumber": "11.2.4",
        "sectionTitle": "Sequence Numbers"
      },
      {
        "uuid": "6205b1ed-eae7-4870-b2aa-4baabea20460",
        "correct": "Pokud odesílatel TCP neobdrží potvrzení (ACK) v dynamicky upraveném časovém limitu, paket je znovu odeslán.",
        "incorrect": "Při ztrátě paketu v TCP se automaticky navýší rychlost odesílání dat.",
        "sectionNumber": "11.2.4",
        "sectionTitle": "Sequence Numbers"
      },
      {
        "uuid": "b5ec31b9-c234-4f09-ada3-376c3037ebfa",
        "correct": "TCP protokol má významnou režii kvůli svým garancím spolehlivosti a doručení v pořadí.",
        "incorrect": "TCP protokol má minimální režii, protože se jedná o jednoduchý protokol nad IP.",
        "sectionNumber": "11.2.5",
        "sectionTitle": "UDP: User Datagram Protocol"
      },
      {
        "uuid": "b0c1bed2-018c-401e-a0ac-218f26c90d22",
        "correct": "UDP je mnohem jednodušší protokol než TCP a představuje tenkou vrstvu nad IP.",
        "incorrect": "UDP je složitější protokol než TCP a přidává komplexní mechanismy pro spolehlivost.",
        "sectionNumber": "11.2.5",
        "sectionTitle": "UDP: User Datagram Protocol"
      },
      {
        "uuid": "e45b6d4f-666e-49a8-9d00-9f93dc9bb642",
        "correct": "UDP přidává k IP minimální režii, v podstatě jen port a 16bitový kontrolní součet.",
        "incorrect": "UDP přidává k IP významnou režii, včetně mechanismů pro spolehlivé doručení dat.",
        "sectionNumber": "11.2.5",
        "sectionTitle": "UDP: User Datagram Protocol"
      },
      {
        "uuid": "343a221f-d6dc-4671-a19f-c9020715b68a",
        "correct": "Hlavička UDP paketu je celkově dlouhá pouze 64 bitů a zahrnuje porty a kontrolní součet.",
        "incorrect": "Hlavička UDP paketu je delší než 128 bitů a zahrnuje komplexní pole pro řízení toku.",
        "sectionNumber": "11.2.5",
        "sectionTitle": "UDP: User Datagram Protocol"
      },
      {
        "uuid": "25868332-fadd-41a3-868a-4e68329a2904",
        "correct": "Firewall odděluje sítě a působí jako jediný router mezi nimi, kontroluje pakety a blokuje škodlivé pokusy o přístup.",
        "incorrect": "Firewall odděluje sítě, ale nikdy nepůsobí jako router a nekontroluje pakety, pouze slepě propouští provoz.",
        "sectionNumber": "11.2.6",
        "sectionTitle": "Firewalls"
      },
      {
        "uuid": "026c5e29-da42-4c2d-934d-dccecfff2119",
        "correct": "Paketový filtr je implementací firewallu a může být umístěn jak na routeru, tak i na koncovém zařízení pro zvýšení bezpečnosti.",
        "incorrect": "Paketový filtr není považován za implementaci firewallu, ale za doplňkový bezpečnostní prvek, který nemůže fungovat samostatně.",
        "sectionNumber": "11.2.6",
        "sectionTitle": "Firewalls"
      },
      {
        "uuid": "8ee422a8-2755-4f8b-ba79-ad5f8e3f911c",
        "correct": "Paketové filtry klasifikují příchozí pakety na základě pravidel definovaných operátorem a mohou je propustit, zahodit nebo odmítnout.",
        "incorrect": "Paketové filtry automaticky klasifikují pakety bez nutnosti definování pravidel operátorem a mohou je pouze propustit nebo zahodit.",
        "sectionNumber": "11.2.6",
        "sectionTitle": "Firewalls"
      },
      {
        "uuid": "67b12d3c-40a6-4dee-ae07-878360d93cd3",
        "correct": "Pro paketové filtry existují dvě hlavní komponenty: nástroj pro správu pravidel a kernelová část pro samotnou klasifikaci paketů.",
        "incorrect": "Paketové filtry se skládají pouze z jedné komponenty, která je zodpovědná jak za správu pravidel, tak za klasifikaci paketů.",
        "sectionNumber": "11.2.6",
        "sectionTitle": "Firewalls"
      },
      {
        "uuid": "aede42f7-7f40-46ad-87c4-e3a14e491922",
        "correct": "Stavový paketový filtr si pamatuje stav spojení a díky tomu může lépe rozhodovat o propouštění paketů v rámci daného spojení.",
        "incorrect": "Stavový paketový filtr neudržuje informace o stavu spojení a rozhoduje o propouštění paketů pouze na základě hlaviček jednotlivých paketů.",
        "sectionNumber": "11.2.6",
        "sectionTitle": "Firewalls"
      },
      {
        "uuid": "5ab9df1d-a313-435d-bfe4-af0b820a9791",
        "correct": "Číselné adresy je obtížné si zapamatovat, proto se používají hostitelská jména.",
        "incorrect": "Číselné adresy je snadné si zapamatovat, proto se hostitelská jména nepoužívají.",
        "sectionNumber": "11.2.7",
        "sectionTitle": "Name Resolution"
      },
      {
        "uuid": "d68f21f8-116d-4a30-9503-c7bd3e676d7b",
        "correct": "Hostitelská jména mohou být uložena v souboru jako například `/etc/hosts`, ale to je nepraktické pro více než 3 počítače.",
        "incorrect": "Hostitelská jména nemohou být uložena v souboru jako například `/etc/hosts`, protože to je praktické i pro více než 3 počítače.",
        "sectionNumber": "11.2.7",
        "sectionTitle": "Name Resolution"
      },
      {
        "uuid": "0cc8ceb5-c1ce-4f3f-afb6-f6e11de9a8f3",
        "correct": "Systém DNS je navržen jako škálovatelný adresář pro miliony jmen, který je efektivně aktualizován a dotazován.",
        "incorrect": "Systém DNS není navržen jako škálovatelný adresář pro miliony jmen a není efektivně aktualizován.",
        "sectionNumber": "11.2.7",
        "sectionTitle": "Name Resolution"
      },
      {
        "uuid": "2a0b3eab-6400-43ef-adc0-73b7935c4619",
        "correct": "DNS je hierarchický protokol pro překlad jmen, který běží nad protokoly TCP nebo UDP.",
        "incorrect": "DNS je centralizovaný protokol pro překlad jmen, který běží pouze nad protokolem TCP.",
        "sectionNumber": "11.2.8",
        "sectionTitle": "DNS: Domain Name System"
      },
      {
        "uuid": "b401561e-6b0d-412b-8f0a-5e2b9da7c43b",
        "correct": "Doménová jména jsou v DNS rozdělena na části oddělené tečkami, což umožňuje distribuovanou databázi jmen.",
        "incorrect": "Doménová jména jsou v DNS rozdělena na části oddělené čárkami, což zjednodušuje správu centralizované databáze jmen.",
        "sectionNumber": "11.2.8",
        "sectionTitle": "DNS: Domain Name System"
      },
      {
        "uuid": "3115344e-9b8f-4040-a61f-8bc02b55feb0",
        "correct": "DNS servery typu NS slouží k udávání informací o dalších DNS serverech, které mohou poskytnout další informace o doméně.",
        "incorrect": "DNS servery typu NS slouží k udávání IP adres koncových zařízení pro danou doménu.",
        "sectionNumber": "11.2.8",
        "sectionTitle": "DNS: Domain Name System"
      },
      {
        "uuid": "b198045c-26ad-4611-b1e2-03a11007ccc5",
        "correct": "Proces rekurze v DNS obvykle provádí specializovaný typ DNS serveru, který ukládá výsledky do cache pro budoucí dotazy.",
        "incorrect": "Proces rekurze v DNS se provádí pouze na klientském počítači a výsledky se nikdy neukládají do cache.",
        "sectionNumber": "11.2.8",
        "sectionTitle": "DNS: Domain Name System"
      },
      {
        "uuid": "fe6828d5-67c3-4f58-ad1a-9b591d4dc084",
        "correct": "Nástroj `dig` je součástí sady nástrojů ISC a slouží k diagnostice a pozorování rekurze v DNS.",
        "incorrect": "Nástroj `dig` je součástí operačního systému Windows a slouží pouze k zobrazení IP adresy pro dané doménové jméno.",
        "sectionNumber": "11.2.8",
        "sectionTitle": "DNS: Domain Name System"
      }
    ]
  },
  {
    "uuid": "2bac8616-733e-44f0-a50a-b3818d8199c2",
    "sectionNumber": "12",
    "sectionTitle": "Anatomie programu",
    "statements": [
      {
        "uuid": "3c285e0d-d26a-4079-9219-0776beb8b0dd",
        "correct": "Jazyk C má v kontextu operačních systémů výjimečné postavení.",
        "incorrect": "Jazyk Python má v kontextu operačních systémů výjimečné postavení.",
        "sectionNumber": "12.1.1",
        "sectionTitle": "Programming Languages"
      },
      {
        "uuid": "0c4d5980-2315-4b5c-9d7a-6f112d012c61",
        "correct": "Většina jazyků, s nimiž se studenti setkají, spadá do kategorie jazyků vyšší úrovně abstrakce.",
        "incorrect": "Většina jazyků, s nimiž se studenti setkají, spadá do kategorie jazyků nižší úrovně abstrakce.",
        "sectionNumber": "12.1.1",
        "sectionTitle": "Programming Languages"
      },
      {
        "uuid": "d4db40d9-8801-4d50-970e-dd3e78737d75",
        "correct": "Jazyky C++, Java a C# jsou příklady jazyků odvozených od C a spadají mezi jazyky vyšší úrovně.",
        "incorrect": "Jazyky C++, Java a C# jsou příklady jazyků odvozených od C a spadají mezi jazyky nižší úrovně.",
        "sectionNumber": "12.1.1",
        "sectionTitle": "Programming Languages"
      },
      {
        "uuid": "dc40e836-b915-4d28-a1c6-7f461800f6ba",
        "correct": "Pro účely kurzu se budeme zabývat především jazykem C a shellem POSIX, který je také považován za programovací jazyk.",
        "incorrect": "Pro účely kurzu se budeme zabývat především jazykem Python a shellem POSIX, který není považován za programovací jazyk.",
        "sectionNumber": "12.1.1",
        "sectionTitle": "Programming Languages"
      },
      {
        "uuid": "e8a18231-8a9d-48be-8ce6-1dea498b815a",
        "correct": "Různé programovací jazyky existují na různých úrovních abstrakce a mají odlišné účely použití.",
        "incorrect": "Všechny programovací jazyky existují na stejné úrovni abstrakce a mají stejné účely použití.",
        "sectionNumber": "12.1.1",
        "sectionTitle": "Programming Languages"
      },
      {
        "uuid": "6c82ac37-5b6d-4708-bb1a-f88891e04731",
        "correct": "C lze považovat za přenosný assembler s několika málo doplňky ve formě standardní knihovny.",
        "incorrect": "C je považován za moderní jazyk s mnoha pokročilými funkcemi, který se používá pro vývoj webových aplikací.",
        "sectionNumber": "12.1.2",
        "sectionTitle": "C: The Least Common Denominator"
      },
      {
        "uuid": "c0fab552-2096-49d4-9801-16d2bf7e5f83",
        "correct": "Hlavní výhodou jazyka C oproti assembleru je abstrakce od strojových instrukcí a strukturované řízení toku programu.",
        "incorrect": "Hlavní výhodou jazyka C oproti assembleru je automatická správa paměti a podpora objektově orientovaného programování.",
        "sectionNumber": "12.1.2",
        "sectionTitle": "C: The Least Common Denominator"
      },
      {
        "uuid": "980b7c49-ae21-4e88-b7da-f94477b5a2bd",
        "correct": "Popularita jazyka C v systémovém programování pramení z jeho schopnosti snadno propojovat se s kódem napsaným v jiných jazycích.",
        "incorrect": "Popularita jazyka C v systémovém programování pramení z jeho složitosti a obtížné integrace s jinými programovacími jazyky.",
        "sectionNumber": "12.1.2",
        "sectionTitle": "C: The Least Common Denominator"
      },
      {
        "uuid": "55d8be60-3e9d-4cba-90c9-99b9ff948c29",
        "correct": "Většina operačních systémových jader je napsána v jazyce C.",
        "incorrect": "Všechna operační systémová jádra jsou napsána v jazyce C.",
        "sectionNumber": "12.1.3",
        "sectionTitle": "The Language of Operating Systems"
      },
      {
        "uuid": "c3e3f924-c064-46c5-b0e7-c1c2718b55ef",
        "correct": "Systémové knihovny jsou obvykle psány v jazyce C, stejně jako jádro operačního systému.",
        "incorrect": "Systémové knihovny jsou obvykle psány v jazyce C++, na rozdíl od jádra operačního systému.",
        "sectionNumber": "12.1.3",
        "sectionTitle": "The Language of Operating Systems"
      },
      {
        "uuid": "7c64b75d-608d-46ef-a057-38e7cb0c8b39",
        "correct": "I operační systémy nenapsané v jazyce C poskytují C API pro programy.",
        "incorrect": "Operační systémy nenapsané v jazyce C nikdy neposkytují C API.",
        "sectionNumber": "12.1.3",
        "sectionTitle": "The Language of Operating Systems"
      },
      {
        "uuid": "d896a2d6-597d-466c-8902-c12c48c78e3a",
        "correct": "C knihovny se skládají z hlavičkových souborů a kompilovaného kódu knihovny.",
        "incorrect": "C knihovny obsahují pouze hlavičkové soubory, které definují implementaci funkcí.",
        "sectionNumber": "12.1.4",
        "sectionTitle": "(System) Libraries"
      },
      {
        "uuid": "f3bc978d-b42f-447d-8a17-638a64a39453",
        "correct": "Hlavičkové soubory v C knihovnách poskytují deklarace funkcí, nikoliv jejich definice.",
        "incorrect": "Hlavičkové soubory v C knihovnách obsahují kompletní definice všech funkcí knihovny.",
        "sectionNumber": "12.1.4",
        "sectionTitle": "(System) Libraries"
      },
      {
        "uuid": "cc8ab086-44ae-4d76-bb1d-8e89ad2267b5",
        "correct": "Statické knihovny v C, jako například libc.a, se liší od sdílených knihoven, například libc.so.",
        "incorrect": "Statické i sdílené knihovny v C mají stejnou příponu souboru a funkční princip.",
        "sectionNumber": "12.1.4",
        "sectionTitle": "(System) Libraries"
      },
      {
        "uuid": "01efce0e-407f-42be-9786-a537af45d0ae",
        "correct": "Deklarace funkce v C specifikuje rozhraní funkce, tedy její jméno, argumenty a návratový typ.",
        "incorrect": "Deklarace funkce v C zahrnuje kompletní implementaci funkce, včetně těla a prováděných operací.",
        "sectionNumber": "12.1.4",
        "sectionTitle": "(System) Libraries"
      },
      {
        "uuid": "8fadd642-e2b4-493c-95fe-491b310c0966",
        "correct": "Knihovna libc obsahuje funkce standardu ISO C, jako například printf, fopen a fread.",
        "incorrect": "Knihovna libc neobsahuje žádné funkce standardu ISO C, ale pouze POSIX funkce.",
        "sectionNumber": "12.1.5",
        "sectionTitle": "The POSIX C Library"
      },
      {
        "uuid": "5bfd966c-ff32-4e4b-a2c9-ff42d8382008",
        "correct": "POSIX funkce v knihovně libc, jako například open a read, jsou C obálky systémových volání.",
        "incorrect": "POSIX funkce v knihovně libc, jako například open a read, nejsou C obálky systémových volání.",
        "sectionNumber": "12.1.5",
        "sectionTitle": "The POSIX C Library"
      },
      {
        "uuid": "542d4dee-77aa-4a4f-9780-7cca27acb74d",
        "correct": "V systémech UNIX tradičně knihovna libc kombinuje základní C knihovnu a knihovnu POSIX.",
        "incorrect": "V systémech UNIX knihovna libc odděluje funkce základní C knihovny a knihovny POSIX do samostatných celků.",
        "sectionNumber": "12.1.5",
        "sectionTitle": "The POSIX C Library"
      },
      {
        "uuid": "9e5e79a6-5e6a-4a5e-a63c-7ce6a87bb9fe",
        "correct": "Knihovna `libc` je klíčová, avšak v systémech UNIX existuje mnoho dalších specializovaných knihoven.",
        "incorrect": "Knihovna `libc` je nejdůležitější knihovna v UNIXU a ostatní knihovny jsou jen doplňkové.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "d94c3f30-ebfc-471b-9abc-0fa1aa9832cb",
        "correct": "Matematická knihovna `libm` poskytuje funkce pro výpočty s plovoucí desetinnou čárkou, jako sinus a kosinus.",
        "incorrect": "Knihovna `libm` se v UNIXU používá primárně pro operace s řetězci a textem.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "fb88c322-1211-47d9-aee2-9a1138777d97",
        "correct": "Knihovna `libpthread` obsahuje funkce pro tvorbu vícevláknových programů, včetně `pthread_create`.",
        "incorrect": "Knihovna `libpthread` slouží pouze pro správu procesů, nikoliv pro vlákna.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "65985ef8-e612-41d6-ac9b-d8b1b8b090e7",
        "correct": "Standardní knihovna C++ v UNIXU, často `libstdc++`, nelze přímo používat z programů v jazyce C.",
        "incorrect": "Standardní knihovna C++ v UNIXU, `libstdc++`, je plně kompatibilní a zaměnitelná s knihovnou `libc`.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "e7c5489d-7eff-4130-92d2-4042c2fdddda",
        "correct": "Kryptografická knihovna `libcrypto` nabízí symetrické šifry jako AES a asymetrické algoritmy jako RSA.",
        "incorrect": "Knihovna `libcrypto` v UNIXU poskytuje pouze hashovací funkce a digitální podpisy.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "8381601e-e903-4c6a-8cdd-ea593d7a801a",
        "correct": "Knihovna `libcurses` umožňuje programům pracovat přenositelně s různými typy hardwarových a softwarových terminálů.",
        "incorrect": "Knihovna `libcurses` je zastaralá a v moderních systémech UNIX se již nepoužívá.",
        "sectionNumber": "12.1.6",
        "sectionTitle": "Additional System Libraries"
      },
      {
        "uuid": "1a7e8937-5cb0-4ef2-927a-7f305a3154fa",
        "correct": "V mnoha systémech UNIX lze systémové knihovny nalézt v `/usr/lib` a uživatelské knihovny v `/usr/local/lib`.",
        "incorrect": "Ve všech systémech UNIX se systémové knihovny nacházejí výhradně v `/lib` a uživatelské knihovny výhradně v `/usr/local/lib`.",
        "sectionNumber": "12.1.7",
        "sectionTitle": "Library Files"
      },
      {
        "uuid": "ec73af1f-82c6-49a5-bed1-33ef13fd2097",
        "correct": "Konkrétně v systémech založených na Linuxu lze systémové a uživatelské knihovny nalézt smíšené dohromady v adresáři `/usr/lib`.",
        "incorrect": "Konkrétně v systémech založených na Linuxu se systémové knihovny nacházejí v `/lib` a uživatelské knihovny v `/usr/local/lib`.",
        "sectionNumber": "12.1.7",
        "sectionTitle": "Library Files"
      },
      {
        "uuid": "45dc8f7c-afb0-43c8-860f-5f5282a5909b",
        "correct": "V systému Windows jsou systémové i aplikační knihovny často instalovány ve společném umístění, například `C:\\Windows\\System32`.",
        "incorrect": "V systému Windows se systémové knihovny nacházejí v `C:\\Windows\\System32` a aplikační knihovny se instalují samostatně s každým programem.",
        "sectionNumber": "12.1.7",
        "sectionTitle": "Library Files"
      },
      {
        "uuid": "024d8666-77b9-4637-9ff9-98afb2ff22aa",
        "correct": "V systémech Windows a macOS jsou sdílené knihovny často instalovány společně s aplikací samotnou.",
        "incorrect": "Sdílené knihovny jsou instalovány pouze v systémových adresářích a nikdy společně s aplikací v systémech Windows a macOS.",
        "sectionNumber": "12.1.7",
        "sectionTitle": "Library Files"
      },
      {
        "uuid": "bbee2aa2-076e-4a59-85f6-fa76ea0405d5",
        "correct": "Statické knihovny se používají během fáze linkování při kompilaci programů.",
        "incorrect": "Statické knihovny se používají během fáze běhu programů.",
        "sectionNumber": "12.1.8",
        "sectionTitle": "Static Libraries"
      },
      {
        "uuid": "a2050c26-6826-4fb2-b962-2b83e5fc84fb",
        "correct": "Při použití statických knihoven se potřebný kód kopíruje přímo do spustitelného souboru.",
        "incorrect": "Při použití statických knihoven se potřebný kód dynamicky linkuje během běhu programu.",
        "sectionNumber": "12.1.8",
        "sectionTitle": "Static Libraries"
      },
      {
        "uuid": "fcc73947-9163-493a-b3e4-aec45642530f",
        "correct": "Spustitelné soubory vytvořené se statickými knihovnami jsou soběstačné a nezávisí na externích knihovních souborech za běhu.",
        "incorrect": "Spustitelné soubory vytvořené se statickými knihovnami závisí na externích knihovních souborech za běhu.",
        "sectionNumber": "12.1.8",
        "sectionTitle": "Static Libraries"
      },
      {
        "uuid": "fb58138d-8fa7-41ea-bc74-415cb63eab92",
        "correct": "Statické linkování může vést k duplicitě kódu v mnoha spustitelných souborech v systému.",
        "incorrect": "Statické linkování eliminuje duplicitě kódu v mnoha spustitelných souborech v systému.",
        "sectionNumber": "12.1.8",
        "sectionTitle": "Static Libraries"
      },
      {
        "uuid": "3843d3bc-07e7-4aa0-880c-7c2f124707fd",
        "correct": "Operační systémy nemusí standardně obsahovat statické knihovny a vyžadují samostatnou instalaci.",
        "incorrect": "Operační systémy vždy standardně obsahují statické knihovny pro všechny uživatele.",
        "sectionNumber": "12.1.8",
        "sectionTitle": "Static Libraries"
      },
      {
        "uuid": "5df6b259-edcc-485c-a723-6947cd28cdfd",
        "correct": "Pro spuštění programů využívajících dynamické knihovny je přítomnost těchto knihoven nezbytná.",
        "incorrect": "Pro spuštění programů využívajících dynamické knihovny není přítomnost těchto knihoven nezbytná.",
        "sectionNumber": "12.1.9",
        "sectionTitle": "Shared (Dynamic) Libraries"
      },
      {
        "uuid": "7054ccd9-cbf7-4e66-aecd-32380a8ca404",
        "correct": "Linkování dynamických knihoven se provádí až při spuštění programu, nikoliv během kompilace.",
        "incorrect": "Linkování dynamických knihoven se provádí během kompilace programu, nikoliv až při spuštění.",
        "sectionNumber": "12.1.9",
        "sectionTitle": "Shared (Dynamic) Libraries"
      },
      {
        "uuid": "df663c85-cbfe-4a45-b7de-305caa2d1c19",
        "correct": "Sdílené knihovny redukují redundanci kódu jak v operační paměti, tak i v souborovém systému.",
        "incorrect": "Sdílené knihovny zvyšují redundanci kódu jak v operační paměti, tak i v souborovém systému.",
        "sectionNumber": "12.1.9",
        "sectionTitle": "Shared (Dynamic) Libraries"
      },
      {
        "uuid": "5f27b574-b756-4e5d-b40f-417fb543a60f",
        "correct": "Aktualizace dynamické knihovny může proběhnout odděleně od aplikací, které na ní závisejí.",
        "incorrect": "Aktualizace dynamické knihovny musí proběhnout současně s aktualizací všech aplikací, které na ní závisejí.",
        "sectionNumber": "12.1.9",
        "sectionTitle": "Shared (Dynamic) Libraries"
      },
      {
        "uuid": "745569c8-a798-4faf-985b-5e2be0fbd06d",
        "correct": "Problémy se závislostmi jsou běžným negativem spojeným s používáním dynamických knihoven.",
        "incorrect": "Problémy se závislostmi se nikdy nevyskytují při používání dynamických knihoven.",
        "sectionNumber": "12.1.9",
        "sectionTitle": "Shared (Dynamic) Libraries"
      },
      {
        "uuid": "c6423309-e218-4e36-8486-f75702af3f32",
        "correct": "Hlavičkové soubory obsahují prototypy funkcí v jazyce C a definice datových struktur.",
        "incorrect": "Hlavičkové soubory obsahují implementace funkcí v jazyce C a definice datových struktur.",
        "sectionNumber": "12.1.10",
        "sectionTitle": "Header Files"
      },
      {
        "uuid": "531cd101-db4e-4501-ac70-f9b8f05b2b65",
        "correct": "Hlavičkové soubory jsou vyžadovány při kompilaci programů v jazycích C a C++, ale ne při jejich používání.",
        "incorrect": "Hlavičkové soubory jsou vyžadovány jak při kompilaci, tak i při používání programů v jazycích C a C++.",
        "sectionNumber": "12.1.10",
        "sectionTitle": "Header Files"
      },
      {
        "uuid": "ca314db8-fac1-4236-8ba7-575341caf0c2",
        "correct": "Na systémech UNIX jsou systémové hlavičkové soubory tradičně uloženy v adresáři `/usr/include`.",
        "incorrect": "Na systémech UNIX jsou systémové hlavičkové soubory tradičně uloženy v adresáři `/usr/lib`.",
        "sectionNumber": "12.1.10",
        "sectionTitle": "Header Files"
      },
      {
        "uuid": "91e4e9fb-747d-4652-8396-94afcadc4ef9",
        "correct": "Rozložení datových struktur definovaných v hlavičkových souborech je součástí aplikačního binárního rozhraní (ABI).",
        "incorrect": "Rozložení datových struktur definovaných v hlavičkových souborech není součástí aplikačního binárního rozhraní (ABI).",
        "sectionNumber": "12.1.10",
        "sectionTitle": "Header Files"
      },
      {
        "uuid": "52dce79e-8e9e-4561-b72b-28451f8f01d6",
        "correct": "Hlavičkové soubory jsou fragmenty zdrojového kódu v jazyce C.",
        "incorrect": "Hlavičkové soubory jsou binární soubory obsahující kompilovaný kód.",
        "sectionNumber": "12.1.10",
        "sectionTitle": "Header Files"
      },
      {
        "uuid": "19a434ed-76dc-47b2-93c5-868a08ce9772",
        "correct": "Manuálové stránky v UNIXu jsou obvykle součástí instalace operačního systému.",
        "incorrect": "Manuálové stránky v UNIXu jsou dodávány pouze jako externí doplněk k operačnímu systému.",
        "sectionNumber": "12.1.11",
        "sectionTitle": "Documentation"
      },
      {
        "uuid": "eb515284-5bf9-4b67-99fd-62835e39b90f",
        "correct": "Příkaz `man` v UNIXu umožňuje prohlížet dokumentaci k systémovým voláním.",
        "incorrect": "Příkaz `man` v UNIXu slouží pouze k manipulaci s procesy.",
        "sectionNumber": "12.1.11",
        "sectionTitle": "Documentation"
      },
      {
        "uuid": "e4d717c2-2fbe-487f-85f1-4b006c2f30d9",
        "correct": "MSDN poskytuje rozsáhlou dokumentaci pro programátory operačního systému Windows.",
        "incorrect": "MSDN poskytuje dokumentaci pouze pro uživatele operačního systému Windows, nikoliv programátory.",
        "sectionNumber": "12.1.11",
        "sectionTitle": "Documentation"
      },
      {
        "uuid": "61ded96e-dcc0-4be0-9f72-930a00368022",
        "correct": "Sekce 2 manuálových stránek v UNIXu popisuje systémová volání.",
        "incorrect": "Sekce 2 manuálových stránek v UNIXu popisuje knihovní funkce.",
        "sectionNumber": "12.1.11",
        "sectionTitle": "Documentation"
      },
      {
        "uuid": "93b6c918-8de7-4c41-8d0b-94b5aa839e6e",
        "correct": "Dokumentace pro Windows byla dříve dostupná i na optických médiích.",
        "incorrect": "Dokumentace pro Windows byla dříve dostupná výhradně v tištěné podobě.",
        "sectionNumber": "12.1.11",
        "sectionTitle": "Documentation"
      },
      {
        "uuid": "2c7769d5-9cd3-49c8-9302-3ffde570cfa2",
        "correct": "Systémy POSIX často obsahují překladač jazyka C.",
        "incorrect": "Systémy POSIX nikdy neobsahují překladač jazyka C.",
        "sectionNumber": "12.2.1",
        "sectionTitle": "C Compiler"
      },
      {
        "uuid": "a7767baa-86a9-4f7e-a082-0c9936db490d",
        "correct": "Výstupem překladače je objektový soubor obsahující strojový kód.",
        "incorrect": "Výstupem překladače je zdrojový soubor v textové podobě.",
        "sectionNumber": "12.2.1",
        "sectionTitle": "C Compiler"
      },
      {
        "uuid": "3d7bb553-75ca-4e0f-a100-b5ddf821a39c",
        "correct": "Objektový soubor sice obsahuje strojový kód, ale není přímo spustitelný.",
        "incorrect": "Objektový soubor je přímo spustitelný, protože obsahuje strojový kód.",
        "sectionNumber": "12.2.1",
        "sectionTitle": "C Compiler"
      },
      {
        "uuid": "f9e5c4a7-847c-4f98-b931-b9b8da8cf74b",
        "correct": "Program nelze spustit dokud není spojen linkovacím programem.",
        "incorrect": "Program lze spustit ihned po kompilaci bez linkování.",
        "sectionNumber": "12.2.1",
        "sectionTitle": "C Compiler"
      },
      {
        "uuid": "81c3d086-788f-40b8-a9e4-449923bf1bb2",
        "correct": "Objektové soubory obsahují spustitelný kód a statická data.",
        "incorrect": "Objektové soubory obsahují pouze spustitelný kód bez statických dat.",
        "sectionNumber": "12.2.2",
        "sectionTitle": "Object Files"
      },
      {
        "uuid": "b5ae588c-7c50-4ce0-98d4-837506c059af",
        "correct": "Objektové soubory mohou být rozděleny do sekcí jako .text, .rodata a .data.",
        "incorrect": "Objektové soubory jsou vždy rozděleny do sekcí .text, .rodata a .data.",
        "sectionNumber": "12.2.2",
        "sectionTitle": "Object Files"
      },
      {
        "uuid": "36240eb7-0abe-43c4-87c1-f7c9dfe17843",
        "correct": "Sekce .text v objektovém souboru typicky obsahuje strojový kód.",
        "incorrect": "Sekce .text v objektovém souboru typicky obsahuje metadata.",
        "sectionNumber": "12.2.2",
        "sectionTitle": "Object Files"
      },
      {
        "uuid": "4e338e06-d8c1-4e95-abb8-628618f83a71",
        "correct": "Tabulka symbolů v metadatech objektového souboru udává adresy funkcí relativní k souboru.",
        "incorrect": "Tabulka symbolů v metadatech objektového souboru udává absolutní adresy funkcí.",
        "sectionNumber": "12.2.2",
        "sectionTitle": "Object Files"
      },
      {
        "uuid": "11c7b529-7cd1-4c9d-ab07-7f17ea68892a",
        "correct": "Sekce .rodata je určena pro data určená jen pro čtení, jako jsou řetězcové literály.",
        "incorrect": "Sekce .rodata je určena pro spustitelný kód.",
        "sectionNumber": "12.2.2",
        "sectionTitle": "Object Files"
      },
      {
        "uuid": "e51d615c-e196-4078-94ec-78f4e43d48f7",
        "correct": "Formát ELF je nejběžnější formát objektových souborů v systémech POSIX.",
        "incorrect": "Formát PE je nejběžnější formát objektových souborů v systémech POSIX.",
        "sectionNumber": "12.2.3",
        "sectionTitle": "Object File Formats"
      },
      {
        "uuid": "82c66b80-7813-40b4-96e8-259b1cadee75",
        "correct": "Formát Mach-O je formát objektových souborů používaný v systémech macOS.",
        "incorrect": "Formát Mach-O je formát objektových souborů používaný v systémech Windows.",
        "sectionNumber": "12.2.3",
        "sectionTitle": "Object File Formats"
      },
      {
        "uuid": "024ebc75-7cfe-40e4-9903-98f140d37af6",
        "correct": "Formát COFF rozšiřuje formát a.out o podporu sekcí.",
        "incorrect": "Formát COFF je starší formát než a.out a nepodporuje sekce.",
        "sectionNumber": "12.2.3",
        "sectionTitle": "Object File Formats"
      },
      {
        "uuid": "e13e3442-ec3b-43ca-9c52-2a99080a586f",
        "correct": "Formáty PE, Mach-O a ELF jsou běžně používané formáty objektových souborů v současných systémech.",
        "incorrect": "Formáty PE, Mach-O a ELF jsou zastaralé formáty objektových souborů a již se nepoužívají.",
        "sectionNumber": "12.2.3",
        "sectionTitle": "Object File Formats"
      },
      {
        "uuid": "1819a68f-2165-40f1-9170-6640aa80ac61",
        "correct": "Statické knihovny v UNIXu se nazývají archivy a mají příponu .a.",
        "incorrect": "Statické knihovny v UNIXu se nazývají dynamické knihovny a mají příponu .a.",
        "sectionNumber": "12.2.4",
        "sectionTitle": "Archives (Static Libraries)"
      },
      {
        "uuid": "3ad16b29-b924-448f-8feb-b1f737b7aede",
        "correct": "Archiv statické knihovny obsahuje kromě objektových souborů i tabulku symbolů.",
        "incorrect": "Archiv statické knihovny obsahuje pouze objektové soubory, nikoliv tabulku symbolů.",
        "sectionNumber": "12.2.4",
        "sectionTitle": "Archives (Static Libraries)"
      },
      {
        "uuid": "2146e0b6-47ed-40b3-8622-3d4cb0fd39b0",
        "correct": "Symbolová tabulka v archivu urychluje linkování tím, že linker nemusí prohledávat všechny objektové soubory.",
        "incorrect": "Symbolová tabulka v archivu zpomaluje linkování, protože linker musí prohledávat tabulku symbolů i objektové soubory.",
        "sectionNumber": "12.2.4",
        "sectionTitle": "Archives (Static Libraries)"
      },
      {
        "uuid": "346f4ced-061e-40ed-a150-3ea5e1bd7eb2",
        "correct": "Archiv statické knihovny je sbírka objektových souborů, kde každý soubor si zachovává svou identitu.",
        "incorrect": "Archiv statické knihovny je sloučený soubor, kde objektové soubory ztrácejí svou původní identitu.",
        "sectionNumber": "12.2.4",
        "sectionTitle": "Archives (Static Libraries)"
      },
      {
        "uuid": "62b1ba4f-6def-4d82-bb1e-24d3c24a5dff",
        "correct": "Linker kombinuje objektové soubory za účelem vytvoření spustitelného souboru.",
        "incorrect": "Linker kombinuje zdrojové soubory za účelem vytvoření spustitelného souboru.",
        "sectionNumber": "12.2.5",
        "sectionTitle": "Linker"
      },
      {
        "uuid": "4e35b24b-27a8-41e9-9dfd-b0aee34e2ec0",
        "correct": "Objektové soubory mohou používat symboly definované v knihovnách nebo jiných objektových souborech.",
        "incorrect": "Objektové soubory mohou používat pouze symboly definované v samotném objektovém souboru.",
        "sectionNumber": "12.2.5",
        "sectionTitle": "Linker"
      },
      {
        "uuid": "d5386b67-d1dd-4e16-8313-315b76fdaf56",
        "correct": "Objektové soubory poskytnuté linkeru přímo se vždy stanou součástí výsledného spustitelného souboru.",
        "incorrect": "Objektové soubory poskytnuté linkeru přímo se nikdy nestanou součástí výsledného spustitelného souboru.",
        "sectionNumber": "12.2.5",
        "sectionTitle": "Linker"
      },
      {
        "uuid": "f92c386c-33ab-491b-aec4-5e7a777071e2",
        "correct": "Objektové soubory v archivech jsou použity pouze pokud poskytují symboly potřebné k dokončení spustitelného souboru.",
        "incorrect": "Objektové soubory v archivech jsou použity vždy, bez ohledu na to, zda poskytují symboly potřebné k dokončení spustitelného souboru.",
        "sectionNumber": "12.2.5",
        "sectionTitle": "Linker"
      },
      {
        "uuid": "f91496d7-7452-43b5-b271-671a9067ce8b",
        "correct": "Linker je zodpovědný za přiřazení adres symbolům, které jsou definovány v programu.",
        "incorrect": "Kompilátor je zodpovědný za přiřazení adres symbolům, které jsou definovány v programu.",
        "sectionNumber": "12.2.6",
        "sectionTitle": "Symbols vs Addresses"
      },
      {
        "uuid": "fa802ccd-ed7a-466b-a703-d2c703c4aec5",
        "correct": "Symbolická jména v programovacím jazyce jsou překládána na adresy až v fázi linkování.",
        "incorrect": "Symbolická jména v programovacím jazyce jsou překládána na adresy již v fázi kompilace.",
        "sectionNumber": "12.2.6",
        "sectionTitle": "Symbols vs Addresses"
      },
      {
        "uuid": "d0aab571-a599-4feb-a8c8-dbd05f22840c",
        "correct": "Strojové instrukce používají adresy pro volání podprogramů a přístup k datům v paměti.",
        "incorrect": "Strojové instrukce používají symbolická jména přímo pro volání podprogramů a přístup k datům.",
        "sectionNumber": "12.2.6",
        "sectionTitle": "Symbols vs Addresses"
      },
      {
        "uuid": "ae1b8428-be73-44fe-9ac1-0136fe65a314",
        "correct": "Programátor při psaní kódu obvykle pracuje se symbolickými jmény, nikoliv s fyzickými adresami paměti.",
        "incorrect": "Programátor při psaní kódu musí manuálně přiřazovat fyzické adresy paměti proměnným a funkcím.",
        "sectionNumber": "12.2.6",
        "sectionTitle": "Symbols vs Addresses"
      },
      {
        "uuid": "dd6a8951-1f36-43ad-9cdf-c2bb5f92afdc",
        "correct": "Linker postupně zpracovává objektové soubory a aktualizuje tabulku symbolů pro každý z nich.",
        "incorrect": "Linker zpracovává všechny objektové soubory najednou a tabulku symbolů aktualizuje až po jejich kompletním načtení.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "83a4cebf-68ed-4d47-9575-d87e00cba554",
        "correct": "Symbolová tabulka v linkeru slouží k mapování symbolických jmen na jejich absolutní adresy v paměti.",
        "incorrect": "Symbolová tabulka v linkeru slouží pouze k dočasnému uložení symbolických jmen bez vazby na adresy.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "741f7083-78c3-4fa2-a3a8-179957dd1604",
        "correct": "Aktualizace symbolové tabulky linkeru probíhá inkrementálně s každým dalším zpracovaným objektovým souborem.",
        "incorrect": "Aktualizace symbolové tabulky linkeru probíhá jednorázově až po načtení všech objektových souborů.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "648fa573-18d7-492f-9a41-d6590b349c1e",
        "correct": "Proces relokace symbolů, spočívající v nalezení a dosazení adres, se provádí až po kompletním sloučení všech sekcí.",
        "incorrect": "Proces relokace symbolů se provádí průběžně ihned po načtení každé sekce z objektových souborů.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "682cbed0-dded-4283-bab3-89d7cecb896d",
        "correct": "Výstupní spustitelný soubor linkeru obsahuje pro každý typ sekce, jako .text a .data, právě jednu souhrnnou sekci.",
        "incorrect": "Výstupní spustitelný soubor linkeru obsahuje pro každý vstupní objektový soubor oddělené sekce .text a .data.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "bb5ae495-0884-49db-8eaa-743a00df41bf",
        "correct": "Relokační tabulka zaznamenává adresy instrukcí, které vyžadují doplnění o konkrétní adresy symbolů pro správné provedení.",
        "incorrect": "Relokační tabulka zaznamenává pouze symboly, jejichž adresy je nutné dodatečně doplnit, bez ohledu na instrukce.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "870c47f6-5e93-4ab0-85d9-3bbfc5988930",
        "correct": "Zachování symbolové tabulky ve výstupním souboru je volitelné a může být užitečné pro účely ladění a analýzy.",
        "incorrect": "Symbolová tabulka je vždy povinně odstraněna z výstupního souboru, protože není potřebná pro běh programu.",
        "sectionNumber": "12.2.7",
        "sectionTitle": "Resolving Symbols"
      },
      {
        "uuid": "16dd1410-8315-42c9-812f-a97cb09b48f5",
        "correct": "Výstupem linkeru je spustitelný soubor, který má obvykle stejný formát jako objektové soubory.",
        "incorrect": "Výstupem linkeru je spustitelný soubor, který má formát zcela odlišný od objektových souborů.",
        "sectionNumber": "12.2.8",
        "sectionTitle": "Executable"
      },
      {
        "uuid": "80e2983b-9cd6-48d6-9a20-7e531116d428",
        "correct": "Statické spustitelné soubory mohou být přímo spuštěny CPU bez nutnosti dalších úprav adres.",
        "incorrect": "Statické spustitelné soubory vyžadují další úpravy adres a relokací před spuštěním CPU.",
        "sectionNumber": "12.2.8",
        "sectionTitle": "Executable"
      },
      {
        "uuid": "38cfc969-3c9e-44f1-8730-25437f371f22",
        "correct": "Virtuální adresy ve spustitelných souborech umožňují různým programům používat překrývající se adresy.",
        "incorrect": "Virtuální adresy ve spustitelných souborech vyžadují, aby různé programy používaly disjunktní adresní prostory.",
        "sectionNumber": "12.2.8",
        "sectionTitle": "Executable"
      },
      {
        "uuid": "6108905b-3140-4338-ac27-66aa5827b7cd",
        "correct": "Sdílené knihovny se načítají do paměti pouze jednou, i když je používá více programů.",
        "incorrect": "Sdílené knihovny se načítají do paměti pro každý program, který je používá, zvlášť.",
        "sectionNumber": "12.2.9",
        "sectionTitle": "Shared Libraries"
      },
      {
        "uuid": "e642617f-f8b2-493f-bf77-03c86b040767",
        "correct": "Závislosti sdílených knihoven tvoří orientovaný acyklický graf (DAG).",
        "incorrect": "Závislosti sdílených knihoven tvoří orientovaný cyklický graf.",
        "sectionNumber": "12.2.9",
        "sectionTitle": "Shared Libraries"
      },
      {
        "uuid": "7dfc7a01-1655-4874-a6ab-383d6bc65c20",
        "correct": "Pro řešení symbolických jmen v sdílených knihovnách se používá runtime linker v operačním systému.",
        "incorrect": "Pro řešení symbolických jmen v sdílených knihovnách se používá standardní kompilátor.",
        "sectionNumber": "12.2.9",
        "sectionTitle": "Shared Libraries"
      },
      {
        "uuid": "d4013a72-2c0a-4138-aa90-7eced300fac8",
        "correct": "Sdílené knihovny mohou mít závislosti na jiných sdílených knihovnách.",
        "incorrect": "Sdílené knihovny nemohou mít závislosti na jiných sdílených knihovnách a jsou zcela izolované.",
        "sectionNumber": "12.2.9",
        "sectionTitle": "Shared Libraries"
      },
      {
        "uuid": "a1fc1bea-284a-4665-872c-951d3c8b2c75",
        "correct": "Runtime linker je podobný linkeru z doby kompilace, ale funkčně se od něj liší.",
        "incorrect": "Runtime linker je v podstatě identický s linkerem používaným v době kompilace.",
        "sectionNumber": "12.2.9",
        "sectionTitle": "Shared Libraries"
      },
      {
        "uuid": "431cb2f0-15e9-4026-b5d1-2cd28953f988",
        "correct": "Pro spuštění programu musí být program zaveden do paměti.",
        "incorrect": "Pro spuštění programu nemusí být program zaveden do paměti.",
        "sectionNumber": "12.2.10",
        "sectionTitle": "Addresses Revisited"
      },
      {
        "uuid": "93a8ce8d-d2ba-44ad-bd4d-8db1ff7b5ea3",
        "correct": "Sdílené knihovny používají kód nezávislý na pozici, aby mohly být zavedeny na libovolné adrese.",
        "incorrect": "Sdílené knihovny používají absolutní adresy, aby mohly být zavedeny pouze na pevně dané adrese.",
        "sectionNumber": "12.2.10",
        "sectionTitle": "Addresses Revisited"
      },
      {
        "uuid": "14536c05-7ce0-4cef-84be-0ca7e2fd118f",
        "correct": "Kód nezávislý na pozici umožňuje sdíleným knihovnám být zavedeny na různých adresách v paměti pro různé programy.",
        "incorrect": "Kód nezávislý na pozici vyžaduje, aby sdílené knihovny byly zavedeny na stejné adrese v paměti pro všechny programy.",
        "sectionNumber": "12.2.10",
        "sectionTitle": "Addresses Revisited"
      },
      {
        "uuid": "0649b74b-f1e0-46c0-9a0a-ee75bddb31b3",
        "correct": "Použití kódu nezávislého na pozici v sdílených knihovnách může způsobit mírnou režii při provádění.",
        "incorrect": "Použití kódu nezávislého na pozici v sdílených knihovnách nezpůsobuje žádnou režii při provádění.",
        "sectionNumber": "12.2.10",
        "sectionTitle": "Addresses Revisited"
      },
      {
        "uuid": "65324b63-a738-4538-9a80-a171b83eea0d",
        "correct": "Naivní přístup s fixními adresami pro sdílené knihovny se stává nepraktickým s rostoucím počtem knihoven kvůli konfliktům adres.",
        "incorrect": "Naivní přístup s fixními adresami pro sdílené knihovny je praktický i s rostoucím počtem knihoven bez konfliktů adres.",
        "sectionNumber": "12.2.10",
        "sectionTitle": "Addresses Revisited"
      },
      {
        "uuid": "997c272b-494b-44b4-aedc-93d57313029e",
        "correct": "Na mnoha systémech UNIX jsou překladač a linker standardně součástí systému.",
        "incorrect": "Na všech systémech UNIX jsou překladač a linker standardně součástí systému.",
        "sectionNumber": "12.2.11",
        "sectionTitle": "Compiler, Linker &c."
      },
      {
        "uuid": "2ab02509-b827-479b-9aa6-aeb53b9d0633",
        "correct": "Překladač jazyka C se obvykle vyvolává příkazem ‹cc›.",
        "incorrect": "Překladač jazyka C se nikdy nevyvolává příkazem ‹cc›.",
        "sectionNumber": "12.2.11",
        "sectionTitle": "Compiler, Linker &c."
      },
      {
        "uuid": "f88c6e42-467a-47e3-b061-b3bd0de4bae0",
        "correct": "Pro správu archivů, statických knihoven, se používá program ‹ar›.",
        "incorrect": "Pro správu archivů, statických knihoven, se používá program ‹ld›.",
        "sectionNumber": "12.2.11",
        "sectionTitle": "Compiler, Linker &c."
      }
    ]
  }
];
