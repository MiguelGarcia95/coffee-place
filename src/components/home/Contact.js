import React, { Component } from 'react';
import './contact.css';

import CoffeeBeans from '../../images/dark-beans.png';

class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <div className="coffee-decal">
          <img src={CoffeeBeans} alt=""/>
        </div>
        <div className="content">
          <h3 className="subTitle">Want to Book a Table</h3>
          <h1 className="title">Make a Reservation</h1>
          <p className="details">Once you make your reservation, we will call you to verfiy everything.</p>
          <div className="form">
            <input type="text" className="form-input" placeholder="Enter your Name"/>
            <input type="text" className="form-input input-date" placeholder="Pick a Date"/>
            <input type="text" className="form-input input-date" placeholder="Set Time"/>
            <input type="text" className="form-input" placeholder="Number of Guests"/>
            <input type="text" className="form-input" placeholder="Phone Number"/>
            <button className="button">Make Reservation</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
