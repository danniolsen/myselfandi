"use-strict";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/leftPanelBg.png";
import IntroLeftPanel from "../components/Intro/IntroLeftPanel";
import IntroRightPanel from "../components/Intro/IntroRightPanel";
import IntroFooter from "../components/Intro/IntroFooter";
import DefaultDialog from "../components/dialogs/DefaultDialog";
import ContactForm from "../components/forms/ContactForm";

function Intro(props) {
  const s = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const contactNow = () => {
    console.log("open now");
    setDialogOpen(true);
  };

  const closeContact = () => {
    setDialogOpen(false);
  };
  return (
    <div className={s.root}>
      <DefaultDialog
        title="Contact"
        style={{ background: "#F00" }}
        open={dialogOpen}
        closeModal={() => closeContact()}
      >
        <ContactForm />
      </DefaultDialog>

      <div className={s.leftPanel}>
        <IntroLeftPanel openContact={() => contactNow()} />
      </div>
      <div className={s.rightPanel}>
        <IntroRightPanel />
      </div>

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
    overflow: "auto",
    width: "100vw",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: `url(${Background})no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  leftPanel: {
    float: "left",
    overflow: "auto",
    minHeight: "100vh",
    [theme.breakpoints.up("xs")]: {
      width: "100vw",
      height: "42vh",
      minHeight: 385
    },
    [theme.breakpoints.up("md")]: {
      height: "100vh",
      width: "35vw"
    }
  },
  rightPanel: {
    float: "left",
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient( -27deg, #7cd1c4 0%, #64b9ac 40%, #64b9ac 40%, #7cd1c4 40%)",
    [theme.breakpoints.up("xs")]: {
      width: "100vw"
    },
    [theme.breakpoints.up("md")]: {
      width: "65vw"
    }
  }
}));

/*Intro.defaultProps = {};
Intro.propTypes = {};
*/
