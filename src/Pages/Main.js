import React from 'react'
import AllCharacters from '../Components/AllCharacters'
import CharacterCard from '../Components/CharacterCard'




const Main = (props) => {
    console.log('Main component -', props.characterArr.items)
    


    const [select, setSelect] = React.useState(null)
    const selectCharacter = async (character) => {
      setSelect({
            name: character.fields.title,
            position: character.fields.description,
            image: character.fields.file.url

        })
    }




    return (
    <div>
        <div><CharacterCard select={select} handleClick={props.addToTeam} label="Add To Team"/></div>
        <div><AllCharacters characterArr={props.characterArr} selectCharacter={selectCharacter}/></div>
    </div>
    )

}

export default Main 