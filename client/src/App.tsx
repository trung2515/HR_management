import './App.scss'
import { Navigate, BrowserRouter as Router,  useNavigate,  useRoutes} from "react-router-dom";
import DashBoard from  './pages/dashBoard/DashBoard'
import Employee from "./pages/employee/employee";
import Department from "./pages/department/department";
import EmployeeDetail from "./pages/employee/detail/EmployeeDetail";
import Login from "./pages/login/login";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkToken} from "./redux/features/authSlice";
import Emty from "./pages/emty/emty";
import {setDepartments} from './redux/features/departmentSlice';
import axios from './services/axios';
import apiUrl from './constant/apiUrl';



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
      { path: "/department", element: <Department/> },
      { path: "/test", element: <Emty/> },
      { path: "/test1", element: <Emty/> },
      { path: "/test2", element: <Emty/> },
      { path: "/test3", element: <Emty/> },
      { path: "/test4", element: <Emty/> },
      { path: "/test5", element: <Emty/> },
      { path: "/test6", element: <Emty/> },
    ]
  )

  return routes;
}

const App = () => {

  const dispatch = useDispatch();

  const getDepartments = async() => {
    try {
      const response = await axios.get(apiUrl.department.index)
      const data = await response.data.data;
      console.log('data department',data, response.data)
      dispatch(setDepartments(data));
    } catch (error) {
      console.log(error)
    } 
  } 

  useEffect(() => {
    dispatch(checkToken());
    getDepartments()
  }, [dispatch]);



  return (
    <>
      <Router>
        <AppRoutes/>
      </Router>
    </>
  );
}

export default App;
