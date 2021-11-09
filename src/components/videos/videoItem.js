import React from 'react';

const VideoItem = (props) => {

    return (
        <div>
            Video Name:{props.videoObj.snippet.channelTitle}
        </div>
    )
}
export default VideoItem;