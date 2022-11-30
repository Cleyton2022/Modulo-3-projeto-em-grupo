import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import logoCinema from '../../../public/logoLadoC.jpg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/"> <img src={logoCinema} id={styles.logoCinema}/>
        </Link>
        <ul className={styles.listNav}>
          <li className={styles.item}><Link to="/livros">Livros</Link></li>
          <li className={styles.item}><Link to="/genero">Gêneros</Link></li>
          <li className={styles.item}><Link to="/buscas">Buscas</Link></li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar;