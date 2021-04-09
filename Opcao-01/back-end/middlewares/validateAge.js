function validateAge(date) {
  // validar se tem mais de 18 anos
  // mm-dd-yyyy
  if (!date) return false;
  const clientDate = new Date(date);
  if (clientDate.toString().length === 12) return false;
  const todayDate = new Date();
  const age = todayDate - clientDate;
  return Math.floor(age / 31557600000) >= 18;
}

module.exports = validateAge;
