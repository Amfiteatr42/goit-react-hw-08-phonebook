import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authorization/auth-operations';
import { selectUserName } from 'redux/authorization/auth-selectors';

export function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <div>
      {userName && <p>{userName}</p>}
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
