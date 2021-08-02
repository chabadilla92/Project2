import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react"
import { Route, Switch } from 'react-router';

// Pages
import Main from './Pages/Main'
import MyTeam from './Pages/MyTeam'


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

  // Add to team state and function 
  const [team, setTeam] = useState([])
  const addToTeam = (character) => {
    setTeam([...team, character])
  }
  
  useEffect(() => {getCharacter()}, [])
  
  
  const loaded = () => {
  return (
    <div className="App">
    
    <Nav />

    <Switch>
    <Route exact path="/">
    <Main characterArr={character} addToTeam={addToTeam}/>
    </Route>

    <Route path="/MyTeam">
    <MyTeam />
    </Route>
    </Switch>
    
    <Form />

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
