import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='mt-[30px] bg-primary'>
        <h1 style={{color:"white",fontSize:"35px",fontWeight:"bold"}}>Frequently Asked Questions</h1>
      <Accordion style={{}} TransitionProps={{ unmountOnExit: true }} className='bg-primary mt-[5px]' >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"rgb(0, 4, 15)"}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:"rgb(0, 4, 15)"}}>Is this platform free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes! Our platform is completely free to use.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-[5px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"rgb(0, 4, 15)"}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What file types are allowed for photo uploads?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We allow a variety of file types including .jpg, .png, and .gif.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='mt-[5px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"rgb(0, 4, 15)"}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Can I share my photos on social media?</Typography>
        </AccordionSummary>
        <AccordionDetails>

        <Typography>Not yet, but we are working on integrating social media sharing in the future.</Typography>
        </AccordionDetails>
      
      </Accordion>
    </div>
  );
}
