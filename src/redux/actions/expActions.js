import axios from "axios"; // delete me
import IsInDev from "../../configs/devConfig"; // delete me
import { fetchExpDone, fetchExpError } from "../types/expTypes";

const fetchExps = () => {
  const getAll = dispatch => {
    // set dispatch start
    return axios({
      method: "POST",
      url: `${IsInDev()}/graphql`,
      data: {
        query: `{
          experience{
            _id
            exp_logo
            exp_color
            exp_company
            exp_position
            exp_start_date
            exp_end_date
            exp_descriptions{
              des_title
              des_text
            }
          }
        }`
      }
    })
      .then(res => {
        dispatch(fetchExpDone(res.data.data));
      })
      .catch(err => {
        dispatch(fetchExpError());
        console.log(err.stack);
      });
  };
  return getAll;
};

export { fetchExps };
