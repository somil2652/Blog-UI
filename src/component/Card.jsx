import { Card as CardComp } from "antd";

const Card = ({ children, ...props }) => {
  return <CardComp {...props}>{children}</CardComp>;
};

export default Card;
