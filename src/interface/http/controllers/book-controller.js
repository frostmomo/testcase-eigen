const bookRepository = require('../../../domain/repositories/book-repository');
const memberRepository = require('../../../domain/repositories/member-repository');

const { sendSuccessResponse } = require('../handlers/response');
const { sendErrorResponse } = require('../handlers/exception');

class BookController {
  async getAllBooks(req,res) {
    try {
      const books = await bookRepository.getAllBooks();
      
      return sendSuccessResponse(res, books, "Successfully showing all books",['code','title','author','stock']);
    } catch (error) {
      console.error(error);
      sendErrorResponse(res,error)
    }
  }

  async borrowBook(req, res) {
    try {
      const { bookCode, memberCode } = req.body;
  
      const member = await memberRepository.getMemberByCode(memberCode);
      if (!member) {
        sendErrorResponse(res, new Error('Member not found'));
      }
      if (member.penalty) {
        sendErrorResponse(res, new Error('Member is penalized'));
      }
  
      const borrowedBook = await bookRepository.borrowBook(bookCode, memberCode);
  
      if (!borrowedBook) {
        sendErrorResponse(res, new Error('Book not available for borrowing'));
      }
      return sendSuccessResponse(res,[borrowedBook],"Successfully borrowed the book", ['code','title']);
    } catch (error) {
      console.error(error);
      sendErrorResponse(res, error);
    }
  }

  async returnBook(req, res) {
    try {
      const { bookCode, memberCode } = req.body;
  
      const member = await memberRepository.getMemberByCode(memberCode);
      if (!member) {
        sendErrorResponse(res, new Error('Member not found'));
      }
      if (member.penalty) {
        sendErrorResponse(res, new Error('Member is penalized'));
      }
  
      const returnedBook = await bookRepository.returnBook(bookCode, memberCode);
  
      if (!returnedBook) {
        sendErrorResponse(res, new Error('Book not available for returning'));
      }
      return sendSuccessResponse(res, [returnedBook], 'Successfully returned the book', ['code', 'title']);
    } catch (error) {
      console.error(error);
      sendErrorResponse(res, error);
    }
  }
  
}


module.exports = new BookController();