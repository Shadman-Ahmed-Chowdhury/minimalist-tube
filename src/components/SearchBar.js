import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              className="form-control"
              name="search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
