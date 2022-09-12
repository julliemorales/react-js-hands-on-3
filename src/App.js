import "./App.css";
import "./css/custom-style.css";
import CalculateScore from "./components/CalculatorScore";

function App() {
  return (
    <div className="App container">
      <CalculateScore
        Name={"Jullie Angeli S. Morales"}
        School={"KodeGo"}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
