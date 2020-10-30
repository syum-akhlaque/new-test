import React from 'react';
import portfolio from '../../Data/PortfolioData'
import PortfolioItems from './PortfolioItems';

const Portfolio = () => {
    return (
       <div className="container my-5">
           <h2 className ='text-center my-5'>My <span className = 'text-warning'> Portfolio</span> </h2>
        <div className= 'row'>
             {
                 portfolio.map(portfolio => <PortfolioItems portfolio={portfolio} key={portfolio.id}> </PortfolioItems>)
             }
  
        </div>
       </div>
    );
};

export default Portfolio;
{/* <div className="card ">
<img className="card-img-top"src="https://i.postimg.cc/jSpxPn74/creative-agency.png" alt=""/>
<div class="card-body">
    <h5 className="card-title text-secondary">Card title</h5>
    <p className="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
</div>
</div> */}