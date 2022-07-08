import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stockArray }) {

  const [categoryName, setCategoryName] = useState('Tech')
  const [portfolioList, setPortfolioList] = useState([])
  const [sortType, setSortType] = useState('')

  function onCategoryChange(event) {
    setCategoryName(event.target.value)
  }

  const itemsToDisplay = stockArray.filter((stock) => {
    if (categoryName === "Tech") { return true } // this is not need, you can just do return on the stock.type
    else { return stock.type === categoryName }
  })

  if (sortType !== '') {
    itemsToDisplay.sort((item1, item2) => {
      if (sortType === 'Alphabetically') {
        if (item1.name < item2.name) {
          return -1;
        } else if (item1.name > item2.name ) {
          return 1;
        }
        return 0;
      } else {
        return -1 * (item1.price - item2.price);
      }
    });
  }

  function addClickedStock(stock) {
    setPortfolioList([...portfolioList, stock])
  }

  function removeClickedStock(stock) {
    setPortfolioList(portfolioList.filter((item) => {
      return (item.id !== stock.id)
    }))
  }

  function sortBy(newSort) {
    setSortType(newSort)
  }

  return (
    <div>
      <SearchBar onCategoryChange={onCategoryChange} sortBy={sortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer itemsToDisplay={itemsToDisplay} addClickedStock={addClickedStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList={portfolioList} removeClickedStock={removeClickedStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
