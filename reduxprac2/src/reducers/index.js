//1. 액션 생성 함수 정의


const INCREMENT = () => {
  return {
    type: INCREMENT
  } // 정의한 액션
} // 액션 생성 함수는 객체를 리턴하며 type는 필수 key 임

const DECREASE = () => {
  return {
    type: DECREASE
  }// 정의한 액션
} // 액션 생성 함수는 객체를 리턴하며 type는 필수 key 임

export { INCREMENT, DECREASE };


//2. reducer만들기
//기본스테이트 상태 정의
const initialState = {
  number: 0
};

//리듀서 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      }
    default:
      return state;
  }
}


//리듀서 내보내기

export default reducer;