import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearchSubmit} />
      </div>
    );
  }
}

// export default App;
