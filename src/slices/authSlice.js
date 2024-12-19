// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   signupData: null,
//   loading: false,
//   token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {
//     setSignupData(state, value) {
//       state.signupData = value.payload;
//     },
//     setLoading(state, value) {
//       state.loading = value.payload;
//     },
//     setToken(state, value) {
//       state.token = value.payload;
//     },
//   },
// });

// export const { setSignupData, setLoading, setToken } = authSlice.actions;

// export default authSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  // Don't use JSON.parse for token
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
      // Store token directly without JSON.stringify
      if (value.payload) {
        localStorage.setItem("token", value.payload);
      } else {
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;