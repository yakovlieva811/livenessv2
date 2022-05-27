import React, { Component } from "react";
import ReactDOM from "react-dom";
import QrReader from "react-qr-reader";

import "./styles.css";

class App extends Component {
  state = {
    result: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "50%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
