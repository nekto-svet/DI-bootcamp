// const { greet } = require("./modules/greeting.js");
import { greet } from "./modules/greeting.js";
import {
  displayColorMessage,
  displayErrorMessage,
} from "./modules/colorful-message.js";
import { read_file } from "./modules/read-file.js";
import path from "path";

const __dirname = path.resolve();

// console.log(__dirname);

try {
  let data = await read_file(
    path.resolve(__dirname, "./files", "file-data.txt")
  );
  console.log(displayColorMessage(data));
} catch (error) {
  console.log(displayErrorMessage(error.message));
}

// console.log(displayErrorMessage(greet('Students')));
