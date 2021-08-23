import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/AuthContext";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader
        isAuthenticated={ctx.isLoggedIn}
        onLogout={ctx.logoutHandler}
      />
      {console.log(ctx.isLoggedIn)}
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home onLogout={ctx.onLout} />}
      </main>
    </React.Fragment>
  );
}

export default App;
