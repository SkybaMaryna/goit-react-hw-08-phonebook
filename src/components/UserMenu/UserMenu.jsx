import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import { selectUserEmail } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="flex gap-6">
      <p className="text-xl font-bold">Welcome, {userEmail}</p>
      <button
        className=" text-md px-2 hover:bg-blue-700 bg-blue-600 rounded-md text-white"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
