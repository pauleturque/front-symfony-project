import React from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const StyledForm = styled(Box)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 52px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 16px;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    background-color: #4caf50;
    color: #fff;

    &:hover {
      background-color: #388e3c;
    }
  }
`;

const StyledTitle = styled(Typography)`
  && {
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: bold;
    color: #333;
  }
`;

const StyledWord = styled(Typography)`
  && {
    color: #b2bfc3;
    margin-bottom: 10px;
  }
`;

const StyledRegisterAccount = styled(Typography)`
  && {
    color: #c546c1;
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const handleClickRegister = () => {
    navigate("/signup");
  };
  return (
    <StyledContainer>
      <StyledForm>
        <StyledTitle>Connexion</StyledTitle>
        <StyledTextField label="Nom d'utilisateur" />
        <StyledTextField label="Mot de passe" type="password" />
        <StyledButton variant="contained">Log in</StyledButton>
        <StyledWord>OR</StyledWord>
        <Button variant="text" onClick={handleClickRegister}>
          <StyledRegisterAccount>Create an account</StyledRegisterAccount>
        </Button>
      </StyledForm>
    </StyledContainer>
  );
}

export default LoginPage;
