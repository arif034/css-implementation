import { Component } from "react";

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 1,
      onOff: true,
      jsx: <div className="circle-1"></div>
    };
  }

  toggleColor = () => {
    setInterval(() => {
      switch (this.state.toggle) {
        case 1: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 2,
              jsx: <div className="circle-2"></div>
            };
          });
          break;
        }
        case 2: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 3,
              jsx: <div className="circle-3"></div>
            };
          });
          break;
        }
        case 3: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 4,
              jsx: <div className="circle-4"></div>
            };
          });
          break;
        }
        case 4: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 5,
              jsx: <div className="circle-5"></div>
            };
          });
          break;
        }
        case 5: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 6,
              jsx: <div className="circle-6"></div>
            };
          });
          break;
        }
        case 6: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 7,
              jsx: <div className="circle-7"></div>
            };
          });
          break;
        }
        case 7: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 1,
              jsx: <div className="circle-1"></div>
            };
          });
          break;
        }
        default: {
          this.setState((prevState) => {
            return {
              ...prevState,
              toggle: 1,
              jsx: <div className="circle-1"></div>
            };
          });
          break;
        }
      }
    }, 1000);
  };

  onPlay() {
    if (this.state.onOff === true) {
      this.setState((state) => {
        return {
          ...state,
          onOff: false
        };
      });
    } else {
      this.setState((state) => {
        return {
          ...state,
          onOff: true
        };
      });
    }
    console.log(this.state.onOff);
    if (this.state.onOff === true) this.toggleColor();
  }
  render() {
    return (
      <div>
        {this.state.jsx}
        <br />
        <br />
        <button onClick={() => this.onPlay()}>play</button>
      </div>
    );
  }
}
export default Circle;
