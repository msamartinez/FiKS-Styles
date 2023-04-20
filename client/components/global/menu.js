import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactlessOutlinedIcon from '@mui/icons-material/ContactlessOutlined';
import styled from "@emotion/styled";
import { shades } from "../../theme";
import { setIsMenuOpen }  from "../../store/menuslice"
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Menu =()=>{
 const navigate = useNavigate();
 const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) =>state.menu.isMenuOpen);


  console.log(isMenuOpen)


return (
    <Box 
     display={ isMenuOpen ? "block" : "none"}
     position="fixed"
      zIndex={10}
      width="50%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(200px, 30%)"
        height="100%"
        backgroundColor="white"
        color="black"
      >
        <Box padding="30px" overflow="auto" height="100%" margin="auto">
          <FlexBox mb="15px" margin="auto">
            <Typography variant="h3">MENU</Typography>
            <IconButton onClick={() => dispatch(setIsMenuOpen())}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <FlexBox  p="15px 0" onClick={() => {navigate("/signup")}} margin="auto">
          <IconButton>
            <PeopleOutlinedIcon size={30}/>
            <Typography>SignUp/Login</Typography>
            </IconButton>
          </FlexBox>

          <FlexBox  p="15px 0" onClick={() => {navigate("/sizechart")}} margin="auto">
          <IconButton>
            <CheckroomOutlinedIcon size={30}/>
            <Typography>SizeChart</Typography>
            </IconButton>
            </FlexBox>

            <FlexBox  p="15px 0" onClick={() => {navigate("/contact")}} margin="auto">
                <IconButton>
              <ContactlessOutlinedIcon size={30} />
            <Typography >Contact Us</Typography>
            </IconButton>
            </FlexBox>

          </Box>
        

      </Box>
    </Box>
  );
};

export default Menu