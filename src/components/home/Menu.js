import React, { Component } from 'react';
import './menu.css';
import CoffeBeans from '../../images/coffee-beans.png';
import MenuItem from '../../images/coffee_002.jpg';


class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-decal"></div>
        <div className="menu-box">
          <div className="menu-head">
            <h3 className="subTitle">Taste Your Favorite</h3>
            <h1 className="title">Coffee with Our Special Recipes</h1>
          </div>
          <div className="menu-decal-image">
            <img src={CoffeBeans} alt="coffee-beans"/>
          </div>
          <div className="menu-items">

            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuItem} alt="menu-item-image"/>
              </div>
              <div className="menu-item-left">
                <h1 className="title">Espresso</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rerum tempora, nemo nulla consequatur minus eaque eos nesciunt sunt commodi numquam quam quasi dolorem quae, libero harum doloremque eum aliquid!</p>
              </div>
              <div className="menu-item-right">
                <h1 className="menu-price">$2.50</h1>
                <p className="menu-price-extra">Double Espresso $4.50</p>
              </div>
            </div>

            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuItem} alt="menu-item-image"/>
              </div>
              <div className="menu-item-left">
                <h1 className="title">Espresso</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rerum tempora, nemo nulla consequatur minus eaque eos nesciunt sunt commodi numquam quam quasi dolorem quae, libero harum doloremque eum aliquid!</p>
              </div>
              <div className="menu-item-right">
                <h1 className="menu-price">$2.50</h1>
                <p className="menu-price-extra">Double Espresso $4.50</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuItem} alt="menu-item-image"/>
              </div>
              <div className="menu-item-left">
                <h1 className="title">Espresso</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rerum tempora, nemo nulla consequatur minus eaque eos nesciunt sunt commodi numquam quam quasi dolorem quae, libero harum doloremque eum aliquid!</p>
              </div>
              <div className="menu-item-right">
                <h1 className="menu-price">$2.50</h1>
                <p className="menu-price-extra">Double Espresso $4.50</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={MenuItem} alt="menu-item-image"/>
              </div>
              <div className="menu-item-left">
                <h1 className="title">Espresso</h1>
                <p className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rerum tempora, nemo nulla consequatur minus eaque eos nesciunt sunt commodi numquam quam quasi dolorem quae, libero harum doloremque eum aliquid!</p>
              </div>
              <div className="menu-item-right">
                <h1 className="menu-price">$2.50</h1>
                <p className="menu-price-extra">Double Espresso $4.50</p>
              </div>
            </div>


          </div>

          {/* <a href="/" className="button">Learn More {' '}{' '} <i className="fas fa-long-arrow-alt-right fa-2x"></i></a> */}

        </div>
      </div>
    );
  }

}

export default Menu;
