import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import adorationPainting from "@/assets/jozi-picture.jpg";
import namenAdoracije from "@/assets/fra-angelico.jpg";
import sadoviAdoracije from "@/assets/andreja-picture.jpeg";
import kakoPristopiti from "@/assets/girl-praying.jpg";
import adoracijaKraj from "@/assets/adoracija-kraj.jpg";
import mojaZgodba from "@/assets/girl-story.jpg";

const citations = [
  {
    text: "Ljubi Gospoda, svojega Boga, z vsega srca, z vso svojo dušo, z vso svojo močjo in z vsem svojim mišljenjem, in svojega bližnjega kakor samega sebe.",
    source: "Lk 10, 27",
  },
  {
    text: "Odžejaj se pri Kristusu, saj je on skala, iz katere teče reka vode. Odžejaj se pri Kristusu, saj je on vir življenja. Odžejaj se pri Kristusu, saj je on reka, ki razveseljuje Božje mesto.",
    source: "Ambrozij Milanski",
  },
  {
    text: 'Moliš? Sedaj bi lahko šel pred Najsvetejše in za trenutek adoriral.\n"Toda kaj naj tam počnem? Ne znam …"\n"Tam je On sam, pokazal ti bo … prav enostavno je."',
    source: "Pierre Goursat",
  },
  {
    text: "Adoracija – vanjo je trebe vstopati in to se zgodi v globini …",
    source: "Pierre Goursat",
  },
  {
    text: "Če je duša sama v sebi prazna in zaprta vase, še več, če je lastni, hrupni jaz docela proč, potem je tu prostor in tišina, da more kaj drugega najti prostor in spregovoriti.",
    source: "Edith Stein",
  },
  {
    text: "Evharistija je moja avtocesta v nebesa.",
    source: "Sv. Carlo Acutis",
  },
  {
    text: "V luči evharistije vidimo, da je Kristus v resnici življenje in luč vsega, kar obstaja, ter slava, ki napolnjuje nebesa in zemljo. Ničesar več ni, česar bi se spominjali, ničesar, za kar bi se zahvaljevali, kajti v Njem najdejo vse stvari svoje bivanje, življenje in konec.",
    source: "Alexander Schmemann",
  },
  {
    text: "Molitev je tvoje srce na Božjem ušesu in Božje uho na tvojem srcu.",
    source: "Klaus Hemmerle",
  },
  {
    text: 'Tomaž mu je odgovoril in rekel: "Moj Gospod in moj Bog!" Jezus mu je rekel: "Ker si me videl, veruješ. Blagor tistim, ki niso videli, pa so verovali."',
    source: "Jn 20, 28-29",
  },
  {
    text: "Onkraj Boga so hrup, nemir, prepiri, vojne. Pri Bogu pa je vse urejeno, vse je v najlepšem redu.",
    source: "Sv. Carlo Acutis",
  },
  {
    text: "Glej to Srce, ki je tako ljubilo ljudi, da si v ničemer ni prizaneslo, vse do tega, da se je do konca izčrpalo in použilo, da bi jim izpričalo svojo ljubezen.",
    source: "Jezus Marjeti Mariji Alakok",
  },
  {
    text: "Kdo vam bo pomagal, da bo vaše srce odprto kot Jezusovo? Jezus sam v Najsvetejšem zakramentu. Tu je, da bi nas ljubil v tem trenutku.",
    source: "Sv. Mati Terezija",
  },
];

