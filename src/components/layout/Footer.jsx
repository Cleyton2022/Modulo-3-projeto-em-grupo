import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.containerFooter}>
                <div className={styles.rowFooter}>
                    <div className={styles.footerCol}>
                        <h4>Sobre Nós</h4>
                        <ul>
                            <li> <Link to="/" className={styles.footerColLink}>Quem Somos</Link></li>
                            <li> <Link className={styles.footerColLink}>Nossa Missão</Link> </li>
                            <li> <Link className={styles.footerColLink}>Contato</Link> </li>
                            <li> <Link className={styles.footerColLink}>Nossos Parceiros</Link></li>
                        </ul>
                    </div>

                    <div className={styles.footerCol}>
                        <h4> Livros </h4>
                        <ul>
                            <li> <Link className={styles.footerColLink}>Lançamentos</Link></li>
                            <li> <Link className={styles.footerColLink}>Aventura</Link> </li>
                            <li> <Link className={styles.footerColLink}>Ficção</Link></li>
                            <li> <Link className={styles.footerColLink}>Suspense</Link> </li>
                            <li> <Link className={styles.footerColLink}>Romance</Link></li>
                        </ul>
                    </div>

                    <div className={styles.socialListDiv}>
                    <div className={styles.footerCol}>
                            <h4> Previas </h4>
                            <div className={styles.formSub}>
                                <form>
                                    <input type="email" placeholder='Digite seu e-mail e curta...' required />
                                    <button>Assinar</button>
                                </form>
                            </div>
                        </div>
                        <ul className={styles.socialList}>
                            <li>
                                <FaFacebook />
                            </li>
                            <li>
                                <FaInstagram />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyRightDiv}>
                <p className={styles.copyRight}>
                    &copy; 2022 - <span> Livraria Digital </span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;