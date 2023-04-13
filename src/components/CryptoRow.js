import React from 'react'
import './CryptoRow.css';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'

export const CryptoRow = ({ coin, fav, setfav }) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8
  });

  let Percent = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2
  });

  let hcolor;
  let fhcolor;
  let thcolor;

  if(coin.price_change_percentage_1h_in_currency > 0) hcolor = { color: 'green' };
  if(coin.price_change_percentage_1h_in_currency < 0) hcolor = { color: 'red' };

  if(coin.price_change_percentage_7d_in_currency > 0) fhcolor = { color: 'green' };
  if(coin.price_change_percentage_7d_in_currency < 0) fhcolor = { color: 'red' };

  if(coin.price_change_percentage_24h_in_currency > 0) thcolor = { color: 'green' };
  if(coin.price_change_percentage_24h_in_currency < 0) thcolor = { color: 'red' };

  return (
    <div className='coinRow'>
        <div className='coinMC'>{ fav.includes(coin.symbol.toUpperCase()) ? <AiFillStar onClick={ () => setfav(coin.symbol.toUpperCase())} /> : <AiOutlineStar onClick={ () =>setfav(coin.symbol.toUpperCase())} />} {coin.market_cap_rank}</div>
        <div className='coinIMG'><img src={coin.image} alt="coin symbol" /></div>
        <div className='coinName'>{coin.name}</div> 
        <div className='coinSym'>{coin.symbol.toUpperCase()}</div>
        <div className='coinPrice'>{USDollar.format(coin.current_price)}</div>
        <div className='coin1h' style={hcolor}>{Percent.format(coin.price_change_percentage_1h_in_currency)}%</div>
        <div className='coin24h' style={fhcolor}>{Percent.format(coin.price_change_percentage_24h_in_currency)}%</div>
        <div className='coin7d' style={thcolor}> 
         <Sparklines data={coin.sparkline_in_7d.price} width={100} margin={1} height={20}><SparklinesLine color="blue" /></Sparklines>
          {Percent.format(coin.price_change_percentage_7d_in_currency)}%</div>
        <div className='volume'>{USDollar.format(coin.total_volume)}</div>
        <div className='marketCap'>{USDollar.format(coin.market_cap)}</div>
    </div>
  )

}