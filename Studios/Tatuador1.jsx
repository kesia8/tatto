import React from 'react'; import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './studios.css'

export default function Tatuador1() {

    return (
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h1>Tatuador 1</h1>
            <br></br>
            <br></br>

            <img className="perfil" src="https://i.pinimg.com/564x/b2/26/a8/b226a826109247573d0c5e28540dd95b.jpg"/>
      <h2>Gustavo</h2>
      <p>Gustavo de 33 anos especialista há 15 anos em realismo. Ele iniciou sua carreira artística em 2001, quando cursou desenho artístico e aerografia. Esse foi o start para que em alguns anos mais tarde entrase para o universo das tatuagens </p>


      <Carousel fade center-block>
        <Carousel.Item interval={1500}>
          <img className="d-block w-100" src="https://www.minhatatuagem.com/wp-content/uploads/2019/07/tatuagem-realista-13.jpg" alt="Image One" />
        </Carousel.Item>
        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://www.tintanapele.com/wp-content/uploads/2014/04/10-tatuagens-realistas-que-vao-agitar-o-seu-dia-02.jpg" alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://2.bp.blogspot.com/-pYo7JqLI81Q/WuJf6pUQaYI/AAAAAAAAHeo/reG4OfOe6FIkmwHpXVpnKmilPsXDgj14wCLcBGAs/s1600/Realista%2B%2B%252817%2529.jpg" alt="Image Two" />
        </Carousel.Item>

        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://3.bp.blogspot.com/-TNCNN5wOglU/WuJf58GATDI/AAAAAAAAHeg/XSWUtIylle80nHmBnnXFYZyMcrJBz_JNACLcBGAs/s1600/Realista%2B%2B%252815%2529.jpg" alt="Image Two" />
        </Carousel.Item>

        <Carousel.Item interval={500}> <img className="d-block w-100" src="https://3.bp.blogspot.com/-lSoVKjpukX8/WQZ7xjJwyFI/AAAAAAAAFYk/U1JTT8zaLBUM0S03cNwBoQ7hqxcoYrwxQCLcB/s640/desenhos%2Brealista%2B%25284%2529.jpg" alt="Image Two" />
        </Carousel.Item>
        <Carousel.Item interval={500}> <img className="d-block w-100" src="" alt="Image Two" />
        </Carousel.Item>
      </Carousel>


        </div>
    );
}
