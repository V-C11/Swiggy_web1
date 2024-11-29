// Simple Props Method

// const User = (props) => {
//     return (
//         <div className="user-card">
//             <h2>Name : {props.name}</h2>
//             <h3>Location : Mumbai</h3>
//             <h4>Conatct : @123mail</h4>
//         </div>
//     )
// }
// export default User
import { useState, useEffect } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        console.log("UseEffect Mounting! or Loaded tha About Page")
    }, 1000);

    return() => {
        clearInterval(timer)
        console.log("Clearing Mounting!")
        console.log('Closed the About Page')
    }
  }, []);

  console.log("Loading the About Page or Rendring the About Page")
  return (
    <div className="user-card">
      <h1>COUNT : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)   /* without useEffect */
        }}
      >
        Count ++
      </button>
      <h2>Name : {name}</h2>
      <h3>Location : Mumbai</h3>
      <h4>Conatct : @123mail</h4> 
    </div>
  );
};
export default User;
