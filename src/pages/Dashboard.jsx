import * as React from 'react';
import "../assets/styles/Dashboard.css"
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MaxHealthCare from "../assets/logo/MaxHealthCare.png"
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Cards from '../components/DashboardComponents/Cards';
import { Grid } from '@mui/material';
import TherapistList from '../components/DashboardComponents/TherapistList';
import Chats from '../components/DashboardComponents/Chats';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className='login-Main' sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className='appDrawer'>
        <Toolbar className='navBar' sx={{background: '#ffffff80'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img src={MaxHealthCare} height="50px" width="100px" alt="Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'inherit',
            border: 0
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <DrawerHeader className='sidebar'> */}
        {/* </DrawerHeader> */}
        {/* <Divider /> */}
        {/* <div className='sidebar'> */}
          <List className='list'>
            <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
            {['Dashboard', 'Add Prescription', 'Post Session Notes', 'Pending Tasks', 'Therapist', 'Patients', 'Patients', 'Calender', 'Reports', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        {/* </div> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container spacing={3} sx={{display: 'flex'}}>
          <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Cards />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Cards />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Cards />
            </Grid>
            <Grid item lg={3} md={6} sm={6} xs={12}>
              <Cards />
            </Grid>
          </Grid>
          </Grid>
          <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item >
              <TherapistList />
            </Grid>
            <Grid item >
              <Chats/>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}