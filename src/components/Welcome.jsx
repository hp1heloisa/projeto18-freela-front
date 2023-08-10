import dog from "../assets/dog-icon.png";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Welcome() {
    const navigate = useNavigate();
    let data = JSON.parse(localStorage.getItem("dataDogModels"));

    function clickButton() {
        const ok = confirm('Tem certeza que deseja sair da sua conta?');
        if (ok){
            localStorage.removeItem('dataSmartTech');
            axios.delete(`${import.meta.env.VITE_API_URL}/logout`, {headers: {Authorization: `Bearer ${data.token}`}})
                 .then(res => {
                    alert('Até a próxima!');
                    window.location.reload();
                    navigate('/');
                })
                 .catch(err => alert(err.response.data));
        }
    }

    if (!data){
        return(
            <WelcomeContainer>
                    <img src={dog} alt='cachorro' />
                    <div>
                        <p>Faça seu <span onClick={() => navigate('/signin')} className="decorate">LOGIN</span> ou</p>
                        <p>crie seu <span onClick={() => navigate('/signup')} className="decorate">CADASTRO</span></p>
                    </div>
            </WelcomeContainer>
        )
    } else{
        return(
            <WelcomeContainer onClick={() => navigate('/profile')}>
                <img src={dog} alt='cachorro' />
                <div className="bem-vindo">
                    <p> Bem-vindo(a),</p>
                    <span>{data.name.toUpperCase()}</span>
                </div>
            </WelcomeContainer>
        )
    }
} 

const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Poppins";
    font-size: 11px;
    font-weight: 500;
    color: #693606;
    cursor: pointer;
    span {
        font-weight: 600;
    }
    img{
        width: 30px;
    }
    .decorate:hover{
        text-decoration: underline;
    }
    .bem-vindo{
        display:flex;
        flex-direction: column;
        align-items: center;
    }
`