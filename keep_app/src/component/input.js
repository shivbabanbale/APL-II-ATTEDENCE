import { useState } from "react";
import "./input.css"
const Input=(props)=>{
const [show ,showfunc]=useState(false);
const[inputdata,inputdata_func]=useState({
title:"",
content:""
})

function Showing(){
    showfunc(true)
}

function changedata(event){
// const[value,name]=event.target;
// console.log(value);
// console.log(name);
let value=event.target.value;
let name=event.target.name;
console.log(value);
console.log(name);
inputdata_func((olddata)=>{
    return {...olddata,
        [name]:value

    }
})
console.log(inputdata)
}

const datasender=()=>{
    props.passfunct(inputdata);
    // inputdata_func("")
    showfunc(false)
    inputdata_func( {
        title:"",
        content:""
        })


}

    return(
<>
<div className="bigdiv">
<div className="inputbox">
<input type="text" name="title"  placeholder="Enter a title ...." className="in1" onClick={Showing} onChange={changedata}/ >
{show && <input type="text" name="content" placeholder=" write Content...." className="in2" onChange={changedata}/> }
<div className="btn">
<button className="buttu"  onClick={datasender}> + </button>

</div>
</div>
</div>
</>

    )

}
export default Input;