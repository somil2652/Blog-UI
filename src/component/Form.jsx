import { Form as FormComp } from "antd";
// const Form = (props) => {
//   return <FormComp {...props} />;
// };

const Form = ({ children, ...props }) => {
  return <FormComp {...props}>{children}</FormComp>;
};

export default Form;
export { FormComp };
