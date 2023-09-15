export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
   //"BQA6YYRK0wXf_nhnx6oHz0iUoCiz_rgXxuwVUVdNpmt7pWG_inBque1JsEajFDoF3LyYpJg-2kbykK9gl63BNdjxFzuX_MKk-efsCyP4zq7ABddt-r2YvnUu4PERdVIus0_mQZAzy_xvAI8b_tSBtfkXRh9uzHHA8JsS3euABfx1noVgEqOLws0kcvUDU2k2pBnfrB3KEauSZiYU",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
