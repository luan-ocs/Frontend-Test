import react, { useContext } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import { ListProvider } from "./provider/ListProvider";
import { GlobalStyle } from "./Styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ListProvider>
        <Board />
      </ListProvider>
    </>
  );
}

export default App;
