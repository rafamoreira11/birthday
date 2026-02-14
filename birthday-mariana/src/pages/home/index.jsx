import './style.css'
import FlagLeft from '../../assets/flag-left.png'
import FlagRight from '../../assets/flag-right.png'
import ConfeteLeft from '../../assets/confete-left.png'
import ConfeteRight from '../../assets/confete-right.png'
import Mariana from '../../assets/princess.png'
import CutePhoto from '../../assets/CutePhoto.png'
import Musica from '../../assets/musica.mp3'
import { useNavigate } from "react-router-dom";

function Home() {
  
  const navigate = useNavigate();
  return (
    
      <div className='container-home'>
        <header>
          <img src={FlagLeft}/>
          <article className='header-title'>
            <p className="hello-title">Olá,</p>
            <h2 className="name-mariana">Mariana!</h2>
          </article>
          <img src={FlagRight}/>
        </header>
        <main>
          <img  src={Mariana} className='img-mariana'/>
          <section className='congrats-conteiner'>
            <img src={ConfeteLeft} />
            <h1 className='congrats-text'>Feliz Aniversário!</h1>
            <img src={ConfeteRight} />
          </section>
          <section className='special-day'>
            <h2 className='special-text'>É o seu dia especial!</h2>
            <p className='music-text'>Uma musica de aniversário especial para você</p>
            <audio src={Musica} controls></audio>
            <article className='special-texts-conteiner'>
              <p>Com amor</p>
              <h2>Rafael</h2>
            </article>
            <img src={CutePhoto} className='cutephoto'/>
            <a class="btn btn-primary" onClick={() => navigate("/gallery")}>Clique aqui!</a>
          </section>
        </main>
        
      </div>
  )
}

export default Home
