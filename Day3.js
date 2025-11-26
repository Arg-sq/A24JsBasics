// console.log(finalArr);

// const arroWFun=      ()=>{}
// for(let i=0; i<finalArr.length; i++){

// }
// finalArr.map((num) => {
//   console.log(num);
// });

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
// const finalArr = [...arr1, ...arr2];
// finalArr.map((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

const func = () => {
  return "hello";
};
const oddNumberFunc = (a1, a2) => {
  const finalArr = [...a1, ...a2];
  const result = finalArr.map((num) => {
    if (num % 2 !== 0) {
      return num;
    }
  });
  return result;
};

// console.log(oddNumberFunc(arr1, arr2));

const userDetail = {
  name: "ram",
};
const arr = ["ram", "pawan"];

arr[1];
const userData = [
  { name: "shyam", age: 25 },
  { name: "hari", age: 23 },
  { name: "ram", age: 24 },
];

// fun accepts 3 parameters of arr of num, concats them,loop them and return if one of these meets
// 4 <num and 10>num
// odd num

const funcManipulator = (arr1, arr2, arr3) => {
  const finalArr = [...arr1, ...arr2, ...arr3];
  // [1,2,3,4,5,6,7,8,9]
  const result = finalArr.map((num) => {
    if ((num > 4 && num < 10) || num % 2 !== 0) {
      return num;
    }
  });

  return result.filter((el) => el !== undefined);
};

const abc = () => "abc";

// const uuu = {
//   name: "ashesh",
//   age: 30,

// };
// const res = { ...uuu, name: "rohit" };
// console.log(res);
// console.log(funcManipulator([1, 2, 3], [4, 5, 6], [7, 8, 9]));
const a = [1, 2, 3, 4, 5, 6];
const b = [3, 4, 5, 6, 7, 8];
const c = [5, 6, 7, 8, 9, 10];
const arrManipulator = () => {
  const mergedArr = [...a, ...b, ...c];
  // [1,2,3,4,5,6,3,4,5,6,7,8,5,6,7,8,9,10]
  // {2,3,4,5,6,7,8,9,10}
  const eleRemovedArr = mergedArr.slice(1);
  const uniqueElArr = [...new Set(eleRemovedArr)];

  const result = uniqueElArr
    .filter((num) => num % 2 === 0)
    .map((num) => {
      if (num > 4 && num < 10) {
        return num;
      }
    });

  return result.filter((num) => num !== undefined);
};

console.log(arrManipulator());
