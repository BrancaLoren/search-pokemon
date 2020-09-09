import React from "react";
import './search.scss'
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  serchItem(event) {
  }

  clickSearch(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Paper component="form" id="search-container">
        <InputBase
          className="search-input"
          placeholder={this.props.placeholder}
          inputProps={{ "aria-label": "search" }}
          onChange={(event) => this.serchItem(event)}
        />
        <IconButton type="submit" aria-label="search" id="button-container" onClick={(event) => this.clickSearch(event)}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default Search;
