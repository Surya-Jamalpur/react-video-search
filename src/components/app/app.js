import React from 'react';
import youtube from '../../apis/youtube'
import VideoSearchBar from "../searchBar/search";
import VideoList from '../videos/videoList';
import VideoPlayer from '../videos/videoPlayer';

import './app.css';



class App extends React.Component {
    key = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';
    state = { videos: [], selectedVideo: null }
    componentDidMount() {
        this.searchSubmit('flight');
    }
    searchSubmit = async (term) => {
        const videoResponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState(
            {
                videos: videoResponse.data.items,
                selectedVideo: videoResponse.data.items[0]
            })
    }
    onSelectVideo = (video) => {
        this.setState(
            {
                selectedVideo: video,

            }
        );
    }
    render() {
        return (
            <div className="ui container">
                <h1>Am App component..!</h1>
                <VideoSearchBar whenSearchSubmit={this.searchSubmit} />
                <div className="contentArea">
                    <div className="videoPlayer">
                        <VideoPlayer currentVideo={this.state.selectedVideo} />
                    </div>
                    <div className="videosList">
                        <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
                    </div>
                </div>

            </div>
        )
    }

}
export default App;