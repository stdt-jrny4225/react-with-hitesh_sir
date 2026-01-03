import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("black");

  return (
    <div className=" h-screen flex justify-center items-center" style={{backgroundColor:color}}>
      
      <h3 className="text-4xl font-bold text-white"> Mini project : Change Background Color using button </h3>
      <div className='flex flex-wrap fixed justify-center bottom-15 pt-4 '>
      <div className='flex flex-wrap fixed justify-center gap-4 bg-white p-4 py-4 rounded-xl shadow-xl px-8' style={{backgroundColor:color}}>
        <button
        onClick={()=>{setColor("red")}}
        className='outline-none px-4 py-3 rounded-full ' style={{backgroundColor:"red"}}></button>
        <button
        onClick={()=>{setColor("green")}}
        className='outline-none px-4 py-3 rounded-full ' style={{backgroundColor:"green"}}></button>
        <button
        onClick={()=>{setColor("yellow")}}
        className='outline-none px-4 py-3 rounded-full ' style={{backgroundColor:"yellow"}}></button>
        <button
        onClick={()=>{setColor("blue")}}
        className='outline-none px-4 py-3 rounded-full hover:' style={{backgroundColor:"blue"}}></button>
        <button
        onClick={()=>{setColor("purple")}}
        className='outline-none px-4 py-3 rounded-full ' style={{backgroundColor:"purple"}}></button>
        <button
        onClick={()=>{setColor("pink")}}
        className='outline-none px-4 py-3 rounded-full ' style={{backgroundColor:"pink"}}></button>
      
     </div>
      
    </div>
    </div>
    
  )
}

export default App
