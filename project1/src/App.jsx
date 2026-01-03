import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(20)

  const incValue= () =>{
    if(count<50){
      setCount(count+1)
    }
    else{
      alert("you cant increse counter value more then 50")
    }
  }

    const decValue= () =>{
    if(count!=0){
      setCount(count-1)
    }
    else{
      alert("You cant decrese value of counter less then zero")
    }
  }
  return (
<>
<h1>RAZZ : Experiment on REACT</h1>

<h2>Counter value : {count}</h2>
<button
onClick={incValue}
>Increase Number :{count}</button>
<button
onClick={decValue}
>Decrease Number : {count}</button>

</>

  )
}

export default App
