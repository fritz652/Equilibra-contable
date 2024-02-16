import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Typography } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography>Hola a todos</Typography>
    </>
  );
}

export default App;
