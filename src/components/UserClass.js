import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "Default",
      },
    };
  }
  async componentDidMount() {
    console.log("componentDidMount called");
    // used to do API calls once component is rendered
    const data = await fetch("https://api.github.com/users/answerminds");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log(this.state.userInfo.name);
    console.log(this.state.userInfo.avatar_url);
  }
  render() {
    return (
      <div className="user-card">
        <h1>About Me</h1>
        <h2>Name : {this.state.userInfo.name}</h2>
        <img src={this.state.userInfo.avatar_url} alt="avt-logo" />
      </div>
    );
  }
}
export default UserClass;
