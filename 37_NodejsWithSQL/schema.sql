-- source C:/Users/atulb/OneDrive/Desktop/Full_Stack_Development/37_NodejsWithSQL/schema.sql;

SHOW TABLES;

CREATE TABLE user (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO user VALUES("129","eve","eve@gmail.com","hi12112");