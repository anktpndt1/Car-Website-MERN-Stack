import * as api from "../api";

//Action Creators
export const getListings = () => async (dispatch) => {
  try {
    const { data } = await api.fetchListings();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const createListing = (list) => async (dispatch) => {
  try {
    const { data } = await api.createListings(list);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};

export const viewList = (id) => async (dispatch) => {
  try {
    const { data } = await api.viewList(id);
    dispatch({ type: "VIEWS", payload: data });
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
