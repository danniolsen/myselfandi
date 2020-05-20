"use-strict";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/";
import { Grid } from "@material-ui/core";
import Background from "../assets/images/activities.png";
import DefaultDialog from "../components/dialogs/DefaultDialog";
import { connect } from "react-redux";
import { fetchActivities } from "../redux/actions/activitiesActions";

function AboutMe(props) {
  const { headline, fieldData, activitiesDis } = props;
  const [moreOpen, setMoreOpen] = useState(false);
  const [readMoreData, setReadMoreData] = useState({});
  const s = useStyles();

  const readMore = (open, data) => {
    setReadMoreData(data);
    setMoreOpen(open);
  };

  useEffect(
    () => {
      activitiesDis();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={s.root}>
      <div className={s.containerInner}>
        <div className={s.headline}>
          <p>{headline}</p>
        </div>

        <Grid container>
          <DefaultDialog
            open={moreOpen}
            title={readMoreData.act_i_name}
            closeModal={() => readMore(false, {})}
          >
            <p className={s.moretext}>{readMoreData.act_i_description}</p>
          </DefaultDialog>

          {fieldData.map((data, i) => {
            return (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
                <div className={s.container}>
                  <header className={s.header}>
                    <div className={s.headerIcon}>
                      <i className="material-icons" style={{ fontSize: 30 }}>
                        {data.act_i_icon}
                      </i>
                    </div>
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
                  <div
                    className={s.expandCon}
                    onClick={() => readMore(true, data)}
                  >
                    <i className="material-icons">launch</i>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  activitiesDis: payload => dispatch(fetchActivities())
});

export default connect(
  null,
  mapDispatchToProps
)(AboutMe);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    background: "#F00"
  },
  containerInner: {
    background: `url(${Background}) center center fixed no-repeat`,
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
  headerIcon: {
    position: "absolute",
    background: "rgba(000,000,000, 0.5)",
    padding: 10,
    width: 30,
    height: 30,
    borderRadius: "50%",
    top: 10,
    right: 10
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
    height: 120,
    lineHeight: "1.5",
    fontWeight: 200,
    overflow: "hidden"
  },
  moretext: { lineHeight: "1.8", fontWeight: 200, paddingBottom: 20 },
  expandCon: {
    width: "90%",
    padding: "10px 5% 6px 5%",
    textAlign: "right",
    cursor: "pointer",
    color: "#6b6b6b",
    "&:hover": { opacity: "0.7" }
  }
}));

AboutMe.propTypes = {
  headline: PropTypes.string,
  fieldData: PropTypes.array
};
