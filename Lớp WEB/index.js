const fs = require("fs");
const http = require("http");

// fs.readFile("./test.txt", "utf-8" , (err, data) => {
//   console.log(data);
// });

// const data = fs.readFileSync("./test.txt", "utf-8");
// console.log(data);

// fs.writeFile("./test.txt", "Hello world", { flag: "a" }, (err, data) => {
//   console.log("Done");
// });

const serverListener = (req,res) => {
  switch (req.url) {
    case "/": {
      const htmlData = fs.readFileSync("./index.html", "utf-8");
      res.end(htmlData);
      break;
    }
    case "/api/users": {
      const userData = fs.readFileSync("./data.json", "utf-8");
      res.end(userData);
      break;
    }
    default:
      break;
  }
}

const server = http.createServer(serverListener);

server.listen(8080, () => {
  console.log("Server is running on port");
});
