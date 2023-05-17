import LargeHeader from "./components/largeHeader/LargeHeader";
import "./App.css";

function App() {
  const name = "Turkish Airlines";
  const type = "password";
  const maxLength = 14;
  const isAvailable = false;
  const passangers = {
    count: 30,
  };

  const getGreeting = () => {
    return "Hi, welcome to board!";
  };

  return (
    <>
      <LargeHeader />
      <h2 id="secondary-header">This is amazing{name}</h2>;
      <input type={type} max={maxLength} />
      <p>isAvailable</p>
      <p style={{ color: "red", fontSize: "4rem" }}>{passangers.count}</p>
      <p>{getGreeting()}</p>
    </>
  );
}

export default App;
