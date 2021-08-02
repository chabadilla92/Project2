import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
    <div className="navbar">
    <Link to="/"><div>Pro Guides</div></Link>
    <Link to="/MyTeam"><div>My Team</div></Link>
    </div>
    )
}

export default Nav