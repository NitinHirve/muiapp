import { Button, styled, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

function App() {


  const BlueButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.otherColor.main,
         color:"#888",
         margin:5,
         "&:hover":{
           backgroundColor : "lightblue"
         },
         "&:disabled":{
          backgroundColor : "gray",
          color:"white"
         }
  }))

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<SettingsIcon />} variant="contained" color="secondary">Contained</Button>
      <Button startIcon={<AddIcon />} variant="contained" color="success" >Add new post</Button>
      <Button variant="outlined" disabled >Outlined</Button>

      <Typography variant="h1" component="p"> 
        It uses h1 tag but its p tag
      </Typography>
      <Button variant="contained"
        sx={{backgroundColor:"skyBlue",
         color:"#888",
         margin:5,
         "&:hover":{
           backgroundColor : "lightblue"
         },
         "&:disabled":{
          backgroundColor : "gray",
          color:"white"
         }}}
      >
      My unique button
      </Button>


      <BlueButton  >My custom button</BlueButton>

    </div>

  );
}

export default App;
