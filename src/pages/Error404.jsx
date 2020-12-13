import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
  return (
    <Body>
      <Header>
        404
        <br />
        page not found
      </Header>
      <NavLink exact to='/'>
        <Button>Home page</Button>
      </NavLink>
    </Body>
  );
};
const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
  min-height: 100vh;
`;
const Header = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 80px;
  letter-spacing: -1px;
  margin-bottom: 50px;
  text-align: center;
`;
const Button = styled.button`
  padding: 9px 25px;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

export default Error404;
