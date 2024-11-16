// import QData from "./qdata"
import { useState } from "react"
import "./Arr.css";

function ArrayData(props){
const [click ,clickfunc]=useState(false);

function show(){
clickfunc(!(click))

}
// function notshow(){
//     clickfunc(false)  
// }
return(
    <div>
<div className="qdiv">
<div >

<h1 className="elements" ><span onClick={show}  className="plus">{click? "-":"+"}</span>{props.quetion}</h1>
</div>

{click && <h3 className="ans">{props.answer}</h3>}
</div>



    </div>
)
}
export default ArrayData