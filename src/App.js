import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/Home';
import Details from './components/Details';

import { getSymbols } from './slices/CompanySymbolSlice';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  dispatch(getSymbols());
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:symbol/:index" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
