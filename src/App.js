import React from 'react'
import './App.css'
import Characters from './components/Characters'

class App extends React.Component {

  state = {
    characters: [],
    alive: []
  }


  addToSchedule = (character) => {
    if (!this.state.alive.find(aliveCharacter => aliveCharacter === character)) {
      const updatedCharacters = this.state.characters.filter(charac => charac !== character)
      this.setState({ characters: updatedCharacters, alive: [...this.state.alive, character] })
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then(response => response.json())
      .then(characters => this.setState({ characters }))
  }

  render() {
    return (
      <div className="App">
        <h1>Git Connected</h1>
        <main>
          <section className='all-characters'>
            <h2>Events</h2>
            <Characters
              characters={this.state.characters}
              addToSchedule={this.addToSchedule}
            />
          </section>
          <div className='sorted-characters'>
            <section className='alive'>
              <h2>Schedule</h2>
              <Characters
                characters={this.state.alive}
                addToSchedule={this.addToSchedule}

              />
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default App
