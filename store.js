// Create a module that exports a function that takes a number as a parameter and stores 
// it in a list. The list should not be accessible from outside the module.

// Export another function that returns a version of the data list that is sorted in ascending 
// order. The function you use to sort the data correctly should not be accessible from outside 
// the module. (Think back to the Custom Sorting Exercise when handling sorting)

// Implement a Node.js script that imports the functionality of your module, adds at least 5 
// different data points to the module's data list, and outputs the sorted list.

// exports is an empty object initially
var args = process.argv.slice(2);
var secureStorage = [5, 3, 2, 1, 4];

if (args.length != 0) {
  secureStorage = args;
}

exports.getList = () => {
  return getList();
}
exports.getSortedList = () => {
  // return some sorted list (asc)
  return getSortedList();
}
exports.addToList = (inp) => {
  addToList(inp);
}

//returns new array containing all elements of secureStorage
const getList = () => {
  return [...secureStorage];
}
//return some sorted list, not directly accessable from outside
const getSortedList = () => {
  return [...secureStorage].sort((a, b) => a - b);
}
//adds something to list
const addToList = (inp) => {
  securedStorage.push(inp);
}