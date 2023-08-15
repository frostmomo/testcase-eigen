const { Book,Member } = require('../models');

class BookRepository {
  async getAllBooks() {
    try {
      const books = await Book.findAll({
        where:{
          borrowed: false 
        }
      });
      return books;
    } catch (error) {
      throw error;
    }
  }

  async borrowBook(bookCode, memberCode) {
    try {

      const currentMember = await Member.findOne({
        where: {
          code: memberCode
        },
      });

      if(!currentMember){
        throw new Error('Member not found')
      }

      const bookToBorrow = await Book.findOne({
        where: {
          code: bookCode
        },
      });

      if (!bookToBorrow) {
        throw new Error('Book not found or not available for borrowing');
      }

      if(currentMember.borrowedBooks > 2){
        throw new Error('This member have reached the maximum borrowed books');
      }

      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 7);

      await bookToBorrow.update({
        borrowed: true,
        borrowedBy: currentMember.id,
        borrowedAt: new Date(),
        stock: bookToBorrow.stock-1,
      });

      await currentMember.update({
        borrowedBooks:  currentMember.borrowedBooks+1,
        penaltyEndDate: returnDate,
      });

      return bookToBorrow;
    } catch (error) {
      throw error;
    }
  }

  async returnBook(bookCode, memberCode) {
    try {
      const member = await Member.findOne({
        where: {
          code: memberCode,
        },
      });
  
      if (!member) {
        throw new Error('Member not found');
      }

      const bookToReturn = await Book.findOne({
        where: {
          code: bookCode,
          borrowedBy: member.id,
          borrowed: true,
        },
      });
  
      if (!bookToReturn) {
        throw new Error('Book not found or not borrowed by current member');
      }
  
  
      if (member.penaltyEndDate && member.penaltyEndDate <= new Date()) {
        // If penalty end date is today or earlier, set penalty to true and update penalty end date
        await member.update({
          penalty: true,
          penaltyEndDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000), // Today + 3 days
        });
      }
  
      // Update book and member
      await Promise.all([
        bookToReturn.update({
          borrowed: false,
          borrowedBy: null,
          borrowedAt: null,
          stock: bookToReturn.stock + 1,
        }),
        member.update({
          borrowedBooks: member.borrowedBooks - 1,
          penaltyEndDate: null,
        }),
      ]);
  
      return bookToReturn;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new BookRepository();
