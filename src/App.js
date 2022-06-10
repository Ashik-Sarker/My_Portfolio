import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from "./Pages/Home/ProjectDetails";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/projectDetails/:id" element={<ProjectDetails />}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
