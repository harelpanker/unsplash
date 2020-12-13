import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Mobile = ({ isOpen, setIsOpen, isLoggedIn, loggedOut }) => {
  const handleLoggedOut = () => {
    setIsOpen(!isOpen);
    loggedOut();
  };

  return (
    <StyledNav>
      <ul>
        <li>
          <NavLink exact to='/' onClick={() => setIsOpen(!isOpen)}>
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/gallery' onClick={() => setIsOpen(!isOpen)}>
            <div>Gallery</div>
          </NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLoggedOut}>
              <div>Logout</div>
            </button>
          </li>
        ) : (
          <li>
            <NavLink exact to='/login' onClick={() => setIsOpen(!isOpen)}>
              <div>Login</div>
            </NavLink>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <NavLink exact to='/sign-up' onClick={() => setIsOpen(!isOpen)}>
              <div>Sign Up</div>
            </NavLink>
          </li>
        )}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
  z-index: 10;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    background-color: black;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    li,
    button {
      text-decoration: none;
      font-size: 35px;
      padding: 7px;
      margin: 20px 0;
      border: none;
      background-color: transparent;
      color: white;
      cursor: pointer;
      a {
        color: white;
      }
    }
  }
`;

export default Mobile;
