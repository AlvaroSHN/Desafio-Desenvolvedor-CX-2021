import React from 'react';
import { Link } from 'react-router-dom';
import InputRegister from './InputRegister';
import '../style/Register.css';

const RegisterForm = ({ state, setState, handleClick }) => {
  const { name,
    email, password, gender, cpf, birthDate, isAdm, error} = state;
  const { setName, setEmail, setPassword, setIsAdm, setCpf, setGender, setBirthDate } = setState;
  return (
    <section className="register-container">
      <h1>Pagina de Registro</h1>
      <InputRegister
        name="name"
        setValue={ setName }
        value={ name }
        label="Nome"
      />
      <InputRegister
        name="email"
        setValue={ setEmail }
        value={ email }
        label="Email"
        type="email"
      />
      <InputRegister
        name="gender"
        setValue={ setGender }
        value={ gender }
        label="Gênero"
        type="text"
      />
      <InputRegister
        name="cpf"
        setValue={ setCpf }
        value={ cpf }
        label="CPF"
        type="text"
      />
      <InputRegister
        name="birthDate"
        setValue={ setBirthDate }
        value={ birthDate }
        label="Data de Nascimento"
        type="date"
      />
      <InputRegister
        name="password"
        setValue={ setPassword }
        value={ password }
        label="Senha"
        type="password"
      />
      <InputRegister
        name="seller"
        setValue={ setIsAdm }
        checked={ isAdm }
        label="Quero vender"
        type="checkbox"
      />
      <button
        className="signup-btn"
        type="button"
        data-testid="signup-btn"
        onClick={ async () => await handleClick() }
      >
        Cadastrar
      </button>
      {error && <p>{error}</p>}
      <Link
        to="/"
        className="no-account-btn"
        data-testid="no-account-btn"
      >
        Já tenho conta
      </Link>
    </section>
  );
};
export default RegisterForm;
