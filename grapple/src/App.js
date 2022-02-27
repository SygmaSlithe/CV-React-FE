import "./App.css";
import Navbar from "./components/Navbar.js";
import ProdList from "./components/ProdList.js";
import Footer from "./components/Footer";
import React, { useState } from "react";
import AddItem from "./components/AddItem.js";

function App() {
  const prodLs = [
    {
      price: 1000,
      name: "iPhone 10S",
      qty: 0,
    },
    {
      price: 50000,
      name: "Samsung 10G",
      qty: 0,
    },
  ];
  const [prodList, setProdList] = useState(prodLs); //hook
  const [totAmt, setTotAmt] = useState(0);

  const incQ = (index) => {
    let newProdList = [...prodList];
    newProdList[index].qty++;
    setProdList(newProdList);
    let newTotAmt =totAmt
    newTotAmt += newProdList[index].qty *  newProdList[index].price
    setTotAmt(newTotAmt)
  };

  const decQ = (index) => {
    let newProdList = [...prodList];
    newProdList[index].qty > 0 ? newProdList[index].qty-- : newProdList[index].qty = 0;
    setProdList(newProdList);
    let newTotAmt =totAmt
    newTotAmt -= newProdList[index].qty *  newProdList[index].price
    setTotAmt(newTotAmt)
  };

  const remItem = (index) =>{
    let newProdList = [...prodList]
    let newTotAmt = totAmt;
    newTotAmt -= newProdList[index].qty * newProdList[index].price;
    newProdList.splice(index,1)
    setProdList(newProdList)
    setTotAmt(newTotAmt)
  }

  const addItem = (name,price) =>{
    let newProdList = [...prodList]
    newProdList.push({
      name: name,
      price: price,
      qty:0
    });
    setProdList(newProdList)
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem ={addItem}/>
        <ProdList 
          prodList={prodList} 
          incQ={incQ} 
          decreQ={decQ}
          remItem={remItem}  
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
