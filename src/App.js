import React from 'react'
import './App.css'
import Programs from './components/Programs'

class App extends React.Component {

  state = {
    programs: [],
    schedule: [],
  }


  addToSchedule = (program) => {
    if (!this.state.schedule.find(aliveCharacter => aliveCharacter === program)) {
      const updatedSchedule = this.state.programs.filter(prog => prog !== program)
      this.setState({ programs: updatedSchedule, schedule: [...this.state.schedule, program] })
    }
  }

  componentDidMount() {
    fetch('https://breakingbadapi.com/api/programs')
      .then(response => response.json())
      .then(programs => this.setState({ programs }))
  }

  render() {
    return (
      <div className="App">
        <h1>Breaking Bad</h1>
        <main>
          <section className='all-programs'>
            <h2>All Characters</h2>
            <Programs
              programs={this.state.programs}
              addToAlive={this.addToAlive}
            />
          </section>
          <div className='sorted-programs'>
            <section className='schedule'>
              <h2> Alive</h2>
              <Programs
                programs={this.state.schedule}
                addToAlive={this.addToAlive}

              />
            </section>
            <section className='deceased'>
              <h2>Deceased</h2>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default App
