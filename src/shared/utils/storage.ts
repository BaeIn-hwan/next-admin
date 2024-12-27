const getLocalStorage = (key: string) => {
  const item = window.localStorage.getItem(key);

  if (item) return JSON.parse(item);
};

const setLocalStorage = <T>(key: string, data: T) => window.localStorage.setItem(key, JSON.stringify(data));

const removeLocalStorage = (key: string) => window.localStorage.removeItem(key);

const clearLocalStorage = () => window.localStorage.clear();

const getSessionStorage = (key: string) => {
  const item = window.sessionStorage.getItem(key);

  if (item) return JSON.parse(item);
};

const setSessionStorage = <T>(key: string, data: T) => window.localStorage.setItem(key, JSON.stringify(data));

const removeSessionStorage = (key: string) => window.localStorage.removeItem(key);

const clearSessionStorage = () => window.localStorage.clear();

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  clearSessionStorage,
};
