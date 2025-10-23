function GreetingCard ({ name, message, color = "green" }) {
    return (
        <div style={{ backgroundColor: color }}>
            <h2>Hello! {name}</h2>
            <p>{message}</p>
        </div>
    );
}

export default GreetingCard;