import React from "react";
import './search.scss'
import { Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  serchItem(event) {
    this.props.callback(event);
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
        <IconButton type="submit" aria-label="search" id="button-container" onClick={(event) => this.props.callback(event)}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default Search;
