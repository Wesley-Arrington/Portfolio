import React, { Component } from 'react'
import './portfolio_header.css'

export default class PortfolioHeader extends Component {
    render() {
        return (
            <div className="portfolio-header" id={this.props.title}>
                <div className="portfolio-header-content-container">
                    <h1 className="portfolio-header-title">{this.props.title} PORTFOLIO</h1>
                    <h3 className="portfolio-header-info">
                        Below you can see some projects 
                        I've completed along with the technologies used. 
                    </h3>
                </div>
            </div>
        )
    }
}
