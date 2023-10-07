import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  allPostsData,
  singlePostData,
  createSinglePost,
  deleteSinglePost,
} from "@/api/posts.api";

const initialState = {
  posts: [],
  post: null,
  loading: true,

  error: {},
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    const res = await allPostsData();
    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
});

export const getPost = createAsyncThunk("posts/getPost", async (id) => {
  try {
    const res = await singlePostData(id);
    return res.data.data;
  } catch (err) {
    throw err.response.data.message;
  }
});

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (formData, { dispatch }) => {
    try {
      console.log(formData);
      const res = await createSinglePost(formData, localStorage.token);
      return res.data;
    } catch (err) {
      console.log(err);
      throw err.response.data.message;
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch }) => {
    try {
      console.log(localStorage.token);
      const res = await deleteSinglePost(id, localStorage.token);
      console.log(res);
      return id;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.post = action.payload;
        state.loading = false;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        const result = action.payload.data._id;
        state.post = action.payload.data;
        localStorage.setItem("post", result);
        state.posts.unshift(action.payload.data);
        state.loading = false;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post._id !== action.payload);
        state.loading = false;
        state.error = true;
        state.post = null;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.error = action.payload;
        state.post = null;
        state.loading = false;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") || action.type.endsWith("/rejected"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/fulfilled") ||
          action.type.endsWith("/rejected"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

// export { getPosts, getPost, addPost, deletePost };
export default postsSlice.reducer;
