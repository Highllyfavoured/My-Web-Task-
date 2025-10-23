import "./StateCard.css";

function StateCard ({ state, capital, region, population, children }) {
    return (
        <div className= {`nigeria ${region === "north" ? 'north' : region === "south" ? 'south' : region === "east" ? 'east' : region === "west" ? 'west' : ''}`}>
            <h2>{state} State</h2>
            <h3>Capital: {capital}</h3>
            {region}
            <p>population: {population}</p>
            {children}
        </div>
    );
}

export default StateCard;