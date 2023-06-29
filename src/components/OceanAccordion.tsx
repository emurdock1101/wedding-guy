import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import content from '../constants/content';

export default function OceanAccordion() {
  return (
    <div>
      {content.resultsAccordion.map((accordionRow: any) => {
        return (
          <Accordion style={{borderLeft: `6px solid ${accordionRow.color}`}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{width: '80%', fontSize: 18}}>{accordionRow.category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{accordionRow.part1}</Typography>
              <br></br>
              <Typography>{accordionRow.part2}</Typography>
              <br></br>
              <Typography>{accordionRow.part3}</Typography>
              <br></br>
              <Typography>{accordionRow.part4}</Typography>
              <br></br>
              <Typography>{accordionRow.part5}</Typography>
              <br></br>
              <Typography>{accordionRow.part6}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
