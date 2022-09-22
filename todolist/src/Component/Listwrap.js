import styled from 'styled-components';
import ConList from './ConList';

const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const Listwrap = ({ memoList, onRemove, onToggle }) => {
  return (
    <TodoLists>
      {memoList.map((value) => (
        <ConList
          key={value.id}
          memoList={value}
          onRemove={onRemove}
          onToggle={onToggle}
        ></ConList>
      ))}
    </TodoLists>
  );
};

export default Listwrap;
