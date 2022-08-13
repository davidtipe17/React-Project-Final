import { useState } from "react";
import { createUser } from "../../services";
import {
  Avatar,
  Box,
  Container,
  Link,
  Typography,
  CssBaseline,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { FormUserRegister } from "../../components";
import { useNavigate } from "react-router-dom";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [newUser, setNewUser] = useState({
    name: "",
    apellido: "",
    celular: "",
    profesion: "",
    correo: "",
    contrasena: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };
  const history = useNavigate();
  async function addUser() {
    const res = await createUser(newUser);
    if (res) {
      alert("usuario creado con exito");
      history("/login");
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormUserRegister
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
