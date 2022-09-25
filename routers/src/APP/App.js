import { Route, Routes } from 'react-router-dom';
import Layout from '../Component/Layout';
import Article from '../Component/Article';
import Articles from '../Component/Articles';
import Home from '../Component/Home';
import About from '../Component/About';
import Profile from '../Component/Propfile';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Profile/:user' element={<Profile />}></Route>
        <Route path='/articles' element={<Articles />}>
          <Route path=':id' element={<Article />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
