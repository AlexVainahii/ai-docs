import React from 'react';
import { RiEdit2Line, RiDeleteBinLine, RiHeartAddLine } from 'react-icons/ri';
import {
  Container,
  DeleteButton,
  EditButton,
  FavButton,
  Image,
  P,
  Rout,
  RoutH,
  TransportationItem,
} from './TemplatesList.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectFavTemplates, selectUser } from 'redux/selectors';
import { Link } from 'react-router-dom';
import {
  addTemplateFavorite,
  deleteTemplate,
} from 'redux/templates/operationsTemplate';

const TemplateList = ({ allTemplates, onButton }) => {
  const user = useSelector(selectUser);
  const favTemplates = useSelector(selectFavTemplates);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTemplate(id));
  };
  const handleFavorite = (templateId, bool) => {
    console.log('templateId, bool :>> ', templateId, bool);
    dispatch(addTemplateFavorite({ templateId, bool }));
  };
  return (
    <Container>
      {allTemplates?.map(template => (
        <TransportationItem key={template.id}>
          <P>{template.name}</P>
          <RoutH>
            <Link
              to={`/template-edit/${template.id}`}
              style={{ height: '100%' }}
            >
              <Image src={template.templateImageUrl} alt={template.name} />
            </Link>
            <Rout>
              {' '}
              <EditButton
                to={`/template-edit/${template.id}`}
                title="Редагувати шаблон"
              >
                <RiEdit2Line size={25} />
              </EditButton>
              {template?.email !== user?.email && (
                <FavButton
                  title="Додати до обраних"
                  col={favTemplates?.findIndex(
                    temp => temp.uid === template.id
                  )}
                  onClick={() => {
                    favTemplates?.findIndex(temp => temp.uid === template.id)
                      ? handleFavorite(template.id, true)
                      : handleFavorite(
                          favTemplates?.find(temp => temp.uid === template.id),
                          false
                        );
                  }}
                >
                  <RiHeartAddLine size={20} />
                </FavButton>
              )}
              {template?.email !== user?.email && (
                <DeleteButton
                  title="Видалити шаблон"
                  onClick={() => {
                    handleDelete(template.id);
                  }}
                >
                  <RiDeleteBinLine size={20} />
                </DeleteButton>
              )}
            </Rout>
          </RoutH>
        </TransportationItem>
      ))}
    </Container>
  );
};

export default TemplateList;
