import styled from 'styled-components';
import FonImage from '../../images/blue.jpg';
import FonImage1 from '../../images/orange.jpg';
import SiImage from '../../images/aidocs1.png';
export const Content = styled.div`
  height: 98vh;
  max-width: calc(100% - 300px);
  flex-grow: 1;
  background-image: url(${props => (props.edit ? FonImage1 : FonImage)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  overflow: hidden;
`;
export const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow-y: auto;
`;

export const Form = styled.div`
  background-color: rgba(255, 255, 255, 1);
  padding: 10px;
  border-radius: 8px;
  height: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const EditorContainer = styled.div`
  width: 100%;
  flex-grow: 1;
`;
export const PdfBox = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 100%;
  background-image: url(${SiImage}), url(${props => props.url});
  background-position: center, center;
  background-size: 50px, contain;
  background-repeat: space, no-repeat;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  color: #333; /* Колір тексту */
  background-color: #fff; /* Колір фону */
  border: 1px solid #ccc; /* Тонка рамка */
  border-radius: 5px; /* Закруглені кути */
  outline: none; /* Забирає контур при фокусі */
  margin-top: 10px;
  width: 98%;

  &:hover,
  &:focus {
    border-color: #007bff; /* Колір рамки при наведенні чи фокусі */
  }
`;
export const InputName = styled.input`
  padding: 10px;
  font-size: 16px;
  color: #333; /* Колір тексту */
  background-color: #fff; /* Колір фону */
  border: 1px solid #ccc; /* Тонка рамка */
  border-radius: 5px; /* Закруглені кути */
  outline: none; /* Забирає контур при фокусі */
  margin-top: 10px;
  width: 55%;

  &:hover,
  &:focus {
    border-color: #007bff; /* Колір рамки при наведенні чи фокусі */
  }
`;

export const Label = styled.label`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Колір тексту */
  margin-top: 10px;
`;
export const H2 = styled.h2`
  font-size: 40px;
  text-shadow: 2px 2px 4px #fff; /* Додає білу обводку */
`;
