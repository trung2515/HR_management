import { Navigate, BrowserRouter as Router,  useNavigate,  useRoutes} from "react-router-dom";
import DashBoard from  './pages/dashBoard/DashBoard'
import Employee from "./pages/employee/employee";
import './App.scss'
import EmployeeDetail from "./pages/employee/detail/EmployeeDetail";
import Login from "./pages/login/login";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkToken} from "./redux/features/authSlice";



const AppRoutes = () => {
  const navigate= useNavigate()
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const routes = useRoutes(
    [
      { path: "/", element: <DashBoard/> },
      { path: "/login", element: <Login/>  },
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);
console.log('render app')
  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
