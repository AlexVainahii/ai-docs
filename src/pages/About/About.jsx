import React from 'react';
import {
  AboutContainer,
  Content,
  Description,
  MainContent,
  Paragraph,
  Subtitle,
  Title,
} from './About.styled.';
import LogoImg from '../../images/Aidocs.png';

const About = () => {
  return (
    <Content>
      <MainContent>
        <img src={LogoImg} alt="logo" width={'450px'} height={'400px'} />
        <AboutContainer>
          <Title>Про нас</Title>
          <Description>
            Інтелектуальна система створення шаблонів документів для підприємців
            AI DOCS забезпечує швидкі та надійні вантажні перевезення. Ми
            спеціалізуємося на наданні професійних послуг, сприяючи зв'язку між
            перевізниками та клієнтами.
          </Description>
          <Subtitle>Наша місія</Subtitle>
          <Paragraph>
            Наша місія полягає в забезпеченні наших клієнтів найкращими
            вантажними перевезеннями та високоякісним обслуговуванням. Ми
            прагнемо створити безпечний та надійний зв'язок за доступними
            цінами.
          </Paragraph>
          <Subtitle>Наші цінності</Subtitle>
          <Paragraph>
            - Професіоналізм: Ми співпрацюємо з досвідченими та надійними
            водіями, щоб гарантувати високу якість перевезень.
          </Paragraph>
          <Paragraph>
            - Відповідальність: Ми несемо відповідальність за кожне перевезення
            та гарантуємо його безпечну та своєчасну доставку.
          </Paragraph>
          <Paragraph>
            - Клієнтоорієнтованість: Ми завжди ставимо потреби та задоволення
            наших клієнтів на перше місце.
          </Paragraph>
        </AboutContainer>
      </MainContent>
    </Content>
  );
};

export default About;
