import React from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideosList from './VideosList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { term: '', videosList: [] };

    searchResults = async (searchTerm) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videosList: response.data.items });
    }

    onSearchSubmit = (searchTerm) => {
        this.setState({ term: searchTerm });
        this.searchResults(searchTerm);
    }

    render() {
        return(
            <div className="ui grid">
                <div className="sixteen wide column">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
                <div className="right floated column">
                    <VideoPlayer />
                </div>
                <div className="right floated six wide column">
                    <VideosList videosList={this.state.videosList} />
                </div>
            </div>
        );
    }
}

export default App;