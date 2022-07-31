import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import HeaderDrawer from "./HeaderDrawer";

interface PageShellProps {
  pageTitle: string;
}

const PageShell: React.FC<PageShellProps> = (props: PageShellProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    subheading: {
      textAlign: "center",
      color: "white",
      padding: "10px",
      fontSize: isMobile ? 60 : 80,
    },
    info: {
      marginBottom: "20px",
      fontSize: 18,
    },
    titlePaper: {
      backgroundColor: "#111840", // navy blue
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
    <Grid container spacing={6} justify="center" alignItems="flex-start">
      <Grid item xs={12}>
        <HeaderDrawer />
      </Grid>
      <Grid item xs={12} sm={11} lg={10}>
        <Paper elevation={2} className={styles.titlePaper}>
          <Typography variant="h3" className={styles.subheading}>
            {props.pageTitle}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PageShell;
