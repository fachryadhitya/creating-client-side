import axios from "axios";
const baseUrl = `https://evening-bastion-88120.herokuapp.com`;
export const getUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    try {
      const result = await axios.get(baseUrl + `/users`);
      dispatch({
        type: "GET_USER_DONE",
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_ERROR",
      });
    }
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(baseUrl + `/users`, data);
      return result;
    } catch (error) {
      dispatch({
        type: "GET_USER_ERROR",
      });
    }
  };
};

export const loginUser = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(baseUrl + `users/login`, data);
      window.localStorage.setItem("token", result.data.token);

      if (result.data.token) {
        window.location.href = "/profile";
      }
      return result;
    } catch (error) {
      dispatch({
        type: "GET_USER_ERROR",
      });
    }
  };
};

export const profileUser = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    try {
      const result = await axios.get(baseUrl + `/users/profile`, {
        headers: { token: window.localStorage.getItem("token") },
      });
      dispatch({
        type: "GET_USER_DETAIL_DONE",
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_ERROR",
      });
    }
  };
};
