import React from 'react';
import "./main.css";
import {Link} from "react-router-dom";
import StartUp from "../start-up.png";

const SearchAndButton = () => {
  return (
      <React.Fragment>
            <div className="formContainer">
            <div className="searchContainerLeft">
                <div className="searchForm">
                 <input type="text" id="searchForm" name="search" placeholder="Eg.facebook/react"></input>
                 </div>
                 <div className="iconContainer">
                     <i class="fas fa-search"></i>
                 </div>
            </div>
            <div className="buttonContainerRight">
            <Link to = "commits">
              <button className='submit'>See Commits <img src={StartUp} alt="rocket" /></button>
              </Link>
            </div>
           </div>

      </React.Fragment>
  )
}

export default SearchAndButton