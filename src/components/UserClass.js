import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user-card">
        <h1>About Me</h1>
        <h2>name : {this.props.name}</h2>
        <h3>Conact : Some contact +91</h3>
      </div>
    );
  }
}
export default UserClass;
