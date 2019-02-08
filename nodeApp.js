var store = require('./store');

store.addToList(1);
store.addToList(3);
store.addToList(6);
store.addToList(23);
store.addToList(9);
store.addToList(-30);

console.log(`unsorted list:[${store.getList()}], sorted list [${store.getSortedList()}]\n` +
  `now adding 15 to list`);
store.addToList(15);
console.log(`nunsorted list:[${store.getList()}], sorted list [${store.getSortedList()}]`);