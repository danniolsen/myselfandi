"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";

import BootstrapLogo from "../../assets/graphics/bootstrap.png";
import FirebaseLogo from "../../assets/graphics/firebase.png";
import ElectronLogo from "../../assets/graphics/electron.png";
import GitLogo from "../../assets/graphics/git.png";
import GithubLogo from "../../assets/graphics/github.png";
import MaterialuiLogo from "../../assets/graphics/materialui.png";
import MysqlLogo from "../../assets/graphics/mysql.png";
import NodejsLogo from "../../assets/graphics/nodejs.png";
import PostgresLogo from "../../assets/graphics/postgres.png";
import ReactLogo from "../../assets/graphics/react.png";
import ReduxLogo from "../../assets/graphics/redux.png";
import GraphqlLogo from "../../assets/graphics/graphql.png";
import DockerLogo from "../../assets/graphics/docker.png";

const currentStack = [
  { logo: ReactLogo, name: "React Js & Native" },
  { logo: ReduxLogo, name: "Redux" },
  { logo: ElectronLogo, name: "Electron js" },
  { logo: FirebaseLogo, name: "Firebase" },
  { logo: NodejsLogo, name: "Node js" },
  { logo: PostgresLogo, name: "Postgres" },
  { logo: BootstrapLogo, name: "Bootstrap" },
  { logo: GitLogo, name: "Git" },
  { logo: GithubLogo, name: "Github" },
  { logo: MaterialuiLogo, name: "Material UI" },
  { logo: MysqlLogo, name: "Mysql" }
];

const newStack = [
  { logo: GraphqlLogo, name: "graphql" },
  { logo: DockerLogo, name: "Docker" }
];

function IntroRightPanel(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.stackGrid}>
        <header className={s.stackHead}>Stack</header>

        <Grid container>
          {currentStack.map((skill, i) => {
            return (
              <Grid item xs={4} sm={2} md={2} key={i}>
                <div className={s.logoCon}>
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={s.logo}
                    onClick={() => console.log(skill.name)}
                  />
                  <p className={s.logoTxt}>{skill.name}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div className={s.stackGrid}>
        <header className={s.stackHead}>Currently studying</header>

        <Grid container>
          {newStack.map((skill, i) => {
            return (
              <Grid item xs={4} sm={2} md={2} key={i}>
                <div className={s.logoCon}>
                  <img src={skill.logo} alt={skill.name} className={s.logo} />
                  <p className={s.logoTxt}>{skill.name}</p>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default IntroRightPanel;

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    padding: 20,
    [theme.breakpoints.down("sm")]: { marginTop: 0 }
  },
  stackHead: {
    fontSize: "1.3em",
    padding: "0px 30px 20px 30px",
    color: "#FFF",
    fontWeight: 300
  },
  logoCon: { textAlign: "center", marginBottom: 40 },
  logo: { maxWidth: "50%" },
  logoTxt: { paddingTop: 15, fontSize: "0.9em", fontWeight: 300, color: "#FFF" }
}));

/*IntroRightPanel.defaultProps = {};
IntroRightPanel.propTypes = {};*/
