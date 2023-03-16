const fs = require("fs");
const http = require("http");

let products = [
  {
    id: 1,
    name: "Áo thun nam",
    price: 200000,
    type: "MEN",
    amount: 10,
  },
  {
    id: 2,
    name: "Áo khoác nữ",
    price: 500000,
    type: "WOMEN",
    amount: 5,
  },
  {
    id: 3,
    name: "Quần jean nam",
    price: 450000,
    type: "MEN",
    amount: 15,
  },
  {
    id: 4,
    name: "Đầm dự tiệc",
    price: 800000,
    type: "WOMEN",
    amount: 3,
  },
  {
    id: 5,
    name: "Áo sơ mi nam",
    price: 350000,
    type: "MEN",
    amount: 12,
  },
];

let data = JSON.stringify(products);

fs.writeFile("./products.json", data, (err) => {
  if (err) {
    console.log("Lỗi rồi");
  } else {
    console.log("Đã ghi danh sách sản phẩm vào file products.json ");
  }
});

const findMax = () => {
  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    }
  }

  return maxProduct;
};

const findMinWomen = () => {
  let minProduct = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].type === "WOMEN") {
      if (minProduct === null || products[i].price < minProduct.price) {
        minProduct = products[i];
      }
    }
  }
  return minProduct;
};

const serverListener = (req, res) => {
  switch (req.url) {
    case "/": {
      const htmlData = fs.readFileSync("./BTVN1.html", "utf-8");
      res.end(htmlData);
      break;
    }
    case "/api/products": {
      const usersData = fs.readFileSync("./products.json", "utf-8");
      res.end(usersData);
      break;
    }
    case "/api/products/getMaxPrice": {
      const maxData = findMax();
      console.log(maxData);
      res.end(maxData);
      break;
    }
    case "/api/products/getMinPriceWomen": {
      const minData = findMinWomen();
      console.log(minData);
      res.end(minData);
      break;
    }
    default:
      break;
  }
};

const server = http.createServer(serverListener);

server.listen(8080, () => {
  console.log("Server port is runnning");
});

module.exports = { findMax, findMinWomen };
