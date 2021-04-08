function validateCpf(cpf) {
  const pattern = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/;
  // cpf.match(pattern);
  console.log(cpf.match(pattern));
  if (!cpf) return;
  console.log('cpf validado');
}

module.exports = validateCpf;
