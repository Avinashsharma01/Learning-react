import Feature from "./componants/feature"
import Footer from "./componants/footer"
import Head from "./componants/header"
import Mainpage from "./componants/main"
import Data from "./componants/data"
import Bharat from "./Bharat/bharat"
import Itemscon from "./itemcontainer/items"

function App() {
  return (
    <>
      <Head/>
      <Mainpage/>
      <Feature/>
      <Data/>
      <Bharat/>
      <Itemscon/>
      <Footer/>
    </>
  )
}

export default App
