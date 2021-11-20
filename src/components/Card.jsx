import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { foundCorrectPair, resetState } from '../store/Actions/cardActions';
import './Card.css';

let arrs = [];
const Card = ({ cssName, content, id, imgUrl }) => {
  const dispatch = useDispatch();
  const correctPair = useSelector((state) => state.cardReducers);

  console.log('cPiar', correctPair);

  const [selection, setSelection] = useState([]);
  const handleClick = (e) => {
    const card = document.querySelector(`.${cssName}`);
    if(card.classList.contains('is-flipped')){
      return;
    }else {
      card.classList.toggle('is-flipped');
    }
    // console.log(e.target);
    // console.log(e.target.parentNode.parentNode.parentNode);
    const cardId = e.target.parentNode.parentNode.parentNode.dataset.id;
    arrs.push(cardId);
    if (arrs[0] === arrs[1]) {
      dispatch(foundCorrectPair());
      setTimeout(() => {
        dispatch(resetState());
      }, 2500);
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
