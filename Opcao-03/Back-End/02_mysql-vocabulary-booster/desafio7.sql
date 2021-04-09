SELECT UPPER(CONCAT(emp.first_name, ' ', emp.last_name)) AS 'Nome completo',
hist.start_date AS 'Data de início',
emp.salary AS 'Salário'
FROM hr.job_history AS hist
INNER JOIN hr.employees AS emp
INNER JOIN hr.jobs AS job ON job.job_id = hist.job_id
WHERE hist.employee_id = emp.employee_id AND MONTH(hist.start_date) IN (01, 02, 03)
ORDER BY `Nome completo`, hist.start_date;
