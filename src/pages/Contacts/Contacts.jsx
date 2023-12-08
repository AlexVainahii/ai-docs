import React from 'react';
import {
  ContactContainer,
  ContactInfo,
  Content,
  Label,
  Link,
  MainContent,
  Subtitle,
  Title,
} from './Contacts.styled';
import LogoImg from '../../images/Aidocs.png';

const Contacts = () => {
  return (
    <Content>
      <MainContent>
        {' '}
        <img src={LogoImg} alt="logo" width={'450px'} height={'400px'} />
        <ContactContainer>
          <Title>Контакти</Title>
          <Subtitle>
            Зв'яжіться з нами для отримання додаткової інформації:
          </Subtitle>
          <ContactInfo>
            <Label>Email:</Label>{' '}
            <Link href="mailto:info@aidocs.com">info@aidocs.com</Link>
          </ContactInfo>
          <ContactInfo>
            <Label>Телефон:</Label>{' '}
            <Link href="tel:+380980000000">+38 098 000 000 0</Link>
          </ContactInfo>
          <ContactInfo>
            <Label>Адреса:</Label> AI DOCS, вул. Центральна 10, м. Kmdsd,
            Україна
          </ContactInfo>
        </ContactContainer>
      </MainContent>
    </Content>
  );
};

export default Contacts;
