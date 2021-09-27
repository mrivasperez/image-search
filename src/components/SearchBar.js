import React from "react";
import "./SearchBar.styles.css";

class SearchBar extends React.Component {
  // load state
  state = { term: "" };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form">
          <div className="field">
            <label htmlFor="Image Search">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              // when the user types a term, update the term on the state
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
