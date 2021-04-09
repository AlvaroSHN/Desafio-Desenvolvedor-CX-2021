-- Mostre todos os registros de purchase_orders que tem o supplier_id igual a 3 e status_id igual a 2.
SELECT COUNT(*) AS orders_count FROM northwind.orders
WHERE employee_id IN (5, 6) AND shipper_id = 2;
