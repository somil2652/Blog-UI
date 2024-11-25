import { Typography as TypoComp } from "antd";

const Typography = (props) => {
  const { name } = props;
  return <TypoComp {...props}>{name}</TypoComp>;
};

export default Typography;
