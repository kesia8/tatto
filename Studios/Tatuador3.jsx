import React from 'react'; import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './studios.css'

export default function Tatuador3() {

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h1>Tatuador 3</h1>

     <br></br>
     <br></br>
      <img className="perfil" src="https://i.pinimg.com/564x/b2/26/a8/b226a826109247573d0c5e28540dd95b.jpg"/>
      <img className="perfil" src="https://api.inkclub.tattoo/Content/images/tatuadores/302_17_5_2021_eu_1_(1).jpg"></img>

<h2>Bruno</h2>
<p>27 anos, nascido em CG, sempre se interessou pelo mundo da arte, mas foi em 2015 que fez a melhor escolha de sua vida, comprou sua primeira máquina de tatuagem. Seus principais estilos de tatuagem são pontilhismo, aquarela e geométrico.</p>

<Carousel fade>
  <Carousel.Item interval={1500}> <img className="d-block w-100" src="https://tattoo.ind.br/wp-content/uploads/2022/04/familia-de-passaros.jpg" alt="Image One" />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img className="d-block w-100" src="https://tattoo.ind.br/wp-content/uploads/2022/07/aguia-e-rosa-tattoo-1024x1024.jpg" alt="Image Two" />
  </Carousel.Item>

  <Carousel.Item interval={500}>
    <img className="d-block w-100" src="https://tatuagem.org/wp-content/uploads/2019/02/tatuagens-geometricas-1.jpg" alt="Image Two" />
  </Carousel.Item>

  <Carousel.Item interval={500}> <img className="d-block w-100" src="https://tatuagem.org/wp-content/uploads/2019/02/tatuagens-geometricas-9-758x758.jpg" alt="Image Two" />
  </Carousel.Item>

  <Carousel.Item interval={500}> <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="Image Two" />
  </Carousel.Item>
</Carousel>

      </div>
  );
}
