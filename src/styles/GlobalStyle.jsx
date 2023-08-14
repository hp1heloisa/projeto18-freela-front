import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }

    html, body {
        background-color: #D5B77A;
    }

    input{
        padding: 15px;
    }
    
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #693606;;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: calc(100% - 300px);
        padding: 12px;
        :hover{
            box-shadow: 1px 5px 10px grey;
        }
    }
    input {
        font-size: 20px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        width: calc(100% - 300px);
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    } 
`

export default GlobalStyle