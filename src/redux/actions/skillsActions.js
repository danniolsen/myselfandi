import axios from "axios";
import IsInDev from "../../configs/devConfig";
import { skillsFetch } from "../types/skillsTypes";

const fetchSkills = loadingStatus => {
  const getSkills = dispatch => {
    try {
      return axios({
        method: "POST",
        url: `${IsInDev()}/graphql`,
        data: {
          query: `{
            skillType {
              skill_type_name
              skill_type_icon
              skills{
                skill_name
                skill_logo
                skill_level
              }
            }
          }`
        }
      }).then(res => {
        dispatch(skillsFetch({ skills: res.data.data.skillType }));
      });
    } catch (error) {
      dispatch(skillsFetch([]));
    }
  };
  return getSkills;
};

export { fetchSkills };

// let doneObject = {skillsx[0].skills = res.data.data.skillType.skills}
