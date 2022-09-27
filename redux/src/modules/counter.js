// 액션 타입 만들기
// Ducks 패턴을 따를땐 액션의 이름에 접두사 넣음
// 이렇게하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있음

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수 만들기
export const setDiff = diff => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });