'use client';

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, Heart, Clock } from "lucide-react";
import Image from 'next/image';


const guidancePoints = [
  {
    title: "Začetek: Umiritev in zavedanje",
    subtitle: "Povabilo Svetega Duha",
    text: `Se pokloniš in zavzameš primeren položaj, lahko zapreš oči in se skušaš zavedati, da te Bog prav v tem trenutku gleda z ljubečim pogledom. Molitev je vračanje k tistemu, ki me že čaka.

Vzami si trenutek, da se v sebi umiriš, zaveš se svojega telesa. Lahko globoko vdihneš in se zaveš, da si tu in da te Bog ljubeče gleda s pogledom, ki ne obsoja in ki je brez posebnih pričakovanj. Bog je preprosto vesel, da si z njim. Tako lahko ostaneš nekaj trenutkov, da to zavedanje poglobiš.

V molitev povabi Svetega Duha. On bo vodil tvojo molitev.`,
  },
  {
    title: "Izročanje: Pred Boga položi vse",
    subtitle: "S čimer si prišel",
    text: `Spregovori, o tem, kar ti leži na srcu in o vsem, kar te ta trenutek zaposluje. Preprosto izroči Bogu brez nadaljnjega premlevanja in razčlenjevanja. Predstavljaj si, da je ob tebi tvoj najboljši prijatelj, tvoja najljubša oseba. Kaj mu najprej poveš?

To je lahko nekaj povsem vsakdanjega: težave v šoli, doma ali v službi, skrb ob bolezni otroka, skrbi, ki me ne zapustijo, boleči spomini … Zaupaj mu, kaj te v tem trenutku teži in zaposluje, saj bi te to sicer nenehno odvračalo in motilo tvojo zbranost med molitvijo. To lahko storiš naglas ali v tišini svojega srca.`,
  },
  {
    title: "Hvaležnost: Poišči in izrazi",
    subtitle: "Zahvali se za prejeto",
    text: `Poišči (tri) stvari, za katere si hvaležen, in se mu zanje zahvali. Izrazi se mu preprosto, s svojimi besedami, brez kompliciranja.`,
  },
  {
    title: "Usmeritev: Bogu predstavi",
    subtitle: "Kje potrebuješ njegovo vodstvo",
    text: `Razmisli, v kateri situaciji ali pri kateri stvari potrebuješ Božjo usmeritev in njegovo vodstvo (na primer: čaka te zelo naporen sestanek v službi, imaš zahteven pogovor s svojim partnerjem/prijateljem/sodelavcem/ kolegom / odraščajočim sinom … , kako naj se odločim v določenem položaju …). Ko to izrečem, se odprem in prisluhnem Božjim predlogom, da se izpolni Božja volja in ne moja.`,
  },
  {
    title: "Poslušanje: Notranja naravnanost",
    subtitle: "Za poslušanje tihega šepeta",
    text: `Odpri duhovna ušesa za Božje predloge in tako vstopi v poslušanje. Poslušanje je v tem, da si pozoren na pobude Boga. Te pogosto pridejo ob prebranem odlomku iz Svetega pisma ali po berilih tega dne. Velikokrat se zgodi, da te kakšen odlomek posebej nagovori in te spremlja čez dan ali v določeni situaciji.

Bog lahko govori tudi po tvojih mislih ali po nenadnem spominu iz tvojega življenja ali preprosto po zdravem notranjem občutku … Božji glas in Božje delovanje prepoznamo po notranjem miru. Božji odgovor pogosto prepoznamo po že končani molitvi.

Človek sčasoma razvije občutek za poslušanje; na primer, včasih pride nepričakovano neka ideja ali se v življenju zgodi nekaj nenavadnega in v srcu začutiš mir – to je pogosto Božji odgovor.

Prosiš ga lahko, da ti pomaga pri uresničevanju tega, kar si uspel slišati.`,
  },
  {
    title: "Zaključek: Zahvala za čas molitve",
    subtitle: "In molitev Cerkve",
    text: `Bogu se zahvali za skupni čas. Lahko mu izraziš posebno hvaležnost za določene besede ali prejete občutke.

Na koncu lahko počasi zmoliš eno izmed molitev Cerkve: Oče naš ali Slava Očetu ali druga molitev, ki ti je osebno blizu. S to molitvijo svojo molitev združiš z molitvijo vseh kristjanov. Molitev enega namreč ni nikoli tvoje individualno dejanje, ampak je del celotne skupnosti Cerkve.

Amen na koncu teh molitev pomeni: "Tako naj bo."

Bog te vodi po popolnoma edinstveni poti molitve, omenjene točke so zato le približen okvir.

Ne izgubljaj poguma, če ne zmoreš moliti. Bog je že ničkolikokrat konkretno vstopil v srce človeka zgolj po iskrenem: "Če obstajaš, se mi razodeni! Če si tu, mi to daj spoznati."

Redna molitvena srečanja z Bogom, četudi kratka, pogosto prinesejo velike spremembe v življenju.`,
  },
];


