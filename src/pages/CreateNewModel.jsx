import { useState } from "react";
import { styled } from "styled-components";
import NavBarSec from "../components/NavBarSec";
import border from '../assets/border.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateNewModel() {
    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [breedId, setBreedId] = useState('');
    let [mainPhoto, setMainPhoto] = useState('');
    let [photos, setPhotos] = useState([]);
    const data = JSON.parse(localStorage.getItem("dataDogModels"));
    const navigate = useNavigate();

    function addMain(){
       let main = prompt('Digite a URL da foto: ');
       setMainPhoto(main);
    }

    function addImage() {
        let main = prompt('Digite a URL da foto: ');
        if (main){
            setPhotos([...photos, main]);
        }
    }

    function remove(i) {
        let ok = confirm('Gostaria de remover essa imagem? ')
        if (ok){
            photos.splice(i,1);
            setPhotos([...photos]);
        }
    }

    function createModel(e) {
        e.preventDefault();
        const info = {name, breedId, description, mainPhoto};
        if (photos.length > 0){
            info.photos = photos;
        }
        console.log(info);
        console.log(data)
        axios.post(`${import.meta.env.VITE_API_URL}/model/new`, info, {headers: {Authorization: `Bearer ${data.token}`}})
            .then(res => {
                navigate("/profile");
            })
            .catch(erro => alert(erro.response.data));
    }

    function MainPhotoComponent() {
        if (!mainPhoto){
            return(
                <div onClick={addMain} className='sem'>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Imagem Principal</p>
                </div> 
            )
        } else {
            return(
                <img src={mainPhoto} alt="" onClick={addMain}/>
            )
        }
    }

    function GalleryImage() {
        return(
            <>
                {photos.map((photo, i)=> <img src={photo} onClick={() => remove(i)}/>)}
                <div onClick={addImage}><ion-icon name="add-circle-outline"></ion-icon></div>
            </>
        )
    }
    return(
        <>
            <NavBarSec />
            <ContainerGeral>
                <h1>Adicione seu novo Audelo:</h1>
                <EditContainer>
                    <ContainerImages>
                        <MainPhotoComponent /> 
                        <div className="gallery">
                            <GalleryImage />
                        </div>
                    </ContainerImages>
                    <form onSubmit={e => createModel(e)}>
                        <img src={border} alt="" />
                        <input placeholder="Nome do Audelo" type="text" value={name} onChange={e => setName(e.target.value)} required/>
                        <input placeholder="Raça" type="text" value={breedId} onChange={e => setBreedId(e.target.value)} required/>
                        <input placeholder="Descrição" type="text" value={description} onChange={e => setDescription(e.target.value)} required/>
                        <button type="submit">Adicionar</button>
                    </form>
                </EditContainer>

            </ContainerGeral>
        </>
    )
}

const ContainerGeral = styled.div`
    padding-top: 140px;
    padding-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    >h1{
        color: #693606;
        font-size: 35px;
        font-weight: 600;
        margin-bottom: 20px;
        margin-right: 450px;
    }
`

const ContainerImages = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 30px;
    .sem{
        width: 400px;
        height: 400px;
        border-radius: 4px;
        border: 1px solid #693606;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #693606;
        font-weight: 600;
        gap: 10px;
        cursor: pointer;
        ion-icon{
            font-size: 40px;
        }
    }
    > img{
        border-radius: 4px;
        width: 400px;
        cursor: pointer;

    }
    .gallery{
        background-color: #D5B77A;
        display: flex;
        flex: 1;
        gap: 10px;
        width: 400px;
        height: 100px;
        overflow: scroll;
        border: 1px solid #693606;
        border-radius: 4px;
        /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);  */
        padding: 10px;
        img{
            width: 100px;
            border-radius: 4px;
            cursor: pointer;
        }
        div{
            border-radius: 4px;
            border: 1px solid #693606;
            width: 100px;
            height: 80px;
            color: #693606;
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
    }
    ::-webkit-scrollbar {
        display: none;
    }
`

const EditContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    flex: 1;
    form{
        img{
            width: 100px;
        }
    }
    input{
        width: 400px;
    } 
    button{
        width: 400px;
    }
`