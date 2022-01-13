import "./styles.css";
import { Component } from "react";
import ButtonComponent from "./component/ButtonComponent.js";
class App extends Component {
  render() {
    return (
      <div id="id-1" className="App">
        <ButtonComponent />
      </div>
    );
  }
}
export default App;
