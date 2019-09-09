import React, { Component } from 'react';
import './nav_bar.css';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            windowPos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = (winScroll / height)

        this.setState({
            windowPos: scrolled,
        })
    }

    render() {
        if (this.state.windowPos > 0.113) {
            return (
                <div className="nav-bar-v">
                    <div className="nav-bar-content-v">
                        <a href="#WEB"><button className="nav-bar-button-v"><b>WEB APPS</b></button></a>
                        <a href="#iOS"><button className="nav-bar-button-v"><b>iOS APPS</b></button></a>
                        <a href="#about"><button className="nav-bar-button-v"><b>ABOUT ME</b></button></a>
                        <a href="#contact"><button className="nav-bar-button-v"><b>CONTACT</b></button></a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="nav-bar">
                    <div className="nav-bar-content">
                        <a href="#WEB"><button className="nav-bar-button"><b>WEB APPS</b></button></a>
                        <a href="#iOS"><button className="nav-bar-button"><b>iOS APPS</b></button></a>
                        <a href="#about"><button className="nav-bar-button"><b>ABOUT ME</b></button></a>
                        <a href="#contact"><button className="nav-bar-button"><b>CONTACT</b></button></a>
                    </div>
                </div>
            )
        }
    }
}
