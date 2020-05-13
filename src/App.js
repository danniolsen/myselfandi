import React, { useState, useEffect } from "react";
import "./css/App.css";
import LoadingScreen from "./pages/LoadingScreen";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";
import Experiences from "./pages/Experiences";
import { connect } from "react-redux";

function App(props) {
  const [done, setDone] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { loadingState } = props;

  useEffect(
    () => {
      if (loadingState) {
        setTimeout(() => {
          setDone(true);
        }, 3000);
      }
    },
    [loadingState]
  );

  const loading = status => {
    setTimeout(() => {
      setShowLoading(false);
    }, 800);
  };

  return (
    <div className="App">
      {showLoading && (
        <LoadingScreen done={done} loading={status => loading(status)} />
      )}
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

const mapStateToProps = state => ({
  loadingState: state.skills.loading
});

export default connect(
  mapStateToProps,
  null
)(App);
