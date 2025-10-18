import React from 'react';
// import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import StarRating from './StarRating';
import './index.css';
import App from './App';

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={5} onSetRating={setMovieRating} />
//       <p>This movie has a rating of {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={2} color="blue" size={48} messages={['terrible', 'bad', 'okay', 'good', 'great']} />
    <Test /> */}
  </React.StrictMode>
);
