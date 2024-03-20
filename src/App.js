import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function App() {
  //three line icon ke liye-- &#9776;
  // for cross x kr liye-- &times;
  const[manustatus,setmanustatus]=useState(false)
  return (
    <div className="App">

      <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
      <button className='micon' onClick={()=>setmanustatus(!manustatus)}>
        {
          manustatus ?
          <span>&times;</span>
          :
          <span>&#9776;</span>
        }
      </button>
      <div className={`manu ${manustatus ? 'activemanu' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Content</li>
            <li>Blog</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
