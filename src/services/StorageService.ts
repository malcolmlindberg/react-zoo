export const LOCALSTORAGE_KEY = "animals";

export const GetList = <T>(): T[] => {
  let LsValue = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(LsValue) as T[];
};

export const save = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
