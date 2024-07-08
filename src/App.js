import './App.css';

import Receipe from './Components/Receipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Components/Details';
import { RecipeProvider } from './Components/RecipeContext'; 

function App() {
 

  return (
    
    <RecipeProvider>
    <Router>
    
    <Routes>
        <Route path='/' element={<Receipe  />} />

        <Route path='/details/:id' element={<Details />} />
    </Routes>
    </Router>
    </RecipeProvider>
  );
}

export default App;
