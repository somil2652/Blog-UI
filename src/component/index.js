import { lazy } from "react";
import Table from "./Table";

import { FormComp } from "./Form";
import Image from "./Image";
import Home from "./SideBar";
import Select from "./Select";
import RadioGroup from "./RadioGroup";
// import { CardComp } from "./Card";
// import Button from "./Button";
// import List from "./List";
import Skeleton from "./Skeleton";
import InputNumber from "./InputNumber";
// import { FormComp } from "./Form";
// import form from "./FormUse";
import Spin from "./Spin";
import Input from "./Input";
const Button = lazy(() => import("./Button"));
const Typography = lazy(() => import("./Typography"));
// const InputGroup = lazy(() => import("./InputGroup"));
const InputPassword = lazy(() => import("./InputPassword"));
const Card = lazy(() => import("./Card"));
// const DatePicker = lazy(() => import("./DatePicker"));
// const TextArea = lazy(() => import("./TextArea"));
const FormItem = lazy(() => import("./FormItem"));
const Modal = lazy(() => import("./Modal"));
// const SearchBar = lazy(() => import("./SearchBar"));
// const Select = lazy(() => import("./Select"));
// // const Table = lazy(() => import("./Table"));
// const Spin = lazy(() => import("./Spin"));
const Space = lazy(() => import("./Space"));
const Form = lazy(() => import("./Form"));

export {
  Button,
  InputPassword,
  Card,
  Typography,
  Table,
  Spin,
  Image,
  Skeleton,
  // FormUse,
  Modal,
  //   SearchBar,
  //   Select,
  //   Table,
  //   Dragger,
  //   Flex,
  Form,
  FormItem,
  Input,
  //   TextArea,
  //   DatePicker,
  //   InputGroup,
  FormComp,
  Space,
  Home,
  // List
  //   Password,
  InputNumber,
  Select,
  RadioGroup,
};
