import React , { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {getPage} from '../Redux/actions/movieAction';


const PaginationComponent = () => {
 
  const dispatch = useDispatch();
  const pages = useSelector((state)=> state.pageCount) 

  useEffect(() => {
    setPageCount(pages);
  }, []);

  const [pageCount, setPageCount] = useState(0);

  

  const handlePageClick = (data) =>{
    dispatch(getPage(data.selected+1));
  }



  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي "
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel=" السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        breakClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  )
}

export default PaginationComponent
