import { createSlice } from "@reduxjs/toolkit";
import APIClient from "../../services/ApiClient";
import { addNotification } from "../Notification";

const initialState = {
  data: null,
  loading: false,
  error: false,
  errorMessage: null,
  success: false,
};

const dogSlice = createSlice({
  name: "dogs",
  initialState: {
    getAll: { ...initialState },
  },
  reducers: {
    getAllDogsStart(state) {
      state.getAll.data = null;
      state.getAll.error = false;
      state.getAll.errorMessage = null;
      state.getAll.loading = true;
      state.getAll.success = false;
    },
    getAllDogsSuccess(state, action) {
      state.getAll.data = action.payload;
      state.getAll.error = false;
      state.getAll.errorMessage = null;
      state.getAll.loading = false;
      state.getAll.success = true;
    },
    getAllDogsFail(state, action) {
      state.getAll.data = null;
      state.getAll.errorMessage = action.payload;
      state.getAll.error = true;
      state.getAll.loading = false;
      state.getAll.success = false;
    },
    getAllDogsReset(state) {
      state.getAll.data = null;
      state.getAll.error = false;
      state.getAll.errorMessage = null;
      state.getAll.loading = false;
      state.getAll.success = false;
    },
  },
});

export const {
  getAllDogsStart,
  getAllDogsSuccess,
  getAllDogsFail,
  getAllDogsReset,
} = dogSlice.actions;

export const getAllDogs = (data) => async (dispatch) => {
  try {
    dispatch(getAllDogsStart());
    const response = await APIClient.get("/images/search/", {
      params: {
        limit: data.limit,
        has_breeds: data.has_breeds,
        page: data.page,
      },
    });
    if (response && response.data) {
      dispatch(getAllDogsSuccess(response.data));
    } else {
      dispatch(getAllDogsFail("Failed to get all dogs!"));
      dispatch(
        addNotification({
          severity: "error",
          message: "Unexpected response from server",
        })
      );
    }
  } catch (error) {
    // handle api error
    dispatch(getAllDogsFail("Internal Server Error"));
    dispatch(
      addNotification({
        severity: "error",
        message: "Internal Server Error",
      })
    );
  }
};

export const clearGetAllDogs = () => async (dispatch) => {
  dispatch(getAllDogsReset());
};

export default dogSlice.reducer;
