import React from "react";
import "@dswsmr/scss/lib/Button.css";
import "@dswsmr/scss/lib/Select.css";
import { IconCheck, IconChevronDown, IconChevronUp } from "@dswsmr/icons/hi";
import Text from "../Text";
import type * as CSS from "csstype";

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionrecommendedProps: (overrideProps?: Object) => Object;
}

interface SelectInterface {
  cs?: CSS.Properties;
  label: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FC<SelectInterface> = ({
  label = "Please select an option!",
  options = [],
  onOptionSelected,
  renderOption,
}) => {
  const handleSetOpen = () => setOpen((p) => !p);
  const [open, setOpen] = React.useState<boolean>(false);
  const [overlayTop, setOverlayTop] = React.useState<number>(0);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const labelRef = React.useRef<HTMLButtonElement>(null);

  const handleOptionClick = (option: SelectOption, index: number) => {
    if (onOptionSelected) {
      onOptionSelected(option, index);
    }
    setSelectedIndex(index);
    handleSetOpen();
  };

  React.useLayoutEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);
  let selectedLabel;
  if (selectedIndex !== null) {
    selectedLabel = options[selectedIndex];
  }
  return (
    <div className="dgns-select">
      <button
        className="dgns-select__label"
        onClick={handleSetOpen}
        ref={labelRef}
      >
        <Text>{selectedLabel?.label || label}</Text>
        {open ? <IconChevronUp /> : <IconChevronDown />}
      </button>
      <ul
        role="menu"
        style={{ top: overlayTop }}
        className="dgns-select__overlay"
      >
        {(open &&
          options?.map?.((option, idx) => {
            const isSelected = selectedIndex === idx;
            if (renderOption) {
              const renderOptionProps: RenderOptionProps = {
                option,
                isSelected,
                getOptionrecommendedProps: (overrideProps = {}) => ({
                  className: `dgns-select__option ${
                    isSelected ? "dgns-select__option--selected" : ""
                  }`,
                  onClick: () => handleOptionClick(option, idx),
                  key: option.label,
                  ...overrideProps,
                }),
              };
              return renderOption(renderOptionProps);
            }
            return (
              <li
                className={`dgns-select__option ${
                  isSelected ? "dgns-select__option--selected" : ""
                }`}
                onClick={() => handleOptionClick(option, idx)}
                key={option.label}
              >
                <Text>{option.label}</Text>
                {(isSelected && <IconCheck cs={{ marginRight: "15px" }} />) ||
                  ""}
              </li>
            );
          })) ||
          ""}
      </ul>
    </div>
  );
};

export default Select;
