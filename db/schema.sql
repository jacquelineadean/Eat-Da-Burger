-- Drop any previously existing databases called burgers_db and create the new database
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table called Burgers
CREATE TABLE burgers (
    -- Create columns within table
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,

    -- Set id as the primary key
    PRIMARY KEY (id)
);