import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../../pages";
import 
{
  AppBar,
  Box,
  Button,
  Toolbar,
  Menu,
  Container,
  MenuItem,
  MenuList,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Support from "../.././assets/img/support.svg";
import ImageListItem from "@mui/material/ImageListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const HeaderBarPublic = () => {
  const history = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box
        sx={{
          width: 1600,
        }}
      >
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <ImageListItem
                component="a"
                href="/"
                sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
                cols={3}
                rowHeight={164}
              >
                <img src={Support} alt="" />
              </ImageListItem>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuList sx={{}}>
                    <MenuItem>
                      <ListItemIcon>
                        <WorkOutlineIcon fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Box
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { width: 40, height: 40, xs: "flex", md: "none" },
                  flexGrow: 7,
                  justifyContent: "center",
                }}
                cols={3}
                rowHeight={164}
              >
                <img src={Support} alt="" />
              </Box>
              <Box
                sx={{
                  margin: 1,
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <Button sx={{ margin: 0.4, color: "white" }} variant="text">
                  My Tickets
                </Button>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Button onClick={() => history("/Login")} sx={{ margin: 0.4, color: "white" }} variant="outlined">
                  <InputRoundedIcon sx={{ margin: 0.6 }} />
                  Login
                </Button>
                <Button onClick={() => history("/SignUp")} sx={{ margin: 0.4, color: "white" }} variant="outlined">
                  <AppRegistrationIcon sx={{ margin: 0.6 }} />
                  Sing Up
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

      <Outlet />
      <Footer />
    </>
  );
};
export default HeaderBarPublic;
