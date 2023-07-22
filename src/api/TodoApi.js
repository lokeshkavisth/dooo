import axios from "axios";

const TodoApi = async (verbs, endPoint, data) => {
  const URL = `http://localhost:3001/todos${endPoint}`;
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
