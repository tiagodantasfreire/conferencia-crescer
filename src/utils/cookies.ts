export const getCookie = (cookieName: string) => {
  const cookie: { [key: string]: string } = {};

  if (typeof document !== 'undefined') {
    document.cookie.split(';').forEach((e) => {
      const [key, value] = e.split('=');

      cookie[key.trim()] = value;
    });
  }

  return cookie[cookieName];
};

export const setCookie = (cookieName: string, cookieValue: string) => {
  const date = new Date();

  document.cookie = `${cookieName}=${cookieValue}; path=/; expires=${date.setDate(
    date.getDate() + 1
  )}`;
};

export const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};
