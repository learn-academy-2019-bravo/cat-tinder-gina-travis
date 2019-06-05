import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

//routes
import Home from './home'
import Signin from './signin'
import Catpics from './catpics'
import Catprofile from './catprofile'
import About from './about'
import Contactus from './contactus'
import Donate from './donate'


class Routes extends Component {
  constructor(props) {
    super(props)
      this.state = {
      }

  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/catpics" component = {Catpics} />
          <Route exact path="/catprofile" component = {Catprofile} />
          <Route exact path="/about" component = {About} />
          <Route exact path="/donate" component = {Donate} />
          <Route exact path="/contactus" component = {Contactus} />
          <Route exact path="/signin_signup" component = {Signin} />

        </Switch>
      </div>
    )
  }
}

export default Routes;
