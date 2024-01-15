import { promises as fs } from "fs";

export const read_file = async (fullpathname) => {
  try {
    return await fs.readFile(fullpathname, "utf-8");
  } catch (err) {
    throw new Error(err.message);
  }
};
