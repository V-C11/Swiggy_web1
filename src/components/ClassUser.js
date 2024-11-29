import React from "react";

class ClassUser extends React.Component {
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
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    
    
    this.setState({
        userInfo: json,
    });
    console.log(json)
  }

  componentDidUpdate() {
    console.log('Component Did Update')
  }
  componentWillUnmount(){
    console.log('you u cange the  PAge then this will print')
  }


  render() {
    // const { name, location } = this.props;
    const { count, count1 } = this.state;
    const {name, location, avatar_url,bio} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>NAme : {name} </h1>
        <h1>Locatipon : {location}</h1>
        <h1>Bio : {bio}</h1>

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

export default ClassUser;
