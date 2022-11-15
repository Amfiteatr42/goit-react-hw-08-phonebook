import { NavLink, Outlet } from 'react-router-dom';

export function AppBar() {
  return (
    <>
      <header>
        <nav>
          <NavLink to={'/'}>Main</NavLink>
          <NavLink to={'registry'}>Registry</NavLink>
          <NavLink to={'login'}>Sign In</NavLink>
          <NavLink to={'contacts'}>Contacts</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
