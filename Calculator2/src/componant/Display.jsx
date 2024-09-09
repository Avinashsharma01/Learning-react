// eslint-disable-next-line react/prop-types
function Display({Displayvalue}){
    return(
        <>
        <div className="inputfield mb-5">
            <input type="text"  className="w-[320px] mt-5  h-10  px-5  text-center"  value={Displayvalue} readOnly/>
        </div>
        </>
    )
}


export default Display