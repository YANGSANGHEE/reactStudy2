import './Common.css'
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
// import styled from 'styled-components';
import TodoListItem from './TodoListItem';

// const TodoLists = styled.div`
//   min-height: 320px;
//   max-height: 513px;
//   overflow-y: auto;
// `


// const List = styled.div`
//   min-height: 320px;
//   max-height: 513px;
//   overflow-y: auto;
// `

const TodoList = ({ todos, onRemove, onToggle }) => { // todos,onRemove,onToggle  가져옴
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem todo={todo} key={key} style={style} onToggle={onToggle} onRemove={onRemove} />
    )
  }, [onRemove, onToggle, todos]);
  return (
    <List className='TodoList' width={513} height={511} rowCount={todos.length} rowHeight={73} rowRenderer={rowRenderer} list={todos} style={{ outline: 'none' }} />
    // <TodoLists>
    //   {todos.map(todo => ( // todo.map 메서드로 todo 배열만큼 컴포넌트 생성
    //     <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItem>
    //     //컴포넌트에 다시 todo,onRemove,onToggle props로 보내고 key 값을 todo.id로 설정
    //   ))}
    // </TodoLists>
  );
};

export default React.memo(TodoList); // 컴포넌트의 props가 바뀌지 않으면 리렌더링 하지 않도록 설정
