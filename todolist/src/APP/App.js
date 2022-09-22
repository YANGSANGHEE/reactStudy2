import { useState, useCallback, useRef } from 'react';
import Template from '../Component/Template';
import Insert from '../Component/Insert';
import Listwrap from '../Component/Listwrap';

function App() {
  const [memoList, setMemoList] = useState([
    {
      id: 1,
      text: '투두리스트당',
      checked: true,
    },
    {
      id: 2,
      text: '투두리스트당',
      checked: false,
    },
    {
      id: 3,
      text: '투두리스트당',
      checked: false,
    },
    {
      id: 4,
      text: '투두리스트당',
      checked: false,
    },
    {
      id: 5,
      text: '투두리스트당',
      checked: false,
    },
  ]);
  const nextId = useRef(6);
  const onInsert = useCallback(
    (text) => {
      const memoList2 = {
        id: nextId.current,
        text,
        checked: false,
      };
      setMemoList(memoList.concat(memoList2));
      nextId.current += 1;
    },
    [memoList]
  );

  const onRemove = useCallback(
    (id) => {
      setMemoList(memoList.filter((value) => value.id !== id));
    },
    [memoList]
  );

  const onToggle = useCallback(
    (id) => {
      setMemoList(
        memoList.map((value) =>
          value.id === id ? { ...value, checked: !value.checked } : value
        )
      );
    },
    [memoList]
  );
  return (
    <Template>
      <Insert onInsert={onInsert} />
      <Listwrap memoList={memoList} onRemove={onRemove} onToggle={onToggle} />
    </Template>
  );
}

export default App;
