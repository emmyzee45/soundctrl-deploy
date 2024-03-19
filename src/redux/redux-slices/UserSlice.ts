import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit"

interface User {
  username: string,
  email: string,
  password: string,
  createdAt: string,
  _id: string,
  isArtist: boolean,
  subscribedUsers: string[],
  subscribers: number
};

interface userState {
    currentUser: User | null,
    isFetching: boolean,
    authenticated: boolean,
    error: boolean
}

const initialState: userState = {
    currentUser: null,
    isFetching: false,
    authenticated: false,
    error: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // GET ALL
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.authenticated = true;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.authenticated = false;
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
