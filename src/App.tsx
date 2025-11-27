import './App.css'
import GiftCard from './components/GiftCard'
import { gifts } from './data/gifts'

function App() {
  // Agrupar regalos por categoría
  const categories = Array.from(new Set(gifts.map(gift => gift.category)));

  return (
    <div className="app">
      <header className="header">
        <h1>🎄 Carta de Reyes Magos 2026 ⭐</h1>
        <p className="subtitle">Ideas y regalos que me gustarían</p>
      </header>

      <main className="main-content">
        {categories.map(category => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="gifts-grid">
              {gifts
                .filter(gift => gift.category === category)
                .map(gift => (
                  <GiftCard
                    key={gift.id}
                    title={gift.title}
                    description={gift.description}
                    imageUrl={gift.imageUrl}
                    shopLink={gift.shopLink}
                    category={gift.category}
                  />
                ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>💝 Hecho con cariño para facilitar la elección de regalos</p>
      </footer>
    </div>
  )
}

export default App
