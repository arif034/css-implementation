import { Component } from "react";

class Circle2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cName: "circle2-1"
    };
  }
  changeColor = () => {
    switch (this.state.cName) {
      case "circle2-1": {
        this.setState(() => {
          return {
            cName: "circle2-2"
          };
        });
        break;
      }
      case "circle2-2": {
        this.setState(() => {
          return {
            cName: "circle2-3"
          };
        });
        break;
      }

      case "circle2-3": {
        this.setState(() => {
          return {
            cName: "circle2-4"
          };
        });
        break;
      }

      case "circle2-4": {
        this.setState(() => {
          return {
            cName: "circle2-5"
          };
        });
        break;
      }

      case "circle2-5": {
        this.setState(() => {
          return {
            cName: "circle2-6"
          };
        });
        break;
      }

      case "circle2-6": {
        this.setState(() => {
          return {
            cName: "circle2-7"
          };
        });
        break;
      }

      case "circle2-7": {
        this.setState(() => {
          return {
            cName: "circle2-1"
          };
        });
        break;
      }

      default: {
        this.setState(() => {
          return {
            cName: "circle2-1"
          };
        });
        break;
      }
    }
  };

  render() {
    return (
      <div className={this.state.cName}>
        <button className="button-1" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default Circle2;
