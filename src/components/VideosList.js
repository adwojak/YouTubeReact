import React from 'react';
import Video from './Video';

const VideosList = (props) => {
    const videos = props.videosList.map(singleVideo => {
        return <Video key={singleVideo.id.videoId} video={singleVideo.snippet} />;
    });
    return <div>{videos}</div>;
}

export default VideosList;