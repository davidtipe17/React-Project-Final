import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  Divider,
  List,
  ListItem,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EngineeringIcon from "@mui/icons-material/Engineering";
const Chasupport = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Paper elevation={5}>
        <Box p={3}>
            <Box  className="text-center">
          <Typography variant="h4" gutterBottom>
            Feliz Chat
          </Typography>
          <Divider />
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Hola, {user.name}
          </Typography>
          <Divider />
          <Typography variant="h6" >
            Te contamos que estamos implementando esta funcionalidad para una mejor
            experiencia.
          </Typography>
          <Divider />
          <IconButton aria-label="send" color="primary">
            <EngineeringIcon sx={{ fontSize:70, }}/>
          </IconButton>
          </Box>
          <Grid container spacing={4} alignItems="center">
            <Grid id="chat-window" xs={12} item>
              <List id="chat-window-messages">
                <ListItem></ListItem>
              </List>
            </Grid>
            <Grid xs={2} item>
              <FormControl fullWidth>
                <TextField
                  disabled
                  value="#"
                  label="Nickname"
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid xs={9} item>
              <FormControl fullWidth>
                <TextField
                  disabled
                  value="#"
                  label="Type your message..."
                  variant="outlined"
                />
              </FormControl>
            </Grid>
            <Grid xs={1} item>
              <IconButton aria-label="send" color="primary">
                <SendIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
export default Chasupport;
