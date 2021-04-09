CREATE VIEW top_2_hits_do_momento AS
SELECT c.cancao_nome AS cancao,
COUNT(hr.cancao_id) AS reproducoes
FROM historico_reproducao AS hr
INNER JOIN cancao AS c
ON hr.cancao_id = c.cancao_id
GROUP BY hr.cancao_id
ORDER BY reproducoes DESC, cancao
LIMIT 2;
