const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'ashu2005@'
});


try{connection.query("SHOW TABLES",(err,result)=>{
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
