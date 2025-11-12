// // const food = " sushi";

// // const provider = "techspire";
// // console.log(provider + "is providing free" + food);

// freeFood("techspire", "sushi");
// function freeFood(provider, food) {
//   console.log(`${provider} is providing free ${food}`);
// }

// // freeFoodByarrowFunc("techspire", "burger");
// const freeFoodByarrowFunc = (provider, food) => {
//   console.log(`${provider} is providing free ${food}`);
// };

() => {};
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const finalArr = [...arr1, ...arr2];

// finalArr.map((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

const student = ["aryan", "paras", "tula", "ram", "bijay", "pranesh", "manoj"];

console.log(7 == "7"); //true
console.log(7 === "7"); //false
const classXutii = () => {
  if (student.length === 7) {
    console.log("xutti");
  } else {
    console.log("continue class");
  }
};
classXutii();
// student.map((name) => {
//   console.log(name);
// });

student.push("pawan"); //last element ma add
student.unshift("ashesh"); //1st element add

student.pop(); //last element remove
student.shift(); //1st element remove
// const finalStudent = ["uttam", ...student]
student.splice(2, 5);
console.log(student);

const userDetail = {
  name: "poonam",
  age: 24,
  address: {
    temp: ["ktm", "lalitpur"],
    perm: ["bhaktapur", "dhulikhel"],
  },
  hobbies: ["reading", "traveling", "coding"],
};

console.log(userDetail.address.temp[1]);
