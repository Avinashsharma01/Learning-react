
function Mainpage(){
    return(
        <>
        <div className="bg-slate-700 w-full h-screen flex ">
            <div className="left w-1/2 h-screen bg-gray-400  flex justify-center items-center text-red-500 ">
                <Avi/>
                <Somu/>
                <h1 className="text-9xl">Avinash</h1>
                 </div>
            <div className="right w-1/2 h-screen bg-slate-950 flex justify-center items-center text-red-500">
                <div>
                    <img src="\public\Avi.jpg" alt="" className="w-80" />
                    
                </div>
            </div>
        </div>
        
        </>
    )
}
 
const Avi=()=>{
    return(
        <>
        <h1 className="text-black">Avinash Sharma</h1>
        </>
    )
}
export default Mainpage

const Somu=()=>{
    return(
        <>
        <h1 className="text-white">Soumya Mishra</h1>
        </>
    )
}

