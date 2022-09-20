import { MdAdd } from 'react-icons/md';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  background: #fff;
  border-bottom: 1px solid #363636;
  padding: 0.75rem 1.5rem;
  & > input[type='text'] {
    width: 100%;
    background: none;
    outline: none;
    border: none;
    font-size: 1.125rem;
    line-height: 1.5;
    color: #363636;
    &::placeholder {
      color: #909090;
    }
  }
  & > button {
    width: 35px;
    height: 35px;
    background: #363636;
    color: white;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ease 0.5s;
    &:hover {
      background: transparent;
      border: 1px solid #363636;
      color: #363636;
    }
  }
`;

const TodoInsert = () => {
  return (
    <Form>
      <input type={'text'} placeholder="할일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </Form>
  );
};

export default TodoInsert;
