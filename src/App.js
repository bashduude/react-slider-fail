import React, { Component } from 'react';
import './App.css';
import Image1 from './imgs/1-img.png';
import Image2 from './imgs/2-img.png';
import Image3 from './imgs/3-img.png';
import Image4 from './imgs/4-img.png';
import Image5 from './imgs/5-img.png';
import {UpDown} from './components/up-down';
import {LeftRight} from './components/left-right';
import {Slider} from './components/slider';

class App extends Component {

  componentDidMount() {
    window.alert("Данный слайд работает только с жестами.");
  }

  constructor(props) {
    super(props);

    this.state = {

      startx: 0,
      starty: 0,
      movex:[],
      movey:[],
      swipedx: false,
      swipedy: false,
      touchesx:[],
      touchesy:[],
      endx:0,
      endy:0,

      cssclasses: "maincontainer",

      //currently set image
      currimage: Image1,

      //list of all images
      firstimage: Image1,
      secondimage: Image2,
      thirdimage: Image3,
      fourthimage: Image4,
      fifthimage: Image5

    } //end of state

  } //end of constructor

  handleTouchStart = (ev) => {

    //left and right
    let clientx = ev.touches[0].clientX;
    let touchesx = this.state.touchesx;
    touchesx.push(clientx);

    //up and down
    let clienty = ev.touches[0].clientY;
    let touchesy = this.state.touchesy;
    touchesy.push(clienty);

    this.setState({
      touchesx: touchesx,
      startx: clientx,

      touchesy: touchesy,
      starty: clienty,
    })
  } //end of handleTouchStart

  handleTouchMove = (ev) => {

    //left and right
    let moveArrayX = this.state.movex;
    let clientMoveX = ev.touches[0].clientX;
    moveArrayX.push(clientMoveX);

    //up and down
    let moveArrayY = this.state.movey;
    let clientMoveY = ev.touches[0].clientY;
    moveArrayY.push(clientMoveY);

    if (moveArrayX.length > 7) {
      this.setState({
        startx: this.state.startx,
        movex: moveArrayX,
        swipedx: true,
      })
    }

    if (moveArrayY.length > 7) {
      this.setState({
        starty: this.state.starty,
        movey: moveArrayY,
        swipedy: true,
      })
    }
  } //end of handleTouchMove

  handleTouchEnd = (ev) => {

    //left and right
    let clientendx = ev.changedTouches[0].clientX;
    let touchesx = this.state.touchesx;
    touchesx.push(clientendx);
    this.setState({
      touchesx: touchesx,
      movex: [],
      endx: clientendx,
    })

    //up and down
    let clientendy = ev.changedTouches[0].clientY;
    let touchesy = this.state.touchesy;
    touchesy.push(clientendy);
    this.setState({
      touchesy: touchesy,
      movey: [],
      endy: clientendy,
    })

    this.handleSwipe();
  } //end of handleTouchEnd

  handleSwipe = () => {

    //swipe wasnt long enough left-right
    if (this.state.swipedx === false) {
      console.log("your left-right swipe isnt long enough");
      this.setState({
        movex:[],
        touchesx:[],
        swipedx:false,
      })
    }
    //swipe wasnt long enough up-down
    if (this.state.swipedy === false) {
      console.log("your up-down swipe isnt long enough");
      this.setState({
        movey:[],
        touchesy:[],
        swipedy:false,
      })
    }
    //swiped left
    if (this.state.swipedx === true && this.state.touchesx[0] <
    this.state.touchesx[1] && this.state.currimage === Image4) {
      console.log("swiped right to image-5");
      this.setState({
        swipedx:false,
        touchesx: [],
        movex: [],
        currimage: Image5,
      })
    }

    //swiped left
    if (this.state.swipedx === true && this.state.touchesx[0] <
    this.state.touchesx[1] && this.state.currimage === Image3) {
      console.log("swiped left to image-4");
      this.setState({
        swipedx:false,
        touchesx: [],
        movex: [],
        currimage: Image4,
      })
    }
    //swiped right
    if (this.state.swipedx === true && this.state.touchesx[0] >
    this.state.touchesx[1] && this.state.currimage === Image4) {
      console.log("swiped right to image-3");
      this.setState({
        swipedx:false,
        movex:[],
        touchesx:[],
        currimage: Image3,
      })
    }

    //swiped right
    if (this.state.swipedx === true && this.state.touchesx[0] >
    this.state.touchesx[1] && this.state.currimage === Image5) {
      console.log("swiped right to image-4");
      this.setState({
        swipedx:false,
        movex:[],
        touchesx:[],
        currimage: Image4,
      })
    }
    //swiped up
    if (this.state.swipedy === true && this.state.touchesy[0] <
    this.state.touchesy[1] && this.state.currimage === Image2) {
      console.log("swiped up to image-1");
      this.setState({
        swipedy:false,
        touchesy: [],
        movey: [],
        currimage: Image1,
      })
    }

    //swiped up
    if (this.state.swipedy === true && this.state.touchesy[0] <
    this.state.touchesy[1] && this.state.currimage === Image3) {
      console.log("swiped up to image-2");
      this.setState({
        swipedy:false,
        touchesy: [],
        movey: [],
        currimage: Image2,
      })
    }
    //swiped down
    if (this.state.swipedy === true && this.state.touchesy[0] >
    this.state.touchesy[1] && this.state.currimage === Image1) {
      console.log("swiped down to image-2");
      this.setState({
        swipedy:false,
        movey:[],
        touchesy:[],
        currimage: Image2,
      })
    }

    //swiped down
    if (this.state.swipedy === true && this.state.touchesy[0] >
    this.state.touchesy[1] && this.state.currimage === Image2) {
      console.log("swiped down to image-3");
      this.setState({
        swipedy:false,
        movey:[],
        touchesy:[],
        currimage: Image3,
      })
    }

  } //end of handleSwipe

  render() {
    return (
      <div>
        <div
          className="slidearea"
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >

        <Slider img={this.state.currimage} css={this.state.cssclasses} />

        </div>
      </div>
    );
  }
}

export default App;
