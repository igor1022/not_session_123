import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Header.css';

function Header(props) {
  let set_logout = {props}.props.setLoading;
  const handler = async() => {
    const result = await axios.post('http://localhost:4500/logout', {props}.props.counter);
    const set_Log = {props}.props.setCounter;
    set_Log(result.data.counter);
    set_logout(result.data);
    console.log('result: ', result.data);
  }
    return (
        <div className="Header">
          <h1>SFPOPOS</h1>
                <div className="Header-Subtitle">San Franciscos Privately Owned Public Spaces</div>
                <div className='Log'>
                    <button type="button" onClick={handler}>
                      Logout
                    </button>
                </div>    
        </div>
      )
}

export default Header