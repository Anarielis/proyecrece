export interface Recipe {
  id: number;
  title: string;
  category: 'galletas' | 'brownies';
  subcategory?: string;
  image: string;
  description: string;
  flavor: string;
  occasion: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: string;
  ingredients: string[];
  steps: string[];
  tips: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Galletas con Chispas de Chocolate Clásicas",
    category: "galletas",
    subcategory: "Chocolate",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llcyUyMGJha2luZ3xlbnwxfHx8fDE3Nzk0MDA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Las clásicas galletas de chispas de chocolate que todos amamos",
    flavor: "Dulce, chocolate intenso",
    occasion: "Perfectas para meriendas y compartir con la familia",
    prepTime: "15 minutos",
    cookTime: "12 minutos",
    totalTime: "27 minutos",
    servings: "24 galletas",
    ingredients: [
      "2 1/4 tazas de harina de trigo",
      "1 cucharadita de bicarbonato de sodio",
      "1 cucharadita de sal",
      "1 taza (2 barras) de mantequilla a temperatura ambiente",
      "3/4 taza de azúcar granulada",
      "3/4 taza de azúcar morena compacta",
      "2 huevos grandes",
      "2 cucharaditas de extracto de vainilla",
      "2 tazas de chispas de chocolate semi-dulce"
    ],
    steps: [
      "Precalienta el horno a 190°C (375°F).",
      "En un tazón pequeño, mezcla la harina, el bicarbonato y la sal.",
      "En un tazón grande, bate la mantequilla con ambos azúcares hasta obtener una mezcla cremosa.",
      "Agrega los huevos uno a uno, batiendo bien después de cada adición. Añade la vainilla.",
      "Incorpora gradualmente la mezcla de harina a la mezcla de mantequilla.",
      "Añade las chispas de chocolate y mezcla bien.",
      "Coloca cucharadas redondeadas de masa en bandejas para hornear sin engrasar.",
      "Hornea durante 9-11 minutos o hasta que estén doradas.",
      "Deja enfriar en la bandeja durante 2 minutos antes de transferir a una rejilla."
    ],
    tips: [
      "Para galletas más suaves, no las hornees de más; retíralas cuando los bordes estén dorados pero el centro aún se vea ligeramente crudo.",
      "Refrigera la masa durante 30 minutos antes de hornear para galletas más gruesas.",
      "Usa una mezcla de chispas de chocolate con leche y semi-dulce para un sabor más rico."
    ]
  },
  {
    id: 2,
    title: "Galletas de Avena con Pasas",
    category: "galletas",
    subcategory: "Avena",
    image: "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwY29va2llc3xlbnwxfHx8fDE3Nzk0MDA5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Galletas caseras de avena con pasas, suaves y deliciosas",
    flavor: "Dulce con toque de canela",
    occasion: "Ideales para el desayuno o una merienda saludable",
    prepTime: "15 minutos",
    cookTime: "12 minutos",
    totalTime: "27 minutos",
    servings: "20 galletas",
    ingredients: [
      "1 taza de mantequilla a temperatura ambiente",
      "1 taza de azúcar morena compacta",
      "1/2 taza de azúcar granulada",
      "2 huevos",
      "1 cucharadita de extracto de vainilla",
      "1 1/2 tazas de harina de trigo",
      "1 cucharadita de bicarbonato de sodio",
      "1 cucharadita de canela molida",
      "1/2 cucharadita de sal",
      "3 tazas de avena en hojuelas",
      "1 taza de pasas"
    ],
    steps: [
      "Precalienta el horno a 180°C (350°F).",
      "Bate la mantequilla con ambos azúcares hasta que esté cremosa.",
      "Agrega los huevos uno a uno, luego la vainilla.",
      "En otro tazón, mezcla la harina, bicarbonato, canela y sal.",
      "Incorpora los ingredientes secos a la mezcla de mantequilla.",
      "Añade la avena y las pasas, mezclando bien.",
      "Coloca cucharadas de masa en bandejas engrasadas.",
      "Hornea por 10-12 minutos hasta que estén doradas.",
      "Deja enfriar en la bandeja 5 minutos antes de pasar a una rejilla."
    ],
    tips: [
      "Remoja las pasas en agua tibia durante 10 minutos para que queden más jugosas.",
      "Puedes sustituir las pasas por arándanos secos o chispas de chocolate.",
      "Agrega nueces picadas para mayor textura y sabor."
    ]
  },
  {
    id: 3,
    title: "Galletas de Azúcar Decoradas",
    category: "galletas",
    subcategory: "Azúcar",
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGNvb2tpZXMlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3Nzk0MDA5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Galletas de azúcar perfectas para decorar con glaseado colorido",
    flavor: "Dulce, mantequilla y vainilla",
    occasion: "Perfectas para fiestas, cumpleaños y celebraciones",
    prepTime: "20 minutos",
    cookTime: "10 minutos",
    totalTime: "2 horas (incluye refrigeración)",
    servings: "30 galletas",
    ingredients: [
      "3 tazas de harina de trigo",
      "1 1/2 cucharaditas de polvo de hornear",
      "1/2 cucharadita de sal",
      "1 taza de mantequilla a temperatura ambiente",
      "1 1/2 tazas de azúcar",
      "2 huevos",
      "2 cucharaditas de extracto de vainilla",
      "Glaseado real (azúcar glas, claras de huevo, colorantes)"
    ],
    steps: [
      "Mezcla la harina, polvo de hornear y sal en un tazón.",
      "Bate la mantequilla y el azúcar hasta que esté esponjosa.",
      "Agrega los huevos y la vainilla, batiendo bien.",
      "Incorpora gradualmente los ingredientes secos.",
      "Divide la masa en dos, envuelve en plástico y refrigera 1 hora.",
      "Precalienta el horno a 180°C (350°F).",
      "Extiende la masa sobre una superficie enharinada a 6mm de grosor.",
      "Corta con moldes de galletas y coloca en bandejas forradas.",
      "Hornea 8-10 minutos hasta que los bordes estén ligeramente dorados.",
      "Deja enfriar completamente antes de decorar con glaseado."
    ],
    tips: [
      "No hornees demasiado; las galletas deben quedar pálidas para decorar mejor.",
      "Usa rodillos con guías para mantener el grosor uniforme.",
      "El glaseado real se endurece perfectamente, ideal para apilar las galletas."
    ]
  },
  {
    id: 4,
    title: "Brownies de Chocolate Clásicos",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBicm93bmllcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzc5NDAwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Brownies fudgy y decadentes con chocolate intenso",
    flavor: "Chocolate profundo y rico",
    occasion: "Perfectos para cualquier ocasión especial",
    prepTime: "15 minutos",
    cookTime: "25 minutos",
    totalTime: "40 minutos",
    servings: "16 brownies",
    ingredients: [
      "1/2 taza de mantequilla",
      "1 taza de azúcar",
      "2 huevos grandes",
      "1 cucharadita de extracto de vainilla",
      "1/3 taza de cacao en polvo sin azúcar",
      "1/2 taza de harina de trigo",
      "1/4 cucharadita de sal",
      "1/4 cucharadita de polvo de hornear",
      "1/2 taza de chispas de chocolate (opcional)"
    ],
    steps: [
      "Precalienta el horno a 180°C (350°F) y engrasa un molde cuadrado de 20cm.",
      "Derrite la mantequilla en una cacerola grande.",
      "Retira del fuego y agrega el azúcar, huevos y vainilla.",
      "Bate hasta integrar bien.",
      "En un tazón, mezcla el cacao, harina, sal y polvo de hornear.",
      "Incorpora los ingredientes secos a la mezcla húmeda.",
      "Añade las chispas de chocolate si lo deseas.",
      "Vierte en el molde preparado y extiende uniformemente.",
      "Hornea 20-25 minutos. Un palillo debe salir con migas húmedas.",
      "Deja enfriar completamente antes de cortar."
    ],
    tips: [
      "No hornees de más si quieres brownies fudgy; el centro debe verse ligeramente húmedo.",
      "Para brownies más cakey, hornea 5 minutos adicionales.",
      "Añade nueces picadas para más textura y sabor."
    ]
  },
  {
    id: 5,
    title: "Brownies con Queso Crema",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaG9jb2xhdGUlMjBicm93bmllcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzc5NDAwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Brownies marmoleados con una capa cremosa de queso",
    flavor: "Chocolate con toque cremoso y ligeramente ácido",
    occasion: "Ideales para impresionar en reuniones",
    prepTime: "20 minutos",
    cookTime: "30 minutos",
    totalTime: "50 minutos",
    servings: "16 brownies",
    ingredients: [
      "Base de brownie (ver receta de brownies clásicos)",
      "225g de queso crema a temperatura ambiente",
      "1/4 taza de azúcar",
      "1 huevo",
      "1/2 cucharadita de extracto de vainilla"
    ],
    steps: [
      "Prepara la masa de brownies según la receta clásica.",
      "En otro tazón, bate el queso crema con el azúcar hasta que esté suave.",
      "Agrega el huevo y la vainilla al queso crema, mezclando bien.",
      "Vierte 2/3 de la masa de brownie en el molde preparado.",
      "Vierte la mezcla de queso crema sobre la masa de brownie.",
      "Agrega el resto de la masa de brownie en cucharadas sobre el queso.",
      "Usa un palillo para crear remolinos marmoleados.",
      "Hornea a 180°C durante 30-35 minutos.",
      "Refrigera antes de cortar para obtener cortes limpios."
    ],
    tips: [
      "Asegúrate de que el queso crema esté a temperatura ambiente para evitar grumos.",
      "No mezcles demasiado al marmolear; los remolinos deben ser visibles.",
      "Guarda en el refrigerador por el queso crema; duran hasta 5 días."
    ]
  },
  {
    id: 6,
    title: "Brownies con Nueces",
    category: "brownies",
    image: "https://images.unsplash.com/photo-1515037893149-de7f840978e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjaG9jb2xhdGUlMjBicm93bmllcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzc5NDAwOTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Brownies tradicionales con nueces crujientes",
    flavor: "Chocolate intenso con crunch de nueces",
    occasion: "Para los amantes de las texturas crujientes",
    prepTime: "15 minutos",
    cookTime: "25 minutos",
    totalTime: "40 minutos",
    servings: "16 brownies",
    ingredients: [
      "Base de brownie (ver receta de brownies clásicos)",
      "1 taza de nueces picadas (pecanas o nueces de Castilla)",
      "1/4 cucharadita de sal marina en escamas (para decorar)"
    ],
    steps: [
      "Prepara la masa de brownies según la receta clásica.",
      "Tuesta las nueces en el horno a 180°C durante 5-7 minutos.",
      "Incorpora 3/4 de taza de nueces tostadas a la masa de brownies.",
      "Vierte la masa en el molde preparado.",
      "Espolvorea las nueces restantes sobre la superficie.",
      "Hornea según las indicaciones de la receta base.",
      "Al sacar del horno, espolvorea con sal marina en escamas.",
      "Deja enfriar completamente antes de cortar."
    ],
    tips: [
      "Tostar las nueces intensifica su sabor y las hace más crujientes.",
      "Puedes usar una mezcla de nueces para mayor variedad.",
      "La sal marina en escamas realza el sabor del chocolate."
    ]
  },
  {
    id: 7,
    title: "Galletas de Mantequilla Danesas",
    category: "galletas",
    subcategory: "Mantequilla",
    image: "https://images.unsplash.com/photo-1612845575953-f4b1e3d63160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llcyUyMGJha2luZ3xlbnwxfHx8fDE3Nzk0MDA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Galletas crujientes y delicadas con sabor a mantequilla",
    flavor: "Mantequilla pura, suave y elegante",
    occasion: "Perfectas para el té de la tarde",
    prepTime: "20 minutos",
    cookTime: "12 minutos",
    totalTime: "1 hora 32 minutos (incluye refrigeración)",
    servings: "40 galletas",
    ingredients: [
      "1 taza de mantequilla a temperatura ambiente",
      "2/3 taza de azúcar",
      "1 yema de huevo",
      "1 cucharadita de extracto de vainilla",
      "2 tazas de harina de trigo",
      "1/4 cucharadita de sal",
      "Azúcar perlada para decorar (opcional)"
    ],
    steps: [
      "Bate la mantequilla con el azúcar hasta que esté cremosa y pálida.",
      "Agrega la yema de huevo y la vainilla, mezclando bien.",
      "Incorpora la harina y la sal gradualmente.",
      "Forma la masa en un cilindro, envuelve y refrigera 1 hora.",
      "Precalienta el horno a 180°C (350°F).",
      "Corta la masa en rodajas de 6mm de grosor.",
      "Coloca en bandejas forradas y presiona ligeramente con un tenedor.",
      "Espolvorea con azúcar perlada si lo deseas.",
      "Hornea 10-12 minutos hasta que los bordes estén dorados.",
      "Deja enfriar en la bandeja 5 minutos antes de transferir."
    ],
    tips: [
      "La masa se puede congelar hasta por 3 meses.",
      "Usa mantequilla de buena calidad; el sabor depende de ella.",
      "Estas galletas son perfectas para rellenar con mermelada."
    ]
  },
  {
    id: 8,
    title: "Galletas Doble Chocolate",
    category: "galletas",
    subcategory: "Chocolate",
    image: "https://images.unsplash.com/photo-1506184341422-6cc152ae474b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjaG9jb2xhdGUlMjBjaGlwJTIwY29va2llcyUyMGJha2luZ3xlbnwxfHx8fDE3Nzk0MDA5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Galletas de chocolate con chispas de chocolate blanco",
    flavor: "Chocolate intenso con toque de chocolate blanco",
    occasion: "Para los verdaderos amantes del chocolate",
    prepTime: "15 minutos",
    cookTime: "11 minutos",
    totalTime: "26 minutos",
    servings: "24 galletas",
    ingredients: [
      "1 3/4 tazas de harina de trigo",
      "1/2 taza de cacao en polvo sin azúcar",
      "1 cucharadita de bicarbonato de sodio",
      "1/2 cucharadita de sal",
      "1 taza de mantequilla a temperatura ambiente",
      "1 taza de azúcar morena compacta",
      "1/2 taza de azúcar granulada",
      "2 huevos",
      "2 cucharaditas de extracto de vainilla",
      "1 1/2 tazas de chispas de chocolate blanco"
    ],
    steps: [
      "Precalienta el horno a 180°C (350°F).",
      "Mezcla la harina, cacao, bicarbonato y sal.",
      "Bate la mantequilla con ambos azúcares hasta que esté cremosa.",
      "Agrega los huevos uno a uno, luego la vainilla.",
      "Incorpora los ingredientes secos gradualmente.",
      "Añade las chispas de chocolate blanco.",
      "Forma bolas de masa y colócalas en bandejas forradas.",
      "Hornea 9-11 minutos; el centro debe verse ligeramente húmedo.",
      "Deja enfriar en la bandeja 5 minutos antes de transferir."
    ],
    tips: [
      "Usa cacao de buena calidad para un sabor más intenso.",
      "Puedes combinar chispas de chocolate blanco y oscuro.",
      "Estas galletas quedan mejor cuando están ligeramente húmedas en el centro."
    ]
  }
];
