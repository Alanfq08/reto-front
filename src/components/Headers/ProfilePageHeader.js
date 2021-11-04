import axios from 'axios';
import React, { Component } from 'react';
import { Container } from "reactstrap";

export default class ProfilePageHeader extends Component {


  state = {
    persons: [],
  }

  componentDidMount() {
    function hacer() {
      axios({
        method: 'post',
        url: `https://warm-retreat-82659.herokuapp.com/redsocial/Posts/`,
        withCredentials: false,
        data: {
          user: 9,
          text: 'ya funcina plox'
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
      console.log("ahora si");
    };
    hacer();
  }

  render() {
    return (
      <>
        <div
          className="page-header clear-filter page-header-small"
          filter-color="blue"
        >
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bg5.jpg").default + ")",
            }}

          ></div>
          <Container>
            <div className="photo-container">
              <img id="fotoDePerfil" alt="Cargando..." src="/fotoPerfil.png"></img>
            </div>
            {this.state.persons.slice(0, 1).map(person => <h3 id="nombre" className="title" key={person.id}>{person.name}</h3>)}
            <p id="descripcionBreve" className="category">Cargando...</p>
            <div className="content">
              <div className="social-description" >
                <h2>26</h2>
                <p>Comments</p>
              </div>
              <div className="social-description">
                <h2>26</h2>
                <p>Comments</p>
              </div>
              <div className="social-description">
                <h2>48</h2>
                <p>Bookmarks</p>
              </div>
            </div>
          </Container>
        </div>
      </>
    )
  }
}
