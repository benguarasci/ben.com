import React, { Component } from 'react';
import axios from 'axios';

import "./base.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const user = {
        name,
        email, 
        message
    };

    console.log(user)

 axios.post('http://rentsimple-working.herokuapp.com/add_contact', user)
      .then(() => console.log('User info gathered'))
      .catch(err => {
        console.error(err);
      });
      
      window.location.reload();
  };

  render() {
    return (
      <div>
          <h1 className='form-title'> Contact </h1>

        
            <div className="form-container">
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInputChange}
                    />
                    <textarea
                        type="text"
                        className="form-control"
                        class="feedback-input"
                        name="message"
                        placeholder="Your Message"
                        onChange={this.handleInputChange}
                    />
                    <button className="btn btn-success" class="form-submit"type="submit">
                        Submit
                    </button>
                </form> 
            </div>
        
            
    </div>
    );
  }
}

export default Contact;