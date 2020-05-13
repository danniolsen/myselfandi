"use-strict";
import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import Background from "../assets/images/experience.png";
import DataBox from "../components/experinces/DataBox";

import Delivered from "../assets/logos/delivered.png";
import Futurice from "../assets/logos/futurice.png";
import HaagaHelia from "../assets/logos/haagahelia.png";
import CphBusiness from "../assets/logos/cphBusiness.png";

function Experiences(props) {
  const s = useStyles();
  return (
    <div className={s.root}>
      <div className={s.headline}>
        <p>Experiences</p>
      </div>

      <div className={s.experienceCon}>
        {experiences.map(exp => {
          return (
            <div className={s.row} key={exp.id}>
              <section className={s.content}>
                <DataBox
                  company={exp.company}
                  position={exp.position}
                  sDate={exp.sDate}
                  eDate={exp.eDate}
                  color={exp.color}
                  icon={exp.icon}
                  content={exp.content}
                />
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;

const useStyles = makeStyles(theme => ({
  root: {
    width: "96vw",
    minHeight: "100vh",
    float: "right",
    padding: "2vw",

    background: `url(${Background})no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  headline: {
    width: "100%",
    textAlign: "center",
    color: "#3498db",
    fontSize: "2em",
    fontWeight: 100,
    padding: "50px 0px"
  },

  row: {
    width: "100%",
    float: "left",
    "&:nth-child(even) section": {
      float: "right",
      borderRight: "none"
    }
  },
  content: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  }
}));

const experiences = [
  {
    id: 1,
    icon: Delivered,
    company: "Delivered Oy",
    position: "Full stack developer",
    sDate: "2019-02-25",
    eDate: "2020-03-27",
    color: "#13a0db",
    content: "some long ass stuff"
  },
  {
    id: 2,
    icon: CphBusiness,
    company: "Cph Business Academy",
    position: "Computer science Graduation",
    sDate: "2019-01-11",
    eDate: "2019-01-12",
    color: "#f7ab40",
    content:
      "Fullstack javascript developer at Delivered oy , Helsinki, Finland."
  },
  {
    id: 3,
    icon: Futurice,
    company: "Futurice Oy",
    position: "Developer - Intern",
    sDate: "2018-08-01",
    eDate: "2029-01-02",
    color: "#009f77",
    content: "Internship "
  },
  {
    id: 4,
    icon: Futurice,
    company: "Futurice Oy",
    position: "Developer - Intern",
    sDate: "2018-11-01",
    eDate: "2018-11-05",
    color: "#009f77",
    content: "Haaga helia student project with futurice"
  },
  {
    id: 5,
    icon: HaagaHelia,
    company: "Haaga-Helia",
    position: "Student exchange",
    sDate: "2018-11-01",
    eDate: "2018-11-05",
    color: "#AAA",
    content:
      "Fullstack javascript developer at Delivered oy , Helsinki, Finland."
  },
  {
    id: 6,
    icon: CphBusiness,
    company: "Cph Business Academy",
    position: "Computer science student",
    sDate: "2019-02-25",
    eDate: "2020-03-27",
    color: "#f7ab40",
    content: "started studies"
  }
];
/*

*/
/*Experiences.defaultProps = {};
Experiences.propTypes = {};*/
