CREATE VIEW estatisticas_musicais AS
SELECT
  COUNT(DISTINCT cancao.cancao_nome) AS 'cancoes',
  COUNT(DISTINCT artista.artista_nome) AS 'artistas',
  COUNT(DISTINCT album.album_nome) AS 'albuns'
FROM
  SpotifyClone.cancao AS cancao,
  SpotifyClone.artista AS artista,
  SpotifyClone.album AS album;
