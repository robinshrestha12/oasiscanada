

import React, { Component } from 'react';

const API = 'AIzaSyCtWVsvznMdqWFyjAdAwVj0cP9wPs4WgWI';
const playlistID = 'PLm1J2EyF0MNTCxp7Ko3kVZnCp4wZMUtEA';
const result=2;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&playlistItems=${playlistID}&part=snippet,id&order=date&maxResults=${result}`

export class Youtubedata extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        youtube :[]
      };
    }

    componentDidMount(){
        return fetch(finalURL)
        .then((response) =>response.json())
        .then((responseJson) =>{
            const youtube = responseJson.items.map(obj=>"https://www.youtube.com/embed/"+obj.id.videoId);
            this.setState({youtube});
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  render() {
      console.log(this.state.youtube)
    return(
      <div>
          {this.state.youtube.map((data, i)=>{
            var frame = <iframe key={i} width="560" height="315" src={data} frameBorder="0" allowFullScreen></iframe>
             return frame
          })}
        {/* {this.frame} */}
      </div>
    )
  }
}

export default Youtubedata;
