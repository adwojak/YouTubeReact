import React from 'react';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideosList from './VideosList';
import youtube from '../api/youtube';

class App extends React.Component {
    state = { term: '', videosList: [], xx: []};

    searchResults = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videosList: response.data.items, xx: response });
    }

    onSearchSubmit = (term) => {
        this.setState({ term: 'zxcxzc' });
        this.searchResults(term);
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
                    <VideosList videosList={this.state.videosList} videoajdi={this.state.xx}/>
                </div>
            </div>
        );
    }
}

export default App;