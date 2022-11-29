import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import fotoHome from '../../../public/livrariaPrincipal.jpg';

function Home() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <div className={styles.homeDiv}>
            <Link to="/livros"><img id="imgPrin" src={fotoHome}/></Link>
            <div className='homeDiv'>
                <h1 id="sb"> Sobre Nós</h1>
                <p id='obj'>  As Livrarias virtuais tem o mesmo objetivo das livtarias físicas: dar acesso a livros para que os estudantes tenham acesso ao mundo literário, bem como a obras cuja leitura é indispensável para sua formação acadêmica, mas não só estudantes mas também os amantes de livros, livro é um meio intelecto de sair de casa sem realmente sair, é um mundo que sua mente o transporta, é cultura, é sabedoria e aprendizados.</p>
                </div>
                
            </div>

        </motion.div>

    )
}

export default Home;