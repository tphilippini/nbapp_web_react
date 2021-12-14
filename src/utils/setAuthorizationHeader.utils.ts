import axios from "axios";

export default (
  data?: {
    access_token: string,
    client_id: string,
    refresh_token: string,
  }
) => {
  if (data) {
    axios.defaults.headers.common.authorization = `Bearer ${data.access_token}`;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};
