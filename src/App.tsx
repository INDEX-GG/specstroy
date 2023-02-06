import React from 'react';
import "normalize.css"
import GlobalStyle from "./theme/GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Advantages from "./components/Advantages/Advantages";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Main/>
        <Advantages/>
        <About/>
      </main>
      <GlobalStyle/>
    </>
  );
}

export default App;
