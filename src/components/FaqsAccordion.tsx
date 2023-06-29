import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import content from '../constants/content';

export default function FaqsAccordion() {
  return (
    <div>
      {content.faqs.map((question: any) => {
        if (question.part2) {
          return (
            <Accordion style={{borderLeft: `6px solid #111840`}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{width: '80%', fontSize: 18}}>{question.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.part1}</Typography>
                <br></br>
                <Typography>{question.part2}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return (
            <Accordion style={{borderLeft: `6px solid #111840`}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{width: '80%', fontSize: 18}}>{question.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{question.part1}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        }
      })}
    </div>
  );
}
