import styled from 'styled-components'

const TemplateWrap = styled.div`
  width : 600px;
  &>div.title{
    width: 100%;
    height: 75px;
    background: #007575;
    font-size:1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color : #fff;
  }
`
const Template = ({ children }) => {
  return (
    <TemplateWrap>
      <div className='title'>일정관리</div>
      <div className='content'>{children}</div>
    </TemplateWrap>
  )
}

export default Template;