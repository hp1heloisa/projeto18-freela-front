import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../components/Navbar";

export default function HomePage() {
    const navigate = useNavigate();
    let [animals, setAnimals] = useState('');
    let [render, setRender] = useState('');
    const data = JSON.parse(localStorage.getItem("dataDogModels"));

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("dataDogModels"));
        axios.get(`${import.meta.env.VITE_API_URL}/models/mine`,  {headers: {Authorization: `Bearer ${data.token}`}})
             .then(res => setAnimals(res.data))
             .catch(erro => alert(erro.response.data));
    }, [render]);

    console.log(animals);

    function editAnimal(id, active) {
        let ok;
        if (active) {
            ok = confirm('Gostaria de desativar esse modelo?');
        } else{
            ok = confirm('Gostaria de ativar esse modelo?');
        }
        if (ok) {
            axios.put(`${import.meta.env.VITE_API_URL}/models/${id}/activation`, null, {headers: {Authorization: `Bearer ${data.token}`}})
             .then(res => setRender(res))
             .catch(erro => alert(erro.response.data));
        }
    }

    if (animals == ''){
        return(
            <>
                <NavBar />
                <ContainerGeral>
                        <div>
                            <h1>Seus modelos: </h1>
                            <ion-icon name="add-circle-outline" onClick={() => navigate(`/creation`)}></ion-icon>
                            <AnimalsContainer>
                                Carregando...
                            </AnimalsContainer>
                        </div>
                </ContainerGeral>
            </>
        )

    } else{
        return(
            <>
                <NavBar />
                <ContainerGeral>
                    <div>
                        <h1>Seus modelos: </h1>
                        <ion-icon name="add-circle-outline" onClick={() => navigate(`/creation`)}></ion-icon>
                        <AnimalsContainer>
                            {animals.map(animal => 
                                <AnimalContainer active={animal.active}>
                                    <div onClick={() => navigate(`/models/${animal.id}`)} >
                                        <img src={animal.mainImage} alt='animal-photo' />
                                        <h1>{animal.name}</h1>
                                    </div>
                                    <ion-icon name="create-outline" onClick={() => editAnimal(animal.id, animal.active)} ></ion-icon>
                                    <h2 onClick={() => navigate(`/models/${animal.id}`)} >{animal.description}</h2>

                                </AnimalContainer>
                            )}
                        </AnimalsContainer>
                    </div>
                </ContainerGeral>
            </>
        )
    }
}

const ContainerGeral = styled.div`
    font-family: 'Raleway';
    padding-top: 100px;
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    >div{
        display: flex;
        flex-direction: column;
        width: calc(100% - 580px);
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        padding: 20px;
        position: relative;
        > h1{
            color: #693606;
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        > ion-icon{
            color: #693606;
            font-size: 40px;
            position: absolute;
            right: 15px;
            cursor: pointer;
        }
    }
    ::-webkit-scrollbar {
            display: none;
    }
`

const AnimalsContainer = styled.div`
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    overflow: scroll;
    height: 600px;
`

const AnimalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    background-color: white;
    width: 150px;
    opacity: ${ (props) => (!props.active) ? 0.5 : 1};
    position: relative;
    img{
        width: 150px;
        height: 150px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    >div{
        display: flex;
        position: relative;
        h1{
            position: absolute;
            margin-top: 120px;
            margin-left: 5px;
            color: white;
            font-weight: 600;
            font-size: 20px;
        }
    }
    h2{
        margin-left: 5px;
        font-size: 15px;
    }
    ion-icon{
        position: absolute;
        right: 5px;
        top: 5px;
        font-size: 20px;
        color: white;
    }
`