import { Route, Routes } from 'react-router-dom';
import Home from '../Component/Home';
import About from '../Component/About';
import Profile from '../Component/Propfile';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Profile/:user' element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
