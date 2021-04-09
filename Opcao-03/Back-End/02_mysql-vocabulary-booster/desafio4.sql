SELECT job_title AS 'Cargo',
ROUND(AVG(salary), 2) AS 'Média salarial', 
CASE
WHEN AVG(salary) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN AVG(salary) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN AVG(salary) BETWEEN 7501 AND 10500 THEN 'Sênior'
ELSE 'CEO'
END AS 'Senioridade'
FROM hr.employees AS emp
INNER JOIN hr.jobs AS job
ON (emp.job_id = job.job_id) GROUP BY job.job_title
ORDER BY AVG(salary), job.job_title;
