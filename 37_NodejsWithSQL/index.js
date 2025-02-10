const { faker } = require("@faker-js/faker"); //npm package which generates fake data
const mysql = require("mysql2"); //import MySQL
const express = require("express"); //import Express.js
const app = express(); //create express app
const path = require("path"); //import path to handle file paths
const methodOverride = require("method-override"); //for using PUT/PATCH/DELETE
const { v4: uuidv4 } = require("uuid"); //generate unique id

// MySQL connection setup
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "ashu2005@", //replace with your own password
});

app.use(methodOverride("_method")); //override HTTP methods (for PATCH/DELETE)
app.use(express.urlencoded({ extended: true })); //parse form data (POST)
app.set("view engine", "ejs"); //set EJS as view engine
app.set("views", path.join(__dirname, "/views")); //set views directory

// Function to generate a random user with faker.js (returns user as an object)
let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), //username field
    email: faker.internet.email(), //email field
    password: faker.internet.password(), //password field
  };
};

// Commented alternative for generating random user as an array (optional)
let getRandomUsers = ()=> {
  return [
     faker.string.uuid(),
    faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
  ];
};

// Populate 100 fake users into an array and insert them into the database
let q = "INSERT INTO user(id , name , email , password) VALUES ?";
let data = []; //empty array for fake users
for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser()); //add fake user to the array
}
connection.end(); //close connection after operation


// Home route - shows total user count from DB
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user"; //query to get total user count
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"]; //get count from query result
      res.render("home.ejs", { count }); //render home.ejs and pass count
      console.log(result);
    });
  } catch {
    console.log(err); //catch and log errors
    res.send("error in database"); //send error response
  }
  console.log("welcome to HomePage"); //log homepage access
});

// Show all users route - fetches all users from the database
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user"; //query to get all users
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      console.log(users[0]); //log first user for debug
      res.render("showusers.ejs", { users }); //render showusers.ejs and pass users
    });
  } catch {
    console.log(err); //catch and log errors
    res.send("error in database");
  }
});

// Edit user route - gets a specific user by ID to edit
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params; //extract user ID from params
  let q = `SELECT * FROM user WHERE id='${id}'`; //query to get user by ID and send id in string bcz sql dont send it in string form itself.
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0]; //get user from query result
      console.log(user);
      res.render("edit.ejs", { user }); //render edit.ejs and pass user
    });
  } catch {
    console.log(err); //catch and log errors
    res.send("error in database");
  }
});

// Update user route - update user data after editing
app.patch("/user/:id", (req, res) => {
  let { id } = req.params; //get user ID from params
  let { password: formPass, username: newUsername } = req.body; //get form data

  // Query to get user by ID
  let q = `SELECT * FROM user where id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0]; //get user from DB
      if (formPass !== user.password) { //compare passwords
        res.send("WRONG PASSWORD"); //error if passwords don't match
      } else {
        let q2 = `UPDATE user SET name='${newUsername}' WHERE id='${id}'`; //update query
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user"); //redirect to user list after update
        });
      }
    });
  } catch {
    console.log(err); //catch and log errors
    res.send("error in database");
  }
});


// Server listening on port 8080
app.listen("8080", () => {
  console.log("server is listening to port 8080");
});

// // Example to insert bulk fake data into the database
// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result); //log result of insert operation
//   });
// } catch {
//   console.log(err); //catch and log errors
// }
