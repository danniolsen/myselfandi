"use-strict";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/experience.png";
import DataBox from "../components/experinces/DataBox";

import { connect } from "react-redux";
import { fetchExps } from "../redux/actions/expActions";

function Experiences(props) {
  const s = useStyles();
  const { expsDis, exps } = props;

  useEffect(
    () => {
      expsDis();
    },
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
            <div className={s.row} key={exp._id}>
              <section className={s.content}>
                <DataBox
                  company={exp.exp_company}
                  position={exp.exp_position}
                  sDate={exp.exp_sDate}
                  eDate={exp.exp_eDate}
                  color={exp.exp_color}
                  logo={exp.exp_logo}
                  description={exp.exp_description}
                />
              </section>
            </div>
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

  row: {
    width: "100%",
    float: "left",
    "&:nth-child(even) section": {
      float: "right",
      borderRight: "none"
    }
  },
  content: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  }
}));
