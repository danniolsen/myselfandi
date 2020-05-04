"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/leftPanelBg2.png";
import IntroLeftPanel from "../components/Intro/IntroLeftPanel";
import IntroFooter from "../components/Intro/IntroFooter";

function Intro(props) {
  const s = useStyles();

  return (
    <div className={s.root}>
      <div className={s.leftPanel}>
        <IntroLeftPanel />
      </div>
      <div className={s.rightPanel}>right</div>

      <div className={s.footer}>
        <IntroFooter />
      </div>
    </div>
  );
}

export default Intro;

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 100,
    width: "100vw",
    minHeight: "100vh",
    position: "relative"
  },
  leftPanel: {
    height: "100vh",
    float: "left",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxHeight: "60vh"
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "60vh"
    },
    [theme.breakpoints.up("md")]: {
      width: "35%",
      height: "100vh"
    }
  },
  rightPanel: {
    height: "100vh",
    float: "left",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxHeight: "40vh"
    },
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      height: "40%"
    },
    [theme.breakpoints.up("md")]: {
      width: "65%"
    }
  }
}));

/*Intro.defaultProps = {};
Intro.propTypes = {};
*/

/*
import JsIcon from "../assets/graphics/js.png";
import BIcon from "../assets/graphics/bootstrap.png";
import DockerIcon from "../assets/graphics/docker.png";
import FirebaseIcon from "../assets/graphics/firebase.png";
import GitIcon from "../assets/graphics/git.png";
import GithubIcon from "../assets/graphics/github.png";
import GraphQlIcon from "../assets/graphics/graphql.png";
import MaterialIcon from "../assets/graphics/materialui.png";
import MysqlIcon from "../assets/graphics/mysql.png";
import PostgresIcon from "../assets/graphics/postgres.png";
import NodeIcon from "../assets/graphics/nodejs.png";
import ReactIcon from "../assets/graphics/react.png";
import ReduxIcon from "../assets/graphics/redux.png";
*/
