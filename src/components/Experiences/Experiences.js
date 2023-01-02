import React from 'react';
import './Experiences.css';

import bora from '../../assets/bora.webp';
import key from '../../assets/key.jpg';
import mald from '../../assets/mald.jpg';
import grenada from '../../assets/grenada.jpg';

function Experiences() {
    return (
        <>
        <h1> Top experiences on Beaches</h1> 
        <div className='exp-container'>
         
            <div className='exps'>
               <img src={bora} alt="/" id="bora" />
               <p>If kitesurfing sounds a bit too intense but you are still up for an adventure, why not go parasailing? Bora Bora Parasailing offers 25-minute tours with a rope length of about 305m (1000 feet).</p>
            </div>

            <div className='exps'>
            <img src={grenada} alt="/"id="grenada"/>
            <p>You may be awestruck by nature’s preciseness and beauty when you first get to the Annandale Falls at grenada. It is located in Willis, just a few minutes’ drive from St. John and a two-minute walk from the Interpretation Center.</p>
            </div>

            <div className='exps'>
            <img src={mald}  alt="/" id="mald"/>
            <p>We know that Conrad Rangali’s Ithaa isn’t the world’s only underwater restaurant, but it is the world’s first all-glass underwater restaurant. It is also home to the Maldives’ largest wine cellar and a gourmet European menu, serving  courses for lunch and dinner. </p>
            </div>
            <div className='exps'>
            <img src={key} alt="/"  id="key"/>
           <p>Watching dolphines  swim , dance and jump at keyWest most visited place . Feed our dolphines with your food , take pictures with them and never forfey to hug our beautiful creatures</p>
            </div>
        </div>
        </>
    )
}
export default Experiences ;