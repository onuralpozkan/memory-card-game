import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { completeState, foundCorrectPair, resetState } from '../store/Actions/cardActions';
import './Card.css';

let arrs = [];
const Card = ({ cssName, id, imgUrl, totalCards }) => {
  const dispatch = useDispatch();
  const [selection, setSelection] = useState([]);
  const handleClick = (e) => {
    const card = document.querySelector(`.${cssName}`);
    // check if card is already selected
    if(card.classList.contains('is-flipped')){
      return;
    }else {
      card.classList.toggle('is-flipped');
    }
    const cardId = e.target.parentNode.parentNode.parentNode.dataset.id;
    arrs.push(cardId);
    if (arrs[0] === arrs[1]) {
      dispatch(foundCorrectPair());
      setTimeout(() => {
        dispatch(resetState());
      }, 1250);
      setTimeout(() => {
        arrs = [];
      }, 200);
    } else {
      if (arrs.length > 1) {
        if (arrs[0] !== arrs[1]) {
          setTimeout(() => {
            arrs = [];
            document.querySelectorAll('.card').forEach((item) => {
              item.classList.remove('is-flipped');
            });
          }, 1000);
        }
      }
    }
    setSelection([...selection, cardId]);
  };

  // Check if game is finished
  useEffect(() => {
    const elems = document.querySelectorAll('.is-flipped');
    if(elems.length === totalCards) {
      setTimeout(()=>{
        dispatch(completeState());
      },1300)
    }
  }, [selection, totalCards, dispatch])
  return (
    <>
      <div className="scene" onClick={(ev) => handleClick(ev)} data-id={id}>
        <div className={`card ${cssName}`}>
          <div className="card-front card-face">
            <img src="https://picsum.photos/id/237/200/260" alt="Card Front" />
          </div>
          <div className="card-back card-face">
            <img src={imgUrl} alt="Card Back" />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Card;
