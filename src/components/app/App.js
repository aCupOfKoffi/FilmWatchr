import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AuthorsPage from '../actorsPage/ActorsPage';
import FilmsPage from '../filmPage/FilmsPage';
import GenrePage from '../genrePage/GenrePage';
import TrendingPage from '../trendingPage/TrendingPage';
import AppHeader from "../appHeader/AppHeader";
import './App.css';
import Footer from "../Footer/Footer";

export default function BasicExample() {
  return (
    <Router>
        <AppHeader />
      <div className="main_content">
          <Routes>
              <Route path='/' element={<FilmsPage />} />
              <Route path='/genres' element={<GenrePage />} />
              <Route path='/actors' element={<AuthorsPage />} />
              <Route path='/trending' element={<TrendingPage />} />
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

// import { Route, Router, Routes } from 'react-router-dom';
// import AppHeader from '../appHeader/AppHeader';

// import './App.css';

// const App = () => {
//     return (
//         <Router>
//             <div className='container'>
//                 <AppHeader />

//                 <main>
//                     {/*  */}
//                 </main>
//             </div>
//         </Router>
//     )
// }

// export default App;
