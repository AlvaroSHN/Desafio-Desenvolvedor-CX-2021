DROP DATABASE IF EXISTS Challenge01;
CREATE DATABASE IF NOT EXISTS Challenge01;

USE Challenge01;

CREATE TABLE IF NOT EXISTS movies (
	id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    director VARCHAR(100) NOT NULL,
    quantity VARCHAR(10) NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS clients (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    cpf VARCHAR(100) NOT NULL,
    birth_date DATETIME NOT NULL,
  PRIMARY KEY (id),
);

CREATE TABLE IF NOT EXISTS rentals (
    movie_id INT NOT NULL,
    client_id INT NOT NULL,
    rental_date DATETIME NOT NULL,
    PRIMARY KEY(movie_id, client_id),
    FOREIGN KEY(movie_id) REFERENCES movies(id),
    FOREIGN KEY(client_id) REFERENCES clients(id)
);

CREATE TABLE IF NOT EXISTS rentals_history (
  id INT NOT NULL AUTO_INCREMENT,
    movie_title VARCHAR(100) NOT NULL,
    client_name VARCHAR(100) NOT NULL,
    rental_date DATETIME NOT NULL,
    FOREIGN KEY(movie_title) REFERENCES movies(title),
    FOREIGN KEY(client_name) REFERENCES clients(name)
    FOREIGN KEY(rental_date) REFERENCES rentals(rental_date)
  PRIMARY KEY (id),
);

INSERT INTO clients (id, name, gender, cpf, birth_date) VALUES
    ('1', 'Fulano de tal', 'masculino', '177.274.930-31', '27/04/1992'),
    ('2', 'Fulana de tal', 'feminino', '424.464.930-17', '04/11/1990');

INSERT INTO movies (id, title, category, director, quantity) VALUES
	('1','Interestelar','Ficção Cientifica', 'Christopher Nolan', 10),
  ('2','Um Sonho de Liberdade','Drama', 'Frank Darabont ', 10),
  ('3','Batman: O Cavaleiro das Trevas','Ação', 'Christopher Nolan', 10),

