-- if my database exist, i drop first
DROP DATABASE IF EXISTS to_do_list;
-- after I create one database named to_do_list
CREATE DATABASE IF NOT EXISTS to_do_list;
--  use it
USE to_do_list;

-- I drop the user admin if exist
DROP USER IF EXISTS 'Thibault_to_do_list'@'localhost';

-- -- I create an user with grant privileges to manage the database. The password need to be stronger in prod
-- CREATE USER 'Thibault_to_do_list'@'localhost' IDENTIFIED BY 'password';
-- GRANT ALL ON to_do_list.* TO 'Thibault_to_do_list'@'localhost';

CREATE USER 'Thibault_to_do_list'@'mysqldb' IDENTIFIED BY 'password';
GRANT ALL ON to_do_list.* TO 'Thibault_to_do_list'@'mysqldb';

-- I drop my tables if exists
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;


-- I create one table named users if not exists
CREATE TABLE IF NOT EXISTS users
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    lastname VARCHAR(255) NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    identifiant VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
    
);

-- I create one table named tasks if not exists
CREATE TABLE IF NOT EXISTS tasks
(
    id INT PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(255) NOT NULL,
    IsDone BOOLEAN NOT NULL DEFAULT 0,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);