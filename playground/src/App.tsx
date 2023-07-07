/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Button,
  Color,
  Margin,
  Text,
  Select,
  // IconCheck,
} from "@dswsmr/react/lib";
import { IconCheck } from "@dswsmr/icons/hi";
import "./App.css";
const options = [
  { label: "One", value: "one" },
  { label: "Two", value: "Two" },
];

function App() {
  return (
    <>
      <Button title="Grettings">Bismillah</Button>
      <Color {...{ hexColor: "red", height: "xl", width: "xl" }} />
      <Margin space="sm" bottom>
        <Text size="xl">Click on the Vite and React logos to learn more</Text>
      </Margin>
      <IconCheck />
      <Select
        label="Please Select"
        options={options}
        onOptionSelected={console.log}
        renderOption={({ isSelected, option, getOptionrecommendedProps }) => {
          return (
            <p key={option.label} {...getOptionrecommendedProps()}>
              <span>{option.label}</span>
              {(isSelected && <IconCheck cs={{ marginRight: "15px" }} />) || ""}
            </p>
          );
        }}
      />
    </>
  );
}

export default App;
