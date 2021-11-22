import React from 'react';
import './videos.css';

const VideoItem = (props) => {
    return (
        <div className="item video-Item" onClick={() => props.onSelectVideo(props.videoObj)}>
            <img className="ui image thumdnail" src={props.videoObj.snippet.thumbnails.medium.url} width={props.videoObj.snippet.thumbnails.medium.width} />
            <div className="content">
                <div className="header">
                    {props.videoObj.snippet.title}
                </div>
                {/* <div className="description">
                    {props.videoObj.snippet.title}
                </div> */}
            </div>
        </div >
    )
}
export default VideoItem;