import { useState } from "react"

function App() {
  const [color, setColor] = useState("teal")

  

  return (
    <div className="w-full h-screen duration-1000 flex items-center" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-2 py-3 bg-white shadow-xl rounded-3xl"> {/*  // ! why is white not taking any shade value here? */}
          <button className="bg-green-400 px-4 py-2 rounded-full" onClick={() => setColor("Green")}>Green</button>
          { /* // ! Why do I have to put braces to make a statement comment in react? */}
          <button className="bg-purple-400 px-4 py-2 rounded-full" onClick={() => setColor("Purple")}>Purple</button>
          <button className="px-4 py-2 rounded-full" onClick={() => setColor("Salmon")} style={{backgroundColor:"salmon"}}>Salmon</button>
          <button className="bg-yellow-400 px-4 py-2 rounded-full" onClick={() => setColor("Yellow")}>Yellow</button>
          <button className="bg-pink-400 px-4 py-2 rounded-full" onClick={() => setColor("Pink")}>Pink</button>
          <button className="bg-orange-400 px-4 py-2 rounded-full" onClick={() => setColor("Orange")}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
