/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IconCheck } from "@dswsmr/icons/hi";
import {
  Button,
  Color,
  Margin,
  Text,
  Select,
  // IconCheck,
} from "@dswsmr/react/lib";
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
        // renderOption={({ isSelected, option, getOptionrecommendedProps }) => {
        //   return (
        //     <li
        //       key={option.label}
        //       {...getOptionrecommendedProps({
        //         className: `custom_select_option ${
        //           isSelected ? "custom_select_option_selected" : ""
        //         }`,
        //       })}
        //     >
        //       <input type="checkbox" checked={isSelected} />{" "}
        //       <span>{option.label}</span>
        //       {(isSelected && <IconCheck cs={{ width: "20px" }} />) || ""}
        //     </li>
        //   );
        // }}
      />
    </>
  );
}

export default App;
