import './style.css'
import MusicaST from '../../assets/musicaST.mp3'
import CutePhoto from '../../assets/CutePhoto.png'
import Coroinhas from '../../assets/Coroinhas.jpeg'
import Buts from '../../assets/buts.jpg'

function Gallery() {
  
  return (
    <div className='container-gallery'>
      <header className='header-gallery'>
        <h2 className="moments-text">Nossos <span>Momentos</span></h2>
        <audio src={MusicaST} autoplay controls loop />
      </header>
      <main className='main-gallery'>
        <article className='thankyou'>
          <h1>Obrigado por tudo</h1>
          <h3>Eu lhe amo muito!</h3>
        </article>
        <article className="foryou">
          <h2>Isso é pra você</h2>
          <p>Esse site é um pedaço do que sinto por você</p>
          <p>É sobre como tudo ficou mais bonito, mais leve e mais verdadeiro, desde que você chegou</p>
        </article>
        <section className='gallery-pictures'>
          <article className='picture-container'>
            <img src={Coroinhas} className='img-picture'/>
            <p className="picture-description">Servindo Juntos</p>
          </article>
          <article className='picture-container'>
            <img src={CutePhoto} className='img-picture'/>
            <p className="picture-description">Nós crianças</p>
          </article>
          <article className='picture-container'>
            <img src={Buts} className='img-picture'/>
            <p className="picture-description">Com as buts</p>
          </article>
          <article className='picture-container'>
            <img src={CutePhoto} className='img-picture'/>
            <p className="picture-description">Nós crianças</p>
          </article>
          <article className='picture-container'>
            <img src={Coroinhas} className='img-picture'/>
            <p className="picture-description">Servindo Juntos</p>
          </article>
          <article className='picture-container'>
            <img src={CutePhoto} className='img-picture'/>
            <p className="picture-description">Nós crianças</p>
          </article>
          <article className='picture-container'>
            <img src={Coroinhas} className='img-picture'/>
            <p className="picture-description">Servindo Juntos</p>
          </article>
          <article className='picture-container'>
            <img src={CutePhoto} className='img-picture'/>
            <div>
              <p className="picture-description">Nós crianças</p>
            </div>
          </article>
          <article className='picture-container'>
            <img src={Coroinhas} className='img-picture'/>
            <p className="picture-description">Servindo Juntos</p>
          </article>
        </section>
        <section className='homenagem-texts'>
          <h3> <strong>Mariana,</strong></h3>
          <p>Você é a pessoa que motiva e ajuda nos meus dias difíceis, alegra nos dias leves e a que mais amo em todos eles.</p>
          <p>Amar você nesse tempo foi foi a coisa mais natural que ja vivi. Mesmo com tanta correria da nossa rotina, sempre escolhi você!</p>
          <p>Se depender de mim, vamos durar longos anos.</p>
          <h4>EU TE AMO MARIANA ALMEIDA!</h4>
          <h5>Sempre você.</h5>
          <p>Com amor,</p>
          <p> <strong>Rafael</strong></p>
        </section>
      </main>
      
      
    </div>
  )
}

export default Gallery
