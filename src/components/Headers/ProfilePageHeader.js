import axios from 'axios';
import React, { Component } from 'react';
import { Container } from "reactstrap";

export default class ProfilePageHeader extends Component {


  state = {
    persons: [],
  }

  componentDidMount() {
    // const url = "https://cors-anywhere.herokuapp.com/https://warm-retreat-82659.herokuapp.com/redsocial/Persons/all";
    // axios.get(url)
    //   .then(response => {
    //     this.setState({ persons: response.data });
    //   });

    function hacer() {
      axios({
        method: 'post',
        url: `https://warm-retreat-82659.herokuapp.com/redsocial/Posts/`,
        data: {
          user: 43,
          text: 'VAMOS AHORA SI PLOX'
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      })
        .then((response) => {
          // crossorigin:true,
          console.log(response.status);
        })
        .catch((error) => {
          console.error({ error });
        });
      console.log("ahora si :(");

      // axios
      //   .get(url)
      //   .then((response) => {
      //     console.log(response.status);
      //   })
      //   .catch((error) => {
      //     console.error({ error });
      //   });
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
            {console.log(this.state.persons)}
            {this.state.persons.slice(0, 1).map(person => <h3 key="1" id="nombre" className="title">{person.name}</h3>)}
            {this.state.persons.slice(0, 1).map(person => <p key="2" id="descripcionBreve" className="category">{person.age}</p>)}
            <div className="content">
              <div className="social-description" >
                <h2>27</h2>
                <p>Comments</p>
              </div>
              <div className="social-description">
                <h2>2</h2>
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
