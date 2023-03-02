import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../components/auth/LoginPage';
import { ProducersRoute } from './ProducersRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <div className='bg-primary h-screen w-screen'>
      <Routes>
        <Route
          path='login/*'
          element={
            <PublicRoute>
              <Routes>
                <Route path='/*' element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <ProducersRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
