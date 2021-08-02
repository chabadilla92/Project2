import React from 'react'
import AllCharacters from '../Components/AllCharacters'
import CharacterCard from '../Components/CharacterCard'


const Main = (props) => {
    // console.log('Main component -', props.characterArr)

    const [select, setSelect] = React.useState(null)
    const selectCharacter = async (character) => {
      setSelect({
            name: character.fields.character,
            position: character.fields.position

        })
    }


    return (
    <div>
        <div><AllCharacters characterArr={props.characterArr} selectCharacter={selectCharacter}/></div>
        <div><CharacterCard select = {select} handleClick={props.addToTeam}/></div>
    </div>
    )

}

export default Main 