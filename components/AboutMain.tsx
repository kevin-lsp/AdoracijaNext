"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Heart,
  Clock,
  Users,
  User,
  Send,
  BookOpen,
  Phone,
  Mail,
} from "lucide-react";
import SignupModal from "./SignupModal";

// Section content for sections 1-5
const sectionContent = {
  section1: {
    title: "Adoracija - molitev v tišini pred Najsvetejšim",
    initial:
      "Adoracija je globoko, intimno srečanje dveh oseb, ki se ljubita.<br>Človeka in Boga.<br>Mene in Njega.<br>Tebe in Njega.",
    expanded: `Adoracija je predvsem molitev v božji navzočnosti, saj je v posvečeni hostiji, v Najsvetejšem zakramentu, navzoč Jezus na stvaren in resničen način. Zato je to v prvi vrsti kontemplativna molitev, molitev zrenja, molka, tihega okušanja njegove navzočnosti in globokega osebnega pogovora. Pri tihi adoraciji dopustimo, da tišina spregovori. Da nam Bog v tišini spregovori.

Jezus nas v Najsvetejšem zakramentu vabi, da bi se mu zahvalili za dar odrešenja in tudi zato, da v nas neprenehoma izliva Božje življenje. Iz tega zaupnega in ljubečega odnosa z Jezusom v Najsvetejšem vedno znova prejemamo božje milosti in tako rastemo v veri, upanju in ljubezni.

V adoraciji se učimo vztrajati v tihi molitvi. 
V tišini častiti Gospoda v Najsvetejšem zakramentu. 
Ostajati eno z Njim, ki je naše vse.
`,
  },
  section2: {
    title: "Pot do osebnega odnosa z Jezusom",
    initial:
      "Ko preživljamo čas z evharističnim Jezusom, lahko z Njim vzpostavimo pristen, oseben odnos. Ker nas Jezus neskončno ljubi, si želi intimnega srečanja z nami.",
    expanded: `Neizmerno se nas razveseli, kadar se odločimo, da v tišini, v molitvenem češčenju, preživimo nekaj trenutkov z Njim, pred Njim. 

Pri adoraciji Gospod in častilec v ljubezni zreta drug drugega. Srce govori srcu…`,
  },
  section3: {
    title: "Jezus nas vabi vse in nam podarja svoj mir",
    initial: `Jezus je z nami in nam kliče:
»<strong><u>Pridite k meni vsi,</u></strong> ki ste utrujeni in obteženi in jaz vas bom dal počitek. Vzemite nase svoj jarem in učite se od mene, ker sem krotak in v srcu ponižen, in našli boste mir svojim dušam.«
(Mt 11, 28-29)`,
    expanded: `Vsak, brez izjeme je povabljen, da pred Najsvetejšim okusi nežnost Boga.

Jezus svojim učencem razodene srce. 
Danes njegovo srce utripa v Najsvetejšem zakramentu! 

V evharistiji Jezus izpolni obljubo: »In glejte: jaz sem z vami vse dni do konca sveta.«`,
  },
  section4: {
    title: "Stalna adoracija ali vsakodnevno evharistično češčenje",
    initial:
      "<u>Stalno izpostavljanje - izpostavljanje Najsvetejšega</u>, ki traja iz dneva v dan - običajno poteka le v eni ali nekaj kapelah v posamezni škofiji. Kje točno poteka stalna adoracija, lahko preberete v zavihku ob desnem robu te spletne strani.",
    expanded: `Stalno izpostavljanje je mogoče le tam, kjer je na razpolago dovolj molivcev t. i. »stalnih častilcev«, torej oseb, ki se zavežejo, da bodo zagotovili prisotnost vsaj enega molivca pred izpostavljenim evharističnim Jezusom. Da lahko to živimo v praksi, vabimo k sodelovanju vse, ki želite postati del skupnosti stalnih častilcev.

Poznamo tudi občasno izpostavljanje Najsvetejšega, ki je v naših župnijah precej pogosto. Običajno poteka ob sredah ali petkih, uro pred mašo. Pogosto je povezano z molitvijo rožnega venca ali drugo pobožnostjo in ne poteka v tišini.`,
  },
  section5: {
    title: "Stalni častilec",
    initial:
      "Stalni častilec je kristjan, ki se zaveže, da bo vsaj eno uro tedensko – ob točno določenem času – častil Jezusa v Najsvetejšem zakramentu.",
    expanded: ` Kot stalni častilec se zavežete:                                  
- da boste ob dogovorjeni uri prišli v cerkev, kjer je izpostavljeno Najsvetejše,
- da boste v molitvi vztrajali do prihoda naslednjega častilca,
- da boste v primeru zadržanosti pravočasno obvestili koordinatorja ali sami poskrbeli za zamenjavo.

Če se želite pridružiti, izpolnite spodnjo prijavo.`,
  },
};

// 12 Predlogs for Section 7
interface Predlog {
  id: number;
  title: string;
  content?: string;
  bibleQuote?: string;
  reflection?: string;
  source: string | null;
}

