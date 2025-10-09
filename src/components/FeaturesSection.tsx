import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Boxes, 
  Cpu, 
  UserCheck, 
  ShieldCheck, 
  Leaf,
  BarChart3
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

function getFeatures(t: any) {
  return [
    {
      icon: Boxes,
      title: t.features.mainFeatures.multiproduct.title,
      description: t.features.mainFeatures.multiproduct.description,
      badge: t.features.mainFeatures.multiproduct.badge
    },
    {
      icon: Cpu,
      title: t.features.mainFeatures.automation.title,
      description: t.features.mainFeatures.automation.description,
      badge: t.features.mainFeatures.automation.badge
    },
    {
      icon: UserCheck,
      title: t.features.mainFeatures.userCentered.title,
      description: t.features.mainFeatures.userCentered.description,
      badge: t.features.mainFeatures.userCentered.badge
    },
    {
      icon: ShieldCheck,
      title: t.features.mainFeatures.security.title,
      description: t.features.mainFeatures.security.description,
      badge: t.features.mainFeatures.security.badge
    },
    {
      icon: Leaf,
      title: t.features.mainFeatures.sustainability.title,
      description: t.features.mainFeatures.sustainability.description,
      badge: t.features.mainFeatures.sustainability.badge
    },
    {
      icon: BarChart3,
      title: t.features.mainFeatures.management.title,
      description: t.features.mainFeatures.management.description,
      badge: t.features.mainFeatures.management.badge
    }
  ];
}

// Custom separator component
function CustomSeparator() {
  return (
    <div className="relative w-full h-px bg-gray-300 my-12">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10%] h-2 bg-primary"></div>
    </div>
  );
}

export function FeaturesSection() {
  const { t, language } = useLanguage();
  const features = getFeatures(t);
  
  // Helper function to highlight key terms in bold
  const renderDescription = (text: string) => {
    const keyTerms = language === 'ES' 
      ? 'ingeniería de diseño industrial, interacción humano-máquina y sostenibilidad'
      : 'industrial design engineering, human-machine interaction and sustainability';
    
    const parts = text.split(new RegExp(`(${keyTerms})`, 'gi'));
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === keyTerms.toLowerCase()) {
        return <strong key={index}>{part}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="caracteristicas" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        {/* Descripción principal de uPorta */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Texto principal - 2 columnas */}
            <div className="md:col-span-2">
              <p className="text-lg text-foreground leading-relaxed text-left">
                {renderDescription(t.hero.context.description)}
              </p>
            </div>
            
            {/* Contexto como ladillo - 1 columna */}
            <div className="p-6 rounded-lg border-2 border-primary">
              <h3 className="text-sm font-semibold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t.hero.context.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.hero.context.sidebarText}
              </p>
            </div>
          </div>
        </div>

        <CustomSeparator />
        
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t.features.intro.title}{" "}
            <span className="text-primary">{t.features.intro.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.features.intro.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 gap-1">
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-2 pb-6">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                
                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Sección de Beneficios */}
        <div className="mt-20 max-w-4xl mx-auto">
          <CustomSeparator />
          
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.features.benefits.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: t.features.benefits.list[0] }}></p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: t.features.benefits.list[1] }}></p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: t.features.benefits.list[2] }}></p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground" dangerouslySetInnerHTML={{ __html: t.features.benefits.list[3] }}></p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Diseño, sostenibilidad y economía local */}
        <div className="mt-20 max-w-4xl mx-auto">
          <CustomSeparator />

          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t.features.sustainability.title}
            </h2>
          </div>

          <p className="text-lg text-foreground leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: t.features.sustainability.description }}>
          </p>
        </div>
      </div>
    </section>
  );
}