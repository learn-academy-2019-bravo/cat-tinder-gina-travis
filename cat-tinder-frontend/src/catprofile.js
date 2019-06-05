import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div className = "header">
            <div className = "buffer"></div>
            <div className = "profilepicdiv">
                <div id = "inputs">
                    <input type="file" name="catPic" id="catPic" accept="image/*" onChange={this.previewCatPic}/>
                    <input type="submit" value="Submit Picture" />
                </div>
            </div>
            <h1>Username Here</h1>
            <div className = "blank"></div>
            <div className = "buttons">
                <button>We don't</button>
                <button>Do anything</button>
            </div>
        </div>

        <div className = "info">
            <h2> About Username</h2>
            <div className = "about">
                <h3>Bio:</h3>
                <p>insert bio here....sekhjbesvbevssev ev l vekje vkqeoieowi e qei oqei oiqev o evobqlie lqqinlj kj foweufewekj weiwe ej wfj wfklje fgjl wej wej  woue flw efkjjwekj ejj wkelkj qkebbwckj k i</p>
            </div>
            <hr/>
            <label id = "boldme">DOB: </label>
            <label> 03/24/1992</label>
            <br/>

            <label id = "boldme">Location: </label>
            <label> San Diego, CA</label>
            <br/>

            <label id = "boldme">Gender:</label>
            <label> Male</label>
        </div>

        <div className = "photos">
            <hr/>
            <h3>Photos</h3>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
        </div>
        <div className = "friends">
            <hr/>
            <h3>Friends</h3>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
            <img src = ""></img>
        </div>
        <div className = "body">
            <div className = "post">
                <h3>POST Something</h3>
                <textarea placeholder = "Tell me about your day"></textarea>
                <br/>
                <button>Submit</button>
            </div>
            <div className = "feed">
                <h3>Feed:</h3>
            </div>
        </div>
        <div className = 'im'>
            <h3>Message a Friend</h3>
            <div><img src = "cat1.jpeg"></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = "cat2.jpeg"></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = "cat3.jpeg"></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
            <div><img src = ""></img><Link to = '/catprofile/1'>Username</Link></div>
        </div>

    </div>
      )
    }
}

export default Catprofile;
