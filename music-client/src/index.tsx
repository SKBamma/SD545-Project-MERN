import ReactDOM from 'react-dom/client';

import Home from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>

);




