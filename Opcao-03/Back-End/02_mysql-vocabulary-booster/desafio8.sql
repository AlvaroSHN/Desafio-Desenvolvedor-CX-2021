SELECT cust.ContactName AS 'Nome de contato',
ship.ShipperName AS 'Empresa que fez o envio',
ord.OrderDate AS 'Data do pedido'
FROM w3schools.customers AS cust
INNER JOIN w3schools.orders AS ord
ON ord.CustomerID  = cust.CustomerID
INNER JOIN w3schools.shippers AS ship
ON ship.ShipperID = ord.ShipperID
WHERE ship.ShipperID = 1 OR ship.ShipperID = 2
ORDER BY cust.contactName, ship.ShipperName, ord.OrderDate ASC;
