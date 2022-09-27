import { createStore } from 'redux'

// 리덕스관리할 상태 정의
const initialState = {
  counter: 0,
  text: '',
  list: []
}

// 액션타입 정의
// 액션타입은 주로 대문자로 작성한다.
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"
const CHANGE_TEXT = "CHANGE_TEXT"
const ADD_TO_LIST = "ADD_TO_LIST"

// 액션 생성함수 정의
// 액션 생성함수는 주로 camelCase로 작성
const increase = () => ({
  type: INCREASE // 액션 객체에는 Type 값이 필수
});
const decrease = () => ({
  type: DECREASE
});
const changeText = text => ({
  type: CHANGE_TEXT,
  text // 액션 안에는 type외에 추가적인 필드 맘대로 넣을 수 있음
})
const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

// 리듀서 만들기
// 새로운 상태로 만들어주는 함수
// 불변성 꼭 지켜야함 !

function reducer(state = initialState, action) { // state 값은 기본 undefined
  switch (action.type) {
    case INCREASE:
      return {
        ...state, // 불변성 유지
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      };
    default:
      return state;
  }
}

// store 생성
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 있는 상태 조회

//스토어 안에 들어있는 상태가 바뀔때마다 호출되는 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
}

//구독 해제하고 싶을때 unsubscribe()호출
const unsubscribe = store.subscribe(listener);

// 액션 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));