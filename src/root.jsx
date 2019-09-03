import React, { Component } from 'react';
import NavBar from './nav_bar/nav_bar';
import Header from './headers/header';
import About from './about/about';
import PortfolioHeader from './portfolio_header/portfolio_header';
import Project from './project/project';
import Contact from './contact/contact';
import './stylesheets/reset.css';
import './stylesheets/style.css';


export default class Root extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />   
                <PortfolioHeader title={"WEB"}/> 
                <Project linkType="Live Link" linkName="https://gogo-heroku-clone.herokuapp.com/#/" title={"GoGo"} imageUrl={"computer_background_gogo.png"} description={"Description: A site which mimics Indiegogo in style and functionality. Has the ability to create campaigns and contribute to those campaigns."} technologies={"Technologies: React, Redux, Ruby, Rails 5, Ajax, CSS, Javascript"}/>
                <Project linkType="Live Link" linkName="http://multi-go.herokuapp.com/#/" title={"Multi-Go"} imageUrl={"computer_background_multi.png"} description={"Description: Go is a classic board game typically played with two players. We made an online go game where play go variations online."} technologies={"Technologies: React, Redux, MongoDB, Express, Javascript, Node"}/>
                {/* <Project linkName="Live Link" title={"EthStats (in development)"} imageUrl={"place.png"} description={"Description ......"} technologies={"Technologies ......"}/> */}
                <PortfolioHeader title={"iOS"} /> 
                <Project linkType="App Store Link" linkName="https://apps.apple.com/us/app/inscribe-widget-notes/id1204500180" title={"Inscribe - Widget Notes"} imageUrl={"portfolio_background_notes.png"} description={"Description: Inscribe has been built from the bottom up to have the best widget. Any notes above the gray bar will be shown in the widget. All the notes can be easily rearranged allowing for whichever note has top priority to be at the top in the widget."} technologies={"Technologies: Xcode, Swift, App Extensions"} />
                <Project linkType="App Store Link" linkName="https://apps.apple.com/us/app/rap-horn-sound-generator/id1144199229" title={"Rap Horn - Sound Generator"} imageUrl={"portfolio_background_rap.png"} description={"Description: Announce your arrival in style with a rap horn to let others know how cool you are. Alternatively announce your entrance to with the Epic Sax. These sound effects add vast amounts of depth to any conversation, so feel free to play them at any time. It doesn't matter if it's during a movie, a class or a moment of silence. These sound effects add to any moment so feel free to play them whenever."} technologies={"Technologies: Xcode, Swift, AVAudio"} />
                {/* <Project linkName="App Store Link" title={"QR Create - QR Generator"} imageUrl={"qr.jpg"} description={"Description ......"} technologies={"Technologies ......"} /> */}
                <About />
                <Contact />
            </div>
        )
    }
}
