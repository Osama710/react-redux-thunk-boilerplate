// set in localStorage function
export const setInLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
};
// get from localStorage function
export const getFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};
// remove from localStorage function
export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const asynchronouslySetInLocal = async (item, data) => {
  const res = localStorage.setItem(`${item}`, data);
  return res;
};
export const asynchronouslyGetFromLocal = async (item) => {
  const res = localStorage.getItem(`${item}`);
  return res;
};
export const asynchronouslyRemoveFromLocal = async (item) => {
  localStorage.removeItem(item);
};
