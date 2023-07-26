let arrayOne = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let arrayTwo = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// a: Get unique users from arrayOne that are not in arrayTwo
let uniqueSetOne = arrayOne.filter(user => !arrayTwo.includes(user));
console.log(uniqueSetOne);

// b: Get unique users from arrayTwo that are not in arrayOne
let uniqueSetTwo = arrayTwo.filter(user => !arrayOne.includes(user));
console.log(uniqueSetTwo);

// c: Get set of users present in both arrayOne and arrayTwo (intersection)
let multipleUsers = arrayOne.filter(user => arrayTwo.includes(user));
console.log(multipleUsers);
