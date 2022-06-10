import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from "./Pages/Home/ProjectDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/projectDetails/:id" element={<ProjectDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
