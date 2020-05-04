import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (  
     <Grid>
        <Row className="show-grid text-center">
          <div class="person-wrapper">
          <Col xs={15} sm={15} className="person-wrapper">
           <figure class="snip1566">
             
             <img src="assets/me2.jpeg"alt="sq-sample14" />
             <figcaption><i class="ion-android-add"></i></figcaption>
             <a href="#"></a>
           </figure> 
            <h3> Fernanda Ocaranza </h3>
           <div className="contain-contact">
             <button type="button" class="btn btn-link"><a href="https://github.com/fer221" className="btn btnout">
             <i class="fab fa-github"></i>
             </a></button>
             <button type="button" class="btn btn-link"><a href="https://www.linkedin.com/in/fernanda-ocaranza-b4913b124/" className="btn btnout">
             <i class="fab fa-linkedin"></i>
             </a></button>

             <button type="button" class="btn btn-link"><a href="mailto:fernanda.1991.alejandra@gmail.com" className="btn btnout">
             <i class="fas fa-envelope-square"></i>
             </a></button>

             <button type="button" class="btn btn-link"><a href="tel:+56936257353" className="btn btnout">
             <i class="fas fa-phone-alt"></i>
             </a></button>
           </div>
          </Col>
          </div>
        </Row>
      </Grid>
      
    )
  }
}
