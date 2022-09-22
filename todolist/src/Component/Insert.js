import styled from "styled-components";
import { useState, useCallback } from 'react'

const Insertwrap = styled.form`
  height: 60px;
  display: flex;
  &>input{
    width: 90%;
    height: 100%;
    background: #fff;
    padding :1.5rem;
  }
  &>button{
    width: 10%;
    height: 100%;
    background: #007575;
    color : #fff;
  }
`
const Insert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, [])

  const onSubmit = useCallback(e => {
    onInsert(value);
    setValue('');
    e.preventDefault()
  }, [onInsert, value]);

  return (
    <Insertwrap onSubmit={onSubmit}>
      <input value={value} onChange={onChange} placeholder="일정을 입력해주세요" />
      <button type="submit">추가</button>
    </Insertwrap>
  )
}

export default Insert