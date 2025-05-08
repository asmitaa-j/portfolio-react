import React from "react";
import "./index.css";

import {
  Box,
  Grow,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import Img from "./assets/photo.png"

function Home() { 





  return (
    <div className="main">
           <Box  sx={{ width: "55%", height: "100vh", px: "30px", py: "30px", textDecoration:'none'}}>
       
      <Grow in={true} timeout={1500}>
        <Paper 
        sx={{p:3,width:'100%', height: "100%", backgroundColor: "rgb(26, 7, 44)",  borderRadius:'30px', textDecoration:'none', display:'flex' }}> 
         
         <Card
         height="200"
         sx={{ maxWidth: '350px', height:'350px', borderRadius: '30px', mr:'10px', backgroundColor: "rgb(26, 7, 44)"  }}>


          <CardMedia 
          component="img"
          height="300"
          
          image={Img} 
          alt="Animated Image"
          sx={{
            transition: 'transform 0.5s ease-in-out',
            '&:hover': {
              transform: 'scale(1.09)'
            }
          }}
          
          
          >
          
          </CardMedia> 


          
         </Card>



         <Typography variant="h1" sx={{ maxWidth:400,color: 'white', fontFamily:'arial'}}>Hello</Typography>
        </Paper> 
        </Grow>
      </Box> 

      <Box
        sx={{
          width: "45%",
          height: "100vh",
          px: "30px",
          py: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          
        }}
      >
        <Grow in={true} timeout={1000}>
          <Paper
          elevation={4} 
            component={Link}
            to="/education-and-experience"
            sx={{p:3,height: "50%", backgroundColor: "rgb(99, 87, 110)", borderRadius:'30px', textDecoration:'none' }}
          >
            <Typography sx={{ color: 'rgb(5, 1, 9white'}}>Education and experience</Typography>
          </Paper>
        </Grow>

      <> 
      <Grow in={true} timeout={2000}>
        <Paper 
         component={Link}
            to="/contact-me"
        elevation={4}
          sx={{ p:3,  height: "45%", backgroundColor: "rgba(217, 217, 217, 1)", borderRadius:'30px',textDecoration:'none' }}
        >
         <Typography sx={{ color: 'rgb(5, 1, 9'}}>Contact me</Typography>
        </Paper> 
        </Grow>
        </>
      </Box>

   
    </div>
  );
}

export default Home;
