import React from 'react'
import './header.scss';

import Search from '../search/search'

class Header extends React.Component {

  render() {
    return (
      <div className="header-container">
        <div className="header-big-area">
          <img className="header-img" alt="name pokemon" src="./dist/pokemon-name.png" />
        </div>
        <div className="header-small-area"></div>
        <div className="header-circle-area">
          <Search id="header-icon-search" placeholder="Search" callback={this.props.search} />
        </div>
      </div>
    );
  }

}

export default Header;