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

const pages = ["Dashboard", "My Tickets", "Inbox"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const history = useNavigate();

  const linkdashboard = () => {
    history("/MyTickets");
  };
  const link = {
    1: linkdashboard,
  };
  console.log("link", link[1]);

  const handleClickProfile = () => {
    history("/profile");
  };
  console.log(handleClickProfile);
  const handleClickPayment = () => {
    history("/checkoutpayment");
  };
  const handleClickLogout = () => {
    history();
  };
  const handleClickSupport = () => {
    history("/questions");
  };

  return (
    <Container>
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
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem key={page} index={index} onClick={link[1]}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
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
                <Button
                  sx={{ margin: 0.5, color: "white", }}
                  variant="text"
                >
                  Dasboard
                </Button>
                <Button
                  sx={{ margin: 0.5, color: "white",}}
                  variant="text"
                >
                  Text
                </Button>
                <Button
                  sx={{ margin: 0.5, color: "white",}}
                  variant="text"
                >
                  Text
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Box></Box>
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
                    <MenuItem onClick={handleClickProfile}>
                      <ListItemIcon>
                        <SwitchAccountIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Profile</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClickPayment}>
                      <ListItemIcon>
                        <PaymentIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Add Funds</ListItemText>
                    </MenuItem>
                    <MenuItem onClick={handleClickLogout}>
                      <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Logout</ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClickSupport}>
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
      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
export default ResponsiveAppBar;
