import React, { Component } from 'react'
import { Grid, Col, Image, Row } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h1>Sobre mi</h1>
            <Image src="assets/me.jpg" className="about-profile-pic"  class="img-responsive"rounded />
            <h3>Fernanda Ocaranza</h3>
            <p> Desarrolladora front end, Tejedora y topografa, he recorrido el camino del auto-aprendizaje en diversas áreas profesionales. En el área digital conseguí juntar lo que más me apasiona crear y construir nuevas soluciones para una sociedad con más igualdad.</p>
           
               <div class="container-contact">
            <button type="button" class="btn btn-link"><a href="mailto:fernanda.1991.alejandra@gmail.com" className="btn btnout">
             <i class="fas fa-envelope-square"></i>
             </a>Fernanda.1991.alejandra@gmail.com</button>
             <button type="button" class="btn btn-link"><a href="tel:+56936257353" className="btn btnout">
             <i class="fas fa-phone-alt"></i>
             </a>+56936257353</button>
            <button type="button" class="btn btn-link"><a href="assets/CV2020.pdf" download="Cv2020" className="btn btnout">
              <i class="fas fa-file-download">
              </i></a>Descargar Curriculum</button>
              </div>
            <div class="container-skill" >
            <i class="fab fa-react"></i>
            <i class="fab fa-js"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-node"></i>
            <i class="fab fa-github-square"></i>
             </div>
             </Col>
        </Grid>
      </div>
    )
  }
}
