import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AppBarNavigation = () => {
  const Unicorn = styled.img`
    max-width: 8%;
    min-width: 60px;
  `;

  const StyledAccountIcon = styled(AccountCircleIcon)`
    && {
      width: 130%;
    }
  `;

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickCart = () => {
    navigate("/cart");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="secondary" onClick={handleClickLogin}>
            <StyledAccountIcon color="action"></StyledAccountIcon>
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={handleClickHome}>
              <Unicorn
                className="licorne"
                src="../../../licorne-removebg-preview.png"
                alt="description de l'image"
              />
            </Button>
          </Typography>

          <Button color="secondary" onClick={handleClickCart}>
            <ShoppingCartIcon color="action"></ShoppingCartIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarNavigation;
