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

const getAllFaculty = () => {
  let allFaculty = [];
  userData.forEach((user) => {
    user.faculty.forEach((classes) => {
      if (!allFaculty.includes(classes)) {
        allFaculty = [...allFaculty, classes];
      }
    });
  });

  return allFaculty;
};

const uniqueSubject = (userId) => {
  const allSubject = getAllFaculty();
  const userDetail = userData.find((user) => user.id === userId);

  const userSubject = userDetail.faculty;

  const uniqueSubjectForUser = allSubject.filter(
    (sub) => !userSubject.includes(sub)
  );
  return uniqueSubjectForUser[0];
};

const assignClassToStudent = () => {
  let updatedUsers = [];
  updatedUsers = userData.map((user) => {
    if (user.role === "lecturer") {
      return user;
    } else {
      if (user.faculty.length < 3) {
        return {
          ...user,
          faculty: [...user.faculty, uniqueSubject(user.id)],
        };
      }
    }
  });
  return updatedUsers;
};

const assignClassToLecturer = () => {
  let updatedUsers = [];
  updatedUsers = userData.map((user) => {
    if (user.role === "student") {
      return user;
    } else {
      // if (user.faculty.length < 3) {
      return {
        ...user,
        faculty: [...user.faculty, uniqueSubject(user.id)],
      };
      // }
    }
  });
  return updatedUsers;
};
console.log(assignClassToStudent());
