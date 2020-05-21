"use-strict";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function DefaultDialog(props) {
  const { open, title, btnTxt, btnAction, maxWidth } = props;
  const s = useStyles();

  const handleClose = () => {
    props.closeModal();
  };

  const handleAction = () => {
    btnAction();
  };

  return (
    <div className={s.root}>
      <Dialog
        open={open}
        keepMounted={false}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={s.modalContainer}
        maxWidth={maxWidth !== null ? maxWidth : "md"}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{props.children}</DialogContent>

        <p onClick={() => handleAction()} color="primary">
          {btnTxt}
        </p>
      </Dialog>
    </div>
  );
}

export default DefaultDialog;

const useStyles = makeStyles(theme => ({
  root: {}
}));

DefaultDialog.defaultProps = {
  open: false,
  title: "No title provided",
  btnTxt: "",
  maxWidth: "md"
};
DefaultDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  btnTxt: PropTypes.string
};
