import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-color">
                    <div className="header-content-container">
                        <h1 className="header-name">Wesley Arrington</h1>
                        <h2 className="header-name-desc">I'm a SF Bay Area based designer & front‑end developer focused on crafting clean  & user‑friendly experiences.</h2>
                        <div className="simple-row">
                            <a href="#WEB"><button className="header-work-button">Check Web Work</button></a>
                            <a href="#iOS"><button className="header-work-button">Check iOS Work</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
