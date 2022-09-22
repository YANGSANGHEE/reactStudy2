import { Route, Routes } from 'react-router-dom';
import About from '../Page/About';
import Home from '../Page/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route Path='/' element={<Home />} />
        <Route Path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
