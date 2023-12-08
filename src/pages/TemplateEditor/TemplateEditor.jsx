import React, { useState } from 'react';
import {
  Content,
  MainContent,
  Form,
  Button,
  EditorContainer,
  Input,
  H2,
  Label,
  InputName,
  PdfBox,
} from './TemplateEditor.styled';

import html2pdf from 'html2pdf.js';
import ConvertApi from 'convertapi-js';
import MyEditor from 'components/MyEditor/MyEditor';
import { useDispatch, useSelector } from 'react-redux';
import { selectTemplates, selectUser } from 'redux/selectors';
import {
  addTemplate,
  setImage,
  updateTemplate,
} from 'redux/templates/operationsTemplate';
import { useParams } from 'react-router-dom';

const TemplateEditor = () => {
  const user = useSelector(selectUser);
  const getTemplates = useSelector(selectTemplates);
  const { id } = useParams();
  const template = getTemplates.find(temp => temp.id === id);
  const dispatch = useDispatch();
  const [editorValue, setEditorValue] = useState(
    template ? template.description : ''
  );
  const [templateName, setTemplateName] = useState(
    template ? template.name : ''
  );
  const [templateImageUrl, setTemplateImageUrl] = useState(
    template ? template.templateImageUrl : ''
  );

  const convertApi = ConvertApi.auth('ce0Ute8WpA1WGppR');

  const handleChangeName = e => {
    setTemplateName(e.target.value);
  };

  const handleChange = (content, editor) => {
    setEditorValue(content);
  };
  const handleFileChange = async event => {
    const file = event.target.files[0];
    setTemplateName(file.name);
    const params = convertApi.createParams();
    params.add('file', file);

    try {
      const result = await convertApi.convert('docx', 'html', params);
      const result1 = await convertApi.convert('docx', 'jpg', params);
      // Отримайте посилання на завантаження HTML-файлу
      const htmlFileUrl = result.files[0].Url;
      const htmlFileUrl1 = result1.files[0].Url;

      const prevUrl = await setImage(
        'previous',
        htmlFileUrl1,
        result1.files[0].FileId
      );
      // Завантажте вміст HTML-файлу
      setTemplateImageUrl(prevUrl);
      const response = await fetch(htmlFileUrl);
      const content = await response.text();

      setEditorValue(content);
    } catch (error) {
      console.error('Error converting Word file:', error);
    }
  };

  const saveTemplate = () => {
    dispatch(
      id
        ? updateTemplate({
            id: template.id,
            userEmail: user.email,
            name: templateName,
            description: editorValue,
            templateImageUrl: templateImageUrl,
          })
        : addTemplate({
            userEmail: user.email,
            name: templateName,
            description: editorValue,
            templateImageUrl: templateImageUrl,
          })
    );
  };

  const handleGeneratePDF = () => {
    const content = editorValue;

    html2pdf(content, {
      margin: 10,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
  };

  return (
    <Content edit={template?.id}>
      <MainContent>
        <H2>{template?.id ? 'Редагування шаблону' : 'Створення шаблону'}</H2>
        <Form>
          <div
            style={{
              marginBottom: '10px',
              width: '100%',
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <Label>Ім'я шаблону</Label>
            <InputName
              type="text"
              placeholder="Ім'я шаблону"
              value={templateName}
              onChange={handleChangeName}
            />
            {!user?.email ? (
              <div
                style={{
                  backgroundColor: '#d23c46',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '5px',
                }}
              >
                <span
                  style={{
                    margin: '0 auto',
                    display: 'block',
                    textAlign: 'center',
                  }}
                >
                  Для можливості редагування зареєструйтесь
                </span>
              </div>
            ) : (
              <>
                <Button onClick={saveTemplate}>Зберегти шаблон</Button>
                <Button onClick={handleGeneratePDF}>Завантажити PDF</Button>
              </>
            )}
          </div>
          <EditorContainer>
            {!user?.email ? (
              <PdfBox url={template?.templateImageUrl} />
            ) : (
              <MyEditor
                editorValue={editorValue}
                apiKey="a85ckh1rvs1kxnitvo54z16evw4mvc00gqs3ukonw5rzvgd1"
                init={{
                  height: '100%',
                  menubar: true,
                  branding: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar:
                    'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  // Додаткові опції
                  fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
                  language: 'uk',
                  content_style: 'body { font-family: Arial, sans-serif; }',
                  automatic_uploads: true,
                  file_picker_types: 'image',
                  file_picker_callback: (callback, value, meta) => {
                    // Додайте свій власний код для вибору файлів
                  },
                  // Інші опції за потреби
                }}
                handleChange={handleChange}
              />
            )}
          </EditorContainer>
          {template?.id ? null : (
            <Input type="file" onChange={handleFileChange} />
          )}
        </Form>
      </MainContent>
    </Content>
  );
};

export default TemplateEditor;
