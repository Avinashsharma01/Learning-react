import style from "./App.module.css"
import Button from "./componant/Button"
import Display from "./componant/Display"

function App() {
  return (
    <>
      <div className={style.container}>
          <div className={style.calcframe}>
              <Display/>
              <Button/>
          </div>
      </div>
    </>
  )
}

export default App
