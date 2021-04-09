CREATE VIEW top_3_artistas AS
SELECT a.artista_nome AS artista,
COUNT(ua.usuario_id) AS seguidores
FROM artista AS a, usuario_artista AS ua
WHERE a.artista_id = ua.artista_id
GROUP BY artista
ORDER BY seguidores DESC, artista
LIMIT 3;
