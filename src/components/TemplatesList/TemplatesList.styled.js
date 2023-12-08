import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TransportationItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
  min-height: 100px;
  padding: 5px;
  font-weight: 700;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding-left: 20px;
  margin: 10px 0;
  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    flex-direction: column;
    align-items: stretch;
    padding: 10px;
  }
`;

export const EditButton = styled(Link)`
  background-color: #3498db; /* Колір для кнопки редагування */
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #2980b9; /* Змінений колір при наведенні */
  }
`;

export const DeleteButton = styled.button`
  background-color: #e74c3c; /* Колір для кнопки видалення */
  color: #ffffff;
  border: none;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b; /* Змінений колір при наведенні */
  }
`;
export const FavButton = styled.button`
  background-color: ${props =>
    props.col === -1 ? '#808080' : '#124212'}; /* Колір для кнопки видалення */
  color: #ffffff;
  border: none;
  width: 30px;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props =>
      props.col === -1
        ? '#333333'
        : '#10392b'}; /* Змінений колір при наведенні */
  }
`;
export const Rout = styled.div`
  width: 10%;
  margin: 2px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  color: black;
  div {
    font-size: 10px;
    word-break: break-all;
    text-align: center;
    padding: 2px;
  }

  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    width: 100%;
  }
`;
export const RoutH = styled.div`
  width: 35%;
  height: 100%;
  margin-right: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 20px;
  color: black;
  div {
    font-size: 10px;
    word-break: break-all;
    text-align: center;
    padding: 2px;
  }

  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    width: 100%;
  }
`;
export const Container = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 24px;
  width: 100%;
`;
export const Image = styled.img`
  height: 100%;
  width: 110px;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    scale: 1.2;
  }
  @media (max-width: 768px) {
    /* Застосовуємо стилі, коли ширина екрану менше або рівна 768px */
    height: 40%;
    width: 40%;
  }
`;
