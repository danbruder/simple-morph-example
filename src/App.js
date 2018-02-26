import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMorph from 'react-morph';

class App extends Component {
  render() {
    return (
      <ReactMorph>
        {({from, to, fadeIn, go}) =>
          <div>
            <div>
              <header {...from('header')} className="App-header-small">
                <img
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  {...from('img')}
                />
                <h1
                  {...from('welcome')}
                  className="App-title"
                  onClick={() => go(1)}>
                  Welcome to React
                </h1>
              </header>
            </div>

            <div className="App">
              <header {...to('header')} className="App-header">
                <img
                  {...to('img')}
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
                <h1
                  {...to('welcome')}
                  className="App-title"
                  onClick={() => go(0)}>
                  Welcome to React
                </h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
          </div>}
      </ReactMorph>
    );
  }
}

export default App;
