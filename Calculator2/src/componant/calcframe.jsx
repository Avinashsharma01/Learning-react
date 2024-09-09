import { useState } from "react"
import Btn from "./Btn"
import Display from "./Display"

function Calcframe(){
    let [value, setvalue] =useState("")
    const btufun=(e)=>{
        console.log( e)
        if(e==='c' || e==="C"){
            setvalue("Soumya Mishra")
            setTimeout(()=>{
                setvalue("")
            },1000)
        }
        else if(e==="="){
            let calculation=eval(value)
            setvalue(calculation)
        }
        else{
            let total=value+e
            setvalue(total)
        
        }
    }



    
    return(
        <>
            <div className="con bg-slate-700  text-black w-[350px] h-[700px] px-4">
               <Display Displayvalue={value}/>
               <Btn onClickBtn={btufun} />
            </div>
        </>
    )
}
export default Calcframe