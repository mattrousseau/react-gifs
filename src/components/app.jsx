import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import SearchBar from './search_bar';
import GifList from './gif_list';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: "KyAKGVqKpfNbS4V2vC",
      gifs: []
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        // rating: 'g',
        limit: 25
      }, (err, res) => {
        console.log(res.data)
        this.setState({
          gifs: res.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
