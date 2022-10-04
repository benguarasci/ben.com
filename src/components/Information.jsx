import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';

import "./base.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, message };

    fetch('http://localhost:3001/add_contact', {
      method: 'POST',
      headers: { "Content-Type": "application/json",'Access-Control-Allow-Origin':'*' },
      body: JSON.stringify(user)
    }).then(() => {
      console.log('new contact added');
    }).catch(err => {
      console.error(err);
    })
  }

  // return (
  //   <div className="create">
  //     <h2>Add a New Blog</h2>
  //     <form onSubmit={handleSubmit}>
  //       <label>Blog title:</label>
  //       <input 
  //         type="text" 
  //         required 
  //         value={title}
  //         onChange={(e) => setTitle(e.target.value)}
  //       />
  //       <label>Blog body:</label>
  //       <textarea
  //         required
  //         value={body}
  //         onChange={(e) => setBody(e.target.value)}
  //       ></textarea>
  //       <label>Blog author:</label>
  //       <select
  //         value={author}
  //         onChange={(e) => setAuthor(e.target.value)}
  //       >
  //         <option value="mario">mario</option>
  //         <option value="yoshi">yoshi</option>
  //       </select>
  //       <button>Add Blog</button>
  //     </form>
  //   </div>
  // );

  // render() {
    return (
      <div>
          <h1 className='form-title'> Contact </h1>

        
            <div className="form-container">
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className="btn btn-success" class="form-submit"type="submit">
                        Submit
                    </button>
                </form> 
            </div>
        
            
    </div>
    );
  // }
}

export default Contact;