import React from 'react'
import Main from './main'
import Row from './Row';
import requests from './request'



function Home() {
  return (
    <div>
       
      <Main />
      <Row rowId= '1' title='Popular Movies' fetchURL = {requests.requestPopular}/>
      <Row rowId='2' title='Popular Tvshows' fetchURL = {requests.requestTv}/>
    </div>
  )
}

export default Home