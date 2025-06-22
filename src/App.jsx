import { useState } from "react"

function App() {

  let [color,setColor] = useState("olive");

  return <div className="fixed flex w-full h-screen flex-wrap" style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
      
      <button
      className="outline-none px-4 py-2 rounded-full" style={{backgroundColor:"red",color:"white"}}
      onClick={()=>setColor('red')}
      >Red</button>

      <button
      className="outline-none px-4 py-2 rounded-full" style={{backgroundColor:"green",color:"white"}}
      onClick={()=>setColor('green')}
      >Green</button>

      <button
      className="outline-none px-4 py-2 rounded-full" style={{backgroundColor:"blue",color:"white"}}
      onClick={()=>setColor('blue')}
      >Blue</button>

      <button
      className="outline-none px-4 py-2 rounded-full" style={{backgroundColor:"yellow",color:"black"}}
      onClick={()=>setColor('yellow')}
      >Yellow</button>
    </div>
    </div>
  </div>
}

export default App
