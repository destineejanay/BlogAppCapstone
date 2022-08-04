import NavBar from './components/navbar/NavBar';
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
        <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">{currentUser ? <Home /> : <Register />}</Route>
        <Route path="/login">{currentUser ? <Home /> : <Login />}</Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
