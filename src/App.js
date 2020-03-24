import React from 'react';
import './App.css';
// import anime from 'animejs/lib/anime.es.js';
import Logo from "./getsnapped"
// const animateCSS = require( "animate.css");
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      showTitle: true
    }
  }

  componentDidMount() {
    // anime({
    //   targets: '.line-drawing-demo .lines path',
    //   loop: true,
    //   direction: 'alternate',
    //   strokeDashoffset: [anime.setDashoffset, 0],
    //   easing: 'easeInOutSine',
    //   duration: 2000,
    //   delay: (el, i) => { return i * 500 }
    // });
    // this.animateCSS('.title', 'hinge')
  }
  animateCSS = (element, animationName, callback) => {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
  }
  aimate = () => {
    this.animateCSS('.title', 'hinge', () => {
      this.setState({
        showTitle: false
      }, () => {
         this.aimateComingsoon();
      })
    } )
  }

  aimateComingsoon = () => {
    console.log("IN COMING SSON")
    this.animateCSS('.comingsoon', 'hinge', () => {
      this.setState({
        showTitle: true
      }, () => {
        console.log("IN CALLBACK ====>>", this.state.showTitle)
         this.aimate();
      })
    } )
  }
  newAnimation = () => {
    this.animateCSS('.title', 'zoomInLeft', () => {
      this.animateCSS('.title', 'zoomOutRight', () => {
        this.setState( {
          showTitle: false
        }, () => {
          this.animateCSS('.comingsoon', 'zoomInLeft', () => {
            this.animateCSS('.comingsoon', 'zoomOutRight', () => {
              this.setState({
                showTitle: true
              }, () => {
                this.newAnimation()
              } )
            } )
          } )
        }   )
      } )
    } )
  }
  render() {
    console.log("THIS STATE ====>>", this.state.showTitle)
    return (
      <div className="App">
        {/* <div className="line-drawing-demo">
         <Logo />
        </div> */}
        { this.state.showTitle ? <div className="title slow" style={{ display: "inline-block" }}  >
          <h1  >
            getsnapped
        </h1>
        </div>: 
        <div className="comingsoon slow" style={{ display: "inline-block" }}  >
        <h1  >
          coming soon
      </h1>
      </div> 
      
        }
        {/* <div>
        <div className="comingsoon" style={{ display: "inline-block" }}  >
        <h1  >
          coming soon
      </h1>
      </div>
      </div> */}

        <div>
          <button onClick={this.newAnimation} > Animate </button>
        </div>

      </div>
    );
  }
}

export default App;
