import { Button, Grid, Typography, makeStyles } from "@material-ui/core";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useStyles = makeStyles((theme) => ({
  info: {
    padding: "15px",
    marginTop: 60,
  },
  buttons: {
    marginTop: 60,
  },
  button: {
    marginRight: 25,
    marginBottom: 50,
    padding: 15,
  },
  included: {
    fontWeight: 400,
    font: "Monaco",
  },
}));

interface BuyTestProps {}

const BuyTest: React.FC<BuyTestProps> = (props: BuyTestProps) => {
  const styles = useStyles();

  const navigate = useNavigate();
  const nav = (path: string) => {
    if (sessionStorage.length > 0) {
      sessionStorage.clear();
    }
    navigate(path);
  };

  useEffect(() => {
    sessionStorage.clear();
  });

  const signUp = async (e: any) => {
    e.preventDefault();
    try {
      const stripe = await loadStripe(
        "pk_test_51LrmACDw2D6ArEBHOcUvlHH9y27SAtsFVv2HDc7xeVoYi4vK2RvEsLh6CU5fAQYJELe71BMTOAJfgkTroQWaGLCd0077izhlOI"
      );
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: "price_1LrmCvDw2D6ArEBHyeAtvzHl",
              quantity: 1,
            },
          ],
          mode: "payment",
          successUrl: "http://localhost:3000/purchased",
          cancelUrl: "http://localhost:3000",
        });
      }
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={2} className={styles.info}>
      <Grid item xs={12}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={10} lg={7}>
            <Typography variant="h2" className={styles.included}>
              What's included for $9.99?
            </Typography>
            <br></br>
            <Typography variant="h6">
              1. One copy of a 100-question scientifically-backed, peer-reviewed assessment of
              personality.
            </Typography>
            <br></br>
            <Typography variant="h6">
              2. In-depth analysis of results, specific to your scores.
            </Typography>
            <br></br>
            <Typography variant="h6">3. Access to view your scores anytime.</Typography>
            <br></br>
            <Typography variant="h6">
              4. Discount offerings towards coaching services with Personality+ staff, where you can
              further learn about your behaviors and discover more about yourself.
            </Typography>
            <div className={styles.buttons}>
              <Button
                color="primary"
                variant="contained"
                onClick={signUp}
                className={styles.button}
              >
                PURCHASE PERSONALITY+
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BuyTest;
