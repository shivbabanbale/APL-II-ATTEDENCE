import './eachbox.css'
import Card from './eachbox';
function Newcard({sub,head,num}){
   
return(
    <div className='subcard' style={{backgroundColor:'rgb(34, 116, 164'}}>
    <div className='mincard'>
    <p className='textdecoration'><span>{sub}</span></p>
    <p className='cardtotal subtext'>{head}</p>
    <h1 className='num'>{num}</h1>
    </div>
</div>
)

}
export default Newcard;