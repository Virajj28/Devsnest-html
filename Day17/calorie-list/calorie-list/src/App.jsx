import './App.css';
import data from "./cal-data/items";
import calist from "./components/calist";

function App() {
  return (
    <div className="App">
      <h1>Calories Tracking</h1>
      <div className="container">
      {data.map((items, calcount) => {
          return (
            <calist
              key={calcount}
              props={items}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
