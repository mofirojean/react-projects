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
          {/*<div className="container">
              <img src="https://picsum.photos/640/360"/>
              <button onClick={handleClick}>Click me</button>
          </div>*/}
      </div>
  )
}

export default App
