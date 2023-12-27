export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

const reducer = (list, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...list, action.payload].map((item) => ({
        ...item,
        key: item.id,
      }));
    case DELETE_ITEM:
      return list
        .filter((item) => item.id !== action.payload)
        .map((item) => ({ ...item, key: item.id }));
    case UPDATE_ITEM:
      return list
        .map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        )
        .map((item) => ({ ...item, key: item.id }));
    default:
      return action;
  }
};

export default reducer;