const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

const AboutMain = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [expandedPoints, setExpandedPoints] = useState<Record<number, boolean>>({});
  const [showPristop1, setShowPristop1] = useState(false);

  const togglePoint = (index: number) => {
    setExpandedPoints((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="space-y-24">
          {/* New Card-Based Layout for Sections 1-3 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="space-y-12"
          >
            {/* Card 1: Adoracija - Full Width */}
            <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
              <div className="flex gap-6 items-start">
                <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-cormorant font-bold text-navy">
                    Adoracija: V Tišini, Pred Živim Bogom
                  </h3>
                  <div className="w-16 h-0.5 bg-gold" />
                  <p className="text-base leading-relaxed text-navy/90 font-inter">
                    Izvorno besedo adorare lahko prevedemo kot: častiti, moliti,
                    počastiti z globokim spoštovanjem, pokloniti se.
                  </p>

                  {/* Expand Button */}
                  <button
                    onClick={() => setShowMore1(!showMore1)}
                    className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                  >
                    {showMore1 ? "Skrij" : "Prikaži več"}
                    {showMore1 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {showMore1 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4 overflow-hidden"
                      >
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          Adoracija je način molitve, ko sem v tišini prisoten pred
                          živim Bogom. Po duhovnikovem klicanju Svetega Duha nad
                          hostijo namreč ta postane Jezusovo telo samo. Je Božja
                          prisotnost.
                        </p>
                        <div className="p-4 bg-gold/15 backdrop-blur-sm rounded-lg border border-gold/30">
                          <p className="italic text-navy/90 leading-relaxed font-inter">
                            Mt 26, 26: Medtem ko so jedli, je Jezus vzel kruh, ga
                            blagoslovil, razlomil, dal učencem in rekel: »Vzemite,
                            jejte, to je moje telo.«
                          </p>
                        </div>
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          Srečanje človeka in Boga pri adoraciji iz oči v oči lahko
                          prebudi čustva, lahko pa tudi ne. Ne glede na to se pri
                          vsaki adoraciji zagotovo zgodi srečanje med človekom in
                          njegovim Stvarnikom. Dotik Boga in moje zaupanje v Njegovo
                          navzočnost me privede do tega, da se mu zaupam in da ga
                          počastim.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Cards 2 & 3: Two-Column Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 2: Namen Adoracije */}
              <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
                <div className="flex gap-6 items-start">
                  <Heart className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-cormorant font-bold text-navy">
                      Namen Adoracije
                    </h3>
                    <div className="w-16 h-0.5 bg-gold" />
                    <p className="text-base leading-relaxed text-navy/90 font-inter">
                      Namen adoracije je, da se v srčiki svojega bitja srečam z
                      Gospodom.
                    </p>

                    {/* Expand Button */}
                    <button
                      onClick={() => setShowMore2(!showMore2)}
                      className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    >
                      {showMore2 ? "Skrij" : "Prikaži več"}
                      {showMore2 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {showMore2 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 overflow-hidden"
                        >
                          <p className="text-base leading-relaxed text-navy/90 font-inter">
                            Adoracija je kraj, kjer se lahko z njim družim in kjer si
                            lahko ljubezen podarjava. Kadar tega ne zmorem, ga za
                            ljubezen lahko prosim, tako jaz lahko ljubim njega, sebe
                            in druge.
                          </p>
                          <div className="p-4 bg-gold/15 backdrop-blur-sm rounded-lg border border-gold/30">
                            <p className="italic text-navy/90 leading-relaxed font-inter">
                              Želja Boga je, da bi me ljubil in da bi ljubezen od mene
                              tudi sprejel. Zatem je enako moja želja, pa četudi skrita,
                              da bi doživel ljubezen Boga. Vrniti mu ljubezen je zatem
                              spontan vzgib!
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Card 3: Sadovi Adoracije - WITH BACKGROUND IMAGE */}
              <div className="relative p-8 bg-white/94 backdrop-blur-md shadow-2xl rounded-lg border-l-4 border-gold overflow-hidden transition-all duration-300 hover:shadow-3xl">
                {/* Background image at low opacity */}
                <img
                  src="/images/andreja-picture.jpeg"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                />

                <div className="relative flex gap-6 items-start">
                  <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-cormorant font-bold text-navy">
                      Sadovi Adoracije
                    </h3>
                    <div className="w-16 h-0.5 bg-gold" />
                    <p className="text-base leading-relaxed text-navy/90 font-inter">
                      Bog po svoji navzočnosti tolaži in ozdravlja. Odpira naša srca
                      in nam poveča ljubezen do Njega, do drugih in do sebe.
                    </p>
                    <p className="text-base leading-relaxed text-navy/90 font-inter">
                      Druženje z Bogom podari novo upanje.
                    </p>

                    {/* Expand Button */}
                    <button
                      onClick={() => setShowMore3(!showMore3)}
                      className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-medium text-sm"
                    >
                      {showMore3 ? "Skrij" : "Prikaži več"}
                      {showMore3 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>

                    {/* Expandable Content - List format */}
                    <AnimatePresence>
                      {showMore3 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-3 overflow-hidden"
                        >
                          <p className="text-sm leading-relaxed text-navy/90 font-inter">
                            • Prepoznavam, katere korake moram narediti v življenju, in
                            tako spoznavam Božjo vizijo za svoje življenje.
                          </p>
                          <p className="text-sm leading-relaxed text-navy/90 font-inter">
                            • Ko častim Boga, vse bolj postajam eno z njim.
                          </p>
                          <p className="text-sm leading-relaxed text-navy/90 font-inter">
                            • Jezus prinaša mir v srce človeka. Samo tisti, ki ima v
                            srcu mir, lahko svetu prinaša mir.
                          </p>
                          <p className="text-sm leading-relaxed text-navy/90 font-inter">
                            • Molitev resnično spreminja: moje življenje, mojo družino,
                            moj kraj, Slovenijo in svet.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 - Potek adoracije */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="space-y-12"
          >
            {/* Main Card with 4 Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="p-8 bg-white/92 backdrop-blur-sm shadow-2xl rounded-lg border border-navy/15 transition-all duration-300 hover:shadow-3xl">
                <div className="flex items-start gap-6">
                  <Clock className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div className="w-full">
                    <h3 className="text-2xl font-cormorant font-bold text-navy mb-6">Potek adoracije</h3>
                    <div className="space-y-6">
                      {/* 4 Steps */}
                      <div className="space-y-4">
                      {/* Step 1 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center flex-shrink-0 font-bold font-inter">
                          1
                        </div>
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          Najprej Jezusa počastim s poklekom ali priklonom. Nato zavzamem primeren položaj.
                        </p>
                      </div>

                      {/* Step 2 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center flex-shrink-0 font-bold font-inter">
                          2
                        </div>
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          V sebi naredim potreben prostor oz. odprtost za Gospoda. Opustim vse skrbi, misli in spomine.
                        </p>
                      </div>

                      {/* Step 3 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center flex-shrink-0 font-bold font-inter">
                          3
                        </div>
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          V veri usmerim svojo pozornost na Jezusa Kristusa, ki je živo navzoč v Najsvetejšem,
                          in me gleda z ljubeznijo in usmiljenjem.
                        </p>
                      </div>

                      {/* Step 4 */}
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center flex-shrink-0 font-bold font-inter">
                          4
                        </div>
                        <p className="text-base leading-relaxed text-navy/90 font-inter">
                          Lahko si pomagam z molitvijo, petjem kanonov, ali samo preživel čas v tihem okušanju
                          njegove navzočnosti. On gleda mene, jaz gledam Njega. On ljubi mene, jaz ljubim Njega
                          in to je dovolj.
                        </p>
                      </div>
                    </div>

                    {/* Quote Box */}
                    <div className="p-6 bg-gold/15 backdrop-blur-sm rounded-lg border-l-4 border-gold">
                      <p className="text-navy/90 italic leading-relaxed font-inter">
                        "Biti tu pred teboj, Gospod, to je vse. Zapreti oči svojega telesa, zapreti oči svoje
                        duše in ostati negiben, tih, izpostaviti se tebi, ki si tu, izpostavljen, biti navzoč
                        pred teboj, večno Navzoči."
                      </p>
                    </div>

                    {/* Expandable "Pristop 1" Button */}
                    <div className="pt-4 border-t border-navy/10">
                      <button
                        onClick={() => setShowPristop1(!showPristop1)}
                        className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors font-inter font-semibold text-base"
                      >
                        {showPristop1 ? "Skrij" : "Prikaži"} Pristop 1: Podrobnejši Napotki
                        {showPristop1 ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </button>

                      {/* Expandable Content - "Kako Pristopiti k Adoraciji" */}
                      <AnimatePresence>
                        {showPristop1 && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-8 space-y-6">
                              {/* Intro Text */}
                              <div className="space-y-4">
                                <p className="text-base font-inter text-navy/90 leading-relaxed">
                                  Zavem se, da je Bog tu prisoten in mi je ljubeče naklonjen.
                                  Edino, kar moram storiti je, da svojo pozornost usmerim
                                  predvsem Nanj.
                                </p>
                                <p className="text-base font-inter text-navy/90 leading-relaxed">
                                  Če ti pomaga, lahko zapreš oči in se zaveš, da te Bog gleda z
                                  ljubečim pogledom. Podobno je, kadar se postavim na sonce in
                                  ta neobhodno sije name, na isti način name gleda Bog.
                                </p>
                              </div>

                              <h4 className="text-xl font-cormorant font-medium text-navy text-center">
                                Lahko so ti v pomoč naslednji napotki:
                              </h4>

                              {/* 6 Guidance Points */}
                              <div className="relative space-y-4">
                                {/* Vertical timeline line */}
                                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent hidden md:block" />

                                {guidancePoints.map((point, index) => (
                                  <div key={index} className="relative flex gap-6">
                                    {/* Number badge */}
                                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center z-10 flex-shrink-0">
                                      <span className="text-2xl font-cormorant font-bold text-navy">{index + 1}</span>
                                    </div>

                                    {/* Content card */}
                                    <div
                                      className={`flex-1 border ${
                                        expandedPoints[index] ? 'border-gold/50 bg-white/90' : 'border-navy/15 bg-white/80'
                                      } backdrop-blur-sm rounded-xl transition-all duration-300 overflow-hidden`}
                                    >
                                      <button
                                        onClick={() => togglePoint(index)}
                                        className="w-full flex justify-between items-start text-left p-8 hover:bg-gold/5 transition-colors"
                                      >
                                        <div className="flex-1">
                                          <h4 className="text-xl md:text-2xl font-cormorant font-medium text-navy mb-2">
                                            {point.title}
                                          </h4>
                                          <p className="text-sm font-inter text-gold">{point.subtitle}</p>
                                        </div>
                                        {expandedPoints[index] ? (
                                          <ChevronUp className="h-5 w-5 text-gold flex-shrink-0 ml-4" />
                                        ) : (
                                          <ChevronDown className="h-5 w-5 text-gold flex-shrink-0 ml-4" />
                                        )}
                                      </button>

                                      <AnimatePresence>
                                        {expandedPoints[index] && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="px-8 pb-8">
                                              <p className="text-base font-inter text-navy/85 leading-relaxed whitespace-pre-line">
                                                {point.text}
                                              </p>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMain;
