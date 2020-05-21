import React, { useState, useEffect } from "react";
import "./css/App.css";
import { connect } from "react-redux";
import LoadingScreen from "./pages/LoadingScreen";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";
import Experiences from "./pages/Experiences";
import AboutMe from "./pages/AboutMe";
import { DevInfoBtn } from "./components/info/DevInfo";

function App(props) {
  const [done, setDone] = useState(false);
  const { activities, skillsLoading } = props;

  useEffect(
    () => {
      let status = !skillsLoading;
      if (status) {
        setTimeout(() => {
          setDone(true);
        }, 500);
      }
    },
    [skillsLoading]
  );

  return (
    <div className="App">
      <LoadingScreen done={done} />
      <ViewContainer bg="#f7f8fa">
        <Intro />
      </ViewContainer>

      <ViewContainer>
        <Experiences />
      </ViewContainer>

      <ViewContainer>
        {activities.map((data, i) => {
          return (
            <AboutMe
              key={i}
              headline={data.act_title}
              fieldData={data.act_descriptions}
            />
          );
        })}
      </ViewContainer>

      <DevInfoBtn />
    </div>
  );
}

const mapStateToProps = state => ({
  skillsLoading: state.skills.loading,
  activities: state.activities.activities
});

const mapDispatchToProps = dispatch => ({
  loadingDis: payload => dispatch({ type: "LOADING", payload: payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
