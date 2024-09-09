/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../componant/Pass-child.module.css";
function Passthechild(props){
    return(
        <>
            <div className={style.con}>
                {/* // eslint-disable-next-line react/prop-types */}
                {props.children}
            </div>
        </>
    )
}
export default Passthechild