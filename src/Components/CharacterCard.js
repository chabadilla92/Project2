import React from 'react'

const CharacterCard = (props) => {
    // console.log("CharacterCard -", props)
    
    const loaded = () => {
    return ( 
        <div>
            <h1>{props.select.name}</h1>
            <div>{props.select.position}</div>
            <button onClick={() => props.handleClick(props.select)}>Add to my Team</button>
        </div>
        
        )
    }

    const loading = () => {
        return (<h1>Loading .. </h1>)
    }

    return props.select ? loaded() : loading()


}

export default CharacterCard 