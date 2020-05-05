"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";

import BootstrapLogo from "../../assets/graphics/bootstrap.png";
import FirebaseLogo from "../../assets/graphics/firebase.png";
import FirebaseDbLogo from "../../assets/graphics/firebaseDb.png";
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

import { Layers, Database, Code, BookOpen } from "react-feather";

const codeStack = [
  { logo: ReactLogo, name: "React Js & Native" },
  { logo: ReduxLogo, name: "Redux" },
  { logo: ElectronLogo, name: "Electron js" },
  { logo: NodejsLogo, name: "Node js" },
  { logo: BootstrapLogo, name: "Bootstrap" },
  { logo: MaterialuiLogo, name: "Material UI" }
];

const databaseStack = [
  { logo: PostgresLogo, name: "Postgres" },
  { logo: MysqlLogo, name: "Mysql" },
  { logo: FirebaseDbLogo, name: "Firestore" }
];

const toolsStack = [
  { logo: FirebaseLogo, name: "Firebase SDK" },
  { logo: GitLogo, name: "Git" },
  { logo: GithubLogo, name: "Github" }
];

const studyStack = [
  { logo: GraphqlLogo, name: "graphql" },
  { logo: DockerLogo, name: "Docker" }
];

function IntroRightPanel(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.stackGrid}>
        <TechStack title="Stack" icon={<Layers />} stack={codeStack} />
      </div>

      <div className={s.stackGrid}>
        <TechStack
          title="Databases"
          icon={<Database />}
          stack={databaseStack}
        />
      </div>

      <div className={s.stackGrid}>
        <TechStack title="Tools" icon={<Code />} stack={toolsStack} />
      </div>

      <div className={s.stackGrid}>
        <TechStack title="Studying" icon={<BookOpen />} stack={studyStack} />
      </div>
    </div>
  );
}

const TechStack = props => {
  const { title, icon, stack } = props;
  const s = useStyles();

  return (
    <div>
      <header className={s.stackHead}>
        <p className={s.icon}>{icon}</p>
        <p className={s.title}>{title}</p>
      </header>

      <Grid container>
        {stack.map((skill, i) => {
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
  title: { float: "left" },
  logoCon: { textAlign: "center", marginBottom: 40 },
  logo: { maxWidth: "50%" },
  logoTxt: { paddingTop: 15, fontSize: "0.9em", fontWeight: 300, color: "#FFF" }
}));

/*IntroRightPanel.defaultProps = {};
IntroRightPanel.propTypes = {};*/
