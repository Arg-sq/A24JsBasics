const BBKoteshworUserData = [
  {
    id: 1,
    firstName: "Aaryan",
    lastName: "Suwal",
    code: "BBKOT",
    products: ["Chips", "Coke", "Shirt"],
  },
  {
    id: 2,
    firstName: "Bijay",
    lastName: "Budha",
    code: "BBKOT",
    products: ["Pressure cooker", "shampoo", "rice"],
  },
];

const BBTokhaUserData = [
  {
    id: 3,
    firstName: "Pawan",
    lastName: "Shrestha",
    code: "BBTOKHA",
    products: ["Chips", "Coke", "Shirt"],
  },
  {
    id: 4,
    firstName: "Tula",
    lastName: "Bahadur thapa",
    code: "BBTOKHA",
    products: ["Cricket bat", "ball", "gloves"],
  },
];

const getUserProducts = () => {
  const allUsers = [...BBKoteshworUserData, ...BBTokhaUserData];

  //   console.log(allUsers[3].products);
  const result = allUsers
    .filter((user) => user.id % 2 === 0 && user.code === "BBTOKHA")
    .map((user) => user.products);
  return result.flat();
};

console.log(getUserProducts());

//{
// coke:2,
// chips:1
// }
