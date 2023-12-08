import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const MyEditor = ({ editorValue, handleChange }) => {
  return (
    <Editor
      initialValue={editorValue}
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
      onEditorChange={handleChange}
    />
  );
};

export default MyEditor;
