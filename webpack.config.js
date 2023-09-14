import { resolve } from "path";

export default {
  mode: "production",
  target: "web",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: resolve("dist"),
  },
};
