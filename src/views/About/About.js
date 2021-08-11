import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <Container fluid="true">
        <div id="about" onLoad="document.about.style.opacity='1'">
          <Jumbotron id="jumbo">
            <Header />
            <img alt="horses" src={require('../../images/horse.jpg')} />
          </Jumbotron>
          <Row id="about-first-row">
            <Col lg={{ span: 4, offset: 1 }}>
              <h1 id="about-header">A LITTLE ABOUT ME</h1>
              Something very like the war fever that occasionally runs through a civilised community
              had got into my blood, and in my heart I was not so very sorry that I had to return to
              Maybury that night. I was even afraid that that last fusillade I had heard might mean
              the extermination of our invaders from Mars. I can best express my state of mind by
              saying that I wanted to be in at the death. It was nearly eleven when I started to
              return. The night was unexpectedly dark; to me, walking out of the lighted passage of
              my cousins' house, it seemed indeed black, and it was as hot and close as the day.
              Overhead the clouds were driving fast, albeit not a breath stirred the shrubs about
              us. My cousins' man lit both lamps. Happily, I knew the road intimately. My wife stood
              in the light of the doorway, and watched me until I jumped up into the dog cart. Then
              abruptly she turned and went in, leaving my cousins side by side wishing me good hap.
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default About;
