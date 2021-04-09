SELECT emp.ContactName AS 'Nome',
  emp.Country AS 'País',
  COUNT(emp.Country) AS 'Número de compatriotas'
FROM w3schools.customers as emp, w3schools.customers AS comp
WHERE emp.Country = comp.Country AND emp.CustomerID != comp.CustomerID
GROUP BY emp.ContactName, emp.Country
ORDER BY emp.ContactName;
