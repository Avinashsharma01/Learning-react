/* eslint-disable react/prop-types */
import Btn from "./btn"
function Cards(props){
   

    return(
        <>
            <div className="container w-96 h-60 bg-slate-700 flex justify-center items-center text-white flex-col p-10 rounded-lg">
                <h1 className="bg-lime-500 w-full text-center rounded-lg" >{props.Myname}</h1>
                <p>{props.Mydescription} </p>
                <Btn/>
            </div>
        </>
    )
}
export default Cards