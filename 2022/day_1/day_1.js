const { getFileContent } = require("../lib");

const caloriesSum = (meals) => {
  return meals.reduce((sum, meal) => {
    return (sum += typeof meal === "string" ? parseFloat(meal) : meal);
  }, 0);
};

const main = () => {
  const input = getFileContent(__dirname);
  const caloriesPerElf = input
    .split("\n\n")
    .map((elfCalories) => elfCalories.split("\n"));

  const sorted = caloriesPerElf.map(caloriesSum).sort((a, b) => b - a);
  const topThree = sorted.slice(0, 3);

  return caloriesSum(topThree);
};

console.log(main());
