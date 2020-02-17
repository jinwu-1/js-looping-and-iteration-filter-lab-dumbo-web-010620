// Code your solution in this file

function findingMatching(array, name) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}