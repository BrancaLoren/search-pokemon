import React from 'react'
import './home.scss';
import Header from '../../components/header/header';
import CardProfile from '../../components/card/card';
import { initData } from './services'
import { Grid } from '@material-ui/core';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
      pokemons: []
    }
  }

  handleChange(event) {
    event.preventDefault();
    let search = event.target.value.toLowerCase();

    const results = [];
    this.state.pokemons.map(pokemon => {
      if (pokemon.name.toLowerCase().includes(search)) {
        results.push(pokemon);
      }
    });
    this.setState({ searchResults: results });
  };

  componentDidMount() {
    initData().then((data) => {
      this.setState({searchResults: data, pokemons: data})
    });
  }

  render() {

    return (
      <div className="home">
        <Header search={(event) => this.handleChange(event)}></Header>
        <Grid container className="grip-container" spacing={2}>
          <Grid item xs={'auto'} md={'auto'} sm={'auto'} >
            <Grid container justify="center">
              {this.state.searchResults.map((value, i) => (
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
