import * as React from 'react';
import Container from '@mui/material/Container';
import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignUp from './routes/User/SignUp';
import Dashboard from './routes/Admin/Dashboard'
import Blog from './routes/Home/Blog'
import About from './routes/Home/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Lodges from './routes/Home/Lodges';
import Booking from './routes/Home/Booking';
import Culture from './routes/Home/Culture';
import Beach from './routes/Home/Beach';
import FindUs from './routes/Home/FindUs';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Eden Lets'}
      <Link color="inherit" href="">
Eden Lets
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    // /basename={window.location.pathname || ''}
        <Router basename={window.location.pathname || ''} >
          <Routes>
            <Route path="/" element={  <Blog />}/>
            <Route path="/about" element={  <About />}/>
            <Route path="/booking" element={  <Booking />}/>
            <Route path="/culture" element={  <Culture />}/>
            <Route path="/beach" element={  <Beach />}/>
            <Route path="/lodges" element={  <Lodges />}/>
            <Route path="/findus" element={  <FindUs />}/>

            {/* <Route path="/home" element={  <Blog />}/> */}
          </Routes>
        </Router>
        // <Copyright />
    //   </Box>
    // </Container>
  );
}
