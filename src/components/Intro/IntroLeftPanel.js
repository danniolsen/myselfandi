"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import ProfileImage from "../../assets/images/profileimage.png";
import { GitHub, Send, Linkedin } from "react-feather";

function IntroLeftPanel(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.profileimage}>
        <img src={ProfileImage} className={s.pimage} alt="profile" />
      </div>
      <div className={s.infoCon}>
        <p className={s.name}>Danni Olsen</p>
        <div className={s.dot} />
        <p className={s.txtSmall}>Fullstack Developer</p>
        <p className={s.txtSmall}>Copenhagen - Denmark</p>
        <p className={s.txtSmall}>Computer Science Graduate</p>
        <div className={s.dot} />
      </div>

      <div className={s.linksCon}>
        <a
          href="https://github.com/danniolsen"
          target="blank"
          className={s.socialIcon}
        >
          <GitHub className={s.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/danni-olsen/"
          target="blank"
          className={s.socialIcon}
        >
          <Linkedin className={s.icon} />
        </a>
        <div className={s.socialIcon}>
          <Send className={s.icon} style={{ marginTop: 9 }} />
        </div>
      </div>
    </div>
  );
}
export default IntroLeftPanel;

const useStyles = makeStyles(theme => ({
  root: { textAlign: "center" },
  profileimage: {
    width: "100%",
    textAlign: "center",
    marginTop: 50,
    [theme.breakpoints.down("sm")]: { marginTop: 20 }
  },
  pimage: {
    maxWidth: 150,
    maxHeight: 150,
    borderRadius: "50%",
    border: "5px solid #FFF",
    [theme.breakpoints.down("sm")]: { height: 100, width: 100 }
  },
  infoCon: { margin: "10px 0" },
  dot: {
    width: 10,
    height: 10,
    margin: "20px auto",
    background: "#FFF",
    borderRadius: "50%",
    [theme.breakpoints.down("sm")]: { width: 5, height: 5, margin: "10px auto" }
  },
  name: {
    fontSize: "1.6em",
    fontWeight: 300,
    color: "#34495e",
    [theme.breakpoints.down("sm")]: { fontSize: "1.1em" }
  },
  txtSmall: { color: "#34495e", fontWeight: 300, marginTop: 10 },
  socialIcon: { display: "inline", cursor: "pointer" },
  icon: {
    padding: 15,
    background: "#F8F8F8",
    margin: "10px 20px",
    borderRadius: 10,
    width: 25,
    height: 25
  }
}));

/*LeftPanel.defaultProps = {};
LeftPanel.propTypes = {};*/
