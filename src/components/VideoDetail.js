import React from 'react'


const VideoDetail= ({video}) =>{


    if(video){

    const videoEmbed=`https://www.youtube.com/embed/${video.id.videoId}`

        return(
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={videoEmbed}/>
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
    }
    return <div>Nothing To Show...</div>
}

export default VideoDetail