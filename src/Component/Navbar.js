import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { useDispatch } from 'react-redux';
import {getAllMovie,getMovieSearch} from '../Redux/actions/movieAction';



const Navbar = () => {

  const onsearch =(word)=>{
    search(word);
  }
  const dispatch = useDispatch();
  // Search function to filter movies based on user input
  const search = async (word)=>{
    if (word === '') {
      dispatch(getAllMovie())  
    }else{
      dispatch(getMovieSearch(word))  
    }
  }


  return (
    <div className="nav-style w-100 ">
      <Container>
        <Row className="pt-2 d-flex align-items-center justify-content-between">
          {/* <Row className="pt-2"> */}
          <Col xs="2" lg="1">
            <a href="/"> 
              <img className="logo" src={logo} alt="dfs" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input onChange={(e)=>{onsearch(e.target.value)}} type="text" className="form-control d-flex" placeholder="ابحث" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar