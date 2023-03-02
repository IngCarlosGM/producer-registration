import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const ProducersRoute = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='producers' element={<h1>Ruta producers</h1>} />

          <Route path='/' element={<Navigate to='/producers' />} />
        </Routes>
      </div>
    </>
  );
};
