import React from 'react'; import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './studios.css'

export default function Tatuador2() {

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h1>Tatuador 2</h1>
      <br></br>
      <br></br>
      <img className="perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN85saekmxfmyFaFGcGK0karjAaEQidtUIfg&usqp=CAU"/>
      <h2>Gabi</h2>
      <p>Gabi sempre demonstrou habilidades com arte e apreço por tatuagens, fez sua primeira tattoo aos 18 anos, desde então seu interesse por este universo cresceu cada vez mais. Com ideias e princípios underground e alternativas, foi conquistando seu espaço com seu estilo próprio de tatuagens, sendo elas oriental, old school etc.</p>

      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src="https://i.pinimg.com/736x/31/fe/a2/31fea2d43167104ac3d90a8445be48a6.jpg" alt="Image One" />
        </Carousel.Item> <Carousel.Item interval={500}> <img className="d-block w-100" src="https://studioxiii.tattoo/wp-content/uploads/2019/05/58410348_738539096540754_2893857712239066425_n-1.jpg" alt="Image Two" />
        </Carousel.Item>

        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://scontent-gru2-1.xx.fbcdn.net/v/t1.6435-9/70303915_2878216722248409_2632868897237237760_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=111&ccb=1-7&_nc_sid=110474&_nc_ohc=XDGlZGGhHEIAX_Qi6c5&_nc_ht=scontent-gru2-1.xx&oh=00_AfCu_Ni2yK3YhdC4jaFGQ5HLq2fqbSUaf8lxr-XsmUYoLQ&oe=639EFF9B" alt="Image Two" />
        </Carousel.Item>

        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://www.minhatatuagem.com/wp-content/uploads/2020/01/tatuagem-oldschool-39.jpg" alt="Image Two" />
        </Carousel.Item>

        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://www.dicasdemulher.com.br/wp-content/uploads/2019/09/tatuagem-na-canela-56.jpg" alt="Image Two" />
        </Carousel.Item>
      </Carousel>

      </div>
  );
}
