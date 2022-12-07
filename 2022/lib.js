const fs = require("fs");
const path = require("path");

const DEMO_FILE = "demo.txt";
const INPUT_FILE = "input.txt";

const getFileContent = (dir) => {
  const isDemoMode = Boolean(process.env.DEMO);
  const filePath = path.join(dir, isDemoMode ? DEMO_FILE : INPUT_FILE);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return fileContent;
};

module.exports = {
  getFileContent,
};
