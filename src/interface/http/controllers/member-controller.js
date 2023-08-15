const memberRepository = require('../../../domain/repositories/member-repository');

const { sendSuccessResponse } = require('../handlers/response');
const { sendErrorResponse } = require('../handlers/exception');

class MemberController {
  async getAllMembers(req,res) {
    try {
      const members = await memberRepository.getAllMembers();
      return sendSuccessResponse(res,members,"Successfully showing all members",['code','name']);
    } catch (error) {
      console.error(error);
      sendErrorResponse(res,error)
    }
  }

  async getAllMemberWithBorrowedBooks(req,res) {
    try {
      const members = await memberRepository.getMembersWithBorrowedBooks();
      return sendSuccessResponse(res,members,"Successfully showing all members with total of borrowed books",['name','borrowedBooks']);
    } catch (error) {
      console.error(error);
      sendErrorResponse(res,error)
    }
  }
}

module.exports = new MemberController();
