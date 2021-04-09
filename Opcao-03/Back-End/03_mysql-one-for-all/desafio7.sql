CREATE VIEW perfil_artistas AS
SELECT a.artista_nome AS artista,
al.album_nome AS album,
COUNT(ua.artista_id) AS seguidores
FROM usuario_artista AS ua
INNER JOIN artista AS a
ON ua.artista_id = a.artista_id
INNER JOIN album AS al
ON al.artista_id = a.artista_id
GROUP BY al.album_id
ORDER BY seguidores DESC, artista, album;
