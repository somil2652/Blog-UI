import React from "react";
import { Button as ButtonComponent } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const icons = {
  delete: <DeleteOutlined />,
  edit: <EditOutlined />,
  view: <EyeOutlined />,
  search: <SearchOutlined />,
};

const Button = (props) => {
  const { name, iconname } = props;
  const iconComponent = iconname ? icons[iconname] : null;
  return (
    <ButtonComponent icon={iconComponent} {...props}>
      {name}
    </ButtonComponent>
  );
};

export default Button;
