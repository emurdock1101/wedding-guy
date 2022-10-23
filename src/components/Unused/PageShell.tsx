import Banner from "../Banner";
import { Grid } from "@material-ui/core";
import HeaderDrawer from "../HeaderDrawer";

interface PageShellProps {
  pageTitle: string;
  loggedIn: boolean;
  onLogOut: () => void;
}

const PageShell: React.FC<PageShellProps> = (props: PageShellProps) => {
  return (
    <Grid container justify="center" alignItems="flex-start" style={{ marginBottom: 120 }}>
      <Grid item xs={12}>
        <HeaderDrawer loggedIn={props.loggedIn} onLogOut={props.onLogOut} completed={true}/>
      </Grid>
      <Grid item xs={12}>
        <Banner pageTitle={props.pageTitle} />
      </Grid>
    </Grid>
  );
};

export default PageShell;
