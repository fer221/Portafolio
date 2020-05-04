import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      
        <Grid class="hd">
          <div className="container">
            <div className="container1">
             <h3>Proyectos</h3>
              <div class="col-md-4">
              <figure class="snip1559">
                <div class="profile-image"><img src="https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                 <figcaption>
                 <h3>Top Movie </h3>
                 <p>Pagina Web que ayuda a buscar los Top 10 de la mejoras peliculas por cada genero.</p>
                  <div class="icons">
                   <button type="button" class="btn-dark"><a href="https://github.com/fer221/SCL012-proyecto-peliculas" className="btnCode">Code
                    </a></button>
                    <button type="button" class="btn-dark"><a href="" className="btnDemo">Demo
                    </a></button>
                  </div>
                </figcaption>
              </figure>
          </div>
              <div class="col-md-4">
               <figure class="snip1559">
                <div class="profile-image"><img src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                   <figcaption>
                    <h3>Burger Queen </h3>
                      <p>App que agiliza desde el pedido de comanda hasta la organización en cocina dentro de un restaurant</p>
                    <div class="icons">
                      <button type="button" class="btn-dark"><a href="https://github.com/fer221/SCL012-burger-queen" className="btnCode">Code
                      </a></button>
                      <button type="button" class="btn-dark"><a href="" className="btnDemo">Demo
                      </a></button>
                    </div>
                   </figcaption>
               </figure>
              </div>
              <div class="col-md-4">
                <figure class="snip1559">
                   <div class="profile-image"><img src="https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/></div>
                     <figcaption>
                      <h3>ApoderApi </h3>
                      <p>Red social de apoderados para todo el mundo, que ayuda a facilitar la busqueda de colegios con informacion transparente.</p>
                      <div class="icons">
                        <button type="button" class="btn-dark"><a href="https://github.com/fer221/SCL012-Social-Network" className="btnCode">Code
                         </a></button>
                        <button type="button" class="btn-dark"><a href="" className="btnDemo">Demo
                         </a></button>
                      </div>
                    </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </Grid>
    )
  }
}
