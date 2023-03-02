import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Carlos Gamboa');

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className=''>
      <h1>Ruta login</h1>
      <hr />

      <button
        className='text-fourth bg-third flex items-center p-4 h-5 rounded-md hover:text-fourth'
        onClick={onLogin}>
        Iniciar sesión
      </button>
    </div>
  );
};
