import "./App.css";
import Cart from "./component/Cart";

function App() {
  let test = {
    name: "1test",
    age: "18",
  };

  return (
    <>
      <h1 className="bg-green-500 text-color-white"> this is for test</h1>
      <Cart test="test" testObject={test} />
    </>
  );
}

export default App;
