import React from 'react'
import { CryptoRow } from './CryptoRow'
import {AiOutlineStar} from 'react-icons/ai'

export const RowView = (props) => {
  return (
    <>
      <div className='coinRow'>
      <div className='coinMC'><AiOutlineStar />Rank</div>
      <div className='coinIMG'></div>
      <div className='coinName'>Name</div> 
      <div className='coinSym'></div>
      <div className='coinPrice'>Price</div>
      <div className='coin1h'>1h %</div>
      <div className='coin24h'>24h %</div>
      <div className='coin7d'>7d %</div>
      <div className='volume'>Volume (24H)</div>
      <div className='marketCap'>Market Cap</div>
      </div>



      { props.coins.map((coin) => {
        return (<CryptoRow coin={coin} fav={props.fav} setfav={props.setfav} /> )
      } ) }
    </>
  )
}
