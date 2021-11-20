import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addOnePoint } from '../store/Actions/addOne';
import { resetPoints } from '../store/Actions/resetPoints';
import { Image } from './Image';
import { foundCorrectPair, resetState } from '../store/Actions/cardActions';
import './Card.css'

let arrs = [];
const Card = ({cssName, content, id, imgUrl}) => {
  // const cardStyle = {width:"100%",height:"100%",position:"relative",transition:"transform 1s"};
  // const cardFaceStyle = {position:"absolute",height:"100%",width:"100%",backfaceVisibility:"hidden"};
  // const cardFrontStyle = {background:"red"};
  // const cardBackStyle = {background:"steelblue", transform:"rotateY(180deg)"};
  const dispatch = useDispatch();
  const state = useSelector(state => state.addOneReducer.point);
  const correctPair = useSelector(state => state.correctPairReducer);

  console.log('cPiar', correctPair);

  console.log(state);

  const [selection, setSelection] = useState([])
  const handleClick = (e) => {
    const card = document.querySelector(`.${cssName}`);
 
    card.classList.toggle('is-flipped');
    console.log(e.target);
    console.log(e.target.parentNode.parentNode.parentNode);
    const cardId = e.target.parentNode.parentNode.parentNode.dataset.id;
    arrs.push(cardId);
    console.log(arrs);
    if(arrs[0] === arrs[1]){
      dispatch(addOnePoint());
      dispatch(foundCorrectPair());
      setTimeout(() => {
        dispatch(resetState());
      }, 2500);
      setTimeout(() => {
        //alert('Bildin amk ya')
        arrs = [];
        
      }, 200);
    }else {
      if(arrs.length > 2) {
      dispatch(resetPoints());
      arrs = []
      document.querySelectorAll('.card').forEach(item =>{
        item.classList.remove('is-flipped')
      })
    }
   }
    setSelection([...selection, cardId])  
  }
  return (
    <>
  <div className="scene"  onClick={(ev)=>handleClick(ev)} data-id={id}>
    <div className={`card ${cssName}`}>
      <div className="card-front card-face">
        <img src='https://picsum.photos/id/237/200/260' alt="Card Front"/>
      </div>
      <div className="card-back card-face">
        <img src={imgUrl} alt="Card Back"/>
      </div>
     </div>
    </div><br />
    
    </>
  )
}

export default Card
