import React, { Component } from 'react';
import './about.css';
import CoffeeImage from '../../images/coffee_003.jpg';
import CoffeeBag from '../../images/red-cups.jpg';

class About extends Component {

  render() {
    return (
      <div className='about'>
        <div className="content-container">
          <div className="content">
            <h1 className="title">We create memories</h1>
            <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam natus error ea eius nulla vel suscipit cumque, accusamus velit quis excepturi, at praesentium hic doloribus beatae quam illo ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam natus error ea eius nulla vel suscipit cumque, accusamus velit quis excepturi, at praesentium hic doloribus beatae quam illo ipsa.</p>
            <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam natus error ea eius nulla vel suscipit cumque, accusamus velit quis excepturi, at praesentium hic doloribus beatae quam illo ipsa.</p>
          </div>
          {/* <a href="/" className="button">Learn More {' '}{' '} <i className="fas fa-long-arrow-alt-right fa-2x"></i></a> */}

        </div>
        <div className="image-container">
          <div className="background-image">
            <img src={CoffeeBag} alt="coffee-bag"/>
          </div>
          <div className="foreground-image">
            <img src={CoffeeImage} alt="coffee"/>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
