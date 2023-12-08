import React, { useState } from 'react';
import { Button, FindContainer, Input } from './TemplateFind.styled';

const TemplateFind = ({ onSearch, onFavorite }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };
  const handleFavoriteClick = () => {
    onFavorite(prev => (prev === 'true' ? '' : 'true'));
  };
  return (
    <FindContainer>
      <Input
        type="text"
        placeholder="Введіть термін пошуку"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}>Пошук</Button>
      <Button onClick={handleFavoriteClick}>Обрані</Button>
    </FindContainer>
  );
};

export default TemplateFind;
