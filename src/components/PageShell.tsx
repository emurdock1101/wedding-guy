import Banner from "./Banner";
import { Grid } from "@material-ui/core";
import HeaderDrawer from "./HeaderDrawer";

interface PageShellProps {
  pageTitle: string;
}

const PageShell: React.FC<PageShellProps> = (props: PageShellProps) => {
  return (
    <Grid container justify="center" alignItems="flex-start" style={{marginBottom: 120}}>
      <Grid item xs={12}>
        <HeaderDrawer />
      </Grid>
      <Grid item xs={12}>
        <Banner pageTitle={props.pageTitle} />
      </Grid>
    </Grid>
  );
};

export default PageShell;
