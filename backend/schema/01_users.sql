-- Drop and recreate table

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  userEmail VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  userPassword VARCHAR(255) NOT NULL
    
);