import axios from "axios";

export default axios.create({
  baseURL: "/api",
  params: {
    key: "63ad5776885243e7895d13302fc7bca4",
  },
});
