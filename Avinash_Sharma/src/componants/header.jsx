function Head(){
    return(
       <>
         <div className="head w-full h-16 bg-black text-white flex justify-around items-center">
            <div className="logo">
                <h1 className="logoname">Avinash</h1>
            </div>
            <div className="links ">
                <a href="#" className="ml-4 ">Home</a>
                <a href="#" className="ml-4 ">About</a>
                <a href="#" className="ml-4 ">Services</a>
                <a href="#" className="ml-4 ">Contacts</a>
            </div>
         </div>
         
       </>
    )
}

export default Head