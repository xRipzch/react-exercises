import { useState } from "react";

export default function ConditionalRenderPage() {
  return (
    <div className="container">
      <h1>Conditional Rendering</h1>
      <p>
        Conditional rendering is used to display different components or
        elements based on certain conditions.
      </p>
      {/* TODO: RENDER THE COMPONENT HERE */}
    </div>
  );
}

function ConditionalComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h3>
        {/* TODO: RENDER "Welcome back!" IF THE USER IS LOGGED IN, else "Please log in" */}
        {/* {isLoggedIn ? "Welcome back!" : "Please log in"} */}
      </h3>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {/* TODO: RENDER "Log out" IF THE USER IS LOGGED IN, else "Log in" */}
      </button>
    </div>
  );
}
