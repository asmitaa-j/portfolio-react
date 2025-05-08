import { Button, Paper } from '@mui/material'
 import {Link} from 'react-router-dom'
 import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function EandE (){
    return(<>
  
    
        <Button component={Link} to="/" variant='text'sx={{}}>
      <ArrowBackIcon />
         
        </Button>
     
       
    </>);
} 

export default EandE