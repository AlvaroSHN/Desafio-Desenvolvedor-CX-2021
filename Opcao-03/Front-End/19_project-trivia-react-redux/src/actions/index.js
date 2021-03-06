import triviaAPI from '../services/triviaAPI';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const USER_INFO = 'USER_INFO';
export const USER_SCORE = 'USER_SCORE';
export const USER_RANKING = 'USER_RANKING';
export const QUESTION_LIST = 'QUESTION_LIST';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS';
export const USER_CLEAR = 'USER_CLEAR';

export const tokenRequest = (token) => ({
  type: TOKEN_REQUEST,
  token,
});

export const userInfo = (name, email) => ({
  type: USER_INFO,
  name,
  email,
});

export const userScore = (score) => ({
  type: USER_SCORE,
  score,
});

export const clearQuestions = () => ({
  type: CLEAR_QUESTIONS,
});

export const userClear = () => ({
  type: USER_CLEAR,
});

export const userRanking = (ranking) => ({
  type: USER_RANKING,
  ranking,
});

export const requestQuestions = (questions) => ({
  type: QUESTION_LIST,
  questions,
});

function sendQuestionsToStore(fetchedQuestions) {
  return {
    type: SAVE_QUESTIONS,
    fetchedQuestions,
  };
}

export function fetchQuestionsFromAPI(numberOfQuestions) {
  return async (dispatch) => {
    const questions = await triviaAPI(numberOfQuestions);
    dispatch(sendQuestionsToStore(questions.results));
  };
}
