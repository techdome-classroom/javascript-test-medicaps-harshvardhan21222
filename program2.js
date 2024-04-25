function smallest_missing_positive_integer(nums) {
  const uniquePositiveNums = [...new Set(nums.filter((num) => num > 0))];

  uniquePositiveNums.sort((a, b) => a - b);

  let smallestMissing = 1;
  for (const num of uniquePositiveNums) {
    if (num === smallestMissing) {
      smallestMissing++;
    } else {
      break;
    }
  }

  return smallestMissing;
}

module.exports = smallest_missing_positive_integer;
