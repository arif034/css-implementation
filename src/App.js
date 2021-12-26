import "./styles.css";
import { Component } from "react";
import ChildComponent from "./ChildComponent.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildComponent className="ChildComponentDiv-1" />
      </div>
    );
  }
}
export default App;
