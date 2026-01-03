import {  useCallback, useState ,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [alowedNumber, setAlowedNumber] = useState(false)
  const [alowedChar, setAlowedChar] = useState(false)
  const [password, setPassword] = useState("")
  const inputRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz"
    if(alowedNumber) str+="0123456789"
    if(alowedChar) str+="@#$%^&*,./';"
    for( let i=1 ; i<= length ; i++){
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },
    [length, alowedNumber, alowedChar,setPassword]
  )

  const copyToclipbord = useCallback(() => {
    inputRef.current?.select();
    window.navigator.clipboard.writeText(password);
      alert('Password copied to clipboard!');
    },
    [password]
  )

  return (
    <>
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className=" flex flex-col items-left justify-center  bg-orange-200 p-10  pt-4 rounded-xl shadow-lg">
      <div className="mb-6  text-3xl font-bold">
        <h1>Password Generator</h1>
      </div>
      <div className="mb-4 p-0" >
      <label className='text-xl '>Password:</label>
      <input type="text" value={password} onChange={(e) => setLength(e.target.value)} ref={inputRef} className='bg-gray-200 pl-2 ml-3 rounded border-left-none ' />
      <button
      onClick={copyToclipbord}
      className='bg-blue-500'
      >🔗</button>
      </div>
      <div className="mb-4 p-0">
        <label className='text-xl align-left '>Password Length:</label>
        <input type="number" value={length} onChange={(e) => setLength(e.target.value)} className='bg-gray-200 pl-2 ml-3 rounded w-10 ' />
      </div>
      <div className="mb-4 p-0">
        <label className='text-xl '>Include Numbers:</label>
        <input type="checkbox" checked={alowedNumber} onChange={(e) => setAlowedNumber(e.target.checked)} className='ml-3 h-5 w-5' />
      </div>
      <div className="mb-4 p-0">
        <label className='text-xl '>Include Special Characters:</label>
        <input type="checkbox" checked={alowedChar} onChange={(e) => setAlowedChar(e.target.checked)} className='ml-3 h-5 w-5' />
      </div >
      <button onClick={passwordGenerator} className='rounded-xl bg-red-500 hover:bg-green-500 w-ful mt-3 p-2'>Generate Password</button>
    </div>

    </div>
    </>
  )
}

export default App
