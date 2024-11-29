import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Header />
      <h1>Opps!</h1>
      <h2>SomeThing Went Wronge!</h2>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
