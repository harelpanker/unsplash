import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Desktop = ({ isLoggedIn, loggedOut }) => {
  return (
    <StyledNav>
      <StyledList>
        <NavLink exact activeClassName='active' to='/'>
          <li>Home</li>
        </NavLink>
        <NavLink exact activeClassName='active' to='/gallery'>
          <li>Gallery</li>
        </NavLink>
        <NavLink exact activeClassName='active' to='/tenserflow'>
          <li>Tenserflow</li>
        </NavLink>
        {isLoggedIn ? (
          <button onClick={loggedOut}>
            <li>Logout</li>
          </button>
        ) : (
          <NavLink exact activeClassName='active' to='/login'>
            <li>Login</li>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink exact activeClassName='active' to='/sign-up'>
            <li>Sign Up</li>
          </NavLink>
        )}
      </StyledList>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  a,
  button {
    color: #fff;
    opacity: 0.75;
    transition: all 0.3s ease-in-out;
    font-size: 18px;
    text-decoration: none;
    padding: 0 7px;
    font-weight: 400;
  }
  a.active {
    opacity: 1;
    text-decoration: underline;
  }
  a:hover,
  button:hover {
    opacity: 1;
    opacity: 1;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default Desktop;
