function validateCpf(cpf) {
  if (!cpf) return false;
  // const myCpf = cpf.replace(/\D/g, '');
  const myCpf = cpf.replace(/\./g, '').replace('-', '');
  return myCpf.length === 11;
}

module.exports = validateCpf;
