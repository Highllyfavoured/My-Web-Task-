import "./ProductCard.css";

function ProductCard ({ name, price, image, instock }) {
    return (
        <div className={`product ${instock ? 'instock' : ''}`}>
            <img src={image} alt={`${name} image`} className="image" />
            <h2>{name}</h2>
            <p>{price}</p>
            {instock && <div className="inStock">In Stock ✓</div>}
        </div>
    );
}

export default ProductCard;