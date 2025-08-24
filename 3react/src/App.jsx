import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;':,./<>?";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // Generate password on first render + whenever options change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-700">
        <h1 className="text-white text-center my-3 text-lg font-bold">
          Password Generator
        </h1>

        {/* Input + Copy */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="outline-none w-full py-1 px-3"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-y-2 text-sm">
          {/* Length Slider */}
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={25}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer"
            />
            <label className="text-white">Length: {length}</label>
          </div>

          {/* Number Checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label className="text-white">Include Numbers</label>
          </div>

          {/* Special Char Checkbox */}
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label className="text-white">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
