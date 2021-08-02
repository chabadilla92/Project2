import React from 'react'

const AllCharacters = (props) => {
    // console.log('AllCharacters component-', props.characterArr.items[0].fields.character)
    
    // includes contains image url
    // items contains name and position
    
    
    return (
    <div>
        
        
        {props.characterArr.items.map((character) => {
            console.log('Map-', character.fields.character)

            return (
                <div>
                <h1 onClick={() => props.selectCharacter(character)}> {character.fields.character}</h1>
                <div>{character.fields.position}</div>

                </div>
            )
        })}

        {/* {props.characterArr.includes.Asset.map((image) => {
            console.log('Map image-', image.fields.file.url)
                return (
                    <img src={image.fields.file.url}/>
                )
        })} */}

        
        
    </div>
    )
}

export default AllCharacters