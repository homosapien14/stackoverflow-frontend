import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadUserData, registerUser, loginUser } from "@/api/auth.api";

const initialState = {
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  isAuthenticated: null,

  loading: true,
  user: null,
};

// Load User
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { dispatch }) => {
    try {
      const res = await loadUserData(localStorage.token);
      console.log(res);
      return res.data;
    } catch (err) {
      dispatch({
        type: "auth/loadUser/rejected",
      });
      throw err;
    }
  }
);

// Register User
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password }, { dispatch }) => {
    try {
      const res = await registerUser(username, password);

      return res.data;
    } catch (err) {
      throw err;
    }
  }
);

// Login User
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { dispatch }) => {
    try {
      const res = await loginUser(username, password);
      return res.data.data;
    } catch (err) {
      throw err;
    }
  }
);

// Logout
export const logout = createAsyncThunk("auth/logout", (_, { dispatch }) => {
  localStorage.removeItem("token");
  return;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.data.token;
        localStorage.setItem("token", state.token);

        console.log(action.payload);
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        console.log("hello");
        localStorage.removeItem("token");
        state.token = null;
        state.isAuthenticated = false;
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

export default authSlice.reducer;
