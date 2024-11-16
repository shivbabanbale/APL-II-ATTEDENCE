import React from 'react'

import "./card.css";

function Card( {sname,imgg}){
return(
    <>
    <div className='card_box'>
        <div className="img1"> <img src={imgg} alt="series" /></div>
        <div className='data'>
        <p>Netflix original series</p>
        <h2>{sname}</h2>
        <button style={{
            border:'2px solid black',
            width:'100px',
            height:"30px",
            color:'#313439',
           
        }
    
        }
        ><a href="netflix.com">Watch now</a></button>
    </div>
    </div>
    </>
)

}
export default Card;