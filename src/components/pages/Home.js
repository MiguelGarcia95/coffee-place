import React, { Component } from 'react';
import Header from '../home/Header';
import OurStory from '../home/OurStory';
import Menu from '../home/Menu';
import About from '../home/About';
import Contact from '../home/Contact';
import Footer from '../home/Footer';

import HeaderCoffee from '../../images/coffee_001.jpg';

class Home extends Component {

  render() {
    let header = {
      image: HeaderCoffee,
      subTitle: 'Come and Taste',
      title: 'The most Delicious Coffee of the town',
      details: 'Lorem ipsum dolor sit amet, consectetur adipisicing totam est laudantium enim odio nisi in, eos dolor! Sed corporis laudantium.',
      buttonText: 'Explore More',
      buttonLink: '/',
      hours: 'Open: Monday - Saturday | Hours: 5:00 AM - 10:00 PM'
    }
    return (
      <div id="home">
        <Header header={header}/>
        <OurStory />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }

}

export default Home;
