export interface Gift {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  shopLink: string;
  category: string;
}

// En desarrollo, usamos el proxy de Vite (/amazon-images)
// En producción, usar placeholders por ahora (Amazon bloquea CORS)
const getImageUrl = (_path: string) => {
  if (import.meta.env.DEV) {
    return `/amazon-images${_path}`;
  }
  // Placeholders de placeholder.com con colores y texto
  return `https://via.placeholder.com/400x600/667eea/ffffff?text=${encodeURIComponent('Regalo')}`;
};

export const gifts: Gift[] = [
  // Libros
  {
    id: 1,
    title: "Utopía para realistas",
    description: "Rutger Bregman - Economía social, ligero y estimulante",
    imageUrl: getImageUrl('/images/I/71hZW8RJAjL._SY522_.jpg'),
    shopLink: "https://www.amazon.es/Utop%C3%ADa-para-realistas-Rutger-Bregman/dp/842045236X",
    category: "📚 Libros"
  },
  {
    id: 2,
    title: "Cómo mueren las democracias",
    description: "Levitsky & Ziblatt - Política actual",
    imageUrl: getImageUrl('/images/I/71KE0y5HPNL._SY522_.jpg'),
    shopLink: "https://www.amazon.es/C%C3%B3mo-mueren-las-democracias-Levitsky/dp/8434431203",
    category: "📚 Libros"
  },
  {
    id: 3,
    title: "El infinito en un junco",
    description: "Irene Vallejo - Divulgación histórica y literaria",
    imageUrl: getImageUrl('/images/I/81lSSlcbQYL._SY522_.jpg'),
    shopLink: "https://www.amazon.es/infinito-en-junco-Irene-Vallejo/dp/8417860630",
    category: "📚 Libros"
  },
  {
    id: 4,
    title: "Pensar rápido, pensar despacio",
    description: "Kahneman - Psicología económica, muy accesible",
    imageUrl: getImageUrl('/images/I/81eUMB5Q8jL._SY522_.jpg'),
    shopLink: "https://www.amazon.es/Pensar-r%C3%A1pido-pensar-despacio-Kahneman/dp/8499926479",
    category: "📚 Libros"
  },
  
  // Ropa - Pantalones
  {
    id: 5,
    title: "Pantalones cargo negros",
    description: "Estilo casual, cómodos y prácticos",
    imageUrl: getImageUrl('/images/I/71HQ4XvHJuL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=pantalones+cargo+hombre+negro",
    category: "👕 Ropa"
  },
  {
    id: 6,
    title: "Pantalones cargo verde militar",
    description: "Versátiles y combinables",
    imageUrl: getImageUrl('/images/I/61hW7pYuLlL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=pantalones+cargo+hombre+verde+militar",
    category: "👕 Ropa"
  },
  
  // Ropa - Camisas
  {
    id: 7,
    title: "Camisa de cuadros leñador",
    description: "Rojo y negro, estilo clásico",
    imageUrl: getImageUrl('/images/I/81VQ7xEYxBL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=camisa+cuadros+hombre+leñador+rojo",
    category: "👕 Ropa"
  },
  {
    id: 8,
    title: "Camisa de cuadros azul/blanco",
    description: "Perfecta para el día a día",
    imageUrl: getImageUrl('/images/I/81x4jXuXCIL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=camisa+cuadros+hombre+azul",
    category: "👕 Ropa"
  },
  
  // Ropa - Camisetas
  {
    id: 9,
    title: "Pack camisetas básicas",
    description: "Blanco, negro, gris - Buena calidad",
    imageUrl: getImageUrl('/images/I/71YvJKLQ9SL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=pack+camisetas+basicas+hombre",
    category: "👕 Ropa"
  },
  {
    id: 10,
    title: "Sudadera con capucha",
    description: "Básica y cómoda",
    imageUrl: getImageUrl('/images/I/61wJTv8LHML._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=sudadera+capucha+hombre+basica",
    category: "👕 Ropa"
  },
  
  // Calzoncillos
  {
    id: 11,
    title: "Pack bóxers de algodón",
    description: "Calvin Klein, Hugo Boss o similar - Cómodos",
    imageUrl: getImageUrl('/images/I/71LzKQxQW9L._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=boxer+hombre+calvin+klein",
    category: "👕 Ropa"
  },
  
  // Juegos de mesa
  {
    id: 12,
    title: "HeroQuest",
    description: "Dungeon crawler clásico",
    imageUrl: getImageUrl('/images/I/81xqE3RJFVL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=heroquest",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 13,
    title: "Massive Darkness 2",
    description: "Dungeon crawler moderno",
    imageUrl: getImageUrl('/images/I/81Qjg3NzQ0L._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=massive+darkness+2",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 19,
    title: "Descent: Leyendas de las Tinieblas",
    description: "Dungeon crawler cooperativo con app, muy accesible",
    imageUrl: getImageUrl('/images/I/91ZXqGKqRyL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=descent+leyendas+tinieblas",
    category: "🎲 Juegos de mesa"
  },
  {
    id: 20,
    title: "Mice and Mystics",
    description: "Dungeon crawler narrativo, ideal para principiantes",
    imageUrl: getImageUrl('/images/I/91xqzJL8ooL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=mice+and+mystics",
    category: "🎲 Juegos de mesa"
  },
  
  // Regalos prácticos
  {
    id: 14,
    title: "Taza térmica de calidad",
    description: "Mantiene la temperatura, ideal para café/té",
    imageUrl: getImageUrl('/images/I/61Y8HXKQH4L._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=taza+termica",
    category: "🎁 Práctico"
  },
  {
    id: 15,
    title: "Pack de calcetines buenos",
    description: "Cómodos y duraderos",
    imageUrl: getImageUrl('/images/I/71xOTzKqk7L._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=pack+calcetines+hombre+calidad",
    category: "🎁 Práctico"
  },
  {
    id: 16,
    title: "Bufanda o gorro neutro",
    description: "Para el invierno, colores neutros",
    imageUrl: getImageUrl('/images/I/71Y1u5QMZML._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=bufanda+hombre",
    category: "🎁 Práctico"
  },
  {
    id: 17,
    title: "Tarjeta regalo Amazon",
    description: "Para elegir lo que más me guste",
    imageUrl: getImageUrl('/images/I/71FhQvz0EeL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/gp/product/B01N5OFOUC",
    category: "🎁 Práctico"
  },
  {
    id: 18,
    title: "Set de pinceles de calidad",
    description: "Para miniaturas y proyectos creativos",
    imageUrl: getImageUrl('/images/I/71xELhNO4WL._AC_SX569_.jpg'),
    shopLink: "https://www.amazon.es/s?k=pinceles+miniaturas",
    category: "🎨 Hobbies"
  }
];
