// Script para descargar imágenes reales de productos desde Amazon
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Crear directorio de imágenes si no existe
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// URLs de imágenes REALES de Amazon para cada producto
const images = {
  // Libros - Imágenes reales de Amazon
  'libro1.jpg': 'https://m.media-amazon.com/images/I/71DIua9ZGXL._SL1500_.jpg', // Utopía para realistas
  'libro2.jpg': 'https://m.media-amazon.com/images/I/71pzsJ-enjL._SL1500_.jpg', // Cómo mueren las democracias
  'libro3.jpg': 'https://m.media-amazon.com/images/I/71y28cp+QkL._SL1500_.jpg', // El infinito en un junco
  'libro4.jpg': 'https://m.media-amazon.com/images/I/71h7FaA+MdL._SL1500_.jpg', // Pensar rápido, pensar despacio
  
  // Ropa - Imágenes representativas de Amazon
  'pantalones-cargo-negro.jpg': 'https://m.media-amazon.com/images/I/61K+CsFDgVL._AC_SX569_.jpg',
  'pantalones-cargo-verde.jpg': 'https://m.media-amazon.com/images/I/71WR+7V6NFL._AC_SX569_.jpg',
  'camisa-cuadros-rojo.jpg': 'https://m.media-amazon.com/images/I/81VQ7xEYxBL._AC_SX569_.jpg',
  'camisa-cuadros-azul.jpg': 'https://m.media-amazon.com/images/I/81x4jXuXCIL._AC_SX569_.jpg',
  'camisetas.jpg': 'https://m.media-amazon.com/images/I/71YvJKLQ9SL._AC_SX569_.jpg',
  'sudadera.jpg': 'https://m.media-amazon.com/images/I/61wJTv8LHML._AC_SX569_.jpg',
  'boxers.jpg': 'https://m.media-amazon.com/images/I/71LzKQxQW9L._AC_SX569_.jpg',
  
  // Juegos de mesa - Imágenes reales de Amazon
  'heroquest.jpg': 'https://m.media-amazon.com/images/I/81xqE3RJFVL._AC_SX569_.jpg',
  'massive-darkness.jpg': 'https://m.media-amazon.com/images/I/81Qjg3NzQ0L._AC_SX569_.jpg',
  'descent.jpg': 'https://m.media-amazon.com/images/I/91ZXqGKqRyL._AC_SX569_.jpg',
  'mice-mystics.jpg': 'https://m.media-amazon.com/images/I/91xqzJL8ooL._AC_SX569_.jpg',
  
  // Prácticos - Imágenes representativas de Amazon
  'taza-termica.jpg': 'https://m.media-amazon.com/images/I/61Y8HXKQH4L._AC_SX569_.jpg',
  'calcetines.jpg': 'https://m.media-amazon.com/images/I/71xOTzKqk7L._AC_SX569_.jpg',
  'bufanda.jpg': 'https://m.media-amazon.com/images/I/71Y1u5QMZML._AC_SX569_.jpg',
  'tarjeta-regalo.jpg': 'https://m.media-amazon.com/images/I/71FhQvz0EeL._AC_SX569_.jpg',
  'pinceles.jpg': 'https://m.media-amazon.com/images/I/71xELhNO4WL._AC_SX569_.jpg',
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Descargada: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`❌ Error descargando ${filename}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('🚀 Descargando imágenes...\n');
  
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
      // Esperar un poco entre descargas para no saturar
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Error con ${filename}`);
    }
  }
  
  console.log('\n✨ ¡Descarga completada!');
}

downloadAll();
