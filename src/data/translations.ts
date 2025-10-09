import { Translations } from '../types/language';

export const translations: Record<'ES' | 'EN', Translations> = {
  ES: {
    header: {
      blog: 'Blog',
      search: 'Buscar...',
    },
    hero: {
      title: 'Sistema de',
      subtitle: 'Revolucionando el retail con tecnología de vanguardia',
      viewFeatures: 'Ver Características',
      badge: 'Sistema de Dispensación Automatizada, Polivalente y Sostenible',
      fullTitle: 'dispensación',
      fullTitleSuffix: 'con uPorta',
      context: {
        title: 'uPorta en contexto',
        description: 'uPorta es un sistema de dispensación automática diseñado para ofrecer acceso inmediato a una variedad de productos —desde alimentos frescos y comidas calientes hasta ropa, libros, artículos de limpieza o ferretería— mediante puntos de venta autónomos 24/7. El enfoque combina ingeniería de diseño industrial, interacción humano-máquina y sostenibilidad para reducir fricciones en la compra diaria y apoyar la economía local.',
        sidebarText: 'En las ciudades modernas, los consumidores valoran la conveniencia y la inmediatez. La automatización bien diseñada se integra en la vida cotidiana proporcionando acceso sin fricciones a bienes esenciales y extendiendo el horario comercial de forma continua.',
      },
    },
    features: {
      title: 'Características Principales',
      intro: {
        title: 'Todo lo que necesitas en una',
        titleHighlight: 'solución completa',
        description: 'uPorta combina tecnología de vanguardia con diseño intuitivo para ofrecer la mejor experiencia en dispensación automatizada.',
      },
      mainFeatures: {
        title: 'Características Principales',
        multiproduct: {
          title: 'Multiproducto y modular',
          description: 'Módulos con condiciones diferenciadas (refrigerado, caliente, ambiente, congelado), bandejas y elevadores ajustables, y componentes intercambiables para reconfigurar la oferta con rapidez.',
          badge: 'Versatilidad',
        },
        automation: {
          title: 'Automatización avanzada',
          description: 'IoT para inventario en tiempo real, pagos sin contacto y pantalla táctil multilingüe con información y recomendaciones.',
          badge: 'Tecnología',
        },
        userCentered: {
          title: 'Diseño centrado en el usuario',
          description: 'Ergonomía y accesibilidad (altura usable en silla de ruedas, audio-guía, alto contraste, Braille).',
          badge: 'Inclusivo',
        },
        security: {
          title: 'Seguridad e higiene',
          description: 'Materiales resistentes, protocolos de higienización (p. ej., UV/ventilación) y validaciones de edad/identidad para productos regulados.',
          badge: 'Confianza',
        },
        sustainability: {
          title: 'Sostenibilidad',
          description: 'Aislamiento eficiente, LED de bajo consumo, modos de espera, diseño modular que prolonga la vida útil y facilita la reparación.',
          badge: 'Eco-friendly',
        },
        management: {
          title: 'Gestión inteligente',
          description: 'Monitorización remota 24/7, mantenimiento predictivo con alertas automáticas, análisis de patrones de consumo y optimización de stock.',
          badge: 'Inteligente',
        },
      },
      benefits: {
        badge: 'Beneficios',
        title: 'Ventajas para el usuario final',
        list: [
          '<strong>Disponibilidad 24/7</strong> y compras rápidas sin colas.',
          '<strong>Accesibilidad universal</strong> con múltiples modos de interacción (táctil, móvil, voz).',
          '<strong>Variedad en un solo punto</strong> (alimentos, ropa, ferretería, libros…).',
          '<strong>Transparencia informativa</strong>: origen local, ingredientes, especificaciones, tallas y valoraciones.',
        ],
      },
      sustainability: {
        badge: 'Diseño, sostenibilidad y economía local',
        title: 'Diseño, sostenibilidad y economía local',
        description: 'El desarrollo sigue principios de <strong>diseño industrial sostenible</strong> y una estética neutra y moderna para integrar uPorta en la trama urbana. Como plataforma abierta a productores locales y pequeños comercios, acorta la cadena de suministro, reduce huella de carbono y refuerza el consumo de proximidad.',
      },
    },
    footer: {
      copyright: '© 2024 uPorta. Todos los derechos reservados.',
      supportText: 'Nuestra empresa se ha beneficiado de las siguientes ayudas:',
    },
    blog: {
      title: 'Blog uPorta',
      subtitle: 'Descubre las últimas novedades en automatización retail y tecnología sostenible',
      readMore: 'Leer más',
      backToBlog: 'Volver al Blog',
      relatedPosts: 'Artículos Relacionados',
      posts: {
        post1: {
          title: 'Intimidad y Agilidad: Nuevos Escenarios para la Prueba de Ropa Automatizada',
          intro: 'Probarse ropa suele implicar esperas, poca privacidad y rupturas de flujo al cambiar de talla. Un probador automatizado integrado en uPorta permite seleccionar, recibir, probar e intercambiar prendas dentro de una cabina privada, sin salir ni depender de personal.',
          content: `## Diseño del probador\n\n- **Cabina personal que se habilita tras la identificación del usuario.** Espacio completamente privado que garantiza intimidad total durante el proceso de prueba, activándose únicamente con credenciales autorizadas.\n\n- **Entrega ágil de prendas con carriles/brazos robotizados.** Sistema automatizado que transporta las prendas seleccionadas directamente a la cabina, eliminando tiempos de espera y contacto con personal.\n\n- **Espejo inteligente con iluminación configurable y opciones de RA.** Tecnología de realidad aumentada que permite visualizar diferentes combinaciones, ajustar la iluminación según preferencias y simular diversos contextos de uso.\n\n- **Higienización automática de prendas y cabina entre sesiones.** Protocolos de limpieza automatizados que garantizan máxima higiene sin comprometer la rapidez del servicio.\n\n## Experiencia y efectos\n\n- **Autonomía y confianza al decidir sin presión social.** Eliminación del factor humano en el proceso de decisión, permitiendo al usuario tomarse el tiempo necesario sin sentirse observado o presionado.\n\n- **Ciclos de prueba rápidos al cambiar talla/modelo con un toque.** Interface intuitiva que permite solicitar variaciones instantáneamente, reduciendo el tiempo total de la experiencia de compra.\n\n- **Compra instantánea en la cabina (pagas y sales - vestido).** Transacción completa dentro del espacio privado, donde el usuario puede completar la compra y salir directamente con la prenda puesta.\n\n- **Nuevos hábitos: micro-probadores en ubicaciones urbanas.** Redistribución del retail hacia puntos estratégicos que transforman la experiencia de compra de ropa en los entornos urbanos.`,
          date: '2025-01-05',
          slug: 'intimidad-agilidad-nuevos-escenarios-prueba-ropa-automatizada'
        },
        post2: {
          title: 'El Diseño como Puente: Acceso Instantáneo a Bienes de Consumo Diversos',
          intro: 'Gracias a avances en diseño industrial y automatización, es posible integrar múltiples categorías en un único sistema. uPorta ejemplifica cómo el diseño actúa como puente, ofreciendo acceso instantáneo a bienes diversos en un solo punto.',
          content: `## Versatilidad y modularidad\n\n- **Control térmico diferenciado por módulo (frío/caliente/ambiente/congelado).** Cada compartimento mantiene las condiciones óptimas para diferentes tipos de productos, desde bebidas refrigeradas hasta comidas calientes.\n\n- **Bandejas y elevadores ajustables para distintos tamaños y pesos.** Sistema modular que se adapta automáticamente a productos de diferentes dimensiones, optimizando el espacio y garantizando la seguridad en la dispensación.\n\n- **Componentes intercambiables para reconfigurar según la demanda.** Flexibilidad total para adaptar la configuración interna según patrones de consumo estacionales o cambios en el inventario.\n\n- **Ergonomía consistente en toda la experiencia.** Interfaz unificada que mantiene la misma facilidad de uso independientemente del tipo de producto seleccionado.\n\n## Integración de categorías\n\n- **Inventario unificado y analítica para combos y ventas cruzadas.** Sistema inteligente que sugiere complementos y ofertas basadas en el comportamiento de compra y preferencias del usuario.\n\n- **Flujos homogéneos de interacción: detalles → cantidad → pago → entrega.** Proceso estandarizado que simplifica la experiencia sin importar si el usuario compra un snack, una bebida o un producto de higiene personal.\n\n- **Transparencia: ingredientes/alérgenos, especificaciones, tallas/materiales.** Información detallada disponible al instante para facilitar decisiones informadas y garantizar la seguridad del consumidor.\n\n- **Validaciones especializadas (edad, biometría) cuando aplique.** Sistemas de verificación automática para productos con restricciones específicas, manteniendo el cumplimiento normativo sin comprometer la fluidez.\n\n## Eficiencia y sostenibilidad\n\n- **Menor huella y costes operativos al consolidar máquinas/espacios.** Optimización del espacio urbano mediante soluciones multi-categoría que reducen la proliferación de dispositivos especializados.\n\n- **Cadena de suministro local más simple y flexible.** Simplificación logística que permite mayor agilidad en el reabastecimiento y reduce los tiempos de inactividad.\n\n- **Impulso a productores de proximidad y menor desperdicio por compras unitarias.** Promoción de la economía local y reducción del desperdicio mediante dispensación precisa de cantidades exactas.`,
          date: '2025-01-10',
          slug: 'diseno-como-puente-acceso-instantaneo-bienes-consumo-diversos'
        },
        post3: {
          title: 'Diseño para la Fricción Cotidiana: Adaptando Dispensadores al Ritmo Urbano',
          intro: 'La vida urbana incluye pequeñas fricciones: filas, horarios limitados, interfaces confusas o máquinas fuera de servicio. Diseñar para la fricción cotidiana significa identificarlas y minimizarlas mediante automatización y diseño centrado en el usuario.',
          content: `## Retos y fricciones típicas\n\n- **Horarios limitados y congestión en horas punta.** Los usuarios se ven obligados a adaptar sus rutinas a horarios específicos, creando cuellos de botella predecibles.\n\n- **Disponibilidad: evitar \"producto agotado\" con reposición proactiva.** La frustración de encontrar máquinas vacías interrumpe el flujo natural de la experiencia urbana.\n\n- **Accesibilidad física y cognitiva para todas las personas.** Las interfaces deben ser intuitivas y accesibles para usuarios con diferentes capacidades y niveles de familiaridad tecnológica.\n\n- **Interacciones innecesarias en procesos simples.** Cada paso adicional en el proceso de compra aumenta la fricción y reduce la satisfacción del usuario.\n\n## Estrategias de diseño en uPorta\n\n- **Operación 24/7 y pagos sin contacto (NFC/QR/billeteras).** Eliminamos las limitaciones temporales y reducimos el tiempo de transacción mediante métodos de pago modernos y seguros.\n\n- **Inventario inteligente conectado a la nube para reabastecer a tiempo.** Sistemas predictivos que anticipan la demanda y programan reposiciones antes de que se agoten los productos.\n\n- **Interfaz intuitiva (HCI): menos pasos, iconografía clara, multilingüe.** Diseño centrado en el usuario que minimiza la curva de aprendizaje y acelera las transacciones.\n\n- **Autodiagnóstico y mantenimiento preventivo para minimizar caídas de servicio.** Monitoreo continuo del estado de los componentes para prevenir fallos y mantener alta disponibilidad.\n\n- **Accesibilidad universal: alturas, audio, contraste, Braille y control por voz.** Diseño inclusivo que garantiza que todos los usuarios puedan interactuar con el sistema de forma autónoma.\n\n## Impacto esperado\n\nUna experiencia fluida y confiable acorde al ritmo urbano, con menos esperas y mayor autonomía del usuario. La tecnología se vuelve invisible, permitiendo que las personas se enfoquen en sus objetivos sin interrupciones innecesarias.`,
          date: '2025-01-15',
          slug: 'diseno-friccion-cotidiana-dispensadores-ritmo-urbano'
        }
      }
    },
    search: {
      title: 'Resultados de búsqueda',
      results: 'resultados para',
      noResults: 'No se encontraron resultados',
      noResultsDescription: 'Intenta con términos diferentes o más generales.',
      pageContent: 'Contenido de la página',
      blogContent: 'Artículos del blog',
      back: 'Volver',
      page: 'Página',
      blog: 'Blog',
    },
  },
  EN: {
    header: {
      blog: 'Blog',
      search: 'Search...',
    },
    hero: {
      title: 'Automated',
      subtitle: 'Revolutioning retail with cutting-edge technology',
      viewFeatures: 'View Features',
      badge: 'Automated, Versatile, and Sustainable Dispensing System',
      fullTitle: 'dispensing',
      fullTitleSuffix: 'with uPorta',
      context: {
        title: 'uPorta in context',
        description: 'uPorta is an automated dispensing system designed to provide immediate access to a variety of products —from fresh food and hot meals to clothing, books, cleaning supplies or hardware— through autonomous 24/7 retail points. The approach combines industrial design engineering, human-machine interaction and sustainability to reduce friction in daily shopping and support the local economy.',
        sidebarText: 'In modern cities, consumers value convenience and immediacy. Well-designed automation integrates into everyday life, providing frictionless access to essential goods and continuously extending business hours.',
      },
    },
    features: {
      title: 'Key Features',
      intro: {
        title: 'Everything you need in a',
        titleHighlight: 'complete solution',
        description: 'uPorta combines cutting-edge technology with intuitive design to deliver the best experience in automated dispensing.',
      },
      mainFeatures: {
        title: 'Key Features',
        multiproduct: {
          title: 'Multi-product and modular',
          description: 'Modules with different conditions (refrigerated, hot, ambient, frozen), adjustable trays and elevators, and interchangeable components to reconfigure the offer quickly.',
          badge: 'Versatility',
        },
        automation: {
          title: 'Advanced automation',
          description: 'IoT for real-time inventory, contactless payments and multilingual touch screen with information and recommendations.',
          badge: 'Technology',
        },
        userCentered: {
          title: 'User-centered design',
          description: 'Ergonomics and accessibility (wheelchair-accessible height, audio guide, high contrast, Braille).',
          badge: 'Inclusive',
        },
        security: {
          title: 'Security and hygiene',
          description: 'Resistant materials, sanitization protocols (e.g., UV/ventilation) and age/identity validations for regulated products.',
          badge: 'Trust',
        },
        sustainability: {
          title: 'Sustainability',
          description: 'Efficient insulation, low-consumption LED, standby modes, modular design that extends service life and facilitates repair.',
          badge: 'Eco-friendly',
        },
        management: {
          title: 'Smart management',
          description: '24/7 remote monitoring, predictive maintenance with automatic alerts, consumption pattern analysis and stock optimization.',
          badge: 'Smart',
        },
      },
      benefits: {
        badge: 'Benefits',
        title: 'Advantages for end users',
        list: [
          '<strong>24/7 availability</strong> and fast purchases without queues.',
          '<strong>Universal accessibility</strong> with multiple interaction modes (touch, mobile, voice).',
          '<strong>Variety in one point</strong> (food, clothing, hardware, books...).',
          '<strong>Information transparency</strong>: local origin, ingredients, specifications, sizes and ratings.',
        ],
      },
      sustainability: {
        badge: 'Design, sustainability and local economy',
        title: 'Design, sustainability and local economy',
        description: 'Development follows <strong>sustainable industrial design</strong> principles and a neutral, modern aesthetic to integrate uPorta into the urban fabric. As an open platform for local producers and small businesses, it shortens the supply chain, reduces carbon footprint and reinforces proximity consumption.',
      },
    },
    footer: {
      copyright: '© 2024 uPorta. All rights reserved.',
      supportText: 'Our company has received the following support:',
    },
    blog: {
      title: 'uPorta Blog',
      subtitle: 'Insights on automated dispensing, industrial design, and IoT technology',
      readMore: 'Read more',
      backToBlog: 'Back to Blog',
      relatedPosts: 'Related Articles',
      posts: {
        post1: {
          title: 'Privacy and Agility: New Scenarios for Automated Clothing Fitting',
          intro: 'Trying on clothes often involves waiting, limited privacy, and interruptions when changing sizes. An automated fitting room integrated into uPorta allows users to select, receive, try on, and exchange garments within a private booth—without leaving or depending on staff.',
          content: `## Fitting room design\n\n- **Personal booth activated after user identification.** Fully private space that guarantees complete privacy during the fitting process, enabled only with authorized credentials.\n\n- **Fast garment delivery via robotic rails/arms.** Automated system that transports selected garments directly to the booth, eliminating waiting times and contact with staff.\n\n- **Smart mirror with configurable lighting and AR options.** Augmented reality technology that lets users visualize different combinations, adjust lighting to their preferences, and simulate various usage contexts.\n\n- **Automatic sanitization of garments and the booth between sessions.** Automated cleaning protocols that ensure maximum hygiene without compromising service speed.\n\n## Experience and impacts\n\n- **Autonomy and confidence to decide without social pressure.** Removal of the human element from the decision process, allowing the user to take the time they need without feeling observed or pressured.\n\n- **Fast try-on cycles when changing size or model with a single touch.** Intuitive interface that lets users request variations instantly, reducing the overall time of the shopping experience.\n\n- **Instant purchase in the booth (pay and walk out wearing the garment).** Complete transaction within the private space, allowing users to finalize the purchase and leave directly wearing the garment.\n\n- **New habits: micro-fitting rooms in urban locations.** Redistribution of retail toward strategic points that transform the clothing shopping experience in urban environments.`,
          date: 'January 5, 2025',
          slug: 'privacy-agility-new-scenarios-automated-clothing-fitting'
        },
        post2: {
          title: 'Design as a Bridge: Instant Access to Diverse Consumer Goods',
          intro: 'Thanks to advances in industrial design and automation, it is possible to integrate multiple categories into a single system. uPorta exemplifies how design acts as a bridge, offering instant access to diverse goods at a single point.',
          content: `## Versatility and modularity\n\n- **Differentiated thermal control by module (cold / hot / ambient / frozen).** Each compartment maintains optimal conditions for different product types, from chilled beverages to hot meals.\n\n- **Adjustable trays and lifts for different sizes and weights.** A modular system that automatically adapts to products of varying dimensions, optimizing space and ensuring safe dispensing.\n\n- **Interchangeable components to reconfigure according to demand.** Full flexibility to adapt internal configuration based on seasonal consumption patterns or inventory changes.\n\n- **Consistent ergonomics across the entire experience.** A unified interface that preserves the same ease of use regardless of the product type selected.\n\n## Category integration\n\n- **Unified inventory and analytics for bundles and cross-selling.** An intelligent system that suggests add-ons and offers based on user purchase behavior and preferences.\n\n- **Seamless interaction flow: details → quantity → payment → delivery.** A standardized process that simplifies the experience whether the user buys a snack, a drink, or a personal care product.\n\n- **Transparency: ingredients/allergens, specifications, sizes/materials.** Detailed information available instantly to support informed decisions and ensure consumer safety.\n\n- **Specialized validations (age, biometrics) where applicable.** Automatic verification systems for restricted products that maintain regulatory compliance without disrupting the user flow.\n\n## Efficiency and sustainability\n\n- **Lower footprint and operating costs by consolidating machines/spaces.** Urban space is optimized through multi-category solutions that reduce the proliferation of single-purpose devices.\n\n- **Simpler, more flexible local supply chain.** Logistics are simplified to enable faster restocking and reduce downtime.\n\n- **Support for nearby producers and reduced waste from single-unit purchases.** Promotion of the local economy and waste reduction through precise dispensing of exact quantities.`,
          date: 'January 10, 2025',
          slug: 'design-as-bridge-instant-access-diverse-consumer-goods'
        },
        post3: {
          title: 'Designing for Everyday Friction: Adapting Dispensers to the Urban Rhythm',
          intro: 'Urban life includes small frictions: queues, limited hours, confusing interfaces, or out-of-service machines. Designing for everyday friction means identifying and minimizing them through automation and user-centered design.',
          content: `## Typical challenges and frictions\n\n- **Limited hours and peak-hour congestion.** Users are forced to adapt their routines to specific schedules, creating predictable bottlenecks.\n\n- **Availability: avoiding "out of stock" with proactive restocking.** The frustration of finding empty machines disrupts the natural flow of the urban experience.\n\n- **Physical and cognitive accessibility for all people.** Interfaces must be intuitive and accessible to users with different abilities and levels of tech familiarity.\n\n- **Unnecessary interactions in simple processes.** Every extra step in the purchase process increases friction and reduces user satisfaction.\n\n## uPorta design strategies\n\n- **24/7 operation and contactless payments (NFC / QR / digital wallets).** We remove time constraints and reduce transaction time using modern, secure payment methods.\n\n- **Cloud-connected smart inventory for timely restocking.** Predictive systems that anticipate demand and schedule replenishments before products run out.\n\n- **Intuitive interface (HCI): fewer steps, clear iconography, multilingual.** User-centered design that minimizes the learning curve and speeds up transactions.\n\n- **Self-diagnostics and preventive maintenance to minimize service outages.** Continuous monitoring of component status to prevent failures and maintain high availability.\n\n- **Universal accessibility: heights, audio, contrast, Braille, and voice control.** Inclusive design that ensures all users can interact with the system autonomously.\n\n## Expected impact\n\nA smooth, reliable experience aligned with the urban pace, with fewer waits and greater user autonomy. Technology becomes invisible, allowing people to focus on their goals without unnecessary interruptions.`,
          date: 'January 15, 2025',
          slug: 'designing-everyday-friction-adapting-dispensers-urban-rhythm'
        }
      }
    },
    search: {
      title: 'Search results',
      results: 'results for',
      noResults: 'No results found',
      noResultsDescription: 'Try different or more general terms.',
      pageContent: 'Page content',
      blogContent: 'Blog articles',
      back: 'Back',
      page: 'Page',
      blog: 'Blog',
    },
  },
};