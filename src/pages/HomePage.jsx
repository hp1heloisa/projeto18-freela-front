import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../components/Navbar";

export default function HomePage() {
    const navigate = useNavigate();
    let [animals, setAnimals] = useState('');
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/models`)
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
`

const AnimalsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: calc(100% - 300px);
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
    width: 300px;
    img{
        width: 300px;
        height: 300px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    >div{
        display: flex;
        position: relative;
        h1{
            position: absolute;
            margin-top: 260px;
            margin-left: 10px;
            color: white;
            font-weight: 600;
            font-size: 30px;
        }
    }
    h2{
        margin-left: 10px;

    }
`