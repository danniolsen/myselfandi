const IsInDev = () => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  } else {
    return "https://biodedanni.herokuapp.com";
  }
};

export default IsInDev;
