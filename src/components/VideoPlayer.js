import React from 'react';

const VideoPlayer = (props) => {
    const videoSrc = "https://www.youtube.com/embed/dmvQaedn9PQ";
    return(
        <div className="ui embed">
            <iframe src={videoSrc} />
        </div>
    );
}

export default VideoPlayer;