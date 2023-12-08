import React, { useEffect, useState } from 'react';
import { Content, MainContent } from './Templates.styled';
import TemplatesList from '../../components/TemplatesList/TemplatesList';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavTemplates, selectTemplates } from 'redux/selectors';
import { H2 } from 'pages/TemplateEditor/TemplateEditor.styled';
import { fetchTemplates } from 'redux/templates/operationsTemplate';
import TemplateFind from '../../components/TemplateFind/TemplateFind';

const Templates = () => {
  const templates = useSelector(selectTemplates);
  const favTemplates = useSelector(selectFavTemplates);
  const [search, setSearch] = useState('');
  const [favorite, setFavorite] = useState('');
  const [allTemplates, setAllTemplates] = useState(
    templates?.length === 0 ? [] : templates
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const newTemplates = await dispatch(fetchTemplates());

        setAllTemplates(newTemplates.payload.templates);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    getTemplates();
  }, [dispatch]);
  useEffect(() => {
    if (search) {
      const searchTemplates = allTemplates.filter(temp =>
        temp.description.includes(search)
      );
      setAllTemplates(searchTemplates);
    } else setAllTemplates(templates);
  }, [search, allTemplates, templates]);
  useEffect(() => {
    if (favorite) {
      const favoriteTemplates = allTemplates.filter(temp =>
        favTemplates.some(obj => obj.uid === temp.id)
      );

      setAllTemplates(favoriteTemplates);
    } else setAllTemplates(templates);
  }, [favorite, allTemplates, favTemplates, templates]);
  return (
    <Content search={search + favorite}>
      <>
        <H2>Шаблони документів</H2>
        <TemplateFind onSearch={setSearch} onFavorite={setFavorite} />
        <MainContent>
          {allTemplates && <TemplatesList allTemplates={allTemplates} />}
        </MainContent>
      </>
    </Content>
  );
};

export default Templates;
