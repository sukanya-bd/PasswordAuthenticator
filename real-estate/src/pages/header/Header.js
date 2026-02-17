import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({ handleDrawerToggle }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {/* <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            EMPLOYEE
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
