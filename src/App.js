import React from "react";
import "./css/App.css";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";
import Experiences from "./pages/Experiences";

function App() {
  return (
    <div className="App">
      <ViewContainer bg="#f7f8fa">
        <Intro />
      </ViewContainer>

      <ViewContainer>
        <Experiences />
      </ViewContainer>

      <ViewContainer>view 3</ViewContainer>
    </div>
  );
}

export default App;
