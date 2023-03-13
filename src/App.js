
import './App.css';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Grid, Toolbar, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function App() {
  return (
    <div className="App">
      {/* Static state for appbar */}
      <AppBar position='static'>  
      
        <Toolbar>
          <Typography variant='h4' align='left' sx={{flexGrow: 1}}>
              MUI NEW
          </Typography>
          {/* color inherit from parent (white) */}
          <Button color='inherit'>Sign up</Button>
          <Button color='inherit'>Sign in</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={5} p={5}> 
        <Grid item xs={4} >  
        <Typography paragraph={true} align='justify'>
            aaIt is a long established fact that a reader will be distracted by the 
        readable content of a page when looking at its layout. The point of usin
        g Lorem Ipsum is that it has a more-or-less normal distribution of lette
        rs, as opposed to using 'Content here, content here', making it look lik
        e readable English. Many desktop publishing packages and web page editors
         now use Lorem Ipsum as their default model text, and a search for 'lorem 
         </Typography>
         <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography>Dropdown</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Dropdown item</Typography>
          <Typography>Dropdown item</Typography>
          <Typography>Dropdown item</Typography>
      </AccordionDetails>
      </Accordion>
 
        </Grid>
        <Grid item xs={8}> 
        <Typography paragraph={true} align='justify'>
        It is a long established fact that a reader will be distracted by the 
        readable content of a page when looking at its layout. The point of usin
        g Lorem Ipsum is that it has a more-or-less normal distribution of lette
        rs, as opposed to using 'Content here, content here', making it look lik
        e readable English. Many desktop publishing packages and web page editors
         now use Lorem Ipsum as their default model text, and a search for 'lorem 
        </Typography>
        <FormControl>
          <FormLabel>This form is created for fun</FormLabel>
          <RadioGroup row> 
            <FormControlLabel value='Frontend' label='Frontend' control={<Radio/>}/> 
            <FormControlLabel value='Backend' label='Backend' control={<Radio/>}/> 
            <FormControlLabel value='Fullstack' label='Fullstack' control={<Radio/>}/> 

            
          </RadioGroup>
        </FormControl>
        </Grid>
      </Grid>
      
      
      
     

      <Stack direction="row" spacing={5} paddingTop={20} paddingLeft={60}>
      <Button variant='text'>hello</Button>
      <Button variant='contained'>hello</Button>
      <Button variant='outlined'>hello</Button>
      </Stack>
    </div>
  );
}

export default App;
