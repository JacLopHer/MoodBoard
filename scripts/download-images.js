// Script para descargar imágenes de productos y guardarlas localmente
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

// URLs de imágenes genéricas de Unsplash (gratuitas y sin CORS)
const images = {
  // Libros - imágenes genéricas de libros
  'libro1.jpg': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop',
  'libro2.jpg': 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop',
  'libro3.jpg': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop',
  'libro4.jpg': 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop',
  
  // Ropa
  'pantalones-cargo-negro.jpg': 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=600&fit=crop',
  'pantalones-cargo-verde.jpg': 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=600&fit=crop',
  'camisa-cuadros-rojo.jpg': 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop',
  'camisa-cuadros-azul.jpg': 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop',
  'camisetas.jpg': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
  'sudadera.jpg': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=600&fit=crop',
  'boxers.jpg': 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=600&fit=crop',
  
  // Juegos de mesa
  'heroquest.jpg': 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=600&fit=crop',
  'massive-darkness.jpg': 'https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&h=600&fit=crop',
  'descent.jpg': 'https://images.unsplash.com/photo-1611891487137-831d515e4cb9?w=400&h=600&fit=crop',
  'mice-mystics.jpg': 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=400&h=600&fit=crop',
  
  // Prácticos
  'taza-termica.jpg': 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=600&fit=crop',
  'calcetines.jpg': 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=600&fit=crop',
  'bufanda.jpg': 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=600&fit=crop',
  'tarjeta-regalo.jpg': 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=600&fit=crop',
  'pinceles.jpg': 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=600&fit=crop',
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
