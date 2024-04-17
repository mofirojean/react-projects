import {Header} from "./components/Header.jsx";
import Meme from "./components/Meme.jsx";
import Main from "./components/Main.jsx";

function App() {

  return (
    <div>
      <Header />
      <Main>
          <Meme />
      </Main>
    </div>
  )
}

export default App
