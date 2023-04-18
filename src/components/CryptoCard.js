import React from 'react'
import './CryptoCard.css'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {AiOutlineStar} from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'


export const CryptoCard = ({ coin, fav, setfav }) => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 8
  });

  let Percent = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 2
  });


  return (
    <div className="cryptoCard">
        <div className="cardLeft">
            <div className='coincardMC'>{ fav.includes(coin.symbol.toUpperCase()) ? <AiFillStar onClick={ () => setfav(coin.symbol.toUpperCase())} /> : <AiOutlineStar onClick={ () =>setfav(coin.symbol.toUpperCase())} />}{coin.market_cap_rank}</div>
            <div className='coincardIMG'>
            <img src={coin.image} alt="coin symbol" /></div>
            <div className='coincardName'>{coin.name}</div>
        </div>
        <div className="cardRight">
          <div className='coinSym'>{coin.symbol.toUpperCase()}</div>
          <div className='coinPrice'>{USDollar.format(coin.current_price)}</div>
          <div className='coin1h' >{Percent.format(coin.price_change_percentage_1h_in_currency)}%</div>
        </div>
    </div>
  )
}
