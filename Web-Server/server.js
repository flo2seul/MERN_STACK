const http = require("http");
const fs = require("fs");

//create server

const server = http.createServer(function (req, res) {
  //   console.log("Someone has visited this server");
  //   //res header
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   //send data to the user
  //   res.write("Hello, this is my first web server");
  //   //end the response
  //   res.end();
});

//Listen to the server
server.listen(9000, () => {
  console.log("Server is up and running");
});

//http://localhose:9000

//create login html file

// fs.writeFile(
//   "register.html",
//   `
// <div>
//     <h1>This is register page</h1>
//     <p>Please provide your datails</p>
// </div>`,
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File has been created");
//     }
//   }
// );

// listen to event

//login
server.on("request", (req, res) => {
  //get the url
  const url = req.url;
  if (url === "/login") {
    //read content on login html page
    fs.readFile("login.html", (err, data) => {
      //check err
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
});

//register
server.on("request", (req, res) => {
  //get the url
  const url = req.url;
  if (url === "/register") {
    //read content on login html page
    fs.readFile("register.html", (err, data) => {
      //check err
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  }
  //parse incoming data(payload)
  if (url === "/create-post" && req.method === "POST") {
    //Receive the incoming data
    const post = [];
    req
      .on("data", (chunk) => {
        post.push(chunk);
      })
      .on("end", function () {
        //pass the buffer data into string
        const paredData = Buffer.concat(post).toString();
        res.writeHead(200, { "Contetn-Type": "text/json" });
        console.log(paredData);
        res.write("Post created");
        res.end();
      });
  }
});
