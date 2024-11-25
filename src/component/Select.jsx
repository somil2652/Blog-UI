import React from "react";
import { Select as SelectComp } from "antd";

const Select = ({ options, ...props }) => {
  return (
    <SelectComp {...props}>
      {options.map((option) => (
        <SelectComp.Option key={option.value} value={option.value}>
          {option.label}
        </SelectComp.Option>
      ))}
    </SelectComp>
  );
};

export default Select;
