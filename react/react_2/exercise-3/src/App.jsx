import StateCard from "./StateCard.jsx";

function App() {
  return (
    <div className="app">
      <h1>Nigerian states and their capitals</h1>
      <div className="company-grid">
        <StateCard
          state="Kano"
          capital="Kano City"
          region="north"
          population="~17 million"
        >
          <p><b>Famous Landmark:</b>Kano City Walls and Gates – ancient structures dating back centuries, symbolizing Kano’s rich history and culture.</p>
        </StateCard>

        <StateCard
          state="Rivers"
          capital="Port Harcourt"
          region="south"
          population="~8 million"
        >
          <p><b>Famous Landmark:</b> Port Harcourt Pleasure Park – a modern leisure and recreation center that attracts tourists and locals alike.</p>
          </StateCard>

        <StateCard
          state="Enugu"
          capital="Enugu"
          region="east"
          population="~5 million"
        >
          <p><b>Famous Landmark:</b>Ngwo Pine Forest and Cave – a beautiful natural attraction with scenic views, caves, and waterfalls.</p>
        </StateCard>

        <StateCard
          state="Oyo"
          capital="Ibadan"
          region="west"
          population="~8 million"
        >
        <p><b>Famous Landmark:</b>Cocoa House – the first skyscraper in West Africa, symbolizing the region’s economic and historical strength.</p>
        </StateCard>
      </div>
    </div>
  );
}

export default App;
