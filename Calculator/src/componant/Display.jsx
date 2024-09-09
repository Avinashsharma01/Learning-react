/* eslint-disable no-unused-vars */
import { useState } from "react"
import style from "../componant/Display.module.css"
function Display(){

    let [Text, setText]=useState("Avinash Sharma")

    
    let hello=(e)=>{
        console.log(e.target.value)
        setText(e.target.value)
    }
 

    return(
        <>
            <div className={style.calcdisplay}>
                <input type="text" name="" id="" className={style.display} onChange={hello}/>
                <p className={style.para} >{Text}</p>
            </div>
        </>
    )
}
export default Display