const createCookie = (cookieName, cookieValue, dateToExpire = 1) => {
  let date = new Date(Date.now() + dateToExpire * 24 * 60 * 60 * 1000);
  //  = new Date();
  // date.setTime(date.now() + hourToExpire * 60 * 60 * 1000);
  document.cookie =
    cookieName + " = " + cookieValue + "; expires = " + date.toGMTString();
};

const getCookie = () => {
  let cookie = document.cookie.split(";");
  return cookie;
};

export { createCookie, getCookie };
