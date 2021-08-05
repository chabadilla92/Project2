import React from 'react'

const About = () => {
    return (
        <div className="about">
            <img className="aboutImg" src="https://res.cloudinary.com/dd1i00sei/image/upload/v1628176348/League-of-Legends-Summoners-Rift-Map-with-Notations_ybtzep.jpg"></img>
            <small>Game Map</small>
            <div className="aboutText">
                <h5>ABOUT</h5>
                <div>League of Legends (LoL), commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. </div>
                <br/>
                <div>In order to play, you must select a champion and work together with your 4 teammates to destroy the enemy base.</div>
                <br/>
                <div>Each champion has a specific role to play that corresponds with their position on the map, these roles are: Top, Jungle, Middle, ADC, and Support.</div>
                <br/>
                <div>This website is meant to organize the champions in the game, designate their specific roles, and allow players to create their teams prior to starting the game.</div>
            </div>
        </div>
    )
}

export default About