import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, removeClickedStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList.map((stock) => {
        return (
          <Stock 
          key={stock.id} 
          stock={stock} 
          handleClickedStock={removeClickedStock}/>
          // <div>
          //   <div onClick={() => {
          //     removeClickedStock(stock)
          //   }} className="card">
          //     <div className="card-body">
          //       <h5 className="card-title">{stock.name}</h5>
          //       <p className="card-text">{stock.ticker} : {stock.price}</p>
          //     </div>
          //   </div>
          // </div>
        )
      })
      }
    </div>
  );
}

export default PortfolioContainer;
