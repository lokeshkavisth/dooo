import axios from "axios";

const TodoApi = async (verbs, endPoint, data) => {
  const API_URL = import.meta.env.VITE_APP_DB_URL;

  const URL = API_URL + endPoint;

  const options = {
    method: verbs,
    url: URL,
    data: data,
  };

  try {
    const resp = await axios(options).then((response) => response.data);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export default TodoApi;
