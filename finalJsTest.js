const ApiResponse = {
  data: [
    { id: 1, isAdmin: false, name: "pawan", userManagementAccess: false },
    {
      id: 2,
      isAdmin: true,
      name: "aryan",
      userManagementAccess: false,
    },
    {
      id: 3,
      isAdmin: true,
      name: "bijay",
      userManagementAccess: true,
    },
  ],
  responseStatus: 200,
  responseMessage: "User fetched successfully",
};
//func-> fetch all admin names in array
// func-> if some admin has no user management access, provide them access and return all users
// these above 2 func should run only if api response is 200
