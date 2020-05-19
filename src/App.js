import React, { useState, useEffect } from "react";
import "./css/App.css";
import { connect } from "react-redux";
import LoadingScreen from "./pages/LoadingScreen";
import ViewContainer from "./components/ViewContainer";
import Intro from "./pages/Intro";
import Experiences from "./pages/Experiences";
import AboutMe from "./pages/AboutMe";
import { fetchActivities } from "./redux/actions/activitiesActions";

function App(props) {
  const [done, setDone] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const { loadingState, activitiesDis, activities } = props;

  useEffect(
    () => {
      activitiesDis();
      if (loadingState) {
        setTimeout(() => {
          setDone(true);
        }, 3000);
      }
    },
    [loadingState, activitiesDis]
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
  loadingState: state.skills.loading,
  activities: state.activities.activities
});

const mapDispatchToProps = dispatch => ({
  activitiesDis: payload => dispatch(fetchActivities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
