import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Card from './components/Card';
const cardDatas = [
   {cssName: "card1",  content:"Kartım 1", id:"1", imgUrl:"https://picsum.photos/id/1/200/260"},
   {cssName: "card4",  content:"Kartım 1", id:"1", imgUrl:"https://picsum.photos/id/1/200/260"},
   {cssName: "card5",  content:"Kartım 2", id:"2", imgUrl:"https://picsum.photos/id/2/200/260"},
   {cssName: "card2",  content:"Kartım 2", id:"2", imgUrl:"https://picsum.photos/id/2/200/260"},
   {cssName: "card3",  content:"Kartım 3", id:"3", imgUrl:"https://picsum.photos/id/3/200/260"},
   {cssName: "card6",  content:"Kartım 3", id:"3", imgUrl:"https://picsum.photos/id/3/200/260"},
   {cssName: "card7",  content:"Kartım 4", id:"4", imgUrl:"https://picsum.photos/id/4/200/260"},
   {cssName: "card10", content:"Kartım 4", id:"4", imgUrl:"https://picsum.photos/id/4/200/260"},
   {cssName: "card8",  content:"Kartım 5", id:"5", imgUrl:"https://picsum.photos/id/5/200/260"},
   {cssName: "card11", content:"Kartım 5", id:"5", imgUrl:"https://picsum.photos/id/5/200/260"},
   {cssName: "card9",  content:"Kartım 6", id:"6", imgUrl:"https://picsum.photos/id/6/200/260"},
   {cssName: "card12", content:"Kartım 6", id:"6", imgUrl:"https://picsum.photos/id/6/200/260"},
   {cssName: "card13", content:"Kartım 7", id:"7", imgUrl:"https://picsum.photos/id/7/200/260"},
   {cssName: "card15", content:"Kartım 7", id:"7", imgUrl:"https://picsum.photos/id/7/200/260"},
   {cssName: "card14", content:"Kartım 8", id:"8", imgUrl:"https://picsum.photos/id/8/200/260"},
   {cssName: "card16", content:"Kartım 8", id:"8", imgUrl:"https://picsum.photos/id/8/200/260"},
]


function App() {
  const [iscorrect, setIscorrect] = useState(false);
  const correctPair = useSelector(state => state.correctPairReducer);
const cards = cardDatas.map(item => <Card key={item.cssName} {...item} />)
  return (
    <div className="board">

         {cards}
         <div className={correctPair.isCorrect ? "popup" : "popup hide"}>
           bildin böyle devamke
         </div>
    </div>
  );
}

export default App;
