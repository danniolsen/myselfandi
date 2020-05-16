"use-strict";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import moment from "moment";
const ExperienceContainer = props => {
  const s = useStyles();
  const [totalDate, setTotalDate] = useState({ yyyy: 0, mm: 0, dd: 0 });
  const { color, company, position, startDate, endDate } = props;
  const { logo, description } = props;

  useEffect(
    () => {
      const totalDateCopy = { ...totalDate };
      let date1Int = parseInt(startDate);
      let date2Int = parseInt(endDate);

      let start_date = new Date(date1Int);
      let end_date = new Date(date2Int);
      let diff = moment.duration(moment(end_date).diff(moment(start_date)));

      totalDateCopy.yyyy = diff._data.years;
      totalDateCopy.mm = diff._data.months;
      totalDateCopy.dd = diff._data.days;
      setTotalDate(totalDateCopy);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [endDate, startDate]
  );

  return (
    <div className={s.box}>
      <header
        className={s.containerHead}
        style={{ borderBottom: `2px solid ${color}` }}
      >
        <div className={s.logoCon} style={{ background: color }}>
          <img
            src={require(`../../assets/logos/${logo}`)}
            alt="company logo"
            className={s.logo}
          />
        </div>

        <div className={s.containerinfoCon}>
          <p className={s.companyName}>{company}</p>
          <p className={s.positionName}>{position}</p>
        </div>

        <div className={s.dateCon}>
          {totalDate.yyyy !== 0 && (
            <p className={s.dateTxt}>{totalDate.yyyy} Year</p>
          )}
          {totalDate.mm !== 0 && (
            <p className={s.dateTxt}>{totalDate.mm} Months</p>
          )}
          {totalDate.yyyy === 0 &&
            totalDate.mm === 0 && (
              <p className={s.dateTxt}>{totalDate.dd} Days</p>
            )}
        </div>
      </header>

      <div className={s.descriptionCon}>
        {description.map((desc, i) => {
          return (
            <div key={i}>
              <p className={s.descTitle}>{desc.des_title}</p>
              <p className={s.descText}>{desc.des_text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
/*
Years - {totalDate.yyyy}
Months - {totalDate.mm}
days - {totalDate.dd}
*/
export default ExperienceContainer;

const useStyles = makeStyles(theme => ({
  box: {
    margin: "5px auto",
    background: "#FFF",
    borderRadius: 5,
    width: "80%",
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      width: "80%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  containerHead: {
    width: "100%",
    float: "left"
  },
  logoCon: {
    width: "10%",
    float: "left",
    textAlign: "center",
    borderRadius: "5px 0px 0px 0px",
    background: "#CCC",
    [theme.breakpoints.down("xs")]: { width: "20%" },
    [theme.breakpoints.up("sm")]: { width: "15%" },
    [theme.breakpoints.up("md")]: { width: "10%" }
  },
  logo: { width: "70%", padding: "8% 8% 5% 8%", maxWidth: 50 },

  containerinfoCon: {
    width: "60%",
    float: "left",
    [theme.breakpoints.down("xs")]: { width: "55%" },
    [theme.breakpoints.up("sm")]: { width: "70%" },
    [theme.breakpoints.up("md")]: { width: "80%" }
  },
  companyName: {
    padding: "10px 10px 3px 10px",
    fontWeight: 300,
    fontSize: "1.1em",
    [theme.breakpoints.down("xs")]: { fontSize: "0.7em", fontWeight: 400 }
  },
  positionName: {
    padding: "3px 10px",
    fontSize: "0.8em",
    [theme.breakpoints.down("xs")]: { fontSize: "0.6em", fontWeight: 400 }
  },
  dateCon: {
    fontSize: "0.8em",
    paddingTop: 10,
    textAlign: "center",
    float: "right",
    [theme.breakpoints.down("xs")]: { width: "25%" },
    [theme.breakpoints.up("sm")]: { width: "15%" },
    [theme.breakpoints.up("md")]: { width: "10%" }
  },
  dateTxt: { color: "#7f8c8d", padding: 3 },
  descriptionCon: { float: "left", width: "96%", padding: "10px 2%" },
  descTitle: { paddingBottom: 5 },
  descText: {
    margin: "0px 10px 20px 10px",
    lineHeight: 1.6,
    color: "#535454",
    fontWeight: 300
  }
}));

ExperienceContainer.defaultProps = {
  color: "#F00",
  company: "Company name",
  position: "position name",
  sDate: "",
  eDate: ""
};
ExperienceContainer.propTypes = {
  color: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
  sDate: PropTypes.string,
  eDate: PropTypes.string,
  icon: PropTypes.string
};
