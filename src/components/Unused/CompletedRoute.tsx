import { Navigate } from "react-router-dom";

interface CompletedRouteProps {
  items: any;
  component: JSX.Element;
}

const CompletedRoute: React.FC<CompletedRouteProps> = (props: CompletedRouteProps) => {
  return !props.items ? props.component : <Navigate to="/" />;
};

export default CompletedRoute;
