import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import { Homee } from './test/Homee';
import { NotFound } from './test/NotFound';
import { Other } from './test/Other';

export const Router = () => {
  return (
    <Routes>
      <Route index element={<Homee />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
