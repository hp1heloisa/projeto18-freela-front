import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Welcome from "./Welcome";
import SideBar from "./SideBar";
import { useState } from "react";


export default function NavBar() {
    const navigate = useNavigate();
    let [pesquisa, setPesquisa] = useState('');

    function pesquisar() {
        navigate('/search', {state: {pesquisa}});
        window.location.reload();
    }


    return(
        <GeneralContainer>
            <SideBar />
            <Logo />
            <SearchContainer>
                <input placeholder="Pesquisar" type="text" value={pesquisa} onChange={e => setPesquisa(e.target.value)}/> 
                <ion-icon name="paw" onClick={pesquisar}></ion-icon>
            </SearchContainer>
            <Welcome />
        </GeneralContainer>
    )
}

const GeneralContainer = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 70px;
    background-color: #F2C72E;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    >ion-icon{
        color: #693606;
        font-size: 50px;
        cursor: pointer;
    }
`

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    input{
        font-size: 15px;
        height: 40px;
        width: 400px;
        border: none;
        border-radius: 8px;
    }
    ion-icon{
        color: #693606;
        font-size: 20px;
        position: absolute;
        margin-left: 360px;
        transform: rotate(-45deg);
        transform-origin: center center;
        cursor: pointer;
    }
`
