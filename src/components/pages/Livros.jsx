import { motion } from 'framer-motion';
import styles from './Livros.css';
import * as bootstrap from 'bootstrap';

function Livros() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <main>
        
        <section id="dsmovie-card-list" className="container">
            <div id="row">

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://tocalivros.s3.amazonaws.com/images/audiolivros/350/a/-/a-odisseia-homero-1048714.jpg"
                            alt=" Odisseia, Homero" />
                        <div className="dsmovie-card-description">
                            <h3> A Odisseia</h3>
                            <p>Odisseia é um dos dois principais poemas épicos da Grécia Antiga, atribuídos a Homero. É uma sequência da Ilíada, outra obra creditada ao autor, e é um poema fundamental no cânone ocidental. Historicamente, é a segunda — a primeira sendo a própria Ilíada — obra da literatura ocidental.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autor: Homero</h4>
                                <h5>Gênero: Poesia épica, Épico</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://m.media-amazon.com/images/I/518mqZ7A31L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
                            alt="Harry Potter e a Pedra Filosofal (J.K. Rowling)" />
                        <div className="dsmovie-card-description">
                            <h3>Harry Potter e a Pedra Filosofal</h3>
                            <p>É o primeiro volume da série Harry Potter, da britânica J. K. Rowling. O livro narra a história de um garoto órfão que vive infeliz com seus tios. Até que, repentinamente, ele recebe uma carta contendo um convite para ingressar em uma famosa escola especializada em formar jovens bruxos. Estima-se que tenha vendido entre 850 e 950 milhões de cópias, desde 1997, quando foi publicado.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autora: J.K. Rowling</h4>
                                <h5>Gênero: Romance, Literatura infantil, Literatura fantástica, Alta fantasia, Ficção de aventura, Fantasia contemporânea</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg"
                            alt="Dom Quixote (Miguel de Cervantes)" />
                        <div className="dsmovie-card-description">
                            <h3>Dom Quixote</h3>
                            <p>Publicado em Madrid em 1605, “Dom Quixote”, de Miguel de Cervantes, é composto de 126 capítulos, divididos em duas partes. O livro narra a história de Dom Quixote de La Mancha, um cavaleiro errante que perdeu a razão e, junto com seu fiel escudeiro Sancho Pança, vive lutas imaginárias. Estima-se que tenha vendido entre 600 e 630 milhões de cópias.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autor: Miguel de Cervantes</h4>
                                <h5>Gênero: Sátira, Paródia, Romance picaresco, Farsa, Ficção de aventura, Romance psicológico</h5>
                            </div>
                        </div>
                    </div>
                </div>

            

               

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://books.google.com.br/books/publisher/content?id=hsCCEAAAQBAJ&hl=pt-BR&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1Ohfvg80F_UcJsyGK-Mob0bCgCsg&w=1280" 
                             alt="O Pequeno Príncipe (Antoine de Saint-Exupéry)" />
                        <div className="dsmovie-card-description">
                            <h3>O Pequeno Príncipe</h3>
                            <p>Le Petit Prince é uma novela do escritor, aviador aristocrata francês Antoine de Saint-Exupéry, originalmente publicada em inglês e francês em abril de 1943 nos Estados Unidos. Durante a Segunda Guerra Mundial, Saint-Exupéry foi exilado para a América do Norte.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autor: Antoine de Saint-Exupéry</h4>
                                <h5>Gênero: Conto de fadas, Literatura infantil, Fábula, Novela, Literatura fantástica, Ficção especulativa</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://m.media-amazon.com/images/I/71ZLavBjpRL.jpg"
                            alt="O Senhor dos Anéis (J.R.R. Tolkien)" />
                        <div className="dsmovie-card-description">
                            <h3>O Senhor dos Anéis</h3>
                            <p>O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autor: J.R.R. Tolkien</h4>
                                <h5>Gênero: Literatura fantástica, Quadrinhos, Ficção científica, Fantasia heroica, Alta fantasia</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-4 col-x1-3 mb-3">
                    <div className="dsmovie-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAZ_9qzWFq_4o3PQFMrWsspRhwZu5yoQ71l9chwa_dIyYpp7qn"
                            alt="Cinquenta Tons de Cinza (E. L. James)" />
                        <div className="dsmovie-card-description">
                            <h3>Cinquenta Tons de Cinza</h3>
                            <p>Fifty Shades of Grey é um romance erótico bestseller da autora inglesa Erika Leonard James publicado em 2011. O primeiro livro de uma trilogia que está sendo tratado como o "pornô das mamães" vendeu mais de dez milhões de livros nas seis primeiras semanas.</p>
                            <div className="dsmovie-card-description-bottom">
                                <h4>Autor: E. L. James</h4>
                                <h5>Gênero: Ficção erótica</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
        </motion.div>
    )
}
export default Livros;