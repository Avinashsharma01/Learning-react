/* eslint-disable react/prop-types */
function Btn({onClickBtn}){
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

    return(
        <>
            <div className="flex justify-around">
            <div className="btndiv flex justify-center flex-wrap">
                    {btnarr.map((item,index)=>(
                        <button className="w-[90px] h-[90px] bg-white mr-2 mb-2 hover:bg-slate-700 hover:text-stone-100" key={index
                        }  onClick={()=>onClickBtn(item)}>{item}</button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Btn