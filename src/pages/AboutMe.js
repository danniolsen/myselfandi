"use-strict";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import { Grid } from "@material-ui/core";

function AboutMe(props) {
  const { headline, fieldData } = props;
  const s = useStyles();

  return (
    <div className={s.root}>
      <div className={s.headline}>
        <p>{headline}</p>
      </div>

      <Grid container>
        {fieldData.map((data, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
              <div className={s.container}>
                <header className={s.header}>
                  <img
                    src={require(`../assets/aboutMe/${data.act_i_image}`)}
                    className={s.headerImg}
                    alt={data.act_i_name}
                  />
                  <div className={s.headlineCon}>
                    <p className={s.headerHeadline}>{data.act_i_name}</p>
                    <p className={s.headlineSub}>{data.act_i_subName}</p>
                  </div>
                </header>

                <div className={s.description}>
                  <p>{data.act_i_description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AboutMe;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    background:
      "url(https://images.pexels.com/photos/430200/pexels-photo-430200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center center fixed no-repeat",
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
  container: {
    margin: "10px auto",
    width: "80%",
    maxWidth: 500,
    borderRadius: 10,
    background: "#FFF",
    [theme.breakpoints.down("xs")]: { width: "96%" },
    [theme.breakpoints.down("sm")]: { width: "95%" }
  },
  header: {
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
    height: 150,
    textAlign: "center",
    color: "#FFF",
    position: "relative"
  },
  headerImg: {
    width: "100%",
    height: 150,
    borderRadius: "10px 10px 0px 0px",
    objectFit: "cover"
  },
  headerHeadline: {
    fontWeight: 400,
    fontSize: "1.3em"
  },
  headlineSub: { fontSize: "0.8em" },
  headlineCon: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: "5px 0px",
    background: "rgba(000,000,000, 0.5)"
  },
  description: {
    padding: 10,
    height: 150,
    fontWeight: 200,
    overflow: "hidden"
  }
}));

AboutMe.propTypes = {
  headline: PropTypes.string,
  fieldData: PropTypes.array
};
