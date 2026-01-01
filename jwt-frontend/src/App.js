import logo from './logo.svg';
import './App.css';
import LoginPage from "./pages/LoginPage";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
   <Routes>
       <Route path={"/login"} element={<LoginPage/>}></Route>
       <Route path={"/home"} element={<HomePage/>}></Route>
       <Route path={"/*"} element={<LoginPage/>}></Route>
   </Routes>
  );
}

export default App;
