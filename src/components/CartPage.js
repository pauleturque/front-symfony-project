import styled from "styled-components";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const CartTable = styled(Table)`
  margin: 2rem auto;
  min-width: 650px;
`;

const CartButton = styled(Button)`
  margin-top: 1rem;
`;

const EmptyCartMessage = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;
`;

const CartPageContainer = styled.div`
  padding: 2rem;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const CartPage = () => {
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const items = [
    {
      id: 1,
      name: "Shirt",
      price: 20,
      quantity: 2,
    },
    {
      id: 2,
      name: "Pants",
      price: 35,
      quantity: 1,
    },
    {
      id: 3,
      name: "Socks",
      price: 5,
      quantity: 4,
    },
  ];

  return (
    <CartPageContainer>
      <CartTitle>Your Cart</CartTitle>
      {items.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <CartTable aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">
                      ${item.price.toFixed(2)}
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}></TableCell>
                  <TableCell align="right">
                    Total: ${calculateTotal().toFixed(2)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </CartTable>
          </TableContainer>
          <CartButton variant="contained" color="primary">
            Checkout
          </CartButton>
        </>
      ) : (
        <EmptyCartMessage>Your cart is empty.</EmptyCartMessage>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
