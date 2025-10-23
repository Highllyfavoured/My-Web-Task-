import ProductCard from "./productCard";

function App () {
  return (
    <div className="app">
      <h1>Nigerian Products</h1>
      <div>
        <ProductCard 
        image="1.jpg"
        name="Dell 7400 Laptop"
        price="₦8,000,000"
        instock= {true}
        />
        <ProductCard 
        image="download.jpeg"
        name="Mansion"
        price="₦20,000,000"
        instock= {false}
        />
        <ProductCard 
        image="images.jpeg"
        name="Hyundai car"
        price="₦15,000,000"
        instock= {true}
        />
      </div>

    </div>
  )
}
export default App
