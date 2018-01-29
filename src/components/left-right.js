import React from 'react';
import './../App.css';
import Image3 from './../imgs/3-img.png';
import Image4 from './../imgs/4-img.png';
import Image5 from './../imgs/5-img.png';

export class LeftRight extends React.Component {

  render() {
    // const { messagestuff } = this.props;
    // const messagefixed = messagestuff.slice(1);



    return (
      <div>
        <div className="slider-wrap">
          <div className="slider" id="slider">
            <div className="holder">
              <div class="slide-wrapper">
                <div class="slide"><img class="slide-image" src={Image5} /></div>
              </div>
              <div class="slide-wrapper">
                <div class="slide"><img class="slide-image" src={Image4} /></div>
              </div>
              <div class="slide-wrapper">
                <div class="slide"><img class="slide-image" src={Image3} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
