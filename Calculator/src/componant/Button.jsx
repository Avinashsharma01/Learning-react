import style from "../componant/Button.module.css";
import Passthechild from "./Pass-child";
function Button() {
    let btnarr = [
        "c",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
    ];

    let btnclk=(e)=>{
       console.log(e)
    }
   
    return (
        <>
            <Passthechild>
                <div className={style.btnframe}>
                    {btnarr.map((item, index) => (
                        <button key={index} className={style.btn} onClick={btnclk}>
                            {item}
                        </button>
                    ))}
                </div>
            </Passthechild>
            
        </>
    );
}
export default Button;
