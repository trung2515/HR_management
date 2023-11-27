import { BrowserRouter as Router,  useRoutes} from "react-router-dom";
import DashBoard from  './pages/dashBoard/DashBoard'
import Employee from "./pages/employee/employee";
import './App.scss'
import EmployeeDetail from "./pages/employee/detail/EmployeeDetail";

const AppRoutes = () => {
  const routes = useRoutes(
    [
      { path: "/", element: <DashBoard/> },
      { path: "/employee", element: <Employee/> },
      { path: "/employee/:employeeId", element: <EmployeeDetail/> },
      { path: "/test", element: <DashBoard/> },
      { path: "/test1", element: <DashBoard/> },
      { path: "/test2", element: <DashBoard/> },
      { path: "/test3", element: <DashBoard/> },
    ]
  )
  return routes;
}

const App = () => {

  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
