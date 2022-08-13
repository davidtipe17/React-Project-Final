import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.js";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Support from "../.././assets/img/support.svg";
import ImageListItem from "@mui/material/ImageListItem";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
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
import { styled, useTheme } from "@mui/material/styles";

const ResponsiveAppBar = () => {
  const history = useNavigate();
  const { user, logout, isAuth } = useContext(AuthContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }


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
    <Container>
      <Box
        sx={{
         
        }}
      >
        <AppBar >
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
                rowheight={164}
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
                        <LineAxisRoundedIcon fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => history("/tickets")}>
                      <ListItemIcon>
                        <WorkOutlineIcon fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => history("/filters")}>
                      <ListItemIcon>
                        <LocalGroceryStoreRoundedIcon fontSize="small" />
                      </ListItemIcon>
                    </MenuItem>
                    <MenuItem onClick={() => history("/chatsupport")}>
                      <ListItemIcon>
                        <MarkUnreadChatAltIcon fontSize="small" />
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
                rowheight={164}
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
                  DashBoard
                </Button>
                <Button
                  onClick={() => history("/tickets")}
                  sx={{ margin: 0.4, color: "white" }}
                  variant="text"
                >
                  My Tickets
                </Button>
                <Button
                  onClick={() => history("/filters")}
                  sx={{ margin: 0.4, color: "white" }}
                  variant="text"
                >
                  Browser
                </Button>
                <Button
                  onClick={() => history("/chatsupport")}
                  sx={{ margin: 0.4, color: "white" }}
                  variant="text"
                >
                  Mi Imbox
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0, display: "flex" }}>
                <Box sx={{ mr: 20 }}>
                  <Typography>
                    <Button sx={{ backgroundColor: "red" }} variant="contained">
                      Post a Ticket
                    </Button>
                  </Typography>
                </Box>

                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClick={handleCloseUserMenu}
                >
                  <MenuList onClick={handleCloseUserMenu}>
                    <MenuItem variant="h6" noWrap component="h5">
                      {user.name + " " + user.apellido}
                    </MenuItem>
                    <MenuItem onClick={() => history("/profile")}>
                      <ListItemIcon>
                        <SwitchAccountIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={() => history("/checkoutpayment")}>
                      <ListItemIcon>
                        <PaymentIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Add Funds</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => history("/questions")}>
                      <ListItemIcon>
                        <SupportAgentIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Support</ListItemText>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <Box sx={{ m:10 }}>
				<Outlet />
			</Box>
    </Container>
  );
};
export default ResponsiveAppBar;