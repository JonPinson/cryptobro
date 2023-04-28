import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CardView } from './components/CardView';
import { RowView } from './components/RowView';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from './components/Layout';
import { AdRow } from './components/AdRow';

function App() {

const [ coinData, setCoinData ] = useState(null);
const [ compact, setCompact ] = useState(false);
const [ favorites, setFavorites ] = useState([]);

const [firstload, setFirstLoad] = useState(true);


useEffect( () => {
axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d').then(function (response) {
  console.log(response);
  setCoinData(response.data);
})
.catch(function (error) {
  console.log(error);
});


}, []);   

useEffect( () => {
  function handleResize() {
    let width = window.innerWidth;

    if (width < 850) {
      setCompact(true);
    } else {
      setCompact(false);
    }
  }

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);

}, [] );


useEffect(() => {
  if(firstload) {
  console.log("Loading favs...");
  let savedData = localStorage.getItem("CryptoBroSavedData");
  if(savedData) {
    let favArray = JSON.parse(savedData);
    setFavorites(favArray);
    console.log("Well we loaded something");

  } else {
    let starterData = [];
    const jsonData = JSON.stringify(starterData);
    console.log("Saving empty array");


    localStorage.setItem("CryptobroSavedData", jsonData);
    setFavorites(starterData);
  } 
  setFirstLoad(false);

 } else {
  const jsonData = JSON.stringify(favorites);
  localStorage.setItem("CryptobroSavedData", jsonData);
 }

}, []);

const toggleFav = (coin) => {

  console.log('Toggling...');

  let oldfav = favorites;

  if(oldfav.includes(coin)) {
    let newfav = oldfav.filter(f => f !== coin);
    
    setFavorites(newfav);
  } else {
      let newfav= coin;
    setFavorites([...favorites, newfav]);
  }
  const jsonData = JSON.stringify(favorites);
  localStorage.setItem("CryptobroSavedData", jsonData);
  console.log(favorites);
}

if(coinData === null) {
  return(
    <div>
      <h1>Loading...</h1>
    </div>
  )
}

  return (
    <Layout>
      <Header />
    <div className="App">
    <AdRow />

    <h2>Top {coinData.length} Coins</h2>

      { compact ? ( <CardView coins={coinData} fav={favorites} setfav={toggleFav} />) : (<RowView coins={coinData} fav={favorites} setfav={toggleFav} /> ) }
    </div>
      <Footer />
    </Layout>
  );
}

export default App;
