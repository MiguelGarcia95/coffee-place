import React, { Component } from 'react';
import './footer.css';
import Coffee01 from '../../images/coffee_list_01.jpg';
import Coffee02 from '../../images/coffee_list_02.jpg';
import Coffee03 from '../../images/coffee_list_03.jpg';
import Coffee04 from '../../images/coffee_list_04.jpg';
import CoffeeBG from '../../images/coffee-bg.png';
import Logo from '../../images/logo.png';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <h3 className="subTitle">Follow Us On Social Media</h3>
        <h1 className="title">Love from Our Customers</h1>
        <div className="coffee-images">
          <div className="coffee-image"><img src={Coffee01} alt="Coffee_01"/></div>
          <div className="coffee-image"><img src={Coffee02} alt="Coffee_02"/></div>
          <div className="coffee-image"><img src={Coffee03} alt="Coffee_03"/></div>
          <div className="coffee-image"><img src={Coffee04} alt="Coffee_04"/></div>
        </div>
        <div className="footer-info">
          <div className="logo"><img src={Logo} alt="website_logo"/></div>
          <div className="address">
            <p className="subTitle">Address</p>
            <p>123 Houston st, Houston, Texas 71700</p>
          </div>
          <div className="contact-info">
            <p className="subTitle">Contact</p>
            <p className="phone">000-000-0000</p>
            <p className="email">contact-us@miguelgarciacoffee.com</p>
          </div>
          <div className="trademark"><p>Copyright @ Miguel Gacia 2018</p></div>
        </div>
        <img className="footer-decal" src={CoffeeBG} alt="coffee background"/>
      </div>
    );
  }

}

export default Footer;
