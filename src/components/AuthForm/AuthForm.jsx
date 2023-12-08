import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GoogleIcon from '@mui/icons-material/Google';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  login,
  loginWithGoogle,
  logout,
  register,
} from '../../redux/auth/opertionsActions';

import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormButton,
  AuthFormErrorMessage,
  AuthFormSuccessMessage,
  AuthFormButtonContainer,
} from './AuthForm.styled';
import { useNavigate } from 'react-router-dom';
import {
  selectError,
  selectLoading,
  selectShowAuthForm,
  selectUser,
} from 'redux/selectors';
import { setShowAuthForm } from 'redux/auth/authSlice';

const AuthForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showAuthForm = useSelector(selectShowAuthForm);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const successMessage = useSelector(state => state.auth.successMessage);
  const dispatch = useDispatch();

  const handleToggleAuthForm = () => {
    dispatch(setShowAuthForm(!showAuthForm));
  };

  const handleRegister = async e => {
    e.preventDefault();

    dispatch(register({ email, password }));
  };

  const handleLogin = async e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleGoogleLogin = async e => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  const handleLogout = async () => {
    setEmail('');
    setPassword('');
    dispatch(setShowAuthForm(false));
    navigate('/');
    dispatch(logout());
  };

  const user = useSelector(selectUser);

  return (
    <AuthFormContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error && <AuthFormErrorMessage>{error}</AuthFormErrorMessage>}
          {successMessage && (
            <AuthFormSuccessMessage>{successMessage}</AuthFormSuccessMessage>
          )}
          {!user && !showAuthForm ? (
            <AuthFormButton
              onClick={handleToggleAuthForm}
              title="Увійти в систему"
            >
              <AccountCircleIcon />
            </AuthFormButton>
          ) : (
            <>
              {!user ? (
                <form>
                  <AuthFormInput
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <AuthFormInput
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <AuthFormButtonContainer>
                    <AuthFormButton onClick={handleRegister} title="Реєстрація">
                      <AppRegistrationIcon />
                    </AuthFormButton>
                    <AuthFormButton onClick={handleLogin} title="Увійти">
                      <LoginIcon />
                    </AuthFormButton>
                    <AuthFormButton
                      onClick={handleGoogleLogin}
                      title="Увіти за допомого Google-акаунта"
                    >
                      <GoogleIcon />
                    </AuthFormButton>
                    <AuthFormButton
                      onClick={handleToggleAuthForm}
                      title="Відмінити"
                    >
                      <CancelIcon />
                    </AuthFormButton>
                  </AuthFormButtonContainer>
                </form>
              ) : (
                <div>
                  <AuthFormButtonContainer>
                    {/* <p
                      style={{
                        color: '#000',
                        marginRight: '10px',
                        textShadow: '2px 2px 2px rgba(255, 255, 255, 1)',
                      }}
                    >
                      
                    </p> */}
                    <AuthFormButton
                      onClick={handleLogout}
                      title="Вийти із системи"
                      style={{
                        width: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      {user.displayName ? user.displayName : user.email}
                      <LogoutIcon />
                    </AuthFormButton>
                  </AuthFormButtonContainer>
                </div>
              )}
            </>
          )}
        </>
      )}
    </AuthFormContainer>
  );
};

export default AuthForm;
