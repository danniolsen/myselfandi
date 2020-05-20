"use-strict";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/experience.png";
import ExperienceContainer from "../components/experinces/ExperienceContainer";

import { connect } from "react-redux";
import { fetchExps } from "../redux/actions/expActions";

function Experiences(props) {
  const s = useStyles();
  const { expsDis, exps } = props;

  useEffect(
    () => {
      expsDis();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [expsDis]
  );

  return (
    <div className={s.root}>
      <div className={s.headline}>
        <p>Experiences</p>
      </div>

      <div className={s.experienceCon}>
        {exps.exps.map(exp => {
          return (
            <section key={exp._id} className={s.content}>
              <ExperienceContainer
                company={exp.exp_company}
                position={exp.exp_position}
                startDate={exp.exp_start_date}
                endDate={exp.exp_end_date}
                color={exp.exp_color}
                logo={exp.exp_logo}
                description={exp.exp_descriptions}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  exps: state.exps
});

const mapDispatchToProps = dispatch => ({
  expsDis: payload => dispatch(fetchExps())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences);

const useStyles = makeStyles(theme => ({
  root: {
    width: "96vw",
    minHeight: "100vh",
    float: "right",
    padding: "2vw",
    background: `url(${Background})no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  headline: {
    width: "100%",
    textAlign: "center",
    color: "#3498db",
    fontSize: "2em",
    fontWeight: 100,
    padding: "50px 0px"
  },
  content: { display: "flex" }
}));
