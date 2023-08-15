class ResponseHandler {
    sendSuccessResponse(res, data, message, includedProperties = []) {
      const responseData = data.map(item => {
        const responseItem = {};
        includedProperties.forEach(prop => {
          responseItem[prop] = item[prop];
        });
        return responseItem;
      });
  
      res.json({ success: true, message: message, data: responseData });
      // res.json(responseData);
    }
  }
  
  module.exports = new ResponseHandler();