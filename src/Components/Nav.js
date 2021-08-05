import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const url = "https://res.cloudinary.com/dd1i00sei/image/upload/v1628034095/tlmbqdaf6x3j8fnowfex_m4kmfy.png"

    return (
    <div className="navbar">
        <Link to="/"><div className="logo"><img src={url} style={{width: 50, height:50}}/></div></Link>
        <Link to="/About" className="myteam"><div>ABOUT</div></Link>
        <Link to="/MyTeam" className="myteam1"><div>MY TEAM</div></Link>
    </div>
    )
}

export default Nav