const { faker, da } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "ashu2005@",
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//getrandomUser in key:pair method
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

//arrow fucntion contains return a array to create fake data
// let getRandomUser = ()=> {
//   return [
//      faker.string.uuid(),
//     faker.internet.username(), // before version 9.1.0, use userName()
//      faker.internet.email(),
//      faker.internet.password(),
//   ];
// };

// // let q = "SHOW TABLES";
// let q = "INSERT INTO user(id , name , email , password) VALUES ?";
// // let user = [["124","harsh","harsh@gmail.com","hi!3"],["125","yash","yash@gmail.com","hlo234"]];
// let data=[]; //empty object
// for(let i =1;i<=100;i++){
//   data.push(getRandomUser()); //push 100 fake user data into empty data object
// }
// connection.end(); //to end connection after execution


app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
      console.log(result);
      // res.send("success")
    });
  } catch {
    console.log(err);
    res.send("error in database");
  }

  console.log("welcome to HomePage");
});

//show all user route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      console.log(users[0]);
      res.render("showusers.ejs", { users });
    });
  } catch {
    console.log(err);
    res.send("error in database");
  }
});

//edit user
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(user);
      res.render("edit.ejs", { user });
    });
  } catch {
    console.log(err);
    res.send("error in database");
  }
});

app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  //get user by id
  let q = `SELECT * FROM user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {

      if (err) throw err;

      let user = result[0];
      if (formPass !== user.password) {
        res.send("WRONG PASSWORD");
      } else {
        let q2 = `UPDATE user SET name='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
      // console.log(user);
      // res.render("edit.ejs", { user });
    });
  } catch {
    console.log(err);
    res.send("error in database");
  }
  // res.send(updated)
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});

// //result is in array form can traverse , length()
// // try{connection.query(q,[user],(err,result)=>{
// try{
//   connection.query(q,[data],(err,result)=>{
//   if(err) throw err;
//   console.log(result);
// });
// }
// catch{
// console.log(err);
// }
