import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavChild from "./component/NavChild";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavChild home={"Home"} />
      <NavChild home={"About"} />
      <NavChild home={"Trip Catalogue"} />
      <NavChild home={"Contact"} />
      <NavChild home={"Tour Review"} />
    </>
  );
}

export default App;
