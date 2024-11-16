import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sname from './component/series_list'
import Card from './component/card'
import './App.css'

function vcard(val){
  return(
  <Card sname={val.sname} imgg={val.silink}/> 
  )
  
  }
ReactDOM.render(
  <>
  <h2   style={{
    color:'#313439',
    textAlign:"center",
    backgroundColor:" rgb(220, 206, 206)",
    height:'70px',
    alignItems:"center",
  
  }}
   >List of Top 5 Netflix Series in 2020</h2>
   {/* <Card sname={Sname[0].sname} imgg={Sname[0].silink}/>  */}
   <div className='box'>
  {Sname.map(vcard)}
  </div>
  </>

  ,document.getElementById('root'))