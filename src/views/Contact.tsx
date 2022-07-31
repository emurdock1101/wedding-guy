import { Box, Button, Grid, Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import { Facebook, Group, Instagram, Phone, Twitter } from "@material-ui/icons";
import { theme, theme as thm } from "../theme";

import ImgMediaCard from "../components/ContactCard";
import PageShell from "../components/PageShell";
import fam from "../images/fam.jpeg";
import { styled } from "@mui/material/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: 15,
    color: theme.palette.info.main,
  },
  fullName: {
    marginTop: 60,
    width: "100%",
  },
  button: {
    marginTop: 60,
  },
  facebook: {
    marginTop: 60,
    // marginLeft: 100,
    // width: "100%",
    color: "blue",
    fontSize: 120,
    border: "1x solid red",
  },
  photo: {
    height: 380,
    border: `${theme.palette.primary.main} 25px solid`,
  },
  photoBox: {
    marginTop: 60,
    marginLeft: 200,
    // backgroundColor: theme.palette.primary.main
    // border: "red 2px solid",
  },
  pageShell: {
    marginTop: 60,
  },
  phonePaper: {
    display: "flex",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
    textDecoration: "none",
    color: theme.palette.primary.light,
  },
  phoneLink: {
    display: "flex",
    "&:hover": {
      color: theme.palette.primary.main,
    },
    // textDecoration: "none",
    color: theme.palette.info.main,
    // border: "2px solid red",
    justifyItems: "middle"
  },
  reachOut: {
    marginTop: 20,
  },
  contactLinks: {
    marginLeft: 100,
  },
  phone: {
    fontSize: 35,
    marginRight: "10%",
    marginLeft: "10%",
  },
  number: {
    fontSize: 25,
  },
}));

interface ContactProps {}

const Contact: React.FC<ContactProps> = (props: ContactProps) => {
  const ValidationTextField = styled(TextField)({
    "& input:valid + fieldset": {},
    "& input:invalid + fieldset": {},
    "& input:valid:focus + fieldset": {
      borderLeftWidth: "6px !important",
      padding: "4px !important", // override inline-style
    },
  });

  const styles = useStyles();
  return (
    <div>
      <Grid container justify="center" alignItems="center" className={styles.container}>
        <PageShell pageTitle="Contact Us" />
        <Grid item xs={12} sm={11} lg={10} className={styles.pageShell}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4">How can we help?</Typography>
              <Typography variant="h6" className={styles.reachOut}>
                Reach out with any questions about the Personality + Big 5 test or our data-driven
                psychological counseling services.{" "}
              </Typography>
              <ValidationTextField
                label="Full name"
                required
                variant="outlined"
                className={styles.fullName}
              />
              <ValidationTextField
                label="Email"
                required
                variant="outlined"
                className={styles.fullName}
              />
              <ValidationTextField
                label="Your message"
                variant="outlined"
                className={styles.fullName}
                required
                multiline
                rows={6}
              />
              <Button color="default" variant="outlined" className={styles.button}>
                SEND
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={6}>
                  <a href="tel:15409999898" className={styles.phoneLink}>
                    <Phone className={styles.phone} />
                    <Typography variant="h5" className={styles.number}>
                      {" "}
                      +1-(540)-999-8989
                    </Typography>
                  </a>

                  {/* <a>
                <Facebook className={styles.facebook} />
              </a>
              <a>
                <Facebook className={styles.facebook} />
              </a>
              <a>
                <Facebook className={styles.facebook} />
              </a> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