const predlogs: Predlog[] = [
  {
    id: 1,
    title: "Češčenje - preprosto in enostavno",
    content: `1. Jezusa počastim s poklekom ali priklonom in zavzamem primeren položaj.
2. V sebi naredim potreben prostor, oziroma vzpostavim odprtost za Gospoda.
&nbsp;&nbsp;&nbsp;&nbsp;Opustim vse skrbi, misli in spomine.
3. V veri usmerim svojo pozornost na Jezusa Kristusa, ki je živo navzoč v Najsvetejšem in me
&nbsp;&nbsp;&nbsp;&nbsp;gleda z ljubeznijo in usmiljenjem.
4. Lahko si pomagam z molitvijo, petjem kanonov, ali samo preživim čas v tihem okušanju
&nbsp;&nbsp;&nbsp;&nbsp;Njegove navzočnosti. On gleda mene, jaz gledam Njega. On ljubi mene, jaz ljubim Njega.
5. Na koncu se zahvalim. Mirno odidem.`,
    source: null,
  },
  {
    id: 2,
    title: "Češčenje - preprosto, nekoliko podrobnejše",
    content: `1. Ko vstopim v cerkev, oziroma kapelo, najprej Jezusa počastim s poklekom ali priklonom in se postavim v primeren položaj, kakor morem glede na počutje, zdravje in druge okoliščine. V tišini se usedem in umirim dihanje.

2. Zavestno se postavim v božjo prisotnost. V veri usmerim svojo pozornost, svoj pogled na hostijo, na Jezusa Kristusa, ki je živo navzoč in me gleda z ljubeznijo in usmiljenjem. Lahko si pomagam s preprostim stavkom: "Gospod tukaj sem." Ne kompliciram. Samo pridem.

3. V sebi naredim potreben prostor za Gospoda. Kolikor mi je mogoče, opustim vse skrbi, misli in spomine, ter se prepustim molku ...

4. Ko začutim da sem zbran, neham premišljevati. Ostanem v preprosti navzočnosti. Če se pojavijo neželjene misli, jih mirno pustim, se ob njih ne vznemirjam. Ne silim čustev. Ne iščem posebnih doživetij. Samo ostajam z Bogom.

5. Na koncu se zahvalim. Zmolim Oče naš. Mirno vstanem, se poklonim, odidem.`,
    source: "Vir: smernice Terezije Avilske in Janeza od Križa",
  },
  {
    id: 3,
    title: "Češčenje - razširjena razlaga",
    content: `Zavem se, da je Bog tu prisoten in mi je ljubeče naklonjen. Edino, kar moram storiti je, da svojo pozornost usmerim le Nanj in samo Nanj.
Če mi pomaga, lahko zaprem oči in se zavem, da me Bog gleda z ljubečim pogledom.
Podobno je, kadar se postavim na sonce in to neizbežno sije name, na isti način name gleda
Bog.

Začetek: Umiritev in zavedanje. Povabilo Svetega Duha.

Poklonim se in se postavim v primeren položaj, lahko zaprem oči in se skušam
zavedati, da me Bog prav v tem trenutku gleda z ljubečim pogledom. Molitev je vračanje k
tistemu, ki me že čaka.

Vzamem si trenutek, da se v sebi umirim, zavem se svojega telesa. Lahko globoko vdihnem in
se zavem, da sem tu, da me Bog ljubeče gleda s pogledom, ki ne obsoja in ki je brez posebnih
pričakovanj. Bog je preprosto vesel, da sem z njim. Tako lahko ostanem nekaj trenutkov, da to
zavedanje poglobim.
V molitev povabim Svetega Duha. On bo vodil mojo molitev.

Izročanje: Pred Boga položi vse, s čimer si prišel.

Spregovorim, o tem, kar mi leži na srcu in o vsem, kar me ta trenutek zaposluje. Vse
preprosto izročim Bogu brez nadaljnjega premlevanja in razčlenjevanja. Predstavljam si, da je
ob meni moj najboljši prijatelj, moja najljubša oseba. Kaj mu najprej povem?

To je lahko nekaj povsem vsakdanjega: težave v šoli, doma ali v službi, skrb ob bolezni
otroka, skrbi, ki me ne zapustijo, boleči spomini … Zaupam mu, kaj me v tem trenutku teži in
zaposluje, saj bi me to sicer nenehno odvračalo in motilo mojo zbranost med molitvijo.

Hvaležnost: Premislim in izrazim, za kaj sem mu hvaležen.

Spomnim se na nekaj stvari, za katere sem hvaležen, in se mu zanje zahvalim.
Izrazim se preprosto, s svojimi besedami, brez kompliciranja.

Usmeritev: Bogu zaupam, kje potrebujem njegovo vodstvo.

Razmislim, v katerih okoliščinah ali pri kateri stvari potrebujem Božjo usmeritev in
njegovo vodstvo (na primer: čaka me zelo naporen sestanek v službi, imam zahteven pogovor
s svojim partnerjem/prijateljem/sodelavcem/kolegom /odraščajočim sinom … Kako naj se
odločim v določenem položaju...
Ko to izrečem, se odprem in prisluhnem Božjim predlogom, da se izpolni Božja volja in ne
moja.

Poslušanje: Notranja naravnanost za poslušanje tihega šepeta.

Odprem duhovna ušesa za Božje predloge in tako vstopim v poslušanje. Bistvo poslušanja je,
da sem pozoren na pobude Boga. Te pogosto pridejo ob prebranem odlomku iz Svetega pisma
ali po berilih tega dne. Velikokrat se zgodi, da me kakšen odlomek posebej nagovori in me
spremlja čez dan ali v določeni položaju.

Bog lahko govori tudi po mojih mislih, po nenadnem spominu iz mojega življenja ali
preprosto po zdravem notranjem občutku … Božji glas in Božje delovanje prepoznam po
notranjem miru. Božji odgovor pogosto prepoznam potem, ko je molitev že končana.
Človek sčasoma razvije občutek za poslušanje; na primer - včasih pride nepričakovano neka
ideja ali se v življenju zgodi nekaj nenavadnega in v srcu začutimo mir – to je pogosto Božji
odgovor.

Prosim ga lahko naj mi pomaga pri uresničevanju tega, kar mi je uspelo slišati.

Češčenje: Usmeritev in poslušanje lahko zamenja notranja počastitev Boga.

Gospod me lahko globoko povede v svojo bližino.
Prepustim se Svetemu Duhu, ki me vodi v vse večje zavedanje navzočnosti Boga. Kolikor je v
moji moči, okušam to navzočnost. Postavim se predenj, kakršenkoli sem; dovolim, da me
ljubi. Čudim se tej ljubezni in se zahvalim zanjo. Čudim se ljubezni, ki jo ima do drugih ljudi.
Najina prisotnost je dovolj. Ljubezen zadostuje.

Zaključek: Zahvala za čas molitve in molitev Cerkve.

Bogu se zahvalim za skupni čas. Lahko mu izrazim posebno hvaležnost za določene besede
ali prejete občutke.
Na koncu lahko počasi zmolim eno izmed molitev Cerkve: Oče naš ali Slava Očetu ali druga
molitev, ki ti je osebno blizu. S to molitvijo svojo molitev združim z molitvijo vseh kristjanov.
Molitev enega namreč ni nikoli tvoje individualno dejanje, ampak je del celotne skupnosti
Cerkve.
Amen na koncu teh molitev pomeni: “Tako bodi.”`,
    source: "Vir: Joži Bukovšek",
  },
  {
    id: 4,
    title: "Mojzes in goreči grm",
    bibleQuote: `Tedaj se mu je iz sredine grma v ognjenem plamenu prikazal Gospodov angel. Pogledal je in glej, grm je gorel s plamenom, a ni zgorel. 3 Mojzes je rekel: »Moram stopiti tja in si ogledati to veliko prikazen, kako da grm ne zgori!« 4 Ko je Gospod videl, da prihaja gledat, ga je Bog poklical iz sredine grma in rekel: <u>»Mojzes, Mojzes!«</u> Rekel je: »Tukaj sem.« 5 Bog je rekel: »Ne hôdi sem! <u>Sezuj si sandale z nog, kajti kraj, kjer stojiš, je sveta zemlja!«</u> 6 Potem je rekel: »Jaz sem Bog tvojega očeta, Bog Abrahamov, Bog Izakov in Bog Jakobov.« (2.Mz 3, 2–14)`,
    reflection: `V Svetem pismu je vedno Bog tisti, ki prvi prihaja človeku naproti. »Gospodov angel«
predstavlja samega Boga, ki obišče svoje ljudstvo. Izbral si je podobo gorečega grma.
Bog, ki obišče svoje ljudstvo, je danes, je navzoč v Presvetem zakramentu.
Ogenj nakazuje neskončno Kristusovo ljubezen, ki očiščuje, preoblikuje, ozdravlja.
Bog Mojzesa pokliče po imenu. Povabi ga na osebno srečanje, v odnos ljubezni, iz oči v oči.
Hostija predstavlja nebesa na zemlji. Hostija je Bog, ki se nam daje, je Alfa in Omega, naš
začetek in naš konec. Je Kristusovo vstalo telo, odrešenje sveta.

Med adoracijo lahko prosim Gospoda za milost čudenja nad njegovo resnično navzočnostjo v
evharistiji. In kakor Mojzes (če mi kolena dopustijo :-) adoracijo začnem in končam na
kolenih …`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 5,
    title: "Češčenje treh modrih",
    bibleQuote: `1 Ko je bil Jezus rojen v Betlehemu v Judeji v dneh kralja Heroda, so prišli modri
z Vzhoda v Jeruzalem 2 in govorili: »Kje je ta, ki se je rodil kot judovski kralj? Videli smo namreč, da je vzšla njegova zvezda,
in smo se mu prišli poklonit.« 3 Ko je kralj Herod to slišal, se je vznemiril in ves Jeruzalem z njim. 4 Sklical je vse vélike duhovnike in pismouke ljudstva ter pri njih poizvedoval, kje je rojen Mesija. 5 Rekli so mu: »V Betlehemu v Judeji« (…)
…in modri so se odpravili na pot; in glej, zvezda, ki so jo videli vziti,
je šla pred njimi, dokler ni obstala nad krajem, kjer je bilo dete. 10 Ko so zagledali zvezdo, <u>so se silno razveselili.</u> 11 Stopili so v hišo in zagledali dete z Marijo, njegovo materjo. <u>Padli so predenj in ga počastili.</u> Odprli so svoje zaklade in mu darovali zlata, kadila in mire. (Mt 2, 1-11)`,
    reflection: `Modri so pričakovali, da bo »ves Jeruzalem v veselju«, a tam se niso zavedali velikega
čudeža, rojstva Boga samega.

Enako je danes z nami: ravnodušnost mnogih župljanov do resnične Jezusove navzočnosti v
hostiji nas lahko neprijetno preseneti.

Modri so pričakovali, da bodo ob rojstvu Kralja videli »ves sijaj neba in zemlje«. A zvezda jih
je vodila v hlev, k jaslim, kjer niso našli množice ljudi, zgolj ubogega otroka z materjo.
Zmedeno so gledali Mater, ki je častila Božje Dete. Tedaj so doumeli prikrito skrivnost
Emanuela, »Boga z nami«. Razveselili so se in ga počastili!

Pri adoraciji se lahko pridružimo Mariji in modrim.
Tako kot modri, se lahko »silno razveselimo, pademo predenj in ga počastimo« …`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 6,
    title: "Marta in Marija",
    bibleQuote: `38 Ko so potovali, je prišel v neko vas in žena z imenom Marta ga je sprejela v svojo hišo.
39 Imela je sestro, ki ji je bilo ime Marija. Ta je sedla h Gospodovim nogam in poslušala njegove besede, 40 Marta pa je imela s postrežbo veliko dela. Pristopila je in rekla: »Gospod, ti ni mar, da me je sestra pustila sámo streči? Reci ji vendar, naj mi pomaga!« 41 Gospod ji je odgovoril: »Marta, Marta, skrbi in vznemirja te veliko stvari, 42 a <u>le eno je potrebno.</u>
Marija si je izvolila dobri del, ki ji ne bo odvzet.« (Lk 10, 38-42)`,
    reflection: `Vsi moramo delati. Toda delo nas ne sme v celoti posrkati kot se je to zgodilo Marti. Smisla
našemu življenju ne daje najprej zemeljska hrana, temveč hrana, ki daje večno življenje, to je
evharistični Jezus. Služenje Bogu mora vedno imeti prednost. Bog nam mora biti prvi. Bolj ko
bo naša ljubezen do Boga pristna, bolj dejavna bo naša ljubezen do bližnjega.

Adoracijo lahko opravimo z zavedanjem, da bolj, ko bomo pri adoraciji obsijani od Boga, več
Boga bomo lahko prinesli v naše delo, v naše domove, našim bližnjim.`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 7,
    title: "Češčenje - Iskanje Jezusovega dotika",
    bibleQuote: `25 Bila je neka žena, ki je že dvanajst let krvavela. 26 Veliko je pretrpela od mnogih zdravnikov in porabila vse svoje premoženje, pa ji ni nič pomagalo, ampak je bilo z njo celo slabše. 27 Slišala je za Jezusa. Med množico se mu je približala od zadaj in se dotaknila njegove obleke. 28 Rekla je namreč: »Tudi če se dotaknem le njegove obleke, bom rešena.«
29 In v hipu se ji je ustavila kri in v telesu je začutila, da je ozdravljena nadloge. 30 Jezus je v sebi zaznal, da je šla moč iz njega. Takoj se je obrnil v množici in rekel: »Kdo se je dotaknil moje obleke?« 31 Njegovi učenci so mu govorili: »Saj vidiš, kako množica pritiska nate, pa praviš: ›Kdo se me je dotaknil?‹« 32 Oziral se je okrog, da bi videl tisto, ki je to storila. 33 Ker je žena vedela, kaj se je z njo zgodilo, je vsa preplašena trepetaje pristopila, se vrgla predenj in mu povedala vso resnico. 34 On pa ji je rekel: »Hči, tvoja vera te je rešila. Pojdi v miru in bodi ozdravljena svoje nadloge!« (Mr 5, 25-34)`,
    reflection: `Pri adoraciji se lahko »dotaknem Jezusa«. Lahko se mu približam in se ga plašno
dotaknem …
Jezusa se lahko dotaknem v zaupnem pogovoru z Njim, pri skrivnosti Gospodove večerje …
(Vendar si ne domišljajmo prehitro, da smo se Ga dotaknili, ko smo se mu le približali!)
Pa vendar je mogoče, da se pri adoraciji pojavijo privilegirani trenutki, ko v
neizrekljivem drhtenju, v nekakšni nepremagljivi očividnosti (takrat pademo na
kolena v velikoi ponižnosti!) rečemo: »Dotaknil sem se Jezusa!« Ali še bolje: »Jezus se me je
dotaknil!«
Češčenje Najsvetejšega zakramenta je lahko ravno to: iskanje dotika Njega, ki ozdravlja in
odrešuje.`,
    source:
      "Vir: Jezus, preprosti pogledi na Odrešenika (Kartuzija Pleterje, 1979)",
  },
  {
    id: 8,
    title: "Častiti Očeta v duhu in resnici",
    bibleQuote: `Žena mu je dejala: »Gospod, vidim, da si prerok. Naši očetje so častili Boga na tej gori, vi pa pravite, da je kraj, kjer ga je treba častiti, v Jeruzalemu.« Jezus ji je rekel: »Veruj mi, žena, da pride ura, ko ne boste častili Očeta ne na tej gori ne v Jeruzalemu. Vi častite, česar ne poznate, mi pa častimo, kar poznamo, kajti odrešenje je od Judov. <u>Pride pa ura in je že zdaj, ko bodo pravi častilci častili Očeta v duhu in resnici.</u> Prav takih častilcev si namreč želi Oče. Bog je duh, in kateri ga častijo, ga morajo častiti v duhu in resnici.« Žena mu je dejala: »Vem, da pride Mesija (kar pomeni Maziljenec). Ko pride, nam bo vse oznanil.« (Jn 4, 19-25)`,
    reflection: `Jezus se razodeva kot veliki in popolni častilec Očeta. Jezus časti v duhu in resnici. Jezus je
resnica. Sveti Duh v polnosti živi v njem. Zato so vsa Jezusova dejanja, molitve in besede
izpolnjene v duhu in resnici.
Ko pridem pred Najsvetejše in gledam hostijo, storim čisti korak vere. Gledam istega Jezusa,
kot ga opisuje evangelij. Jezusa, živega in resničnega! Jezusa, ki časti Očeta v Duhu in
resnici. Jezusa, ki bo zame storil vse, kar je storil za svoje prijatelje v evangeliju.`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 9,
    title: "Češčenje - zaupno polaganje ljubljene osebe pred Gospoda",
    bibleQuote: `Ko je čez nekaj dni spet prišel v Kafarnáum, se je razvedelo, da je v hiši. Veliko se jih je nabralo, tako da še v veži ni bilo več prostora, in jim je oznanjal besedo. Kar na lepem so prišli k njemu s hromim, ki so ga štirje nosili. Ker ga zaradi gneče niso mogli prinesti predenj, so nad krajem, kjer je bil, odkrili streho in spustili skozi odprtino nosila, na katerih je hromi ležal. Ko Jezus vidi njihovo vero, reče hromemu: <u>»Sin, odpuščeni so ti grehi!«</u> Sedelo pa je tam nekaj pismoukov, ki so v srcu premišljevali: »Kaj ta tako govori? To je bogokletje! Kdo more odpuščati grehe razen Boga?« Jezus v duhu takoj spozna, da pri sebi tako mislijo, in jim reče: »Kaj tako premišljujete v svojih srcih? Kaj je laže? Reči hromemu: 'Odpuščeni so ti grehi' ali reči: »Vstani, vzemi nosila in hôdi?' Ampak da boste vedeli, da ima Sin človekov oblast na zemlji odpuščati grehe,« reče tedaj hromemu: <u>Vstani, vzemi nosila in pojdi domov!«</u>» Mož je vstal, takoj pograbil nosila in vpričo vseh odšel, tako da <u>so vsi strmeli in slavili Boga:</u> »Kaj takega nismo še nikoli videli.« (Mr 2, 1-10)`,
    reflection: `Štirje prijatelji hromega se niso ustrašili težave ki jih je ovirala, da bi prijatelja postavili pred
Jezusa. Dokazali so pogum, iznajdljivost in odločnost. Ko je Jezus videl <u>njihovo (!) vero</u>, je
rekel hromemu: &quot;Tvoji grehi so ti odpuščeni”. Nič ni rečeno o veri hromega, niti o tem, ali je
sploh želel biti prinesen pred Jezusa. Gotovo je le, to, da je Jezusa nagovorila vera
štirih prijateljev.

Ko smo pri adoraciji, pred živim Jezusom, lahko predenj prinesemo naše bližnje, prijatelje,
družine, ves svet. Zanje Ga lahko prosimo, da tudi njim spregovori: “Tvoji grehi so ti
odpuščeni!” Da jim reče: “Ozdravljam te…, vstani…, vzemi…,pojdi...”`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 10,
    title: "Naj se zgodi Tvoja volja ...",
    bibleQuote: `Prišli so na kraj z imenom Getsemani, in Jezus je rekel svojim učencem: »Sedíte tukaj, dokler bom molil!« S seboj je vzel Petra, Jakoba in Janeza. Osupnil je od groze in začel trepetati.  Rekel jim je: »Moja duša je žalostna do smrti. Ostanite tukaj in bedite!« In šel je malo naprej, se vrgel na tla in molil, da bi šla, če je mogoče, ta ura mimo njega. Govoril je: »Aba, Oče, tebi je vse mogoče! Daj, da gre ta kelih mimo mene, <u>vendar ne, kar jaz hočem, ampak kar ti!</u>« Nato je šel in ugotovil, da spijo. Petru je rekel: »Simon, spiš? Nisi mogel eno uro ostati buden? Bedite in molíte, da ne pridete v skušnjavo! Duh je sicer voljan, a meso je slabotno.« (Mr 14, 32-38)`,
    reflection: `Kot častilec pri adoraciji ne želim več iskati »svoje volje za Boga«, temveč iščem »Božjo
voljo zase«. Kristjani se prepogosto velikodušno izgubljamo v številnih služenjih, ki si jih
nalagamo. In ob tem lahko doživljamo občutek nezadovoljstva, neizpolnjenosti, saj
izpolnjujemo »svojo voljo za Boga«.
Preden začnem v vsakdanjem življenju delovati, moram kot pravi častilec poklekniti pred
Gospoda, prepoznati Njegovo voljo in od Njega prejeti moč in milost za izpolnitev
zastavljenega. »Gospod pokaži mi tvojo voljo in mi nakloni milost, da jo izpolnim.«

In še to: molitev je najboljša opora v boju proti vsakodnevnim skušnjavam.
»Molite, da ne pridete v skušnjavo!« (Mr-14, 37)`,
    source: "Vir: F Racine: Izkusimo moč adoracije (Založba Emanuel, 2020)",
  },
  {
    id: 11,
    title: "Češčenje - Hvalnice Bogu Najvišjemu",
    content: `Ko je bil dve leti pred svojo smrtjo sv. Frančišek zadnjič na La Verni, so mu, globoko
presunjenemu z božjo ljubeznijo iz duše privrele Hvalnice Bogu Najvišjemu, ki jih je
lastnoročno zapisal. Ta njegov zapis je še vedno ohranjen.

V Hvalnicah poveličuje, hvali in slavi Boga; v njih »jaz« popolnoma izgine, v središču
njegovega češčenja je kar 32 - krat »Ti«.
Hvalnice Bogu Najvišjemu so zelo primerne kot častilna molitev pred Najsvetejšim.

Ti si svet, Gospod Bog,
Ti edini, ki delaš čudeže.
Ti si močan.
Ti si velik.
Ti si najvišji.
Ti si vsemogočni kralj,
ti sveti Oče,
kralj nebes in zemlje.
Ti si trojstven in eden,
Gospod Bog bogov.
Ti sam si dobro,
vse dobro,
najvišje dobro,
Gospod Bog, živi in resnični.
Ti si ljubezen, nesebična ljubezen.
Ti si modrost.
Ti si ponižnost.
Ti si potrpežljivost.
Ti si lepota.
Ti si varnost.
Ti si spokojnost.
Ti si veselje in radost.
Ti si naše upanje.
Ti si pravičnost.
Ti si zmernost.
Ti si vse naše bogastvo do zadostnosti.
Ti si lepota.
Ti si krotkost.
Ti si zavetje.
Ti si naš varuh in branitelj.
Ti si pogumnost.
Ti si osvežitev.
Ti si naše upanje.
Ti si naše vera.
Ti si naša ljubezen.
Ti si vsa naša sladkost.
Ti si naše večno življenje,
veliki in čudoviti Gospod,
vsemogočni Bog,
Usmiljeni Odrešenik!
Amen.

Idealno je, če bi ta (ali kakšna druga podobna molitev) postala naš stalni spremljevalec pri
adoraciji. Primerno bi bilo, če bi si jo napisali na list in jo imeli pri sebi. Še bolje, če se jo
naučimo na pamet in jo v mislih molimo skupaj s Frančiškom.

Lahko pa si tudi v mislih predstavljamo, da jo molimo skupaj s celotnim zborom svetnikov, da
skupaj častimo Boga Najvišjega!

Seveda pa si lahko izberemo tudi kakšno drugo slavilno ali častilno molitev …
Zelo primerna je vsem dobro znana »Slava Bogu na višavah…«`,
    source: "Vir: Ves dan tvoje veličastvo (Frančiškova knjižnica -3, 1995)",
  },
  {
    id: 12,
    title: "Češčenje - tudi to se zgodi",
    content: `Pri češčenju se lahko zgodi tudi... da zadremam, da zaspim :-)

Častilec lahko pride pred Jezusa tudi ko je bolan, utrujen, dementen in star. Lahko Ga obišče
sredi noči. Lahko ure in ure prekleči pred Gospodom, včasih lahko v solzah ves razboljen in
utrujen zadrema…

Mala Terezija Deteta Jezusa nas ob tem prisrčno potolaži, naj si – če se nam to že zgodi – ne
očitamo preveč, saj Jezus gleda na nas tako, kot ljubeča mama gleda na svojega spečega
otroka, ki je sredi igre zaspal …
Jezus nas tudi take - utrujene, speče – ljubeče gleda in blagoslavlja.`,
    source: null,
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const AboutMain = () => {
  // State management
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });

  const [expandedPredlogs, setExpandedPredlogs] = useState<
    Record<number, boolean>
  >({});
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const togglePredlog = (id: number) => {
    setExpandedPredlogs((prev) => (prev[id] ? {} : { [id]: true }));
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-24">
          {/* SECTION 1: Adoracija - molitev pred Najsvetejšim (Full Width) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                    {sectionContent.section1.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <p
                    className="text-base leading-relaxed text-navy/90 font-inter"
                    dangerouslySetInnerHTML={{
                      __html: sectionContent.section1.initial,
                    }}
                  />

                  <AnimatePresence>
                    {expandedSections.section1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p
                          className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: sectionContent.section1.expanded,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleSection("section1")}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    aria-expanded={expandedSections.section1}
                  >
                    {expandedSections.section1 ? "Skrij" : "Prikaži več"}
                    {expandedSections.section1 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTIONS 2 & 3: Two-column grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* SECTION 2: Adoracija - pot do osebnega odnosa z Jezusom */}
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <Heart className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy">
                    {sectionContent.section2.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <p
                    className="text-base leading-relaxed text-navy/90 font-inter"
                    dangerouslySetInnerHTML={{
                      __html: sectionContent.section2.initial,
                    }}
                  />

                  <AnimatePresence>
                    {expandedSections.section2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p
                          className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: sectionContent.section2.expanded,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleSection("section2")}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    aria-expanded={expandedSections.section2}
                  >
                    {expandedSections.section2 ? "Skrij" : "Prikaži več"}
                    {expandedSections.section2 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 3: Jezus vabi vse in nam podarja svoj mir */}
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <Users className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy">
                    {sectionContent.section3.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <div className="p-4 bg-gold/15 backdrop-blur-sm rounded-lg border border-gold/30">
                    <p
                      className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line italic"
                      dangerouslySetInnerHTML={{
                        __html: sectionContent.section3.initial,
                      }}
                    />
                  </div>

                  <AnimatePresence>
                    {expandedSections.section3 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p
                          className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: sectionContent.section3.expanded,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleSection("section3")}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    aria-expanded={expandedSections.section3}
                  >
                    {expandedSections.section3 ? "Skrij" : "Prikaži več"}
                    {expandedSections.section3 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTIONS 4 & 5: Two-column grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* SECTION 4: Stalna adoracija */}
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <Clock className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy">
                    {sectionContent.section4.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <p
                    className="text-base leading-relaxed text-navy/90 font-inter"
                    dangerouslySetInnerHTML={{
                      __html: sectionContent.section4.initial,
                    }}
                  />

                  <AnimatePresence>
                    {expandedSections.section4 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p
                          className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: sectionContent.section4.expanded,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleSection("section4")}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    aria-expanded={expandedSections.section4}
                  >
                    {expandedSections.section4 ? "Skrij" : "Prikaži več"}
                    {expandedSections.section4 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 5: Stalni častilec */}
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <User className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-playfair font-bold text-navy">
                    {sectionContent.section5.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <p
                    className="text-base leading-relaxed text-navy/90 font-inter"
                    dangerouslySetInnerHTML={{
                      __html: sectionContent.section5.initial,
                    }}
                  />

                  <AnimatePresence>
                    {expandedSections.section5 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p
                          className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line"
                          dangerouslySetInnerHTML={{
                            __html: sectionContent.section5.expanded,
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleSection("section5")}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    aria-expanded={expandedSections.section5}
                  >
                    {expandedSections.section5 ? "Skrij" : "Prikaži več"}
                    {expandedSections.section5 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 6: Adoracija - prijava (CTA with cream background and gold border) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            <div className="p-6 bg-cream shadow-3xl rounded-2xl border-4 border-gold/60 transition-all duration-300 hover:shadow-4xl">
              <div className="flex gap-6 items-start">
                <Send className="w-10 h-10 text-gold flex-shrink-0 mt-1 animate-pulse" />
                <div className="flex-1 space-y-3">
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-navy">
                    Adoracija - prijava
                  </h3>
                  <div className="w-20 h-0.5 bg-gold" />
                  <p className="text-lg leading-relaxed text-navy/90 font-inter">
                    Če ste se odločili, da vsaj eno uro na teden preživite v
                    tišini ob evharističnem Jezusu in postanete njegov stalni
                    častilec, se nam lahko pridružite na enega od naslednjih
                    načinov:
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    {/* Option 1: Form */}
                    <div
                      onClick={() => setIsSignupModalOpen(true)}
                      className="p-3 bg-white/90 backdrop-blur rounded-lg border border-navy/20 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <span className="text-xl font-playfair font-bold text-navy">
                            1
                          </span>
                        </div>
                        <p className="font-inter font-semibold text-navy">
                          Izpolnite
                        </p>
                        <span className="px-6 py-2 bg-gold text-navy font-inter font-medium rounded-md hover:bg-gold-dark transition-colors">
                          PRIJAVO
                        </span>
                      </div>
                    </div>

                    {/* Option 2: SMS */}
                    <div className="p-3 bg-white/90 backdrop-blur rounded-lg border border-navy/20 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <span className="text-xl font-playfair font-bold text-navy">
                            2
                          </span>
                        </div>
                        <p className="font-inter font-semibold text-navy mb-2">
                          Pošljite sms na tel.
                        </p>
                        <a
                          href="tel:041601854"
                          className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium"
                        >
                          <Phone className="h-5 w-5" />
                          041 601 854
                        </a>
                      </div>
                    </div>

                    {/* Option 3: Email */}
                    <a
                      href="mailto:adoracija@gmail.com"
                      className="p-3 bg-white/90 backdrop-blur rounded-lg border border-navy/20 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer block no-underline"
                    >
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                          <span className="text-xl font-playfair font-bold text-navy">
                            3
                          </span>
                        </div>
                        <p className="font-inter font-semibold text-navy mb-2">
                          Pišite na
                        </p>
                        <span className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium">
                          <Mail className="h-5 w-5" />
                          info@adoracija.si
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SECTION 7: Adoracija - potek evharističnega češčenja */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            {/* Unified Container */}
            <div className="p-10 md:p-12 bg-white/95 backdrop-blur-sm shadow-3xl rounded-2xl border-2 border-navy/10 hover:shadow-4xl transition-all duration-300">
              {/* Header Section */}
              <div className="flex gap-6 items-start mb-10">
                <BookOpen className="w-10 h-10 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-navy">
                    Tiha adoracija - potek evharističnega češčenja
                  </h3>
                  <div className="w-20 h-0.5 bg-gold" />
                  <p className="text-base leading-relaxed text-navy/90 font-inter">
                    Pri tihi adoraciji gre za osebni odnos med človekom in Bogom
                    – dveh oseb, ki se ljubita. Zato je možnosti za češčenje
                    neskončno: kolikor je ljudi, toliko je poti. Vsaka je
                    pravilna, če le poteka v tišini. Pred Jezusa lahko pridemo
                    utrujeni in obteženi ali veseli in radostni – temu primerno
                    bo potekala tudi naša adoracija. Za lažji vstop v adoracijo
                    v nadaljevanju ponujamo nekaj predlogov in napotkov.
                  </p>
                </div>
              </div>

              {/* Grid of Predlog Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {predlogs.map((predlog) => (
                  <div
                    key={predlog.id}
                    className={`relative ${expandedPredlogs[predlog.id] ? "md:col-span-2 lg:col-span-3 -order-1" : ""}`}
                  >
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold/20 border-2 border-white shadow-md flex items-center justify-center z-10">
                      <span className="text-sm font-playfair font-bold text-navy">
                        {predlog.id}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      className={`border-2 rounded-xl bg-white/80 backdrop-blur shadow-md transition-all duration-300 ${
                        expandedPredlogs[predlog.id]
                          ? "border-gold/30 shadow-xl"
                          : "border-navy/10 hover:shadow-xl hover:border-gold/30 hover:scale-[1.02]"
                      }`}
                    >
                      <button
                        onClick={() => togglePredlog(predlog.id)}
                        className="w-full p-6 flex items-start justify-between text-left group"
                        aria-expanded={expandedPredlogs[predlog.id]}
                      >
                        <div className="flex-1 space-y-2">
                          <h4 className="text-xl font-playfair font-bold text-navy group-hover:text-gold transition-colors">
                            {predlog.title}
                          </h4>
                        </div>
                        {expandedPredlogs[predlog.id] ? (
                          <ChevronUp className="w-5 h-5 text-gold flex-shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gold flex-shrink-0 ml-2 group-hover:scale-110 transition-transform" />
                        )}
                      </button>

                      <AnimatePresence>
                        {expandedPredlogs[predlog.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="px-6 pb-6 pt-2 border-t border-navy/10 overflow-hidden"
                          >
                            {predlog.bibleQuote && (
                              <div className="p-4 bg-gold/15 backdrop-blur-sm rounded-lg border border-gold/30 mb-4">
                                <p
                                  className="text-base leading-relaxed text-navy/90 font-inter whitespace-pre-line italic"
                                  dangerouslySetInnerHTML={{
                                    __html: predlog.bibleQuote,
                                  }}
                                />
                              </div>
                            )}
                            {(predlog.reflection || predlog.content) && (
                              <p
                                className="text-base text-navy/85 font-inter leading-relaxed whitespace-pre-line"
                                dangerouslySetInnerHTML={{
                                  __html: (predlog.reflection ??
                                    predlog.content)!,
                                }}
                              />
                            )}
                            {predlog.source && (
                              <p className="text-sm italic text-navy/60 font-inter mt-4">
                                {predlog.source}
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signup Modal */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </section>
  );
};

export default AboutMain;
