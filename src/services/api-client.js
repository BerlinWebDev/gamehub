import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "582451642d8c4814b3912763f6c8a890",
  },
});
