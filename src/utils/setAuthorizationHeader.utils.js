import axios from "axios";

export default (data = null) => {
  if (data) {
    axios.defaults.headers.common.authorization = `Bearer ${data.access_token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
