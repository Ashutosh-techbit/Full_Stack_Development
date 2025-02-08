const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'ashu2005@'
});


// let q = "SHOW TABLES";
let q = "INSERT INTO USER(id , name , email , password) VALUES ?";
let user = [["124","harsh","harsh@gmail.com","hi!3"],["125","yash","yash@gmail.com","hlo234"]];


//result is in array form can traverse , length()
try{connection.query(q,[user],(err,result)=>{
  if(err) throw err;
  console.log(result); 
});
}
catch{
console.log(err);
}

connection.end(); //to end connection after execution

let getRandomUser = ()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());
