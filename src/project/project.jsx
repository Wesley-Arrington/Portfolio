import React, { Component } from 'react'
import './project.css'

export default class Project extends Component {
    render() {
        return (
            <div className="project">
                    <div className="simple-column">
                        <h1 className="project-title">{this.props.title}</h1>
                        <div className="simple-row">
                            
                            <div className="project-image-div">
                                <img src={this.props.imageUrl} alt="" className="project-image" />
                            </div>
                            <div className="project-right-side">
                                <h3>{this.props.description}</h3>
                                <h3 className="project-technologies">{this.props.technologies}</h3>
                            </div>
                        </div>
                    </div>
                <a href={this.props.linkName}>
                    <button className="project-link-button"><b>{this.props.linkType}</b></button>
                </a>
            </div>
        )
    }
}
