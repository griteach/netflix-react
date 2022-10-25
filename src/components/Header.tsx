import { Link, useNavigate } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/Tv";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  font-size: 12px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.svg`
  margin-right: 50px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Logo />
        <Items>
          <Item>HOME</Item>
          <Item>TV shows</Item>
        </Items>
      </Col>
      <Col>
        <button>Search</button>
      </Col>
    </Nav>
  );
}

export default Header;
