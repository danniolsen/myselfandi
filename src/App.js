import React, { useState, useEffect } from "react";
import "./css/App.css";
import { connect } from "react-redux";
import LoadingScreen from "./pages/LoadingScreen";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";
import Experiences from "./pages/Experiences";
import AboutMe from "./pages/AboutMe";

function App(props) {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const { activities, skillsLoading, actLoading } = props;
  const { expLoading } = props;

  useEffect(
    () => {
      let status = !skillsLoading && !actLoading && !expLoading ? true : false;
      if (status) {
        setTimeout(() => {
          setDone(true);
          setTimeout(() => {
            setLoading(false);
          }, 700);
        }, 2000);
      }
    },
    [skillsLoading, actLoading, expLoading]
  );

  return (
    <div className="App">
      {loading && <LoadingScreen done={done} />}
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
    </div>
  );
}

const mapStateToProps = state => ({
  skillsLoading: state.skills.loading,
  actLoading: state.activities.loading,
  expLoading: state.exps.loading,
  activities: state.activities.activities
});

const mapDispatchToProps = dispatch => ({
  loadingDis: payload => dispatch({ type: "LOADING", payload: payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
