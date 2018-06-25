import React, { Component } from 'react';
import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import Saved from "./components/Saved/Saved";
import API from "./utils/API";
import "./App.css";

class App extends Component {
  state = {
    search: "",
    startYear: "",
    endYear: "",
    results: [],
    saved: []
  }

  componentDidMount() {
    this.getArticles();
  };

  getArticles = () => {
    API.getSavedArticles().then((res) => {
      this.setState({ saved: res.data });
    }).catch((err) => {
      console.log(err);
    });
  };

  handleSearchInput = (event) => {
    this.setState({ search: event.target.value });
  };

  handleStartInput = (event) => {
    this.setState({ startYear: event.target.value });
  };

  handleEndInput = (event) => {
    this.setState({ endYear: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.search !== "") {
      API.getSearch(this.state.search, this.state.startYear, this.state.endYear).then((res) => {
        this.setState({ results: res.data.response.docs })
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  handleSave = (title, url, date, snippet) => {
    API.saveArticle({ title, url, date, snippet }).then((res) => {
      this.getArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  handleDelete = (id) => {
    API.deleteArticle(id).then((res) => {
      this.getArticles()
    }).catch((err) => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="container">

        <div className="jumbotron jumbotron-fluid bg-dark">
          <div className="container">
            <h1 className="display-4 text-light">The New York Times</h1>
            <p className="lead text-light">Search and save articles from the New York Times</p>
          </div>
        </div>

        <Search
          handleSubmit={this.handleSubmit}
          handleSearchInput={this.handleSearchInput}
          handleStartInput={this.handleStartInput}
          handleEndInput={this.handleEndInput}
          search={this.state.search}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
        />

        <Results
          results={this.state.results}
          handleSave={this.handleSave}
        />

        <Saved
          saved={this.state.saved}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
