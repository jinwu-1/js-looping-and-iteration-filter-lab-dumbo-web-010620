// Code your solution in this file

function findingMatching(array, string) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === string.toLowerCase();
  });
}