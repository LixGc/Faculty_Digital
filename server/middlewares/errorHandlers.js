//All error from server goes here
function errorHandler(error, req, res, next) {
  let status = 500;
  let message = "Internal Server Error";
  console.log(error, "this is in error handler");
  res.status(status).json({ message });
}

module.exports = errorHandler;
