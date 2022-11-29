import a_culpa_e_das_estrelas from "../public/genero/a_culpa_e_das_estrelas.jpg"
import mitologia from "../public/genero/mitologia.jpg"
import olhando from "../public/genero/olhando.jpg"
import oladraoderaios from "../public/genero/oladraoderaios.jpg"
import { motion } from 'framer-motion';
import styles from './Genero.css';

function Genero() {
  return (
    <motion.div className={styles.divPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} >
      <div id="body">
        <div className="cardgenero">
          <div className="textogenero">
            <h1 className="nomegenero">Aventura</h1>
            <p className="genero">Livros do gênero aventura normalmente colocam o protagonista/herói em situações perigosas, que envolvem grandes jornadas, batalhas com inimigos ou monstros e um triunfo final, onde o protagonista consegue o que procurava.</p>
          </div>
          <div className="divImg">
            <img className="imggenero" src={oladraoderaios} alt="" />
          </div>
        </div>

        <div className="cardgenero">
          <div className="textogenero">
            <h1 className="nomegenero">Romance</h1>
            <p className="genero">Romance é a forma literária pertencente ao gênero narrativo e que apresenta uma história completa composta por enredo, temporalidade, ambientação e personagens definidos de maneira clara. É oriundo dos contos épicos e revela ações em conjunto com a distribuição de personagens ao longo da trama.</p>
          </div>
          <div className="divImg">
            <img className="imggenero" src={a_culpa_e_das_estrelas} alt="" />
          </div>
        </div>

        <div className="cardgenero">
          <div className="textogenero">
            <h1 className="nomegenero">Ficção</h1>
            <p className="genero">Ficção é o termo usado para designar uma narrativa imaginária, irreal, ou para redefinir obras (de arte) criadas a partir da imaginação. Em contraste, a não-ficção reivindica ser uma narrativa factual sobre a realidade.</p>
          </div>
          <div className="divImg">
            <img className="imggenero" src={mitologia} alt="" />
          </div>
        </div>

        <div className="cardgenero">
          <div className="textogenero">
            <h1 className="nomegenero">Suspense</h1>
            <p className="genero">As obras de suspense são aquelas que provocam a hesitação da respiração do leitor/público uma vez que seu enredo é estruturado a partir de cortes repentinos, provocadores do susto. O inesperado e a surpresa são os elementos que atestam a razão de ser do gênero, afinal, não há como estabelecer o suspense com situações esperadas ou que já foram reveladas.</p>
          </div>
          <div className="divImg">
            <img className="imggenero" src={olhando} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Genero;