CREATE VIEW historico_reproducao_usuarios AS
SELECT u.usuario_nome AS usuario,
c.cancao_nome AS nome
FROM historico_reproducao AS h

INNER JOIN usuario AS u
ON u.usuario_id = h.usuario_id

INNER JOIN cancao AS c
ON c.cancao_id = h.cancao_id

ORDER BY usuario, nome;
