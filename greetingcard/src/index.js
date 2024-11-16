import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let Name;
let ct=new Date();
console.log(ct)
 let date=ct.toLocaleDateString()
 let hours=ct.getHours()
const ccs={}
if(1<=hours && hours<=12){
   Name="GoodMorning"
   ccs.color="orange"
}else if(13 <= hours && hours<=19){
  Name="GoodAfternoon"
  ccs.color="blue"
}
else{
  Name="GoodNight"
  ccs.color="black"
}

ReactDOM.render(
<>
<div style={{
  color:'red',
  fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  textAlign: "center",
  alignItems:"center",
  fontSize:"2rem",
  height:"80px",
  // width:"500px",
  backgroundColor:"bisque",
  borderRadius:"20px",
  marginTop:"300px"
//  marginLeft:"35%"
  

 


}}>Hellow Sir,<span style={ccs}>{Name}</span></div>

</>,
document.getElementById('root'))
