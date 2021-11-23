import { useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';
import Restart from './components/Restart';
const cardDatas = [
  {
    cssName: 'card1',
    content: 'Kartım 1',
    id: '1',
    imgUrl: 'https://picsum.photos/id/1/200/260',
  },
  {
    cssName: 'card4',
    content: 'Kartım 1',
    id: '1',
    imgUrl: 'https://picsum.photos/id/1/200/260',
  },
  {
    cssName: 'card5',
    content: 'Kartım 2',
    id: '2',
    imgUrl: 'https://picsum.photos/id/20/200/260',
  },
  {
    cssName: 'card2',
    content: 'Kartım 2',
    id: '2',
    imgUrl: 'https://picsum.photos/id/20/200/260',
  },
  {
    cssName: 'card3',
    content: 'Kartım 3',
    id: '3',
    imgUrl: 'https://picsum.photos/id/30/200/260',
  },
  {
    cssName: 'card6',
    content: 'Kartım 3',
    id: '3',
    imgUrl: 'https://picsum.photos/id/30/200/260',
  },
  {
    cssName: 'card7',
    content: 'Kartım 4',
    id: '4',
    imgUrl: 'https://picsum.photos/id/40/200/260',
  },
  {
    cssName: 'card10',
    content: 'Kartım 4',
    id: '4',
    imgUrl: 'https://picsum.photos/id/40/200/260',
  },
  {
    cssName: 'card8',
    content: 'Kartım 5',
    id: '5',
    imgUrl: 'https://picsum.photos/id/50/200/260',
  },
  {
    cssName: 'card11',
    content: 'Kartım 5',
    id: '5',
    imgUrl: 'https://picsum.photos/id/50/200/260',
  },
  {
    cssName: 'card9',
    content: 'Kartım 6',
    id: '6',
    imgUrl: 'https://picsum.photos/id/60/200/260',
  },
  {
    cssName: 'card12',
    content: 'Kartım 6',
    id: '6',
    imgUrl: 'https://picsum.photos/id/60/200/260',
  },
  {
    cssName: 'card13',
    content: 'Kartım 7',
    id: '7',
    imgUrl: 'https://picsum.photos/id/70/200/260',
  },
  {
    cssName: 'card15',
    content: 'Kartım 7',
    id: '7',
    imgUrl: 'https://picsum.photos/id/70/200/260',
  },
  {
    cssName: 'card14',
    content: 'Kartım 8',
    id: '8',
    imgUrl: 'https://picsum.photos/id/80/200/260',
  },
  {
    cssName: 'card16',
    content: 'Kartım 8',
    id: '8',
    imgUrl: 'https://picsum.photos/id/80/200/260',
  },
];

// shuffle the cards data
function getShuffledArr(arr) {
  return [...arr].map((_, i, arrCopy) => {
    var rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}
const shuffledArr = getShuffledArr(cardDatas);

function App() {
  const correctPair = useSelector((state) => state.cardReducers);
  const cards = shuffledArr.map((item) => (
    <Card key={item.cssName} {...item} totalCards={cardDatas.length} />
  ));
  return (
    <div className="main-container">
      <div className="description">
        <h1>Memory Card Game</h1>
      </div>
      {correctPair.isCompleted ? (
        <Restart />
      ) : (
        <div className="board">{cards}</div>
      )}
      <div className={correctPair.isCorrect ? 'popup' : 'popup hide'}>
        Niceee keep going !!!
      </div>
    </div>
  );
}
export default App;
