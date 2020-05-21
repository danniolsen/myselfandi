"use-strict";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/";
import DefaultDialog from "../dialogs/DefaultDialog";

const DevInfoBtn = props => {
  const s = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleModal = status => {
    setOpenModal(status);
  };

  return (
    <div className={s.root}>
      <DefaultDialog
        maxWidth="lg"
        open={openModal}
        title="Development informations"
        closeModal={() => handleModal(false)}
      >
        <DevInfo />
      </DefaultDialog>
      <div className={s.button}>
        <i
          className={"material-icons"}
          style={{ fontSize: 40, color: "#FFF" }}
          onClick={() => handleModal(true)}
        >
          info
        </i>
      </div>
    </div>
  );
};

const DevInfo = props => {
  const s = useStyles();

  return (
    <div className={s.devinfo}>
      <DevCon title="Frontend">
        <p>React js, Redux, material ui and react hooks.</p>
        <p>The frontend is deployed with firebase hosting</p>
      </DevCon>

      <DevCon title="Backend">
        <p>Node express, TypeScript, Graphql and mongoose.</p>
        <p>The backend service is deployed on heroku.</p>
      </DevCon>

      <DevCon title="Database">
        <p>Mongodb Atlas.</p>
      </DevCon>
    </div>
  );
};

const DevCon = props => {
  const s = useStyles();
  const { title, children } = props;
  return (
    <div className={s.devCon}>
      <p className={s.titleTxt}>{title}:</p>
      <div className={s.bodyTxt}>{children}</div>
    </div>
  );
};

export { DevInfoBtn };

const useStyles = makeStyles(theme => ({
  root: {
    width: 100,
    height: 100,
    position: "fixed",
    bottom: 0,
    right: 0,
    background:
      "linear-gradient( -45deg, #3498db 0%, #3498db 50%, transparent 39%, transparent 40%)"
  },
  button: {
    width: 40,
    height: 40,
    padding: 10,
    bottom: 0,
    right: 0,
    position: "absolute",
    cursor: "pointer",
    "&:active": {
      opacity: 0.7
    }
  },
  devCon: { marginBottom: 40 },
  titleTxt: { fontWeight: "bold", margin: "2px 0px 5px 0px" },
  bodyTxt: {
    padding: "5px 5px 10px 5px",
    lineHeight: 1.6,
    color: "#535454",
    fontSize: "0.9em",
    fontWeight: 300
  }
}));
