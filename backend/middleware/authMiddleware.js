// Authentication middleware will be added when Firebase Auth is connected.

function authMiddleware(req, res, next) {
  next();
}

module.exports = authMiddleware;
