import { SKILLS_FETCH } from "../types/skillsTypes";

const initialState = {
  skills: [
    { skill_type_name: "Stack", skill_type_icon: "layers", skills: [] },
    { skill_type_name: "Databases", skill_type_icon: "storage", skills: [] },
    { skill_type_name: "Tools", skill_type_icon: "code", skills: [] },
    {
      skill_type_name: "New Technologies",
      skill_type_icon: "local_library",
      skills: []
    }
  ],
  loading: true
};

const skillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SKILLS_FETCH:
      return {
        ...state,
        skills: action.payload.skills,
        loading: false
      };
    default:
      return { ...state };
  }
};

export default skillsReducer;
