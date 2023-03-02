import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Producers } from '../components/producers/Producers';

export const ProducersRoute = () => {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path='producers' element={<Producers />} />

          <Route path='/' element={<Navigate to='/producers' />} />
        </Routes>
      </div>
    </>
  );
};
