import React from 'react';
import './../App.css';

export class Slider extends React.Component {

  render() {

    const { img } = this.props;
    const { css } =this.props;

    return (
      <div className={css}>

      <img src={img} />

      </div>
    );
  }
}



// <div className="maincontainer">
//   <div className="row1">
//     <div className="Image1"><img src={Image1} /></div>
//   </div>
//   <div className="row2">
//     <div className="Image2"><img src={Image2} /></div>
//   </div>
//   <div className="row3">
//     <div className="Image3"><img src={Image3} /></div>
//     <div className="Image4"><img src={Image4} /></div>
//     <div className="Image5"><img src={Image5} /></div>
//   </div>
// </div>
