import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from './Component/MovieList';
import Navbar from './Component/Navbar'; 
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import MovieDetails from './Component/MovieDetails';






function App() {



  return (
    <div className="font color-body">
      <Navbar />
      <Container>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<MovieList/>} />
              <Route path={`/movie/:id`} element={<MovieDetails/> } />
            </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
