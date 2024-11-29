// import User from "./User";
// import UserClass from './UserClass'

// import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h1>This Is About Page!</h1>
//       <User name={"Marshal D Teach"} />

//       <UserClass name={"Basil"} location={"From Kerala"} />
//     </div>
//   );
// };

// export default About;
import { Component } from "react";
import User from "./User";
import ClassUser from "./ClassUser";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h1>This Is About Page!</h1>
        <User />
        <ClassUser />
      </div>
    );
  }
}

export default About;
