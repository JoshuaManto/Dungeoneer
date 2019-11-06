const cookieController = {};

cookieController.setSSIDCookie = setSSIDCookie;

async function setSSIDCookie(req, res, next) {
  // write code here
  if (res.locals.success) {
    await res.cookie('ssid_dnd', res.locals.id, { httpOnly: true });

    return next();
  } else return next();
}

module.exports = cookieController;
