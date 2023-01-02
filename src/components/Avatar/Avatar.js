import React from 'react';
import './Avatar.css';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

function Avatar() {
    return (
        <>
            <div className='avatar-container'>
         
         <div className='avatar'>
           
            <img src={avatar1} alt="/" id="avatar1" />
            <h1 id="av1-text">keep it simple</h1>
            <p id="text1">No hidden fees. No hidden charges. No funny business. With us, you’ll always know exactly where your money goes. So you can relax before your trip even begins.</p>
           
         </div>

         <div className='avatar'>
         <img src={avatar2} alt="/"id="avatar2"/>
         <h1 id="av2-text">plan with confidence</h1>
         <p id="text2">Stay one step ahead with the latest travel updates, free hotel and car hire cancellation and COVID-19 travel insurance.</p>
         </div>

         <div className='avatar'>
         <img src={avatar3}  alt="/" id="avatar3"/>
         <h1 id="av3-text">ready when you are </h1>
         <p>See where you can travel to right now and find the best deals across thousands of flights, hotels and car hire options</p>
         
         </div>
         
     </div>
        </>
    )
}
export default Avatar ;