import React from 'react';

const Video = (props) => {
    return(
        <div className="ui six column grid">
            <div className="column">
                <a className="image" href="#">
                    <img src={props.video.thumbnails.default.url}/>
                </a>
            </div>
            <div className="five wide column">
                <div><strong>{props.video.title}</strong></div>
                <div>{props.video.channelTitle}</div>
                <div>{props.video.publishedAt}</div>
            </div>
        </div>
    );
}

export default Video;