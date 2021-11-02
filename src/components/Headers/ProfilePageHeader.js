import axios from 'axios';
import React, { Component } from 'react';
import { Container } from "reactstrap";

export default class ProfilePageHeader extends Component {

  state = {
    persons: [],
  }
  componentDidMount() {
    const api = `https://jsonplaceholder.typicode.com/users`;
    // const api='https://api.randomuser.me/';
    axios.get(api)
      .then(response => {
        this.setState({ persons: response.data });
        console.log(this.state.persons[0].name);
      });
    // document.querySelector("#fotoDePerfil").src="fotoPerfil.png"

   function hacer(){
        // axios.post('http://localhost:8001/redsocial/Posts/', {
        //   user: 8,
        //   text: 'hola',
        // });


        axios({
          method: 'post',
          url: 'http://127.0.0.1:8001/redsocial/Posts/',
          data: {
            user: 9,
            text: 'ya funcina plox'
          },
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            mode: 'no-cors',
          }
        });
        console.log("ya hice post AYUDA 29");

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
