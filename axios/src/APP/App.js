import { Route, Routes } from 'react-router-dom';
import Newspage from '../Component/Newspage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Newspage />}></Route>
      <Route path='/:category' element={<Newspage />}></Route>
    </Routes>)
}
export default App;
