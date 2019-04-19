import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu.js'
import Header from './Components/Header/Header.js'
import Content from './Components/Content/Content.js'
import Footer from './Components/Footer/Footer.js'


class App extends Component {
  render() {
    return (
      <div className="Demo_One">
        <TopMenu />
        <Header />
        <Content title="Use Props for Class" imgPosition="order-lg-2" imgSrc="01.jpg" />
        <Content title="This is content 2" imgSrc="02.jpg" />
        <Content title="This is content 3" imgPosition="order-lg-2" imgSrc="03.jpg" />
        <Footer />
      </div>
    );
  }
}

export default App;
