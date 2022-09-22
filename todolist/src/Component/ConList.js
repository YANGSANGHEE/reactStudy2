import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoListitem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  & > div.checkbox {
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    svg {
      font-size: 1.5rem;
    }
    div.text {
      margin-left: 0.5rem;
      flex: 1;
    }
    &.checked {
      svg {
        color: #007575;
      }
      & > div.text {
        color: #cdcdcd;
        text-decoration: line-through;
      }
    }
  }
  & > div.remove {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #007575;
    cursor: pointer;
    &:hover {
      color: #8dbed1;
    }
  }

  & + & {
    border-top: 1px solid #007575;
  }
`;

const ConList = ({ memoList, onRemove, onToggle }) => {
  const { id, text, chekced } = memoList;
  return (
    <TodoListitem>
      <div className={cn('checkbox', { chekced })} onClick={() => onToggle}>
        {chekced ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </TodoListitem>
  );
};
export default ConList;
