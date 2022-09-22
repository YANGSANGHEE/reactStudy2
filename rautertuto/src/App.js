import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './Page/Profile';
import About from './Page/About';
import Home from './Page/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Profile/:username' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
