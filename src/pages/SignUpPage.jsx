import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import NavBarSec from "../components/NavBarSec";

export default function SignUpPage() {

  let [name, setName] = useState('');
  let [cpf, setCpf] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  function singUp(e) {
    e.preventDefault();
    if (password != confirmPassword){
      alert('As senhas devem ser iguais!');
    } else {
      const cadastro = {name, cpf, email, password, confirmPassword, phoneNumber};
      console.log(cadastro);
      axios.post(`${import.meta.env.VITE_API_URL}/signup`, cadastro)
            .then(res => navigate('/signin'))
            .catch(erro => alert(erro.response.data));
    }

  }

  return (
    <>
        <NavBarSec />
        <SingUpContainer>
            <h1>CRIAR CONTA</h1>
            <form onSubmit={e => singUp(e)}>
                <input placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required/>
                <input placeholder="CPF" type="text" value={cpf} onChange={e => setCpf(e.target.value)} required/>
                <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input placeholder="Senha" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <input placeholder="Confirme a senha" type="password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                <input placeholder="Número" type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required/>
                <button type="submit">CRIAR</button>
            </form>
            <Link to={"/signin"} >
                Já tem uma conta? Entre agora!
            </Link>
        </SingUpContainer>
    </>
  )
}

const SingUpContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  h1{
    color: #693606;; 
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 26px;
  }
  a {
    color: #693606;;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    padding-top: 10px;
    margin-bottom: 40px;
  }
`

