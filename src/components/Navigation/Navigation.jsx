import { selectIsOnline } from 'redux/auth/selectors';

import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isOnline = useSelector(selectIsOnline);

  return (
    <nav className="flex justify-between bg-sky-500/70 px-10 py-4">
      <div className="flex gap-6">
        <NavLink className="text-xl font-bold" to="/">
          Home
        </NavLink>
        {isOnline && (
          <NavLink className="text-xl font-bold" to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>
      {isOnline ? (
        <>
          <UserMenu />
        </>
      ) : (
        <div className="flex gap-6">
          <NavLink className="text-xl font-bold" to="/login">
            Login
          </NavLink>
          <NavLink className="text-xl font-bold" to="/register">
            Registration
          </NavLink>
        </div>
      )}
    </nav>
  );
};
