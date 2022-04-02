import Home from "./components/Home";
import React, { useState, useRef } from "react";
import Audio from "./img/Gif/Abertura Beyblade_554x360.mp3";
import "./css/style.css";
export const GlobalContext = React.createContext();

function App() {
  const [toogleSearch, setToogleSearch] = useState(false);
  const [catchAll, catchAllDispatch] = useState([]);
  const [search, searchDispatch] = useState([]);
  const body = useRef(null);
  const aud = useRef(null);

  const playing = () => {
    aud.current.play();
  };

  return (
    <div className="App" ref={body} onClick={playing}>
      <audio src={Audio} ref={aud}></audio>
      <header className="App-header">
        <GlobalContext.Provider
          value={{
            catchAll,
            catchAllDispatch,
            search,
            searchDispatch,
            toogleSearch,
            setToogleSearch,
          }}
        >
          <Home />
        </GlobalContext.Provider>
      </header>
    </div>
  );
}

export default App;
