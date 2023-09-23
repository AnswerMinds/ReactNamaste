export const User = (props) => {
  return (
    <div className="user-card">
      <h1>About Me</h1>
      <h2>name {props.name}</h2>
      <h3>Conact : Some contact +91</h3>
    </div>
  );
};

export default User;
