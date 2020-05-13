"use-strict";
import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import IsInDev from "../../configs/devConfig";

import axios from "axios"; // move to redux action

function IntroRightPanel(props) {
  const s = useStyles();
  const [skillTypes, setSkillTypes] = useState([]);

  const getData = async () => {
    try {
      await axios({
        method: "POST",
        url: `${IsInDev()}/graphql`,
        data: {
          query: `{
            skillType {
              skill_type_name
              skill_type_icon
              skills{
                skill_name
                skill_logo
                skill_level
              }
            }
          }`
        }
      }).then(res => {
        setSkillTypes(res.data.data.skillType);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={s.root}>
      {skillTypes.map(types => {
        return (
          <div key={types.skill_type_name} className={s.stackGrid}>
            <TechStack
              title={types.skill_type_name}
              icon={types.skill_type_icon}
              skills={types.skills}
            />
          </div>
        );
      })}
    </div>
  );
}

const TechStack = props => {
  const { title, icon, skills } = props;
  const s = useStyles();

  return (
    <div>
      <header className={s.stackHead}>
        <p className={s.icon}>
          <i className="material-icons" style={{ fontSize: 30 }}>
            {icon}
          </i>
        </p>
        <p className={s.title}>{title}</p>
      </header>

      <Grid container>
        {skills.map((skill, i) => {
          return (
            <Grid item xs={3} sm={2} md={2} key={i}>
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
    </div>
  );
};

export default IntroRightPanel;

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
    fontWeight: 300
  },
  icon: { float: "left", marginRight: 10 },
  title: { float: "left", marginTop: 3 },
  logoCon: { textAlign: "center", marginBottom: 40 },
  logo: { maxWidth: "50%", paddingBottom: 10 },
  logoTxt: { fontSize: "0.9em", fontWeight: 300, color: "#FFF" }
}));

/*IntroRightPanel.defaultProps = {};
IntroRightPanel.propTypes = {};*/
