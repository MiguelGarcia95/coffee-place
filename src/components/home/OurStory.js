import React, { Component } from 'react';
import './our-story.css';
import OurStoryImage from '../../images/drinking.jpg';

class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <div className="content-container">
          <div className="content">
            <h3 className="sub-title">Our Story</h3>
            <h1 className="title">Our passion for coffee shows...</h1>
            <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora soluta consectetur. Mollitia quam consectetur, eius accusantium dolor velit minima! Esse voluptate exercitationem quibusdam cum quas ullam optio, at corporis.</p>
            <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempora soluta consectetur. Mollitia quam consectetur, eius accusantium dolor velit minima! Esse voluptate exercitationem quibusdam cum quas ullam optio, at corporis.</p>
            <a href="/" className="button">Learn More {' '}{' '} <i className="fas fa-long-arrow-alt-right fa-2x"></i></a>
          </div>
        </div>
        <div className="image-container">
          <div className="top-decal"></div>
          <div className="image">
            <img src={OurStoryImage} alt="enjoying_cup_image"/>
          </div>
        </div>
      </div>
    );
  }

}

export default OurStory;
