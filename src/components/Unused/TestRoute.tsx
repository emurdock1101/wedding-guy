import { Navigate } from "react-router-dom";

interface TestRouteProps {
  user: any;
  items: any;
  component: JSX.Element;
}

/**
 * There IS a user but NO result data.
 */
const TestRoute: React.FC<TestRouteProps> = (props: TestRouteProps) => {
  return props.user && !props.items ? props.component : <Navigate to="/" />;
};

export default TestRoute;
