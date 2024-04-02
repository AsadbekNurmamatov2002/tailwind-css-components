

function App(){
  return(
    <>
    <nav  className="flex items-center justify-around bg-black w-full h-9 ">
      <h2 className="text-white text-3xl">Hello</h2>
      <ul className="flex ">
        <li className="text-white rounded-md hover:bg-slate-200 hover:text-black m-4 px-3 py-1">Home</li>
        <li className="text-white rounded-md hover:bg-slate-200 hover:text-black m-4 px-3 py-1">Name</li>
        <li className="text-white rounded-md hover:bg-slate-200 hover:text-black m-4 px-3 py-1">Category</li>
      </ul>
      <button className="py-1 px-3 bg-blue-600 rounded-md text-white outline-none">Login</button>
    </nav>
    </>
  )
}


export default App;