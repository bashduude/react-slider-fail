import React from 'react';
import './../App.css';
import Image1 from './../imgs/1-img.png';
import Image2 from './../imgs/2-img.png';
import Image5 from './../imgs/5-img.png';

export class UpDown extends React.Component {

  render() {
    // const { messagestuff } = this.props;
    // const messagefixed = messagestuff.slice(1);
    //


    return (
      <div>
        <div className="slider-wrap-ud">
          <div class="slider-ud" id="slider-ud">
            <div class="holder-ud">
              <div class="slide-wrapper-ud">
                <div class="slide-ud"><img class="slide-image-ud" src={Image1} /></div>
              </div>
              <div class="slide-wrapper-ud">
                <div class="slide-ud"><img class="slide-image-ud" src={Image2} /></div>
              </div>
              <div class="slide-wrapper-ud">
                <div class="slide-ud"><img class="slide-image-ud" src={Image5} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
