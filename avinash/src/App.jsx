import Todoframe from "./componant/todoframe";
import style from "./App.module.css"
function App() {
    return (
        <>
            <div className={style.papa}>
                <Todoframe />
            </div>
        </>
    );
}
export default App;
