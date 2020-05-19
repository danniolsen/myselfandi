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
  root: { width: "100vw", float: "left" }
}));

ViewContainer.defaultProps = {
  bg: "#FFF"
};
ViewContainer.propTypes = {
  //children: PropTypes.element.isRequired,
  bg: PropTypes.string
};
