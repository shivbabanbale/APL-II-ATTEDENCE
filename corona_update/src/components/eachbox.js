import React, { useEffect,useState } from 'react'
import './eachbox.css';
import Newcard from './each_newcard'

function Card(){
   const [data,setData]=useState([])

    async function fetchdata(){
        try{
       let a= await fetch('https://data.covid19india.org/data.json')
       let actualdata=await a.json()
       console.log(actualdata.statewise[0])
       setData(actualdata.statewise[0])
     
        }
        catch(err){
            console.log(err)

        }
    }
    useEffect(()=>{
        fetchdata()
    },[])
return(

<div>
<h1 className='ll'>*Live*</h1>
<h2> Covid-19 Coronavirus Tracker</h2>
<ul>
<Newcard  head='COUNTRY' num='INDIA' />
<Newcard sub="Total" head='RECOVERD' num={data.recovered}/>
<Newcard sub="Total" head='CONFIRMED' num={data.confirmed}/>
</ul>  
<ul>
<Newcard sub="Total" head='DEATHS' num={data.deaths} />
<Newcard sub="Total" head='ACTIVE' num={data.active}/>
<Newcard sub="Total" head='UPDATE' num={data.lastupdatedtime}/>
</ul>
</div>
    





)
}
export default Card;