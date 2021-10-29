CREATE DATABASE IF NOT EXISTS geo_users;
USE geo_users;
CREATE TABLE IF NOT EXISTS usuarios(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    apellido VARCHAR(200) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    ciudad VARCHAR(200) NOT NULL,
    longitud DOUBLE,
    latitud DOUBLE,
    estadogeo VARCHAR(1) NOT NULL
);