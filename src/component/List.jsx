import { List as ListComp } from "antd";

const List = (props) => {
  return <ListComp {...props} />;
};

const ListItem = (props) => {
    return <ListComp.Item {...props} />;
  };

  const ListItemMeta = (props) => {
    return <ListComp.Item.Meta {...props} />;
  };


export  {List,ListItem,ListItemMeta};
