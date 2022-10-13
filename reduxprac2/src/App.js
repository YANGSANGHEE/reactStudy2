import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREASE } from './reducers/index'

function App() {
  const count = useSelector(state => state.number);
  const disPatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => disPatch(INCREMENT())}>증가</button>
      <button onClick={() => disPatch(DECREASE())}>감소</button>
    </>
  );
}

export default App;
