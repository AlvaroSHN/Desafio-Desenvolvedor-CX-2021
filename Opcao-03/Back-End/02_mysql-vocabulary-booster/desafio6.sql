SELECT CONCAT(emp.first_name, ' ', emp.last_name) AS 'Nome completo',
job.job_title AS 'Cargo',
hist.start_date AS 'Data de início do cargo',
dep.department_name AS 'Departamento'
FROM hr.job_history AS hist
INNER JOIN hr.employees AS emp
INNER JOIN hr.jobs AS job ON job.job_id = hist.job_id
INNER JOIN hr.departments AS dep ON dep.department_id = hist.department_id
WHERE hist.employee_id = emp.employee_id
ORDER BY `Nome completo` DESC, `Cargo` ASC;
