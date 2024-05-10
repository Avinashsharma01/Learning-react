
function Pass(){
    return(
        <>
       <div className="flex flex-col justify-evenly">
       <div className="w-auto h-20 bg-slate-700 my-40 border-2 ">
            <div>
                <input type="text" className="w-80 my-1 mx-1 h-8" />
                <button className="mx-1 bg-red-500 px-2 py-1 text-white">Copy</button>
            </div>

        </div>
        <div className="w-auto h-20 bg-slate-700 my-40 border-2 ">
            <div>
                <input type="text" className="w-80 my-1 mx-1 h-8" />
                <button className="mx-1 bg-red-500 px-2 py-1 text-white">Copy</button>
            </div>

        </div>
       </div>
        </>
    )
}

export default Pass