import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import register from '../methods/register';
import { RegisterSchema } from '../validationsSchemas/register';

function Register() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isAdm, setIsAdm] = useState(false);
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleClick = async () => {
    try {
      const newClient = {
        name, gender, email, cpf, password, isAdm, birthDate
      }
      await RegisterSchema.validate(newClient)
      console.log('voltou do validade:', newClient)
      const response = await register(newClient);
      history.push('/');
      
    } catch (err) {
      setError(err.message)
    }
  };

  return (
    <RegisterForm
      state={ {
        name, gender, email, cpf, password, isAdm, birthDate, error } }
      setState={ { setName, setEmail,setGender, setCpf, setPassword,setBirthDate, setIsAdm } }
      handleClick={ handleClick }
    />
  );
}

export default Register;
