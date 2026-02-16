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
        <h1>Obrigado por tudo</h1>
        <h3>Eu lhe amo muito!</h3>
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
      </main>
      
      
    </div>
  )
}

export default Gallery
