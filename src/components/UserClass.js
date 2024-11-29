import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 0,
      userInfo: {
        name: "Dummy",
        location: "Deffault",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch();
    const json = data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h1>Count1 : {count1}</h1>
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1 + count,
            });
          }}
        >
          Count Increase
        </button>

        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Conatct : @456mail</h4>
      </div>
    );
  }
}

export default UserClass;
