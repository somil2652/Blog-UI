import React from "react";
import { Radio } from "antd";

const RadioGroup = ({ options, ...props }) => {
  return (
    <Radio.Group {...props}>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          data-testid={`approved-${option.value}`}
        >
          {option.label}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroup;
