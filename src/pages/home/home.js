import React from 'react'
import './home.scss';
import Header from '../../components/header/header';
import CardProfile from '../../components/card/card';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      abilities: ["static", "lightning-rod", "lindo teste"],
    }

  }
  render() {
    return (
      <div className="home">
        <Header></Header>
        <CardProfile value={this.state.abilities}></CardProfile>
      </div>
    );
  }

}

export default Home;
