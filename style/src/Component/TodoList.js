import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListtem = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: hidden;
`;

const TodoList = () => {
  return (
    <TodoListtem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </TodoListtem>
  );
};

export default TodoList;
