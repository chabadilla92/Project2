import React from 'react'

const CharacterCard = (props) => {
    // console.log("CharacterCard -", props)

    const loaded = () => {
    return ( 
        <div className="characterCard">
            <div className="cardImg"><img className="cardImg2" src={props.select.image} style={{height: 100, width: 100}}/></div>
            <h1 className="cardName">{props.select.name}</h1>
            <div className="position">{props.select.position}</div>
            <button onClick={() => props.handleClick(props.select)}>{props.label}</button>
        </div>
        
        )
    }

    const loading = () => {
        return (
        <div className="characterCard">
        <div className="cardImg"><img className="cardImg3" src={"https://res.cloudinary.com/dd1i00sei/image/upload/v1628098514/908f95127caf7f739877f9f555807361_ab9avo.png"}/></div>
        <h1 className="cardName2">Select a Champion </h1>
        </div>
        )
    }

    return props.select ? loaded() : loading()


}

export default CharacterCard 