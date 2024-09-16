function logger(req, res, next) {
    console.log(`Method; ${req.method} - endpoint: ${req.url}, ${Date.now()}`);
    next();
  }
  
  export default logger;
  