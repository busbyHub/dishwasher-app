import { StrictMode } from "react";
import { render } from "react-dom";

const App = () => {
    return(
        <div>
            <header>
                <h1>dishwaser app</h1>
            </header>
        </div>
    )
}

render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
  );