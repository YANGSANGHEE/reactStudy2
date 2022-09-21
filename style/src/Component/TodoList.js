import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`


const TodoList = ({ todos, onRemove, onToggle }) => { // todos,onRemove,onToggle  가져옴
  return (
    <TodoLists>
      {todos.map(todo => ( // todo.map 메서드로 todo 배열만큼 컴포넌트 생성
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItem>
        //컴포넌트에 다시 todo,onRemove,onToggle props로 보내고 key 값을 todo.id로 설정
      ))}
    </TodoLists>
  );
};

export default TodoList;
