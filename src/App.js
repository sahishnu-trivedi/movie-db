import './App.css';
import { GlobalContextProvider } from './components/context/GlobalContextProvider';

import Header from './pages/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  
  return (
    <GlobalContextProvider>
      <div>
        <Header />
        <Outlet />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
