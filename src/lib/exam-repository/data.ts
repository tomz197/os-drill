import { ExamData } from "./types";

export const examData: ExamData = [
  {
    uuid: "4a3f319b-472d-4c93-8652-c96701b39b32",
    title: "Část 1: Virtualizate paměti",
    statements: [
      {
        uuid: "b3ffb5ea-e305-40f8-8543-f7af2e230990",
        correct:
          "instrukce tvaru ld reg_addr → reg_out načte hodnotu z paměti a uloží ji do registru; reg_addr je\nregistr, ve kterém je uložena adresa, kterou program požaduje\n\ninstrukce tvaru st reg_in → reg_addr naopak hodnotu do paměti uloží, a to opět na adresu zadanou registrem reg_addr.",
        incorrect:
          "instrukce tvaru ld reg_addr → reg_out načte hodnotu z paměti a uloží ji do registru; reg_addr je\nregistr, ve kterém je uložena nějaká hodnota\n\ninstrukce tvaru st reg_in → reg_addr naopak hodnotu do paměti uloží, a to opět na adresu zadanou registrem reg_addr.",
      },
      {
        uuid: "f8ac38e3-28a3-47ab-ae7d-253a5539328b",
        correct:
          "Každá adresa je číslo, ale ne každé číslo je platná adresa. Adresním prostorem\ntedy budeme nazývat zejména množinu platných adres, ale můžeme v tomto pojmu zahrnout i případnou další\nzajímavou strukturu paměti (např. to, že nějaká část adres má jiné vlastnosti než ty ostatní).\nAdresní prostor se obvykle skládá ze souvislých bloků, kde jednotlivé bloky obsahují mnoho po sobě\njdoucích adres (řádově miliony).",
        incorrect:
          "Každá adresa je číslo, ale ne každé číslo je platná adresa. Adresním prostorem\ntedy budeme nazývat zejména množinu platných adres, ale můžeme v tomto pojmu zahrnout i případnou dalš\n zajímavou strukturu paměti (např. to, že nějaká část adres má jiné vlastnosti než ty ostatní).\nAdresní prostor se obvykle skládá bloků, kde jednotlivé bloky obsahují libovolné adresy.",
      },
      {
        uuid: "45bbaf51-d3af-4340-a66d-1f4874d94feb",
        correct:
          "Program má při svém běhu k dispozici nějaký adresní prostor, který může používat\nk ukládání dat. Krom pracovní paměti (do které si program ukládá libovolná data jak uzná za vhodné) je\nsoučástí adresního prostoru programu také kód – adresy, na kterých jsou uloženy instrukce, ze kterých\nprogram samotný sestává, a obvykle také hardwarový zásobník, který se používá k realizaci podprogramů\n(volání funkcí).",
        incorrect:
          "Program má při svém běhu k dispozici nějaký adresní prostor, který může používat\nk ukládání dat. Krom pracovní paměti (do které si program ukládá libovolná data jak uzná za vhodné) je\nsoučástí adresního prostoru programu také kód – adresy, na kterých jsou uloženy instrukce, ze kterých\nprogram samotný sestává, ovšem zásobník se zde obvykle nenachází.",
      },
      {
        uuid: "249a0cd3-fdd7-430e-9d0c-ef7d9ed03f08",
        correct:
          "Fyzická paměť\nFyzické adresy (tedy adresy, které patří fyzickému adresnímu prostoru) přímo\npojmenovávají fyzické paměťové buňky hardwarových zařízení, zejména paměti RAM. Přestože se jedná\no jeden adresní prostor, podobně jako v případě paměti programu může mít další strukturu.\nNejvětší a nejdůležitější blok (případně několik bloků) fyzických adres zpravidla patří operační paměti\n(paměti s přímým přístupem, random access memory, RAM). Toto je paměť v klasickém smyslu tohoto slova,\na slouží především k ukládáni pracovních dat programů",
        incorrect:
          "Fyzická paměť\nFyzické adresy (tedy adresy, které patří fyzickému adresnímu prostoru) přímo\npojmenovávají fyzické paměťové buňky procesoru. Přestože se jedná o jeden adresní prostor\n podobně jako v případě paměti programu může mít další strukturu.\n",
      },
      {
        uuid: "ba227eda-b390-4871-967e-054080f7404d",
        correct:
          "Virtualizace\nV principu nic nebrání tomu, aby program používal k práci s pamětí přímo fyzické adresy.\nV takovém případě bychom program přizpůsobili tomu, které fyzické adresy jsou na našem počítači platné\na odpovídají operační paměti.\nJakmile bychom ale chtěli na jednom počítači spustit několik programů najednou, začneme narážet na\nproblémy. Programy by mezi sebou musely použití adres koordinovat: používá-li program A adresu 0x1005\npro svoji proměnnou, nemůže ji zároveň používat program B.",
        incorrect:
          "Virtualizace\nV principu nic nebrání tomu, aby program používal k práci s pamětí přímo fyzické adresy.\nV takovém případě bychom program přizpůsobili tomu, které fyzické adresy jsou na našem počítači platné\na odpovídají operační paměti.\nTakto nemůžou vzniknout žádné problémy a tedy je virtualizace procesoru zbytečná.\n",
      },
      {
        uuid: "4c00da3a-d5da-42d2-9345-de1fa8edc0a2",
        correct:
          "Virtuální a fyzické adresy\nBylo by tedy lepší, aby adresní prostor programu byl od toho fyzického\nnezávislý. Proto procesory určené pro běžné počítače poskytují oddělený virtuální adresní prostor,\nkterý je viditelný pro programy, a který je od toho fyzického důsledně oddělen. Fyzický adresní prostor\nje uživatelským programům zcela nepřístupný.",
        incorrect:
          "Virtuální a fyzické adresy\nBylo by tedy lepší, aby adresní prostor programu na tom fyzickém závislý.\nProto procesory určené pro běžné počítače poskytují spojení virtuálních adresních prostorů s těmi fyzickými. Fyzický adresní prostor\nje tedy uživatelským programům libovolně přístupný.",
      },
      {
        uuid: "ab3a3c34-0bd9-4827-a6ae-70aab949fe10",
        correct:
          "Překlad adres\nVirtuální adresy budeme překládat na adresy fyzické, které již určí, kde budou příslušná data skutečně uložena.\nO fyzické buňce pak můžeme říct, že má právě jednu fyzickou adresu (a ta je této buňce přidělena\npevně) a nějaké virtuální adresy (to jsou ty, které se přeloží na její fyzickou adresu). Buňka může mít\nvirtuálních adres hned několik, ale také třeba žádnou",
        incorrect:
          "Překlad adres\nVirtuální adresy budeme překládat na adresy fyzické, které již určí, kde budou příslušná data skutečně uložena.\nO fyzické buňce pak můžeme říct, že má právě jednu fyzickou adresu (a ta je této buňce přidělena\npevně) a právě jednu virtuální adresu (a ta není této buňce přidělena pevně).",
      },
      {
        uuid: "7a1fc979-d76f-4c1f-8c38-e2ec3af979f8",
        correct:
          "Jednotka správy paměti\nPřístup do paměti (čtení, zápis) je časově kritickou operací – procesor\njich provádí miliony za vteřinu. Přitom adresní operand instrukce, která takový přístup realizuje,\npředstavuje vždy virtuální adresu, která musí být ještě před samotným přístupem přeložena na adresu\nfyzickou.",
        incorrect:
          "Jednotka správy paměti\nPřístup do paměti (čtení, zápis) je časově kritickou operací – procesor\njich provádí miliony za vteřinu. Přitom adresní operand instrukce, která takový přístup realizuje,\npředstavuje vždy fyzickou adresu, která musí být ještě před samotným přístupem přeložena na adresu\nvirtuální.",
      },
      {
        uuid: "82019a92-bbab-455e-a02d-a23b1b44d1a4",
        correct:
          "Jednotka správy paměti\nPřeklad adres proto musí být velmi rychlý, a není nijak překvapivé, že je realizován specializovaným\nhardwarem, který je přímo součástí procesoru. Zároveň ale potřebujeme zabezpečit, aby o konkrétní\npodobě překladu mohl rozhodovat operační systém. Proto musí být tato tzv. jednotka správy paměti\nprogramovatelná – pomocí vhodně sestavených tabulek může operační systém (konkrétně jeho jádro)\nřídit mapování virtuálních adres na fyzické, a tedy i to, jak budou vypadat jednotlivé virtuální adresní\nprostory.",
        incorrect:
          "Jednotka správy paměti\nPřeklad adres proto musí být velmi rychlý, a není nijak překvapivé, že je realizován specializovaným\nhardwarem, který je přímo součástí procesoru. Zároveň ale nesmíme dovolit aby operační systém jakkoli, jinak by došlo k porušení abstrakce.",
      },
      {
        uuid: "55366681-0aa7-4560-8d3b-04d25daaf52b",
        correct:
          "Stránky\nStránka je pak základní jednotkou překladu. Tím se jednak zmenší potřebné tabulky, jednak se tím\nzjednoduší proces překladu. Budeme-li totiž požadovat, aby:\n\n1. stránka obsahovala 2**n\nadres (tj. měla velikost 2**n bajtů),\n2. stránka začínala adresou, která je beze zbytku dělitelná 2**n\n3. byla mapována na fyzickou adresu, která je také beze zbytku dělitelná 2**n,\n\nmůžeme spodních n bitů virtuální adresy přímo použít jako spodních n bitů adresy fyzické. Zbytek fyzické adresy již dopočítáme podle překladové tabulky.\nTo má mimo jiné za důsledek, že stránky se nemohou překrývat.",
        incorrect:
          "Stránky\nStránka je pak základní jednotkou překladu. Tím se jednak zmenší potřebné tabulky, jednak se tím\nzjednoduší proces překladu. Budeme-li totiž požadovat, aby:\n\n1. stránka obsahovala 2**n\nadres (tj. měla velikost 2**n bajtů),\n2. stránka začínala adresou, která je beze zbytku dělitelná 2\n3. byla mapována na fyzickou adresu, která je také beze zbytku dělitelná 2,\n\nmůžeme spodních n bitů virtuální adresy přímo použít jako spodních n bitů adresy fyzické. Zbytek fyzické adresy již dopočítáme podle překladové tabulky. \nTo má mimo jiné za důsledek, že stránky se nemohou překrývat.",
      },
      {
        uuid: "c9aeb2a5-af9b-4795-8391-7b51e6b9b5b3",
        correct:
          "Stránkové tabulky\nStránkové tabulky jsou uloženy v operační paměti, ale jejich přesná struktura\nje opět vlastností konkrétního hardwaru. Protože moderní počítače mají velké adresní prostory (2**32 nebo 2**64 virtuálních adres), \npoužívají obvykle řídké, víceúrovňové překladové tabulky.",
        incorrect:
          "Stránkové tabulky\nStránkové tabulky jsou uloženy v operační paměti, ale jejich přesná struktura\nje opět vlastností konkrétního hardwaru. Protože moderní počítače mají velké adresní prostory (2**32 nebo 2**64 virtuálních adres), \npoužívají obvykle husté, jednoúrovňové překladové tabulky.",
      },
      {
        uuid: "afc19ad0-8b8d-4b57-b248-d580fe1ed117",
        correct:
          "Proces\nPojem běžící program je poněkud vágní, proto si pro něj zavedeme formálnější alternativu\n– proces. Tímto pojmem budeme označovat entitu, která:\n• je spojena s virtuálním adresním prostorem, který\n     ∘ obsahuje kód – instrukce – nějakého programu,\n     ∘ veškerá data, která tento program potřebuje pro svůj běh,\n• operační systém o ni vede záznam,\n• může vlastnit krom paměti i další zdroje",
        incorrect:
          "Proces\nPojem běžící program je poněkud vágní, proto si pro něj zavedeme formálnější alternativu\n– proces. Tímto pojmem budeme označovat entitu, která:\n• je spojena s fyzickým adresním prostorem, který\n     ∘ obsahuje kód – instrukce – nějakého programu,\n     ∘ veškerá data, která tento program potřebuje pro svůj běh,\n• operační systém o ni vede záznam,\n• může vlastnit krom paměti i další zdroje",
      },
      {
        uuid: "ae683a29-06e8-4423-bff3-431dcdeffe8c",
        correct:
          "Ochrana paměti\n• Kód programu (a případná data, která jsou určena výhradně ke čtení) může být ve fyzické paměti uložen\npouze jednou i v případě, kdy tento kód využívá více procesů. Jedná se o užitečnou a zároveň bezpečnou\noptimalizaci, protože odpovídající virtuální adresy jsou v obou procesech označeny příznakem pouze\npro čtení, a procesy se tak nemohou skrze tyto adresy vzájemně ovlivňovat.\n• Na žádost programu může být dvěma procesům do jejich virtuálních adresních prostorů namapován\nstejný blok fyzické paměti i v režimu umožňujícím zápis. Smyslem takto namapované paměti je umožnit\nkomunikaci mezi dotčenými procesy: mohou si tímto způsobem totiž jednoduše předávat data. Pozor:\nvirtuální adresy takto namapované paměti nebudou obecně v obou procesech stejné.",
        incorrect:
          "Ochrana paměti\n• Kód programu (a případná data, která jsou určena výhradně ke čtení) může být ve fyzické paměti uložen\npouze jednou i v případě, kdy tento kód využívá více procesů. Jedná se o užitečnou a zároveň bezpečnou\noptimalizaci, protože odpovídající virtuální adresy jsou v obou procesech označeny příznakem pouze\npro čtení, a procesy se tak nemohou skrze tyto adresy vzájemně ovlivňovat.\n• Na žádost programu může být dvěma procesům do jejich virtuálních adresních prostorů namapován\nstejný blok fyzické paměti i v režimu umožňujícím zápis. Smyslem takto namapované paměti je umožnit\nkomunikaci mezi dotčenými procesy: mohou si tímto způsobem totiž jednoduše předávat data. Pozor:\nvirtuální adresy takto namapované paměti musí být v obou procesech stejné.",
      },
      {
        uuid: "2ef48559-386e-4d54-a758-d11535b9700f",
        correct:
          "Přepnutí procesu\nZatím jsme nezmínili, jak procesor (resp. jednotka správy paměti) najde\nstránkovou tabulku první úrovně. Odpověď na tuto otázku je klíčem k přepínání procesů:\n1. fyzická adresa stránkové tabulky 1. úrovně je uložena ve speciálním registru procesoru,\n2. tuto adresu je možné nastavit privilegovanou instrukcí (privilegovanou v tomto případě znamená, že\nji může provést pouze jádro),\n3. změnou hodnoty v tomto registru se aktivuje překlad adres podle nově zavedené stránkové tabulky",
        incorrect:
          "Přepnutí procesu\nZatím jsme nezmínili, jak procesor (resp. jednotka správy paměti) najde\nstránkovou tabulku první úrovně. Odpověď na tuto otázku je klíčem k přepínání procesů:\n1. fyzická adresa stránkové tabulky 1. úrovně je uložena ve speciálním registru procesoru,\n2. tuto adresu může nastavit libovolný uživatelský program ve speciálním režimu\n3. změnou hodnoty v tomto registru se aktivuje překlad adres podle nově zavedené stránkové tabulky.",
      },
      {
        uuid: "a2d7aad3-93f4-4467-a206-2dc10342c61c",
        correct:
          "Vytvoření procesu\nAsi nejjednodušší způsob, jak vytvořit nový proces, je duplikace nějakého\nexistujícího (POSIX této operaci říká fork). V mnoha operačních systémech je to dokonce způsob jediný.19\nMohlo by se zdát, že je to způsob dost neefektivní: procesy mohou mít virtuální adresní prostor\no velikosti mnoha GiB a duplikace takového množství paměti vyžaduje vynaložení značných prostředků.\nOperační systémy proto používají trik, který zde vede k výrazné úspoře, a se kterým se setkáme ještě\nv několika kontextech.\nTento trik nese název „copy on write“ a jeho myšlenka je poměrně jednoduchá:\n1. vytvoříme kopii adresního prostoru (tedy relevantních stránkových tabulek, nikoliv samotných dat),\n2. v obou kopiích označíme všechny stránky příznakem jen pro čtení a poznačíme si také, že se jedná o\n„copy on write“ stránky.",
        incorrect:
          "Vytvoření procesu\nAsi nejjednodušší způsob, jak vytvořit nový proces, je duplikace nějakého\nexistujícího (POSIX této operaci říká fork). V mnoha operačních systémech je to dokonce způsob jediný.19\nMohlo by se zdát, že je to způsob dost neefektivní: procesy mohou mít virtuální adresní prostor\no velikosti mnoha GiB a duplikace takového množství paměti vyžaduje vynaložení značných prostředků.\nOperační systémy proto používají trik, který zde vede k výrazné úspoře, a se kterým se setkáme ještě\nv několika kontextech.\nTento trik nese název „copy on write“ a jeho myšlenka je poměrně jednoduchá:\n1. vytvoříme kopii fyzických adres (tedy relevantních fyzických buněk, nikoliv samotných dat),\n2. v obou kopiích označíme všechny stránky příznakem jen pro čtení a poznačíme si také, že se jedná o\n„copy on write“ stránky.",
      },
      {
        uuid: "948a1dd0-0cbb-40e1-a5b7-331b19eccfb2",
        correct:
          "Externí stránkování \nMá-li OS nedostatek použitelných fyzických adres (například proto, že běží hodně programů, které využívají hodně\npaměti), může některou stránku odstěhovat z operační paměti někam jinam – např. na externí (pevné)\núložiště, které je sice obvykle mnohem pomalejší, ale také má obvykle mnohem větší kapacitu. Nebude-li\nse stávat příliš často, že program potřebuje k takto „odklizené“ stránce přistoupit, nemusí se jednat\no zásadní problém.",
        incorrect:
          "Externí stránkování \nMá-li OS nedostatek použitelných fyzických adres (například proto, že běží hodně programů, které využívají hodně\npaměti), může některou stránku odstěhovat z operační paměti někam jinam – např. na externí (pevné)\núložiště, které je sice obvykle mnohem pomalejší, ale také má obvykle mnohem větší kapacitu. Nebude-li\nse stávat příliš často, že program k dané stránce dlouhodobě nepřistupuje, nemusí se jednat\no zásadní problém.",
      },
      {
        uuid: "11bf9d6c-eae4-42ed-b643-57e6575f149f",
        correct:
          "Rámce a stránky\n• stránkou budeme i nadále označovat rozsah virtuálních adres,\n   ∘ také stále platí, že stránky mají pevnou velikost (počet virtuálních adres, které obsahuje), a že\n   ∘ nejnižší adresa stránky musí být beze zbytku dělitelná velikostí stránky,\n• rámcem budeme označovat rozsah fyzických adres,\n   ∘ které splňují stejné požadavky na velikost a zarovnání jako stránky,\n   ∘ a na jeden rámec mapovat právě jednu stránku.\nLze pak mluvit o tom, že daná stránka je uložena v nějakém rámci, případně že daný rámec je volný.",
        incorrect:
          "Rámce a stránky\n• stránkou budeme i nadále označovat rozsah fyzických adres,\n   ∘ také stále platí, že stránky mají pevnou velikost (počet virtuálních adres, které obsahuje), a že\n   ∘ nejnižší adresa stránky musí být beze zbytku dělitelná velikostí stránky,\n• rámcem budeme označovat rozsah virtuálních adres,\n   ∘ které splňují stejné požadavky na velikost a zarovnání jako stránky,\n   ∘ a na jeden rámec mapovat právě jednu stránku.\nLze pak mluvit o tom, že daná stránka je uložena v nějakém rámci, případně že daný rámec je volný.",
      },
      {
        uuid: "0c97920f-f8ce-4e4a-8288-4806281f481c",
        correct:
          "Líné načítání\nLíné načítání lze také výhodně kombinovat s klasickým externím stránkováním – vybereme-li jako oběť\nstránku s kódem (nebo konstantními daty) programu, není potřeba ji nikam ukládat – lze ji přímo odkázat\nzpátky na spustitelný soubor.",
        incorrect:
          "Líné načítání\nLíné načítání lze také výhodně kombinovat s klasickým externím stránkováním – vybereme-li jako oběť\nstránku s kódem (nebo konstantními daty) programu, stačí stránku uložit do operační paměti",
      },
      {
        uuid: "bede55a6-4eb7-495d-a782-db33aa4ddd6d",
        correct:
          "Mapování souborů\nPosledním, jednoznačně nejdůležitějším, využitím externího stránkování je\nmapování datových souborů do paměti (na žádost aplikace). V tomto režimu jsou externí stránky uloženy\nv jinak běžném souboru. Místo komplikovaných vstupně-výstupních operací tak může program s obsahem\nsouboru pracovat stejně, jako by byl uložen v operační paměti. Využijeme-li tohoto mechanismu také\nk zápisu změněných stránek zpátky do souboru, může program soubor i zcela transparentně upravovat.",
        incorrect:
          "Mapování souborů\nPosledním, jednoznačně nejdůležitějším, využitím externího stránkování je\nmapování datových souborů do paměti (na žádost aplikace). V tomto režimu jsou externí stránky uloženy\nv jinak běžném souboru. Místo komplikovaných vstupně-výstupních operací tak může program s obsahem\nsouboru pracovat stejně, jako by byl uložen v operační paměti. Toto ovšem zabraňujeprogramu soubor transparentně upravovat.",
      },
    ],
  },
  {
    uuid: "b10b91c1-603f-4b7a-b0af-dc38ffdc198d",
    title: "Část 2: Virtualizate procesoru",
    statements: [
      {
        uuid: "264eddb9-905b-45b7-a88b-053ffde2a858",
        correct:
          "Výpočet\nProcesor vykonává instrukce, čím realizuje výpočet. Nejjednodušší třídou instrukcí jsou\ntzv. aritmetické a logické instrukce (tedy ty, které provádí ALU – aritmeticko-logická jednotka). Tím se\nmyslí zejména:\n• aritmetika: sčítání, odečítání, násobení a dělení,\n• bitové operace: and, or, xor po bitech, bitové posuvy,\n• srovnání dvou hodnot (rovnost, nerovnost) – výsledek se uloží do běžného registru nebo do stavového\npříznaku procesoru.",
        incorrect:
          "Výpočet\nOperační paměť vykonává instrukce, čím realizuje výpočet. Nejjednodušší třídou instrukcí jsou\ntzv. aritmetické a logické instrukce (tedy ty, které provádí ALU – aritmeticko-logická jednotka). Tím se\nmyslí zejména:\n• aritmetika: sčítání, odečítání, násobení a dělení,\n• bitové operace: and, or, xor po bitech, bitové posuvy,\n• srovnání dvou hodnot (rovnost, nerovnost) – výsledek se uloží do běžného registru nebo do stavového\npříznaku procesoru.",
      },
      {
        uuid: "edb552d0-c513-4db9-bb3d-1e40efe1d267",
        correct:
          "Registry\nPodobně jako paměť, registry slouží k ukládáni čísel – existují dva klíčové rozdíly mezi\nregistry a pamětí:\n1. pojmenování registru je pevnou součástí instrukce, kdežto paměťovou adresu lze vypočítat (paměť\nlze indexovat, registry nikoliv),\n2. reprezentace čísla v registru je monolitická – registry nejsou složené z bajtů, daný registr obsahuje\ncelé slovo (částečně důsledek předchozího bodu: registr lze pojmenovat pouze jako celek).",
        incorrect:
          "Registry\nPodobně jako paměť, registry slouží k ukládáni čísel – existují dva klíčové rozdíly mezi\nregistry a pamětí:\n1. pojmenování registru je pevnou součástí instrukce, kdežto paměťovou adresu lze vypočítat (paměť\nlze indexovat, registry nikoliv),\n2. reprezentace čísla v registru – registry jsou složené z bajtů, daný registr obsahuje\nbajty jako každá jíná část paměti",
      },
      {
        uuid: "76747520-5f05-4cb6-8605-7e9de42684cd",
        correct:
          "Programový čítač\nVyhrazený registr (programový čítač, angl. program counter, někdy také instruction pointer, budeme\njej označovat pc) pak obsahuje virtuální adresu právě vykonávané instrukce. Tento registr rozhoduje\no tom, která instrukce se má vykonat, není do něj ale obvykle možné zapisovat běžnými (aritmetickými,\natp.) instrukcemi. K tomu jsou určeny instrukce řízení toku, kterých hlavním efektem je právě změna\nhodnoty programového čítače.",
        incorrect:
          "Programový čítač\nVyhrazený registr (programový čítač, angl. program counter, někdy také instruction pointer, budeme\njej označovat pc) pak obsahuje fyzickou adresu právě vykonávané instrukce. Tento registr rozhoduje\no tom, která instrukce se má vykonat, není do něj ale obvykle možné zapisovat běžnými (aritmetickými,\natp.) instrukcemi. K tomu jsou určeny instrukce řízení toku, kterých hlavním efektem je právě změna\nhodnoty programového čítače.",
      },
      {
        uuid: "573e86fc-9431-48c3-aad6-4972ecb5d0d0",
        correct:
          "Instrukce\nInstrukce je elementární příkaz strojového kódu; to znamená:\n• elementární – je to nejmenší jednotka činnosti, kterou lze procesoru zadat,\n• příkaz – instrukce řídí činnost procesoru, „přikazují“ mu provedení nějaké akce.\nInstrukcí budeme nazývat pouze celek, který obsahuje veškeré informace potřebné k provedení konkrétních\nakcí (zejména udává operaci, která se má provést, a konkrétní registry, se kterými se bude pracovat a\ntaké konkrétní přímé operandy.\nInstrukcí je pouze konečně mnoho, je tedy zejména možné je očíslovat (nebo jinak konečně kódovat,\nnapř. do sekvencí bajtů). Každé takové číslo (kódování) popisuje konkrétní akci, kterou může procesor\nprovést.\n",
        incorrect:
          "Instrukce\nInstrukce je elementární příkaz strojového kódu; to znamená:\n• elementární – je to nejmenší jednotka činnosti, kterou lze procesoru zadat,\n• příkaz – instrukce řídí činnost procesoru, „přikazují“ mu provedení nějaké akce.\nInstrukcí budeme nazývat pouze celek, který obsahuje veškeré informace potřebné k provedení konkrétních\nakcí (zejména udává operaci, která se má provést, a konkrétní registry, se kterými se bude pracovat a\ntaké konkrétní přímé operandy.\nInstrukcí je nekonečně mnoho, je tedy nepraktické je číslovat\n",
      },
      {
        uuid: "0e3f7594-8a65-4e61-bc4b-82dc78ddcc80",
        correct:
          "Efekt instrukce\nKaždá instrukce má nějaký efekt na stav procesoru, a případně (podle konkrétní instrukce) na další připojená zařízení (zejména paměť). \nTento efekt je zároveň definující charakteristikou dané instrukce.\nProgram totiž nedělá nic jiného, než že vhodnou manipulací stavu (procesoru, paměti, periferií) postupuje\nod vstupů k požadovaným výstupům. Této posloupnosti změn stavu říkáme výpočet.\n",
        incorrect:
          "Efekt instrukce\nKaždá instrukce má nějaký efekt na stav procesoru, a případně (podle konkrétní instrukce) na další připojená zařízení (zejména paměť). \nTento efekt není definující charakteristikou dané instrukce.\nProgram totiž nedělá nic jiného, než že vhodnou manipulací stavu (procesoru, paměti, periferií) postupuje\nod vstupů k požadovaným výstupům. Této posloupnosti změn stavu říkáme výpočet.\n",
      },
      {
        uuid: "cc602ec9-5701-467c-84e2-e820f207c2e4",
        correct:
          "Efekt instrukce\nJak vstupy tak výstupy programu jsou součástí stavu – vstupy na začátku, výstupy na konci výpočtu.\nVstup může být například hodnota zapsaná v nějaké buňce paměti; výstup může být třeba stav obrazovky,\nkdy rozsvícené pixely vytváří obrazec, který přečteme jako slova hello world.\nEfekt instrukce tedy není nic jiného, než elementární změna stavu, nebo jinak řečeno elementární výpočet.\nInstrukci samotnou tak můžeme chápat jako pokyn k provedení takového elementárního výpočtu.",
        incorrect:
          "Efekt instrukce\nJak vstupy tak výstupy programu jsou součástí stavu – vstupy na začátku, výstupy na konci výpočtu.\nVstup musí být hodnota zapsaná v nějaké buňce paměti; výstup může být třeba stav obrazovky,\nkdy rozsvícené pixely vytváří obrazec, který přečteme jako slova hello world.\nEfekt instrukce tedy není nic jiného, než elementární změna stavu, nebo jinak řečeno elementární výpočet.\nInstrukci samotnou tak můžeme chápat jako pokyn k provedení takového elementárního výpočtu.",
      },
      {
        uuid: "f31297bb-3624-4a7a-8a8f-24dadc1c134f",
        correct:
          "Program\nCo bude program počítat (resp. co bude počítat procesor řízený daným programem)\nje určeno textem programu: instrukcemi uloženými v paměti. Instrukce, které nejsou skoky, obvykle\nposouvají programový čítač za svůj vlastní konec, tedy na instrukci na nejbližší vyšší adrese. Většina\nprogramu je tedy prováděna v pořadí od nižších k vyšším (virtuálním) adresám.\nVýjimku samozřejmě tvoří instrukce skoku, které mohou některé adresy přeskočit (typicky podmíněné\npříkazy – if), nebo se naopak vrátit k některé dřívější, už vykonané instrukci (typicky cykly – while)",
        incorrect:
          "Program\nCo bude program počítat (resp. co bude počítat procesor řízený daným programem)\nje určeno textem programu: instrukcemi uloženými v paměti. Instrukce, které nejsou skoky, obvykle\nposouvají programový čítač za svůj vlastní konec, tedy na instrukci na nejbližší nižší adrese. Většina\nprogramu je tedy prováděna v pořadí od vyšších k nižším (virtuálním) adresám.\nVýjimku samozřejmě tvoří instrukce skoku, které mohou některé adresy přeskočit (typicky podmíněné\npříkazy – if), nebo se naopak vrátit k některé dřívější, už vykonané instrukci (typicky cykly – while)",
      },
      {
        uuid: "d7398ff5-6fa7-47e0-bd60-7d7f7de24b79",
        correct:
          "Zásobník\nZa účelem aktivace podprogramu by se nám hodila jakási odlehčená verze virtualizace procesoru:\n1. podprogram je dostatečně uzavřený celek na to, aby mělo smysl jej alespoň částečně oddělit od\nostatních výpočtů – často např. používá nějaká data, která mimo tento podprogram nemají žádný\nvýznam (ve vyšším programovacím jazyce lokální proměnné),\n2. protože takový podprogram je navíc často potřeba spouštět z různých míst programu, je žádoucí mít\nnějaký mechanismus, který po ukončení výpočtu podprogramu vrátí řízení na místo, ze kterého byl\npůvodně aktivován.\nObě tyto funkce zastává zásobník (hardwarový zásobník, zásobník volání, angl. call stack, atp.). Jedná\nse o spojitou oblast virtuálního adresního prostoru, které rozsah je dán hodnotou ukazatele vrcholu\nzásobníku (jedná se o druhý „speciální“ registr, vedle programového čítače) a pevným dnem.",
        incorrect:
          "Zásobník\nZa účelem aktivace podprogramu by se nám hodila jakási odlehčená verze virtualizace procesoru:\n1. podprogram není dostatečně uzavřený celek na to, aby mělo smysl jej  oddělit od ostatních výpočtů, proto ho neoddělujeme\n2. protože takový podprogram je navíc často potřeba spouštět z různých míst programu, je žádoucí mít\nnějaký mechanismus, který po ukončení výpočtu podprogramu vrátí řízení na místo, ze kterého byl\npůvodně aktivován.\nObě tyto funkce zastává zásobník (hardwarový zásobník, zásobník volání, angl. call stack, atp.). Jedná\nse o spojitou oblast virtuálního adresního prostoru, které rozsah je dán hodnotou ukazatele vrcholu\nzásobníku (jedná se o druhý „speciální“ registr, vedle programového čítače) a pevným dnem.",
      },
      {
        uuid: "db965fa7-a4ac-410b-8117-b95d4ce665c3",
        correct:
          "Aktivační záznam\nZásobník typického programu je složen z aktivačních záznamů, známých též\njako rámců (angl. call frame). Každý takový záznam odpovídá jedné aktivaci podprogramu, která\ndosud neskončila. Jak jistě víte, podprogramy se mohou aktivovat (volat) vzájemně, nebo může dokonce\npodprogram opakovaně aktivovat sám sebe – jev, který pravděpodobně znáte jako rekurzi.\nJe také relativně logické, že má-li nějaký podprogram skončit (a tedy má být jeho aktivační záznam\nodstraněn), musí nejprve skončit všechny podprogramy, které sám aktivoval (přímo či nepřímo). Tato\nskutečnost je odpovědná za to, že aktivační rámce tvoří právě zásobník (a ne třeba frontu, strom,\ngraf, nebo jinou strukturu).",
        incorrect:
          "Aktivační záznam\nZásobník typického programu je složen z aktivačních záznamů, známých též\njako rámců (angl. call frame). Každý takový záznam odpovídá jedné aktivaci podprogramu, který již skončil.\nJak jistě víte, podprogramy se mohou aktivovat (volat) vzájemně, nebo může dokonce\npodprogram opakovaně aktivovat sám sebe – jev, který pravděpodobně znáte jako rekurzi.\nJe také relativně logické, že má-li nějaký podprogram skončit (a tedy má být jeho aktivační záznam\nodstraněn), musí nejprve skončit všechny podprogramy, které sám aktivoval (přímo či nepřímo). Tato\nskutečnost je odpovědná za to, že aktivační rámce tvoří právě zásobník (a ne třeba frontu, strom,\ngraf, nebo jinou strukturu).",
      },
      {
        uuid: "6d7106a8-25f6-4fee-a1fa-22bc19ab9a5e",
        correct:
          "Stav procesoru\nStav procesoru tedy sestává z:\n1. hodnot uložených v aritmetických registrech,\n2. hodnoty programového čítače,\n3. hodnoty ukazatele zásobníku.\nV případě, že:\n• program neobsahuje instrukce přístupu do paměti,\n• nebo celý virtuální adresní prostor je přístupný pouze aktivnímu programu,\nje celý výpočet jednoznačně určen programem samotným a počátečním stavem procesoru (a případně\npaměti).",
        incorrect:
          "Stav procesoru\nStav procesoru tedy sestává z:\n1. hodnot uložených v aritmetických registrech,\n2. hodnoty programového čítače,\n3. hodnoty ukazatele zásobníku.\nV případě, že:\n• program neobsahuje instrukce přístupu do paměti,\n• a celý virtuální adresní prostor je přístupný pouze aktivnímu programu\nje celý výpočet jednoznačně určen programem samotným a počátečním stavem procesoru (a případně\npaměti).",
      },
      {
        uuid: "93f63c6e-b694-4845-8406-08800e539e6c",
        correct:
          "Vlákno\nNyní jsme konečně připraveni definovat pojem vlákno: je to\n• výpočet (posloupnost změn stavu), který vznikne\n• nepřerušenou činností jednoho procesoru, který je\n• po celou dobu řízen jedním programem.\nVšimněte si, že neklademe žádné požadavky na adresní prostor. Takový výpočet tedy není jednoznačně\nurčen, protože není izolován – součástí takového výpočtu může být synchronizace, a tedy průběh výpočtu\nkrom samotného programu a počátečního stavu bude záviset také na vnějších událostech, které může\nvlákno skrze svůj adresní prostor pozorovat.\nZa povšimnutí také stojí, že definice nepovoluje, aby se stav procesoru měnil jakkoliv jinak, než\nřízením programu. Bude také výhodné předpokládat, že zásobník je pro externí entity nepřístupný a že\njej tedy chápat jako součást stavu vlákna (který je jinak shodný se stavem procesoru).",
        incorrect:
          "Vlákno\nNyní jsme konečně připraveni definovat pojem vlákno: je to\n• výpočet (posloupnost změn stavu), který vznikne\n• nepřerušenou činností jednoho procesoru, který je\n• po celou dobu řízen jedním programem.\nVšimněte si, že neklademe žádné požadavky na adresní prostor. Takový výpočet tedy je jednoznačně určen.\nZa povšimnutí také stojí, že definice nepovoluje, aby se stav procesoru měnil jakkoliv jinak, než\nřízením programu. Bude také výhodné předpokládat, že zásobník je pro externí entity nepřístupný a že\njej tedy chápat jako součást stavu vlákna (který je jinak shodný se stavem procesoru).",
      },
      {
        uuid: "9fb6a8a7-7b14-4017-b677-8de65c98e3b2",
        correct:
          "Logický procesor\nDefinice vlákna se odvolává na nepřerušenou činnost procesoru. Pro účely této\ndefinice si ale vystačíme s velmi abstraktním chápáním procesoru:\n1. procesor má stav, který sestává právě z hodnot registrů,\n2. procesor svůj stav mění vykonáváním instrukcí (a nijak jinak).\nTakto popsaný procesor budeme nazývat logickým procesorem. Má několik zajímavých vlastností:\n1. je zřejmé, že výpočet logického procesoru lze přímočaře realizovat na fyzickém procesoru,\n2. stav logického procesoru je velmi jednoduchý a tedy není těžké si představit, že bychom ho mohli\nnapříklad uložit do paměti (to se nakonec částečně děje i při aktivaci podprogramu),\n3. lze si také představit, že bychom mohli fyzický procesor do takto uloženého stavu zase vrátit.\nPředpokládejme, že operace z bodů 2 a 3 skutečně existují, a že je může operační systém provést bez\nsoučinnosti aktuálně prováděného vlákna. Pak už je jednoduše vidět, jak realizovat několik logických\nprocesorů pomocí jednoho fyzického, a tím dosáhnout virtualizace procesoru\n",
        incorrect:
          "Logický procesor\nDefinice vlákna se odvolává na nepřerušenou činnost procesoru. Pro účely této\ndefinice si ale vystačíme s velmi abstraktním chápáním procesoru:\n1. procesor má stav, který sestává právě z hodnot registrů,\n2. procesor svůj stav mění vykonáváním instrukcí (a nijak jinak).\nTakto popsaný procesor budeme nazývat logickým procesorem. Má několik zajímavých vlastností:\n1. je zřejmé, že výpočet logického procesoru lze přímočaře realizovat na fyzickém procesoru,\n2. stav logického procesoru je velmi složitý a tedy není možné ho uložit do paměti \n",
      },
      {
        uuid: "53447778-7381-4f94-9654-0ad066ba6a3e",
        correct:
          "Přepnutí vlákna\nProtože můžeme uložit, a později obnovit, stav logického procesoru, můžeme na\njednom fyzickém procesoru provádět střídavě několik různých vláken, a zároveň zabezpečit, že každé\nvlákno má, ze svého vlastního pohledu, pomyslný vlastní procesor.\nCo obnáší uložení a obnova registru závisí na jejich typu:\n1. aritmetické registry – teoreticky nepředstavují problém, ale protože bez aritmetických registrů\nnelze nic počítat, nelze bez asistence procesoru uložit ani obnovit všechny,\n2. ukazatel zásobníku v principu jednoduché jak uložit tak obnovit, problém ale nastane, používáme-li\nzásobníkové instrukce k manipulaci s ostatními registry,\n3. programový čítač představuje největší problém: nelze přímo ani uložit (vyžadovalo by součinnost\nprováděného programu), ani obnovit (obnovou automaticky ztrácíme kontrolu nad procesorem, musí\ntedy být provedena v posledním kroku, kdy už ale nemáme k dispozici žádné aritmetické registry).\n",
        incorrect:
          "Přepnutí vlákna\nProtože můžeme uložit, a později obnovit, stav logického procesoru, můžeme na\njednom fyzickém procesoru provádět střídavě několik různých vláken, a zároveň zabezpečit, že každé\nvlákno má, ze svého vlastního pohledu, pomyslný vlastní procesor.\nCo obnáší uložení a obnova registru závisí na jejich typu:\n1. aritmetické registry – teoreticky nepředstavují problém, protože je lze obnovit všechny,\n2. ukazatel zásobníku v principu jednoduché jak uložit tak obnovit, problém ale nastane, používáme-li\nzásobníkové instrukce k manipulaci s ostatními registry,\n3. programový čítač představuje největší problém: nelze přímo ani uložit (vyžadovalo by součinnost\nprováděného programu), ani obnovit (obnovou automaticky ztrácíme kontrolu nad procesorem, musí\ntedy být provedena v posledním kroku, kdy už ale nemáme k dispozici žádné aritmetické registry).\n",
      },
      {
        uuid: "7e9a4b08-e60e-4df7-b41a-20437c17ae03",
        correct:
          "Plánovač\nČásti jádra operačního systému, která je odpovědná za přidělování procesorů vláknům\nříkáme plánovač vláken, často také z historických důvodů plánovač procesů. Plánovač je na každém\nprocesoru aktivován v pravidelných intervalech a je mu tedy umožněno odebrat procesor aktivnímu\nvláknu i bez součinnosti tohoto vlákna.\nZákladním rozhodnutím plánovače při každé aktivaci je: „Má aktivní vlákno (logický procesor) pokračovat\nve výpočtu, nebo má být přerušeno (preempted). Které vlákno má být na procesoru spuštěno jako další?\n",
        incorrect:
          "Plánovač\nČásti jádra operačního systému, která je odpovědná za přidělování procesorů vláknům\nříkáme plánovač vláken, často také z historických důvodů plánovač procesů. Plánovač je jen na hlavním\nprocesoru aktivován v pravidelných intervalech a je mu tedy umožněno odebrat procesor aktivnímu\nvláknu i bez součinnosti tohoto vlákna.\nZákladním rozhodnutím plánovače při každé aktivaci je: „Má aktivní vlákno (logický procesor) pokračovat\nve výpočtu, nebo má být přerušeno (preempted). Které vlákno má být na procesoru spuštěno jako další?\n",
      },
      {
        uuid: "a807cb62-7b73-4c6d-a1b3-885a7b62172d",
        correct:
          "Cíle plánovače\nNa plánovací algoritmus (a plánovač jako celek) máme několik základních požadavků:\n1. maximalizovat propustnost\n2. minimalizovat latenci (prodlevu)\n3. udržovat férovost\nJe na první pohled vidět, že některé požadavky jsou protichůdné: zejména latence a propustnost často\nstojí proti sobě, a zlepšení jednoho parametru vede ke zhoršení toho druhého.",
        incorrect:
          "Cíle plánovače\nNa plánovací algoritmus (a plánovač jako celek) máme několik základních požadavků:\n1. minimalizovat propustnost\n2. maximalizovat latenci (prodlevu)\n3. udržovat férovost\nJe na první pohled vidět, že některé požadavky jsou protichůdné: zejména latence a propustnost často\nstojí proti sobě, a zlepšení jednoho parametru vede ke zhoršení toho druhého.",
      },
      {
        uuid: "09258925-1c6f-418f-9249-066118f9cb02",
        correct:
          "Stav vlákna\nVlákno (které ještě neskončilo) může být, z pohledu plánovače, ve třech základních\nstavech:\n1. právě běží – má aktuálně přidělený procesor,\n2. připraveno ke běhu, ale čeká na procesor – vlákno bylo přerušeno plánovačem (nebo nebylo dosud nikdy\nspuštěno), ale jinak mu nic nebrání pokračovat ve výpočtu,\n3. čeká na událost – vlákno je „zaseknuté“ v synchronizační smyčce a nemůže pokračovat ve výpočtu,\ndokud nenastane nějaká externí událost (plánovači musí být tento stav explicitně oznámen, jinak jej\nnemá jak rozeznat od běžného výpočtu).\n\nnemůže se stát, že by vlákno, které čekalo na procesor, přešlo do stavu čekání na událost\n– tento přechod totiž vyžaduje nějakou akci, kterou musí provést samotné vlákno.\n",
        incorrect:
          "Stav vlákna\nVlákno (které ještě neskončilo) může být, z pohledu plánovače, ve třech základních\nstavech:\n1. právě běží – má aktuálně přidělený procesor,\n2. připraveno ke běhu, ale čeká na procesor – vlákno bylo přerušeno plánovačem (nebo nebylo dosud nikdy\nspuštěno), ale jinak mu nic nebrání pokračovat ve výpočtu,\n3. čeká na událost – vlákno je „zaseknuté“ v synchronizační smyčce a nemůže pokračovat ve výpočtu,\ndokud nenastane nějaká externí událost (plánovači musí být tento stav explicitně oznámen, jinak jej\nnemá jak rozeznat od běžného výpočtu).\n\nVlákno může libovolně přecházet mezi všemi stavy, tyto přechody jsou řízeny procesorem",
      },
      {
        uuid: "0062ed2f-5b53-47e1-967f-438071449e4e",
        correct:
          "Fronta úloh\nZákladním pracovním nástrojem plánovače jsou běhové fronty úloh (angl. run queue),\ndo kterých plánovač řadí vlákna, která čekají na procesor. Konkrétní plánovací algoritmy se pak liší\nzejména v tom, jak se tyto fronty chovají.\n",
        incorrect:
          "Fronta úloh\nZákladním pracovním nástrojem plánovače jsou běhové fronty úloh (angl. run queue),\ndo kterých plánovač řadí vlákna, která čekají na událost. Konkrétní plánovací algoritmy se pak liší\nzejména v tom, jak se tyto fronty chovají.\n",
      },
      {
        uuid: "dc0cea85-6120-4820-81f0-66da52c1cd8a",
        correct:
          "Afinita\nProtože migrace vlákna na jiný fyzický procesor není zadarmo, je žádoucí zbytečným\nmigracím vláken zamezit. Mluvíme v takovém případě o afinitě vlákna ke konkrétnímu fyzickému procesoru:\nplánovač má snahu vlákno opakovaně plánovat na stejný fyzický procesor.\nMezní situace jsou:\n1. plánovač zcela bez afinity: např. proto, že má globální frontu a tedy je prvnímu čekajícímu vláknu\nvždy přidělen první uvolněný procesor,\n2. plánovač bez možnosti migrace: např. proto, že má lokální fronty, a neumožňuje přesun vláken mezi\nnimi.",
        incorrect:
          "Afinita\nProtože migrace vlákna na jiný fyzický procesor není zadarmo, je žádoucí zbytečným\nmigracím vláken zamezit. Mluvíme v takovém případě o afinitě vlákna ke konkrétnímu fyzickému procesoru:\nplánovač má snahu vlákno opakovaně plánovat na stejný fyzický procesor.\nMezní situace jsou:\n1. plánovač zcela bez afinity: např. proto, že má lokální fronty, a neumožňuje přesun vláken mezi\nnim,\n2. plánovač bez možnosti migrace: např. proto,že má globální frontu a tedy je prvnímu čekajícímu vláknu\nvždy přidělen první uvolněný procesor.",
      },
      {
        uuid: "9632cc6a-3d1b-42d0-ae93-530f771477c4",
        correct:
          "Prioritní fronty\nInteraktivní plánovače používají téměř výhradně nějakou formu prioritního\nplánování – vlákna mají přidělenu prioritu (staticky nebo dynamicky), která ovlivňuje jejich schopnost\nzískat procesor – a to jak latenci (jak dlouho musí vlákno čekat ve frontě) tak celkový přidělený\nvýpočetní čas (jaký díl procesorového času je vláknu přidělen).\n",
        incorrect:
          "Prioritní fronty\nInteraktivní plánovače používají téměř výhradně nějakou formu prioritního\nplánování – vlákna mají přidělenu prioritu (staticky nebo dynamicky), která ovlivňuje jejich schopnost\nzískat procesor – a to jen latenci (jak dlouho musí vlákno čekat ve frontě), celkový přidělený\nvýpočetní čas ovlivňovat nemůže\n",
      },
      {
        uuid: "d7717bf6-1f50-45fe-bb97-a71a92e79b96",
        correct:
          "Prioritní fronty\nvýhody:\n• používá pouze jednoduché datové struktury,\n• všechny operace jsou asymptoticky konstantní (vzhledem k počtu čekajících vláken – počet prioritních\ntříd je pevný).\nA také jednu důležitou nevýhodu:\n• dlouho běžící výpočetní vlákno s vysokou prioritou zablokuje procesor pro všechna ostatní vlákna.\nTuto nevýhodu lze vyřešit dynamickou úpravou priority: za každou přidělenou jednotku výpočetního času\nje vlákno „potrestáno“ snížením priority. Existují-li jiná čekající vlákna, dříve nebo později se tak\ndostanou ke slovu.",
        incorrect:
          "Prioritní fronty\nvýhody:\n• používá pouze jednoduché datové struktury,\n• všechny operace jsou asymptoticky konstantní (vzhledem k počtu čekajících vláken – počet prioritních\ntříd je pevný).\nA také jednu důležitou nevýhodu:\n• dlouho běžící výpočetní vlákno s vysokou prioritou zablokuje procesor pro všechna ostatní vlákna.\nTuto nevýhodu nelze vyřešit dynamickou úpravou priority, docházelo by k takzvanému hladovění vláken.",
      },
      {
        uuid: "ce22047e-936a-4239-9913-883084508e88",
        correct:
          "Férové plánování\nCílem férového plánovače je, aby každé vlákno dostalo přiděleno podle možnosti\nstejné množství výpočetního času (případně váženo prioritou). V tomto se podobá na systém s dynamickou\núpravou priority z předchozí sekce, ale místo pevného systému prioritních tříd má priority v libovolném\nrozsahu. Realizuje se proto klasickou (monolitickou) prioritní frontou – např. binární haldou nebo\nbinárním vyhledávacím stromem.",
        incorrect:
          "Férové plánování\nCílem férového plánovače je, aby každé vlákno dostalo přiděleno podle možnosti\nstejné množství výpočetního času (případně váženo prioritou). V tomto se podobá na systém s dynamickou\núpravou priority z předchozí sekce, ale místo pevného systému prioritních tříd má priority v libovolném\nrozsahu. Realizuje se proto zásobníkem.",
      },
      {
        uuid: "3edc6104-4785-437e-be03-f29fcc069178",
        correct:
          "Odebrání procesoru\nRozhodnutí o odebrání procesoru (tzn. přesunu vlákna ze stavu „běží“ do\nstavu „čeká na procesor“) má dva základní vstupy:\n1. jak dlouho již běží právě aktivní vlákno,\n2. srovnání aktivního vlákna a následujícího vlákna ve frontě.\nKonkrétní rozhodnutí opět závisí na konkrétním plánovacím algoritmu. Je ale obvyklé nechat aktivní\nvlákno běžet nějaký minimální čas, i v případě, že další naplánované vlákno má vyšší prioritu (tímto se\nbrání příliš častému přepínání vláken) – tento minimální čas je plánovací kvantum. Delší kvantum má\npozitivní vliv na propustnost, ale negativní vliv na latenci (reakční dobu).",
        incorrect:
          "Odebrání procesoru\nRozhodnutí o odebrání procesoru (tzn. přesunu vlákna ze stavu „běží“ do\nstavu „čeká na procesor“) má dva základní vstupy:\n1. jak dlouho již běží právě aktivní vlákno,\n2. srovnání aktivního vlákna a následujícího vlákna ve frontě.\nKonkrétní rozhodnutí opět závisí na konkrétním plánovacím algoritmu. Je ale obvyklé nechat aktivní\nvlákno běžet nějaký minimální čas, i v případě, že další naplánované vlákno má vyšší prioritu (tímto se\nbrání příliš častému přepínání vláken) – tento minimální čas je plánovací kvantum. Delší kvantum má\nnegativní vliv na propustnost, ale pozitivní vliv na latenci (reakční dobu).",
      },
      {
        uuid: "15b43073-f837-4595-9955-1d4f5aa705f8",
        correct:
          "Čekající vlákna\nVlákno je označeno jako čekající na událost (říkáme o něm také, že je uspané)\nbuď na vlastní žádost (umožňuje-li to operační systém a povaha události), nebo na popud některé jiné\nčásti operačního systému:\n• vyžádá-li například vlákno čtení ze souboru, a operační systém nemá aktuálně data k dispozici, zařádí\npožadavek na data do fronty a vlákno uspí,\n• pokusí-li se vstoupit do kritické sekce, která je aktuálně zamčená jiným vláknem,\n• vyžádá vstup z klávesnice (a zrovna není žádný k dispozici),\n",
        incorrect:
          "Čekající vlákna\nVlákno je označeno jako čekající na událost (říkáme o něm také, že je uspané) na žádost pouze operačního systému, příklad:\n• vyžádá-li například vlákno čtení ze souboru, a operační systém nemá aktuálně data k dispozici, zařádí\npožadavek na data do fronty a vlákno uspí,\n• pokusí-li se vstoupit do kritické sekce, která je aktuálně zamčená jiným vláknem,\n• vyžádá vstup z klávesnice (a zrovna není žádný k dispozici),\n",
      },
      {
        uuid: "04a66110-d893-4fdb-b17a-cdb0717b8a5a",
        correct:
          "Čekající vlákna\nUdálosti čekání jsou v zásadě dvou typů:\n• čekání na vyřízení „soukromého“ požadavku: takto uspané vlákno je poznačeno u příslušného požadavku,\na jakmile je tento vyřízen, odpovědná komponenta vlákno probudí (aktivuje plánovač, který vlákno\npřesune do běhové fronty, nebo mu ihned přidělí procesor),\n• soutěž o nějaký zdroj (např. zmiňovaná kritická sekce), který může vlastnit v danou chvíli nejvýše\njedno vlákno, ale na který jich může zároveň čekat několik: takové zdroje mají čekací frontu (angl.\nwait queue) a příslušná událost probudí (přesune do běhové fronty) pouze první vlákno z čekací fronty:\nnemá smysl probouzet všechna, protože by okamžitě všechna krom jednoho musela být zase uspána\n(vyhrát soutěž může nejvýše jedno).\n",
        incorrect:
          "Čekající vlákna\nUdálosti čekání jsou v zásadě dvou typů:\n• čekání na vyřízení „soukromého“ požadavku: takto uspané vlákno je poznačeno u příslušného požadavku,\na jakmile je tento vyřízen, odpovědná komponenta vlákno přesune na jiný procesor.\n• soutěž o nějaký zdroj (např. zmiňovaná kritická sekce), který může vlastnit v danou chvíli nejvýše\njedno vlákno, ale na který jich může zároveň čekat několik: takové zdroje mají čekací frontu (angl.\nwait queue) a příslušná událost probudí (přesune do běhové fronty) pouze první vlákno z čekací fronty:\nnemá smysl probouzet všechna, protože by okamžitě všechna krom jednoho musela být zase uspána\n(vyhrát soutěž může nejvýše jedno).\n",
      },
    ],
  },
  {
    uuid: "bb007866-d6bd-417d-9646-a312826bca5d",
    title: "Část 3: Souborové systémy",
    statements: [
      {
        uuid: "4586a34d-edac-49a2-a467-4b0003ad8eb8",
        correct:
          " Bloková zařízení\nTento typ zařízení představuje abstrakci perzistentních úložišť. Operace (abstraktního) blokového\nzařízení jsou přizpůsobené běžným schopnostem odpovídajících reálných zařízení:\n• zápis a čtení je prováděno po blocích pevné velikosti,\n• v libovolném pořadí, ale\n• s velkou latencí a malou propustností (relativně k operační paměti).",
        incorrect:
          " Bloková zařízení\nTento typ zařízení představuje abstrakci perzistentních úložišť. Operace (abstraktního) blokového\nzařízení jsou přizpůsobené běžným schopnostem odpovídajících reálných zařízení:\n• zápis a čtení je prováděno po bajtech,\n• v libovolném pořadí, ale\n• s velkou latencí a malou propustností (relativně k operační paměti).",
      },
      {
        uuid: "f62d928a-415e-4d19-b205-558e72a55e94",
        correct:
          "Trvalé úložiště\nje fyzické zařízení, které se podobá na operační paměť (pamatuje si data),\ns několika klíčovými rozdíly:\n1. data zde uložená přetrvávají „dlouhodobě“, tedy zejména i po vypnutí počítače (nebo restartu\noperačního systému),\n2. přístup k datům je pomalejší – zejména má mnohem vyšší latenci (prodlevu) mezi vystavením požadavku\na odpovědí zařízení; je proto nepraktické adresovat takové zařízení po jednotlivých bajtech (jako\ntomu je u operační paměti),\n3. proto je obvyklé, že poskytují operace, které pracují s celými bloky dat najednou (velikost 512 bajtů\na víc, často 4 KiB) – základní operací je pak přesun takového bloku mezi zařízením a operační pamětí.",
        incorrect:
          "Trvalé úložiště\nje fyzické zařízení, které se podobá na operační paměť (pamatuje si data),\ns několika klíčovými rozdíly:\n1. data zde uložená přetrvávají „krátkodobě“, tedy zejména po vypnutí počítače jsou odstraněna,\n2. přístup k datům je pomalejší – zejména má mnohem vyšší latenci (prodlevu) mezi vystavením požadavku\na odpovědí zařízení; je proto nepraktické adresovat takové zařízení po jednotlivých bajtech (jako\ntomu je u operační paměti),\n3. proto je obvyklé, že poskytují operace, které pracují s celými bloky dat najednou (velikost 512 bajtů\na víc, často 4 KiB) – základní operací je pak přesun takového bloku mezi zařízením a operační pamětí.",
      },
      {
        uuid: "defaabea-8663-42c7-a691-8c6d966116e0",
        correct:
          "Latence\ndoba mezi požadavkem a odpovědí; příliš velká, než aby bylo lze ignorovat; rozdíl proti\noperační paměti: nelze skrýt hardwarově, musí řešit OS; problém zejména pro spolehlivé uložení dat –\ndurability v ACID – nutné čekat na potvrzení zápisu",
        incorrect:
          "Latence\ndoba mezi požadavkem a odpovědí; příliš velká, než aby bylo lze ignorovat; rozdíl proti\noperační paměti: nelze skrýt softwarově, musí řešit HW",
      },
      {
        uuid: "89dd5e94-96de-45ad-8251-70bd46393adb",
        correct:
          " Mezipaměť\nHlavní problém, který mezipaměť řeší, je opakovaný přístup ke stejným adresám daného\ndatového úložiště. Přístup k datům obvykle není rovnoměrný – některá data jsou potřebná často (např.\naktivně využívaná databáze), zatímco jiná (archiv dat z minulého roku) jen velmi zřídka. Proto je výhodné\nsi nedávno čtená data pamatovat v rychlejší paměti: může se totiž lehce stát, že je bude potřeba přečíst\nv blízké budoucnosti znovu.\nPodobně má smysl některá data načíst do mezipaměti s předstihem (existuje-li volná přenosová kapacita;\ntéto technice se angl. říká prefetch)",
        incorrect:
          " Mezipaměť\nHlavní problém, který mezipaměť řeší, je opakovaný přístup ke stejným adresám daného\ndatového úložiště. Přístup k datům obvykle není rovnoměrný – některá data jsou potřebná často (např.\naktivně využívaná databáze), zatímco jiná (archiv dat z minulého roku) jen velmi zřídka. Proto je výhodné\nsi nedávno čtená data úkládat v procesoru: může se totiž lehce stát, že je bude potřeba přečíst\nv blízké budoucnosti znovu.\nPodobně má smysl některá data načíst do mezipaměti s předstihem (existuje-li volná přenosová kapacita;\ntéto technice se angl. říká prefetch)",
      },
      {
        uuid: "d7afb4ca-9ecc-4927-a268-aeb8cd40db52",
        correct:
          "Vyrovnávací paměť\nExistují dvě základní možnosti, jak vyrovnávací paměti realizovat:\n1. oddělené od mezipaměti: vyrovnávací paměť obsahuje jak samotné požadavky, tak veškerá data s nimi\nspojená; jsou-li některé dotčené bloky uložené v mezipaměti, tyto jsou buď zneplatněny, nebo (častěji)\nupraveny na místě,\n2. propojená s mezipamětí: vyrovnávací paměť obsahuje pouze frontu požadavků na zápis – samotné\ndatové bloky se ukládají vždy do mezipaměti, fronta nevyřízených zápisů do ní pouze odkazuje; takto\nkoncipovaný systém se, jako celek, chová jako mezipaměť s opožděným zápisem (angl. write-back\ncache).",
        incorrect:
          "Vyrovnávací paměť\nExistují dvě základní možnosti, jak vyrovnávací paměti realizovat:\n1. oddělené od mezipaměti: vyrovnávací paměť obsahuje jak samotné požadavky, tak veškerá data s nimi\nspojená; jsou-li některé dotčené bloky uložené v mezipaměti, tyto jsou buď zneplatněny, nebo (častěji)\nupraveny na místě,\n2. propojená s mezipamětí: vyrovnávací paměť obsahuje pouze počítadlo požadavků na zápis – samotné\ndatové bloky se ukládají vždy do operační paměti.",
      },
      {
        uuid: "cdb7dad9-d3df-4ed8-b1f7-b3a74d2b3b4c",
        correct:
          " Plánování operací\nU většiny úložišť platí, že sekvenční přístup (čtení po sobě následujících\nadres) je mnohem rychlejší, než nahodilý přístup (postupné čtení adres, které spolu nijak nesouvisí).\nRůzné technologie navíc kladou další omezení na rychlost reakce – klasickým příkladem jsou rotační disky,\nkde prodleva další operace závisí na vzdálenosti hlavy od místa, kde se potřebná data fyzicky nachází.\nNaopak polovodičové paměti jsou často složené z nezávislých celků, které mohou pracovat souběžně, ale\npožadavky do stejné části paměti musí vyčkat na dokončení těch předchozích.\nBez ohledu na technologii ukládání dat ale platí, že operace s trvalým úložištěm vykazují vysokou míru\nsouběžnosti: do systému přichází mnoho nezávislých požadavků na diskové operace a existuje tedy jistá\nvolnost odpovídat na tyto požadavky v různém pořadí. Je to způsobeno zejména tím, že je často spuštěno\nněkolik (souběžných) vláken a každé z nich provádí vstupně-výstupní operace nezávisle na ostatních.",
        incorrect:
          " Plánování operací\nU většiny úložišť platí, že sekvenční přístup (čtení po sobě následujících\nadres) je mnohem rychlejší, než nahodilý přístup (postupné čtení adres, které spolu nijak nesouvisí).\nRůzné technologie navíc kladou další omezení na rychlost reakce – klasickým příkladem jsoupolovodičové paměti,\nkde prodleva další operace závisí na vzdálenosti hlavy od místa, kde se potřebná data fyzicky nachází.\nNaopak rotační disky jsou často složené z nezávislých celků, které mohou pracovat souběžně, ale\npožadavky do stejné části paměti musí vyčkat na dokončení těch předchozích.\nBez ohledu na technologii ukládání dat ale platí, že operace s trvalým úložištěm vykazují vysokou míru\nsouběžnosti: do systému přichází mnoho nezávislých požadavků na diskové operace a existuje tedy jistá\nvolnost odpovídat na tyto požadavky v různém pořadí. Je to způsobeno zejména tím, že je často spuštěno\nněkolik (souběžných) vláken a každé z nich provádí vstupně-výstupní operace nezávisle na ostatních.",
      },
      {
        uuid: "e198c0ef-5604-41f5-8a1e-b4934a5d5d74",
        correct:
          "Přeuspořádání operací má určitá úskalí, zejména v případech, kdy jsou prohozeny zápisy, které náleží\nstejné aplikaci, nebo se jedná o operace související s údržbou metadat souborového systému. Vzniká tak\nnapětí mezi výkonem (více přeuspořádání → vyšší propustnost) a spolehlivostí (více přeuspořádání →\nvětší šance nekonzistence v případě výpadku).\nPokud jde o operace čtení, zde je prostor pro přeuspořádání obvykle menší, protože aplikace, která čtení\nvyžádala, obvykle nemůže pokračovat ve své činnosti dříve, než jsou data k dispozici (a tedy zejména\nnemůže vyžádat další operace čtení).",
        incorrect:
          "Přeuspořádání operací má určitá úskalí, zejména v případech, kdy jsou prohozeny zápisy, které náleží\nstejné aplikaci, nebo se jedná o operace související s údržbou metadat souborového systému. Vzniká tak\nnapětí mezi výkonem (více přeuspořádání → vyšší propustnost) a spolehlivostí (více přeuspořádání →\nvětší šance nekonzistence v případě výpadku).\nPokud jde o operace čtení, zde je prostor pro přeuspořádání obvykle větší, protože aplikace, která čtení\nvyžádala, obvykle může pokračovat ve své činnosti i když nejsou data k dispozici.",
      },
      {
        uuid: "25c5006f-5b13-4b7d-9ac8-4264d26a5340",
        correct:
          "Problémy virtualizace\nNáš dosavadní přístup k virtualizaci nebude v případě trvalých úložišť\npříliš dobře fungovat. Vzpomeňte si, že v případě paměti a procesoru řešení spočívalo ve vytvoření\nsoukromých (virtuálních) instancí příslušného zařízení. Taková instance je pak vždy ve výlučném užívání\njednoho programu.\nZde ale narážíme na to, že trvalé úložiště slouží především k ukládání uživatelsky zajímavých dat. Je\ntedy potřebné, aby mohl uživatel s těmito daty nějak interagovat, a zejména tedy nemůžou být skryta\nv soukromém prostoru jednoho programu.",
        incorrect:
          "Problémy virtualizace\nNáš dosavadní přístup k virtualizaci bude v případě trvalých úložišť fungovat.\nVzpomeňte si, že v případě paměti a procesoru řešení spočívalo ve vytvoření\nsoukromých (virtuálních) instancí příslušného zařízení. Taková instance je pak vždy ve výlučném užívání\njednoho programu.\nTrvalé úložiště slouží především k ukládání uživatelsky zajímavých dat. Je\ntedy nežádoučí, aby mohl uživatel s těmito daty nějak interagovat, a zejména tedy musí být skryta\nv soukromém prostoru jednoho programu.",
      },
      {
        uuid: "ee207de4-2917-45aa-9691-dacadec4acc8",
        correct:
          "Problémy virtualizace\ndvě možnosti řešení:\n1. můžeme zcela změnit přístup k virtualizaci: místo toho, abychom virtualizací vytvořili věrný obraz\nskutečného zařízení, může operační systém poskytovat nějaký jiný druh abstrakce, a trvalé úložiště\nnebude aplikacím vůbec přístupné,\n2. vyčleníme nějakou aplikaci, která bude odpovědná za správu uživatelských dat v trvalém úložišti, a\nostatní aplikace budou své požadavky na interakci s těmito daty řešit skrze tuto speciální aplikaci.\n\nObě řešení jsou ve skutečnosti (s trochou nadsázky) vlastně totéž řešení. V obou případech je přímý\npřístup k úložišti omezen na jeden nebo několik málo programů (v prvním případě je tento program\nsoučástí operačního systému), tento program rozhoduje o tom, jak budou data „fyzicky“ organizovaná,\njaké operace lze nad daty provádět, které další programy k nim budou mít přístup, atp.",
        incorrect:
          "Problémy virtualizace\ndvě možnosti řešení:\n1. můžeme zcela změnit přístup k virtualizaci: místo toho, abychom virtualizací vytvořili věrný obraz\nskutečného zařízení, může operační systém poskytovat nějaký jiný druh abstrakce, a trvalé úložiště\nnebude aplikacím vůbec přístupné,\n2. vyčleníme nějakou aplikaci, která bude odpovědná za správu uživatelských dat v trvalém úložišti, a\nostatní aplikace budou své požadavky na interakci s těmito daty řešit skrze tuto speciální aplikaci.\n\nObě řešení jsou ve skutečnosti (s trochou nadsázky) vlastně totéž řešení. V obou případech je přímý\npřístup k úložišti omezen na procesorové jádro, to rozhoduje o tom, jak budou data „fyzicky“ organizovaná a\njaké další operace lze nad daty provádět.",
      },
      {
        uuid: "ca3cb30b-6855-48b9-a844-53284e4fcb3e",
        correct:
          "Metody virtualizace\n1. souborový systém, nebo obecněji abstrakce na vyšší úrovni poskytovaná jako služba operačního systému,\nkterá umožňuje řízený přístup k datům mnoha aplikacím současně, a zároveň umožňuje uživateli data\norganizovat a spravovat,\n2. virtualizace na aplikační úrovni, kdy je přímý přístup k úložišti poskytnut některé aplikaci, která\nspravuje data a ostatním aplikacím poskytuje přístup pomocí vhodného aplikačního protokolu (typickým\npříkladem jsou databázové systémy),",
        incorrect:
          "Metody virtualizace\n1. souborový systém, nebo obecněji abstrakce na vyšší úrovni poskytovaná jako služba operačního systému,\nkterá umožňuje řízený přístup k datům mnoha aplikacím současně, a zároveň umožňuje uživateli data\norganizovat a spravovat,\n2. virtualizace na aplikační úrovni, kdy je přímý přístup k úložišti řízen procesorem, který\nspravuje data a ostatním částem OS poskytuje přístup pomocí vhodného mapování adres.",
      },
      {
        uuid: "f8a887e8-a402-43ac-9b0e-bc9823544316",
        correct:
          "RAID\nZatímco standardním řešením problému s nízkou propustností a/nebo velkou prodlevou paměťových operací jsou mezipaměti,\nstandardním řešením problémů se spolehlivostí paměti je redundance.\nNejjednodušší formou redundance je pořízení kopie (zálohy) – v případě ztráty primárních dat obnovíme\ndata ze záložní kopie. S tím jsou spojeny dva problémy:\n1. aby byla užitečná, musíme takovou kopii udržovat aktuální a zároveň konzistentní,\n2. při poruše musíme vyměnit dotčené zařízení a data překopírovat ze zálohy, přitom obě operace mohou\nbýt poměrně zdlouhavé.",
        incorrect:
          "RAID\nZatímco standardním řešením problému s nízkou propustností a/nebo velkou prodlevou paměťových operací jsou vyrovnávací paměti,\nstandardním řešením problémů se spolehlivostí paměti je redundance.\nNejjednodušší formou redundance je pořízení kopie (zálohy) – v případě ztráty primárních dat obnovíme\ndata ze záložní kopie. S tím jsou spojeny dva problémy:\n1. aby byla užitečná, musíme takovou kopii udržovat aktuální ale nemusí být konzistentní,\n2. při poruše musíme vyměnit dotčené zařízení a data překopírovat ze zálohy, přitom obě operace mohou\nbýt poměrně zdlouhavé.",
      },
      {
        uuid: "45e6e5a9-b966-4818-b9ae-a6c8d5d04ba3",
        correct:
          "Operace nad soubory\nZákladními operacemi pro práci se souborem je čtení (v POSIX-u voláním read) a zápis\n(v POSIX-u write) souvislé posloupnosti bajtů (libovolné velikosti – abstrakce souboru skrývá blokový\ncharakter zařízení, na kterém je soubor uložen). Podobně může být libovolná velikost souboru (samozřejmě\nale musí soubor obsahovat celočíselný počet bajtů) – tuto velikost je navíc možné dynamicky měnit. Zápis\n„za konec“ souboru jej automaticky prodlouží, zkrácení je nutné explicitně vyžádat (v POSIX-u voláním\nftruncate).",
        incorrect:
          "Operace nad soubory\nZákladními operacemi pro práci se souborem je čtení (v POSIX-u voláním read) a zápis\n(v POSIX-u write) souvislé posloupnosti bajtů (libovolné velikosti – abstrakce souboru skrývá blokový\ncharakter zařízení, na kterém je soubor uložen). Velikost souboru je ale pevně daná a to velikostí bitmapy.",
      },
      {
        uuid: "9b40a9e5-db7e-4511-9820-d1b7d1e774f9",
        correct:
          "soubory jsou obvykle perzistentní\n– existují dlouhodobě, nezávisle na běžících procesech, nebo dokonce na tom, je-li vůbec aktivní operační\nsystém (nebo samotný hardware). Abychom mohli s perzistentními soubory rozumně pracovat, musí být\nnavíc tyto opatřeny identitou.\nAbychom mohli se souborem pracovat, ve většině systémů je nutné jej otevřít – v systémech POSIX\nk tomu slouží volání open, kterého výsledkem je popisovač otevřeného souboru (angl. file descriptor)",
        incorrect:
          "soubory jsou obvykle perzistentní\n– existují dlouhodobě, jsou závislé na běžících procesech, ale nezávisí na tom, je-li vůbec aktivní operační\nsystém (nebo samotný hardware). Abychom mohli s perzistentními soubory rozumně pracovat, musí být\nnavíc tyto opatřeny identitou.\nAbychom mohli se souborem pracovat, ve většině systémů je nutné jej otevřít – v systémech POSIX\nk tomu slouží volání open, kterého výsledkem je popisovač otevřeného souboru (angl. file descriptor)",
      },
      {
        uuid: "4bf8f5fe-1b2b-4611-b51d-0dd0419544b8",
        correct:
          "Obyčejný soubor\nje právě oním „motivačním případem“ – obyčejný soubor reprezentuje paměť, tzn.\njeho smyslem je uchovávat data (obyčejný soubor si tedy pamatuje posloupnost bajtů). Jaké konkrétní\nbajty to jsou je irelevantní – souborový systém obsah obyčejných souborů nijak neinterpretuje.\nKrom abstrakce (perzistentní – trvalé) paměti je obyčejný soubor také abstrakcí nad pevným úložištěm\nv tom smyslu, že skrývá detaily přístupu k tomuto zařízení. Operace nad pevným úložištěm pracují po\njednotlivých blocích, přičemž bloky mají pevnou velikost a jejich počáteční adresa musí být dělitelná\ntouto velikostí – pro soubory žádné takové omezení neplatí. Zároveň je aplikace odstíněna od fyzického\numístění dat na pevném úložišti (funguje zde opět analogie s virtuálním adresním prostorem a překladem\nvirtuálních adres na fyzické). Analogie překladu adres je v tomto případě ale zcela v režii operačního\nsystému",
        incorrect:
          "Obyčejný soubor\nje právě oním „motivačním případem“ – obyčejný soubor reprezentuje paměť, tzn.\njeho smyslem je uchovávat data (obyčejný soubor si tedy pamatuje posloupnost bajtů). Jaké konkrétní\nbajty to jsou je irelevantní – souborový systém obsah obyčejných souborů nijak neinterpretuje.\nKrom abstrakce (perzistentní – trvalé) paměti je obyčejný soubor také abstrakcí nad pevným úložištěm\nv tom smyslu, že skrývá detaily přístupu k tomuto zařízení. Operace nad pevným úložištěm pracují po\njednotlivých blocích, přičemž bloky mají pevnou velikost a jejich počáteční adresa musí být dělitelná\ntouto velikostí – pro soubory platí stejná omezení. Zároveň je aplikace odstíněna od fyzického\numístění dat na pevném úložišti (funguje zde opět analogie s virtuálním adresním prostorem a překladem\nvirtuálních adres na fyzické). Analogie překladu adres je v tomto případě ale zcela v režii operačního\nsystému",
      },
      {
        uuid: "0eea0402-376f-48e3-972c-85643770d278",
        correct:
          "Mapováni do paměti\nOperace read a write nejsou vždy efektivní, protože musí mimo jiné kopírovat\ndata mezi mezipamětí a pamětí, která náleží žádajícímu procesu.\nEfektivita aplikací, které data\npředevším čtou, může být výrazně zlepšena mapováním souborů do paměti za pomoci líného načítání.\nV tomto režimu jsou externí stránky uloženy v jinak běžném souboru, ale místo komplikovaných vstupněvýstupních\noperací může program s obsahem souboru pracovat stejně, jako by byl uložen v operační paměti.\nVyužijeme-li tohoto mechanismu také k zápisu změněných stránek zpátky do souboru, může program soubor\ni zcela transparentně upravovat.",
        incorrect:
          "Mapováni do paměti\nOperace read a write jsou vždy efektivní, protože nemusí kopírovat\ndata mezi mezipamětí a pamětí, která náleží žádajícímu procesu.\nEfektivita aplikací, které data\npředevším čtou, může být výrazně zlepšena mapováním souborů do paměti za pomoci líného načítání.\nV tomto režimu jsou externí stránky uloženy v jinak běžném souboru, ale místo komplikovaných vstupněvýstupních\noperací může program s obsahem souboru pracovat stejně, jako by byl uložen v operační paměti.\nVyužijeme-li tohoto mechanismu také k zápisu změněných stránek zpátky do souboru, může program soubor\ni zcela transparentně upravovat.",
      },
      {
        uuid: "81f6fc70-79f2-47a3-befa-7dbc592a4813",
        correct:
          "Souběžný přístup\nJmenný prostor souborového systému (blíže jej popíšeme v další sekci) je\nsdílený mezi všemi procesy, může se tedy lehce stát, že více procesů bude pracovat s jedním souborem.\nTato situace je analogická tomu, že stejná oblast operační paměti může být namapovaná ve více virtuálních\nadresních prostorech. Jde-li o souběžný přístup pouze pro čtení, nevznikají žádné významnější problémy.\nVstoupí-li ale do hry zápisy, jak čtení tak jiné zápisy mohou způsobovat problémy – zejména různé\ninstance hazardu souběhu.\nAby se těmto problémům předešlo, operační systémy umožňují soubory zamykat čím je umožněno programům\nk souboru přistupovat bezpečně – tzn. bez rizika poškození dat",
        incorrect:
          "Souběžný přístup\nJmenný prostor souborového systému (blíže jej popíšeme v další sekci) je\nsdílený mezi všemi procesy, může se tedy lehce stát, že více procesů bude pracovat s jedním souborem.\nTato situace je analogická tomu, že stejná oblast operační paměti může být namapovaná ve více virtuálních\nadresních prostorech. Jde-li o souběžný přístup pouze pro čtení, nevznikají žádné významnější problémy.\nVstoupí-li ale do hry zápisy, jak čtení tak jiné zápisy mohou způsobovat problémy – zejména různé\ninstance hazardu souběhu.\nOperační systémy neumožňují soubory zamykat proto musí být tento problém řešen jinak",
      },
      {
        uuid: "0847f9b3-b784-43b5-aeb6-3874ca610cbd",
        correct:
          "Spustitelný soubor\nSpustitelné soubory představují programy v klidu (tzn. ve stavu, kdy nejsou spuštěné) a obsahují veškeré\ninformace, které jsou potřeba k tomu, aby bylo možné v nich obsažený program spustit. Hlavní část\nspustitelného souboru je tvořena počátečním obrazem paměti, podle kterého se při spuštění programu\n(v POSIX-u voláním exec v již existujícím procesu) inicializuje virtuální adresní prostor",
        incorrect:
          "Spustitelný soubor\nSpustitelné soubory představují jak programy v klidu tak i ty spuštěné a obsahují veškeré\ninformace, které jsou potřeba k tomu, aby bylo možné v nich obsažený program probíhat. Hlavní část\nspustitelného souboru je tvořena počátečním obrazem paměti, podle kterého se při spuštění programu\n(v POSIX-u voláním exec v již existujícím procesu) inicializuje virtuální adresní prostor",
      },
      {
        uuid: "afd4bd6a-a693-4355-ae0b-dbbd445dbe3e",
        correct:
          "Roura\nRoury se podobají na obyčejné soubory v tom, že je možné do nich zapisovat a číst z nich\ndata (bajty). Ve většině případů data jeden program (proces) zapisuje a jiný je čte – na rozdíl od\nobyčejného souboru nejsou tato data nikde trvale uložena – z roury zmizí jakmile jsou přečtena.\nS rourou je samozřejmě svázán buffer, ale je uložen pouze v operační paměti. Díky tomu lze do roury data\nzapisovat i ve chvíli, kdy je právě druhá strana nečte – operační systém zapsaná data dočasně uchová.\nZa normálních okolností je roura anonymní a přístupná pouze skrze popisovače otevřených souborů.",
        incorrect:
          "Roura\nRoury se podobají na obyčejné soubory v tom, že je možné do nich zapisovat a číst z nich\ndata (bajty). Ve většině případů data jeden program (proces) zapisuje a jiný je čte – na rozdíl od\nobyčejného souboru nejsou tato data nikde trvale uložena – z roury zmizí po čase určeném speciálním registrem.\nS rourou je samozřejmě svázán buffer, ale je uložen pouze v operační paměti. Díky tomu lze do roury data\nzapisovat i ve chvíli, kdy je právě druhá strana nečte – operační systém zapsaná data dočasně uchová.\nZa normálních okolností je roura anonymní a přístupná pouze skrze popisovače otevřených souborů.",
      },
      {
        uuid: "c1d42a11-ffcb-4708-b183-00fb0bf9ac09",
        correct:
          "Tvrdé odkazy\nJasným důsledkem výše popsané organizace složek je existence tzv. tvrdých odkazů\n– situace, kdy několik adresářových položek (v jedné nebo několika složkách) odkazuje tutéž entitu\n(i-uzel). Všechny odkazy na tentýž soubor jsou zcela rovnocenné a z pohledu uživatele se pouze tentýž\nsoubor objevuje na různých místech adresářové struktury.\nI-uzly si navíc udržují počítadlo odkazů – samotný soubor (i-uzel) je zničen pouze v případě, kdy toto\npočítadlo dojde na nulu. To mimo jiné znamená, že odstraněním adresářové položky (angl. unlinking) může,\nale nemusí způsobit smazání souboru.",
        incorrect:
          "Tvrdé odkazy\nJasným důsledkem výše popsané organizace složek je existence tzv. tvrdých odkazů\n– situace, kdy několik adresářových položek (v jedné nebo několika složkách) odkazuje tutéž entitu\n(i-uzel). Existuje jeden hlavní a poté libovolný počet jiných odkazu, ale z pohledu uživatele se pouze tentýž\nsoubor objevuje na různých místech adresářové struktury.\nI-uzly si navíc udržují počítadlo odkazů – samotný soubor (i-uzel) je zničen pouze v případě, kdy toto\npočítadlo dojde na nulu. To mimo jiné znamená, že odstraněním adresářové položky (angl. unlinking) může,\nale nemusí způsobit smazání souboru.",
      },
      {
        uuid: "b8eca577-525e-447c-a77c-a829e277820a",
        correct:
          "Měkké odkazy\nObčas je užitečné odkazovat soubor nikoliv přímo, ale skrze nějakou cestu která\nk němu vede. Toho lze dosáhnout tzv. měkkým odkazem: tento je (na rozdíl od tvrdého odkazu) skutečným\nobjektem v souborovém systému, který je reprezentován samostatným i-uzlem. Narazí-li při procházení\nadresářové struktury (zejména při hledání i-uzlů podle cesty) operační systém přečte cestu obsaženou\nv tomto měkkém odkazu a ve vyhledávání pokračuje touto cestou.",
        incorrect:
          "Měkké odkazy\nObčas je užitečné odkazovat soubor nikoliv přímo, ale skrze nějakou cestu která\nk němu vede. Toho lze dosáhnout tzv. měkkým odkazem: tento je (na rozdíl od tvrdého odkazu) skutečným\nobjektem v souborovém systému, který ale není reprezentován i-uzlem. Narazí-li při procházení\nadresářové struktury (zejména při hledání souborů podle cesty) operační systém přečte cestu obsaženou\nv tomto měkkém odkazu a ve vyhledávání pokračuje touto cestou.",
      },
      {
        uuid: "b891b0c1-18d1-470d-8f3d-a12db78e7c33",
        correct:
          "Bitmapa \nV souborových systémech se využívá několik velmi jednoduchých datových struktur, které\njsou díky své jednoduchosti zároveň relativně robustní. Asi nejjednodušší strukturou tohoto typu je\nbitmapa, která se používá k mapování využitých resp. volných bloků nebo řádků v tabulkách (přiblížíme\nsi za chvíli).\nBitmapa udržuje informaci o lineárním sledu bloků a informace o jednotlivém bloku se omezuje na jediný\nbit (obvykle právě ona využitost).",
        incorrect:
          "Bitmapa \nV souborových systémech se využívá několik velmi jednoduchých datových struktur, které\njsou díky své jednoduchosti zároveň relativně robustní. Asi nejjednodušší strukturou tohoto typu je\nbitmapa, která se používá k mapování využitých resp. volných bloků nebo řádků v tabulkách (přiblížíme\nsi za chvíli).\nBitmapa udržuje informaci o lineárním sledu bloků a informace o jednotlivém bloku se omezuje na jediný\nbajt.",
      },
      {
        uuid: "f4147fd5-5a01-416c-b02d-9603fe1c85bd",
        correct:
          "Tabulka\nBitmapa je sice jednoduchá a rychlá, neumí ale uchovat příliš mnoho zajímavých informací.\nO něco málo složitější datovou strukturou je tabulka, která v podstatě odpovídá klasickému poli:\n1. je to souvislá oblast fixně velkých struktur (řádků, položek), zvolených tak, aby se jich do jednoho\nbloku vešel celočíselný počet (vyhovuje například velikost jednoho řádku 128 nebo 256 bajtů),\n2. alokace položek se provede např. bitmapou (určuje které řádky jsou resp. nejsou použité, aby bylo\nv případě potřeby možné rychle najít řádek, do kterého můžeme zapsat novou položku),\n3. chceme-li se do takové tabulky odkázat (např. proto, že se jedná o tabulku záznamů o souborech),\nstačí nám znát číslo řádku (index).",
        incorrect:
          "Tabulka\nBitmapa je sice jednoduchá a rychlá, neumí ale uchovat příliš mnoho zajímavých informací.\nO něco málo složitější datovou strukturou je tabulka, která v podstatě odpovídá klasickému poli:\n1. je to souvislá oblast fixně velkých struktur (řádků, položek), libovolné velikosti.\n2. alokace položek se provede např. bitmapou (určuje které řádky jsou resp. nejsou použité, aby bylo\nv případě potřeby možné rychle najít řádek, do kterého můžeme zapsat novou položku),\n3. chceme-li se do takové tabulky odkázat (např. proto, že se jedná o tabulku záznamů o souborech),\nstačí nám znát číslo řádku (index).",
      },
      {
        uuid: "8ddf271d-ffab-4a77-8be6-0c0b89356eee",
        correct:
          "Konzistence\nDůležitým problémem souborového systému je udržení konzistence metadat (jak\nrůzných typů nebo složek metadat mezi sebou, tak se samotnými daty). Porušení konzistence může být\ntrojího typu:\n1. narušení jednotlivé datové struktury, např.\n∘ B-strom obsahuje uzel, který ve skutečnosti není platným uzlem, např. proto, že nový odkaz byl\nzapsán dříve, než odkazovaný uzel,\n2. konfliktní informace v různých datových strukturách, např.:\n∘ bitmapa označuje řádek tabulky za volný, ale tento je zároveň vyplněn smysluplnými metadaty, nebo\n∘ datový blok je označený jako volný (v bitmapě nebo B-stromě), ale zároveň je odkazován jako\nsoučást nějakého souboru,\n3. nesoulad mezi metadaty a datovými bloky – např.\n∘ podle metadat je vlastníkem souboru uživatel B, ale odkazované datové bloky obsahují data uživatele\nA",
        incorrect:
          "Konzistence\nDůležitým problémem souborového systému je udržení konzistence metadat (jak\nrůzných typů nebo složek metadat mezi sebou, tak se samotnými daty). K porušení konzistence nemůže dojít.",
      },
      {
        uuid: "0a41d340-11a3-490f-8371-0895b56aa233",
        correct:
          "Existují dva hlavní důvody, proč by mohlo dojít  k porušení konzistence u datových struktur:\n1. přerušením kritické operace, která provádí více souvisejících změn, např. výpadkem napájení, nebo\nkritickou chybou („pádem“) celého systému,\n2. i v případě, kdy je souborový systém vůči takovému přerušení robustní, tato jeho vlastnost může být\nnarušena přeuspořádáním zápisů (plánovačem nebo samotným zařízením).\nExistuje několik metod, jak se s problémem vypořádat. Jednou je detekce problému (např. příznakem,\nkterý se zapíše při korektním ukončení operačního systému) a následná křížová kontrola všech metadat\nv situaci, kdy mohlo k poškození teoreticky dojít. Tato kontrola může a nemusí být schopna souborový\nsystém vrátit do konzistentního stavu (v závislosti na rozsahu resp. povaze poškození).",
        incorrect:
          "Existují dva hlavní důvody, proč by mohlo dojít  k porušení konzistence u datových struktur:\n1. přerušením kritické operace, která provádí více souvisejících změn, např. výpadkem napájení, nebo\nkritickou chybou („pádem“) celého systému,\n2. i v případě, kdy je souborový systém vůči takovému přerušení robustní, tato jeho vlastnost může být\nnarušena přeuspořádáním zápisů (plánovačem nebo samotným zařízením).\nExistuje několik metod, jak se s problémem vypořádat. Jednou je detekce problému (např. příznakem,\nkterý se zapíše při korektním ukončení operačního systému) a následná křížová kontrola všech metadat\nv situaci, kdy mohlo k poškození teoreticky dojít. Tato kontrola je vždy schopna souborový\nsystém vrátit do konzistentního stavu.",
      },
      {
        uuid: "efbe938e-3a55-4c45-b29e-ed47b1230e72",
        correct:
          "Žurnál\nOproti klasickým metadatům souborového systému má žurnál jednoduchou strukturu – záznamy jsou na\ndisku uloženy sekvenčně (obvykle „do kruhu“ – nový záznam přepíše nejstarší, už neplatný, záznam). Tato\nstruktura je velmi robustní, jak vůči nahodilému přerušení, tak proti typickým vzorům přeuspořádání.\nZáznamy v žurnálu jsou obvykle seskupeny do transakcí (podobných těm, které znáte z relačních databázových systémů),\nkteré mohou sestávat z několika provázaných operací. Změny v metadatech se začnou na\npevné úložiště posílat až ve chvíli, kdy je transakce ukončena a je potvrzen zápis příslušných položek\nv žurnálu. Transakce, která není ukončená, se při obnově přeskočí, čím je zabezpečeno, že se ve výsledku\nprovede buď celá, nebo vůbec.",
        incorrect:
          "Žurnál\nOproti klasickým metadatům souborového systému má žurnál jednoduchou strukturu – záznamy jsou na\ndisku uloženy sekvenčně (obvykle „do kruhu“ – nový záznam přepíše nejstarší, už neplatný, záznam). Tato\nstruktura je velmi robustní, jak vůči nahodilému přerušení, tak proti typickým vzorům přeuspořádání.\nZáznamy v žurnálu jsou obvykle seskupeny do transakcí (podobných těm, které znáte z relačních databázových systémů),\nkteré mohou sestávat z několika provázaných operací. Změny v metadatech se začnou na\npevné úložiště posílat hned jak je transakce zahájena. Transakce, která není ukončená,\nse při obnově přeskočí, čím je zabezpečeno, že se ve výsledku provede buď celá, nebo vůbec.",
      },
      {
        uuid: "7ab0725e-3dee-4109-ad98-f8f143cafbc2",
        correct:
          "Žurnál\nPřerušená operace na datové struktuře může vést k nejednoznačnému stavu, kdy lze datovou strukturu\nopravit více než jedním způsobem. Žurnál tento problém řeší tím, že existuje záznam o tom, jaká operace\nprobíhala a tedy je možné ji na základě této informace dokončit. Zároveň není potřeba kontrolovat resp.\nopravovat konzistenci všech datových struktur (to může ve velkém souborovém systému trvat dlouhou\ndobu), ale pouze těch (resp. těch jejich částí), kterých se dotýkají operace zanesené v žurnálu.",
        incorrect:
          "Žurnál\nPřerušená operace na datové struktuře může vést k nejednoznačnému stavu, kdy lze datovou strukturu\nopravit více než jedním způsobem. Žurnál tento problém řeší tím, že existuje záznam o tom, jaká operace\nprobíhala a tedy je možné ji na základě této informace dokončit. Je ale nutné kontrolovat resp.\nopravovat konzistenci všech datových struktur (to může ve velkém souborovém systému trvat dlouhou\ndobu), toto není nutné pouze u těch (resp. těch jejich částí), kterých se dotýkají operace zanesené v žurnálu.",
      },
      {
        uuid: "70133ce5-aa87-4149-bea9-9f14959e477b",
        correct:
          "Funkcionální metadata\ninou možností jak předejít nekonzistenci je uspořádat metadata tak, že\npoužité datové struktury nebudeme na místě upravovat vůbec. Podobně jako ve funkcionálním programování\nmůžeme místo úpravy existující struktury vytvořit její novou verzi. Přitom využijeme toho, že nezměněné\nčásti můžeme z nové verze odkázat – nemusíme tedy kopírovat celou datovou strukturu.\nTakovému přístupu musí být ale příslušná datová struktura uzpůsobena – vhodné jsou zejména stromové\nstruktury (v souborových systémech tedy především B-stromy), kde změna v libovolném uzlu znamená\nvytvoření nové verze tohoto uzlu a jeho předků (v předcích totiž nemůžeme upravit ukazatel na potomka\n– to by narušilo princip neměnnosti staré verze), přitom ve vyváženém stromě je takových nejvýše\nlogaritmický počet. Všechny ostatní uzly ale zůstávají nezměněné.\n",
        incorrect:
          "Funkcionální metadata\ninou možností jak předejít nekonzistenci je uspořádat metadata tak, že\npoužité datové struktury nebudeme na místě upravovat vůbec. Podobně jako ve funkcionálním programování\nmůžeme místo úpravy existující struktury vytvořit její novou verzi. Přitom využijeme toho, že nezměněné\nčásti můžeme z nové verze odkázat – nemusíme tedy kopírovat celou datovou strukturu.\nTakovému přístupu musí být ale příslušná datová struktura uzpůsobena – vhodné jsou zejména tabulky nikoliv stromové struktury, kde změna v libovolném uzlu znamená\nvytvoření nové verze tohoto uzlu a jeho předků.\n",
      },
      {
        uuid: "8df310b2-d21c-43fe-ae26-53806f73b986",
        correct:
          "Prázdné místo\nJsme tedy konečně vyzbrojeni datovými strukturami vhodnými pro použití v souborovém systému a můžeme se blíže podívat na jejich konkrétní využití.\nPrvním úkolem bude organizace volných bloků, do kterých lze uložit nově příchozí data (např. proto, že\nuživatel vytvořil nový soubor, přidal data do existujícího, ale třeba i proto, že vytvořil novou složku).\nVyhledání vhodného datového bloku je častá operace, musí být proto efektivní – jak samotné nalezení,\ntak poznačení informace o tom, že vybraný blok (resp. bloky) již nejsou volné.\n",
        incorrect:
          "Prázdné místo\nJsme tedy konečně vyzbrojeni datovými strukturami vhodnými pro použití v souborovém systému a můžeme se blíže podívat na jejich konkrétní využití.\nPrvním úkolem bude organizace volných bloků, do kterých lze uložit nově příchozí data (např. proto, že\nuživatel vytvořil nový soubor, přidal data do existujícího, ale třeba i proto, že vytvořil novou složku).\nVyhledání vhodného datového bloku je častá operace, musí být proto efektivní platí hlavně pro nalezení takového bloku.\nPoznačení informace o tom, že vybraný blok (resp. bloky) již nejsou volné nejsou prováděny často, tedy efektivní být nemusí.\n",
      },
      {
        uuid: "fdc68354-e0e6-48c9-88be-a9f7e328470d",
        correct:
          "Externí a datová fragmentace\nUkládání strukturovaných dat do nestrukturovaného pole bajtů\nvyžaduje vždy určité kompromisy. Jedním z nich je efektivita využití kapacity – ukládání dat více natěsno\nvětšinou vede k pomalejším operacím a složitějším metadatům.\nV případě souborů se musíme vypořádat jednak se situací, kdy se postupným vytvářením a mazáním souborů\nprázdné místo rozptýlí mezi alokované bloky. Při vytváření nových souborů to znamená pracnější hledání\nvolných bloků, protože je nutné potřebné místo „slepit“ z několika nesouvislých oblastí (fragmentů).\nTím se jednak zvětšují potřebná metadata (průměrná délka spojitého rozsahu klesá) a zároveň dochází\nk roztroušení – fragmentaci – samotných dat, která jsou do takto alokovaného souboru uložena. Přístup\nk takovým souborům je pak méně efektivní, protože s každým skokem z jedné spojité oblasti do jiné je\nspojena prodleva (daná povahou blokových zařízení).\n",
        incorrect:
          "Externí a datová fragmentace\nUkládání strukturovaných dat do nestrukturovaného pole bajtů\nvyžaduje vždy určité kompromisy. Jedním z nich je efektivita využití kapacity – ukládání dat více natěsno\nvětšinou vede k pomalejším operacím a složitějším metadatům.\nV případě souborů se musíme vypořádat jednak se situací, kdy se postupným vytvářením a mazáním souborů\nprázdné místo rozptýlí mezi alokované bloky. Při vytváření nových souborů to znamená pracnější hledání\nvolných bloků, protože je nutné potřebné místo „slepit“ z několika nesouvislých oblastí (fragmentů).\nTím se jednak zvětšují potřebná metadata (průměrná délka spojitého rozsahu klesá) a zároveň dochází\nk roztroušení – fragmentaci – samotných dat, která jsou do takto alokovaného souboru uložena. Přístup\nk takovým souborům je asymptoticky stejně efektivní, protože takovýto přístup je realizovaný přes tvrdé odkazy.\n",
      },
      {
        uuid: "870cb4b0-c517-48ea-be43-6d9253df8b4c",
        correct:
          "Obyčejné soubory \nTradiční reprezentace obyčejného souboru na disku odkazuje každý datový\nblok samostatně, pomocí krátké tabulky uvnitř i-uzlu (u větších souborů rozšířené pomocnými tabulkami\nv tzv. nepřímých blocích). Běžným zlepšením je místo odkazu na jeden blok odkazovat celý spojitý rozsah\ndatových bloků (angl. extent). Hlavní nevýhodou tohoto přístupu je, že vyhledání bloku podle adresy\nbajtu (offsetu) je v takto organizovaných metadatech lineární vzhledem k délce takové tabulky.",
        incorrect:
          "Obyčejné soubory \nTradiční reprezentace obyčejného souboru na disku odkazuje každý datový\nblok samostatně, pomocí krátké tabulky uvnitř i-uzlu (u větších souborů rozšířené pomocnými tabulkami\nv tzv. nepřímých blocích). Běžným zlepšením je místo odkazu na jeden blok odkazovat celý spojitý rozsah\ndatových bloků (angl. extent). Tímto zajistíme že vyhledání bloku podle adresy\nbajtu (offsetu) je v takto organizovaných metadatech konstantí.",
      },
      {
        uuid: "e32886a8-4988-4de6-890e-b98f15b30966",
        correct:
          "Vnitřní fragmentace\nVnitřní fragmentace je způsobena zarovnáním – některé operace jsou\nmnohem efektivnější, když každý soubor začíná na hranici bloku, a tedy je pro něj alokován bloků\nceločíselný počet. Protože mají ale soubory libovolnou velikost, často je na konci souboru nějaké\nnevyužité místo. Toto nevyužité místo představuje režii – neobsahuje žádná užitečná data. Jinými slovy\nje na většiny souborů malý fragment paměti který nelze využít (protože je menší než nejmenší možná\nvelikost souboru – jeden blok).",
        incorrect:
          "Vnitřní fragmentace\nVnitřní fragmentace je způsobena zarovnáním – některé operace jsou\nmnohem efektivnější, když každý soubor začíná na hranici bloku, a tedy je pro něj alokován bloků\nceločíselný počet. Protože mají ale soubory libovolnou velikost, často je na konci souboru nějaké\nnevyužité místo. Toto nevyužité místo lze spojit pomocí vnější fragmentace v blok, který již využitelný bude.",
      },
      {
        uuid: "cef58fb5-ca16-4f4b-abef-15c80b26e922",
        correct:
          "Adresáře\nExistují tři základní možnosti, jak v souborovém systému reprezentovat složky:\n1. Klasické → hledání podle jména a odstranění položky jsou lineární operace, vkládání je naopak\nkonstantní – takový přístup funguje dobře pro malé složky, ale protože souborový systém nemůže\nobecně předvídat, kolik položek bude mít daný adresář, tato organizace se spíše nepoužívá.\n2. Hašované → položky jsou uloženy v hašovací tabulce a jsou tedy „pravděpodobně“ konstantní – přesné\nchování záleží na hašovací funkci a výběru jmen. Iterace vrací položky ve zdánlivě náhodném pořadí.\n3. Stromové → položky jsou uloženy jako B-strom, jména položek jsou klíče – všechny operace jsou\nzaručeně logaritmické a iterace vrací položky seřazené podle jména.\n",
        incorrect:
          "Adresáře\nExistují tři základní možnosti, jak v souborovém systému reprezentovat složky:\n1. Klasické → hledání podle jména a odstranění položky jsou lineární operace, vkládání je naopak\nkonstantní – takový přístup funguje dobře pro malé složky, a proto je i nejčastěji používaný.\n2. Hašované → položky jsou uloženy v hašovací tabulce a jsou tedy „pravděpodobně“ konstantní – přesné\nchování záleží na hašovací funkci a výběru jmen. Iterace vrací položky ve zdánlivě náhodném pořadí.\n3. Stromové → položky jsou uloženy jako B-strom, jména položek jsou klíče – všechny operace jsou\nzaručeně logaritmické, ale nelze je vracet jako seřazené.\n",
      },
    ],
  },
  {
    uuid: "33155a93-c51e-49a2-9edc-36100f100cf7",
    title: "Část 4: Virtualizate periférií",
    statements: [
      {
        uuid: "0e86da29-65b6-4d7e-bdbd-e38f172fee74",
        correct:
          "Periferie\nZařízení, které produkuje a konzumuje data, případně události. Komunikace\nv malém objemu se obvykle realizuje mapováním registrů zařízení na fyzické adresy. Pozor, je zde\ndůležitý rozdíl proti operační paměti: hodnoty se „samovolně“ (bez účasti hlavního procesoru, a tedy i\noperačního systému) mění v čase – takovou změnu lze považovat za událost.",
        incorrect:
          "Periferie\nZařízení, které produkuje a konzumuje data, případně události. Komunikace\nv malém objemu se obvykle realizuje mapováním registrů zařízení na fyzické adresy. Pozor, je zde\ndůležitý rozdíl proti operační paměti: hodnoty se s vzájemnou účastí procesoru a\noperačního systém mění v čase – takovou změnu lze považovat za událost.",
      },
      {
        uuid: "3f2eb488-8dd9-41ac-8a52-8290ab8aec16",
        correct:
          "Programovaný vstup/výstup (PIO)\nNejjednodušší metodou komunikace se zařízením je přenos dat\npostupným čtením z paměti (registrů) zařízení (již zmiňovaným mapováním paměti zařízení na fyzické\nadresy procesoru). Je-li tato činnost prováděna hlavním procesorem, mluvíme o tzv. „programovaném“\nvstupu resp. výstupu (angl. programmed IO, PIO).\nTento způsob komunikace tedy vyžaduje aktivní účast procesoru v stanovených časových intervalech\n(podle přenosové rychlosti, velikosti vyrovnávací paměti, atp.). Tato metoda je použitelná pro občasné\npřenosy a/nebo přenosy s velmi malou šířkou pásma (počtem bajtů přenesených za sekundu). Při větších\nobjemech dat vede tento způsob komunikace k příliš vysoké režii.",
        incorrect:
          "Programovaný vstup/výstup (PIO)\nNejjednodušší metodou komunikace se zařízením je přenos dat\npostupným čtením z paměti (registrů) zařízení (již zmiňovaným mapováním paměti zařízení na fyzické\nadresy procesoru). Je-li tato činnost prováděna hlavním procesorem, mluvíme o tzv. „programovaném“\nvstupu resp. výstupu (angl. programmed IO, PIO).\nTento způsob komunikace tedy nevyžaduje aktivní účast procesoru. Tato metoda je použitelná pro občasné\npřenosy a/nebo přenosy s velmi malou šířkou pásma (počtem bajtů přenesených za sekundu). Při větších\nobjemech dat vede tento způsob komunikace k příliš vysoké režii.",
      },
      {
        uuid: "5026943e-8e5f-47db-a0fa-7a597b7a0d0f",
        correct:
          " Přímý přístup do paměti (DMA)\nZdaleka nejčastějším cílem přenosu dat z periferie je jejich uložení do operační paměti – další\nzpracování zpravidla musí vyčkat do doby, než je v operační paměti nějaký kompletní celek (blok, rámec,\natp.).\nAsynchronní přenos dat (bez účasti procesoru, resp. bez účasti softwaru) může být realizován dvěma\nzákladními metodami:\n1. dedikovaným pomocným procesorem, který od hlavního procesoru přijímá pokyny na provedení přenosu\n(z jaké periferie, na jakou adresu v operační paměti, kolik bajtů, případně opačně, z jaké adresy\nv operační paměti a jaké periferii), a který je de-facto součástí sběrnice,\n2. přenos je řízen přímo periferií (na základě podobného pokynu od hlavního procesoru).\nVýhodou první metody je, že periferie nemusí nijak rozlišovat DMA a PIO režimy přenosu dat a může být\ntedy jednodušší. Druhá metoda je obvykle efektivnější a v moderních systémech mnohem běžnější.\n",
        incorrect:
          " Přímý přístup do paměti (DMA)\nZdaleka nejčastějším cílem přenosu dat z periferie je jejich uložení do operační paměti – další\nzpracování zpravidla musí vyčkat do doby, než je v operační paměti nějaký kompletní celek (blok, rámec,\natp.).\nAsynchronní přenos dat (bez účasti procesoru, resp. bez účasti softwaru) může být realizován dvěma\nzákladními metodami:\n1.  přenos je řízen přímo periferií (na základě podobného pokynu od hlavního procesoru).\n2. dedikovaným pomocným procesorem, který od hlavního procesoru přijímá pokyny na provedení přenosu\n(z jaké periferie, na jakou adresu v operační paměti, kolik bajtů, případně opačně, z jaké adresy\nv operační paměti a jaké periferii), a který je de-facto součástí sběrnice\nVýhodou první metody je, že periferie nemusí nijak rozlišovat DMA a PIO režimy přenosu dat a může být\ntedy jednodušší. Druhá metoda je obvykle efektivnější a v moderních systémech mnohem běžnější.\n",
      },
      {
        uuid: "f6a5adcd-e298-40b7-a9a7-726ae7c37693",
        correct:
          " Je důležité rozlišovat přímý přístup do paměti (komunikuje periferie a operační paměť, bez účasti\nprocesoru) a mapování paměti zařízení do fyzického adresního prostoru (komunikuje procesor s periferií,\nbez účasti operační paměti).",
        incorrect:
          " Je důležité rozlišovat přímý přístup do paměti (komunikuje periferie a operační paměť, bez účasti\nprocesoru) a mapování paměti zařízení do fyzického adresního prostoru (komunikuje procesor s periferií za pomocí operační paměti).",
      },
      {
        uuid: "0564ce3c-6053-4a36-a4a0-821ad39a8df2",
        correct:
          "IO-MMU\nPřestože pro zařízení, které přenáší velké objemy dat (pevná úložiště, síťová rozhraní,\natp.), je DMA nepostradatelné, jsou s ním spojeny určitá bezpečnostní rizika. V klasické implementaci\nDMA má totiž každá periferie neomezený přístup do fyzické paměti – operační systém sice dává periferii\npokyn, které fyzické adresy má použít, ale nemá jak vynutit, aby periferie takový pokyn dodržela.\nV takovém systému tedy periferiím tedy nic tedy nebrání v tom libovolně upravovat obsah paměti –\nnapříklad i přepsat kód jádra a získat tak plnou kontrolu nad systémem. Toto se týká nejen případných\npodvratných periferií, ale i ovladačů, které mohou jinak nevinnou periferii naprogramovat tak, aby\nnarušila bezpečnost systému.\nToto je jistě nežádoucí, zejména chceme-li izolovat ovladače od zbytku jádra, nebo v případech, kdy\nsamotná periferie není nutně důvěryhodná. IO-MMU je zařízení, které tento problém řeší, a to tím, že\nrealizuje překlad adres pro periferie (podobně jako MMU realizuje překlad adres pro software). IO-MMU\nje programovatelná operačním systémem (a pouze operačním systémem) a umožňuje tedy izolovat periferie\njak vzájemně, tak od operačního systému a softwaru obecně. Je-li IO-MMU správně naprogramovaná, je\nDMA bezpečné.",
        incorrect:
          "IO-MMU\nPřestože pro zařízení, které přenáší velké objemy dat (pevná úložiště, síťová rozhraní,\natp.), je DMA nepostradatelné, jsou s ním spojeny určitá bezpečnostní rizika. V klasické implementaci\nDMA má totiž každá periferie neomezený přístup do fyzické paměti – operační systém sice dává periferii\npokyn, které fyzické adresy má použít, ale nemá jak vynutit, aby periferie takový pokyn dodržela.\nV takovém systému tedy periferiím tedy nic tedy nebrání v tom libovolně upravovat obsah paměti –\nnapříklad i přepsat kód jádra a získat tak plnou kontrolu nad systémem. Toto se týká nejen případných\npodvratných periferií, ale i ovladačů, které mohou jinak nevinnou periferii naprogramovat tak, aby\nnarušila bezpečnost systému.\nToto je jistě nežádoucí, zejména chceme-li izolovat ovladače od zbytku jádra, nebo v případech, kdy\nsamotná periferie není nutně důvěryhodná. IO-MMU je zařízení, které tento problém řeší, a to tím, že\nrealizuje překlad adres pro periferie (podobně jako MMU realizuje překlad adres pro software). IO-MMU\nnení programovatelná za normálních podmínek, pouze při konstrukci zařízení",
      },
      {
        uuid: "8c710d40-d39c-4371-b4f4-ec2296a34b35",
        correct:
          "Sběrnice \nMá dvě základní vrstvy:\n1. fyzickou, která odpovídá za signalizaci a časování a\n2. logickou (protokolovou), která popisuje chování zařízení na sběrnici na vyšší úrovni – adresaci,\nkonfiguraci zařízení, přenosy dat atp.\nSběrnic existuje v počítači celá řada a jsou vzájemně propojené. Ta strana sběrnice, která je blíže\nhlavnímu procesoru, se obvykle nazývá hostitelská.",
        incorrect:
          "Sběrnice \nMá dvě základní vrstvy:\n1. fyzickou, která odpovídá za enumeraci\n2. logickou (protokolovou), která popisuje chování zařízení na sběrnici na vyšší úrovni – adresaci,\nkonfiguraci zařízení, přenosy dat atp.\nSběrnic existuje v počítači celá řada a jsou vzájemně propojené. Ta strana sběrnice, která je blíže\nhlavnímu procesoru, se obvykle nazývá hostitelská.",
      },
      {
        uuid: "fd01c97c-fd94-4c27-98bb-84fa960671d6",
        correct:
          "Sběrnice\nHlavním úkolem sběrnice je přenos dat (a s tím související adresace) a signalizace událostí, vedlejším\npak konfigurace a enumerace připojených periferií. Má-li řadič sběrnice přidělen rozsah fyzických adres,\nje také jeho úkolem tento dále rozdělit mezi připojené periferie (včetně podružných řadičů dalších\nsběrnic).",
        incorrect:
          "Sběrnice\nHlavním úkolem sběrnice je přenos dat (a s tím související adresace) a signalizace událostí, vedlejším\npak konfigurace a enumerace připojených periferií. Má-li řadič sběrnice přidělen rozsah fyzických adres,\nje také jeho úkolem tuto informaci sdělit procesoru.",
      },
      {
        uuid: "1f186295-d010-457e-81aa-b5c52ccc77a9",
        correct:
          "Ovladač\nJakmile je známý konkrétní typ zařízení, komunikaci s ním převezme ovladač – program,\nkterý poskytuje softwarovou abstrakci dané třídy zařízení zbytku operačního systému (a nepřímo i\naplikacím).\nNa jedné straně komunikuje ovladač se zbytkem operačního systému (pomocí vhodného rozhraní, které je\nale obvykle specifické pro daný operační systém), na straně druhé komunikuje s konkrétním fyzickým\nzařízením (které je zase často specifické pro daný model, nebo alespoň modelovou řadu).\nPřipomínáme zde, že komunikace probíhá čtením a zápisem dat, a zpracování takových dat není nic jiného\nnež výpočet",
        incorrect:
          "Ovladač\nJakmile je známý konkrétní typ zařízení, komunikaci s ním převezme ovladač – program,\nkterý převezme kontrolu nad jádrem a následně spustí komunikaci s operačním systémem\nNa jedné straně komunikuje ovladač se zbytkem operačního systému (pomocí vhodného rozhraní, které je\nale obvykle specifické pro daný operační systém), na straně druhé komunikuje s konkrétním fyzickým\nzařízením (které je zase často specifické pro daný model, nebo alespoň modelovou řadu).\nPřipomínáme zde, že komunikace probíhá čtením a zápisem dat, a zpracování takových dat není nic jiného\nnež výpočet",
      },
      {
        uuid: "c2a9fc89-eadd-4fbb-b845-106b25a63efc",
        correct:
          "Ovladač\nHlavním úkolem ovladače je:\n1. zpracování příchozích dat do formy, která je přijatelná pro zbytek systému (tzn. do formy nezávislé\nna konkrétním modelu zařízení),\n2. převod dat příchozích ze systému (které jsou ve formě nezávislé na konkrétním zařízení) do formy,\nkterou umí daná periferie zpracovat,\n3. to vše v reakci na události – buď požadavky ze systému na periferii, nebo naopak.\nData v tomto případě nemusí být pouze užitná data (bloky uložené na disku, rámce přijímané nebo odesílané\nsíťovým rozhraním, atp.), ale také řídící data, která ovlivňují jak se bude zařízení chovat, nebo přímo\naktivují další funkce zařízení (jiné, než je samotný přenos užitných dat).",
        incorrect:
          "Ovladač\nHlavním úkolem ovladače je:\n1. zpracování příchozích dat do formy, kterou může předat sběrnici a ta data přeložit.\nkterou umí daná periferie zpracovat.\n2. převod dat příchozích ze systému (které jsou ve formě nezávislé na konkrétním zařízení) do formy,\nkterou umí daná periferie zpracovat,\n3. to vše v reakci na události – buď požadavky ze systému na periferii, nebo naopak.\nData v tomto případě nemusí být pouze užitná data (bloky uložené na disku, rámce přijímané nebo odesílané\nsíťovým rozhraním, atp.), ale také řídící data, která ovlivňují jak se bude zařízení chovat, nebo přímo\naktivují další funkce zařízení (jiné, než je samotný přenos užitných dat).",
      },
      {
        uuid: "734ca848-f130-4418-8805-73a06860450e",
        correct:
          "Tiskárny\n1. virtualizace – jak tiskárnu sdílet mezi programy – tento problém je analogický k problému plánováni\núloh v dávkových systémech, a má i analogické řešení: frontu úloh ke zpracování,\n2. abstrakce – jak zahladit rozdíly mezi jednotlivými tiskárnami tak, aby byly z pohledu programu podle\nmožnosti záměnné.\nŘešení druhého bodu je trochu složitější, a některé aspekty tiskáren nelze úplně v aplikacích ignorovat\n(černobílý vs barevný tisk, jednostranný vs oboustranný, atp.). Částečným řešením je použití společného\nformátu pro popis dokumentů k tisku, přičemž operační systém již zařídí konverzi do formátu, který\ntiskárna akceptuje. Starším standardem tohoto typu je PostScript, novějším PDF. Některé tiskárny\npodporují tisk dokumentů v těchto formátech přímo, bez potřeby dalšího zpracování v operačním systému.\nZ pohledu aplikace může mít tedy virtuální tiskárna jako svou hlavní operaci vložení dokumentu ve formátu\nPDF do tiskové fronty",
        incorrect:
          "Tiskárny\n1. virtualizace – jak tiskárnu sdílet mezi programy – tento problém je analogický k problému plánováni\núloh v dávkových systémech, a má i analogické řešení: frontu úloh ke zpracování,\n2. abstrakce – jak zahladit rozdíly mezi jednotlivými tiskárnami tak, aby byly z pohledu programu podle\nmožnosti záměnné.\nŘešení druhého bodu je trochu složitější, a některé aspekty tiskáren nelze úplně v aplikacích ignorovat\n(černobílý vs barevný tisk, jednostranný vs oboustranný, atp.). Částečným řešením je použití společného\nformátu pro popis dokumentů k tisku, přičemž operační systém již zařídí konverzi do formátu, který\ntiskárna akceptuje. Starším standardem tohoto typu je PostScript, novějším NewScript. Některé tiskárny\npodporují tisk dokumentů v těchto formátech přímo, bez potřeby dalšího zpracování v operačním systému.\nZ pohledu aplikace může mít tedy virtuální tiskárna jako svou hlavní operaci vložení dokumentu ve formátu\nNewScript do tiskové fronty",
      },
      {
        uuid: "66ecc093-7379-4922-86f3-696aa9177412",
        correct:
          "Síťové vrstvy\n1. fyzická – záležitost hardwaru, má ale dopad na vyšší vrstvy,\n2. linková – tvoří faktické rozhraní mezi hardwarem a softwarem (operačním systémem),\n3. síťová – na koncových stanicích řeší převážně software (operační systém), jejím úkolem je zabezpečit\nkomunikaci mezi koncovými uzly (resp. mezi operačními systémy na nich provozovanými),\n4. transportní doručuje data mezi aplikacemi: tvoří rozhraní mezi operačním systémem a aplikací, a je\ntak přirozeným místem pro virtualizaci,\n5. a vyšší: záležitost aplikací, staví na virtualizaci poskytované 4. vrstvou.",
        incorrect:
          "Síťové vrstvy\n1. fyzická – záležitost hardwaru, má ale dopad na vyšší vrstvy\n2. síťová – na koncových stanicích řeší převážně software (operační systém), jejím úkolem je zabezpečit\nkomunikaci mezi koncovými uzly (resp. mezi operačními systémy na nich provozovanými)\n3. , linková – tvoří faktické rozhraní mezi hardwarem a softwarem (operačním systémem)\n4. transportní doručuje data mezi aplikacemi: tvoří rozhraní mezi operačním systémem a aplikací, a je\ntak přirozeným místem pro virtualizaci\n5. a vyšší: záležitost aplikací, staví na virtualizaci poskytované 4. vrstvou.",
      },
      {
        uuid: "ccba70bc-8d6b-49d7-93bd-9fa65e6c6983",
        correct:
          "Odchozí fronta\nPotřebuje-li operační systém odeslat paket (rámec) do sítě, přidá je na konec\ntzv. odchozí fronty (angl. transmit queue, Tx queue). Z této fronty je vyzvedne hardware a jakmile je\nto možné, provede fyzický přenos. Odchozí fronta funguje přibližně takto:\n1. každá odchozí fronta (může jich existovat několik) má přiřazenu dvojici registrů mapovaných do\nfyzického adresního prostoru: jeden reprezentuje hlavový ukazatel a ten druhý koncový (angl. head a\ntail),\n2. tyto ukazatele popisují kruhovou frontu pevné velikosti, uloženu v operační paměti, ke které síťové\nrozhraní přistupuje za pomoci DMA; každá položka (buňka) této kruhové fronty reprezentuje jeden\nrámec,\n3. ukazatele dělí frontu na dvě části – jedna patří rozhraní a jedna operačnímu systému,\n4. operační systém (resp. ovladač síťového rozhraní) upravuje koncový ukazatel:\na. pro odeslání rámce pro něj operační systém nejprve vyhradí paměť a uloží do ni obsah rámce (data),\nb. zapíše příslušnou adresu a velikost do své části kruhové fronty,\nc. posune koncový ukazatel, čím předá odpovědnost za nově vyplněné buňky síťovému rozhraní,\n5. síťové rozhraní ovládá hlavový ukazatel: kdykoliv zpracuje odchozí rámec, posune hlavový ukazatel\ntak, že paměť asociovaná s odeslaným rámcem se přesune do části fronty, která patří operačnímu\nsystému.\nUdálosti, které se zpracováním kruhové fronty souvisí, signalizuje síťové rozhraní pomocí přerušení",
        incorrect:
          "Odchozí fronta\nPotřebuje-li operační systém odeslat paket (rámec) do sítě, přidá je na konec\ntzv. odchozí fronty (angl. transmit queue, Tx queue). Z této fronty je vyzvedne hardware a jakmile je\nto možné, provede fyzický přenos. Odchozí fronta funguje přibližně takto:\n1. každá odchozí fronta (může jich existovat několik) má přiřazenu dvojici registrů mapovaných do\nfyzického adresního prostoru: jeden reprezentuje hlavový ukazatel a ten druhý koncový (angl. head a\ntail),\n2. tyto ukazatele popisují kruhovou frontu dynamické velikosti, uloženu v operační paměti, ke které síťové\nrozhraní přistupuje za pomoci DMA; každá položka (buňka) této kruhové fronty reprezentuje jeden\nrámec,\n3. ukazatele dělí frontu na dvě části – jedna patří rozhraní a jedna operačnímu systému,\n4. operační systém (resp. ovladač síťového rozhraní) upravuje koncový ukazatel:\na. pro odeslání rámce pro něj operační systém nejprve vyhradí paměť a uloží do ni obsah rámce (data),\nb. zapíše příslušnou adresu a velikost do své části kruhové fronty,\nc. posune koncový ukazatel, čím předá odpovědnost za nově vyplněné buňky síťovému rozhraní,\n5. síťové rozhraní ovládá hlavový ukazatel: kdykoliv zpracuje odchozí rámec, posune hlavový ukazatel\ntak, že paměť asociovaná s odeslaným rámcem se přesune do části fronty, která patří rozhraní\nUdálosti, které se zpracováním kruhové fronty souvisí, signalizuje síťové rozhraní pomocí přerušení",
      },
      {
        uuid: "80f5b358-2720-46ca-b37a-66b5effb4dc0",
        correct:
          "Příjmová fronta\nSíťové rozhraní popřidání prvků tuto změnu signalizuje přerušením. Alokace paměti pro rámce je v kompetenci operačního\nsystému – přesune-li operační systém nějakou položku (buňku) do části kruhové fronty, která náleží\nsíťovému rozhraní, dává tím najevo, že paměť touto položkou odkázaná může být přepsána novými daty.\nJakmile tak síťové rozhraní učiní, příslušnou buňku příjmové fronty přesune do části patřící operačnímu\nsystému.\nJe obvyklé, že každý blok paměti, který operační systém rozhraní předá, má velikost největšího možného\nrámce (MTU z angl. maximal transfer unit, obvykle 1500 bajtů), i když některá rozhraní umí příchozí\nrámce rozdělit do více buněk, je-li to potřeba.",
        incorrect:
          "Příjmová fronta\nSíťové rozhraní po přidání prvků tuto změnu signalizuje přerušením. Alokace paměti pro rámce je v kompetenci operačního\nsystému – přesune-li operační systém nějakou položku (buňku) do části kruhové fronty, která náleží\nsíťovému rozhraní, dává tím najevo, že paměť touto položkou odkázaná může být přepsána novými daty.\nJakmile tak síťové rozhraní učiní, příslušnou buňku příjmové fronty přesune do části patřící operačnímu\nsystému.\nJe obvyklé, že každý blok paměti, který operační systém rozhraní předá, má velikost 2 na n (kde n je velikost registrů procesoru).",
      },
    ],
  },
  {
    uuid: "45309117-9cde-4069-8add-2f2060b1f984",
    title: "Část 5: Souběžnost a synchronizace",
    statements: [
      {
        uuid: "d352a06b-9766-449d-b1b4-38a1d983b019",
        correct:
          "Relace předcházení\nUdálost je jev, který nastane v čase (ne nutně pevně určeném nebo známém), který můžeme\npozorovat, a o kterém můžeme říct, že nastal před nebo po nějaké jiné události, případně že s ní\nnastal souběžně. Relaci uspořádání, která tuto chronologii popisuje, budeme říkat předcházení (anglicky\n„happens before“).\nTakto definovaná relace určuje vztah „muselo se stát před“ neboli kauzální návaznost. Grafem předcházení\nnazveme tranzitivní redukci této relace. Protože grafem uspořádání je acyklický orientovaný graf (angl.\nDAG = directed acyclic graph), jeho tranzitivní redukce je určena jednoznačně (znáte nejspíš jako\nHasseův diagram).",
        incorrect:
          "Relace předcházení\nUdálost je jev, který nastane v čase (ne nutně pevně určeném nebo známém), který můžeme\npozorovat, a o kterém můžeme říct, že nastal před nebo po nějaké jiné události, případně že s ní\nnastal souběžně. Relaci uspořádání, která tuto chronologii popisuje, budeme říkat předcházení (anglicky\n„happens before“).\nTakto definovaná relace určuje vztah „muselo se stát před“ neboli kauzální návaznost. Grafem předcházení\nnazveme tranzitivní redukci této relace. Protože grafem uspořádání je cyklický orientovaný graf (angl.\nDCG = directed cyclic graph), jeho tranzitivní redukce je určena jednoznačně (znáte nejspíš jako\nHasseův diagram).",
      },
      {
        uuid: "94a368a6-ffb6-40fc-abdf-06e05a30366a",
        correct:
          "Relace předcházení\nVrcholy grafu předcházení jsou události (něco se stalo), jeho hrany budeme nazývat akce (něco se děje).\nAkce tedy vedou od jedné události k nějaké další, ale nemohou je „přeskakovat“ (formálněji: existuje-li\nmezi událostmi A a B cesta délky alespoň 2, neexistuje hrana/akce která vede z A do B přímo).",
        incorrect:
          "Relace předcházení\nVrcholy grafu předcházení jsou události (něco se stalo), jeho hrany budeme nazývat akce (něco se děje).\nAkce tedy vedou od jedné události k nějaké další, ale mohou je „přeskakovat“ (formálněji: existuje-li\nmezi událostmi A a B cesta délky alespoň 2, může existovat hrana/akce která vede z A do B přímo).",
      },
      {
        uuid: "9d1d6d20-e04b-4ed9-99c4-2dc72eecef16",
        correct:
          "Časový sled\n Je-li nějaká relace předcházení lineární, mluvíme o časovém sledu.\nPřipomenutí: Časovým sledem událostí rozumíme lineární uspořádání událostí, tedy takové, že pro každou\ndvojici A, B událostí platí buď:\n• A předchází B nebo\n• B předchází A.\nČasový sled si můžeme představit i jako přiřazení časového razítka každé události takové, že žádné dvě\nudálosti nenastanou ve stejné chvíli.",
        incorrect:
          "Časový sled\nJe-li nějaká relace předcházení souběžná, mluvíme o časovém sledu.\nPřipomenutí: Časovým sledem událostí rozumíme souběžná uspořádání událostí, tedy takové, že pro každou\ndvojici A, B událostí platí:\nA a B nastanou libovoně, tedy nezávisle na sobě\nČasový sled si můžeme představit i jako přiřazení časového razítka každé události takové, že žádné dvě\nudálosti nenastanou ve stejné chvíli.",
      },
      {
        uuid: "d4e2e9d9-bb7b-4214-be20-728d7d7b4275",
        correct:
          "Hazard souběhu\nPředcházení je abstrakce, která skrývá vnitřní detaily procesů (dějů odehrávajících se v\nčase), které se mohou stát v různém pořadí díky náhodným vlivům, a snažíme se jejich vnější chování\npopsat pomocí této relace. Vnější chování nějakého systému závisí pouze na jeho relaci předcházení,\nnikoliv už na tom, jak přesně budou v čase rozloženy konkrétní události.\nJe-li takto zavedená abstrakce porušena, mluvíme o hazardu souběhu. Jinými slovy, hazard souběhu nastává\nkdykoliv vedou dva různé časové sledy, které jsou oba konzistentní s relací předcházení pro daný systém,\nk různému vnějšímu chování.",
        incorrect:
          "Předcházení je abstrakce, která skrývá vnitřní detaily procesů (dějů odehrávajících se v\nčase), které se mohou stát v různém pořadí díky náhodným vlivům, a snažíme se jejich vnější chování\npopsat pomocí této relace. Vnější chování nějakého systému závisí pouze na jeho relaci předcházení,\nnikoliv už na tom, jak přesně budou v čase rozloženy konkrétní události.\nJe-li takto zavedená abstrakce porušena, mluvíme o chybě atomicity. Jinými slovy, chyba atomicity nastává\nkdykoliv vedou dva různé časové sledy, které jsou oba konzistentní s relací předcházení pro daný systém,\nk různému vnějšímu chování.",
      },
      {
        uuid: "d36f9be2-3654-45e2-90bc-00a807749a58",
        correct:
          "Hybatel\nAkce (které reprezentujeme hranami v grafu předcházení) jsou prováděny vždy nějakým\nhybatelem (v našem kontextu obvykle vláknem nebo periferií). Hrany (akce) tedy můžeme tomuto hybateli\npřisoudit (např. můžeme říct, že vlákno T má modré hrany a periferie P má žluté hrany). Zároveň hybatele\nmůžeme považovat za „peška“ který se v grafu předcházení pohybuje po hranách své vlastní barvy.",
        incorrect:
          "Hybatel\nAkce (které reprezentujeme hranami v grafu předcházení) jsou prováděny vždy nějakým\nhybatelem (v našem kontextu obvykle vláknem nebo periferií). Hrany (akce) tedy můžeme tomuto hybateli\npřisoudit (např. můžeme říct, že vlákno T má modré hrany a periferie P má žluté hrany). Zároveň hybatele\nmůžeme považovat za „peška“ který se v grafu předcházení pohybuje po hranách libovoné barvy.",
      },
      {
        uuid: "e07e79d2-bdad-4e74-aff5-215d3ccba4c7",
        correct:
          "Synchronizace\nAkce jsou souběžné právě tehdy, když jsou souběžné libovolné dvě události, kterých\nse tyto akce týkají. Událost zejména nemůže být souběžná sama se sebou, a nemohou být souběžné ani\nudálosti spojené nějakou akcí.",
        incorrect:
          "Synchronizace\nAkce jsou souběžné právě tehdy, když jsou souběžné libovolné dvě události, kterých\nse tyto akce týkají. Událost můžou být souběžná sama se sebou, a také mohou být souběžné události spojené nějakou akcí.",
      },
      {
        uuid: "5535a125-0bd1-451f-a1ea-59afc2a90c12",
        correct:
          "Stavový prostor je orientovaný graf kde vrcholy jsou stavy a hrany jsou akce (ve stejném smyslu jako\nv grafu předcházení). Pojem „stav“ je v tomto kontextu velmi abstraktní, nicméně můžeme si bez velké\nújmy nadále představovat stav jako:\n• hodnoty procesorových registrů,\n• buněk paměti (jak operační, tak paměti a registrů periferií).",
        incorrect:
          "Stavový prostor je orientovaný graf kde vrcholy jsou akce a hrany jsou stavy (ve stejném smyslu jako\nv grafu předcházení). Pojem „stav“ je v tomto kontextu velmi abstraktní, nicméně můžeme si bez velké\nújmy nadále představovat stav jako:\n• hodnoty procesorových registrů,\n• buněk paměti (jak operační, tak paměti a registrů periferií).",
      },
      {
        uuid: "11839346-62d6-4eb2-934c-b773f1a49f51",
        correct:
          "Běh\nOrientovanou cestu ve stavovém prostoru označíme za běh. Je zde jasná korespondence mezi\nběhem (posloupnost stavů propojených akcemi) a časovým sledem (posloupnost událostí propojených\nakcemi). Sekvenci akcí můžeme chápat i jako běh i jako sled – v obou případech stačí určit počáteční\nstav (událost) a zbytek běhu (sledu) je již určen akcemi jednoznačně.",
        incorrect:
          "Běh\nOrientovanou cestu ve stavovém prostoru označíme za běh. Je zde jasná korespondence mezi\nběhem (posloupnost stavů propojených akcemi) a časovým sledem (posloupnost událostí propojených\nakcemi). Sekvenci akcí můžeme chápat i jako běh ale nikoliv jako sled – v případě běhu stačí určit počáteční\nstav (událost) a zbytek běhu je již určen akcemi jednoznačně.",
      },
      {
        uuid: "30259068-35c7-48a8-a7b6-8e6774fe3fa1",
        correct:
          "Kritická sekce Uvažme běh R ≡ (r1, r2, ..., rn) nějakého vlákna (nebo jiného hybatele) T1asouběžný běh S ≡ (s1, ..., sn).\nŘíkáme, že R je kritickou sekcí vůči S, vede-li (r1, ..., S, ..., rn) k události „chyba“, a to přesto, že samotné běhy R ani S k chybě nevedou.\nProto se tomuto typu problému také říká chyba atomicity.",
        incorrect:
          "Kritická sekce Uvažme běh R ≡ (r1, r2, ..., rn) nějakého vlákna (nebo jiného hybatele) T1asouběžný běh S ≡ (s1, ..., sn).\nŘíkáme, že S je kritickou sekcí vůči R, vede-li (r1, ..., S, ..., rn) k události „chyba“, a to přesto, že samotné běhy R ani S k chybě nevedou.\nProto se tomuto typu problému také říká chyba atomicity.",
      },
      {
        uuid: "4ef4b807-5b49-4c69-8ed3-9b76c4eaa4c1",
        correct:
          "Čtenáři a písaři\nPředstavme si situaci, kdy máme běhy R1, R2, … Rn a běhy W1, W2, …, Wm,\npro které platí:\n1. ∀.i, j platí Ri není kritickou sekcí vůči Rj\n2. ∀.i, j platí Ri je kritickou sekcí vůči Wj,\n3. ∀.i, j platí Wi je kritickou sekcí vůči Wj\nTakovou situaci nazýváme „čtenáři a písaři“ – máme tedy n čtenářů Ri a m písařů Wi.\nČtenáři si vzájemně nepřekáží – mohou číst zároveň v libovolném pořadí. \nPísaři se chovají jinak: sdílená data nejen čtou, ale i modifikují – proto čtenář,\nkterý by byl přerušen písařem, by mohl přečíst nekonzistentní data.\nPodobně si překáží dva různí písaři – protože data jak čtou tak modifikují, může být výsledek opět nekonzistentní.",
        incorrect:
          "Čtenáři a písaři\nPředstavme si situaci, kdy máme běhy R1, R2, … Rn a běhy W1, W2, …, Wm,\npro které platí:\n1. ∀.i, j platí Wi není kritickou sekcí vůči Wj\n2. ∀.i, j platí Ri je kritickou sekcí vůči Wj,\n3. ∀.i, j platí Ri je kritickou sekcí vůči Rj\nTakovou situaci nazýváme „čtenáři a písaři“ – máme tedy n čtenářů Ri a m písařů Wi.\nČtenáři si vzájemně nepřekáží – mohou číst zároveň v libovolném pořadí.\nPísaři se chovají jinak: sdílená data nejen čtou, ale i modifikují – proto čtenář\n který by byl přerušen písařem, by mohl přečíst nekonzistentní data.\nPodobně si překáží dva různí písaři – protože data jak čtou tak modifikují, může být výsledek opět nekonzistentní.",
      },
      {
        uuid: "d234e287-055b-4d79-90f7-f0632cc6e5c3",
        correct:
          "Souběžná datová závislost \nje vztah mezi akcemi, který je nejlépe vidět ve stavovém prostoru:\nje-li vstupem nějaké akce Z paměťová buňka nebo registr, do které naposled zapisovala akce X, říkáme,\nže Z má datovou závislost na X.\nUvažme zároveň situaci, kdy máme dva běhy, A ≡ (a1, ..., X, ...an), B ≡ (b1, ..., Z, ..., bm), které jsou\nzcela souběžné. To se v programu může lehce stát, a často je těžké takovou chybu odhalit, zejména je-li\nvýpočet (a1, ..., X) krátký, zatímco (b1, ..., Z) dlouhý (časově náročný)",
        incorrect:
          "Souběžná datová závislost\nje vztah mezi akcemi, který je nejlépe vidět ve stavovém prostoru:\nje-li vstupem nějaké akce Z paměťová buňka nebo registr, do které naposled zapisovala akce X, říkáme,\nže X má datovou závislost na Z.\nUvažme zároveň situaci, kdy máme dva běhy, A ≡ (a1, ..., X, ...an), B ≡ (b1, ..., Z, ..., bm), které jsou\nzcela souběžné. To se v programu může lehce stát, a často je těžké takovou chybu odhalit, zejména je-li\nvýpočet (a1, ..., X) krátký, zatímco (b1, ..., Z) dlouhý (časově náročný)",
      },
      {
        uuid: "558d19a1-6430-4a21-a974-653ed15dae8e",
        correct:
          "Producenti a konzumenti\nUvažme situaci, kdy účelem několika vláken je vytvářet mezivýsledky\nurčené k dalšímu zpracování (tato vlákna – producenty – označíme P1...Pn), a několik dalších vláken\ntyto mezivýsledky dále zpracovává (tato nazveme konzumenty a označíme K1...Km).\nVšechna vlákna Pi jsou souběžná jak vzájemně tak s vlákny Ki.\nTato souběžnost je důležitá a užitečná:\numožňuje nám práci distribuovat na různá procesorová jádra a tím celý proces značně urychlit. Protože\njsou ale všechna vlákna souběžná, můžou lehce nastat dvě problémové situace:\n1. producenti mohou generovat výsledky rychleji, než je konzumenti dokáží zpracovávat – mezivýsledky\nse budou hromadit a postupně zaberou veškerou vyhrazenou paměť, nebo se začnou ztrácet (protože je\nproducenti začnou přepisovat dříve, než jsou zpracovány),\n2. konzumenti mohou zpracovávat výsledky rychleji, než je producenti dokáží vytvářet – bez synchronizace\nby taková situace vedla k opakovanému zpracování stejného mezivýsledku, případně k pokusu o zpracování\nnějaké nesmyslné informace (je-li mezivýsledek očekáván na adrese, kam ještě nebyl producentem\nzapsán).\n\nV těchto dvou situacích se tedy musí konzumenti a producenti synchronizovat – je-li mezivýsledků\nnedostatek, upřednostníme práci producentů, naopak je-li jich přebytek, upřednostníme práci konzumentů.\nV ideálním případě tak, aby existovala nějaká pevná mez na počet nezpracovaných mezivýsledků (a tedy i\nna množství paměti potřebné pro jejich uložení).",
        incorrect:
          "Producenti a konzumenti\nUvažme situaci, kdy účelem několika vláken je vytvářet mezivýsledky\nurčené k dalšímu zpracování (tato vlákna – producenty – označíme P1...Pn), a několik dalších vláken\ntyto mezivýsledky dále zpracovává (tato nazveme konzumenty a označíme K1...Km).\nVšechna vlákna Pi jsou souběžná jak vzájemně tak s vlákny Ki.\nTato souběžnost je důležitá a užitečná:\numožňuje nám práci distribuovat na různá procesorová jádra a tím celý proces značně urychlit. Protože\njsou ale všechna vlákna souběžná, můžou lehce nastat dvě problémové situace:\n1. producenti mohou generovat výsledky rychleji, než je konzumenti dokáží zpracovávat – mezivýsledky\nse budou hromadit a postupně zaberou veškerou vyhrazenou paměť, nebo se začnou ztrácet (protože je\nproducenti začnou přepisovat dříve, než jsou zpracovány),\n2. konzumenti mohou zpracovávat výsledky rychleji, než je producenti dokáží vytvářet – bez synchronizace\nby taková situace vedla k opakovanému zpracování stejného mezivýsledku, případně k pokusu o zpracování\nnějaké nesmyslné informace (je-li mezivýsledek očekáván na adrese, kam ještě nebyl producentem\nzapsán).\n\nV těchto dvou situacích se tedy musí konzumenti a producenti synchronizovat – je-li mezivýsledků\nnedostatek, upřednostníme práci producentů, naopak je-li jich přebytek, upřednostníme práci konzumentů.\nV ideálním případě tak, aby existovala nějaká dynamická mez, která se podle potřeb systému mění.",
      },
      {
        uuid: "9c248fd7-195a-4f57-8234-1bb0429c9faa",
        correct:
          "Rozvětvení a setkán\nAkce, které nejsou souběžné, nelze provádět paralelně. Máme-li tedy více výpočetních jader, než máme\nvláken, nevyužíváme hardwarové zdroje efektivně. Relativně častým jevem je, že výpočet má dva (nebo\nněkolik) bloků, které lze provést v libovolném pořadí, aniž by se změnil výsledek. V takovém případě\nbychom chtěli výpočet rozvětvit tak, aby byl každý takový blok (běh) souběžný s těmi ostatními. Máme-li\nprocesorů málo, vykonají se v libovolném pořadí (to nám nevadí), ale máme-ji jich dostatek (nebo\npřebytek), mohou se tyto běhy provést najednou (každý na jiném procesoru).\nTím ale vzniká nový problém – výpočet nemůže pokračovat, než skončí všechny takto vyčleněné bloky\n– jinak bychom se dostali do situace „výpočetní závislost“ (a tím do známého terénu „příliš mnoho\nsouběžnosti“). Proto je potřeba, aby se běhy i setkaly.",
        incorrect:
          "Rozvětvení a setkán\nAkce, které nejsou souběžné, nelze provádět paralelně. Máme-li tedy více výpočetních jader, než máme\nvláken, nevyužíváme hardwarové zdroje efektivně. Relativně častým jevem je, že výpočet má dva (nebo\nněkolik) bloků, které lze provést v libovolném pořadí, aniž by se změnil výsledek. V takovém případě\nbychom chtěli výpočet rozvětvit tak, aby byl každý takový blok (běh) souběžný s těmi ostatními. Máme-li\nprocesorů málo, vykonají se v libovolném pořadí (to nám nevadí), ale máme-ji jich dostatek (nebo\npřebytek), mohou se tyto běhy provést najednou (každý na jiném procesoru).\nTím ale vzniká nový problém – výpočet nemůže pokračovat, než skončí alespoň některé takto vyčleněné bloky\n– jinak bychom se dostali do situace „výpočetní závislost“ (a tím do známého terénu „příliš mnoho\nsouběžnosti“).",
      },
    ],
  },
  {
    uuid: "05038f02-9d9b-4922-a291-26653c34b40b",
    title: "Část 6: Synchronizace",
    statements: [
      {
        uuid: "0812706c-3e3f-4de4-83d9-c3cd37cf4f24",
        correct:
          "Synchronizační zařízení\nsynchronizační zařízení je (de facto) datová struktura – v programu může existovat v mnoha\nnezávislých instancích. Mezi různými instancemi se žádná synchronizace neděje. Každé synchronizační\nzařízení má nějaký stav, který musí být někde uložen: instanci synchronizačního zařízení tedy ztotožníme\ns adresou, na které je uložen jeho stav",
        incorrect:
          "Synchronizační zařízení\nsynchronizační zařízení je (de facto) datová struktura – v programu může existovat v mnoha\nnezávislých instancích. Mezi různými instancemi  může probíhat synchronizace. Každé synchronizační\nzařízení má nějaký stav, který musí být někde uložen: instanci synchronizačního zařízení tedy ztotožníme\ns adresou, na které je uložen jeho stav",
      },
      {
        uuid: "c90cb1be-0fd1-4293-9294-03d3263788d5",
        correct:
          "Vzájemné vyloučení (mutex) \nZřejmě úplně nejjednodušším synchronizačním zařízením je mutex,\nurčený k ochraně kritické sekce. Aby byla kritická sekce ochráněna, musí být chráněná jak kritická sekce\nsamotná, tak i všechny běhy, vůči kterým je kritická, a to tím stejným mutexem.",
        incorrect:
          "Vzájemné vyloučení (mutex) \nZřejmě úplně nejjednodušším synchronizačním zařízením je mutex,\nurčený k ochraně kritické sekce. Aby byla kritická sekce ochráněna,stačí když  bude chráněná samotná kritická sekce,\n nic ostatního není potřeba, vychází z relace předcházení.",
      },
      {
        uuid: "97fcefb0-1467-4db7-a323-f073361896a2",
        correct:
          "Spinlock\nje synchronizační smyčka bez interakce s plánovačem (komunikace s plánovačem je\npotenciálně drahá operace – neplánujeme-li čekat dlouho, může být nevýhodné ji provést).\nV moderních systémech se spinlock implementuje pomocí atomické instrukce, která umožní provést\noperaci ld, úpravu hodnoty a st jako jediný krok, který je pro všechny procesory v systému pozorovatelný\npouze jako celek. Atomických operací existuje celá řada, my použijeme operaci cmpxchg (z angl. „compare\nand exchange“), která má 3 operandy: adresu, očekávanou hodnotu a požadovanou hodnotu.",
        incorrect:
          "Spinlock\nje synchronizační smyčka, která interaguje s plánovačem (komunikace s plánovačem je\npotenciálně drahá operace – neplánujeme-li čekat dlouho, může být nevýhodné ji provést).\nV moderních systémech se spinlock implementuje pomocí atomické instrukce, která umožní provést\noperaci ld, úpravu hodnoty a st jako jediný krok, který je pro všechny procesory v systému pozorovatelný\npouze jako celek. Atomických operací existuje celá řada, my použijeme operaci cmpxchg (z angl. „compare\nand exchange“), která má 3 operandy: adresu, očekávanou hodnotu a požadovanou hodnotu.",
      },
      {
        uuid: "e5540698-d3b7-4642-9116-475c0e80fe2d",
        correct:
          "Spinlock (resp. aktivní čekání obecně) má ale jednu důležitou nevýhodu: soutěží-li o stejný zámek dvě\nvlákna, která sdílí procesorové jádro, čekajícímu vláknu se nemůže podařit zámek získat, dokud nebude\nvlastník zámku probuzen. Proto je použití spinlocku v uživatelských programech obvykle chybou (nelze\nzaručit, že vlákna budou naplánována na různá procesorová jádra).",
        incorrect:
          "Spinlock (resp. aktivní čekání obecně) má ale jednu důležitou nevýhodu: soutěží-li o stejný zámek dvě\nvlákna, která sdílí procesorové jádro, čekajícímu vláknu se nemůže podařit zámek získat, dokud nebude\nvlastník zámku probuzen. Proto je použití spinlocku v uživatelských programech obvykle chybou (vlákna budou vždy naplánována na různá procesorová jádra).",
      },
      {
        uuid: "47fb8d1d-a948-48dc-9d09-1749360f9704",
        correct:
          "Uspávající mutex \nOperace lock je realizována jako služba operačního systému (systémové volání); jádro nejprve ověří, je-li zámek odemčen:\n1. pokud ano, poznačí ho jako zamčený a vrátí kontrolu vláknu, které zámek vyžádalo,\n2. v opačném případě zařadí vlákno do fronty, která danému mutexu náleží, a nechá plánovač probudit\nnějaké jiné vlákno.\nOdemčení zámku pak ověří, je-li nějaké další vlákno ve frontě, a pokud ano, mutex ihned zase zamkne a\npředá ho prvnímu vláknu z této fronty",
        incorrect:
          "Uspávající mutex \nOperace lock je realizována bez interakce s plánovačem; jádro nejprve ověří, je-li zámek odemčen:\n1. pokud ano, poznačí ho jako zamčený a vrátí kontrolu vláknu, které zámek vyžádalo,\n2. v opačném případě zařadí vlákno do fronty, která danému mutexu náleží, a nechá plánovač probudit\nnějaké jiné vlákno.\nOdemčení zámku pak ověří, je-li nějaké další vlákno ve frontě, a pokud ano, mutex ihned zase zamkne a\npředá ho prvnímu vláknu z této fronty",
      },
      {
        uuid: "61ce7504-594a-48ad-99c5-9bd013d20269",
        correct:
          "Rychlý mutex\nrozdělení odpovědnosti za dvě části stavu\nmezi uživatelské vlákno a operační systém. Rozhodnutí o tom, je-li zámek zamčený nebo nikoliv, vyřeší\nvlákno ve vlastní režii (stejně, jako by se jednalo o spinlock – pomocí atomické instrukce). Systémové\nvolání se provede pouze v případě, kdy pokus o zamčení selže.\nSystémová část stavu se jmenuje futex (z angl. „fast mutex“), a sestává pouze z fronty uspaných\nvláken. Fronty jsou s jednotlivými uživatelskými mutexy svázány adresou (tzn. operační systém má\npomyslný slovník front, kde klíčem je adresa příslušného mutexu)",
        incorrect:
          "Rychlý mutex\nrozdělení odpovědnosti za dvě části stavu\nmezi uživatelské vlákno a operační systém. Rozhodnutí o tom, je-li zámek zamčený nebo nikoliv, vyřeší\nvlákno ve vlastní režii (stejně, jako by se jednalo o spinlock – pomocí atomické instrukce). Systémové\nvolání se provede pouze v případě, kdy pokus o zamčení selže.\nSystémová část stavu se jmenuje futex (z angl. „fast mutex“), a sestává pouze z fronty uspaných\nvláken. Fronty jsou mezi jednotlivými uživatelskými mutexy sdílené napříč celým systémem.",
      },
      {
        uuid: "262245dc-1124-4224-9160-fe79478ea645",
        correct:
          " Read-Copy-Update\nPrincip fungování je jednoduchý: místo aby písař měnil datovou strukturu na místě, vytvoří její kopii\n(skutečnou nebo pomyslnou resp. částečnou) a tuto kopii upraví – obě operace jsou bezpečné, protože\nkopírování je vzhledem k původní datové struktuře forma čtení, a nová kopie je prozatím ve výlučném\nvlastnictví písaře (jiná vlákna k ní nemají vůbec přístup). Jakmile je úprava hotová, přesměruje všechny\nbudoucí čtenáře na tuto novou verzi, obvykle tím, že upraví sdílený ukazatel. \nStarší kopie je možné uvolnit až ve chvíli, kdy je jisté, že k nim nepřistupuje žádný čtenář – protože\nčtenáři jsou se zapisujícím písařem souběžní, potřebujeme další synchronizační mechanismus – častou\nvolbou je počítadlo odkazů, které čtenáři udržují; poslední čtenář pak již nepotřebnou starší verzi dat\nuvolní.",
        incorrect:
          "Read-Copy-Update\nPrincip fungování je jednoduchý: místo aby písař měnil datovou strukturu na místě, vytvoří její kopii\n(skutečnou nebo pomyslnou resp. částečnou) a tuto kopii upraví – obě operace jsou bezpečné, protože\nkopírování je vzhledem k původní datové struktuře forma čtení, a nová kopie je prozatím ve výlučném\nvlastnictví písaře (jiná vlákna k ní nemají vůbec přístup). Jakmile je úprava hotová, přesměřujeme všechny aktuální i budoucí čtenáře na aktuální verzi.",
      },
      {
        uuid: "12e38f08-b37c-4119-89a6-127d34de50be",
        correct:
          "Monitor\nMonitor je jednoduchou, ale velmi užitečnou abstrakcí – uvažme datovou strukturu, která sestává z nějaké\ndatové reprezentace a operací nad ní. Realizace jednotlivé operace je často kritickou sekcí vůči ostatním\noperacím (to platí zejména pro ty operace, které strukturu mění).\nOrganizujeme-li program tak, že jediný přístup přímo k datům takové struktury je skrze operace\ndefinované v podprogramech, lze datové struktuře jako celku přidružit jeden mutex, který se na začátku\nkaždé operace zamkne a na konci odemkne. Lze si zde představit dvě implementační strategie:\n1. v ideálním případě zamykáni a odemykání v operacích řeší překladač (týká se některých OOP jazyků);\npak lze navíc v situaci, kdy jedna operace volá jinou operaci jako podprogram, zamykání přeskočit\n(„staticky“ víme, že mutex je již zamčený),\n2. v méně ideálním případě, kdy je „monitor“ pouze ručně udržovaný invariant, můžeme využít rekurzivního\nmutexu (vnořené zamykání se tak vyřeší „dynamicky“ – za běhu).",
        incorrect:
          "Monitor\nMonitor je jednoduchou, ale velmi užitečnou abstrakcí – uvažme datovou strukturu, která sestává z nějaké\ndatové reprezentace a operací nad ní. Realizace jednotlivé operace je často kritickou sekcí vůči ostatním\noperacím (to platí zejména pro ty operace, které strukturu mění).\nOrganizujeme-li program tak, že jediný přístup přímo k datům takové struktury je skrze operace\ndefinované v podprogramech, lze datové struktuře jako celku přidružit několik mutexů, které vybere podle potřeby na začátku\nkaždé operace a daný mutex zamkne a na konc zasei odemkne. Lze si zde představit dvě implementační strategie:\n1. v ideálním případě zamykáni a odemykání v operacích řeší překladač (týká se některých OOP jazyků);\npak lze navíc v situaci, kdy jedna operace volá jinou operaci jako podprogram, zamykání přeskočit\n(„staticky“ víme, že mutex je již zamčený),\n2. v méně ideálním případě, kdy je „monitor“ pouze ručně udržovaný invariant, můžeme využít rekurzivního\nmutexu (vnořené zamykání se tak vyřeší „dynamicky“ – za běhu).",
      },
      {
        uuid: "9a598e03-6f13-4dd2-88b2-9fe236c77394",
        correct:
          "Monitor nemůže zaručit, že program jako celek nebude obsahovat chyby synchronizace – není\ntěžké představit si invariant, který přesahuje hranice jedné datové struktury, a kterého dočasné\nporušení je kritickou sekcí.\n",
        incorrect:
          "Monitor pomáhá zaručit, že program jako celek nebude obsahovat chyby synchronizace a chrání tak celou datovou strukturu a operace nad ní.",
      },
      {
        uuid: "e19f7102-d24e-4dee-a4db-6573a6edb0e8",
        correct:
          "Podmínková proměnná\nPro řešení problému souběžné datové závislosti lze použít synchronizační\nzařízení, kterému se říká podmínková proměnná (angl. condition variable). Operace jsou jednoduché:\n• wait – čekej – zablokuje volající vlákno až do chvíle, kdy nějaké jiné vlákno provede operaci signal,\n• signal odblokuje vlákno (tzn. umožní mu pokračovat ve výpočtu) zablokované operací wait.",
        incorrect:
          "Podmínková proměnná\nPro řešení problému čtenářů a písařů lze použít synchronizační\nzařízení, kterému se říká podmínková proměnná (angl. condition variable). Operace jsou jednoduché:\n• wait – čekej – zablokuje volající vlákno až do chvíle, kdy nějaké jiné vlákno provede operaci signal,\n• signal odblokuje vlákno (tzn. umožní mu pokračovat ve výpočtu) zablokované operací wait.",
      },
      {
        uuid: "fd5b64b3-f64b-4754-98a1-4c4b428cd008",
        correct:
          "Semafor\nKlasický semafor přímo neřeší žádný zajímavý problém (který by mutex nebo některá\njeho varianta neřešila lépe), nicméně ze dvou semaforů lze sestavit řešení problému producentů a\nkonzumentů.\nSemafor lze také mírně upravit tak, aby problém producentů a konzumentů řešil přímo – stačí změnit\noperaci post tak, aby při pokusu o překročení hodnoty n blokovala. Takovému semaforu bychom mohli říkat\ntřeba symetrický (díky nově získané symetrii operací wait a post). Klasické řešení problému producentů\na konzumentů pak není nic jiného, než kombinace dvou klasických, asymetrických semaforů do jednoho\nsymetrického.\nVýznam semaforu E je počet volných míst ve frontě mezivýsledků, zatímco význam semaforu F je počet\nzabraných míst ve frontě mezivýsledků. Operace udržují invariant E + F = n.",
        incorrect:
          "Semafor\nKlasický semafor přímo neřeší žádný zajímavý problém (který by mutex nebo některá\njeho varianta neřešila lépe), nicméně ze dvou semaforů lze sestavit řešení problému producentů a\nkonzumentů.\nSemafor lze také mírně upravit tak, aby problém producentů a konzumentů řešil přímo – stačí změnit\noperaci post tak, aby při pokusu o překročení hodnoty n blokovala. Takovému semaforu bychom mohli říkat\ntřeba symetrický (díky nově získané symetrii operací wait a post). Klasické řešení problému producentů\na konzumentů pak není nic jiného, než kombinace dvou klasických, asymetrických semaforů do jednoho\nsymetrického.\nVýznam semaforu E je počet volných míst ve frontě mezivýsledků, zatímco význam semaforu F je počet\nzabraných míst ve frontě mezivýsledků. Operace udržují invariant E * F = n.",
      },
      {
        uuid: "98671845-ba91-43ef-aa4f-3ebebe9abfc5",
        correct:
          " Bariéra\nInverzní semafor – umožňuje pokračovat ve výpočtu, až když na bariéru čeká dostatek\nvláken. Smyslem bariéry je řešit problém rozvětvení a setkání (zejména jeho druhou část – setkání\nvětšího počtu vláken, které řeší nezávislé podproblémy nějakého většího výpočetního celku).\nBariéru lze implementovat například jako počítadlo + podmínkovou proměnnou.",
        incorrect:
          " Bariéra\nInverzní semafor – umožňuje pokračovat ve výpočtu, až když na bariéru čeká dostatek\nvláken. Smyslem bariéry je řešit problém rozvětvení většího \npočtu vláken, které řeší nezávislé podproblémy nějakého většího výpočetního celku).\nBariéru lze implementovat například jako počítadlo + spinlock.",
      },
    ],
  },
  {
    uuid: "837eff1d-7f14-47b8-866e-e8759fa5804b",
    title: "Část 7: Komunikace, uváznutí",
    statements: [
      {
        uuid: "8fb057e1-a892-4c79-bed7-a2184ab89039",
        correct:
          "Komunikace a Synchronizace\nKaždá komunikace je zároveň formou synchronizace: každé čtení\nnějaké informace musí být předcházeno odpovídajícím zápisem. Nelze dost dobře obdržet zprávu, která\ndosud nebyla odeslána. Proto je každé komunikační zařízení také zařízením synchronizačním. Opačný vztah\nale neplatí: komunikace přidává možnost předat nějakou informaci.",
        incorrect:
          "Komunikace a Synchronizace\nKaždá synchronizace je zároveň formou komunikace: každé čtení\nnějaké informace musí být předcházeno odpovídajícím zápisem. Nelze dost dobře obdržet zprávu, která\ndosud nebyla odeslána. Proto je každé synchronizační zařízení také zařízením komunikačním. Opačný vztah\nale neplatí.",
      },
      {
        uuid: "1dfd70b8-a5c1-4556-93bd-93d24df5f6c2",
        correct:
          "Datové struktury pro komunikaci\nKe komunikaci lze použít celkem libovolnou datovou strukturu, je-li chráněna\nmutexem nebo jiným vhodným synchronizačním zařízením (např. je realizována jako monitor).\nProblém, který zde vzniká, je soutěž (angl. contention) o příslušný zámek. Takové kombinované\nkomunikační zařízení si lze představit jako klasickou poštovní schránku – vkládá-li právě pošťák psaní\ndo schránky, nemůžete si z ní dost dobře ve stejnou chvíli vyzvedávat nějaké jiné – jak přesně datová\nstruktura funguje vnitřně z tohoto pohledu není důležité.",
        incorrect:
          "Datové struktury pro komunikaci\nKe komunikaci lze použít celkem libovolnou datovou strukturu,nesmí být ale chráněna žádným synchronizačním zařízením.\nProblém, který zde vzniká, je soutěž (angl. contention) o příslušný zámek. Takové kombinované\nkomunikační zařízení si lze představit jako klasickou poštovní schránku – vkládá-li právě pošťák psaní\ndo schránky, nemůžete si z ní dost dobře ve stejnou chvíli vyzvedávat nějaké jiné – jak přesně datová\nstruktura funguje vnitřně z tohoto pohledu není důležité.",
      },
      {
        uuid: "4ee2be46-0e4d-4025-b774-17caf9218c46",
        correct:
          "Roura\nSpecializace fronty, která pracuje s bajty. Vyznačuje se zejména efektivními dávkovými\noperacemi – zápisem resp. čtením většího počtu položek (bajtů) najednou. Často je poskytována operačním\nsystémem. Prakticky vždy implementovaná jako omezená – existuje nějaký maximální objem dat, který lze\ndo roury zapsat, než musí další zápis vyčkat na čtení. Stejně jako omezená fronta má tedy synchronizační\nchování stejné jako symetrický semafor.",
        incorrect:
          "Roura\nSpecializace fronty, která pracuje s bajty. Vyznačuje se zejména efektivními dávkovými\noperacemi – zápisem resp. čtením většího počtu položek (bajtů) najednou. Často je poskytována operačním\nsystémem. Prakticky neomezená –  neexistuje maximální objem dat, který je roura schopna pojmout.",
      },
      {
        uuid: "819ecf3e-17eb-4590-af1f-1803bc118a2a",
        correct:
          "Alternativou ke sdílené paměti je předávání zpráv – má dvě výhody:\n1. je bezpečnější na použití – méně problémů s hazardy souběhu,\n2. lze použít i mezi různými počítači (po síti),\na dvě nevýhody:\n1. méně pohodlné, protože nelze odkazovat do jiných datových struktur – všechna relevantní data je\npotřeba „přibalit“ do samotné zprávy,\n2. méně efektivní, jednak kvůli samotné konstrukci zpráv, jednak kvůli režii s kopírováním a předáváním\nzprávy.",
        incorrect:
          "Alternativou ke sdílené paměti je předávání zpráv – má dvě výhody:\n1. efektivnější\n2. lze použít i mezi různými počítači (po síti),\na dvě nevýhody:\n1. méně pohodlné, protože nelze odkazovat do jiných datových struktur – všechna relevantní data je\npotřeba „přibalit“ do samotné zprávy,\n2. je méně bezpečné na použití – více problémů s hazardy souběhu,",
      },
      {
        uuid: "4d1ce8ab-4146-4974-81ad-45dac498762b",
        correct:
          "Zpráva \nZ pohledu systému pro předávání zpráv je obvykle obsah zprávy neprůhledný (jsou to pouze\nbajty), důležitá jsou připojená metadata: zejména adresát. Způsob adresace je zároveň hlavní rozdíl \nmezi předáváním zpráv a frontami – mezi pevnou dvojicí komunikujících vláken je jinak předávání zpráv\nekvivalentní dvojici komunikačních front",
        incorrect:
          "Zpráva \nZ pohledu systému pro předávání zpráv je obvykle obsah zprávy neprůhledný (jsou to pouze\nbajty), důležitá jsou připojená metadata: zejména adresát. Způsob adresace je zároveň hlavní rozdíl \nmezi předáváním zpráv a frontami – mezi pevnou dvojicí komunikujících vláken je jinak předávání zpráv\nekvivalentní bitmapě.",
      },
      {
        uuid: "ffe41c48-1cb0-455e-b60e-6e03fee92677",
        correct:
          "Základní opreace\nJe-li maximální počet nedoručených zpráv, které je systém ochoten uložit, nulový, mluvíme o tzv.\n„setkání“ (rendezvous) – odesílající a přijímající vlákno se musí „sejít“ aby si mohly zprávu předat.\nSynchronizační aspekt komunikace je zde obzvláště výrazný – dokonce mnohem výraznější, než je obvyklé\nu synchronizačních zařízení.",
        incorrect:
          "Základní opreace\nJe-li maximální počet nedoručených zpráv, v daný moment roven nule, mluvíme o tzv.\n„setkání“ (rendezvous) – odesílající a přijímající vlákno se setkaly aby si mohly zprávu předat.\nSynchronizační aspekt komunikace je zde obzvláště výrazný – dokonce mnohem výraznější, než je obvyklé\nu komunikační zařízení.",
      },
      {
        uuid: "3caedd77-3e80-44c5-958c-1ebe0a31866e",
        correct:
          "Zprostředkovatel\nÚkolem zprostředkovatele je zprávu od odesílatele přebrat a doručit ji adresátovi. Předáni zprávy může\nprobíhat ve 3 režimech:\n• Je-li operace odeslání synchronní a systém doručení spolehlivý, za zprávu je již dále odpovědný\nzprostředkovatel – klient může věc považovat za vyřízenou.\n• Je-li operace asynchronní, klient musí paměť se zprávou zachovat až do doby, než zprostředkovatel\npotvrdí, že ji převzal.\n• Je-li doručení zpráv nespolehlivé, a klient potřebuje zajištěné doručení, musí zprávu zachovat až do\ndoby, než mu ji příjemce potvrdí (opět odesláním zprávy).\nPříjem zprávy obvykle funguje v jednom ze dvou režimů:\n1. Synchronní, kdy se příjemce dotáže na další zprávu (případně na ni vyčká, není-li právě žádná\nk dispozici), tuto zpracuje a poté se zeptá na další.\n2. Asynchronní – klient zpracovává větší počet zpráv souběžně, a zpracováni příchozí zprávy začne na\nvýzvu zprostředkovatele. Lze realizovat buď pomocí klasických vláken, nebo tzv. fibrů.",
        incorrect:
          "Zprostředkovatel\nÚkolem zprostředkovatele je zprávu od odesílatele přebrat a doručit ji adresátovi. Předáni zprávy může\nprobíhat ve 3 režimech:\n• Je-li operace odeslání synchronní a systém doručení spolehlivý, za zprávu je již dále odpovědný\nzprostředkovatel – klient může věc považovat za vyřízenou.\n• Je-li operace asynchronní, klient musí paměť se zprávou zachovat až do doby, než zprostředkovatel\npotvrdí, že ji převzal.\n• Je-li doručení zpráv nespolehlivé, a klient potřebuje zajištěné doručení, musí zprávu zachovat až do\ndoby, než mu ji příjemce potvrdí (opět odesláním zprávy).\nPříjem zprávy obvykle funguje v jednom ze dvou režimů:\n1. Synchronní, kdy se příjemce dotáže na další zprávu (případně na ni vyčká, není-li právě žádná\nk dispozici), tuto zpracuje a poté se zeptá na další.\n2. Asynchronní – klient zpracovává větší počet zpráv souběžně, a zpracováni příchozí zprávy začne na\nvýzvu zprostředkovatele. Lze realizovat buď pomocí klasických vláken, nebo tzv. fibrů.",
      },
      {
        uuid: "30107838-41c5-48d6-a272-1990c66c5f40",
        correct:
          "Existuje typ operačních systémů, kde je předávání zpráv základním mechanismem meziprocesové komunikace.\nTento návrh silně koreluje s mikrojádrovou architekturou. V takovém systému\njsou služby operačního systému z velké části realizovány „běžnými“ procesy, a proto je komunikace mezi\nprocesy v takových systémech velmi důležitá. Zprostředkovatelem je v takových systémech často samotné\nmikrojádro.",
        incorrect:
          "Existuje typ operačních systémů, kde je předávání zpráv základním mechanismem meziprocesové komunikace.\nTento návrh silně koreluje s makrojádrovou architekturou. V takovém systému\njsou služby operačního systému z velké části realizovány „běžnými“ procesy, a proto je komunikace mezi\nprocesy v takových systémech velmi důležitá. Zprostředkovatelem je v takových systémech často samotné\nmakrojádro.",
      },
      {
        uuid: "b6369098-3033-4205-98c7-9d324688e0f1",
        correct:
          "Hardwarové zdroje nejpřirozenějším typem zdroje je hardware: jak výpočetní (procesor, paměť)\ntak periferie. V první části kurzu jsme se zabývali virtualizací, která nám umožňuje předstírat, že\nzdroje vlastníme ve více instancích, než jich fyzicky existuje. To je sice velmi užitečná a úspěšná\ntaktika, ale není bez limitů.\nVirtualizaci zdroje lze uplatnit jen v situacích, kdy každý uživatel daného zdroje využívá jen část jeho\nskutečné kapacity – část obrazovky (okno), část procesorového jádra (vlákno), část operační paměti\n(proces), část šířky přenosového pásma (síťové spojení) atp.",
        incorrect:
          "Hardwarové zdroje nejpřirozenějším typem zdroje je hardware: jak výpočetní (procesor, paměť)\ntak periferie. V první části kurzu jsme se zabývali virtualizací, která nám umožňuje předstírat, že\nzdroje vlastníme ve více instancích, než jich fyzicky existuje. To je sice velmi užitečná a úspěšná\ntaktika, ale není bez limitů.\nVirtualizaci zdroje lze uplatnit jen v situacích, kdy uživatel využívá zdroje jako celek.",
      },
      {
        uuid: "b28c484b-d609-4a95-91ed-769265a5972c",
        correct:
          "Rezervace\n Alternativou je rezervace, kterou využijeme v situacích, kdy virtualizaci použít nelze:\n• neumožňuje to povaha zdroje (např. pásková jednotka nebo optická zapisovací mechanika) nebo\n• nečekané selhání zdroje je nepřípustné (např. by došlo k ohrožení zdraví, života nebo majetku).\nRezervace a virtualizace není vzájemně výlučná – daný zdroj může být virtualizován, ale zároveň může\nsystém poskytovat možnost rezervovat zaručenou kapacitu – v takovém případě je rezervovaný zdroj\n(dočasně) nepřístupný pro systém virtualizace. Operační systémy například běžně poskytují možnost\nrezervovat pro daný proces nějaké množství fyzické paměti. Takto rezervovanou fyzickou paměť pak\nsystém nebude používat pro stránky jiných procesů, ani nebude stránky vlastníka z takto rezervované\npaměti přesouvat do trvalého úložiště.",
        incorrect:
          "Rezervace\n Alternativou je rezervace, kterou využijeme v situacích, kdy virtualizaci použít nelze:\n• neumožňuje to povaha zdroje (např. pásková jednotka nebo optická zapisovací mechanika) nebo\n• nečekané selhání zdroje je nepřípustné (např. by došlo k ohrožení zdraví, života nebo majetku).\nRezervace a virtualizace je vzájemně výlučná – daný zdroj může být virtualizován, ale zároveň nemůže\nsystém poskytovat možnost rezervovat zaručenou kapacitu – v takovém případě by byl rezervovaný zdroj\n(dočasně) nepřístupný pro celý systém. Operační systémy například běžně poskytují možnost\nrezervovat pro daný proces nějaké množství fyzické paměti. Takto rezervovanou fyzickou paměť pak\nsystém nebude používat pro stránky jiných procesů, ani nebude stránky vlastníka z takto rezervované\npaměti přesouvat do trvalého úložiště.",
      },
      {
        uuid: "3316f8df-3fa9-4d79-8235-9113d7092dfe",
        correct:
          "Rezervace sestává ze dvou operací:\n1. samotná rezervace, která od systému vyžádá nějaký zdroj (resp. nějaký počet jednotek zdroje), pro\nvýlučné použití daným programem (procesem, vláknem, atp.), – po úspěšném provedení rezervace je\nzdroj ve vlastnictví příslušného programu,\n2. uvolnění zdroje kdy vlastník zdroje oznámí systému, že již zdroj nebude využívat, a tento může být\nvrácen „do oběhu“ (může být předán jinému programu, procesu, vláknu, …).",
        incorrect:
          "Rezervace sestává ze dvou operací:\n1. samotná rezervace, která od systému vyžádá nějaký zdroj (resp. nějaký počet jednotek zdroje), pro\nvýlučné použití daným programem (procesem, vláknem, atp.), – po úspěšném provedení rezervace je\nzdroj ve vlastnictví příslušného programu,\n2.odebrání zdroje, kdy systém odebere zdroj vlastníkovy, aby tento mohl být\nvrácen „do oběhu“ (může být předán jinému programu, procesu, vláknu, …).",
      },
      {
        uuid: "81803512-3542-4840-9955-1fa27e203d9b",
        correct:
          "Komunikace\nProtože komunikace je zároveň synchronizací, jedná se (možná ne zcela intuitivně)\ntaké o abstraktní zdroj. Novým aspektem je zde skutečnost, že rezervaci a uvolnění neprovádí nutně\ntentýž aktér – předání zprávy (resp. obecně informace) může zároveň předat vlastnictví tohoto typu\n„zdroje“.\nTento jev je vázán k problému producentů a konzumentů (který, jak jsme zmiňovali výše, s komunikací úzce\nsouvisí): vytvoření a (zejména) uložení mezivýsledku je formou rezervace – počet mezivýsledků, které\njsme si ochotni pamatovat, je omezené, a jedná se tedy o konečný zdroj, který musí být producentovi\npřidělen. Takto zablokovaná instance se ale uvolní tím, že konzument mezivýsledek použije.",
        incorrect:
          "Komunikace\nProtože komunikace je zároveň synchronizací, jedná se (možná ne zcela intuitivně)\ntaké o abstraktní zdroj. Novým aspektem je zde skutečnost, že rezervaci a uvolnění musí provést stejný aktér – předání zprávy (resp. obecně informace) může zároveň předat vlastnictví tohoto typu\n„zdroje“.\nTento jev je vázán k problému producentů a konzumentů (který, jak jsme zmiňovali výše, s komunikací úzce\nsouvisí): vytvoření a (zejména) uložení mezivýsledku je formou rezervace – počet mezivýsledků, které\njsme si ochotni pamatovat, je omezené, a jedná se tedy o konečný zdroj, který musí být producentovi\npřidělen. Takto zablokovaná instance se ale uvolní tím, že konzument mezivýsledek použije.",
      },
      {
        uuid: "94f622ac-23d7-4dff-b7b5-bd702983fdad",
        correct:
          "Odnímatelné zdroje\nImplicitně považujeme zdroje za neodnímatelné, ve smyslu, že jediný způsob,\njak může dojít k uvolnění zdroje, je dobrovolné vrácení vlastníkem. U řady zdrojů by mělo odebrání\npravděpodobně fatální následky minimálně pro dotčený program, a někdy také pro dotčený zdroj (3D\ntiskárna, optická zapisovací mechanika, fotografická tiskárna, atp.). Uvážíme-li abstraktní zdroje,\nnásilné odebrání např. zmiňovaného mutex-u jistě nemůže mít pozitivní dopad na další fungování vlákna,\nresp. programu jako celku.\nJiná je situace u zdrojů virtualizovaných, kde odebrání fyzického prostředku obvykle nepředstavuje\nzásadní problém – plánovač vláken zcela běžně odebírá procesor běžícímu vláknu bez jeho souhlasu,\nsprávce virtuální paměti může stránku přestěhovat z operační paměti do externí, atp. Na dotčený proces\n(vlákno) to má jistě dopad, ale důsledky obvykle nejsou zdaleka tak závažné, jako v případě zdrojů\nneodnímatelných.",
        incorrect:
          "Odnímatelné zdroje\nImplicitně považujeme zdroje za neodnímatelné, ve smyslu, že jediný způsob,\njak může dojít k uvolnění zdroje, je dobrovolné vrácení vlastníkem. U řady zdrojů by mělo odebrání\npravděpodobně fatální následky minimálně pro dotčený program, a někdy také pro dotčený zdroj (3D\ntiskárna, optická zapisovací mechanika, fotografická tiskárna, atp.). Uvážíme-li abstraktní zdroje,\nnásilné odebrání např. zmiňovaného mutex-u jistě nemůže mít pozitivní dopad na další fungování vlákna,\nresp. programu jako celku.\nSituace u zdrojů virtualizovaných, je obdobná.",
      },
      {
        uuid: "4aee6a80-1900-437f-90f1-c34c4d7bda64",
        correct:
          "Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom\npožadovat umožnění každé z nich je samo o sobě přirozené a smysluplné\n1. Vzájemné vyloučení\n2. čekající vlastník\n3. neodnímatelnost\n4. kruhové čekání\nTyto podmínky nejsou postačující na to aby systém mohl uváznout.",
        incorrect:
          "Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom\npožadovat umožnění každé z nich je samo o sobě přirozené a smysluplné\n1. Vzájemné vyloučení\n2. čekající vlastník\n3. neodnímatelnost\n4. kruhové čekání\nTyto podmínky jsou postačující na to aby systém mohl uváznout.",
      },
      {
        uuid: "3831d174-cc28-415f-b09f-25dc31e8dec4",
        correct:
          "Podmínky uváznutí - Uváznutí může nastat, jsou-li splněny všechny 4 následující podmínky – přitom\npožadovat umožnění každé z nich je samo o sobě přirozené a smysluplné\n1. Vzájemné vyloučení\n2. čekající vlastník\n3. neodnímatelnost\n4. kruhové čekání\nTyto podmínky nejsou postačující na to aby systém mohl uváznout.",
        incorrect:
          "Podmínky uváznutí - Uváznutí může nastat, je li splněna alespoň jedna z následující podmínek\n1. Vzájemné vyloučení\n2. čekající vlastník\n3. neodnímatelnost\n4. kruhové čekání\nJakákoliv z těchto podmínek je postačující aby systém mohl uváznout.",
      },
      {
        uuid: "b307278d-e4b7-4420-b750-500dcc4f5c47",
        correct:
          "Detekce uváznutí\nJednou možností jak uváznutí detekovat je použít dynamickou variantu grafu\nzávislostí zdrojů, který jsme použili k definici kruhového čekání. V tomto případě obsahuje graf dva\nrůzné typy uzlů: vlákna, nebo jiné potenciální vlastníky a zdroje",
        incorrect:
          "Detekce uváznutí\nJednou možností jak uváznutí detekovat je použít statickou variantu grafu\nzávislostí zdrojů, který jsme použili k definici globálního uspořádání. V tomto případě obsahuje graf dva\nrůzné typy uzlů: vlákna, nebo jiné potenciální vlastníky a zdroje",
      },
      {
        uuid: "21ba46f6-79bf-4117-8b16-484e201efa76",
        correct:
          "Zotavení z uváznutí \nÚčastní-li se cyklického čekání alespoň jeden odnímatelný zdroj, může\nk uváznutí sice dojít, ale na rozdíl od standardní situace se lze z tohoto typu uváznutí relativně lehce \nzotavit (zejména se lze zotavit bez násilného ukončování vláken). Dočasným odebráním odnímatelného\nzdroje se totiž cyklus čekajících vláken přeruší, a systém může pokračovat.",
        incorrect:
          "Zotavení z uváznutí \nÚčastní-li se cyklického čekání alespoň jeden odnímatelný zdroj, může\nk uváznutí sice dojít, ale na rozdíl od standardní situace se lze z tohoto typu uváznutí relativně lehce \nzotavit a to násilným ukončením vlákna.",
      },
      {
        uuid: "da371ef6-831e-41da-b01d-6c728c94c69b",
        correct:
          "Vyhýbání uváznutí\nJinou možností jak se s uváznutím vypořádat je technika vyhýbání (angl.\navoidance). Klíčovým prvkem je zamítnout některé požadavky na rezervaci, i když je příslušný zdroj\ndostupný, může-li taková rezervace vést k pozdějšímu uváznutí. Stavy, ze kterých může vždy alespoň\njedno vlákno vyváznout a úspěšně skončit (resp. uvolnit zdroje) označíme jako bezpečné.\nAsi nejznámějším algoritmem pro vyhýbání uváznutí je tzv. bankéřův algoritmus, navržený E. Dijkstrou.",
        incorrect:
          "Vyhýbání uváznutí\nJinou možností jak se s uváznutím vypořádat je technika vyhýbání (angl.\navoidance). Klíčovým prvkem je zamítnout některé požadavky na rezervaci, i když je příslušný zdroj\ndostupný, může-li taková rezervace vést k pozdějšímu uváznutí. Stavy, ze kterých může vždy alespoň\njedno vlákno vyváznout a úspěšně skončit (resp. uvolnit zdroje) označíme jako bezpečné.\nAsi nejznámějším algoritmem pro vyhýbání uváznutí je tzv. makleřův algoritmus, navržený E. Dijkstrou.",
      },
      {
        uuid: "3fdb637d-6062-46f7-a824-f88a8d1c7e54",
        correct:
          "Zamezení předrezervací Myšlenka předrezervace je jednoduchá – nesmíme připustit, aby vlákno,\nkteré nějaký zdroj již vlastní, čekalo na nějaký zdroj (je lehce vidět, že systém pak nemůže uváznout).\nRezervace proto připustíme pouze v situaci, kdy žádající vlákno žádné zdroje nevlastní – aby byl systém\nprakticky použitelný, musíme ovšem povolit rezervaci několika zdrojů najednou (dávkově).\nPotřebuje-li tedy vlákno využít více zdrojů, musí je vyžádat všechny jedinou atomickou akcí (uvolňovat\nje ovšem může postupně). Je-li potřeba rezervovat nějaký zdroj v situaci, kdy už dané vlákno nějaký\njiný zdroj vlastní, musí nejprve všechny zdroje uvolnit a opět je rezervovat společně s tím novým.",
        incorrect:
          "Zamezení předrezervací Myšlenka předrezervace je jednoduchá – nesmíme připustit, aby vlákno,\nkteré nějaký zdroj již vlastní, čekalo na nějaký zdroj (je lehce vidět, že systém pak nemůže uváznout).\nRezervace proto připustíme pouze v situaci, kdy žádající vlákno vlastní nějaké zdroje – aby byl systém\nprakticky použitelný, musíme ovšem povolit rezervaci několika zdrojů najednou (dávkově).\nPotřebuje-li tedy vlákno využít více zdrojů, musí je vyžádat všechny jedinou atomickou akcí (uvolňovat\nje ovšem může postupně). Je-li potřeba rezervovat nějaký zdroj v situaci, kdy už dané vlákno nějaký\njiný zdroj vlastní, musí nejprve všechny zdroje uvolnit a opět je rezervovat společně s tím novým.",
      },
      {
        uuid: "9af94173-0918-4578-97da-b6b1999b2df7",
        correct:
          "Zamezení virtualizací \nVirtualizací jsme se podrobně zabývali v prvních 4 kapitolách – zdroje,\nkteré jsou virtualizované, vůbec nepoužívají systém výlučné rezervace, nesplňují tedy podmínku vzá-\njemného vyloučení a nemohou přímo způsobit uváznutí. Mezi zdroje, které lze virtualizovat, patří\nsamozřejmě paměť, procesor a pevné úložiště (kapitoly 1–3) a některé periferie – terminál (obrazovka,\ntiskárna, atp.) nebo síťová rozhraní (kapitola 4).",
        incorrect:
          "Zamezení virtualizací \nVirtualizací jsme se podrobně zabývali v prvních 4 kapitolách – zdroje,\nkteré jsou virtualizované, používají systém výlučné rezervace, splňují tedy podmínku vzá-\njemného vyloučení a nemohou přímo způsobit uváznutí. Mezi zdroje, které lze virtualizovat, patří\nsamozřejmě paměť, procesor a pevné úložiště (kapitoly 1–3) a některé periferie – terminál (obrazovka,\ntiskárna, atp.) nebo síťová rozhraní (kapitola 4).",
      },
      {
        uuid: "a658e9ee-7da7-4159-a081-9ce8b0b896fc",
        correct:
          "Zamezení uspořádáním\nZbývá nám podmínka kruhového čekání – tomu lze zamezit například tím,\nže se na zdrojích ustaví globální lineární uspořádání, které musí každé vlákno při rezervacích dodržet:\nrezervovat lze pouze zdroj, který je v uspořádání větší než dosud největší zdroj vláknu přisouzený.\nV takovém systému je statický graf závislostí zdrojů acyklický, k uváznutí tak nemůže dojít.\nPodobně jako v případě předrezervace lze řešit i situace, kdy potřebujeme globální pořadí porušit –\nvlákno se musí nejprve vzdát některých zdrojů a pak je znovu rezervovat ve správném pořadí.\nTento přístup je poměrně praktický na úrovni jednotlivého programu, nebo jiného uzavřeného systému,\nnicméně pro operační systém jako celek se nehodí",
        incorrect:
          "Zamezení uspořádáním\nZbývá nám podmínka kruhového čekání – tomu lze zamezit například tím,\nže se na zdrojích ustaví globální lineární uspořádání, které musí každé vlákno při rezervacích dodržet:\nrezervovat lze pouze zdroj, který je v uspořádání menší než dosud největší zdroj vláknu přisouzený.\nV takovém systému je statický graf závislostí zdrojů acyklický, k uváznutí tak nemůže dojít.\nPodobně jako v případě předrezervace lze řešit i situace, kdy potřebujeme globální pořadí porušit –\nvlákno se musí nejprve vzdát některých zdrojů a pak je znovu rezervovat ve správném pořadí.\nTento přístup je poměrně praktický na úrovni jednotlivého programu, nebo jiného uzavřeného systému,\nnicméně pro operační systém jako celek se nehodí",
      },
    ],
  },
  {
    uuid: "be6acf2f-f519-492f-960d-17723f0fa0c6",
    title: "Část 8: Přerušení a periferie",
    statements: [
      {
        uuid: "90f6b117-8002-48c4-8fe8-2737e9763bb6",
        correct:
          "Přerušení je mechanismus, který umožňuje synchronizovat periferii a software –\nv abstraktní rovině lze tedy o přerušení uvažovat jako o synchronizačním zařízení.\n– přerušení je asymetrické v tom smyslu, že ho může vyvolat pouze periferie, nikoliv operační systém\nnebo software obecně. Máme tedy zařízení, které je vždy aktivováno periferií – operační systém je\nvždy pasivním účastníkem. Až na tyto rozdíly se přerušení podobá na podmínkovou proměnnou – slouží\nk signalizaci nějaké události.",
        incorrect:
          "Přerušení je mechanismus, který umožňuje synchronizovat periferii a software –\nv abstraktní rovině lze tedy o přerušení uvažovat jako o synchronizačním zařízení.\n– přerušení je symetrické v tom smyslu, že ho může vyvolat jak periferie tak i operační systém.\n Máme tedy zařízení, které je vždy aktivováno periferií nebo operačním systémem a ten druhý je\nvždy pasivním účastníkem. Až na tyto rozdíly se přerušení podobá na podmínkovou proměnnou – slouží\nk signalizaci nějaké události.",
      },
      {
        uuid: "7d9c4edb-206b-4c37-b5f1-06e4229974d2",
        correct:
          "Operační systém je samozřejmě program, který musí být vykonáván procesorem – proto\nkrom periferie a operačního systému musí do hry vstoupit i procesor.\nZejména se může stát, že ve chvíli, kdy přerušení nastane (je periferií vyvoláno), procesor nějaký\nprogram právě vykonává. Navíc je často důležité, aby byla reakce na přerušení dostatečně rychlá – velká\nprodleva obsluhy může mít řadu důsledků, od uživatelského nepohodlí až ke ztrátě dat.\nAby se prodleva minimalizovala, přerušení je realizováno preemptivně – cokoliv procesor v danou chvíli\nprováděl je pozastaveno, aktuální stav vlákna (hodnoty registrů) je uložen do paměti a je spuštěna\nobsluha přerušení.",
        incorrect:
          "Operační systém je samozřejmě program, který musí být vykonáván procesorem – proto\nkrom periferie a operačního systému musí do hry vstoupit i procesor.\nZejména se může stát, že ve chvíli, kdy přerušení nastane (je periferií vyvoláno), procesor nějaký\nprogram právě vykonává. Navíc je často důležité, aby operační systém daný program nepřerušil násilím,\nproto je přerušení realizováno postemptivně – cokoliv procesor v danou chvíli prováděl je dokončeno a\naž poté se spustí obsluha přerušení.",
      },
      {
        uuid: "0b567d26-8f97-4c3a-b252-a8ea74eca494",
        correct:
          "Instance přerušení\nObsluha přerušení je realizována podprogramem, kterého adresa je uvedena ve speciální\ntabulce obsluhy přerušení. Chápeme-li přerušení jako synchronizační zařízení (podobné podmínkové\nproměnné), je přirozené, že může existovat ve vícero instancích. Protože je ale realizováno hardwarově\nna relativně nízké úrovni, těchto instancí je pevný počet (často do 256). Tabulka obsluhy přerušení\nmá pak pro každou instanci jednu položku, která určí který podprogram je daným přerušením aktivován.\nRůzné periferie pak typicky používají různé instance přerušení (instance jsou identifikovány číslem).",
        incorrect:
          "Instance přerušení\nObsluha přerušení je realizována podprogramem, kterého adresa je uvedena ve speciální\nregistru. Chápeme-li přerušení jako synchronizační zařízení (podobné podmínkové\nproměnné), je přirozené, že může existovat ve vícero instancích. Protože je ale realizováno hardwarově\nna relativně nízké úrovni, těchto instancí je pevný počet (často do 256).\nPodprogram má pak pro každou instanci speciální funkci, tzv. řadič přerušení,\nkterý určí který podprogram je daným přerušením aktivován.\nRůzné periferie pak typicky používají různé instance přerušení (instance jsou identifikovány číslem).",
      },
      {
        uuid: "38ab12d8-a05c-4d0b-9611-6e555b36a7f2",
        correct:
          "Obslužný podprogram přerušení je (až na speciální prolog a epilog) stejný jako\nlibovolný jiný – může být třeba zapsaný v jazyce C, a zejména může volat další podprogramy. Proto musí\nmít k dispozici jak registry (zabezpečeno uložením stavu procesoru před jeho aktivací), tak zásobník.\nProtože na zásobníku, který byl ve chvíli kdy k přerušení došlo, nemusí být volné místo, je obvyklé, že\ndojde také k přepnutí zásobníku. Konečně procesor se přepne do režimu jádra (privilegovaného režimu)\n– obsluha přerušení má tedy stejný privilegovaný přístup k výpočetním zdrojům jako jakákoliv jiná\nsoučást jádra.",
        incorrect:
          "Obslužný podprogram přerušení je (až na speciální prolog a epilog) stejný jako\nlibovolný jiný až na jednu vyjímku – může být třeba zapsaný v jazyce C, ale nemůže volat další podprogramy, protože jádro je jen jedno.\nProto musí mít k dispozici jak registry (zabezpečeno uložením stavu procesoru před jeho aktivací), tak zásobník.\nProtože na zásobníku, který byl ve chvíli kdy k přerušení došlo, nemusí být volné místo, je obvyklé, že\ndojde také k přepnutí zásobníku. Konečně procesor se přepne do režimu jádra (privilegovaného režimu)\n– obsluha přerušení má tedy stejný privilegovaný přístup k výpočetním zdrojům jako jakákoliv jiná\nsoučást jádra.",
      },
      {
        uuid: "d6d5f1d5-2620-4c14-9ea2-0684888804f0",
        correct:
          "Obsluha přerušení\nse nápadně podobá na aktivaci vlákna. Zároveň má ale vlastnosti aktivace podprogramu,\nprotože na rozdíl od vlákna se při ukončení obsluhy stav procesoru neukládá, a v obsluze tedy po jejím\nukončení nelze pokračovat. Můžeme tak obsluhu přerušení chápat jako vlákno s velmi krátkým životem.",
        incorrect:
          "Obsluha přerušení\nse nápadně podobá na aktivaci vlákna. Zároveň má ale vlastnosti aktivace podprogramu,\nprotože může být aktivována, uložena a případně obnovena v budoucnu. Můžeme tak obsluhu přerušení chápat jako speciální typ vlákna.",
      },
      {
        uuid: "a916f046-5652-436e-bcf1-260b3258ed55",
        correct:
          "Obsluha přerušení musí řešit 3 synchronizační scénáře:\n1. synchronizace se zbytkem systému, který běží paralelně na jiných procesorových jádrech (včetně\npřípadné obsluhy přerušení tam probíhající) – zde je v nějakém smyslu největší volnost, obvykle lze\npoužít spinlocky, případně některé nezamykající komunikační zařízení,\n2. synchronizace se zbytkem systému, který běžel na stejném procesorovém jádře a byl obsluhou přerušen\n– zde spinlock nepřichází v úvahu, protože přerušený podprogram nemůže být spuštěn před ukončením\nobsluhy,\n3. synchronizace s obsluhou souběžného přerušení vyvolané na stejném procesorovém jádře – spinlock\nopět nepřichází v úvahu (ze stejného důvodu), pomůže zde ale speciální jednoúčelové synchronizační\nzařízení – zákaz přerušení.\nJe-li v platnosti zákaz daného přerušení, obsluha případného příchozího přerušení je odložena až do\nchvíle, kdy je přerušení opět povoleno. Jedná se tak o formu vzájemného vyloučení specifickou pro\nobslužné podprogramy.",
        incorrect:
          "Obsluha přerušení musí řešit 3 synchronizační scénáře:\n1. synchronizace s obsluhou souběžného přerušení vyvolané na stejném procesorovém jádře – zde je v nějakém smyslu největší volnost, obvykle lze\npoužít spinlocky, případně některé nezamykající komunikační zařízení,\n2. synchronizace se zbytkem systému, který běžel na stejném procesorovém jádře a byl obsluhou přerušen\n– zde spinlock nepřichází v úvahu, protože přerušený podprogram nemůže být spuštěn před ukončením\nobsluhy,\n3.  synchronizace se zbytkem systému, který běží paralelně na jiných procesorových jádrech (včetně\npřípadné obsluhy přerušení tam probíhající) – spinlock\nopět nepřichází v úvahu (ze stejného důvodu), pomůže zde ale speciální jednoúčelové synchronizační\nzařízení – zákaz přerušení.\nJe-li v platnosti zákaz daného přerušení, obsluha případného příchozího přerušení je odložena až do\nchvíle, kdy je přerušení opět povoleno. Jedná se tak o formu vzájemného vyloučení specifickou pro\nobslužné podprogramy.",
      },
      {
        uuid: "bcb652d7-e47a-4b53-b61f-3cfa02a478d7",
        correct:
          "Vzpomeňme, že aktivace procesu je relativně drahá operace: musí se změnit mapování paměti.\nProto se při aktivaci obsluhy přerušení proces nepřepíná: běží v adresním prostoru, který byl zrovna\naktivní. To mimo jiné znamená, že struktury, které obsluha využívá, musí být dostupné ve všech virtuálních\nadresních prostorech, a navíc musí být dostupné na stejných adresách. Obsluha přerušení tak vytvoří\npomyslné vlákno v procesu, který je právě aktivní.",
        incorrect:
          "Vzpomeňme, že aktivace procesu je relativně drahá operace: musí se změnit mapování paměti.\nProto se při aktivaci obsluhy přerušení proces nepřepíná: běží v adresním prostoru, který byl zrovna\naktivní. To mimo jiné znamená, že struktury, které obsluha využívá, musí být nějakým způsobem dostupné pro všechny procesory.\nObsluha přerušení tak využívá speciální procesor přímo určený na tuto činnost.",
      },
      {
        uuid: "7b87f202-7015-479a-b5c5-1c1e69aa4cb5",
        correct:
          "Struktura obsluhy\n1. při vstupu do obsluhy přerušení se zakážou další přerušení (může vykonat přímo procesor jako součást\naktivace obsluhy) –\n∘ minimálně toho typu, které bylo právě aktivováno, mají-li přerušení priority tak také všechna\npřerušení nižších priorit, a v některých systémech úplně všechna přerušení,\n∘ tím jsou ochráněny libovolné kritické sekce obsluhy přerušení vůči sobě samé, a také je tím\nomezen počet aktivačních záznamů na zásobníku (jinak by hrozilo, že příliš mnoho rychle příchozích\npřerušení zásobník vyčerpá),\n2. obsluha vykoná minimální nutnou akci, která uvede systém do provozuschopného stavu:\n∘ např. vyprázdní mezipaměti, které by jinak přetekly, a provede další akce, které nelze odložit,\n∘ minimálně část plánovače je tohoto charakteru (je aktivován obsluhou přerušení časovače – více\npozději),\n∘ libovolné datové struktury, které zde využívá, a které využívá i jiná část jádra, musí být buď\npoužitelné zcela bez zamykání (např. některé komunikační zařízení probrané v předchozí kapitole,\nkteré nepoužívá zámky), nebo musí být na straně zbytku jádra chráněny zákazem přerušení,\n3. naplánuje zbývající akce (obsluha druhé úrovně) na pozdější vykonání – tento krok vyžaduje komunikaci\nse zbytkem jádra (někde musí informaci o potřebné návazné akci převzít jiná část jádra, která je\ns obsluhou přerušení jinak souběžná).",
        incorrect:
          "Struktura obsluhy\n1. při vstupu do obsluhy přerušení se zakážou další přerušení (může vykonat přímo procesor jako součást\naktivace obsluhy) –\n∘ minimálně toho typu, které bylo právě aktivováno, mají-li přerušení priority tak také všechna\npřerušení nižších priorit, a v některých systémech úplně všechna přerušení,\n∘ tím jsou ochráněny libovolné kritické sekce obsluhy přerušení vůči sobě samé, a také je tím\nomezen počet aktivačních záznamů na zásobníku (jinak by hrozilo, že příliš mnoho rychle příchozích\npřerušení zásobník vyčerpá),\n2. obsluha vykoná minimální nutnou akci, která uvede systém do provozuschopného stavu:\n∘ např. vyprázdní mezipaměti, které by jinak přetekly, a provede další akce, které nelze odložit,\n∘ minimálně část plánovače je tohoto charakteru (je aktivován obsluhou přerušení časovače – více\npozději),\n∘ libovolné datové struktury, které zde využívá, a které využívá i jiná část jádra, musí být \nzamykatelné (spinlockem nebo jiným synchronizačním zařízením) nebo musí být v části jádra, která není chráněny zákazem přerušení,\n3. naplánuje zbývající akce (obsluha druhé úrovně) na pozdější vykonání – tento krok vyžaduje komunikaci\nse zbytkem jádra (někde musí informaci o potřebné návazné akci převzít jiná část jádra, která je\ns obsluhou přerušení jinak souběžná).",
      },
      {
        uuid: "9e1809e9-5fdf-4047-9f48-88363b7795f2",
        correct:
          "Notifikace\nNejzákladnější formou přerušení je notifikace – upozornění na nějakou obecnou událost.\nTento typ přerušení je obvykle relativně nezávazný v tom smyslu, že zdržení nebo i úplný výpadek obsluhy\nsystém ani zpracovávaná data nijak neohrozí. ",
        incorrect:
          "Notifikace\nNejzákladnější formou přerušení je notifikace – upozornění na nějakou obecnou událost.\nTento typ přerušení je extrémně spolehlivý a nedovoluje chyby, protože zdržení nebo i úplný výpadek obsluhy může\nsystém nebo data ohrozit. ",
      },
      {
        uuid: "86349c09-5160-45a1-ab09-76b4586bc5cb",
        correct:
          "DMA\nZařízení s větší šířkou pásma obvykle pro přenos dat používají DMA, tzn. režim, kdy periferie\npřesouvá data do operační paměti souběžně s běžným provozem zbytku systému. Tyto přenosy je ale\nnutné synchronizovat s operačním systémem (resp. s ovladačem zařízení, který je součástí operačního\nsystému).\nSměrem k periferii je synchronizace realizována zápisem do registru, opačným směrem ale podobný\nmechanismus použít nelze – periferie místo toho signalizuje dokončení přenosu přerušením.\n",
        incorrect:
          "DMA\nZařízení s větší šířkou pásma obvykle pro přenos dat používají DMA, tzn. režim, kdy periferie\npřesouvá data do operační paměti souběžně s běžným provozem zbytku systému. Tyto přenosy je ale\nnutné synchronizovat s operačním systémem (resp. s ovladačem zařízení, který je součástí operačního\nsystému).\nSměrem k periferii je synchronizace realizována přerušením, opačným směrem ale podobný\nmechanismus použít nelze – periferie místo toho zapisuje přímo do registrů procesoru.\n",
      },
      {
        uuid: "af9e81df-3822-4a55-990a-1752b064c05e",
        correct:
          "Časovač - mainupalce s frontami vláken\nTyto operace musí být:\n1. chráněny proti zásahům jiných procesorových jader (obvykle spinlockem, alternativně by mohl být\ncelý plánovač postaven na komunikačních zařízeních bez zámků; uspání zde nepřichází v úvahu),\n2. chráněny proti přerušení (zákazem) a tedy musí být zároveň\n3. efektivní (konstantní nebo nejvýše logaritmické v počtu vláken),\n4. synchronizace v bodech 1 a 2 musí být velmi důsledně koordinovaná: plánovač nesmí zamknout spinlock,\naniž by byla zároveň zakázána přerušení (jinak by mohlo dojít k uváznutí), ale zároveň nesmí na\nspinlock příliš dlouho čekat (protože musí být při čekání zakázaná přerušení, tzn. jedná se o časově\nkritickou operaci).\n",
        incorrect:
          "Časovač - mainupalce s frontami vláken\nTyto operace musí být:\n1. chráněny proti zásahům jiných procesorových jader (obvykle spinlockem, alternativně by mohl být\ncelý plánovač postaven na komunikačních zařízeních bez zámků; uspání zde nepřichází v úvahu),\n2. chráněny proti přerušení (zákazem) a tedy musí být zároveň\n3. efektivní (konstantní nebo nejvýše logaritmické v počtu vláken),\n4. synchronizace v bodech 1 a 2 musí být velmi důsledně koordinovaná: plánovač musí zamknout spinlock,\na zároveň musí být platný zakáz přerušení (jinak by mohlo dojít k uváznutí), ale zároveň nesmí na\nspinlock příliš dlouho čekat (protože musí být při čekání zakázaná přerušení, tzn. jedná se o časově\nkritickou operaci).\n",
      },
    ],
  },
];
