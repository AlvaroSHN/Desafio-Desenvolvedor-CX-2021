DELIMITER $$
CREATE PROCEDURE albuns_do_artista (IN nome VARCHAR(50))
BEGIN
SELECT a.artista_nome AS artista,
al.album_nome AS album
FROM album AS al
INNER JOIN artista AS a
ON a.artista_id = al.artista_id
WHERE a.artista_nome = nome;
END $$ 
DELIMITER ;
