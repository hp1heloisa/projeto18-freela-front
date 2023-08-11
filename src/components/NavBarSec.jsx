import { styled } from "styled-components";
import Logo from "./Logo";
import Welcome from "./Welcome";


export default function NavBarSec() {


    return(
        <GeneralContainer>
            <Logo />
            <Welcome />
        </GeneralContainer>
    )
}

const GeneralContainer = styled.div`
    padding-left: 100px;
    padding-right: 100px;
    width: 100%;
    height: 70px;
    background-color: #F2C72E;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 10;
    >ion-icon{
        color: #693606;
        font-size: 50px;
        cursor: pointer;
    }
`
