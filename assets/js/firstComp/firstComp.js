import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch',
      health: 20,
      level: 1,
      lowHealthClass: "danger-red"
    }
  }
  render () {
    return (<div id={'parent'}>
        <div className={`green-bg ${(this.state.health < 50) ?
          this.state.lowHealthClass : "" }`}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
          <img src="img/bape.png" alt={"woman with bape on"} />
        </div>
      </div>

    )
  }
}

var Header = function() {
  return (<header>
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
    </header>)
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
