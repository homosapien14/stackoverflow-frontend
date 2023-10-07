import alertReducer from "./alert/alert.slice";
import postsReducer from "./posts/posts.slice";
import answerReducer from "./answers/answers.slice";
import authReducer from "./auth/auth.slice";

export const rootReducer = {
  alert: alertReducer,
  posts: postsReducer,
  answers: answerReducer,
  auth: authReducer,
};
