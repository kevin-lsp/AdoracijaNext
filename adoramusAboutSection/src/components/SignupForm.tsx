import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Napaka",
        description: "Prosimo, izpolnite vsa polja.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Prijava uspešna!",
      description: "Kmalu vas bomo kontaktirali. Hvala za vašo prijavo!",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section id="signup" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <UserPlus className="w-6 h-6 text-sacred-gold" />
              <h2 className="text-4xl font-bold text-foreground">Pridruži se Adoraciji</h2>
            </div>
            <p className="text-muted-foreground">
              Postani stalni častilec in daruj eno uro na teden evharističnemu Jezusu
            </p>
          </div>

          <Card className="p-8 shadow-lg bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ime *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Vaše ime"
                    className="border-border focus:border-sacred-gold"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Priimek *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Vaš priimek"
                    className="border-border focus:border-sacred-gold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-pošta *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vas.email@primer.si"
                  className="border-border focus:border-sacred-gold"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="041 601 854"
                  className="border-border focus:border-sacred-gold"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-sacred-gold hover:bg-sacred-gold-dark text-sacred-shadow font-semibold py-6 text-lg"
              >
                Pošlji prijavo
              </Button>

              <div className="mt-6 p-4 bg-sacred-cream rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Lahko nas tudi pokličete na <strong className="text-sacred-gold">041 601 854</strong> ali 
                  pišete na <strong className="text-sacred-gold">adoracija.com</strong>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
