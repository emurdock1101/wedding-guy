import { Box, Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";

interface OceanBannerProps {
  ocean: string;
  aspect1: string;
  aspect2: string;
  hexMain: string;
  hexLight: string;
}

const OceanBanner: React.FC<OceanBannerProps> = (props: OceanBannerProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const useStyles = makeStyles((theme) => ({
    box: {
      height: 150,
    },
    aspects: {
      width: "20%",
      fontSize: 24,
      marginLeft: 30,
      marginRight: 10,
      // border: "1px solid blue",
    },
    row: {
      display: "flex",
      marginTop: 10,
      padding: 20,
      alignItems: "center",
    },
    title: {
      width: "50%",
      marginLeft: 30,
      fontWeight: 300,
      font: "Monaco",
      // border: "1px solid red",
    },
    vertical: {
      backgroundColor: props.hexMain,
    },
    vertical2: {
      backgroundColor: props.hexLight,
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
    <Box className={styles.box}>
      <div className={styles.row}>
        <Divider orientation="vertical" flexItem className={styles.vertical} />
        <Typography variant="h2" className={styles.title}>
          {props.ocean}
        </Typography>
        {!isMobile && <Divider orientation="vertical" flexItem className={styles.vertical2} />}
        {!isMobile && <Typography className={styles.aspects}> {props.aspect1}</Typography>}
        {!isMobile && <Divider orientation="vertical" flexItem className={styles.vertical2} />}
        {!isMobile && <Typography className={styles.aspects}>{props.aspect2}</Typography>}
      </div>

      {isMobile && <Divider orientation="vertical" flexItem className={styles.vertical2} />}
      {isMobile && <Typography className={styles.aspects}> {props.aspect1}</Typography>}
      {isMobile && <Divider orientation="vertical" flexItem className={styles.vertical2} />}
      {isMobile && <Typography className={styles.aspects}>{props.aspect2}</Typography>}
    </Box>
  );
};

export default OceanBanner;
