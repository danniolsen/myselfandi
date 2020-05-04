import React, { useEffect } from "react";
import "./css/App.css";
import ScrollSnap from "scroll-snap";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";

function App() {
  const container = React.createRef();

  useEffect(
    () => {
      const element = container.current;
      const snapElement = new ScrollSnap(element, {
        snapDestinationY: "100vh",
        snapDestinationX: "50%",
        time: true,
        duration: 500
      });
      snapElement.bind();
    },
    [container]
  );

  return (
    <div className="App" ref={container}>
      <ViewContainer class="containerSnap" bg="#F8F8F8">
        <Intro />
      </ViewContainer>

      <ViewContainer class="containerSnap">page 2</ViewContainer>

      <ViewContainer class="containerSnap">view 3</ViewContainer>
    </div>
  );
}

export default App;
