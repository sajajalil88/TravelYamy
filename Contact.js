import React from "react";
import './Contact.css';
import mald3 from '../../assets/mald3.jpeg'
function  Contact() {
    return (
        <>

        <h1 className="form-text">stay in touch with us by sending your feedback message</h1>
        <div className='form-container2'>
        <img src={mald3} alt="/" style={{ marginLeft: '350px' , height:'400px' , width:'100%'}} />
        <form className='form2' >
         
          <div className='form-inputs'>
            <label className='form-name'>Username</label>
            <input
              className='form-name'
              type='text'
              name='username'
              placeholder='Enter your username'
            
            />
          
          </div>
          <div className='form-inputs'>
            <label className='form-mail'>Email</label>
            <input
              className='form-mail'
              type='email'
              name='email'
              placeholder='Enter your email'
           
            />
           
          </div>
          <div className='form-inputs'>
            <label className='form-message'>Message</label>
           <textarea className="form-message" placeholder="type your message" />

             <button className='form-input-btn' type='submit'>
          Send 
        </button>
          </div>

        </form>
      </div>
      </>
    )
}
export default Contact;