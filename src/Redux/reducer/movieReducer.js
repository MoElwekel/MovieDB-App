import {ALLMOVIES} from '../types/moviestype';


const initialValue = {
  movies: [],
  pageCount: 0,
};

//{2}
export const movieReduser =(state=initialValue ,action)=>{
  switch(action.type)
  {
    case ALLMOVIES:
      return {movies: action.data , pageCount: action.pages}
    default:
      return state;
  }
}