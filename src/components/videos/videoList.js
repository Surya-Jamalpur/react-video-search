import React from 'react';
import VideoItem from './videoItem'

// class VideoList extends React.Component {

//     render() {
//         return (
//             this.props.videos.map(video => {
//                 return <VideoItem videoObj={video} key={video.id.videoId} />
//             })
//         )
//     }
// } 

//bothe ways works exacty same, so commented the class based

const VideoList = ({ videos, onSelectVideo }) => { // destructured props obj
    const listOfVideoItems = videos.map(video => {
        return (
            <div className="ui list">
                <VideoItem key={video.id.videoId} videoObj={video} onSelectVideo={onSelectVideo} />
            </div>
        )
    })
    return <div> {listOfVideoItems}</div>
}
export default VideoList;