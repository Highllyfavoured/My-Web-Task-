import GreetingCard from "./greetingCard";

function App () {
    return (
    <div className="app">
      <GreetingCard
      name="Favour"
      message="You are an AI Developer"
      color="red"
      />
      <GreetingCard
      name="Tabitha"
      message="You are Beautiful!"
      color="brown"
      />
      <GreetingCard
      name="Ayobami"
      message="I love You"
      color="blue"
      />
      <GreetingCard
      name="Eri-Jesu"
      message="Jesus loves You"
      />
    </div>
  );
}


export default App
