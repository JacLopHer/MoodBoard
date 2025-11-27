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
  // Libros - Imágenes reales de las portadas verificadas
  'libro1.jpg': 'https://m.media-amazon.com/images/I/71DIua9ZGXL._SL1500_.jpg', // Utopía para realistas - REAL
  'libro2.jpg': 'https://m.media-amazon.com/images/I/71LFnMS4-lL._SY342_.jpg', // Cómo mueren las democracias - REAL
  'libro3.jpg': 'https://m.media-amazon.com/images/I/41H85-aKeTL._SY445_SX342_ML2_.jpg', // El infinito en un junco - REAL
  'libro4.jpg': 'https://m.media-amazon.com/images/I/61DEzCAHBGL._SY342_.jpg', // Pensar rápido, pensar despacio - REAL
  
  // Ropa - Imágenes representativas genéricas (búsquedas, no productos específicos)
  'pantalones-cargo-negro.jpg': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
  'pantalones-cargo-verde.jpg': 'https://images.unsplash.com/photo-1624378440070-7b44bc9e84c7?w=600&q=80',
  'camisa-cuadros-rojo.jpg': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80',
  'camisa-cuadros-azul.jpg': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
  'camisetas.jpg': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
  'sudadera.jpg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80',
  'boxers.jpg': 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80',
  
  // Juegos de mesa - Imágenes genéricas de juegos de mesa (búsquedas)
  'heroquest.jpg': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80',
  'massive-darkness.jpg': 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&q=80',
  'descent.jpg': 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=600&q=80',
  'mice-mystics.jpg': 'https://images.unsplash.com/photo-1611891487583-91db657c763f?w=600&q=80',
  
  // Prácticos - Imágenes genéricas representativas
  'taza-termica.jpg': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
  'calcetines.jpg': 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=600&q=80',
  'bufanda.jpg': 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80',
  'tarjeta-regalo.jpg': 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
  'pinceles.jpg': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
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
