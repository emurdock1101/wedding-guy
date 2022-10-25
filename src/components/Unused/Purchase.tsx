import { Button, Grid, Typography, makeStyles } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface PurchaseProps {
  loggedIn: boolean;
}

const Purchase: React.FC<PurchaseProps> = (props: PurchaseProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const useStyles = makeStyles((theme) => ({
    container: {
      padding: "15px",
      marginTop: 30,
      textAlign: "center",
    },
    buttons: {
      marginTop: 60,
    },
    plus: {
      color: theme.palette.primary.main,
    },
    bigTitle: {
      fontWeight: 600,
      font: "Monaco",
      color: "#111840", //navy blue
      fontSize: isMobile ? 60 : 80,
    },
    thanks: {
      fontSize: isMobile ? 30 : 50,
    },
    begin: {
      padding: 20
    },
  }));
  const styles = useStyles();

  const navigate = useNavigate();
  const nav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <>
      <Grid container justify="center" alignItems="center" spacing={2} className={styles.container}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10} lg={5}>
              <br></br>
              <br></br>
              <Typography variant="h4" className={styles.thanks}>
                Thank you for purchasing
              </Typography>
              <br></br>
              <Typography variant="h1" className={styles.bigTitle}>
                Personality<span className={styles.plus}>+</span>
              </Typography>
              <div className={styles.buttons}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => nav("/test")}
                  className={styles.begin}
                >
                  BEGIN ASSESSMENT
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Purchase;
