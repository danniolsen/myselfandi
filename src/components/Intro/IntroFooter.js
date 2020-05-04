"use-strict";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import { ToggleLeft, ToggleRight, ChevronDown } from "react-feather";

function IntroFooter(props) {
  const s = useStyles();

  const [darkMode, setDarkMode] = useState({
    status: false,
    icon: <ToggleLeft size={30} />,
    color: "#34495e"
  });

  const toggleDarkMode = darkMode => {
    let setOn = {
      status: true,
      icon: <ToggleRight size={30} />,
      color: "#27ae60"
    };
    let setOff = {
      status: false,
      icon: <ToggleLeft size={30} />,
      color: "#34495e"
    };
    darkMode.status === false ? setDarkMode(setOn) : setDarkMode(setOff);
  };

  return (
    <div className={s.root}>
      <div className={s.footerLeft}>
        <span className={s.devInfo}>2020 - development</span>
      </div>

      <div className={s.footerCenter}>
        <ChevronDown
          onClick={() => null}
          size={30}
          color="#34495e"
          className={s.arrowDown}
        />
      </div>
      <div className={s.footerRight}>
        <p
          className={s.toggleButton}
          style={{ color: darkMode.color }}
          onClick={() => toggleDarkMode(darkMode)}
        >
          {darkMode.icon}
        </p>
      </div>
    </div>
  );
}

export default IntroFooter;

const useStyles = makeStyles(theme => ({
  root: {
    width: "96%",
    padding: "2%",
    position: "absolute",
    bottom: 0,
    left: 0,
    [theme.breakpoints.down("xs")]: {
      padding: "4%",
      width: "92%"
    }
  },
  footerLeft: {
    float: "left",
    width: "20%",
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  footerCenter: {
    float: "left",
    width: "60%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  footerRight: {
    float: "left",
    width: "20%",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  toggleButton: { float: "right", width: 40, cursor: "pointer" },
  devInfo: {
    background: "rgba(000, 000, 000, 0.4)",
    color: "#FFF",
    padding: "5px 10px",
    borderRadius: 5,
    fontSize: "0.8em"
  },
  arrowDown: { cursor: "pointer" }
}));

/*IntroFooter.defaultProps = {};
IntroFooter.propTypes = {};*/
