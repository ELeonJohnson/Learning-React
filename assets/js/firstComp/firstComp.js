import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Chloe',
      health: 100,
      level: 1,
      lowHealthClass: "danger-red"
    }
      this.clickedGirl = this.clickedGirl.bind(this)
  }

  clickedGirl() {
    this.setState({
      health: this.state.health -25
    }, function() {
        console.log("Chloe has been clicked. Her health is now: "
        + this.state.health);
    })
  }

  render () {
    return (<div id={'parent'}>
    <Header />
        <div className={`green-bg ${(this.state.health < 50) ?
          this.state.lowHealthClass : "" }`}>
         <div className={'user-info'}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
         </div>
         <ModelImage />
        </div>
      </div>

    )
  }
}

class ModelImage extends Component {
  constructor () {
    super()
    this.state = {

    }
}
render () {
    return (<div className="GirlImageComp">
    <img src="img/bape.png" alt={"woman with bape on"}
    onClick={this.clickedGirl}/>
    </div>)
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
