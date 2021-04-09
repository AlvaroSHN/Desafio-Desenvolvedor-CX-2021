SELECT CONCAT(emp.FIRST_NAME, ' ', emp.LAST_NAME) AS 'Nome completo funcionário 1',
  emp.SALARY AS 'Salário funcionário 1',
  emp.PHONE_NUMBER AS 'Telefone funcionário 1',
  CONCAT(empl.FIRST_NAME, ' ', empl.LAST_NAME) AS 'Nome completo funcionário 2',
  empl.SALARY AS 'Salário funcionário 2',
  empl.PHONE_NUMBER AS 'Telefone funcionário 2'
FROM hr.employees AS emp, hr.employees AS empl
WHERE emp.JOB_ID = empl.JOB_ID AND emp.EMPLOYEE_ID <> empl.EMPLOYEE_ID
ORDER BY CONCAT(emp.FIRST_NAME,' ', emp.LAST_NAME),
CONCAT(empl.FIRST_NAME,' ', empl.LAST_NAME);
