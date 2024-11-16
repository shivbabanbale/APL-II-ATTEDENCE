import Nav from "./component/nav"
import Footer from "./component/footer"
import Input from "./component/input"
import Data from "./component/data"
import { useState } from "react"
const App=()=>{
const[mainpage_data,mainpage_data_fun]=useState([]);

  const recivedfunction=(inputdata)=>{
  
    // alert("hii shivba")
    mainpage_data_fun((olddata)=>{
      return [...olddata,inputdata]
    })
    console.log(inputdata)
  }
function ondelete(id){
  mainpage_data_fun((olddata)=>
olddata.filter((currentdata,index)=>{
return index !== id;

})
  )
// alert("hiii my nam is shivba")
}



return(
  <>
  <Nav/>
<Input passfunct={recivedfunction}/>
{/* <Data/> */}

{mainpage_data.map((val,index)=>{
return(
  <Data
id={index}
key={index}
title={val.title}
content={val.content}
delete={ondelete}
/>
)

})}

  <Footer/>
  </>
)
}

export default App;