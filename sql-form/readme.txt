npm init -y
npm install express mysql body-parser


Set Up MySQL Database
---------------------
CREATE DATABASE event_registration;

USE event_registration;

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL
);
