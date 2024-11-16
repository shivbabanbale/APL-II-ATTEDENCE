import "./data.css"
const Data=(props)=>{

  function deletesend(){
    props.delete(props.id);


    }


return(
<>
<div >
<div className="Data">
<h2> {props.title}</h2>
<h3 style={{
    color:"blue"

}}>Description</h3>
<p> {props.content}</p>
<button className="delete" onClick={deletesend}>-</button>
</div>
</div>
</>

)


}

export default Data;