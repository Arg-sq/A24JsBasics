const userData = [
  {
    id: 1,
    name: "ashesh",
    role: "lecturer",
    experience: 5,
    faculty: ["React", "adv react", "Html ,Js"],
  },
  {
    id: 2,
    name: "gagan",
    role: "student",
    // experience:0
    faculty: ["web development", "React"],
  },
  {
    id: 3,
    name: undefined,
    role: "lecturer",
    experience: 3,
    faculty: ["Dot net", "adv react", "web development"],
  },
];
//func to check if student is present in array , if yes, usko experience 0 add
// let allFaculty = [];
const addExperience = () => {
  let result = [];

  const arrayHasStudent = !!userData.find((user) => user.role === "student");

  if (arrayHasStudent) {
    result = userData.map((user) => {
      if (user.experience) {
        return user;
      } else {
        return {
          //   id: user.id,
          //   name: user.name,
          //   role: user.role,
          ...user,
          experience: 0,
          name: "gagane",
        };
      }
    });
  }
  return result;
};

console.log(addExperience());
// make all faculty array global
//func
// if yes, return array of all faculty

//output should be all unique faculty
// ["react", "adv react", "dot net", "html ,Js"]

//func
// checks if array has student
// if yes, check if student has 3 classes,
// if no, add one unique class from the all faculty array
