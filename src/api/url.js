const BASE_URL = "https://stackoverflow-y33h.onrender.com";
export const usersData = BASE_URL + "/api/users";
export const profileData = BASE_URL + "/api/users/{id}";

// Auth
export const loadUserData = BASE_URL + "/api/auth";
export const registerUser = BASE_URL + "/api/users/signup";
export const loginUser = BASE_URL + "/api/users/signin";

// Posts
export const allPostsData = BASE_URL + "/api/posts";
export const singlePostData = BASE_URL + "/api/posts/{id}";
export const allTagPostsData = BASE_URL + "/api/posts/tag/{tagName}";
export const createSinglePost = BASE_URL + "/api/posts";
export const deleteSinglePost = BASE_URL + "/api/posts/{id}";

// Answers
export const allAnswersData = BASE_URL + "/api/posts/answers/{id}";
export const createSingleAnswer = BASE_URL + "/api/posts/answers/{postId}";
export const deleteSingleAnswer = BASE_URL + "/api/posts/answers/{AnswerId}";
