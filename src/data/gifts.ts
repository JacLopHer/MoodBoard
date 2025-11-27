export interface Gift {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  shopLink: string;
  category: string;
}

// Ahora usamos imágenes locales descargadas
const getImageUrl = (localPath: string) => {
  return `/images/${localPath}`;
};

export const gifts: Gift[] = [
  // Libros
  {
    id: 1,
    title: "Utopía para realistas",
    description: "Rutger Bregman - Economía social, ligero y estimulante",
    imageUrl: getImageUrl('libro1.jpg'),
    shopLink: "https://www.amazon.es/Utop%C3%ADa-para-realistas-universal-Salamandra/dp/849838799X",
    category: "📚 Libros"
  },
  {
    id: 2,
    title: "Cómo mueren las democracias",
    description: "Levitsky & Ziblatt - Política actual",
    imageUrl: getImageUrl('libro2.jpg'),
    shopLink: "https://www.amazon.es/C%C3%B3mo-mueren-democracias-Ariel-Spanish/dp/8434427702",
    category: "📚 Libros"
  },
  {
    id: 3,
    title: "El infinito en un junco",
    description: "Irene Vallejo - Divulgación histórica y literaria",
    imageUrl: getImageUrl('libro3.jpg'),
    shopLink: "https://www.amazon.es/El-infinito-junco-invenci%C3%B3n-antiguo/dp/8466358293",
    category: "📚 Libros"
  },
  {
    id: 4,
    title: "Pensar rápido, pensar despacio",
    description: "Kahneman - Psicología económica, muy accesible",
    imageUrl: getImageUrl('libro4.jpg'),
    shopLink: "https://www.amazon.es/Pensar-r%C3%A1pido-pensar-despacio-Psicolog%C3%ADa/dp/8490322503",
    category: "📚 Libros"
  },
  
  // Ropa - Pantalones
  {
    id: 5,
    title: "Pantalones cargo negros",
    description: "Estilo casual, cómodos y prácticos",
    imageUrl: getImageUrl('pantalones-cargo-negro.jpg'),
    shopLink: "https://www.amazon.es/s?k=pantalones+cargo+hombre+negro",
    category: "👕 Ropa"
  },
  {
    id: 6,
    title: "Pantalones cargo verde militar",
    description: "Versátiles y combinables",
    imageUrl: getImageUrl('pantalones-cargo-verde.jpg'),
    shopLink: "https://www.amazon.es/s?k=pantalones+cargo+hombre+verde+militar",
    category: "👕 Ropa"
  },
  
  // Ropa - Camisas
  {
    id: 7,
    title: "Camisa de cuadros leñador",
    description: "Rojo y negro, estilo clásico",
    imageUrl: getImageUrl('camisa-cuadros-rojo.jpg'),
    shopLink: "https://www.amazon.es/s?k=camisa+cuadros+hombre+leñador+rojo",
    category: "👕 Ropa"
  },
  {
    id: 8,
    title: "Camisa de cuadros azul/blanco",
    description: "Perfecta para el día a día",
    imageUrl: getImageUrl('camisa-cuadros-azul.jpg'),
    shopLink: "https://www.amazon.es/s?k=camisa+cuadros+hombre+azul",
    category: "👕 Ropa"
  },
  
  // Ropa - Camisetas
  {
    id: 9,
    title: "Pack camisetas básicas",
    description: "Blanco, negro, gris - Buena calidad",
    imageUrl: getImageUrl('camisetas.jpg'),
    shopLink: "https://www.amazon.es/s?k=pack+camisetas+basicas+hombre",
    category: "👕 Ropa"
  },
  {
    id: 10,
    title: "Sudadera con capucha",
    description: "Básica y cómoda",
    imageUrl: getImageUrl('sudadera.jpg'),
    shopLink: "https://www.amazon.es/s?k=sudadera+capucha+hombre+basica",
    category: "👕 Ropa"
  },
  
  // Calzoncillos
  {
    id: 11,
    title: "Pack bóxers de algodón",
    description: "Calvin Klein, Hugo Boss o similar - Cómodos",
    imageUrl: getImageUrl('boxers.jpg'),
    shopLink: "https://www.amazon.es/s?k=boxer+hombre+calvin+klein",
    category: "👕 Ropa"
  },
  
  // Juegos de mesa
  {
    id: 12,
    title: "HeroQuest",
    description: "Dungeon crawler clásico",
    imageUrl: getImageUrl('heroquest.jpg'),
    shopLink: "https://www.amazon.es/s?k=heroquest",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 13,
    title: "Massive Darkness 2",
    description: "Dungeon crawler moderno",
    imageUrl: getImageUrl('massive-darkness.jpg'),
    shopLink: "https://www.amazon.es/s?k=massive+darkness+2",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 19,
    title: "Descent: Leyendas de las Tinieblas",
    description: "Dungeon crawler cooperativo con app, muy accesible",
    imageUrl: getImageUrl('descent.jpg'),
    shopLink: "https://www.amazon.es/s?k=descent+leyendas+tinieblas",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 20,
    title: "Mice and Mystics",
    description: "Dungeon crawler narrativo, ideal para principiantes",
    imageUrl: getImageUrl('mice-mystics.jpg'),
    shopLink: "https://www.amazon.es/s?k=mice+and+mystics",
    category: "🎲 Juegos de mesa"
  },
  
  // Regalos prácticos
  {
    id: 14,
    title: "Taza térmica de calidad",
    description: "Mantiene la temperatura, ideal para café/té",
    imageUrl: getImageUrl('taza-termica.jpg'),
    shopLink: "https://www.amazon.es/s?k=taza+termica",
    category: "🎁 Práctico"
  },
  {
    id: 15,
    title: "Pack de calcetines buenos",
    description: "Cómodos y duraderos",
    imageUrl: getImageUrl('calcetines.jpg'),
    shopLink: "https://www.amazon.es/s?k=pack+calcetines+hombre+calidad",
    category: "🎁 Práctico"
  },
  {
    id: 16,
    title: "Bufanda o gorro neutro",
    description: "Para el invierno, colores neutros",
    imageUrl: getImageUrl('bufanda.jpg'),
    shopLink: "https://www.amazon.es/s?k=bufanda+hombre",
    category: "🎁 Práctico"
  },
  {
    id: 17,
    title: "Tarjeta regalo Amazon",
    description: "Para elegir lo que más me guste",
    imageUrl: getImageUrl('tarjeta-regalo.jpg'),
    shopLink: "https://www.amazon.es/gp/product/B01N5OFOUC",
    category: "🎁 Práctico"
  },
  {
    id: 18,
    title: "Set de pinceles de calidad",
    description: "Para miniaturas y proyectos creativos",
    imageUrl: getImageUrl('pinceles.jpg'),
    shopLink: "https://www.amazon.es/s?k=pinceles+miniaturas",
    category: "🎨 Hobbies"
  }
];
