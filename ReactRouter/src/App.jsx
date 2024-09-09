import Mainpage from "./mainbody"
function App() {
  

  return (
    <>
      <div className=" text-white w-full h-screen">
        <nav className="flex justify-around h-14 bg-slate-800 items-center">
          <div>Logo</div>
          <div className="">
            <a className="mr-4" href="#">Home</a>
            <a className="mr-4" href="#">ABout</a>
            <a className="mr-4" href="#">Contact</a>
            <a className="mr-4" href="#">Services</a>
          </div>
          <div className="flex">
            <div className="p-3 bg-red-500 rounded-full text-sm">Profile</div>
            <div className="p-3">Login</div>
          </div>
        </nav>
        <Mainpage/>
      </div>
    </>
  )
}

export default App
