import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome page Master welcone</h1>
      <p>Welcome caralho</p>
      <Route path="/welcome/new-user">This is the new user</Route>
    </div>
  );
};

export default Welcome;
