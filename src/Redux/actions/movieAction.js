import {ALLMOVIES,MovieApi} from '../types/moviestype';
import axios from 'axios';


export const getAllMovie = ()=>{

  //middleware between {action} and {reducer} 
  return async (dispatch)=>{
    const res = await axios.get(MovieApi)
    dispatch({ type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
  }
} 


export const getMovieSearch = (word)=>{

  //middleware between {action} and {reducer} 
  return async (dispatch)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1d5913a5cf77b4aef98b4d716ca0beca&query=${word}&language=ar`)
    dispatch({ type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
  }
} 


export const getPage = (page)=>{

  //middleware between {action} and {reducer} 
  return async (dispatch)=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1d5913a5cf77b4aef98b4d716ca0beca&language=ar&page=${page}`)
    dispatch({ type: ALLMOVIES, data: res.data.results , pages: res.data.total_pages})
  }
} 