import axios from "axios";
import IsInDev from "../../configs/devConfig";
import { activitiesFetch, activitiesError } from "../types/activitiesTypes";

const fetchActivities = () => {
  const getAll = dispatch => {
    // set dispatch start
    return axios({
      method: "POST",
      url: `${IsInDev()}/graphql`,
      data: {
        query: `{
          activities{
            act_title
            act_descriptions{
              act_i_icon
              act_i_name
              act_i_subName
              act_i_name
              act_i_image
              act_i_description
            }
          }
        }`
      }
    })
      .then(res => {
        dispatch(activitiesFetch(res.data.data));
      })
      .catch(err => {
        dispatch(activitiesError());
        console.log(err.stack);
      });
  };
  return getAll;
};

export { fetchActivities };
