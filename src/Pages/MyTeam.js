import React from 'react'
import CharacterCard from '../Components/CharacterCard'

const MyTeam = (props) => {
    return (
    <div className="container">
        {props.team.map((member) => <CharacterCard select={member} key={member.id} handleClick={props.remove} label ="Remove from Team"/>)}
    </div>
    )
  
}

export default MyTeam