import { useState } from "react";
import "./App.css";
import { Typography } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Typography variant="h1">Hola a todos</Typography>
    </>
  );
}

export default App;
