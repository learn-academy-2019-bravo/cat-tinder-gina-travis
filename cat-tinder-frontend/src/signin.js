import React, { Component } from 'react';
import './signin.css'

class Signin extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
      return (
    <div>

    <div className = "bufferdiv"></div>
        <section className = "container">



          <div className = "item-a">
            <div className="bootstrap-iso">
                <div className="jumbotron">
                    <h2 id = "h1div">New to Cat Tinder?</h2>
                    <p id = "h1div"> Please Sign Up!!! </p>
                    <div className = "catdiv">
                        <img id = "cat_cartoon" />
                    </div>
                </div>
            </div>
          </div>

          <div className = "item-b">

            <h1>Please SIGN UP Here!!!</h1>
            <form>
                <label>UserName:</label>
                <input placeholder = "CatLover36"></input>
                <br/>
                <label>Name:</label>
                <input placeholder = "Mittens"></input>
                <br/>
                <label>Age:</label>
                <input placeholder = "2"></input>
                <br/>
                <label>Password:</label>
                <input placeholder = "Enter Password"></input>
                <br/>
                <label>Confirm Password:</label>
                <input placeholder = "Re-Enter Password"></input>
                <br/>

                <input type = "submit" value = "CLICK HERE!!!!"></input>
            </form>
            <h1>Welcome Back please SIGN IN Here!!!</h1>
            <form>
                <label>UserName:</label>
                <input placeholder = "CatLover35"></input>
                <br/>

                <label>Password:</label>
                <input placeholder = "Click Here"></input>
                <br/>

                <input type = "submit" value = "CLICK HERE!!!!"></input>
            </form>
          </div>
          <div className = "item-c">
                <h2>Check Out Cats in Your Area</h2>
          </div>
          <div className = "item-d">

          <img id = "catpic" src = "cat1.jpeg"></img>
          <img id = "catpic" src = "cat2.jpeg"></img>
          <img id = "catpic" src = "cat3.jpeg"></img>

          </div>
          <div className = "item-e">
          <h2>Ad:</h2>
            <a href = "https://www.purina.com/cats/cat-food?utm_campaign=cpr-branded2019&utm_medium=cpc&utm_source=google&utm_content=cat-unknown-unknown-feeding&utm_term=purina%20cat%20food&ds_rl=1265042&ds_rl=1265042&gclid=Cj0KCQjwrdjnBRDXARIsAEcE5YlvQ5Kvz3vidoTIgfpJPxu-7D1EZm5PCrcdC7b400SkTr6GvBmW9n0aAq6gEALw_wcB&gclsrc=aw.ds"><img id = "catad" src = "catad.jpeg"></img></a>
          </div>

          <div className = "item-f">
            <p> ©2019 Cat Tinder</p>
            <h6>Relavant Pages:</h6>
            <a href="https://www.facebook.com/travis841235"><img id= "ico" src="https://banner2.kisspng.com/20180320/jcw/kisspng-united-states-logo-computer-icons-facebook-fb-ico-5ab08a00b54e95.9328859015215191047426.jpg" alt=""/></a>
            <a href="https://github.com/Travi5JAB"><img id="ico" src="data:image/png;base64,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" alt=""/></a>
            <a href="https://twitter.com/travi5j"><img id="ico"src="http://socialbarrel.com/wp-content/uploads/2018/12/Twitter.png" alt=""/></a>
            <a href="https://www.linkedin.com/in/travis-baker-3b64a9186/"><img id="ico" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAe7X///8AcbDi6/MAd7N9rM4Ac7G70eStyN/I2ukAebQAdbIAcLDY6fLM4e5QmsXn8ve10+U5j7/0+vx2qc2Cs9Ntq88Af7idw9uly+EgiLxvpMpTnsg4k8JEk8Lq8/i92uqev9qNu9jR4+6uy+CZvNh4sNGvyuCIstJinceTuNUxir3eoYF2AAAEwklEQVR4nO2dbXfiKhRGARk6gjEvjho1tzq215lO////u1FrrTZQOwsP9dxnf+kHk7WyCxxIOICQB7K6mU8FC+ZNnb16iZe/ZaWcTv1k0dBOVeWJYZErm/qpImNVXhwNh4JP8R3RYngwHA64FeAeOxjuDQvBU7BVFMXOMOdYRffofGtYqtTPcUVU2RpWfIuwraeVFBnnImwLMRO1S/0QV8XVouFcSdtY04h56me4MnPBZLANAAAAAAAAAAAAAAAAAID/NVYbpQbKOKZpANboRT3sFVm5rgYM5yCtmc5e86pkb2K4laN1a3lCdm9SP1NU7D7b6IQNp3wAa7N3glKO+Sha974EtyzYZASYdaegHM25hJtpt6CUJZNoY2Y+Q8mjEK0deQ1rFoWon7yCsmARTl3tN5Qs0o/UKmCYc2iIqqu3P/CDQ5eoegHDbxwMzUPAkMWwxvm7QykrDu3Qjf2CI83B0FZ+wxWLHj8UTCccmmFoUFPwKMJAIbKIpFu0pyUyaYVb3KRLMOMQRw+YTYfglJOhMPnyTLDktgDOTU+GNsWCTxt8xYh1tn/bH62aAZcoeopT03zx46nSiqffDq21tcwaIADgK2CUn9Og6gJXns0aW9sGLWdecNsARqh0ivnV9zJ8eqvo/viv7P8+KlrrjHjOJ+P68a795a6crSf5szWp9um4/FubuQtc+eswCGpNmvVDcT5VMCr66/s0+QGRDL/vDbWqHv3zIEU9TZAgENPQmqp7svVI+Uw+4o1pqENzIAdq6o1XIhrqjwpwT1HRNsdohtaEZkBOmJDW1GiGpgz8fMaaUjGW4aC5XFDKMaFiNMOL6+iOhq4txjLMPyVImQURybD+RCvc8UCW5BnL0D+S8bChqqeRDC/rCt8yonrdiGT4F1Bl66QzpJp/TWcoNzQD1ISGGU01TWgo70kKMaUhTaxJaZiRdIkpDeUzRTRNakiS7JHUsKSopkkNSfqLpIaSYliT1vAfgoaY1nBM0BCjGy5Xs/pnPVsVl1w8I2iIcQ2z8Xy7RtM5YwbTzccvjSuC1QAxDZcL8zZ0OJV/9HmqGNyU4fuN0rX+6PPNTdXSzo3SB4/hmwi2W41muOxMhLMffEclyCSPZjjpDvyhLOuW5nYMe74WZUKLcijWrMQyXPv6bh2c0CDo8mMZ+r/ST88zOy/6x3w5w5G/YwuuyiHYYD3WN29/xxZYpNoO227GMLBm+Hw3g0vv+2KGjwHDb4H7CBYExM4Yeo8OGl5/6B03Y+jThkP2hg83U0v/1pDgwJHEhj0YwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjBMYhhYb5Ha0PR7XpaLt8u13Hf/lb1//avs7GLpv69PsEw2tI/w6Xq00D7CoWWENnAfw/37AQAAAAAAAAAAAAAAAAAAAAAAgCPz1A9wZeaiYXz0u9juSiwItq1NiasFwVaLKVGZoNjlPB26kkKWnAvRlK2hzPnGGp3LrWEhuNZTK4qdYfcxDAywg+2hJ1vDjqM0OKDF7lSXnaEscsWtGLXJ92fziJfM1LJSjk9Baqeqw3ku4jX7NqsbLmPUeVMfTzr5D3pkWtnuvn/IAAAAAElFTkSuQmCC"
                alt=""/></a>
            <a href="#"><img id="ico" src="" alt=""/></a>
          </div>
        </section>
    </div>
      )
    }
}

export default Signin;
