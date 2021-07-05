const returnFirstTwoDrivers = function(driverArray) {
  return driverArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driverArray) {
  return driverArray.slice(-2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arrayOfDrivers, fn) {
  return fn(arrayOfDrivers);
}