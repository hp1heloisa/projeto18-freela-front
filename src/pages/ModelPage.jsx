import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import NavBar from "../components/Navbar";

export default function ModelPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    let [animal, setAnimal] = useState('');
    let [mainPhoto, setMainPhoto] = useState('');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/models/${id}`)
             .then(res => {
                setAnimal(res.data);
                res.data.animalPhotos.forEach(photo => {
                    if (photo.id == res.data.mainPhotoId){
                        setMainPhoto(photo.urlImage);
                    }
                })
             })
             .catch(erro => alert(erro.response.data));
    }, []);

    console.log(animal);
    if (animal == ''){
        return(
            <>
                <NavBar /> 
                <ContainerGeral>
                    Carregando...
                </ContainerGeral>
            </>
        )
    } else {
        return(
            <>
                <NavBar /> 
                <ContainerGeral>
                    <div>
                        <ContainerImages>
                            <h1>{animal.name}</h1>
                            <img src={mainPhoto} alt='mainPhoto' />
                            <div className="gallery">
                                {animal.animalPhotos.map(photo => <img onClick={() => setMainPhoto(photo.urlImage)} src={photo.urlImage} alt='photo-from-gallery' />)}
                            </div>
                        </ContainerImages>
                        <ContainerInformation>
                            <div>
                                <h2>Raça:</h2>
                                <h3>{animal.breed}</h3>
                            </div>
                            <div>
                                <h2>Descrição:</h2>
                                <h3>{animal.description}</h3>
                            </div>
                            <div>
                                <h2>Informações de Contato:</h2>
                                <div>
                                    <h4><ion-icon name="paw"></ion-icon> Tutor(ra): <span>{animal.tutor}</span></h4>
                                    <h4><ion-icon name="paw"></ion-icon> Telefone:  <span>{animal.phoneNumber}</span></h4>
                                    <h4><ion-icon name="paw"></ion-icon> E-mail: <span>{animal.email}</span></h4>
                                </div>
                            </div>
                        </ContainerInformation>
                    </div>
                </ContainerGeral>
            </>
        )
    }
}

const ContainerGeral = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    font-family: 'Raleway';
    >div{
        width: calc(100% - 300px);
        height: 650px;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        background-color: #B78F4B;
        gap: 60px;
        padding-left: 40px;
        padding-right: 40px;
    }
`

const ContainerImages = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    img{
        border-radius: 4px;
    }
    >img{
       width: 500px;
       height: 400px;
       box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); 
    }
    .gallery{
        background-color: #D5B77A;
        display: flex;
        gap: 10px;
        width: 500px;
        overflow: scroll;
        border: 1px solid #D5B77A;
        border-radius: 4px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25); 
        padding: 10px;
        img{
            width: 100px;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
    h1{
        color: #F2C72E;
        font-size: 50px;
        font-weight: 600;
    }
`

const ContainerInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    h2{
        color: #F2C72E;
        font-size: 30px;
        font-weight: 600;
        line-height: 30px;
    }
    h3{
        font-size: 20px;
        font-weight: 400;
    }
    h4{
        color: #F2C72E;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        margin-left: 20px;
    }
    span{
        color: black;
        font-weight: 400;
    }
    ion-icon{ 
        font-size: 18px;
    }
`