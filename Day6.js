// // filter vs find

// const arr1 = [1, 5, 3, 4, 5, 6, 7, 5, 9, 10];
// const result = arr1.filter((num) => num === 5);
// console.log(result);

// const findResult = arr1.find((num) => num === 5);
// console.log(findResult);

// //every
// const arr = [2, 3, 5, 7, 9, 11];
// const everyResult = arr.every((num) => num % 2 === 0);
// console.log(everyResult);
// //some
// const someResult = arr.some((num) => num % 2 === 0);
// console.log(someResult, "<-----someresult");

const firstNAme = false;

const resultNAme = firstNAme ?? "ashesh";

// console.log(resultNAme);
const arr = [1, 2, 3];

const obj = {
  name: undefined,
  age: 10,
  hobbies: undefined,
};

// console.log(obj.name ?? "N/A");
// console.log(Object.entries(obj));

// console.log(obj.hobbies?.map(() => {}));

// if (1 === 1) {
//   console.log("true");
// } else {
//   console.log(" false");
// }

// console.log(1 === 1 ? "true" : "false");

// bool ? ----- : ****

// [1,2,3,4,3].filter((num)=>num===3)
// [3,3]
// [1,2,3,4,5].find((num)=>num===3)
// 3
const userData = [
  {
    id: 1,
    name: "ashesh",
    role: "lecturer",
    experience: 5,
  },
  {
    id: 2,
    name: "gagan",
    role: "student",
    // experience:0
  },
  {
    id: 3,
    name: undefined,
    role: "lecturer",
    experience: 3,
  },
];
// ["ashesh", "N/A"]
// func that checks if array has role lecturer, if yes return the names of lecturer in array, if lecturer has no name return N/A

const getLecturerNames = () => {
  const arrayHasLecturer = !!userData.find((el) => el.role === "lecturer");

  let result = [];
  if (arrayHasLecturer) {
    result = userData
      .filter((user) => user.role === "lecturer")
      //  [
      //  {
      //   id: 1,
      //   name: "ashesh",
      //   role: "lecturer",
      // },
      //   {
      //   id: 3,
      //   name: undefined,
      //   role: "lecturer",
      // },
      // ]
      .map((user) => {
        return user.name ?? "N/A";
      });
  }
  return result;
};

console.log(getLecturerNames());
