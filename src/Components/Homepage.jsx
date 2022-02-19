import React from 'react';
import './main.css'; 
import Repositories from './repositories';
import SearchAndButton from './SearchAndButton';


 const Homepage = () => {
     return (              
<React.Fragment>
<body>
    <main>
        <nav>
            <div className="left">
                <h1 className='leftTitle1'>CommitViewer</h1>
            </div>
            <div className="right">
                <ul className="navLinks">
                    <li className="navLinksItem">About</li>
                     <li className="navLinksItem">Contact</li>
                </ul>
             
            </div>
        </nav>

        {/* second section */}
        <div className="CenterTextContainer">
            <p className="centerText">
                Discover the <br /> world of code
            </p>
            <p className="centerText1">
                Explore open source projects from GitHub, and <br className='break' /> read their commit history to see the story of how <br className='break' /> they were built.
            </p>
        </div>

        {/* 3rd section */}
       <section className="3rdSection">
          <SearchAndButton></SearchAndButton>
       </section>

           <div className="bottomTextContainer">
               <p className="bottomCenter">
                   Or pick one of these suggested repos
               </p>
           </div>

           <div className="container">
               <Repositories></Repositories>
           </div>
    </main>
</body>

</React.Fragment>
     );
 }

 export default Homepage;