import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit mx-auto bg-transparent text-black border-transparent hover:bg-transparent uppercase tracking-wide text-lg">
              {t.hero.badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white/75" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.hero.title}{" "}
              <span className="text-white font-bold">{t.hero.fullTitle}</span>{" "}
              {t.hero.fullTitleSuffix}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-black/90"
              onClick={() => {
                document.getElementById('caracteristicas')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
{t.hero.viewFeatures}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}