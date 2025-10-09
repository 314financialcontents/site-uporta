import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer>
      {/* Sección de imágenes - Negro ligeramente más claro */}
      <div className="bg-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Ministerio Images Section - Vertical Layout */}
          <div className="flex flex-col items-center space-y-8">
            {/* Texto informativo */}
            <p className="text-white text-center text-sm md:text-base">
              {t.footer.supportText}
            </p>
            
            {/* Cartel - 100% en móvil, 50% en desktop */}
            <div className="w-full md:w-1/2">
              <ImageWithFallback 
                src="https://utobot.com/static/images/7-11_DP24_CartelPublicidade.png"
                alt="Proyecto Digital"
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Logo del Ministerio - ancho del contenedor */}
            <div className="w-full max-w-4xl">
              <ImageWithFallback 
                src="https://utobot.com/static/images/logo_ministerio.svg"
                alt="Ministerio de Economía y Transformación Digital"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sección Copyright - Negro 100% */}
      <div className="bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}