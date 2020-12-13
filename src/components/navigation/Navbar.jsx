import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Desktop from './Desktop';
import Mobile from './Mobile';
import firebase from '../../config/firebase';
import AppContext from '../../store/AppContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useContext(AppContext);
  const history = useHistory();

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const loggedOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.replace('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <Navigation>
      <NavContainer>
        <NavLink exact to='/'>
          <h2>unSplash</h2>
        </NavLink>

        <StyledIcon onClick={(e) => handleToggle(e)} />
        {isOpen ? (
          <Mobile
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isLoggedIn={isLoggedIn}
            loggedOut={loggedOut}
          />
        ) : (
          <Desktop isLoggedIn={isLoggedIn} loggedOut={loggedOut} />
        )}
      </NavContainer>
    </Navigation>
  );
};
const StyledIcon = styled(MenuIcon)`
  display: none !important;
  padding: 5px;
  cursor: pointer;
  z-index: 11;

  @media only screen and (max-width: 600px) {
    display: inline-block !important;
  }
`;
const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  a {
    text-decoration: none;
  }
  h2 {
    z-index: 11;
    color: white;
  }
`;
const Navigation = styled.header`
  width: 100%;
  background: linear-gradient(45deg, #0575e6, #021b79);
  color: #fff;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: auto;
`;

export default Navbar;
