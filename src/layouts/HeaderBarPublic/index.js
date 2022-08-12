import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Support from "../.././assets/img/support.svg";
import ImageListItem from "@mui/material/ImageListItem";
import { Outlet, useNavigate } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentIcon from "@mui/icons-material/Payment";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded";
import { Typography } from "@mui/material";
import InputRoundedIcon from "@mui/icons-material/InputRounded";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
const HeaderBarPublic = () => {
  const history = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                        <WorkOutlineIcon  fontSize="small" />
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
      
    </>
  );
};
export default HeaderBarPublic;
