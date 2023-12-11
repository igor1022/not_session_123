import React, { Component } from 'react';
import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
export default class EssayForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 'Admin'
      };
  
      //this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
   /* handleChange(event) {
      this.setState({value: event.target.value});
    }*/
  
    async handleSubmit(event) {
      alert('Форма была отправлена: ' + this.state.value);
      event.preventDefault();
      const result = await axios.post('http://localhost:4500/login', {user: event.target.user.value, password: event.target.password.value});
      console.log('result: ', result.data);
      console.log(result.data);
      if (result.data.answer === false) {
        this.props.setLoading(result.data.answer);
        this.props.setCounter(result.data.counter);
        this.props.setUser_Id(result.data.user_id);
      } 
    } 
  
    

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Заполните форму Admin:
          </label>
          <br/>
          <br/>
          <label>Login</label>
          <br/>
          <input name="user"/>
          <br/>
          <label>Password</label>
          <br/>
          <input name="password"/>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }