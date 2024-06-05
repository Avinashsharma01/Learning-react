import Inputbox from "./InputBox"
import Allitemscon from "./allitems"

function Itemscon(){
    return(
        <>
            <div className="itemscontainer w-full h-screen bg-cyan-800 flex justify-center items-center">
                <div className="itemscon w-2/4 h-3/4 bg-slate-700 p-10 flex flex-col items-center">
                        <Inputbox/>
                        <Allitemscon/>
                </div>
            </div>
        </>
    )
}

export default Itemscon