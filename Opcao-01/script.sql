DROP DATABASE IF EXISTS Challenge01;
CREATE DATABASE IF NOT EXISTS Challenge01;

USE Challenge01;

CREATE TABLE IF NOT EXISTS movies (
	id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  director VARCHAR(100) NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS clients (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  gender VARCHAR(100) NOT NULL,
  cpf VARCHAR(100) NOT NULL,
  birth_date DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS rentals (
  movie_id INT NOT NULL,
  client_id INT NOT NULL,
  rental_date DATETIME NOT NULL,
  PRIMARY KEY(movie_id, client_id),
  FOREIGN KEY(movie_id) REFERENCES movies(id),
  FOREIGN KEY(client_id) REFERENCES clients(id)
);

INSERT INTO clients (id, name, gender, cpf, birth_date) VALUES
  ('1', 'Fulano de tal', 'masculino', '17727493031', '1992/04/27'),
  ('2', 'Fulana de tal', 'feminino', '42446493017', '1990/11/04');

INSERT INTO movies (id, title, subtitle, director, rating, imagePath, bookmarked, quantity, genre) VALUES
	('1','Interestelar','Aventura, Drama, Ficção Cientifica', 'Christopher Nolan', 10),
  ('2','Um Sonho de Liberdade','Drama, Ficção Policial', 'Frank Darabont ', 10),
  ('3','Batman: O Cavaleiro das Trevas','Ação, Aventura', 'Christopher Nolan', 10);