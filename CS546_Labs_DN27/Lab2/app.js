const arrayUtils = require("./arrayUtils");

try {
  console.log(arrayUtils.mean([1, 2, 3, 4]));
} catch (error) {
  console.log(error);
}

try {
  console.log(arrayUtils.mean(2));
} catch (error) {
  console.log(error);
}

try {
  console.log(arrayUtils.medianSquared([1, 2, 3, 4, 5]));
} catch (error) {
  console.log(error);
}

try {
  console.log(arrayUtils.medianSquared([5, 4, 6, 3, 8, 9]));
} catch (error) {
  console.log(error);
}
