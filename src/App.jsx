import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Sostenibilità from './pages/Sostenibilità';
import About from "./pages/About";
import RecipeList from './pages/RecipeList';
import ErrorPage from './pages/ErrorPage';
import RecipeDetails from './pages/RecipeDetails';
import RecipeSteps from './pages/RecipeSteps';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/Sustain" element={<Sostenibilità />} />
        <Route path="/recipes/:searchTerm" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe/:id/steps" element={<RecipeSteps />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
