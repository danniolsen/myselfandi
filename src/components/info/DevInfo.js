"use-strict";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/";
import DefaultDialog from "../dialogs/DefaultDialog";

const DevInfoBtn = props => {
  const s = useStyles();
  const [openModal, setOpenModal] = useState(true);

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
          style={{ fontSize: 40 }}
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
    <div>
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
  button: {
    width: 40,
    height: 40,
    position: "fixed",
    bottom: 20,
    right: 20,
    padding: 10,
    cursor: "pointer",
    "&:active": {
      opacity: 0.7
    }
  },
  devCon: { marginBottom: 40 },
  titleTxt: { fontWeight: "bold", margin: "2px 0px 5px 0px" },
  bodyTxt: { padding: "5px 0px 10px 0px", lineHeight: 1.5 }
}));
