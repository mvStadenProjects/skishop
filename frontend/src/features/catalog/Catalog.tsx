import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  //products expect a product[]
  products: Product[];
  addProduct: () => void;
}
const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
      <List>
        {products.map((product) => {
          return (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Avatar src={product.pictureUrl} />
              </ListItemAvatar>
              <ListItemText>
                {product.name} - {product.price}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" onClick={addProduct}>
        AddProduct
      </Button>
    </>
  );
};
export default Catalog;
