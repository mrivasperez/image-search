import axios from "axios";

// create an instance of the axios client with default properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  // add headers for request
  headers: {
    Authorization: "Client-ID qpSOtdfLXRjR5i2yyPtVyyB8sXy_8OzjUt0dE_ZFas4",
  },
});
