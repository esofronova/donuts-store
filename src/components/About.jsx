import { Col, Container, Row } from 'react-bootstrap';
import './About.scss';

export default function About() {

  return (

    <div className="about py-5" id="about">
      <Container>
        <Row>
          <Col xs={12} md={6} className="p-5">
            <div>
              <h1>About <b className="text-pink">Us</b></h1>
              <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!</p>
              <button className="hovered my-3 px-3 py-2 rounded text-uppercase bg-transparent text-dark">Explore</button>
            </div>
          </Col>
          <Col xs={12} md={6} className="p-5">
            <div className="img-frame position-relative">
              <img src="https://js-beginners.github.io/filter-project/img/sweets-1.jpeg" alt="about" className="w-100 h-100 of-cover" />
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
};