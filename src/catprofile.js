import React, { Component } from 'react';

import './catprofile.css'

class Catprofile extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    previewCatPic = () => {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

    render(){

      return (
    <div className = "catprofilepage">
        <div className = "bufferdiv"></div>
        <h1>Profile Page</h1>
        <div className = "profilepicdiv">
        <div className = "buffer"></div>
            <div id = "inputs">
                <input type="file" name="catPic" id="catPic" accept="image/*" onChange={this.previewCatPic}/>
                <input type="submit" value="Submit Picture" />
            </div>

        </div>
    </div>
      )
    }
}

export default Catprofile;
