import React, { useEffect, useState } from 'react';
import CardMovie from './CardMovie'
import { Row ,Card , Col } from 'react-bootstrap'
import PaginationComponent from './Pagination'
import { useDispatch, useSelector } from 'react-redux';
import {getAllMovie} from '../Redux/actions/movieAction'

const MovieList = () => {

  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);


  const dataMovies = useSelector((state)=> state.movies)  
  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies]);

  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ? (movies.map((mov)=>{
          return (<CardMovie className="my-1" key={mov.id} mov={mov}/>)
        })) : <h2 > لا يوجد افلام لعرضها.....</h2>
      }
      {movies.length >=1 ? (<PaginationComponent />) : null}
      
    </Row>
  )
}

export default MovieList
