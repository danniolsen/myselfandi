"use-strict";
import React, { useState, useEffect } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/leftPanelBg.png";
import IntroLeftPanel from "../components/Intro/IntroLeftPanel";
import IntroRightPanel from "../components/Intro/IntroRightPanel";
import DefaultDialog from "../components/dialogs/DefaultDialog";
import ContactForm from "../components/forms/ContactForm";
import { connect } from "react-redux";
import { fetchSkills } from "../redux/actions/skillsActions";

function Intro(props) {
  const s = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { skillsDis } = props;

  const handleModal = modalState => {
    setDialogOpen(modalState);
  };

  useEffect(
    () => {
      skillsDis();
    },
    [skillsDis]
  );
  return (
    <div className={s.root}>
      <DefaultDialog
        title="Contact"
        style={{ background: "#F00" }}
        open={dialogOpen}
        closeModal={() => handleModal(false)}
      >
        <ContactForm />
      </DefaultDialog>

      <div className={s.leftPanel}>
        <IntroLeftPanel openContact={() => handleModal(true)} />
      </div>
      <div className={s.rightPanel}>
        <IntroRightPanel />
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  skillsDis: payload => dispatch(fetchSkills())
});

export default connect(
  null,
  mapDispatchToProps
)(Intro);

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 100,
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
