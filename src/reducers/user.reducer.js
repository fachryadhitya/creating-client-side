const initialState = {
  data: [],
  isError: false,
  isLoading: false,
  detail: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "GET_USER_DONE":
      return {
        ...state,
        data: action.payload,
        isError: false,
        isLoading: false,
      };

    case "GET_USER_DETAIL_DONE":
      return {
        ...state,
        detail: action.payload,
        isError: false,
        isLoading: false,
      };

    case "GET_USER_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
