import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import Spinner from './spinner'

class App extends React.Component{

    state={
        videos:[],
        currentVideo: null,
        loading:false
    }

    componentDidMount(){
        this.onTermSubmit('best music hits')
    }

    onTermSubmit= async text =>{

        this.setState({
            loading:true
        })
        
    const KEY='AIzaSyCsVEor0Xpi28aEzxwI1BLJODcw6g0OJhQ'
        const response=await youtube.get('/search',{
            params:{
                q:text,
                part: 'snippet',
                maxResults: 30,
                key: KEY
            }
        })
        this.setState({
            videos:response.data.items,
            currentVideo:response.data.items[0],
            loading:false
        })
    }

    onVideoClick= video =>{
        this.setState({
            currentVideo: video
        })
    }

    render(){
        if(this.state.loading === false){
            return(
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.currentVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoClick={this.onVideoClick}  videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return <Spinner />
    }
}

export default App