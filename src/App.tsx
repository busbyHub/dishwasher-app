import { StrictMode } from "react";
import { render } from "react-dom";
import Products from "./Products";

const App = () => {
  return <Products />;
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
