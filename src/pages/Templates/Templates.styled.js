import styled from 'styled-components';
import FonImage from '../../images/green.jpg';
import FonImage1 from '../../images/gray.jpg';
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 98vh;
  max-width: calc(100% - 300px);
  flex-grow: 1;
  background-image: url(${props => (props.search ? FonImage1 : FonImage)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
`;

export const MainContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 90%;
  height: 73vh;
  box-sizing: border-box;
  padding: 10px 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;
export const Title = styled.h2`
  text-align: center;
`;
