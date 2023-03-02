import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='bg-secondary w-full flex justify-end items-center h-16'>
      <span className='text-fourth flex items-center mr-4'>{user.name}</span>
      <Link
        className='text-fourth flex items-center p-4 h-5 rounded-md hover:bg-third hover:mr-4'
        onClick={onLogout}
        to='/'>
        Salir
      </Link>
    </nav>
  );
};
