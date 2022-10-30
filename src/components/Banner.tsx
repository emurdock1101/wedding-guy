import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

interface BannerProps {
  pageTitle: string;
}

const Banner: React.FC<BannerProps> = (props: BannerProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    subheading: {
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
      color: "white",
      fontSize: isMobile ? 50 : 60,
      textAlign: isMobile ? "center" : "left",
      fontWeight: 300
    },
    paper: {
      backgroundColor: "#111840", // navy blue
      borderRadius: 0
    },
    container: {
      marginBottom: 90,
    },
  }));

  const styles = useStyles();

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Grid container justify="center" alignItems="flex-start" className={styles.container}>
      <Grid item xs={12}>
        <Paper elevation={2} className={styles.paper}>
          <Grid container spacing={6} justify="center" alignItems="flex-start">
            <Grid item xs={12} sm={11} lg={10}>
              <Typography variant="h3" className={styles.subheading}>
                {props.pageTitle}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Banner;
