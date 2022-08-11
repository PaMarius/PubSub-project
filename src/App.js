import "./App.css";
import { useGlobalValue } from "./Constant/functionality";

function App() {
  const { value, publish } = useGlobalValue();

  return (
    <>
      <div className="App">
        <div className="buttons">
          <button
            onClick={() => {
              publish("increment");
            }}
            className="increase"
          >
            Increase
          </button>
          <button
            onClick={() => {
              publish("decrement");
            }}
            className="decrease"
          >
            Decrease
          </button>
        </div>
        <div className="text-number">{value}</div>
      </div>
    </>
  );
}

export default App;
