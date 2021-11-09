import React from 'react';
import youtube from '../../apis/youtube'
import VideoSearchBar from "../searchBar/search";
import VideoList from '../videos/videoList'



class App extends React.Component {
    key = 'AIzaSyDuap_736-w7Kwx5o23MOQyhoFPilPQ7zQ';
    state = { videos: [] }
    searchSubmit = async (term) => {
        console.log(term);
        const videoResponse = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(videoResponse.data.items);
        this.setState({ videos: videoResponse.data.items })
    }
    render() {
        return (
            <div>
                <h1>Am App component..!</h1>
                <VideoSearchBar whenSearchSubmit={this.searchSubmit} />
                I found {this.state.videos.length} Videos.
                <VideoList videos={this.state.videos} />
            </div>
        )
    }

}
export default App;