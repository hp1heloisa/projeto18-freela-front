import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/logo.png";

export default function Logo() {

    const navigate = useNavigate();

    return(
            <LogoContainer onClick={() => navigate('/')} className="logoDiv">
                <img src={logo} alt="dog park" />
                <div>
                    <p>Dog Models</p>
                    <p>Brasil</p>
                </div>
                <img src={logo} alt="dog park" className="second"/>
            </LogoContainer>
    )
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
    }
    p{
        font-family: "Borel";
        font-size: 15px;
        color: #693606;
        line-height: 20px;
    }
    .second{
        transform: scaleX(-1);
        transform-origin: center center; 
    }
    img{
        width: 40px;
    }
`