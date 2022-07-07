import React from "react";
import Stock from "./Stock";

function StockContainer({itemsToDisplay, addClickedStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      {itemsToDisplay.map((stock)=>{
        return (<Stock key={stock.id} stock={stock} handleClickedStock={addClickedStock}/>)
      })}
    </div>
  );
}

export default StockContainer;
