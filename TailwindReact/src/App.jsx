import { useState } from 'react'
import './App.css'
import Pass from './component/passgen'
function App() {
  const [color, setColor]= useState("black")
  return (
    <>
     <div className='w-full h-screen bg-slate-700 flex justify-center  '
      style={{backgroundColor:color}}
     >
      <Pass/>
      <div className='fixed bottom-0  mb-20 px-5  py-2 rounded-xl bg-white m-5 '>
        <div className='flex flex-wrap justify-center gap-3'>
          <button  className='bg-red-500 px-8 text-white border-2 border-white rounded-xl' 
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button  className='bg-green-500 px-8 text-white border-2 border-white rounded-xl'
            onClick={()=>setColor("green")}
           >
            green
          </button>
          <button  className='bg-yellow-500 px-8 text-white border-2 border-white rounded-xl'
            onClick={()=>setColor("Yellow")}
           >
            Yellow
          </button>
          <button  className='bg-blue-500 px-8 text-white border-2 border-white rounded-xl'
            onClick={()=>setColor("Blue")}
           >
            Blue
          </button>
          <button  className='bg-gray-500 px-8 text-white border-2 border-white rounded-xl'
            onClick={()=>setColor("gray")}
           >
            gray
          </button>
          <button  className='bg-orange-500 px-8 text-white border-2 border-white rounded-xl'
            onClick={()=>setColor("orange")}
           >
            Orange
          </button>
          <button  className='bg-white px-8 text-black border-2 border-black rounded-xl'
            onClick={()=>setColor("white")}
           >
            white
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
