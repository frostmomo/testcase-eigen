class ExceptionHandler {
    sendErrorResponse(res, error) {
      res.status(500).json({ success: false, message: 'An error occurred.', error: error.message });
    }
  }
  
  module.exports = new ExceptionHandler();