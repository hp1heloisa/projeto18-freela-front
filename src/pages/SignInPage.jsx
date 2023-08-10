import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import NavbarSec from "../components/NavBarSec";

export default function SignInPage() {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();

  function singIn(e) {
    e.preventDefault();
    const entrar = {email, password};
      console.log(entrar);
      axios.post(`${import.meta.env.VITE_API_URL}/signin`, entrar)
            .then(res => {
                localStorage.setItem("dataDogModels", JSON.stringify(res.data));
                navigate("/");
            })
            .catch(erro => alert(erro.response.data));

  }

  return (
    <>
        <NavbarSec />
        <SingInContainer>
            <h1>FAZER LOGIN</h1>
            <form onSubmit={e => singIn(e)}>
                <input placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input placeholder="Senha" type="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.target.value)} required/>
                <button type="submit"><ion-icon name="log-in-outline"></ion-icon> ENTRAR</button>
            </form>
            <Link to={"/signup"} >
                Primeira vez? Cadastre-se!
            </Link>
        </SingInContainer>
    </>
  )
}

const SingInContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  h1{
    color: #693606; 
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 26px;
  }
  a {
    color: #693606;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    padding-top: 10px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    ion-icon{
      font-size: 30px;
    }
  }
`

