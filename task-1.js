/*
# For a given string s find the character c (or C) with longest consecutive repetition 
# and return:
## (c, l)
## where l (or L) is the length of the repetition. 
# 
# If there are two or more characters with the same l return the first in order of appearance.
#
# For empty string return: ('', 0)
*/

function countOccurrences(string) {
  if (typeof string !== "string") {
    throw new Error("It should be a string");
  }
  if (string.length === 0) return ["", 0];

  let objectWithCount = [...string].reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(objectWithCount).sort((a, b) => b[1] - a[1])[0];
}
