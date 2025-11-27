interface GiftCardProps {
  title: string;
  description: string;
  imageUrl: string;
  shopLink: string;
  category: string;
}

export default function GiftCard({ title, description, imageUrl, shopLink, category }: GiftCardProps) {
  return (
    <div className="gift-card">
      <div className="gift-image-container">
        <img src={imageUrl} alt={title} className="gift-image" />
      </div>
      <div className="gift-content">
        <span className="gift-category">{category}</span>
        <h3 className="gift-title">{title}</h3>
        <p className="gift-description">{description}</p>
        <a href={shopLink} target="_blank" rel="noopener noreferrer" className="gift-link">
          Ver en tienda 🔗
        </a>
      </div>
    </div>
  );
}
