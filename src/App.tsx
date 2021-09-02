import { StrictMode } from "react";
import { render } from "react-dom";
import Products from "./Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:productId">
          <Details />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
