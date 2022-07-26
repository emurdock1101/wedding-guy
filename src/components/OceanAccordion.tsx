import { Aspect, Ocean } from "../constants/schema";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { theme as thm } from "../theme";

export default function OceanAccordion() {
  return (
    <div>
      <Accordion style={{ borderLeft: `6px solid ${thm.palette.error.main}` }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "40%", fontSize: 18}}>{Ocean.Openness.toString()}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {Ocean.Openness.toString()} is comprised of{" "}
            <strong>{Aspect.AestheticOpenness.toString()}</strong> and <strong>{Aspect.Intellect.toString()}</strong>.
          </Typography>
          <br></br>
          <Typography>
            Aesthetic Openness is one's willingness to try new things and consider new ideas.
          </Typography>
          <br></br>
          <Typography>Intellect is one's capacity to understand complex ideas.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ borderLeft: `6px solid ${thm.palette.warning.main}` }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "40%", fontSize: 18 }}>Conscientiousness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Conscientiousness is comprised of <strong>Industriousness</strong> and{" "}
            <strong>Orderliness</strong>.
          </Typography>
          <br></br>
          <Typography>Industriousness is one's capacity to routinely work hard.</Typography>
          <br></br>
          <Typography>
            Orderliness is one's tendency to stay organized with schedules, priorities, and
            belongings.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ borderLeft: `6px solid ${thm.palette.success.main}` }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "40%", fontSize: 18 }}>Extraversion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Extraversion is comprised of <strong>Enthusiasm</strong> and{" "}
            <strong>Assertiveness</strong>.
          </Typography>
          <br></br>
          <Typography>Enthusiasm is one's interest in engaging in activities.</Typography>
          <br></br>
          <Typography>
            Assertiveness is one's willingness to share his opinion other people.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ borderLeft: `6px solid ${thm.palette.primary.main}` }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "40%", fontSize: 18 }}>Agreeableness</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Agreeableness is comprised of <strong>Compassion</strong> and{" "}
            <strong>Politeness</strong>.
          </Typography>
          <br></br>
          <Typography>Compassion is one's empathy towards the wellbeing of others.</Typography>
          <br></br>
          <Typography>Politeness is one's tendency to avoid being confrontational.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ borderLeft: `6px solid ${thm.palette.secondary.main}` }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ width: "40%", fontSize: 18 }}>Neuroticism</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Neuroticism is comprised of <strong>Withdrawal</strong> and <strong>Volatility</strong>.
          </Typography>
          <br></br>
          <Typography>
            Withdrawal is one's tendency to suppress his emotions when faced with negative
            experiences.
          </Typography>
          <br></br>
          <Typography>Volatility is one's measure of emotion fluctuation.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
