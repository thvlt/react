import {Box,AppBar,Toolbar,Typography,IconButton,ThemeProvider,CssBaseline} from '@mui/material';
import {Menu, Brightness4,Brightness7} from '@mui/icons-material';
import {useValue} from './Root'

export default function App() {
  const value = useValue();
  return (
    <ThemeProvider theme={value.theme}>
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
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={value.changeTheme} color="inherit">
        {value.theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
