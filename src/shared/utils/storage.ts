const getLocalStorage = (key: string) => window.localStorage.getItem(key);

const getSessionStorage = (key: string) => window.sessionStorage.getItem(key);

export { getLocalStorage, getSessionStorage };
