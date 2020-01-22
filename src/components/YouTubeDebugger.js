// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            } // settings
        } // state
    }


    handleClick = () => {   
        this.setState({

            settings: {
                ...this.state.settings,
                bitrate: 12,
            } // settings
        }, () => console.log(this.state)) // setState
    } //handleClick     


    changeRes = () => {

        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            } 
        }, () => console.log(this.state))
    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleClick}>Bitrate</button>
                <button className="resolution" onClick={this.changeRes}>YouTube</button>
            </div>
        )
    }

}