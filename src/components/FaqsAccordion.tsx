import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import content from "../constants/content";
import { theme as thm } from "../theme";

export default function FaqsAccordion() {
  return (
    <div>
      {content.faqs.map((question: any) => {
        return (
          <Accordion style={{ borderLeft: `6px solid ${thm.palette.primary.main}` }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ width: "80%", fontSize: 18 }}>{question.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{question.part1}</Typography>
              <br></br>
              <Typography>{question.part2}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
