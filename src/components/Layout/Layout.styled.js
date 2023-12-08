import styled from 'styled-components';
import SideImage from '../../images/fon.jpg';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

const Sidebar = styled.div`
  width: 300px;
  background-image: url(${SideImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 50%;

  height: 98vh;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.7);
`;

const Header = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`;

const ResponsiveLayout = styled.div`
  @media (max-width: 468px) {
    ${Container} {
      flex-direction: column;
    }
    ${Sidebar} {
      width: 100%;
    }
  }
`;
export const Navigation = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 25px;
  z-index: 5;
`;

export const NavigationLink = styled(NavLink)`
  margin-bottom: 15px;
  display: block;
  padding: 8px;
  text-align: center;
  color: #fff;
  background-color: #007bff;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  е &.active {
    background-color: yellow;
    color: #000;
  }
  &:hover {
    background-color: yellow;
    color: #000;
  }
`;
export const AuthFormContainer = styled.div`
  margin-top: auto;
  padding: 16px;
  margin-bottom: 50px;
`;

export { ResponsiveLayout, Container, Sidebar, Header };
