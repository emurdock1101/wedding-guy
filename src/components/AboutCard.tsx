import * as React from "react";

import { Button, makeStyles } from "@material-ui/core";
import { Facebook, GitHub, Instagram, Language, Mail, Phone, Twitter } from "@material-ui/icons";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import content from "../constants/content";
import elliot from "../images/elliot.jpeg";
import patrick from "../images/patrick.jpeg";
import { styled } from "@mui/material/styles";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  pageShell: {
    marginTop: 60,
  },
  phoneLink: {
    marginTop: 40,
    display: "flex",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    color: theme.palette.info.main,
    justifyItems: "middle",
    width: 310,
  },
  reachOut: {
    marginTop: 20,
  },
  phone: {
    fontSize: 35,
    marginRight: 20,
  },
  number: {
    fontSize: 25,
  },
  socialLinks: {
    marginLeft: -10,
    marginTop: 60,
  },
  aboutCard: {
    margin: 60,
  },
  part1: {
    color: theme.palette.info.main,
  },

  icon: {
    fontSize: 30,
    color: theme.palette.info.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  link: {
    textDecoration: "none",
  },
}));

interface AboutCardProps {
  member: string;
}

const AboutCard = (props: AboutCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const styles = useStyles();
  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={props.member === "elliot" ? elliot : patrick}
        alt="our developer"
      />
      <CardContent>
        <Typography variant="subtitle1" className={styles.part1}>
          {content["about"][props.member]["part1"]}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {props.member === "elliot" && (
          <>
            <a className={styles.link} href="https://www.github.com" target="_blank">
              <IconButton aria-label="elliot's github">
                <GitHub className={styles.icon} />
              </IconButton>
            </a>
            <a className={styles.link} href="https://www.instagram.com" target="_blank">
              <IconButton aria-label="elliot's instragram">
                <Instagram className={styles.icon} />
              </IconButton>
            </a>
            <a className={styles.link} href="https://www.google.com" target="_blank">
              <IconButton aria-label="elliot's website">
                <Language className={styles.icon} />
              </IconButton>
            </a>
          </>
        )}
        {props.member === "patrick" && (
          <>
            <a className={styles.link} href="https://www.facebook.com" target="_blank">
              <IconButton aria-label="patrick's facebook">
                <Facebook className={styles.icon} />
              </IconButton>
            </a>
            <a className={styles.link} href="https://www.instagram.com" target="_blank">
              <IconButton aria-label="patrick's instrgram">
                <Instagram className={styles.icon} />
              </IconButton>
            </a>
            <a className={styles.link} href="https://www.twitter.com" target="_blank">
              <IconButton aria-label="patrick's twitter">
                <Twitter className={styles.icon} />
              </IconButton>
            </a>
          </>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize="large" className={styles.icon} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant={"subtitle2"}>{content["about"][props.member]["part2"]}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AboutCard;