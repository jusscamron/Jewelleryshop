import "../styles/ProductCard.css";

export default function ProductCard({ product }) {
  const { name, price, image, isNew, tone, href } = product;

  return (
    <article className="product">
      <a href={href} className="product__link">
        <div className="product__media">
          <div
            className={`product__img product__img--${tone}`}
            style={image ? { backgroundImage: `url(${image})` } : undefined}
            role="img"
            aria-label={name}
          />
          {/* {isNew && <span className="product__badge">Nouveau</span>}  */}
        </div>
        <h3 className="product__name">{name}</h3>
        <p className="product__price">${price.toFixed(2).replace(".", ",")}</p>
      </a>
    </article>
  );
}
