import React, {Component} from "react"
import ReactDOM from "react-dom"
import "./assets/stylesheets/styles.css"
import logo from "./assets/images/logo.png"

const App = () => {
  return (
    <div>
      <section>
        <article>
          <img src={logo}/>
          <h1>Webpack 4 & React Quick Start</h1>
          <p className="lead">
            Webpack 4 and React the new hotness. Actualy
            <a href="https://github.com/facebook/create-react-app">Create React App</a>
            is the new hotness, you should use that instead.
          </p>
          <p>This is just a simple starter project I created as a way to learn how to
            configure&nbsp;<a href="https://webpack.js.org/">Webpack 4</a>&nbsp;from scratch.</p>
          <h2>Getting started</h2>
          <p>Make sure you have a fresh version of&nbsp;<a href="https://nodejs.org/en/">Node.js</a>&nbsp;installed.</p>
          <p>Copy or clone this repository to you you local machine.
          </p>
          <code>
            $ git clone https://github.com/tedgeving/Webpack-4-React-Quick-Start
            <br/>
            $ cd Webpack-4-React-Quick-Start
          </code>
          <p>Navigate to the directory and install with NPM</p>
          <code>
            $ npm install
          </code>
          <h2>Development</h2>
          <code>
            $ npm run start
          </code>
          <h2>Production</h2>
          <code>
            $ npm run build
          </code>
          <h2>TODO</h2>
          <ul>
            <li>Incorprate Sass, replace CSS</li>
            <li>Configure webpack.config for deplyment to Heroku or similar service</li>
          </ul>
        </article>
        <footer>
          <p>Copyright (c) 2018, Ted M. Geving</p>
        </footer>
      </section>

    </div>
  );
};

export default App