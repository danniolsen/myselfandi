"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

function IntroRightPanel(props) {
  const s = useStyles();
  const { skills } = props;

  return (
    <div className={s.root}>
      {skills.skills.map(skillType => {
        return (
          <div className={s.skillsContainer} key={skillType.skill_type_name}>
            <header className={s.stackHead}>
              <p className={s.icon}>
                <i className="material-icons" style={{ fontSize: 30 }}>
                  {skillType.skill_type_icon}
                </i>
              </p>
              <p className={s.title}>{skillType.skill_type_name}</p>
            </header>
            <TechStack skills={skillType.skills} />

            {skills.loading && <div className={s.loadingCon}>loading</div>}
          </div>
        );
      })}
    </div>
  );
}

const TechStack = props => {
  const { skills } = props;
  const s = useStyles();
  return (
    <Grid container>
      {skills.map(skill => {
        return (
          <Grid item xs={4} sm={2} md={2} key={skill.skill_name}>
            <div className={s.logoCon}>
              <img
                src={require(`../../assets/graphics/${skill.skill_logo}`)}
                alt={skill.name}
                className={s.logo}
                onClick={() => console.log(skill.skill_name)}
              />
              <p className={s.logoTxt}>{skill.skill_name}</p>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = state => ({
  skills: state.skills
});

export default connect(
  mapStateToProps,
  null
)(IntroRightPanel);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    padding: 20,
    [theme.breakpoints.down("sm")]: { marginTop: 0 }
  },
  stackHead: {
    display: "flex",
    fontSize: "1.3em",
    padding: "0px 30px 20px 30px",
    color: "#FFF",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]: { paddingLeft: 10 }
  },
  icon: { float: "left", marginRight: 10 },
  title: { float: "left", marginTop: 3 },
  logoCon: { textAlign: "center", marginBottom: 40 },
  logo: { maxWidth: 70, paddingBottom: 10 },
  logoTxt: { fontSize: "0.9em", fontWeight: 300, color: "#FFF" },
  loadingCon: { textAlign: "center", padding: "20px 0 50px 0", color: "#FFF" },
  skillsContainer: { width: "100%", marginBottom: 10 }
}));

/*IntroRightPanel.defaultProps = {};
IntroRightPanel.propTypes = {};*/
