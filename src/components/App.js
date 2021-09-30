import React, { Component } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log(term);
    // send the search term to Unsplash as a request for photos that match the query
    const response = await unsplash.get("/search/photos", {
      // add parameters for request
      params: { query: term },
    });

    // add the images to the state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearchSubmit} />
        Found {this.state.images.length} images.
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
