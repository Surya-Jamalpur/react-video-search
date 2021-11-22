import React from 'react';

// class VideoPlayer extends React.Component {

//     render() {
//         return (
//             <h1>{props.currentVideo.title}</h1>
//         )
//     }
// }
const VideoPlayer = ({ currentVideo }) => {
    console.log(currentVideo);

    if (!currentVideo) {
        return (
            <h3>Loading...</h3>
        )
    }
    const vSrc = `https://www.youtube.com/embed/${currentVideo.id.videoId}`
    return (
        <div>
            <iframe
                width="100%"
                height="400px"
                src={vSrc}
                title="YouTube video player"
            >
            </iframe>
            <h1>{currentVideo.snippet.title}</h1>
        </div>


    )
}
export default VideoPlayer;