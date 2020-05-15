"use-strict";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";

const DataBox = props => {
  const s = useStyles();
  const { color, company, position, sDate, eDate } = props;
  const { logo, description } = props;

  useEffect(
    () => {
      let cancelled = false;

      if (!cancelled) {
      }
      cancelled = true;
    },
    [sDate, eDate]
  );

  return (
    <div className={s.box}>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          className={s.boxInfo}
          style={{ background: color }}
        >
          <div className={s.leftPanel}>
            <img
              src={require(`../../assets/logos/${logo}`)}
              alt="icon"
              className={s.icon}
            />
            <p className={s.companyName}>{company}</p>
            <p className={s.position}>{position}</p>
            <div className={s.duration}>
              <p className={s.total}>1 year 3 months</p>
              <p className={s.dates}>Jan 5 2019 - Mar 11 2020</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={8} md={8} lg={8} className={s.boxContent}>
          <p className={s.contentTxt}>{description}</p>
          <div className={s.expandCon} onClick={() => null}>
            <p className={s.readmore}>Read more</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DataBox;

const useStyles = makeStyles(theme => ({
  box: {
    margin: "5px auto",
    background: "#FFF",
    borderRadius: 5,
    maxWidth: 700
  },
  boxInfo: {
    padding: 10,
    borderRadius: "5px 5px 0px 0px",
    color: "#FFF",
    [theme.breakpoints.up("sm")]: {
      borderRadius: "5px 0px 0px 5px"
    }
  },
  leftPanel: { textAlign: "center", paddingTop: 15 },
  icon: { width: 80, height: 80, paddingBottom: 10 },
  companyName: { fontSize: "1.1em", fontWeight: 300, marginBottom: 10 },
  position: { fontSize: "0.8em", paddingBottom: 10 },
  duration: { padding: "10px 0" },
  total: { fontSize: "1.1em", fontWeight: 300 },
  dates: { paddingTop: 15, fontSize: "0.7em" },
  boxContent: {
    padding: 10,
    borderRadius: 10
  },
  contentTxt: { minHeight: "200px" },
  expandCon: {
    width: "91%",
    height: "10%",
    textAlign: "right",
    padding: "10px 20px",
    left: 0,
    fontSize: "0.9em",
    color: "#A9A9A9",
    cursor: "pointer"
  },
  chevron: { float: "right", marginTop: -2, marginLeft: 10 },
  readmore: { float: "right" }
}));

DataBox.defaultProps = {
  color: "#F00",
  company: "Company name",
  position: "position name",
  sDate: "",
  eDate: ""
};
DataBox.propTypes = {
  color: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
  sDate: PropTypes.string,
  eDate: PropTypes.string,
  icon: PropTypes.string
};