const AboutMain = () => {
  const [showMore, setShowMore] = useState(false);
  const [expandedPoints, setExpandedPoints] = useState<Record<number, boolean>>(
    {},
  );
  const [currentCitation, setCurrentCitation] = useState(0);

  const togglePoint = (index: number) => {
    setExpandedPoints((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const nextCitation = () => {
    setCurrentCitation((prev) => (prev + 1) % citations.length);
  };

  const prevCitation = () => {
    setCurrentCitation(
      (prev) => (prev - 1 + citations.length) % citations.length,
    );
  };

  // Auto-advance every 5 minutes (300000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCitation((prev) => (prev + 1) % citations.length);
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  const guidancePoints = [
    {
      title: "1. Začetek: Umiritev in zavedanje. Povabilo Svetega Duha.",
      text: `Se pokloniš in zavzameš primeren položaj, lahko zapreš oči in se skušaš zavedati, da te Bog prav v tem trenutku gleda z ljubečim pogledom.
Molitev je vračanje k tistemu, ki me že čaka.

Vzami si trenutek, da se v sebi umiriš, zaveš se svojega telesa. Lahko globoko vdihneš in se zaveš, da si tu in da te Bog ljubeče gleda s pogledom, ki ne obsoja in ki je brez posebnih pričakovanj. Bog je preprosto vesel, da si z njim. Tako lahko ostaneš nekaj trenutkov, da to zavedanje poglobiš.

V molitev povabi Svetega Duha. On bo vodil tvojo molitev.`,
    },
    {
      title: "2. Izročanje: Pred Boga položi vse, s čimer si prišel.",
      text: `Spregovori, o tem, kar ti leži na srcu in o vsem, kar te ta trenutek zaposluje. Preprosto izroči Bogu brez nadaljnjega premlevanja in razčlenjevanja. Predstavljaj si, da je ob tebi tvoj najboljši prijatelj, tvoja najljubša oseba. Kaj mu najprej poveš?

To je lahko nekaj povsem vsakdanjega: težave v šoli, doma ali v službi, skrb ob bolezni otroka, skrbi, ki me ne zapustijo, boleči spomini … Zaupaj mu, kaj te v tem trenutku teži in zaposluje, saj bi te to sicer nenehno odvračalo in motilo tvojo zbranost med molitvijo. To lahko storiš naglas ali v tišini svojega srca.`,
    },
    {
      title: "3. Hvaležnost: Poišči in izrazi.",
      text: `Poišči (tri) stvari, za katere si hvaležen, in se mu zanje zahvali. Izrazi se mu preprosto, s svojimi besedami, brez kompliciranja.`,
    },
    {
      title: "4. Usmeritev: Bogu predstavi, kje potrebuješ njegovo vodstvo.",
      text: `Razmisli, v kateri situaciji ali pri kateri stvari potrebuješ Božjo usmeritev in njegovo vodstvo (na primer: čaka te zelo naporen sestanek v službi, imaš zahteven pogovor s svojim partnerjem/prijateljem/sodelavcem/ kolegom / odraščajočim sinom … , kako naj se odločim v določenem položaju …).
Ko to izrečem, se odprem in prisluhnem Božjim predlogom, da se izpolni Božja volja in ne moja.`,
    },
    {
      title: "5. Poslušanje: Notranja naravnanost za poslušanje tihega šepeta.",
      text: `Odpri duhovna ušesa za Božje predloge in tako vstopi v poslušanje. Poslušanje je v tem, da si pozoren na pobude Boga. Te pogosto pridejo ob prebranem odlomku iz Svetega pisma ali po berilih tega dne. Velikokrat se zgodi, da te kakšen odlomek posebej nagovori in te spremlja čez dan ali v določeni situaciji.

Bog lahko govori tudi po tvojih mislih ali po nenadnem spominu iz tvojega življenja ali preprosto po zdravem notranjem občutku … Božji glas in Božje delovanje prepoznamo po notranjem miru. Božji odgovor pogosto prepoznamo po že končani molitvi. 

Človek sčasoma razvije občutek za poslušanje; na primer, včasih pride nepričakovano neka ideja ali se v življenju zgodi nekaj nenavadnega in v srcu začutiš mir – to je pogosto Božji odgovor.

Prosiš ga lahko, da ti pomaga pri uresničevanju tega, kar si uspel slišati.`,
    },
    {
      title: "6. Zaključek: Zahvala za čas molitve in molitev Cerkve.",
      text: `Bogu se zahvali za skupni čas. Lahko mu izraziš posebno hvaležnost za določene besede ali prejete občutke.

Na koncu lahko počasi zmoliš eno izmed molitev Cerkve: Oče naš ali Slava Očetu ali druga molitev, ki ti je osebno blizu. S to molitvijo svojo molitev združiš z molitvijo vseh kristjanov. Molitev enega namreč ni nikoli tvoje individualno dejanje, ampak je del celotne skupnosti Cerkve.

Amen na koncu teh molitev pomeni: "Tako naj bo."

Bog te vodi po popolnoma edinstveni poti molitve, omenjene točke so zato le približen okvir.

Ne izgubljaj poguma, če ne zmoreš moliti. Bog je že ničkolikokrat konkretno vstopil v srce človeka zgolj po iskrenem: "Če obstajaš, se mi razodeni! Če si tu, mi to daj spoznati."

Redna molitvena srečanja z Bogom, četudi kratka, pogosto prinesejo velike spremembe v življenju.`,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-background/60 to-sacred-cream"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 - Adoracija */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden">
                <img
                  src={adorationPainting}
                  alt="Adoracija - abstraktna slika"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                1. ADORACIJA: V TIŠINI, PRED ŽIVIM BOGOM
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Izvorno besedo adorare lahko prevedemo kot: častiti, moliti,
                počastiti z globokim spoštovanjem, pokloniti se.
              </p>

              <Button
                variant="ghost"
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-base text-sacred-gold hover:text-sacred-gold/80 hover:bg-sacred-gold/10"
              >
                {showMore ? "Skrij" : "Prikaži več"}
                {showMore ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </Button>

              {showMore && (
                <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-muted-foreground leading-relaxed">
                    Adoracija je način molitve, ko sem v tišini prisoten pred
                    živim Bogom. Po duhovnikovem klicanju Svetega Duha nad
                    hostijo namreč ta postane Jezusovo telo samo. Je Božja
                    prisotnost.
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic">
                    Mt 26, 26: Medtem ko so jedli, je Jezus vzel kruh, ga
                    blagoslovil, razlomil, dal učencem in rekel: »Vzemite,
                    jejte, to je moje telo.«
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Srečanje človeka in Boga pri adoraciji iz oči v oči lahko
                    prebudi čustva, lahko pa tudi ne. Ne glede na to se pri
                    vsaki adoraciji zagotovo zgodi srečanje med človekom in
                    njegovim Stvarnikom. Dotik Boga in moje zaupanje v Njegovo
                    navzočnost me privede do tega, da se mu zaupam in da ga
                    počastim.
                  </p>
                </div>
              )}
            </div>
          </Card>

          {/* Section 2 - Namen Adoracije */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden">
                <img
                  src={namenAdoracije}
                  alt="Namen Adoracije"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                2. NAMEN ADORACIJE
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Namen adoracije je, da se v srčiki svojega bitja srečam z
                  Gospodom.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 text-base text-sacred-gold hover:text-sacred-gold/80 hover:bg-sacred-gold/10"
                >
                  {showMore ? "Skrij" : "Prikaži več"}
                  {showMore ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>

                {showMore && (
                  <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground leading-relaxed">
                      Adoracija je kraj, kjer se lahko z njim družim in kjer si
                      lahko ljubezen podarjava. Kadar tega ne zmorem, ga za
                      ljubezen lahko prosim, tako jaz lahko ljubim njega, sebe
                      in druge.
                    </p>
                    <p className="text-muted-foreground leading-relaxed italic">
                      Želja Boga je, da bi me ljubil in da bi ljubezen od mene
                      tudi sprejel. Zatem je enako moja želja, pa četudi skrita,
                      da bi doživel ljubezen Boga. Vrniti mu ljubezen je zatem
                      spontan vzgib!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Section 3 - Sadovi Adoracije */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden">
                <img
                  src={sadoviAdoracije}
                  alt="Sadovi Adoracije"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                3. SADOVI ADORACIJE
              </h3>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bog po svoji navzočnosti tolaži in ozdravlja. Odpira naša srca
                  in nam poveča ljubezen do Njega, do drugih in do sebe.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Druženje z Bogom podari novo upanje.
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 text-base text-sacred-gold hover:text-sacred-gold/80 hover:bg-sacred-gold/10"
                >
                  {showMore ? "Skrij" : "Prikaži več"}
                  {showMore ? (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-2 h-4 w-4" />
                  )}
                </Button>

                {showMore && (
                  <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-muted-foreground leading-relaxed">
                      Prepoznavam, katere korake moram narediti v življenju, in
                      tako spoznavam Božjo vizijo za svoje življenje.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Ko častim Boga, vse bolj postajam eno z njim.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Jezus prinaša mir v srce človeka. Samo tisti, ki ima v
                      srcu mir, lahko svetu prinaša mir.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Molitev resnično spreminja: moje življenje, mojo družino,
                      moj kraj, Slovenijo in svet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Section 4 - Kako pristopiti k adoraciji */}
          <Card className="p-8 pb-12 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden">
                <img
                  src={kakoPristopiti}
                  alt="Kako pristopiti k adoraciji"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                4. KAKO PRISTOPITI K ADORACIJI
              </h3>
              <div className="space-y-4 mb-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Zavem se, da je Bog tu prisoten in mi je ljubeče naklonjen.
                  Edino, kar moram storiti je, da svojo pozornost usmerim
                  predvsem Nanj.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Če ti pomaga, lahko zapreš oči in se zaveš, da te Bog gleda z
                  ljubečim pogledom. Podobno je, kadar se postavim na sonce in
                  ta neobhodno sije name, na isti način name gleda Bog.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-foreground mb-4">
                Lahko so ti v pomoč naslednji napotki:
              </h4>

              <div className="w-full space-y-3">
                {guidancePoints.map((point, index) => (
                  <div
                    key={index}
                    className="border border-sacred-gold/20 rounded-lg overflow-hidden"
                  >
                    <Button
                      variant="ghost"
                      onClick={() => togglePoint(index)}
                      className="w-full justify-between  text-left p-4 h-auto hover:bg-sacred-gold/10"
                    >
                      <span className="text-foreground font-medium text-sm">
                        {point.title}
                      </span>
                      {expandedPoints[index] ? (
                        <ChevronUp className="h-4 w-4 text-sacred-gold flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-sacred-gold flex-shrink-0" />
                      )}
                    </Button>
                    {expandedPoints[index] && (
                      <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line text-left">
                          {point.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Section 5 - Citati */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
                5. CITATI
              </h3>

              <div className="w-full max-w-2xl relative">
                <div className="min-h-[200px] flex flex-col items-center justify-center px-8">
                  <Quote className="w-12 h-12 text-sacred-gold/30 mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed italic mb-4 whitespace-pre-line">
                    "{citations[currentCitation].text}"
                  </p>
                  <p className="text-sacred-gold font-semibold">
                    — {citations[currentCitation].source}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevCitation}
                    className="h-10 w-10 rounded-full border border-sacred-gold/20 hover:bg-sacred-gold/10"
                  >
                    <ChevronLeft className="h-5 w-5 text-sacred-gold" />
                  </Button>

                  <div className="flex gap-2">
                    {citations.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentCitation(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentCitation
                            ? "bg-sacred-gold w-4"
                            : "bg-sacred-gold/30 hover:bg-sacred-gold/50"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextCitation}
                    className="h-10 w-10 rounded-full border border-sacred-gold/20 hover:bg-sacred-gold/10"
                  >
                    <ChevronRight className="h-5 w-5 text-sacred-gold" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  {currentCitation + 1} / {citations.length}
                </p>
              </div>
            </div>
          </Card>

          {/* Section 6 - Adoracija v mojem kraju */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                6. ADORACIJA V MOJEM KRAJU
              </h3>

              {/* Google Maps placeholder */}
              <div className="w-full max-w-2xl">
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-sacred-gold/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.5!2d14.505751!3d46.056946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDAzJzI1LjAiTiAxNMKwMzAnMjAuNyJF!5e0!3m2!1sen!2ssi!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokacija adoracije"
                    className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Zemljevid bo kasneje posodobljen z lokacijami adoracij po
                  Sloveniji.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 8 - Moja zgodba */}
          <Card className="p-8 bg-card shadow-lg overflow-hidden">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-md mb-6 rounded-lg overflow-hidden">
                <img
                  src={mojaZgodba}
                  alt="Moja zgodba"
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
                7. MOJA ZGODBA
              </h3>

              <div className="w-full max-w-3xl space-y-6">
                {/* Story 1 */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground/90 italic mb-3 text-left">
                    »Prijetno je muditi se pri njem in se kakor ljubljeni učenec
                    nasloniti na njegove prsi (Jn 13, 15), da se nas dotakne
                    brezmejna ljubezen njegovega srca. … Kolikokrat, dragi
                    bratje in sestre, sem to izkusil in iz tega prejel moč,
                    tolažbo in podporo.«
                  </p>
                  <p className="text-sacred-burgundy dark:text-sacred-gold font-medium text-right">
                    — Sv. Janez Pavel II.
                  </p>
                </div>

                {/* Story 2 */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground/90 italic mb-3 text-left">
                    "Vedno znova torej hrepenim po njegovem prihodu in marsikdaj
                    ponovno pride. In ko se mi bo ponovno prikazal in ga bom
                    prijel s svojimi rokami, se mi bo izmuznil; in čeprav se mi
                    je izmaknil, ga spet iščem. To počne vedno znova, dokler ga
                    resnično ne zadržim in se vzpnem, "naslonjen na svojega
                    ljubega"."
                  </p>
                  <p className="text-sacred-burgundy dark:text-sacred-gold font-medium text-right">
                    — Origen, Homilija k Visoki pesmi
                  </p>
                </div>

                {/* Story 3 */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground/90 italic mb-3 text-left">
                    "Jaz sem mislil na Boga, na Marijo, Bog pa je mislil na
                    vse!"
                  </p>
                  <p className="text-sacred-burgundy dark:text-sacred-gold font-medium text-right">
                    — 4-letni deček Jean
                  </p>
                </div>

                {/* Story 4 */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground/90 italic mb-3 text-left">
                    "V kapeli imamo izpostavljen Najsvetejši zakrament. Božanske
                    so ure, ki jih preživimo v tem majhnem kotičku nebes, kjer
                    imamo videnje v snovi pod ponižno hostijo."
                  </p>
                  <p className="text-sacred-burgundy dark:text-sacred-gold font-medium text-right">
                    — Elizabeta Svete Trojice
                  </p>
                </div>

                {/* Story 5 */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground/90 italic mb-3 text-left">
                    "Zvečer mi je rekel Gospod: “Moj otrok, odpočij se na mojem
                    Srcu, vidim, da si utrujena od dela v mojem vinogradu.” In
                    mojo dušo je preplavilo božje veselje"
                  </p>
                  <p className="text-sacred-burgundy dark:text-sacred-gold font-medium text-right">
                    — Jezus sveti Favstini Kowalski
                  </p>
                </div>

                {/* Story 6 - placeholder */}
                <div className="bg-sacred-cream/30 dark:bg-sacred-gold/5 p-6 rounded-lg border-l-4 border-sacred-gold opacity-60">
                  <p className="text-foreground/70 italic mb-3 text-left">
                    Vaša zgodba bo kmalu dodana ...
                  </p>
                  <p className="text-sacred-burgundy/70 dark:text-sacred-gold/70 font-medium text-right">
                    — Pričakujemo vašo zgodbo
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
