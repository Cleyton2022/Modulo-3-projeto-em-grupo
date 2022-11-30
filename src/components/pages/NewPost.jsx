import styles from './NewPost.css';
import {useNavigate} from 'react-router-dom';
import livrariaDigita from '../configAxios';
import { useState } from 'react';

const NewPost = () => {
    const navigate = useNavigate();
    const [Nome,setNome] = useState();
    const [Genero,setGenero] = useState();
    const createPost = async (e) => {
        e.preventDefault();
        const post = {Nome,Genero};
        await livrariaDigita.post("/livros/", post);

    }
    const [BodyRota, setBodyRota] = useState();
    const editaPost = async (e) => {
        e.preventDefault();
        const editaPost = {Nome,Genero};
        const bodyRotaId = BodyRota;
        await livrariaDigita.put("/livros/" + bodyRotaId, editaPost);
    }

    const deletaPost = async (e) => {
        e.preventDefault();
        const bodyRotaId = BodyRota;
        await livrariaDigita.delete("/livros/" + bodyRotaId); 
    }
    return <div className="newPost">
        <h2>Livraria Digital</h2>
        <form>
            <div className="formControl">
                <label htmlFor="Nome">Nome:</label>
                <input type="text" name="Nome" placeholder="Digite o nome do livro" required id="nomeLivro" onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="Genero">Genero:</label>
                <textarea name="genero" id="genero" placeholder="Digite o genero" required onChange={(e) => setGenero(e.target.value)}></textarea>
                <button value="Criar Post" className='butao' onClick={(e) => createPost(e)}>Enviar Livro</button>
                <input type="number" name="idBodyRota" id="idBodyRota" required placeholder="Digite o id do seu livro!" onChange={(e) => setBodyRota(e.target.value)}></input>
            <button value="Atualiza Post" className='butao2' onClick={(e) => editaPost(e)}>Editar Livro</button>
            <button value="Deleta Post" className='butao3' onClick={(e) => deletaPost(e)}>Deletar Livro</button>
            </div>
        </form>
    </div>
}

export default NewPost;