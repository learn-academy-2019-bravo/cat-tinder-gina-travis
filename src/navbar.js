import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

//routes



class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
      return (
    <div>
    <div className = "navbar">
        <nav>
            <Link to ="/">Home</Link>
            <Link to ="/catprofile">Cat Profile</Link>
            <Link to ="/catpics">Cat Pictures</Link>
            <Link to ="/about">About</Link>
            <Link to ="/contactus">Contact Us</Link>
            <Link to ="/donate">Donate</Link>
            <Link to ="/signin_signup">Sign In</Link>

        </nav>
    </div>
    </div>
      )
    }
}

export default Navbar;
