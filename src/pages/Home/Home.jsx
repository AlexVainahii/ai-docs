import React from 'react';
import {
  Button,
  Content,
  Description,
  Highlight,
  HomeContainer,
  MainContent,
  Subtitle,
  Title,
} from './Home.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setShowAuthForm } from 'redux/auth/authSlice';
import { selectUser } from 'redux/selectors';
import LogoImg from '../../images/Aidocs.png';

const HomePage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleToggleAuthForm = () => {
    dispatch(setShowAuthForm(true));
  };
  return (
    <Content>
      <MainContent>
        <img src={LogoImg} alt="logo" width={'450px'} height={'400px'} />
        <HomeContainer>
          <Title>Ласкаво просимо до AI DOCS!</Title>
          <Subtitle>
            Інтелектуальна система створення шаблонів документів підприємця.
          </Subtitle>
          <Description>
            Знаходьте і створюйте різноманітні шаблони документів для вашого
            бізнесу з легкістю за допомогою нашої інтелектуальної системи AI
            DOCS. Наша платформа не лише дозволяє ефективно створювати нові
            шаблони, але й надає можливість шукати та використовувати існуючі у
            нашій обширній базі документів. Забезпечте собі зручність, безпеку
            та швидкість в управлінні вашою документацією.
          </Description>
          <Highlight>Зручно. Безпечно. Швидко.</Highlight>
          {!user && (
            <Button onClick={handleToggleAuthForm}>Створити шаблон</Button>
          )}
        </HomeContainer>
      </MainContent>
    </Content>
  );
};

export default HomePage;
