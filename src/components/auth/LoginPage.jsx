import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { authentication } from '../../services/authentication';

import { Button } from '../widgets/Button';
import { InputLabel } from '../widgets/InputLabel';
import { InputPasswordLabel } from '../widgets/InputPasswordLabel';
import { TextTitle } from '../widgets/TextTitle';

export const LoginPage = () => {
  const [user, setUser] = useState('hyela');
  const [password, setPassword] = useState('123456');
  const [isAuthenticate, setIsAuthenticate] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler = async e => {
    e.preventDefault();
    const result = await authentication(user, password);

    const lastPath = localStorage.getItem('lastPath') || '/';

    if (result?.code === 200) {
      login(user);
      localStorage.setItem('token', result.token);
      navigate(lastPath, {
        replace: true,
      });
    } else {
      setIsAuthenticate('error');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const userHandler = e => {
    setUser(e.target.value);
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='bg-white p-7 rounded-md'>
        <form className='grid grid-rows-1 gap-4' onSubmit={onSubmitHandler}>
          <TextTitle text='Autenticarse' />

          <InputLabel
            label='Usuario'
            text={user}
            onChangeHandler={userHandler}
          />
          <InputPasswordLabel
            label='Contraseña'
            text={password}
            onChangeHandler={passwordHandler}
          />

          {isAuthenticate === 'error' && (
            <span className='text-red-600 text-sm'>
              No fue posible iniciar sesión
            </span>
          )}

          <Button type='submit' text='Iniciar sesión' />
        </form>
      </div>
    </div>
  );
};
