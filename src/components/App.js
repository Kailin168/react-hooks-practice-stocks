import React, { useEffect, useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stockArray, setStockArray] = useState ([])

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
    .then (res => res.json())
    .then (setStockArray)
  },[])

  return (
    <div>
      <Header />
      <MainContainer stockArray={stockArray} />
    </div>
  );
}

export default App;
