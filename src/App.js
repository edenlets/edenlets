import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignUp from './routes/User/SignUp';
import Dashboard from './routes/Admin/Dashboard'
import Blog from './routes/Home/ '

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
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
        <Router>
          <Routes>
            <Route path="/" element={  <Blog />}/>
            {/* <Route path="/home" element={  <Blog />}/> */}
          </Routes>
        </Router>
        // <Copyright />
    //   </Box>
    // </Container>
  );
}
