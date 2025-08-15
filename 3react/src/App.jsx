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
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="Enter Password"
            className="outline-none w-full py-1 px-3"
          />
        </div>
      </div>
    </>
  );
}

export default App;
