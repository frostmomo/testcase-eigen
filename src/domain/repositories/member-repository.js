const { Op } = require('sequelize');
const { Member } = require('../models');

class MemberRepository {
  async getAllMembers() {
    try {
      const members = await Member.findAll();
      return members;
    } catch (error) {
      throw error;
    }
  }

  async getMemberByCode(memberCode) {
    try {
      const member = await Member.findOne({
        where: { code: memberCode }
      });
      return member;
    } catch (error) {
      throw error;
    }
  }

  async getMembersWithBorrowedBooks() {
    try {
      const members = await Member.findAll({
        where: {
          borrowedBooks: {
            [Op.gt]: 0
          }
        }
      });
      return members;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new MemberRepository();
