import React from 'react';
import './Header.css';


const Header = ({date}) => (
  <header className='home-header'>
  <img src={date.logo} alt="" className='img' />
    <h1>{date.brand}</h1>
  </header>
);

export default Header;