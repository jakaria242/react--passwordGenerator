
import { useRef } from "react"
import { useEffect } from "react"
import { useState, useCallback  } from "react"




function App() {

  const [password, setPassword] = useState()
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)

  // code optimaization & cash / memorite rakha hoi useCallback hook   Memorise

  let passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"

    if (numberAllow){
      str += "0123456789"
    }
    if (characterAllow){
      str += "!~@^{}#&[]-%_$*()`"
    }

   for (let index = 1; index <=length; index++) {
    let char = Math.floor(Math.random() * str.length + 1) 
    pass  += str.charAt(char)
   }
   setPassword(pass)

  }, [length, numberAllow,  characterAllow, setPassword])

  // code optimaization & cash / memorite rakha hoi useCallback hookMemorise

  // code rendar & dependensi run useEffect hook
  useEffect(()=>{
    passwordgenerator()
  },[length, numberAllow,  characterAllow, passwordgenerator])

  // code rendar & dependensi run useEffect hook


  // text copy by useRef hook  

  const copyRef = useRef (null)

  const handlecopyClipBord = useCallback (()=> {
    copyRef.current?.select()
    copyRef.current?.setSelectionRange(0, 20)     // copy range select
    window.navigator.clipboard.writeText(password)
  }, [password])
   

   

  // text copy   useRef hook

  const [color, setColor] = useState("olive")
 

  return (
    
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-[orange] bg-gray-800 px-4 py-2 my-[200px] text-center text-2xl z-50 absolute left-[35%]">
    <h1 className="text-2xl text-center text-white text-bold mb-4"> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        placeholder="Password"
        readOnly
        className="outline-none w-full py-1 px-3"
        value={password}
        ref={copyRef}
        />
        <button onClick={handlecopyClipBord} className="outline-none bg-blue-700 text-white px-3 py-0.5">Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
          type="range" 
          min={6}
          max={25}
          className="cursor-pointer"
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length : {length}</label>
          <input 
          type="checkbox" 
          defaultValue={numberAllow}
          id="numberInput"
          onChange={()=>{setNumberAllow((prev) => !prev)}}
          />
          <label htmlFor="numberInput">Number :{numberAllow}</label>
          <input 
          type="checkbox" 
          defaultValue={" "}
          id="CharacterInput"
          onChange={()=>{setCharacterAllow((prev) => !prev)}}
          />
          <label htmlFor="CharacterInput">Character : {characterAllow}</label>
        </div>
      </div>
    </div>
    
    <div className="w-full h-screen duration-200 absolute top-0 left-0"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("teal")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "teal"}}
          >Teal</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
