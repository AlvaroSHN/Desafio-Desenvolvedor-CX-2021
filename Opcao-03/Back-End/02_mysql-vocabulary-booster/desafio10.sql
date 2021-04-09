SELECT pro.ProductName AS 'Produto',
  MIN(ord.Quantity) AS 'Mínima',
  MAX(ord.Quantity) AS 'Máxima',
  ROUND(AVG(ord.Quantity), 2) AS 'Média'
FROM w3schools.products AS pro
INNER JOIN w3schools.order_details AS ord ON(pro.ProductID = ord.ProductID)
GROUP BY pro.ProductID
HAVING ROUND(AVG(ord.Quantity), 2) > 20.00
ORDER BY `Média`, `Produto`;
