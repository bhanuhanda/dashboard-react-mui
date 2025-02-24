import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Button, FormControl, MenuItem, Popover, Select } from '@mui/material';
import { jwtDecode } from 'jwt-decode';

// MUI icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DescriptionIcon from '@mui/icons-material/Description';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import useIsMobile from '../hooks/useScreenSize';

const drawerWidth = 280;

const MainContent = styled.main`
  flex-grow: 1;
  padding: 16px;
  margin-top: 64px; /* to offset the AppBar height */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// Navigation items with label, icon, and route path
const navItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { label: 'Attendance', icon: <CalendarTodayIcon />, path: '/attendance' },
  { label: 'Leaves', icon: <DateRangeIcon />, path: '/leaves' },
  { label: 'Organization', icon: <BusinessIcon />, path: '/organization' },
  { label: 'Tasks', icon: <AssignmentIcon />, path: '/tasks' },
  { label: 'Beat', icon: <TimelineIcon />, path: '/beat' },
  { label: 'Targets', icon: <TrackChangesIcon />, path: '/targets' },
  { label: 'Form', icon: <DescriptionIcon />, path: '/form' },
  { label: 'Order', icon: <ShoppingCartIcon />, path: '/order' },
  { label: 'Expenses', icon: <MoneyOffIcon />, path: '/expenses' },
  { label: 'Clients & Sites', icon: <PeopleIcon />, path: '/clients-sites' },
  { label: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
];

export default function DashboardLayout() {
  const isMobile = useIsMobile();
  const [userEmail, setUserEmail] = useState('');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accountType, setAccountType] = useState('Professional');

  const openUserMenu = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleAccountChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleUserButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('google_jwt');
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('google_jwt');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="https://unolo.com/_next/image?url=https%3A%2F%2Fd3fc4hzuyam4jx.cloudfront.net%2Fpublic%2Fimg%2Flogos%2Funolo_logo.png%3Fformat%3Dauto&w=384&q=75"
            alt="Unolo Logo"
            style={{ width: '35%', height: 'auto', marginRight: '24px' }}
          />

          <FormControl variant="standard">
            <Select
              value={accountType}
              onChange={handleAccountChange}
              sx={{ fontWeight: 500 }}
            >
              <MenuItem value="Professional">Professional</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <StyledLink to={item.path} key={item.label}>
            <ListItem
              button
              onClick={() => {
                if (isMobile) setMobileOpen(false);
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar sx={{ width: '100vw' }}>
          <Box sx={{ flexGrow: 1 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {/* Right-side Icons */}
          <IconButton
            color="inherit"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              p: 1,
              mr: 1,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <ChatIcon />
          </IconButton>

          <IconButton
            color="inherit"
            sx={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '50%',
              p: 1,
              mr: 1,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <Badge badgeContent={99} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {isMobile ? (
            <IconButton
              onClick={handleUserButtonClick}
              color="inherit"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                p: 1,
                mr: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                },
              }}
            >
              <AccountCircleIcon />
            </IconButton>
          ) : (
            <Button
              onClick={handleUserButtonClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textTransform: 'none',
                color: 'inherit',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: 2,
                px: 1.5,
                py: 0.5,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.3)',
                },
              }}
            >
              <AccountCircleIcon sx={{ mr: 1 }} />
              <Typography variant="body1">{userEmail}</Typography>
            </Button>
          )}

          <Popover
            open={openUserMenu}
            anchorEl={anchorEl}
            onClose={handleCloseUserMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Box sx={{ p: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Popover>
        </Toolbar>
      </AppBar>

      {/* Responsive Drawer */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}

      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}
