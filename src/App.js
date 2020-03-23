import React from 'react';
import './App.css';
import anime from 'animejs/lib/anime.es.js';
import Logo from "./getsnapped"
class App extends React.Component {
  componentDidMount() {
    anime({
      targets: '.line-drawing-demo .lines path',
      loop: false,
      direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 2000,
      delay: (el, i) => { return i * 500 }
    });
  }
  render() {
    return (
      <div className="App">
        <div className="line-drawing-demo">
         <Logo />
        </div>


      </div>
    );
  }
}

export default App;
