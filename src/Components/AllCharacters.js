import React from 'react'
import Form from './Form'



const AllCharacters = (props) => {
    const [list, setList] = React.useState(props.characterArr.includes.Asset)

  const getList = (search) => {
    if (search === "") {
      setList(props.characterArr.includes.Asset)
    } else {
      let newList = props.characterArr.includes.Asset.filter((x) => x.fields.character === search || x.fields.description === search)
      setList(newList)
    }
  }

    return (

    
    <div>
        <Form search={getList}/>
        {list.map((character) => {
            return (
                <div className="container">
                <h1 onClick={() => props.selectCharacter(character)}> {character.fields.title}</h1>
                <img src={character.fields.file.url}/>
                <div>{character.fields.description}</div>
                <hr/>
                </div>
            )
        })}

{/* TO DO: need to add image to the AllCharacters list  */}
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