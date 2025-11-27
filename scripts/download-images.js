// Script para descargar imágenes reales de productos desde Amazon y Unsplash
import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { URL } from 'url';

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
  'libro2.jpg': 'https://m.media-amazon.com/images/I/71LFnMS4-lL._SL1500_.jpg', // Cómo mueren las democracias
  'libro3.jpg': 'https://m.media-amazon.com/images/I/91h0DOJfyVL._SL1500_.jpg', // El infinito en un junco
  'libro4.jpg': 'https://m.media-amazon.com/images/I/61DEzCAHBGL._SL1500_.jpg', // Pensar rápido, pensar despacio
  
  // Ropa - Imágenes reales de Amazon
  'pantalones-cargo-negro.jpg': 'https://m.media-amazon.com/images/I/719NTaUKAoL._AC_SX466_.jpg',
  'pantalones-cargo-verde.jpg': 'https://m.media-amazon.com/images/I/51U3VrcVY6L._AC_SX679_.jpg',
  'camisa-cuadros-rojo.jpg': 'https://m.media-amazon.com/images/I/81JKiLBGOXL._AC_SX679_.jpg',
  'camisa-cuadros-azul.jpg': 'https://m.media-amazon.com/images/I/81xZy+E4NpL._AC_SX569_.jpg',
  'camisetas.jpg': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', // No proporcionada
  'sudadera.jpg': 'https://m.media-amazon.com/images/I/71+4qWlN8VL._AC_SX569_.jpg',
  'boxers.jpg': 'https://m.media-amazon.com/images/I/61BwM7rIdvL._AC_SX466_.jpg',
  
  // Juegos de mesa - Imágenes reales de Amazon
  'heroquest.jpg': 'https://m.media-amazon.com/images/I/71DFESdCQXL._AC_SL1000_.jpg',
  'massive-darkness.jpg': 'https://m.media-amazon.com/images/I/81gxPL2emtL._AC_SL1500_.jpg',
  'descent.jpg': 'https://m.media-amazon.com/images/I/711u-CmusvS._AC_SL1024_.jpg',
  'mice-mystics.jpg': 'https://m.media-amazon.com/images/I/61GlB2YR3AL._AC_SX679_.jpg',
  
  // Prácticos - Imágenes reales de Amazon
  'taza-termica.jpg': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80', // No proporcionada
  'calcetines.jpg': 'https://m.media-amazon.com/images/I/813MqRUbjXL._AC_SX466_.jpg',
  'bufanda.jpg': 'https://m.media-amazon.com/images/I/81jB6wfGU6L._AC_SX466_.jpg',
  'tarjeta-regalo.jpg': 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80', // No proporcionada
  'pinceles.jpg': 'https://m.media-amazon.com/images/I/61FadwecflL._AC_SL1500_.jpg',
};

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filePath);
    
    // Determinar si usar http o https
    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;
    
    protocol.get(url, (response) => {
      // Seguir redirecciones
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(filePath, () => {});
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
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
