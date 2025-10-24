function Menu({ items, addToCart}) {
    return (
        <div className="menu">
            <h2>Menu</h2>
            {items.map(item => (
                <div key={item.id} className="menuItem">
                    <div>
                        <h3>{item.name}</h3>
                        <p>₦{item.price.toLocaleString()}</p>
                    </div>
                    <button onClick={() => addToCart(item)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Menu;