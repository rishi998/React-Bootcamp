import { useState } from 'react';
import './App.css';
const quotes = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 2,
    text: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln"
  },
  {
    id: 3,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    id: 4,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    id: 5,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    id: 6,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    id: 7,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    id: 8,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    id: 9,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    id: 10,
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  }
];

// export default function App() {
//   return <Quote quotes={quotes} />;
// }

// function Quote({ quotes }) {
//   const [selectedQuote, setSelectedQuote] = useState(null);

//   function handleGenerate() {
//     if (quotes.length > 0) {
//       const num = Math.floor(Math.random() * quotes.length);
//       const randomDict = quotes[num];
//       setSelectedQuote(randomDict);
//     }
//   }

//   return (
//     <div>
//       <p>{selectedQuote ? selectedQuote.text : "No quote selected"}</p>
//       <button onClick={handleGenerate}>Generate</button>
//     </div>
//   );
// }

export default function App(){
  return (
    <Quote quotes={quotes}/>
  )
}

function Quote({quotes}){
  const [selectedquote, setSelectedQuote]=useState(null);
  function handlegenerate(){
    var num=Math.floor(Math.random()*quotes.length);
    var randomquote=quotes[num];
    setSelectedQuote(randomquote)
  }
  return (
    <div>
      <p>{selectedquote?selectedquote.text:"No quote selected!!"}</p>
      <button onClick={handlegenerate}>Generate</button>
    </div>
  )
}