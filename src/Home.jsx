import React from "react";
import "./index.css";
import ShinyText from './pages/ShinyText';
import BlurText from "./pages/BlurText";

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
import Img2 from "./assets/sword.png"

function Home() { 


  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };


  return (
    <div className="main">
      <Box
        sx={{
          width: "55%",
          height: "100vh",
          px: "40px",
          py: "40px",
          textDecoration: "none",
        }}
      >
        <Grow in={true} timeout={1500}>
          <Paper
            sx={{
              p: 3,
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(0, 0, 0)",
              borderRadius: "30px",
              textDecoration: "none",
              display: "flex", 
              justifyContent:'space-between'
            }}
          >


            <Card
            
              sx={{
                maxWidth: "350px",
                height: "350px",
                borderRadius: "30px",
               mr:'20px', 
                backgroundColor: "rgb(0, 0, 0)", 
                display:'flex', 
                position:'relative'
              }}
            > 
             <CardMedia
                component="img"
                height="100" 
                image={Img2}
                alt="Animated Image"
                sx={{ p:'10px',
               position:'absolute', 
               zIndex:'3',
               height:'200px',
               width:'150px',
               top:'130px',
               left:'150px',
               transition: "transform 0.5s ease-in-out",
               "&:hover": {
                 transform: "scale(1.05) ", transform: 'rotateX(90deg)'
               }, 

                }}
              ></CardMedia>
              <CardMedia
                component="img"
                height="300" 
                image={Img}
                alt="Animated Image"
                sx={{ p:'10px',
                  transition: "transform 0.5s ease-in-out",
               "&:hover": {
                 transform: "scale(1.1) ", 
               }, 
                }}
              ></CardMedia>
            </Card> 
            <Box sx={{ mt:'20px', ml:'20px'}}>
            <Typography variant="h2" sx={{ color: "white", mb:'10px', transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.15) ",
                  } }}>
              <BlurText
                text="Hellooo!!!!! "
                delay={450}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8"
              /> </Typography>

              <Typography variant="h3" sx={{ color: "white", mr:'40px', transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.15) ",
                  }}}>
              
                <BlurText
                  text="This is ASMITA :)"
                  delay={450}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-2xl mb-8"
                />
              
            </Typography> 
            </Box>
            


          </Paper>
        </Grow>
      </Box>

      <Box
        sx={{
          width: "45%",
          height: "100vh",
          px: "40px",
          py: "40px",
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
            sx={{
              p: 3,
              height: "50%",
              backgroundColor: "rgba(72, 72, 72, 0.69)",
              borderRadius: "30px",
              textDecoration: "none",
            }}
          >
            <Typography variant="h4"sx={{ color: "white" }}>
              Education and experience
            </Typography>
          </Paper>
        </Grow>

        <>
          <Grow in={true} timeout={2000}>
            <Paper
              component={Link}
              to="/contact-me"
              elevation={4}
              sx={{
                p: 3,
                height: "45%",
                backgroundColor: "rgba(134, 132, 132, 0.67)",
                borderRadius: "30px",
                textDecoration: "none",
              }}
            >
              <Typography variant="h4"sx={{ color: "white" }}>Contact me</Typography>
            </Paper>
          </Grow>
        </>
      </Box>
    </div>
  );
}

export default Home;
