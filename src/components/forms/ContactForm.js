"use-strict";
import React, { useState } from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import { Inbox, Send, Briefcase } from "react-feather";

function ContactForm(props) {
  const s = useStyles();
  const [btnInActive, setBtnInActive] = useState(true);
  const [newInputData, setNewInputData] = useState({
    sender: "",
    company: "",
    message: ""
  });

  const updateInput = inputData => {
    let newInputDataCopy = Object.assign({}, newInputData);
    let name = inputData.target.name;
    let val = inputData.target.value;

    if (name === "sender") {
      newInputDataCopy.sender = val;
    } else if (name === "company") {
      newInputDataCopy.company = val;
    } else {
      newInputDataCopy.message = val;
    }
    setNewInputData(newInputDataCopy);
    validateInputs();
  };

  const validateInputs = input => {
    setBtnInActive(true);
  };

  const validated = () => {
    let inactive = { background: "#DDD", cursor: "not-allowed", color: "#AAA" };
    return btnInActive ? inactive : {};
  };
  return (
    <div className={s.root}>
      <div className={s.inputCon}>
        <InputField
          icon={<Inbox />}
          txt="to"
          type="email"
          name="reciver"
          value="Danni.r.olsen@gmail.com"
          grey
        />
      </div>
      <div className={s.inputCon}>
        <InputField
          icon={<Send />}
          txt="from"
          type="email"
          name="sender"
          value={newInputData.sender}
          placeholder="Your Email"
          alterInput={inputData => updateInput(inputData)}
        />
      </div>
      <div className={s.inputCon}>
        <InputField
          icon={<Briefcase />}
          txt="Company"
          type="text"
          name="company"
          value={newInputData.company}
          placeholder="Company name"
          alterInput={inputData => updateInput(inputData)}
        />
      </div>
      <div className={s.inputCon}>
        <div className={s.messageCon}>
          <textarea
            onChange={inputData => updateInput(inputData)}
            rows="10"
            name="message"
            className={s.messageBox}
            placeholder="Write me a message"
            value={newInputData.message}
          />
        </div>
      </div>

      <div className={s.submitCon}>
        <button
          type="button"
          className={s.submitButton}
          style={validated()}
          disabled={btnInActive}
        >
          Send message
        </button>
      </div>
    </div>
  );
}

const InputField = props => {
  const { icon, type, name, value, grey, placeholder, alterInput } = props;
  const s = useStyles();
  return (
    <div>
      <div className={s.inputIcon}>{icon}</div>

      <input
        className={s.inputField}
        style={{ color: grey ? "#BBB" : "#000" }}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={alterInput ? alterInput : () => null}
      />
    </div>
  );
};

export default ContactForm;

const useStyles = makeStyles(theme => ({
  root: { minWidth: "100%", maxWidth: 600 },
  inputCon: {
    width: "100%",
    float: "left",
    marginBottom: 20
  },
  inputIcon: {
    float: "left",
    marginRight: "3%",
    fontSize: "0.7em",
    color: "#95a5a6",
    [theme.breakpoints.down("xs")]: { marginRight: "5%" }
  },
  inputField: {
    float: "left",
    width: "85%",
    fontSize: "0.8em",
    padding: "5px 10px",
    border: "none",
    marginTop: -2,
    borderBottom: "1px solid #EEE",
    [theme.breakpoints.down("xs")]: { width: "73%", padding: "5px" }
  },
  messageCon: { width: "100%", textAlign: "center" },
  messageBox: {
    width: "94%",
    minHeight: 100,
    resize: "none",
    padding: "3%",
    background: "#f2f2f2",
    border: "none",
    borderRadius: 5,
    [theme.breakpoints.down("xs")]: { width: "94%" }
  },
  submitCon: { textAlign: "right", marginBottom: 10 },
  submitButton: {
    padding: "10px 20px",
    border: "none",
    color: "#FFF",
    background: "#3498db",
    fontSize: "0.8em",
    cursor: "pointer",
    borderRadius: 5,
    "&:hover": { opacity: "0.9" },
    "&:active": { background: "#46a6e6" }
  }
}));

/*ContactForm.defaultProps = {};
ContactForm.propTypes = {};*/
