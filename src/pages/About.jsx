import React from 'react' 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Paper } from '@mui/material'
 import {Link} from 'react-router-dom'


const About =() => {
  return(<>
  

        <Button component={Link} to="/" variant='text'sx={{}}>
      <ArrowBackIcon />
         
        </Button>
        
  
  </>)
} 

export default About