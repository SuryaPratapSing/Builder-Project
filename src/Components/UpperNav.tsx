import React, { Component } from 'react';
import { Button, Typography, Breadcrumbs, Link, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

class UpperNav extends Component {


  render() {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, borderBottom: '1px solid #e0e0e0',background:'white' }}>
        <Box>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Admin
            </Link>
            <Link underline="hover" color="inherit" href="/courses">
              Courses
            </Link>
            <Typography color="text.primary">Laura test course</Typography>
          </Breadcrumbs>
          <Typography variant="h4" component="div">
            Laura test course
          </Typography>
        </Box>
        <Box>
          <Button variant="outlined" sx={{ mr: 2,color:"black", borderColor: "gray" }}>
            Save changes <CheckIcon sx={{fontSize:'20px', marginLeft:'10px'}}/>
          </Button>
          <Button variant="outlined" sx={{ mr: 2,color:"black", borderColor: "gray" }}>
            Duplicate course
          </Button>
          <Button variant="outlined" onClick={() => window.location.reload()} sx={{ mr: 2,color:"black", borderColor: "gray" }}>
            <RestartAltIcon />
          </Button>
          <Button variant="outlined" sx={{color:"black", borderColor: "gray"}}>
            <MoreVertIcon />
          </Button>
        </Box>
      </Box>
    );
  }
}

export default UpperNav;
