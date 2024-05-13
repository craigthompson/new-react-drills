import "./App.css";

const arrData = ["asdf", "two", "three", "four", "fifth", "sixth"];

function App() {
  const DisplayString = () => {
    return arrData.map((str, index) => <p key={index}>{str}</p>);
  };

  return (
    <div className="App">
      <DisplayString />
    </div>
  );
}

export default App;
