import React from "react";
import "./css/App.css";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="App">
      <ViewContainer bg="#f7f8fa">
        <Intro />
      </ViewContainer>

      <ViewContainer>page 2</ViewContainer>

      <ViewContainer>view 3</ViewContainer>
    </div>
  );
}

export default App;
