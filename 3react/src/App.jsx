import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [senght, setLength] = useState(8);
  const [numberAlloud, setNumberAlloud] = useState(false);
  const [carAlloud, setCarAlloud] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    if (numberAlloud) str += "0123456789";
    if (carAlloud) str += "!@#$%^&*()_+-=[]{}|;':,./<>?";

    for (let i = 0; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass = str.charAt(char);

      setPassword(pass);
    }
  }, [senght, numberAlloud, carAlloud, setPassword]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600
      bg-gray-700"
      >
        <h1 className="text-white text text-center my-3">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Enter Password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>

        <div className=" flex text-sm gap-x-2">
          <div className="flex text-sm gap-x-1">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              className="cursor-pointer"
            />
            <label>Length:{length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
