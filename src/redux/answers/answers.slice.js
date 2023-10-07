import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  allAnswersData,
  createSingleAnswer,
  deleteSingleAnswer,
} from "@/api/answers.api";

export const getAnswers = createAsyncThunk(
  "answers/getAnswers",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const res = await allAnswersData(id);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response.statusText);
    }
  }
);

export const addAnswer = createAsyncThunk(
  "answers/addAnswer",
  async ({ post_id, formData }, { dispatch, rejectWithValue }) => {
    try {
      const body = formData.text;
      const data = { body: body };
      const res = await createSingleAnswer(post_id, data, localStorage.token);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response.statusText);
    }
  }
);

export const deleteAnswer = createAsyncThunk(
  "answers/deleteAnswer",
  async (AnswerId, { dispatch, rejectWithValue }) => {
    try {
      const res = await deleteSingleAnswer(AnswerId, localStorage.token);
      return AnswerId;
    } catch (err) {
      return rejectWithValue(err.response.statusText);
    }
  }
);

const answersSlice = createSlice({
  name: "answers",
  initialState: {
    answers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAnswers.fulfilled, (state, action) => {
        console.log("hello.....");
        state.answers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addAnswer.fulfilled, (state, action) => {
        state.answers.push(action.payload);
      })
      .addCase(deleteAnswer.fulfilled, (state, action) => {
        state.answers = state.answers.filter(
          (answer) => answer.id !== action.payload
        );
      })
      .addCase(deleteAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default answersSlice.reducer;
