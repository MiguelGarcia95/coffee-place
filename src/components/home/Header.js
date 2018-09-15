import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    let {image, subTitle, title, details, buttonText, buttonLink, hours} = this.props.header;
    return (
      <div className="header">
        <div className="content-container">
          <div className="content">
            <h3 className="sub-title">{subTitle}</h3>
            <h1 className="title">{title}</h1>
            <p className="details">{details}</p>
            <a href={buttonLink} className="button">{buttonText} {' '}{' '} <i className="fas fa-long-arrow-alt-right fa-2x"></i></a>
          </div>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={image} alt="header_coffee_image"/>
          </div>
          <a href="" className="address"></a>
        </div>
        <div className="info-container">
          <div className="info">
            <span id="hours">{hours}</span>
          </div>
          <div className="info" id="links">
            <span>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-facebook-f"></i></a>
            </span>
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
