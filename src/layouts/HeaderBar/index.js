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
import { AuthContext } from "../../context";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Support from "../.././assets/img/support.svg";
import ImageListItem from "@mui/material/ImageListItem";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import MenuList from "@mui/material/MenuList";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PaymentIcon from "@mui/icons-material/Payment";

const pages = ["Dashboard", "My Tickets", "Inbox"];
const settings = ["Profile", "Support", "Add Funds", "Logout"];

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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
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
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
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
                    <MenuItem onClick={() =>history("/questions")}>
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
