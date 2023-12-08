import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  Header,
  ResponsiveLayout,
  Sidebar,
  Navigation,
  NavigationLink,
  AuthFormContainer,
} from './Layout.styled';
import LogoImg from '../../images/Aidocs.png';
import AuthForm from 'components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';

const Layout = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <ResponsiveLayout>
      <Container>
        <Outlet />
        <Sidebar>
          <Header>
            <Link to="/">
              <img src={LogoImg} alt="logo" width={'150px'} height={'120px'} />
            </Link>
          </Header>

          {!user ? (
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <NavigationLink to="/templates">Шаблони</NavigationLink>
              <NavigationLink to="/about">Про нас</NavigationLink>
              <NavigationLink to="/contacts">Контакти</NavigationLink>
            </Navigation>
          ) : (
            <Navigation>
              <NavigationLink to="/">Головна</NavigationLink>
              <NavigationLink to="/templates">Шаблони</NavigationLink>
              <NavigationLink to="/template-edit">
                Створити шаблон
              </NavigationLink>
              <NavigationLink to="/about">Про нас</NavigationLink>
              <NavigationLink to="/contacts">Контакти</NavigationLink>
            </Navigation>
          )}
          <ToastContainer />
          <AuthFormContainer>
            <AuthForm />
          </AuthFormContainer>
        </Sidebar>
      </Container>
    </ResponsiveLayout>
  );
};
export default Layout;
