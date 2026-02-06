import { Card } from "@/components/ui/card";
import { Heart, Users, BookOpen, Clock } from "lucide-react";
import churchImage from "@/assets/church-mosaic.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-sacred-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">O Adoraciji</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* What is Adoration */}
          <Card className="p-8 bg-card shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Kaj je adoracija?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Adoracija je evharistična pobožnost, pri kateri se verniki združujejo v češčenju 
                  Najsvetejšega zakramenta tako, da vsak stalni častilec časti Najsvetejši zakrament 
                  določeno uro v tednu, ki si jo sam izbere. Tega vernika imenujemo »častilec«, ker 
                  pride častit gospoda Jezusa v njegovem Telesu, Krvi, duši in božanstvu.
                </p>
              </div>
            </div>
          </Card>

          {/* Faithful Worshiper */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Stalni častilec</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Stalni častilec se zaveže, da bo častil Jezusa v Najsvetejšem zakramentu 
                    določeno uro enkrat na teden.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✓ Ob dogovorjeni uri pridem v cerkev kjer je izpostavljeno Najsvetejše</p>
                    <p>✓ Pred Najsvetejšim v molitvi vztrajam dokler ne pride naslednji častilec</p>
                    <p>✓ Če ne morem priti, si sam poiščem zamenjavo</p>
                    <p>✓ Lahko postanem tudi nadomestni častilec</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card shadow-lg overflow-hidden relative">
              <img 
                src={churchImage} 
                alt="Church mosaic with monstrance" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <BookOpen className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Namen adoracije</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Okušati češčenje Gospoda v Najsvetejšem zakramentu in postajati eno z njim, 
                      ki je naše vse.
                    </p>
                    <div className="p-4 bg-sacred-gold/10 rounded-lg border border-sacred-gold/20">
                      <p className="text-sm italic text-foreground">
                        "Jezus nam daje svoje milosti in prinaša mir v človekovo srce. 
                        In človek, ki ima v srcu mir, lahko prinaša mir svetu."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Process */}
          <Card className="p-8 bg-card shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <Clock className="w-8 h-8 text-sacred-gold flex-shrink-0 mt-1" />
              <div className="w-full">
                <h3 className="text-2xl font-bold text-foreground mb-6">Potek adoracije</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sacred-gold text-sacred-shadow flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <p className="text-muted-foreground">
                      Najprej Jezusa počastim s poklekom ali priklonom. Nato zavzamem primeren položaj.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sacred-gold text-sacred-shadow flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <p className="text-muted-foreground">
                      V sebi naredim potreben prostor oz. odprtost za Gospoda. Opustim vse skrbi, misli in spomine.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sacred-gold text-sacred-shadow flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <p className="text-muted-foreground">
                      V veri usmerim svojo pozornost na Jezusa Kristusa, ki je živo navzoč v Najsvetejšem, 
                      in me gleda z ljubeznijo in usmiljenjem.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-sacred-gold text-sacred-shadow flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <p className="text-muted-foreground">
                      Lahko si pomagam z molitvijo, petjem kanonov, ali samo preživel čas v tihem okušanju 
                      njegove navzočnosti. On gleda mene, jaz gledam Njega. On ljubi mene, jaz ljubim Njega 
                      in to je dovolj.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-gradient-to-br from-sacred-cream to-sacred-gold/10 rounded-lg border-l-4 border-sacred-gold">
                  <p className="text-foreground italic leading-relaxed">
                    "Biti tu pred teboj, Gospod, to je vse. Zapreti oči svojega telesa, zapreti oči svoje 
                    duše in ostati negiben, tih, izpostaviti se tebi, ki si tu, izpostavljen, biti navzoč 
                    pred teboj, večno Navzoči."
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Invitation */}
          <Card className="p-8 bg-gradient-to-br from-sacred-gold/20 to-background shadow-lg border-2 border-sacred-gold">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Vabilo</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Lepo vabljen(a), da eno uro na teden podariš evharističnemu Jezusu in postaneš njegov(a) stalni(a) častilec(ka).
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-foreground font-semibold">Kontaktiraj nas:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="tel:041601854" className="text-sacred-gold hover:text-sacred-gold-dark font-semibold">
                    📞 041 601 854
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">|</span>
                  <a href="mailto:info@adoracija.com" className="text-sacred-gold hover:text-sacred-gold-dark font-semibold">
                    ✉️ adoracija.com
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
