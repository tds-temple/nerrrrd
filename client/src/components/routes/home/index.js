//NPM
import React, { Component } from 'react'

//Components
import Demo from '../../demo'

//CSS
import './home.css'

//Assets
import logo from '../../../assets/logo.svg'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React, Nerrrrd!</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/components/routes/home/index.js</code> and save to reload.
        </p>
        <br/>
        <Demo/>
      </div>
    );
  }
}

export default Home