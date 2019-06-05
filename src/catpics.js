import React, { Component } from 'react';
import './catpics.css'

class Catpics extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
      return (
    <div className = "catpicpage">
        <div className = "buffer"></div>
        <h1>Welcome to the Cat Gallery</h1>
        <img id = "catpic" src = "cat1.jpeg"></img>
        <img id = "catpic" src = "cat2.jpeg"></img>
        <img id = "catpic" src = "cat3.jpeg"></img>
    </div>
      )
    }
}

export default Catpics;
