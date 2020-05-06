"use-strict";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";

function ViewContainer(props) {
  const { bg } = props;
  const s = useStyles();
  return (
    <div className={s.root} style={{ background: bg }}>
      {props.children}
    </div>
  );
}

export default ViewContainer;

const useStyles = makeStyles(theme => ({
  root: { minHeight: "100vh", width: "100vw" }
}));

ViewContainer.defaultProps = {
  bg: "#FFF"
};
ViewContainer.propTypes = {
  //children: PropTypes.element.isRequired,
  bg: PropTypes.string
};
