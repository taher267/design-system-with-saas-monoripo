import React from "react";
import "@dswsmr/scss/lib/Button.css";
import "@dswsmr/scss/lib/Select.css";
import { IconCheck, IconChevronDown, IconChevronUp } from "@dswsmr/icons/hi";
import Text from "../../atoms/Text";
import type * as CSS from "csstype";

export interface SelectOption {
  label: string;
  value: string;
}

export interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionrecommendedProps: (overrideProps?: Object) => Object;
}

export interface SelectInterface {
  cs?: CSS.Properties;
  label: string;
  options?: Array<SelectOption>;
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}
const KEY_CODES = {
  ENTER: "Enter",
  SPACE: "Space",
  DOWN_ARROW: "ArrowDown",
  LEFT_ARROW: "ArrowLeft",
  RIGHT_ARROW: "ArrowRight",
  UP_ARROW: "ArrowUp",
  ESC: "Escape",
};
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
  const [hightlitedIndex, setHightlitedIndex] = React.useState<number | null>(
    null
  );
  const labelRef = React.useRef<HTMLButtonElement>(null);
  const [optionRefs, setOptionRefs] = React.useState<
    React.RefObject<HTMLLIElement>[]
  >([]);

  const handleOptionClick = (option: SelectOption, index: number) => {
    if (onOptionSelected) {
      onOptionSelected(option, index);
    }
    setSelectedIndex(index);
    handleSetOpen();
  };
  const highlightItem = (optionIndex: number | null) => {
    setHightlitedIndex(optionIndex);
  };
  React.useEffect(() => {
    setOptionRefs(options.map((_) => React.createRef<HTMLLIElement>()));
  }, [options.length]);
  React.useLayoutEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
  }, [labelRef.current?.offsetHeight]);
  let selectedLabel;
  if (selectedIndex !== null) {
    selectedLabel = options[selectedIndex];
  }

  React.useLayoutEffect(() => {
    if (hightlitedIndex !== null && open) {
      const ref = optionRefs[hightlitedIndex];
      if (ref?.current) ref?.current?.focus?.();
    }
  }, [open, hightlitedIndex]);
  const escEvent = () => {
    setSelectedIndex(null);
    highlightItem(null);
    handleSetOpen();
  };

  const onKeyUpDownLiItem: React.KeyboardEventHandler = (event) => {
    event.preventDefault();
    // Esc handle
    if (event.code === KEY_CODES.ESC) {
      return escEvent();
    }
    if (event.code === KEY_CODES.ENTER) {
      handleOptionClick(options[hightlitedIndex!], hightlitedIndex!);
      return;
    }
    let idx = hightlitedIndex;
    // arrowDown & arrowRight handle
    if ([KEY_CODES.DOWN_ARROW, KEY_CODES.RIGHT_ARROW].includes(event.code)) {
      if (idx === null || idx === options?.length - 1) {
        idx = 0;
      } else {
        idx++;
      }
    } else if (
      [KEY_CODES.UP_ARROW, KEY_CODES.LEFT_ARROW].includes(event.code)
    ) {
      // arrowUp & arrowLeftt handle
      if (idx === null) {
        idx = 0;
      } else if (idx === options?.length - 1) {
        idx--;
      } else if (idx === 0) {
        idx = options?.length - 1;
      } else {
        idx--;
      }
    }
    highlightItem(idx);
  };

  const onKeyDownBtn: React.KeyboardEventHandler = (event) => {
    event.preventDefault();
    if (
      [KEY_CODES.DOWN_ARROW, KEY_CODES.ENTER, KEY_CODES.SPACE].includes(
        event.code
      )
    ) {
      highlightItem(0);
      setOpen(true);
    } else if (event.code === KEY_CODES.ESC) {
      escEvent();
    }
  };
  return (
    <div className="dgns-select">
      <button
        className="dgns-select__label"
        onClick={handleSetOpen}
        ref={labelRef}
        onKeyDown={onKeyDownBtn}
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
            const isHighlighted = hightlitedIndex === idx;
            const ref = optionRefs[idx];
            const renderOptionProps: RenderOptionProps = {
              option,
              isSelected,
              getOptionrecommendedProps: (overrideProps = {}) => ({
                key: option.label,
                className: `dgns-select__option ${
                  isSelected ? "dgns-select__option--selected" : ""
                } ${isHighlighted ? "dgns-select__option--highlighted" : ""} `,
                role: "menuitemradio",
                "aria-checked": isSelected ? true : undefined,
                "aria-label": option.label,
                tabIndex: isHighlighted ? -1 : 0,
                onClick: () => handleOptionClick(option, idx),
                onMouseEnter: () => highlightItem(idx),
                onMouseLeave: () => highlightItem(null),
                onKeyDown: onKeyUpDownLiItem,
                ref,
                ...overrideProps,
              }),
            };
            if (renderOption) {
              return renderOption(renderOptionProps);
            }
            return (
              <li {...renderOptionProps.getOptionrecommendedProps()}>
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
