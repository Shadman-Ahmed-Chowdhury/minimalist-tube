import React from "react";
import "./App.css";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import youtube from "../apis/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Real Madrid");
  }
  onTermSubmit = async (term) => {
    await youtube
      .get("/search", {
        params: {
          q: term,
        },
      })
      .then((response) => {
        this.setState({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
        });
        console.log(this.state.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onVideoSelect = (video) => {
    //console.log('From the App!', video.snippet.title);
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="container">
        <h1 className="m-3">Minimalist Tube</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
