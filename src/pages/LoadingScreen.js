"use-strict";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/";
import Dial from "../assets/loading.gif";

function LoadingScreen(props) {
  const s = useStyles();
  const [fixedStyles, setFixedStyles] = useState({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000
  });
  const { done } = props;

  useEffect(
    () => {
      let height = window.innerHeight;
      if (done) {
        setFixedStyles({});
        window.scroll({
          top: height,
          left: 0,
          behavior: "smooth"
        });
      }
    },
    [done]
  );

  return (
    <div className={s.root} style={fixedStyles}>
      <div className={s.loadingCon}>
        <img src={Dial} alt="loading gif - dial up" className={s.gif} />
      </div>

      <div className={s.message}>
        <p>Just a sec!</p>
      </div>
    </div>
  );
}

export default LoadingScreen;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingCon: {
    animation: "$pulseZoom 3.0s infinite",
    position: "absolute",
    alignItems: "center"
  },
  "@keyframes pulseZoom": {
    "0%": { transform: "scale(1.5)" },
    "50%": { transform: "scale(1.6, 1.6)" },
    "100%": { transform: "scale(1.5)" }
  },
  gif: { width: 200 },
  message: {
    marginTop: 200,
    fontWeight: 100,
    fontSize: "1.7em",
    color: "#b5b4b4"
  }
}));
