const fs = require("fs");
//create file

// fs.writeFile("index.html", "Hello, welcome", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Created");
//   }
// });

//Create a file using async await
// const fs = require("fs/promise");

// const createFile = async (fileToCreate, content) => {
//   try {
//     await fs.writeFile("login.html", "Welcome to your login page");
//     console.log("File Created");
//   } catch (error) {
//     console.log(error);
//   }
// };

// createFile("aboutUs.pdf", "This is my first pdf file created");

// Read from a file

// const result = fs.readFileSync("aboutUs.pdf");

// console.log(result.toString());

fs.readFile("aboutUs.pdf", function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
