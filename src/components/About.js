import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>This is About Us page</h1>
      <User name={"Rudra from function()"}></User>
      <UserClass name={"Rudra from class()"} />
    </div>
  );
};
export default About;
