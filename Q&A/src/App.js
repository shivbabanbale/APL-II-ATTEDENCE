import QData from "./component/qdata"
import ArrayData from "./component/arraydata"
import "./App.css"
function App(){

return(
<div className="content">
<div className="heading"> <h1>Welcome to our Q&A field </h1></div>
 {QData.map((arr_itm)=>{
  const{id}=arr_itm;
  return(
    <ArrayData key={ id} {...arr_itm} />
  )


 })}
 <div className="heading2"> <h1>Thank You !!! </h1></div>


</div>

)

}
export default App;