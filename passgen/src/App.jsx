import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [lenght, setlenght] = useState(8);
  const [Number, setnumber] = useState(false);
  const [Character, setcharacter] = useState(false);
  const [password, setpassword] = useState("Avinash");

  let passref=useRef()
  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Number) str += "0123456789";
    if (Character) str += "~!@#$%^&*()_+?><";

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setpassword(pass)
  }, [lenght, Number, Character]);

  let copy=useCallback(()=>{
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
    alert("Password copied")
  },[password])
  // passgenerator()
  useEffect(()=>{
    passgenerator()
  },[lenght, Number, Character, passgenerator])






  return (
    <>
      <div id="main" className="bg-slate-700 w-full h-screen flex  justify-center items-center">
        <div className="bg-gray-500 w-2/4 h-40 rounded-lg">
          <div className="flex px-5">
            <input
             placeholder="Password"
              type="text"
              readOnly
              ref={passref}
              value={password}
              className="w-11/12 mt-8 h-10  rounded-tl-lg rounded-bl-lg placeholder:px-2 px-2 border-none"
            />
            <button id="copy" className="bg-green-500 w-16 mt-8 h-10 rounded-tr-lg rounded-br-lg" onClick={copy}>
              Copy
            </button>
          </div>
          <div className=" flex mx-5 my-7 justify-around">
            <input
              type="range"
              value={lenght}
              min={6}
              onChange={(e) => {
                setlenght(e.target.value);
              }}
            />
            <label htmlFor="Avi"> Lenght({lenght})</label>
           <div className="flex justify-center">
           <input
              type="checkbox"
              defaultChecked={Number}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
              className="w-4 h-6"
            />
            <label htmlFor="Avi"> Number</label>
           </div>
            <div className="flex justify-center
            ">
            <input
              type="checkbox"
              defaultChecked={Character}
              onChange={() => {
                setcharacter((prev) => !prev);
              }}
              className="w-4 h-6"
            />
            <label htmlFor="Avi"> Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
