import './App.css';
import React, { useState, useEffect } from "react"
import { Route, Switch } from 'react-router';



// Pages
import Main from './Pages/Main'
import MyTeam from './Pages/MyTeam'
import About from './Pages/About'


// Components
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Form from './Components/Form'

function App() {
  // Creating state to hold the Character Data from API
  const [character, setCharacter] = useState(null)
  const url = `https://cdn.contentful.com/spaces/4mg01ki3nwhk/environments/master/entries?access_token=yJjftR-oMjy-EMJlCKBMPQSGHtDyuUktbMbFaD5gR0o&content_type=character`
  const getCharacter = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCharacter(data)
  }

  // Add/Remove to team state and function 
  const [team, setTeam] = useState([])
  const addToTeam = (character) => {
    setTeam([...team, character])
  }

  const removeFromTeam = (character) => {
    const index = team.findIndex((char) => character.id === char.id)
    const updatedArr = [...team]
    updatedArr.splice(index, 1)
    setTeam(updatedArr)
  }
  
  useEffect(() => {getCharacter()}, [])

  // Creating state to filter the Character list

  
  
  
  const loaded = () => {
  return (
    <div className="App">
      <Nav />
      <header>
        <img className="header" src="https://res.cloudinary.com/dd1i00sei/image/upload/v1628175999/League_of_Legends_Riot_t57rjq.jpg"></img>
        <div className="header2">
          <div className="text"><span>League of Legends</span> Champion Guide</div>
          <p>Search based on champion name </p>
          <p>Or Position: Top, Middle, Jungle, ADC, Support</p>
          <p>Pick a Champion and assemble your team!</p>
        </div>
      </header>

      <Switch>
        <Route exact path="/">
          <Main characterArr={character} addToTeam={addToTeam} />
        </Route>

        <Route path="/MyTeam">
          <MyTeam team={team} remove={removeFromTeam}/>
        </Route>

        <Route path="/About">
          <About />
        </Route>
      </Switch>
    
      <Footer />
    </div>
    )
  }

  const loading = () => {
    return <h1> Loading ... </h1>
  }

  return character ? loaded() : loading()
}

export default App;
