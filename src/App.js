import React, { Component } from "react";
import { Element } from "react-scroll";
import Header from "./components/header_footer/Header";
import Footer from './components/header_footer/Footer';
import  Featured from './components/Featured/index';
import VenueInfo from './components/VenueInfo/VenueInfo';
import Pricing from './components/Pricing/Pricing';
import Highlights from './components/Highlights/Highlights';
import Location from './components/Location/Location';
import "./style.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Element name="feature">
          <Featured />
        </Element>
 
        <Element name="venue">
          <VenueInfo />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="highlight">
          <Highlights />
        </Element>

        <Element name="location">
          <Location />
        </Element> 

        <Footer />
      </div>
    );
  }
}

export default App;
