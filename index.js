// Code your solution in this file

function findMatching(array, name) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}