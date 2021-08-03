import React from 'react'

const CharacterCard = (props) => {
    // console.log("CharacterCard -", props)
    
    // TO DO: need to add image down below 
    const loaded = () => {
    return ( 
        <div>
            <h1>{props.select.name}</h1>
            <div>{props.select.position}</div>
            <div><img src={props.select.image}/></div>
            <button onClick={() => props.handleClick(props.select)}>{props.label}</button>
        </div>
        
        )
    }

    const loading = () => {
        return (<h1>Select a Champion! </h1>)
    }

    return props.select ? loaded() : loading()


}

export default CharacterCard 