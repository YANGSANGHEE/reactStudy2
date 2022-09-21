import React from 'react';
import './Common.css'
import styled from 'styled-components';
import cn from 'classnames'
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox
} from 'react-icons/md'

const TodoListItems = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(even){
    background: #fff;
  }
  &>div:nth-child(1){
    cursor : pointer;
    flex : 1;
    display: flex;
    align-items: center;
    svg{
      font-size: 1.5rem;
      margin-right: .5rem;
      color : #363636;
    }
    .text{
      color :#363636;
    }
    /* 체크되었을때 보여줄 스타일 */
    &.checked{
      svg{
        color : #363636;
      }
      .text{
        color: #949494;
        text-decoration: line-through red 2px;
      }
    }
  }
  &>div:nth-child(2){
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #363636;
    cursor: pointer;
    &:hover{
      color: #363636;;
    }
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle, style }) => { // TodoList로부터 todo,onRemove,onToggle 받아옴
  const { id, text, checked } = todo; // todo 구조분해할당

  return (
    <TodoListItems className='TodoListItem-virtualized' style={style}>
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {/* checked가 true일때 checkbox라는 클래스를 가진다. 클릭이벤트로 onToggle 함수 호출 onToggle이라는 함수의 매개변수를 todo.id로 받음 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {/* cheked가 true 일때 체크된 아이콘 false 빈박스 아이콘 노출 */}
        <div className='text'>{text}</div>
        {/* text = todo.text */}
      </div>
      <div className='remove' onClick={() => { onRemove(id) }}>
        {/* 클릭시 onRemove 함수 호출 함수매개변수 todo.id로 받음 */}
        <MdRemoveCircleOutline />
      </div>
    </TodoListItems>
  );
};

export default React.memo(TodoListItem);
