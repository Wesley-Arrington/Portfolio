import React, { Component } from 'react'
import './project.css'

export default class Project extends Component {
    render() {
        return (

            <div className="project">
                
                <div className="desc-image-div">
                    <div className="project-image-div">
                        <img src={this.props.imageUrl} alt="" className="project-image" />
                    </div>
                    <div className="project-text-container-div">
                        <h1 className="project-title">{this.props.title}</h1>
                        <h3 className="project-description">{this.props.description}</h3>
                        <h3 className="project-technologies">{this.props.technologies}</h3>
                        <div className="button-container-div">
                            <a href={this.props.linkName}>
                                <button className="project-link-button"><b>{this.props.linkType}</b></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="project">
            //         <div className="simple-column">
                        
            //             <div className="simple-row">
            //                 <div className="project-right-side">
            //                     <h1 className="project-title">{this.props.title}</h1>
            //                     <div className="project-text-container-div">
            //                         <h3 className="project-description">{this.props.description}</h3>
            //                         <h3 className="project-technologies">{this.props.technologies}</h3>
            //                     </div>
            //                     <div className="button-container-div">
            //                         <a href={this.props.linkName}>
            //                             <button className="project-link-button"><b>{this.props.linkType}</b></button>
            //                         </a>
            //                     </div>
            //                 </div>
            //                 <div className="project-image-div">
            //                     <img src={this.props.imageUrl} alt="" className="project-image" />
            //                 </div>
                            
            //             </div>
            //         </div>
                
            // </div>
        )
    }
}
