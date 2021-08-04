import React from 'react'
import Form from './Form'



const AllCharacters = (props) => {
  const [list, setList] = React.useState(props.characterArr.includes.Asset)

  const getList = (search) => {
    if (search === "") {
      setList(props.characterArr.includes.Asset)
    } else {
      let newList = props.characterArr.includes.Asset.filter((x) => x.fields.title === search || x.fields.description === search)
      setList(newList)
    }
  }

    return (
    <div>
        <Form search={getList}/>
        <div className="container" >
        {list.map((character) => {
            return (
                
                    <div className="cards" onClick={() => props.selectCharacter(character)}>
                        <img onClick={() => props.selectCharacter(character)} className="allImg" src={character.fields.file.url} style={{height: 100, width: 100}}/>
                        <h1 onClick={() => props.selectCharacter(character)}> {character.fields.title}</h1>
                        {/* <div>{character.fields.description}</div> */}
                        </div>

            )
        })}
        </div>
    </div>
    )
}

export default AllCharacters