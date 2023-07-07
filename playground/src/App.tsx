import { Button } from "@dswsmr/react/lib";
import "./App.css";

function App() {
  return (
    <>
      <Button
        title="Grettings"
        onClick={(e) => {
          console.log(e?.target);
        }}
      >
        Bismillah
      </Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
