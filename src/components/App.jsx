import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import About from 'pages/About/About';
import Contacts from 'pages/Contacts/Contacts';
import Templates from 'pages/Templates/Templates';

import TemplateEditor from 'pages/TemplateEditor/TemplateEditor';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="template-edit" element={<TemplateEditor />} />
        <Route path="template-edit/:id" element={<TemplateEditor />} />
        <Route path="templates" element={<Templates />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
