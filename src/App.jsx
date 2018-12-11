import React from "react";
import Navigation from "./components/Navigation.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Tours from "./components/Tours.jsx";
import Stories from "./components/Stories.jsx";
import Book from "./components/Book.jsx";
import Footer from "./components/Footer.jsx";
import Popup from "./components/Popup.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
          <Book />
        </main>
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
