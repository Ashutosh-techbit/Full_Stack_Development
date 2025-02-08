-- source C:/Users/atulb/OneDrive/Desktop/Full_Stack_Development/37_NodejsWithSQL/schema.sql;

SHOW TABLES;

CREATE TABLE user (
    id INT,
    name VARCHAR(20) UNIQUE,
    email VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL
);
