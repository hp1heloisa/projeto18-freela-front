import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../components/Navbar";

export default function HomePage() {
    const navigate = useNavigate();
    let [animals, setAnimals] = useState('');
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("dataDogModels"));
        axios.get(`${import.meta.env.VITE_API_URL}/models/mine`,  {headers: {Authorization: `Bearer ${data.token}`}})
             .then(res => setAnimals(res.data))
             .catch(erro => alert(erro.response.data));
    }, []);

    console.log(animals);
    if (animals == ''){
        return(
            <>
                <NavBar />
                <ContainerGeral>
                    <AnimalsContainer>
                        Carregando...
                    </AnimalsContainer>
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
                                <AnimalContainer onClick={() => navigate(`/models/${animal.id}`)}>
                                    <div>
                                        <img src={animal.mainImage} alt='animal-photo' />
                                        <h1>{animal.name}</h1>
                                    </div>
                                    <h2>{animal.description}</h2>

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
`