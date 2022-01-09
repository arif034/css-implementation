import { Component } from "react";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      jsx: <div className="circle-1"></div>
    };
  }
  componentDidMount() {
    setInterval(() => {
      if (this.state.toggle === true) {
        this.setState(() => {
          return {
            toggle: false,
            jsx: <div className="circle-2"></div>
          };
        });
      } else {
        this.setState(() => {
          return {
            toggle: true,
            jsx: <div className="circle-1"></div>
          };
        });
      }
    }, 1000);
  }

  render() {
    return <div>{this.state.jsx}</div>;
  }
}
export default Circle;
