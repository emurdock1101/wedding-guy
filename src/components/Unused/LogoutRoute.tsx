import { Navigate } from "react-router-dom";

interface LogoutRouteProps {
  user: any;
  component: JSX.Element;
}

const LogoutRoute: React.FC<LogoutRouteProps> = (props: LogoutRouteProps) => {
  return !props.user ? props.component : <Navigate to="/" />;
};

export default LogoutRoute;
