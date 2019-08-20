import React, { Component } from 'react'
import './contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <div className="contact-content-container">
                    <h1 className="contact-title">OK, LET’S CREATE SOMETHING GREAT</h1>
                    <h3>If you like my work and have some cool 
                        project to work on, just send me direct 
                        message or contact me through social 
                        sites listed below.
                    </h3>
                    <a href="https://www.linkedin.com/in/wesley-arrington/"><button className="contact-button"><b>Get in Touch</b></button></a>
                </div>
            </div>
        )
    }
}
