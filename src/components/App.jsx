import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshCurrentUser } from 'redux/authorization/auth-operations';
import { Container } from './App.styled';
import { AppBar } from './AppBar/AppBar';
import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage';
import { RegistryPage } from './pages/RegistryPage';
import { WelcomePage } from './pages/WelcomePage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route
            index
            element={<RestrictedRoute element={<WelcomePage />} />}
          />
          <Route
            path="registry"
            element={<RestrictedRoute element={<RegistryPage />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute element={<LoginPage />} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
        </Route>
      </Routes>
    </Container>
  );
}
