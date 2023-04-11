import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


export const BannerFind = () => {
 
  const [text ] = useState('');
 


  return (
    <section className="banner-category" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
           
                {/*<span className="tagline">Category Movies</span>*/}
                <h1>{`Find out all the details`} {text}</h1>
                  <p>
With "Vision" you will be able to discover many details about your films, TV series, or show business VIPs.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}