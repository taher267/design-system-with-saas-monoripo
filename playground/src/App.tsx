import { Button, Color } from "@dswsmr/react/lib";
import "./App.css";

function App() {
  return (
    <>
      <Button title="Grettings">Bismillah</Button>
      <Color {...{ hexColor: "red", height: "xl", width: "xl" }} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
