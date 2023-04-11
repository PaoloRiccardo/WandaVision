import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


export const BannerCategory = () => {
 
  const [text ] = useState('');
 


  return (
    <section className="banner-category" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
           
                {/*<span className="tagline">Category Movies</span>*/}
                <h1>{`Movies, Tv-Series and V.I.P`} {text}</h1>
                  <p>Only the most popular ones will appear here. Choose from the most popular movies, TV series or show business celebrities and enjoy the result.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}