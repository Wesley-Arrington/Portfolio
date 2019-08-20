import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about-color">
                    <div className="about-content-container">
                        <h1 className="about-me-title">ABOUT ME</h1>
                        <p>
                            I'm a designer & front-end developer early in my career. I'm interested in all kinds of visual communication, 
                            but my major focus is on designing and building web, mobile & tablet interfaces. 
                            {/* I also have skills in other fields like blockchain technology specifically Ethereum. */}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
