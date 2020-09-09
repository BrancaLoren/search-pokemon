import React from 'react'
import './home.scss';
import Header from '../../components/header/header';
import CardProfile from '../../components/card/card';

import { Grid } from '@material-ui/core';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemons: [
        {
          name: "Pikachu1",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        },
        {
          name: "Pikachu2",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        },
        {
          name: "Pikachu3",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        },
        {
          name: "Pikachu4",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        },
        {
          name: "Pikachu5",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        },
        {
          name: "Pikachu6",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
          ],
        },
        {
          name: "Pikachu7",
          img: './dist/default.png',
          abilities: [
            { "static": "exemplo de descricao 1" },
            { "lightning-rod": "exemplo de descricao 2" },
            { "lindo teste": "exemplo de descricao 3" },
          ],
        }
      ]
    }
  }

  render() {
    return (
      <div className="home">
        <Header></Header>
        <Grid container className="grip-container" spacing={2}>
          <Grid item xs={'auto'} md={'auto'} sm={'auto'} >
            <Grid container justify="center">
              {this.state.pokemons.map((value, i) => (
                <Grid key={'container-' + value.name + '-' + i} item>
                  <CardProfile name={value.name} value={value.abilities} img={value.img}></CardProfile>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default Home;
