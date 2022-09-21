import { useState, useCallback, useRef } from 'react'
import TodoTemplate from '../Component/TodoTemplate';
import TodoInsert from '../Component/TodoInsert';
import TodoList from '../Component/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: false
    },
    {
      id: 3,
      text: '일정관리 앱 만들기',
      checked: false
    },
  ])// todos 정의

  const nextId = useRef('4') // 로컬변수 개념 : 렌더링과 상관없이 바뀔 수 있는 값
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current, //4
      text,
      checked: false, // 새로 생기는값 default
    };
    setTodos(todos.concat(todo)); // 새로 추가되는 todo 값을 기존 todos 배열에 합침
    nextId.current += 1; // 함수가 호출될떄 마다 next.id값이 1씩 증가
  }, [todos]) // todos 값이 바뀔때 한번만 함수 호출

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id)); // id값을 매개변수로 받아 todo.id값이랑 다른 배열들을 리턴
  }, [todos])// todos 값이 바뀔때 한번만 함수 호출


  const onToggle = useCallback(id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo,) //id값을 매겨변수로 받아 todo.id값이랑 같을때 todo 배열을 그대로 복사(spread) todo.checked(false)로 되어있는값을 반대로 (true)로 바꿔줌
    );
  }, [todos]) //todos 값이 바뀔때 한번만 함수 호출
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* props로 onInsert 전달 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      {/* props로 todos,onRemove,onToggle 전달 */}
    </TodoTemplate>
  );
}

export default App;
