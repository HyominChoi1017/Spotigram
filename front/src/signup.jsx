import React, { Component } from 'react';
import './signup.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
  };  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  goTomain = () => {
    const { email, password } = this.state;
    fetch('http://127.0.0.1:8000/insta/Register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then(res => res.json())
    .then(result => {
      if (result.message === 'SUCCESS') {
        // 회원가입 성공 시 처리할 코드 작성
      } else {
        // 회원가입 실패 시 처리할 코드 작성
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div className='lgin'>
        <input 
          type='email' 
          placeholder='email' 
          className='ema' 
          name='email' 
          value={email} 
          onChange={this.handleChange} 
        />
        <input
          type='password'
          placeholder='password'
          className='pass'
          name='password'
          value={password}
          onChange={this.handleChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='wode'
          name='confirmPassword'
          value={confirmPassword}
          onChange={this.handleChange}
        />
        <button className='signu' onClick={this.goTomain}>
          signup
        </button>
      </div>
    );
  }
}

export default SignUp