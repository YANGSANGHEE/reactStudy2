import styled from "styled-components"

const Notfounds = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-size: 64;
`
const NotFound = () => {
  return (
    <Notfounds />
  )
}

export default NotFound