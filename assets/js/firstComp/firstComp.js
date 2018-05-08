import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Enoch'
    }
  }
  render () {
    return ( <div>
        <img src="img/bape.png" />
      </div>

    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
