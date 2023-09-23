import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 10,
    };
  }
  componentDidMount() {
    console.log("componentDidMount called");
  }
  render() {
    return (
      <div className="user-card">
        <h1>About Me</h1>
        <h2>name : {this.props.name}</h2>
        <h3>Conact : Some contact +91</h3>
        <h1>Count : {this.state.count}</h1>
        <h1>Count2 : {this.state.count2}</h1>
        <button
          onClick={() => {
            //this.state.count++; Not valid
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
export default UserClass;
