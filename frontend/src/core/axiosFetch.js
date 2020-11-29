import axios from "axios";

export default axios.create({
  baseURL: "https://hackelite-xwtyf.run-ap-south1.goorm.io/",
  //   timeout: 1000,
  //   headers: { "X-Custom-Header": "foobar" },
});
