import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'redux/auth/operations';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user)).unwrap();
    navigate('/contacts');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-200 to-blue-200 ">
      <form
        className="flex gap-6 flex-col w-1/3 p-10 border-blue-600 border-2 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-2xl font-bold">Login form</h1>
        <input
          className="border px-2 outline-none"
          type="email"
          name="email"
          placeholder="Email..."
          value={email}
          onChange={handleChange}
        />
        <input
          className="border px-2 outline-none"
          type="password"
          name="password"
          placeholder="Password..."
          value={password}
          onChange={handleChange}
        />
        <button className="border hover:bg-blue-700 bg-blue-600 text-white rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};
