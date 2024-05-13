import "./App.css";

const arrData = ["asdf", "two", "three", "four", "fifth", "sixth"];

const DisplayString = () => {
  return arrData.map((str, index) => <p key={index}>{str}</p>);
};

function App() {
  return (
    <div className="App">
      <DisplayString />
    </div>
  );
}

export default App;
