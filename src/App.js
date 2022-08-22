import * as React from 'react';
import {useState, useMemo} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {Context,useValue} from './libs'


export default function ButtonAppBar() {
  const [mode,setMode] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Context value={mode}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={()=>{
            setMode(mode === 'light'? 'dark':'light')
          }} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
    </Context>
  );
}
